/** @type {import('postcss-load-config').Config} */
const config = {
  basePath:'/inisiasi-bumi',
  output:"export",
  exported:true,
  plugins: {
    tailwindcss: {},
  },
  images: {
    unoptimized: true,
  },
};

export default config;
