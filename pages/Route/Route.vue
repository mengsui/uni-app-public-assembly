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
			// 注意。嵌套的时候微信会不刷新。最好拼接一个时间戳来让拼接的链接改变从而强制刷新嵌套页面
			return {
				url: 'https://www.baidu.com/?time='+time,
			};
		}
	}
</script>

<style lang="less">

</style>
