import resolve from 'rollup-plugin-node-resolve';

export default [{
  input: 'main-bundle.js',
  treeshake: false,
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  plugins: [
    resolve()
  ]
}];
