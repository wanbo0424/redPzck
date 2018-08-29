/**
 * @infor z-index 混合器，从本工具取得值为等级最大
 * @user CC
 * @date 2018-08-22 14:42:44
 */

import { getZIndex } from '@/utils/globalConstants'

export default {
	props: {
		// 控制显示层级
		index: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		/**
		 * 当算当前层级，若有传层级，则使用传入层级
		 * @return {Number} 当前层级
		 */
		zIndex() {
			return this.index === 0 ? getZIndex() : this.index
		},
	},
}
