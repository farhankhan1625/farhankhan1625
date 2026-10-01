import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// GitHub Pages: site lives at /<repo-name>/. Repo is "farhankhan1625" -> base below. Change if you rename the repo.
export default defineConfig({plugins:[react()],base:'/farhankhan1625/'});
