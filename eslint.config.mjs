import antfu from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({
  vue: true,
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
})
