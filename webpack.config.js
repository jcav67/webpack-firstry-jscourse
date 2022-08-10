const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    output:{
        clean: true
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                loader: "html-loader",
                options:{
                    sources:false
                }
            }
        ]
    },
    optimization:{},
    plugins: [new HtmlWebpackPlugin({
        title: 'Prueba de webpack',
        //filename: cambiar el nombre del archivo,
        template:'./src/index.html'
    })]
};