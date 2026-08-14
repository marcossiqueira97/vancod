import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        // Espelha os `paths` do tsconfig: @vancod/ui é consumido como fonte TS crua
        // (fora da raiz do projeto) e seus imports (react/clsx/tailwind-merge) não
        // resolvem por node_modules a partir de packages/vancod-ui.
        '@vancod/ui': path.resolve(__dirname, '../packages/vancod-ui/src/index.ts'),
        '@vancod/ui/tokens': path.resolve(__dirname, '../packages/vancod-ui/src/tokens/index.css'),
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        'clsx': path.resolve(__dirname, 'node_modules/clsx'),
        'tailwind-merge': path.resolve(__dirname, 'node_modules/tailwind-merge'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
