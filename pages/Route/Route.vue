<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			const time = new Date().getTime();
			console.log(time);
			return {
				url: 'https://wap.soufucai.com/activity/test.html?time='+time,
			};
		}
	}
</script>

<style lang="less">

</style>
