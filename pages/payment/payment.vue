<template>
	<view>
		<button type="primary" @click="payAjax">支付</button>
	</view>
</template>

<script>
	export default {
		methods: {
			payAjax() {
				const vm = this;
				uni.request({
					method: 'POST',
					dataType:'json',
					// uni-app的post请求是不带这个请求头的。需要自己添加
					header: {'content-type': 'application/x-www-form-urlencoded'},
					url: 'https://*******',
					data: {
						
					},
					success: (res) => {
						var resdata = JSON.parse(res.data.data.JSAPI);
						vm.wxrequestPayment(resdata);
					},
					fail:(err) => {
						uni.showToast({
							title: '获取支付的JSAPI失败！',
							duration: 2000,
							icon:"none"
						});
					}
				});
			},
			wxrequestPayment(resdata){
				console.log('resdata:',resdata)
				const vm = this;
				var showToastText = "支付成功";
				// 注意：这里是微信
				wx.requestPayment({
					timeStamp: resdata.timeStamp,
					nonceStr: resdata.nonceStr,
					package: resdata.package,
					signType: resdata.signType,// 注意：这里不要管官方文档。RSA的加密方式也是支持的。
					paySign: resdata.paySign,
					success: function (data) {
						uni.showToast({
							title: showToastText,
							duration: 2000,
							icon:"success"
						});
					},
					fail: function (err) {
						if(err.errMsg=='requestPayment:fail cancel'){
							uni.showToast({
								title: '支付已取消',
								duration: 2000,
								icon:"none"
							});
						}else{
							uni.showToast({
								title: '支付失败，请联系客服，客服电话:*****',
								duration: 2000,
								icon:"none"
							});
						};
					},
				});
			},
			
		},
	}
</script>

<style lang="less" scoped>
	
</style>
