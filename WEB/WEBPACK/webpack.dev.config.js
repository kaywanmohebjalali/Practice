const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const  {ModuleFederationPlugin}  = require('webpack').container;
module.exports={
    // entry:'./src/index.js',
    entry:{

        "register":"./src/register/register.js",
        "product":"./src/products/product.js"

    },
    output:{
        // filename:'main-[contenthash].js',
        filename:'[name]-[contenthash].js',
        path:path.resolve(__dirname, './dist'),
        assetModuleFilename:'images/[name][ext]'
    },
    mode:'development',

      devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        devMiddleware: {
         
            writeToDisk: true,
          },
      },
      

    plugins: [
        new MiniCssExtractPlugin({
        // filename:"css/test-[contenthash].css"
        filename:"css/[name]-[contenthash].css"
    }),

    new CleanWebpackPlugin(),

    // new HtmlWebpackPlugin({
    //     template:"index.html",

    // }),

    new HtmlWebpackPlugin({
        filename:"register.html",
        chunks:["register"],
        template:"./src/register/register.html"
        
    }),

    new HtmlWebpackPlugin({
        filename:"product.html",
        chunks:["product"],
        template:"./src/products/product.html"
        
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

   




};