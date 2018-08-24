/**
 * @infor 公用组件js封装
 * @user CC
 * @date 2018-06-26 11:52:22
 */

const files = require.context('.', false, /\.js$/)

export default {
	install(Vue,options) {
		files.keys().forEach((key) => {
			if (key === './index.js') return

			let utilsName = key.replace('./', '').replace('.js', '')

			Vue.prototype[`\$${utilsName}`] = files(key).default
		})
	}
}