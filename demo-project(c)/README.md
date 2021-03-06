# 前端规范

##备注
1. 缩进: 制表符，4字符
2. js: 增加表头
```
/**
 * @infor 文件描述
 * @user 作者
 * @date 2018-07-26 16:57:58 [创建日期]
 */
```

##js

###vue 书写顺序
	name:		[组件名，公共组件时必填，名称同文件名，驼峰写法]
	inheritAttrs[]
	mixins		[混合器]
	components	[组件]
	props		[]
	data		[数据 - 使用驼峰写法，需注释数据用途]
	computed	[计算属性]
	methods		[函数钩子]
	beforeCreate[生命周期 - 实例创建前]
	created		[生命周期 - 实例创建后 - 进行ajax请求异步数据的获取、初始化数据]
	beforeMount	[]
	mounted
	beforeUpdate
	updated
	activated
	deactivated
	beforeDestroy
	destroyed
	errorCaptured
###变量命名
	变量：		驼峰
	全局变量：	G_变量名
	常量：		C_变量名
###函数命名
	驼峰 [函数名() {}]
	例：
		/**
		 * [函数描述]
		 * @param  {Object} target 合并后的目标对象
		 * @param  {[参数类型]}   [参数名]   [参数描述]
		 * @return {Object}        [返回值描述]
		 */
		const componentConstructor = (target) => {
			return target
		}

##css
	
### 禁止使用的CSS样式名
	.gc- 开头样式




# 前端公用组件
	挂载原型需在main.js中调用
	import commonComponents from '@/components/common'
	Vue.use(commonComponents)
## Loading.vue
	描述： 通用圆环加载框，带 “加载中...” 文字
	调用方法：
		let load = Vue.prototype.$load() [this.$load()]	// 开启 组件外调用，组件内调用 返回当前组件实例
		load.closeLoad()	// 关闭
## Overlay.vue
	描述： 背景阴影层
	调用方法：
		<overlay
			:show="show"			// 显示/隐藏
			:index="10086"			// z-index层级，不传从 globalConstants 取最大值
			@click="handlerClick"	// 点击事件，返回 $event 句柄
		>
		</overlay>
## Popup.vue
	描述： 空白弹出层 [目前默认从下弹出]
	调用方法：
		<popup
			:show="isShow"			// 显示/隐藏
			@touch-overlay="close"	// 点击阴影背景事件，返回 $event 句柄
		>
			<slot></slot>
		</popup>


# 项目结构

	|--components(组件)
	|	└──business(业务组件)
	|	└──common(公用组件)
	|
	|--page(入口)
	|	└──name(按主组件名新建文件夹)
	|		└──name.vue(主组件)
	|		└──index.html(基础html)
	|		└──main.js(入口文件)
	|
	|--router(路由，按不同主组件建立不同路由)
	|
	|--services(服务端请求接口)
	|
	|--scss(scss样式文件)
	|	└──mixin(公用混合器)
	|
	|--utils(公用工具类)
	|	└──globalConstants.js(全局常量存储)




