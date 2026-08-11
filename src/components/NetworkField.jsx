import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A slow-drifting field of nodes with faint connective lines —
// reads as "systems / networks / infrastructure" without being literal.
export default function NetworkField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // --- Nodes ---
    const NODE_COUNT = 90;
    const positions = new Float32Array(NODE_COUNT * 3);
    const nodeData = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodeData.push({
        base: new THREE.Vector3(x, y, z),
        speed: 0.15 + Math.random() * 0.25,
        offset: Math.random() * Math.PI * 2,
      });
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMat = new THREE.PointsMaterial({
      color: 0xc9a876,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // --- Connective lines (nearest neighbours, static topology) ---
    const lineVerts = [];
    const MAX_DIST = 2.6;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const a = nodeData[i].base;
        const b = nodeData[j].base;
        const d = a.distanceTo(b);
        if (d < MAX_DIST) {
          lineVerts.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(lineVerts), 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x5b6ef5,
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const group = new THREE.Group();
    group.add(points, lines);
    scene.add(group);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        group.rotation.y = t * 0.035;
        group.rotation.x = Math.sin(t * 0.08) * 0.05;

        // gentle node drift
        const posAttr = pointsGeo.attributes.position;
        for (let i = 0; i < NODE_COUNT; i++) {
          const nd = nodeData[i];
          posAttr.array[i * 3 + 1] =
            nd.base.y + Math.sin(t * nd.speed + nd.offset) * 0.15;
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      pointsGeo.dispose();
      lineGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.7,
        maskImage:
          'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)',
      }}
    />
  );
}
