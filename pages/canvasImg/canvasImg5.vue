<template>
	<view class="container">
	  <view class="show_block">
		<image class="img" v-if="pic" :src="pic"/>
		<canvas class="myCanvas" canvas-id="myCanvas" style="width: 750px; height: 1157px;"/>
	  </view>
	  <button @tap="saveImageToPhotosAlbum">保存海报</button>
	</view>
</template>

<script>
	function hs(x){
		return x * 1;
	}

	export default {
		data() {
			return {
				pic: '',
			};
		},
		onLoad() {
			const businessCard = {//名片需要的数据
				gender: 1,// 0 === 不显示 1 === 男  2 === 女   
				collection: 2,// 0 == 不显示 1 == 未收藏 2 == 已收藏
				userImg: 'http://imgs.soufucai.com/Uploads/sfcwap/sfcHome/v-banner1.png',//头像
				userName: '张三風',//名字
				qualification_rate: '90%',// 合格率
				working_years: '8年',//工龄
				vehicle: '汽车',// 交通工具
				mobile_phone: '158******30',//手机号
				type_of_work: '小工（哈哈）',// 工种
				address: '东岗路与富强大街交叉口东岗路与富强大街交叉',//地址
			};
			this.drawInit(businessCard);
		},
		methods: {
			// 画图
			drawInit(businessCard) {
				uni.showLoading({
					mask: true,
					title: '生成名片中...'
				});
				
				let vm = this;
				const lineNub = businessCard.address.length;
				const firstlineNub = 22;// 22个字换行
				let backgroundImage = 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/businessCardbg1.png';
				if(lineNub > firstlineNub){
					backgroundImage = 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/businessCardbg2.png';
				};
				const param = {
					...businessCard,
					backgroundImage,
				};

				const Context = uni.createCanvasContext('myCanvas');
				
				// 背景图网络图片
				vm.drawDownloadImg({
					Context, 
					param,
					imgUrl: param.backgroundImage,
					firstlineNub,
				}).then((obj)=>{
					const { Context, param, res, firstlineNub } = obj;
					const backgroundImageUrl = res.tempFilePath;
					Context.drawImage(backgroundImageUrl, 0, 0, hs(750), hs(1157));
					
					// 头像网络图片
					vm.drawDownloadImg({
						Context, 
						param, 
						imgUrl: businessCard.userImg, 
						firstlineNub,
					}).then((obj)=>{
						const { Context, param, res, firstlineNub } = obj;
						const headImgUrl = res.tempFilePath;
						Context.drawImage(headImgUrl, hs(65), hs(177), hs(130), hs(130));
						
						// 二维码网络
						vm.drawDownloadImg({
							Context, 
							param, 
							imgUrl: 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/qc-img.png', 
							firstlineNub,
						}).then((obj)=>{
							const { Context, param, res, firstlineNub } = obj;
							const qrCodeImg = res.tempFilePath;
							Context.drawImage(qrCodeImg, hs(291), hs(642), hs(168), hs(168));

							// 自己随意写文案或者图片的位置
							vm.drawFun({Context, param, firstlineNub});
							// 画图+生成图片路径
							vm.drawProduceImgUrl(Context);
						});
					});
				});
			},
			// 自己随意写文案或者图片的位置
			// 注意：这里不需要Context.draw(),因为在生成图片的时候已经draw了，多次draw的话可能会导致绘图失败。
			drawFun(obj){
				const { Context, param,firstlineNub } = obj;
				Context.setFillStyle('#2C3240');
				Context.setTextAlign('left');
				Context.setTextBaseline('top');
				Context.setFontSize(hs(34));
				
				let text1 = param.userName;
				Context.fillText(text1, hs(227), hs(177));
				let genderImg = '';
				if(param.gender == 1){
					genderImg = '../../static/gender1.png';
				}else if(param.gender == 2){
					genderImg = '../../static/gender2.png';
				};
				let nameWidth = 227;
				if(text1.length > 0){
					nameWidth = nameWidth + 10 + 34 * text1.length;
				};
				param.gender != 0 ? Context.drawImage(genderImg, hs(nameWidth), hs(182), hs(25), hs(25)) : '';

				Context.setFontSize(hs(26));
				Context.setFillStyle('#2C3240');
				Context.setTextAlign('left');
				Context.setTextBaseline('top');
				let text2 = '合格率：'+param.qualification_rate;
				Context.fillText(text2, hs(227), hs(230));

				let text3 = '工龄：'+param.working_years;
				Context.fillText(text3, hs(227), hs(272));

				let text4 = '交通工具：'+param.vehicle;
				let text4Width = 227;
				text4Width = text4Width + 15 + 26 * text3.length;
				Context.fillText(text4, hs(text4Width), hs(272));

				let text5 = param.type_of_work;
				Context.fillText(text5, hs(119), hs(365));

				let text6 = param.mobile_phone;
				Context.fillText(text6, hs(119), hs(435));

				let text7 = param.address;
				if(param.address.length > firstlineNub){
					const size1 = text7.slice(0, firstlineNub);
					let endLength = text7.length;
					endLength >= (firstlineNub*2) ? endLength = firstlineNub*2 :'';
					const size2 = text7.slice(firstlineNub, endLength);
					Context.fillText(size1, hs(119), hs(504));
					Context.fillText(size2, hs(119), hs(554));
				}else {
					Context.fillText(text7, hs(119), hs(504));
				};
			},
			// 网络图片下载（注意需要微信公众平台需要配置下载的安全域名，否则图片会下载失败）
			drawDownloadImg(obj){
				const { Context, param, imgUrl, firstlineNub } = obj;
				return new Promise((resolve, reject) => {
					uni.downloadFile({
						url: imgUrl, //仅为示例，并非真实的资源
					}).then((data)=>{
						const [error, res]  = data;
						if(res.statusCode){

							resolve({Context, param, res, firstlineNub});

						} else {
							uni.showToast({
								title: '图片下载失败！',
								icon: 'none',
								duration: 2000,
							});
						};
					});
				});
			},
			// 生成图片
			drawProduceImgUrl(Context){
				const vm = this;
				Context.draw(false, function(e) {
					uni.canvasToTempFilePath({
						x: 0,
						y: 0,
						width: 750,
						height: 1157,
						canvasId: 'myCanvas',
						success: function(res) {
							uni.showToast({
								title: '名片生成成功！',
								duration: 2000,
								success() {
									vm.pic = res.tempFilePath;
								},
							});
						},
						fail() {
							uni.showToast({
								title: '名片生成失败！',
								icon: 'none',
								duration: 2000,
							});
						}
					});
				});
			},
			
			
			// 下面是点击保存图片的时候使用
			// 获取相册权限。
			saveImageToPhotosAlbum(){
				const vm = this;
				uni.getSetting({
					success(res) {
						console.log('authSetting',res)
						if (!res.authSetting['scope.writePhotosAlbum']) {
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success() {
									vm.saveImage();
								},
								fail() {
									console.log(222);
									uni.showModal({
										title: '温馨提示',
										content: '您已拒绝授权，是否去设置打开？注意：无 AppID 关联下，调用 wx.authorize 是受限的, API 的返回是工具的模拟返回',
										confirmText: "确认",
										cancelText: "取消",
										success: function(res) {
											
											if (res.confirm) {
												console.log('用户点击确认')
												uni.openSetting({
													success: (res) => {
														console.log(res)
														res.authSetting = {
															"scope.writePhotosAlbum": true,
														};
													}
												});
											} else {
												console.log('用户点击取消')
											}
										}
									});
									
								}
							});
						} else {
							vm.saveImage();
						}
					},
					fail(res) {
						uni.showToast({
							title: res.errMsg,
							icon: 'none',
							duration: 2000
						});
					},
				});
			},
			// 有权限后在进行保存图片
			saveImage(){
				const vm = this;
				uni.saveImageToPhotosAlbum({
					filePath: vm.pic,
					success(res) {
						uni.showToast({
							title: '保存成功',
							icon: 'success',
							duration: 2000
						});
					}
				});
			},
			
		},
	}
</script>
<style>
	.show_block {
		position: relative;
		width: 750upx;
		height: 1040upx;
		overflow: hidden;
	}
	.img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.myCanvas {
		position: absolute;
		z-index: -1;
		top: -9999px;
		left: -9999px;
	}
</style>