/**
 * @infor DOM工具
 * @user CC
 * @date 2018-08-13 11:33:46
 */

import Vue from 'vue'
import { styleName2CamelCase } from './stringUtils'

// 是否ssr
const isServer = Vue.prototype.$isServer
// IE版本
const ieVersion = isServer ? 0 : Number(document.documentMode)

/**
 * 判断某节点是否存在某class
 * @param  {Dom}    el  节点对象
 * @param  {String} cls class名，只支持一个class
 * @return {Boolean}    true/存在，false/不存在
 */
export const hasClass = (el, cls) => {
	if (!el || !cls) return false
	if (cls.indexOf(' ') !== -1) throw new Error('class不能有空格')
	if (el.classList) {
		return el.classList.contains(cls)
	} else {
		return (` ${el.className} `).indexOf(` ${cls} `) > -1
	}
}

/**
 * 为某节点添加class
 * @param  {Dom}    el  节点对象
 * @param  {String} cls class名，多个用' '分隔
 * @return {void}
 */
export const addClass = (el, cls) => {
	if (!el) return
	let currClass = el.className
	let classes = (cls || '').split(' ')
	classes.forEach((item) => {
		if (!item) return
		if (el.classList) {
			el.classList.add(item)
		} else if (!hasClass(el, item)) {
			currClass += ` ${item}`
		}
	})

	if (!el.classList) el.className = currClass
}

/**
 * 对某节点进行移除class操作
 * @param  {Dom} el  节点对象
 * @param  {String} cls class名，多个使用' '分隔
 * @return {void}
 */
export const removeClass = (el, cls) => {
	if (!el || !cls) return
	let currClass = ` ${el.className} `
	let classes = cls.split(' ')
	classes.forEach((item) => {
		if (!item) return
		if (el.classList) {
			el.classList.remove(item)
		} else if (hasClass(el, item)) {
			currClass = currClass.replace(` ${item} `, ' ')
		}
	})
	if (!el.classList) el.className = currClass.trim()
}

/**
 * 绑定事件
 * @param  {Dom}      el      节点对象
 * @param  {String}   event   事件类型
 * @param  {Function} handler 触发事件
 * @return {void}
 */
export const on = (() => {
	if (!isServer && document.addEventListener) {
		return (el, event, handler) => {
			if (el && event && handler) {
				// false 事件句柄在冒泡阶段执行
				el.addEventListener(event, handler, false)
			}
		}
	} else {
		return (el, event, handler) => {
			if (el && event && handler) {
				// ie8或更早 兼容性写法
				el.attachEvent(`on${event}`, handler)
			}
		}
	}
})()

/**
 * 解绑事件
 * @param  {Dom}      el      节点对象
 * @param  {String}   event   事件类型
 * @param  {Function} handler 触发事件
 * @return {void}
 */
export const off = (() => {
	if (!isServer && document.removeEventListener) {
		return (el, event, handler) => {
			if (el && event) {
				el.removeEventListener(event, handler, false)
			}
		}
	} else {
		return (el, event, handler) => {
			if (el && event) {
				// ie8或更早 兼容性写法
				el.detachEvent(`on${event}`, handler)
			}
		}
	}
})()

/**
 * 绑定一次性事件
 * @param  {Dom}      el      节点对象
 * @param  {String}   event   事件类型
 * @param  {Function} handler 触发事件
 * @return {void}
 */
export const once = (el, event, handler) => {
	// 闭包问题，该处不能使用箭头函数
	let listener = function () {
		if (handler) {
			handler.apply(this, arguments)
		}
		off(el, event, listener)
	}
	on(el, event, listener)
}

/**
 * 获取某节点最终样式
 * @param  {Dom}    el        节点对象
 * @param  {String} styleName css样式名
 * @return {String}           css样式值
 */
export const getStyle = (() => {
	if (ieVersion < 9) {
		return (el, styleName) => {
			if (isServer) return
			if (!el || !styleName) return null
			styleName = styleName2CamelCase(styleName)
			// IE8仅支持styleFloat
			if (styleName === 'float') {
				styleName = 'styleFloat'
			}
			try {
				switch (styleName) {
					case 'opacity':
						try {
							return el.filters.item('alpha').opacity / 100
						} catch (e) {
							return 1.0
						}
					default:
						// el.currentStyle IE8 不支持 getComputedStyle 但该属性返回值和 getComputedStyle 基本一致
						return el.style[styleName] || el.currentStyle ? el.currentStyle[styleName] : null
				}
			} catch (e) {
				return el.style[styleName]
			}
		}
	} else {
		return (el, styleName) => {
			if (isServer) return
			if (!el || !styleName) return null
			styleName = styleName2CamelCase(styleName)
			// float 是 JS 的保留关键字。根据 DOM2 级的规范，取元素的 float 的时候应该使用 cssFloat
			if (styleName === 'float') {
				styleName = 'cssFloat'
			}
			try {
				// window == document.defaultView [除IE8外都指向同一变量]
				// getComputedStyle(元素, [伪类]) 返回 CSSStyleDeclaration
				// 该方法读取的样式是最终样式，只支持读，修改样式需要通过el.style
				let computed = document.defaultView.getComputedStyle(el, '')
				return el.style[styleName] || computed ? computed[styleName] : null
			} catch (e) {
				return el.style[styleName]
			}
		}
	}
})()

/**
 * 为某节点添加样式
 * @param  {Dom}           el        节点对象
 * @param  {String/Object} styleName css样式名[当为对象值时取key做名，value做值]
 * @param  {String}        value     css样式值
 * @return {void}
 */
export const setStyle = (el, styleName, value) => {
	if (!el || !styleName) return
	if (typeof styleName === 'object') {
		for(let key in styleName) {
			if (styleName.hasOwnProperty(key)) {
				setStyle(el, key, styleName[key])
			}
		}
	} else {
		styleName = styleName2CamelCase(styleName)
		if (styleName === 'opacity' && ieVersion < 9) {
			el.style.filter = isNaN(value) ? '' : `alpha(opacity=${value * 100})`
		} else {
			el.style[styleName] = value
		}
	}
}

export default {
	addClass,
	hasClass,
	removeClass,
	on,
	off,
	once,
	getStyle,
	setStyle,
}