/**
 * @infor Load
 * @user CC
 * @date 2018-07-26 16:57:58
 */

import Vue from 'vue'
import mainVue from '@/components/common/tips'
import { merge } from '@/utils/objectUtils'

// 获取构造器
const componentConstructor = Vue.extend(mainVue)

// 默认配置
const defaults = {
    show: false,
    title:''
}

const main = (options = {show: true,title:'手机号'}) => {

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