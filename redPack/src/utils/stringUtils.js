/**
 * @infor String 工具
 * @user CC
 * @date 2018-08-13 17:45:00
 */

// style标签正则
const C_specialCharsRegexp = /([\:\-\_]+(.))/g
// 火狐浏览器style标签前缀正则
const C_mozHackRegexp = /^moz([A-Z])/

/**
 * 样式名转驼峰写法，带火狐前缀转换
 * @param  {String} name 样式名
 * @return {String}      驼峰格式样式名
 */
export const styleName2CamelCase = (name) => {
	return name.replace(C_specialCharsRegexp, function(_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter
	}).replace(C_mozHackRegexp, 'Moz$1')
}

export default {
	styleName2CamelCase,
}