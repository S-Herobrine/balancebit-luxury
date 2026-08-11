import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// NOTE: If deploying to a GitHub Pages *project* site
// (https://username.github.io/repo-name/), set base to '/repo-name/'.
// If deploying to a *user/org* site (https://username.github.io/) or
// a custom domain, leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/balancebit-luxury/',
})
