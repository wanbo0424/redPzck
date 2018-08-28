<template>
	<div id="app">
		<router-view/>	
		<Calender></Calender>
	</div>
</template>

<script>
import Calender from '../../components/common/Calender'
export default {
	name: 'App',
	components:{
		Calender
	}
}
</script>

<style>

</style>
