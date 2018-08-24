/**
 * @infor 对象相关工具类
 * @user CC
 * @date 2018-03-22 20:48:14
 */


/**
 * 合并对象
 * @param  {target} Object 合并后的目标对象
 * @param  {args}   List   合并的对象集合
 * @return {Object}        合并后的对象
 */
export const merge = (target, ...args) => {
	args.forEach((item) => {
		for (let prop in item) {
			// 判断属性是否为本对象属性
			if (item.hasOwnProperty(prop)) {
				let value = item[prop]
				if (value !== undefined) {
					target[prop] = value
				}
			}
		}
	})
	
	return target
}


export default {
	merge
}