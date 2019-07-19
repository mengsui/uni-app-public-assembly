<template>
	<view>
		<view bindlongtap="longTap" v-longpress="incrementPlusTen">长按这里</view>
	</view>
</template>

<script>
	export default {
		methods: {
			incrementPlusTen() {
				console.log('长按这里')
				uni.showToast({
					title: '长按这里',
					duration: 2000
				});
			},
			mousedown(){
				console.log('mousedown')
			},
			longTap: function(e) {
				console.log("long tap")
				wx.showModal({
				  title: '提示',
				  content: '长按事件被触发',
				  showCancel: false
				})
			  },
		}
	}
</script>

<style lang="less">

</style>
