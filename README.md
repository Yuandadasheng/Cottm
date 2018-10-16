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

项目链接：[project](http://www.cottm.cn/dist/index.html)

项目总结：

采用vue + vuex + bootstrap-Vue + webpack + vue-router + axios + stylus + vue-video 

#### 项目中遇到问题
	
#####  1.打包问题

######  1.1 vue打包css 图片路径不对问题问题

    解决方法 ：

    修改 utils.js 中的 if(options.axtract){...}可解决build css bg img 加载路径不对问题
      
``` javaScript
   if (options.extract) {
        return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../../',         //解决 build css bg img 加载路径不对问题  
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```
		    参考： https://blog.csdn.net/qq_22648203/article/details/79539537

###### 1.1.2  vue 打包上线，页面空白问题

    解决方法：
``` bash
  1. config / index.js 中  assetsPublicPath: '',
  2. router中  base: '',
  3. router中 'mode': 'history',需要注释
```
##### 	1.2 跨越问题

    解决方法：

    方法1. 修改后天请求头部	  

    方法2. 
        config --> index.js  
        将 proxyTable : {}

    修改为 
```javascript
    proxyTable: {
              '/api': {
                  target: 'http://www.cottm.cn/',
                  changeOrigin: true,
                  pathRewrite: {
                      '^/api': 'http://www.cottm.cn/'
                  }
              }
          },
```
    axios 请求：
```javascript
  axios({

    method: 'get',
     baseURL : '/api',
    url: 'test/news.asp' //http://www.cottm.cn/test/news.asp

  }).then(
    (res)=>{

      })
```
    缺点： 打包上线时，路径需要修改
    
    方法3. 
    在方法2 基础上修改	
    config --> dev.env.js 	  
```javascript
  module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_HOST: '"/api"' // 配置代理路径的符号，增加的内容
  })
```
    config --> prod.env.js
```javascript
    module.exports = {
    NODE_ENV: '"production"',
    API_HOST: '"http://www.cottm.cn/"' // 生产环境地址，增加的内容
  }
```
    axios 请求：
```javascript
    axios({

      method: 'get',
      url: process.env.API_HOST + 'test/news.asp'  //http://www.cottm.cn/test/news.asp

    }).then(
      (res)=>{})
```
#####   1.3 改变路由中参数做请求
		
    解决方法：
```javascript
beforeRouteEnter (to, from, next) {


      let AxiosU =process.env.API_HOST + '2019/test/news_details_2.asp?id='+ to.query.id
      // this.AxiosUrl ='2019/test/news_details_2.asp?id='+this.$route.query.id
        axios({
          method: 'get',
          // baseURL : '/api',
          url: AxiosU ,

        }).then(
          (res)=>{
            next(vm => vm.NewsListHtml = JSON.parse(res.data))

          }
        )
  },
  beforeRouteUpdate (to, from, next) {
     let AxiosU =process.env.API_HOST + '2019/test/news_details_2.asp?id='+ to.query.id
      // this.AxiosUrl ='2019/test/news_details_2.asp?id='+this.$route.query.id
        axios({
          method: 'get',
          // baseURL : '/api',
          url: AxiosU ,

        }).then(
          (res)=>{
            this.NewsListHtml = JSON.parse(res.data)
              next()
          }
        )


  },	
```	
