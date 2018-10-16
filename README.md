# cottm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1.项目中遇到问题
	
	1.1 打包问题

		1.1.1  vue打包css 图片路径不对问题问题

		解决方法 ：

			修改 utils.js 中的 if(options.axtract){...}可解决build css bg img 加载路径不对问题

			 if (options.extract) {
		        return ExtractTextPlugin.extract({
		        use: loaders,
		        publicPath: '../../',         //解决 build css bg img 加载路径不对问题  
		        fallback: 'vue-style-loader'
		      })
		    } else {
		      return ['vue-style-loader'].concat(loaders)
		    }

		    参考： https://blog.csdn.net/qq_22648203/article/details/79539537

		1.1.2  vue 打包上线，页面空白问题

		解决方法：

		  1. config / index.js 中  assetsPublicPath: '',
		  2. router中  base: '',
		  3. router中 'mode': 'history',需要注释

	1.2 跨越问题

		解决方法：

			方法1. 修改后天请求头部	  
			
			