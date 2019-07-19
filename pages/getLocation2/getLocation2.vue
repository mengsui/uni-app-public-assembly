<template>
	<view>
		latitude：{{latitude}} <br/><br/><br/>
		longitude：{{longitude}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: '',
				longitude: '',
			};
		},
		onLoad() {
			this.getLocati();
		},
		methods: {
			getLocati() {
				const vm = this;
				
				uni.getLocation({
					type: 'gcj02', // gcj02 国测局就是高德使用的
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						vm.latitude = latitude;
						vm.longitude = longitude;
					}
				});
			}
		},
	}
</script>

<style lang="less">

</style>
