/**
 * @infor Load
 * @user CC
 * @date 2018-07-26 16:57:58
 */

import Vue from 'vue'
import mainVue from '@/components/common/Loading'
import { merge } from '@/utils/objectUtils'

// 获取构造器
const componentConstructor = Vue.extend(mainVue)

// 默认配置
const defaults = {
	load: false,
}

const main = (options = {load: true}) => {
	// SSR状态下，无法使用js加载
	if (Vue.prototype.$isServer) {
		return
	}

	// 内存缓存判断是否有加载条
	if (window.isLoad) return
	window.isLoad = true

	// 已经存在加载框，不再显示载框
	var nodeList = document.querySelectorAll(".gc-default-load")
	if (nodeList.length > 0) return

	// 合并默认和用户配置
	options = merge({}, defaults, options)

	let parent = document.body
	let instance = new componentConstructor({
		el: document.createElement('div'),
		data: options,
	})
	parent.appendChild(instance.$el)
	return instance

}

export default main