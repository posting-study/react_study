const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/code.js', //웹팩으로 번들링할 파일 지정
    output: { //번들링된 결과를 dist/code.bundle.js파일로 저장
        path: path.resolve(__dirname, 'dist'),
        filename: 'code.bundle.js',
    },
    module: {
        rules: [{test: /\.js$/, use: 'babel-loader'}], //js 파일을 babel-loader가 처리하도록 설정
    },
    optimization: {minimizer: []},
};