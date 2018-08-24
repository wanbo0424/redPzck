/**
 * @infor 通用工具
 * @user CC
 * @date 2018-08-21 11:03:42
 */

import { GC_productionAddress, GC_testAddress, GC_productionEnv } from './globalConstants'

/**
 * 返回当前环境下的地址路径
 * @return {String} 地址
 */
export const getServerHost = () => {
	return isProduction() ? GC_productionAddress : GC_testAddress
}

/**
 * 返回当前环境是否是正式环境
 * @return {Boolean} 返回当前环境是否是正式环境
 */
export const isProduction = () => {
	return process.env.NODE_ENV === GC_productionEnv
}
/**
 * 
 * @param {String} 请求参数的value 
 */
export const geturl = (name)  => {
	var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
	return "";
  }
/**
 * 
 * @param {Boolean} 检查手机格式是否正确 
 */
export const isPhoneNo = (phone) => {
    var pattern = /^1\d{10}$/;
    return pattern.test(phone);
}
export default{
	getServerHost: getServerHost,
	isProduction: isProduction,
	geturl:geturl,
	isPhoneNo:isPhoneNo
}


