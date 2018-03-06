import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: [
		'webpack/hot/dev-server', path.join(__dirname, 'example', 'src', 'index.tsx')
	],
	module: {
		rules: [
			{
				test: /\.less?$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "css", "less"]
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		inline: true, //设置为true，代码有变化，浏览器端刷新。
		// open: true, //:在默认浏览器打开url(webpack-dev-server版本> 2.0)
		port: "9000",//页面端口
		// compress: true, //使用gzip压缩
		host: 'localhost',//ip地址，同时也可以设置成是localhost,
		progress: true, //让编译的输出内容带有进度和颜色
		historyApiFallback: true, //回退:支持历史API。
		contentBase: "./dist", //本地服务器所加载的页面所在的目录
		// proxy: {
		// 	'*': {
		// 		target: 'http://127.0.0.1:80', //跨域Ip地址
		// 		secure: false
		// 	}
		// }
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: path.join(__dirname, 'dist/index.html'), //打包后的html存放路径，也是从distPath开始
			template: './index.html', //文件模板，就是打包前的html文件
			inject: true, //可以对head和body做修改
			minify: { //压缩HTML
				removeComments: true,
				collapseWhitespace: false
			},
			hash: true, //版本号，打出来的html中对css和js的引用自带版本号
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};