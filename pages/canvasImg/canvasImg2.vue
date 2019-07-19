<template>
	<view class="container">
	  <view class="show_block">
		<image v-if="pic" :src="pic"/>
		<canvas v-if="!pic" class="myCanvas" canvas-id="myCanvas" style="width: 375px; height: 417px;"></canvas>
	  </view>
	  <button @tap="saveImageToPhotosAlbum">保存海报</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgSrc: '../../static/logo.png',
				imgSrc: '../../static/home.png',
				
				pic: '',
			};
		},
		onLoad() {
			this.save();
		},
		methods: {
			saveImageToPhotosAlbum(){
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
			saveImage() {
			  let self = this;
			  const ctx = uni.createCanvasContext('myCanvas');
			  ctx.drawImage(self.bgSrc, 0, 0, 375, 417);
			  ctx.drawImage(self.imgSrc, 57, 44, 260, 264);
			  ctx.draw(false, function(e) {
				// 保存到本地
				uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  width: 375,
				  height: 417,
				  canvasId: 'myCanvas',
				  success: function(res) {
					let pic = res.tempFilePath;
					self.pic = pic;
					
				  }
				});
			  });
			},
			save() {
			  let self = this;
			  if (!this.imgSrc) {
				uni.showToast({
				  title: '请先选择图片',
				  icon: 'none',
				  duration: 2000
				});
				return false;
			  };
			  
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.writePhotosAlbum']) {
						uni.authorize({
							scope: 'scope.writePhotosAlbum',
							success() {
							self.saveImage();
							}
						});
						} else {
						self.saveImage();
						}
					}
				});
			},
		},
	}
</script>
<style>
	.show_block {
		position: relative;
		width: 750rpx;
		height: 834rpx;
	}
	.bg {
		display: block;
		width: 100%;
		height: 100%;
	}
	.img {
		position: absolute;
		top: 86rpx;
		left: 114rpx;
		display: block;
		width: 520rpx;
		height: 527rpx;
	}
	.myCanvas {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>