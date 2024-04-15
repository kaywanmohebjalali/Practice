const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const  { ModuleFederationPlugin }  = require('webpack').container;

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main-[contenthash].js',
        path:path.resolve(__dirname, './dist'),
        assetModuleFilename:'images/[name][ext]'
    },

    mode:'production',

    plugins: [new MiniCssExtractPlugin({
        filename:"css/test-[contenthash].css"
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
        template:"index.html",
        publicPath:"./dist/"
    }),

 

    new ESLintPlugin(),

    new ModuleFederationPlugin({
        name:"IMageApp",
        
        exposes:{
            "./ImageModule":"./src/components/header/Header.js"
        },
        filename:"remoteEntry.js"
    })


],

    module:{
        rules:[
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {
        test: /\.scss$/i,
                // use: ["style-loader", "css-loader", "sass-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
              

            },
            {
                test: /\.(png|jpg|svg|jpeg)$/i,
                type: 'asset/resource',
     

            },
            {
                test:/\.(eot|ttf|woff|woff2)$/i,
                type:'asset/inline'
                
            },
            {
                test:/\.js$/i,
                exclude:/node_modules/,
                use:["babel-loader"]
                
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
};