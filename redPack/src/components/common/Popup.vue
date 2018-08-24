<!--
	info: 弹出框组件
	user: CC
	date: 2018-08-22 11:03:42
-->

<template>
	
	<div class="gc-popup">
		<transition name="gc-popup-slide-bottom">
			<div
				v-show="show"
				class="gc-popup-content"
				ref="content"
				:style="{ 'z-index': zIndex }"
				@touchmove="handlerTouchmove"
			>
				<slot></slot>
			</div>
		</transition>
		<overlay :show="show" :index="zIndex - 1" @click="handlerClick"></overlay>
	</div>
	
</template>

<script>
	import Overlay from '@/components/common/Overlay'
	import zIndex from './mixins/zIndex'
	import { getStyle } from '@/utils/domUtils'
	export default {
		name: 'popup',
		mixins: [zIndex],
		components: {
			Overlay
		},
		props: {
			// 控制显示/隐藏
			show: {
				type: Boolean,
				default: true
			},
		},
		
		methods:{

			/**
			 * 背景点击事件
			 * @param  {Object} $event 事件句柄
			 * @return {void}
			 */
			handlerClick($event) {
				this.$emit('touch-overlay', $event)
			},

			/**
			 * 弹框主体滑动事件
			 * @param  {Object} $event 事件句柄
			 * @return {void}
			 */
			handlerTouchmove($event) {
				// 判断距离顶部的高度，若非占满整屏，去除默认 touchmove 响应事件
				let domTop = getStyle(this.$refs.content, 'top')
				if (domTop !== '0px') {
					$event.preventDefault()
				}
				$event.stopPropagation()
			},

		},
	}
</script>

<style scoped lang="scss">
	@import "@/scss/mixins/mixins.scss";

	.gc-popup {
		&-content {
			position: fixed;
			top: auto;
			bottom: 0;
			right: 0;
			left: 0;
			max-height: 100%;
			background: #fff;
			transform: translateY(0);
			overflow: scroll;
			
		}

		// 从下方飞入效果
		&-slide-bottom-enter-active,
		&-slide-bottom-leave-active {
			transition: transform .3s ease;
		}
		&-slide-bottom-enter,
		&-slide-bottom-leave-to {
			transform: translateY(100%);
		}
	}


	

</style>
