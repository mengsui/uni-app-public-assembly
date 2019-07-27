<template>
	<view class="content">
		<view class="posterImage-content">
			<image :src="poster.finalPath" mode="widthFix" class="posterImage"/>
		</view>
		<view class="hideCanvasView">
			<canvas class="hideCanvas" canvas-id="default_PosterCanvasId" :style="{width: (poster.width||0) + 'px', height: (poster.height||0) + 'px'}"></canvas>
		</view>
		<view class="btn" @click="saveImage()">
			保存图片
		</view>
	</view>
</template>

<script>
	import _app from '@/components/QS-SharePoster/app.js';
	// 注意：使用这个插件在绘制canvas，安卓机上可能会出现有的文案颜色无法设置问题。IOS无问题。
	import getSharePoster from '@/components/QS-SharePoster/QS-SharePoster.js';

	function hs(x){
		return x * 1;
	}

	export default {
		data() {
			return {
				poster: {},
				qrShow: false,
				canvasId: 'default_PosterCanvasId',
			}
		},
		onLoad() {
			this.initAjax();
		},
		methods: {
			initAjax(){
				const address = "河北省石家庄市裕华区聚力体育";
				const lineNub = address.length;
				let backgroundImage = '../../static/businessCardbg1.png'
				if(lineNub>20){
					backgroundImage = '../../static/businessCardbg1.png'
				};
				const param = {
					backgroundImage,
					address,
				};
				this.shareFc(param);
			},
			async shareFc(param) {
				
				try {
					if (!this.poster.finalPath) {
						let d = await getSharePoster({
							type: 'testShareType',
							posterCanvasId: this.canvasId,
							backgroundImage: param.backgroundImage,
							qrCodeArray: (bgObj, type) => {
								return [{
									text: '这里填二维码链接',
									// 这个是二维码中心logo图片链接
									image: '//img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg',
									size: hs(168),
									dx: hs(291),
									dy: hs(642),
								}]
							},
							imagesArray: (bgObj, type) => { //接收的第一个参数为背景图片的信息, 第二个参数是自定义标识（感觉这里用不到）, 图片为示例图片
								return [
									{
										url: '//img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg',
										dx: hs(65),
										dy: hs(177),
										dWidth: hs(130),
										dHeight: hs(130),
									}
								]
							},
							setCanvasWH: (bgObj, type) => { // 为动态设置画布宽高的方法，
								this.poster = bgObj;
							},
							setDraw: (obj) => {
								let {
									Context,
									bgObj,
									type
								} = obj;
								
								
								Context.setFillStyle('#2C3240');
								Context.setTextAlign('left');
								Context.setTextBaseline('top');
								Context.setFontSize(hs(34));
								
								let text1 = '李小林';
								Context.fillText(text1, hs(227), hs(177));
								// 性别
								// Context.drawImage('http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/gender1.png', hs(341), hs(188), hs(25), hs(25))
								
								Context.setFontSize(hs(26));
								Context.setFillStyle('#2C3240');
								Context.setTextAlign('left');
								Context.setTextBaseline('top');
								let text2 = '合格率：95%';
								Context.fillText(text2, hs(227), hs(230));
								
								let text3 = '工龄：8年';
								Context.fillText(text3, hs(227), hs(272));

								let text4 = '交通工具：汽车';
								Context.fillText(text4, hs(379), hs(272));
								
								
								let text5 = '小工（铲除 保护）';
								Context.fillText(text5, hs(119), hs(356));


								let text6 = '15028123835';
								Context.fillText(text6, hs(119), hs(425));


								let text7 = param.address;
								if(param.address.length > 20){
									const size1 = text7.slice(0, 22);
									const size2 = text7.slice(22, text7.length);
									Context.fillText(size1, hs(119), hs(494));
									Context.fillText(size2, hs(119), hs(544));
								}else {
									Context.fillText(text7, hs(119), hs(494));
								}

							}
						});
						console.log('生成成功， 临时路径: ' + d.poster.tempFilePath)
						
						this.poster.finalPath = d.poster.tempFilePath;
					}
					this.qrShow = true;
				} catch (e) {
					_app.hideLoading();
					_app.showToast(JSON.stringify(e));
					console.log(JSON.stringify(e));
				}
			},
			saveImage() {
				const self = this;
				// 检查保存图片权限
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.writePhotosAlbum']) {
							// 无权限去授权
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success() {
									self.saveImage2();
								},
								fail() {
									// js 因为拒绝授权了有冷却时间。短时间内是无法吊起授权的。
									// 如果使用buttom按钮吊起的授权是无改问题的。
									uni.showModal({
										title: '温馨提示',
										content: '您已拒绝授权，只有授权后才可以保存图片，是否去设置打开？',
										confirmText: "确认",
										cancelText: "取消",
										success: function(res) {
											if (res.confirm) {
												uni.openSetting({
													success: (res) => {
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
							self.saveImage2();
						}
					}
			  });
			},
			saveImage2(){
				uni.saveImageToPhotosAlbum({
					filePath: this.poster.finalPath,
					success(res) {
						_app.showToast('保存成功！');
					},
					fail() {
						_app.showToast('保存失败！');
					}
				});
			},
			hideQr() {
				this.qrShow = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	.btn {
		width: 600upx;
		height: 77upx;
		font-size: 30upx;
		line-height: 77upx;
		color: #fff;
		text-align: center;
		margin: 40upx auto 0;
		background: linear-gradient(226deg,rgba(105,180,255,1) 0%,rgba(0,121,243,1) 100%);
		border-radius: 10upx;
	}
	
	.hideCanvasView {
		position: relative;
	}
	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}
	.posterImage-content {
		width: 100%;
		height: 1040upx;
		.posterImage {
			width: 100%;
			margin-top: -117upx;
		}
	}
</style>
