
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'types',
      fileName: 'types',
    }
  },
  plugins: [dts({
    // rollupTypes: true,
    // outDir: 'toto',
    outDir: ['dist'],
    // include: ['src/types/*.d.ts'],
    // declarationOnly: true,
    copyDtsFiles: true,
    // insertTypesEntry: true,
    tsconfigPath: "./tsconfig.json",
    // staticImport: true
  })]
})