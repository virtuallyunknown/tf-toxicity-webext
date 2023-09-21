import { build } from 'esbuild';
import { copyFile } from 'node:fs/promises';

await build({
    entryPoints: ['./src/extension.ts'],
    outfile: './dist/extension.js',
    bundle: true,
    minify: false,
    target: 'es2020',
    platform: 'browser',
    format: 'iife'
});

await copyFile('./src/manifest.json', './dist/manifest.json');