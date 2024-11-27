import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/, // Process .js, .jsx, .ts, .tsx files
  },
});
