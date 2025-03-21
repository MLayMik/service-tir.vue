import antfu from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({
  vue: true,
  ignores: ['README.md'],
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    ...eslintPluginReadableTailwind.configs.warning.rules,
    ...eslintPluginReadableTailwind.configs.error.rules,
    'readable-tailwind/multiline': ['warn', { printWidth: 80 }],
    'max-len': ['warn', { code: 80 }],
  },
})
