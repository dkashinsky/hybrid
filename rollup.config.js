import html from 'rollup-plugin-html';

export default {
  input: 'src/ajs/index.js',
  output: {
    dir: 'dist/ajs',
    format: 'es',
  },
  plugins: [
    html({ include: '**/*.html' }),
  ],
};
