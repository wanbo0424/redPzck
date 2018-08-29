// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/App'
import fastclick from 'fastclick'
import commonComponents from '@/components/common/js'
import { isProduction } from '@/utils/common'

Vue.config.productionTip = false
Vue.use(commonComponents)

fastclick.attach(document.body)

// 非正式环境，设置 vconsole
if (!isProduction()) {
	let Vconsole = require('vconsole')
	new Vconsole()
	console.log(`当前环境为：${process.env.NODE_ENV}`)
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
