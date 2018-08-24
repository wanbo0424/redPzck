<!--
	info: 加载圆环
	user: CC
	date: 2018-08-21 11:03:42
-->

<template>
	<div v-if="load" class="flyover gc-default-load" >

		<div class="alert">
			<div class="loader"></div>
			<div class="load-info">加载中...</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		data() {
			return {
				load: false
			}
		},
		methods:{
			closeLoad() {
				window.load = false
				this.load = false
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "@/scss/mixins/mixins.scss";

	// 前景色
	$foreground-color: #008eff;
	// 背景色
	$background-color: #d1e6ff;

	// 定义动画，旋转360度
	@include keyframes('rotating') {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.flyover {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 1;
		@include flex-center;
		.alert {
			width: 122px;
			height: 122px;
			@include flex-center;
			flex-direction: column;
			background: url('../../assets/loadingBg.png') no-repeat;
			background-size: 100% 100%;
			.loader {
				width: 35px;
				height: 35px;
				border-radius: 50%;
				border-top: 5px solid $background-color;
				border-right: 5px solid $background-color;
				border-bottom: 5px solid $background-color;
				border-left: 5px solid $foreground-color;
				@include animation(rotating 0.8s infinite linear);
			}
			.load-info {
				margin-top: 8px;
				font-size: 14px;
				color: $foreground-color;
			}
		}
	}
</style>
