<!--
	info: 阴影背景
	user: CC
	date: 2018-08-21 11:03:42
-->

<template>
	<transition name="gc-overlay-fade">
		<div
			class="gc-overlay"
			v-show="show"
			:style="{ 'z-index': zIndex }"
			@touchmove="handlerTouchmove"
			@click="handlerClick"
		></div>
	</transition>
</template>

<script>
	import zIndex from './mixins/zIndex'
	export default {
		name: 'overlay',
		mixins: [zIndex],
		props: {
			// 控制显示/隐藏
			show: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			/**
			 * 背景层滑动事件，取消默认事件，去除事件派发
			 * @param  {Object} $event 事件句柄
			 * @return {void}
			 */
			handlerTouchmove($event) {
				$event.preventDefault()
				$event.stopPropagation()
			},
			/**
			 * 背景层点击事件
			 * @param  {Object} $event 事件句柄
			 * @return {void}
			 */
			handlerClick($event) {
				this.$emit('click', $event)
			}

		}
	}
</script>

<style scoped lang="scss">
	.gc-overlay {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #000;
		opacity: .4;
	}

	// 淡出淡入效果
	.gc-overlay-fade-enter-active,
	.gc-overlay-fade-leave-active {
		transition: opacity .3s;
	}
	.gc-overlay-fade-enter,
	.gc-overlay-fade-leave-to {
		opacity: 0;
	}

</style>
