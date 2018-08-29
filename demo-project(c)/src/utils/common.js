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

export default{
	getServerHost: getServerHost,
	isProduction: isProduction,
}


