import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig, mergeConfig } from 'vitest/config'

const isStorybook = process.argv[1]?.includes('storybook')

export default mergeConfig(
  defineConfig({
    plugins: [!isStorybook && !process.env.VITEST && remix()],
  }),
  defineVitestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.test.{ts,tsx}'],
      setupFiles: ['testSetup.ts'],
      coverage: {
        provider: 'v8',
        include: ['app'],
      },
    },
  })
)
