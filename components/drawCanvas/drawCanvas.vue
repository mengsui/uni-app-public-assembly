<template>
	<view class="container">
	  <view class="show_block">
		<image class="img" v-if="pic" :src="pic"/>
		<canvas class="myCanvas" canvas-id="myCanvas" style="width: 750px; height: 1157px;"/>
	  </view>
	</view>
</template>

<script>

	export default {
		props: {
			imgUrlArr: {
				type: Array,
				default: [],
			},
		},
		data() {
			return {
				pic: '',
			};
		},
		onLoad() {
			
			this.drawInit();
		},
		methods: {
			// 画图
			drawInit() {
				let vm = this;
				if(vm.imgUrlArr.length <=0 ){
					console.log('无背景图无需绘制！')
					return;
				};
				uni.showLoading({
					// mask: true, // 安卓连分享都会遮盖住，ios不会遮盖住
					title: '生成名片中...'
				});
				const Context = uni.createCanvasContext('myCanvas');
				const ProArr =vm.drawDownloadImgArr(vm.imgUrlArr);
				Promise.all(ProArr).then(res=>{
					// 网络图片绘制
					vm.$emit('imgFun',{res,Context});
					// 文案绘制（或者本地图片）
					vm.$emit('drawFun',{Context});
					// 保存图片
					vm.drawProduceImgUrl({Context});
				});

			},
			
			// 网络图片下载（注意需要微信公众平台需要配置下载的安全域名，否则图片会下载失败）
			drawDownloadImgArr(imgUrlArr){
				const vm = this;
				let arrayFun=[];
				imgUrlArr.forEach((item, index)=>{
					arrayFun.push( vm.output(item,index) );
				});
				// 使用bSort 进行排序避免绘制的时候返回的顺序和传入的顺序不一致
				return vm.bSort(arrayFun);
			},
			output(imgUrl,index) {
				return new Promise((resolve, reject) => {
					uni.downloadFile({
						url: imgUrl, //仅为示例，并非真实的资源
					}).then((data)=>{
						const [error, res]  = data;
						resolve({res, index});
					});
				});
			},
			// 冒泡排序
			bSort(arr) {
				var len = arr.length;
				for (var i = 0; i < len-1; i++) {
					for (var j = 0; j < len - 1 - i; j++) {
						// 相邻元素两两对比，元素交换，大的元素交换到后面
						if (arr[j].index > arr[j + 1].index) {
							var temp = arr[j];
							arr[j] = arr[j+1];
							arr[j+1] = temp;
						};
					};
				};
				return arr;
			},
			// 生成图片
			drawProduceImgUrl(obj){
				const vm = this;
				const { Context } = obj;
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
									vm.$emit('saveImgPath', vm.pic);
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