module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    outputDir: process.env.NODE_ENV === 'production'
        ? 'docs' // GitHub Pages output dir.
        : 'dist', // Default development.
    publicPath: process.env.NODE_ENV === 'production'
        ? '/asset-bundle-dependency-viewer/'
        : '/'
};