/**
 * @infor 全局常量
 * @user CC
 * @date 2018-08-21 15:27:31
 */

// 生产地址
export const GC_productionAddress 	 = 'https://pay.fangte.com/'
// 测试地址
export const GC_testAddress 		 = 'https://paytest.fangte.com/'
// 生产标识符
export const GC_productionEnv 		 = 'production'

// 默认弹出框层级
let G_styleIndex = 20180822

export const getZIndex = function () {
	return G_styleIndex += 10
}