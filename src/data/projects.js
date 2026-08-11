export const PROJECTS = [
  {
    id: 'calmmind',
    title: 'CalmMind',
    category: 'Healthcare · Mental Health',
    summary: 'A therapy-practice platform built around trust \u2014 booking, intake forms, and a directory of licensed therapists.',
    detail:
      'CalmMind needed to feel calm before a single word of copy loaded. We built a soft, low-contrast interface with a booking flow that gets a new client to a confirmed session in three steps, plus a secure intake form that syncs directly to the practice\u2019s EHR system.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2025',
  },
  {
    id: 'safe-haven',
    title: 'Safe Haven Trauma Care',
    category: 'Healthcare · Neurodiversity',
    summary: 'A premium therapist website designed for trauma-informed care, built to feel private and unhurried.',
    detail:
      'The brief was simple: nothing about this site should feel clinical or cold. We used warm neutral tones, generous whitespace, and copy reviewed by the practice\u2019s clinical team to make sure the tone matched the sensitivity of the subject.',
    stack: ['Next.js', 'Sanity CMS', 'Framer Motion'],
    year: '2025',
  },
  {
    id: 'focus-thrive',
    title: 'Focus \u2014 Thrive',
    category: 'Healthcare · ADHD & Autism',
    summary: 'A neurodiversity-affirming platform for an ADHD and autism specialist, built for legibility and low sensory load.',
    detail:
      'Every design decision here was run through an accessibility lens first: high-contrast type, no autoplaying motion, and a layout that reduces cognitive load for neurodivergent visitors without feeling clinical or reductive.',
    stack: ['React', 'Tailwind', 'Contentful'],
    year: '2024',
  },
  {
    id: 'apex-retail',
    title: 'Apex Retail Storefront',
    category: 'E-commerce · Retail',
    summary: 'A full storefront rebuild for a Canadian retail chain, cutting page load times by 60%.',
    detail:
      'Apex came to us with a slow, dated storefront losing conversions on mobile. We rebuilt the frontend on a headless commerce stack, restructured checkout to three fields, and rebuilt product imagery pipelines for fast, responsive delivery.',
    stack: ['Next.js', 'Shopify Headless', 'Cloudflare'],
    year: '2025',
  },
  {
    id: 'greenstart',
    title: 'GreenStart',
    category: 'Startup · Mobile',
    summary: 'A sustainability-tracking mobile app built from scratch for a UK climate startup.',
    detail:
      'GreenStart needed an MVP fast enough to raise a seed round on. We shipped a cross-platform app in eight weeks covering carbon tracking, team leaderboards, and a rewards system, architected to scale post-funding.',
    stack: ['React Native', 'Firebase', 'Node.js'],
    year: '2024',
  },
  {
    id: 'techvista',
    title: 'TechVista Platform Modernization',
    category: 'Enterprise · Cloud',
    summary: 'A legacy monolith migrated to microservices on AWS with zero downtime during cutover.',
    detail:
      'TechVista\u2019s platform had grown past what its original architecture could support. We planned a phased migration to containerized microservices on AWS, with a strangler-fig pattern that let us cut over piece by piece without a maintenance window.',
    stack: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    year: '2024',
  },
];
