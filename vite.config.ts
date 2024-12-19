import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig as defineVitestConfig, mergeConfig } from 'vitest/config'

const isStorybook = process.argv[1]?.includes('storybook')

export default mergeConfig(
  defineConfig({
    plugins: [
      !isStorybook &&
        !process.env.VITEST &&
        remix({
          future: {
            v3_fetcherPersist: true,
            v3_lazyRouteDiscovery: true,
            v3_relativeSplatPath: true,
            v3_singleFetch: true,
            v3_throwAbortReason: true,
          },
        }),
      tsconfigPaths(),
    ],
  }),
  process.env.VITEST
    ? defineVitestConfig({
        test: {
          globals: true,
          environment: 'jsdom',
          include: ['**/*.test.{ts,tsx}'],
          setupFiles: ['testSetup.ts'],
          coverage: {
            provider: 'v8',
            include: ['app'],
            exclude: ['**/*/*.stories.{ts,tsx}', '**/*/*.test.{ts,tsx}'],
            thresholds: {
              lines: 80,
              functions: 80,
              branches: 80,
              statements: 80,
            },
          },
        },
      })
    : {}
)
