
module.exports = {
    entry: './src/App.tsx',
    rules: [

            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }
    ]
}