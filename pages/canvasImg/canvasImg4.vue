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
			this.drawImage();
		},
		methods: {
			drawImage() {
				let self = this;
				const businessCard = {//名片需要的数据
					gender: 1,// 0 === 不显示 1 === 男  2 === 女   
					collection: 2,// 0 == 不显示 1 == 未收藏 2 == 已收藏
					userImg: 'http://imgs.soufucai.com/Uploads/sfcwap/sfcHome/v-banner1.png',//头像
					userName: '张三風',//名字
					qualification_rate: '90%',// 合格率
					working_years: '8年',//工龄
					vehicle: '汽车',// 交通工具
					mobile_phone: '15810240230',//手机号
					type_of_work: '小工（铲除 保护）',// 工种
					address: '东岗路与富强大街交叉口东岗路与富强大街交叉',//地址
				};


				const lineNub = businessCard.address.length;
				const firstlineNub = 22;// 22个字换行
				let backgroundImage = '../../static/businessCardbg1.png'
				if(lineNub > firstlineNub){
					backgroundImage = '../../static/businessCardbg2.png'
				};
				const param = {
					...businessCard,
					backgroundImage,
				};

				const Context = uni.createCanvasContext('myCanvas');
				
				// 背景图
				Context.drawImage(backgroundImage, 0, 0, 750, 1157);
				
				
				// 头像(网络图片先下载在使用本地路径)
				uni.downloadFile({
					url: 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/qc-img.png', //仅为示例，并非真实的资源
				}).then((data)=>{
					var [error, res]  = data;
					if(res.statusCode == 200){
						const headImgUrl = res.tempFilePath;
						Context.drawImage(headImgUrl, hs(65), hs(177), hs(130), hs(130));

						uni.downloadFile({
							url: 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/qc-img.png', //仅为示例，并非真实的资源
						}).then((data2)=>{
							var [error2, res2]  = data2;
							
							if(res2.statusCode == 200){
								
								const qrCodeImg = res2.tempFilePath;
								Context.drawImage(qrCodeImg, hs(291), hs(642), hs(168), hs(168));

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
								console.log(param.address.length)
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

								Context.draw(false, function(e) {
									// 生成图片
									uni.canvasToTempFilePath({
										x: 0,
										y: 0,
										width: 750,
										height: 1157,
										canvasId: 'myCanvas',
										success: function(res) {
											let pic = res.tempFilePath;
											self.pic = pic;
										}
									});
								});
								
								
							}else {
								console.log('二维码下载失败！')
							};
							
						});
						
					} else {
						console.log('头像下载失败！')
					}
					
				});
				
				
			},
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
										content: '您已拒绝授权，是否去设置打开？',
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
					fail() {
					},
				});
			},
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