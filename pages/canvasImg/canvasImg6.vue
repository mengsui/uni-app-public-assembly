<template>
	<view class="container">
	  <DrawCanvas
		v-if="drawCan.imgUrlArr.length > 0"
		:imgUrlArr="drawCan.imgUrlArr"
		@drawFun="drawFun"
		@imgFun="imgFun"
		@saveImgPath="saveImgPath"/>
	</view>
</template>

<script>
	import DrawCanvas from "@/components/drawCanvas/drawCanvas.vue";
	function hs(x){
		return x * 1;
	};
	
	
	export default {
		components: {
			DrawCanvas,
		},
		data() {
			return {
				businessCard: {
					firstlineNub: 22, // 多少个字符换行
					
					// 下面是接口请求过来的数据
					gender: 0,// 0 === 不显示 1 === 男  2 === 女 
					userImg: '',//头像
					userName: '-',//名字
					qualification_rate: '-',// 合格率
					working_years: '-',//工龄
					vehicle: '-',// 交通工具
					mobile_phone: '-',//手机号
					type_of_work: '-',// 工种
					address: '-',//地址
				},
				// 网络图片绘制时使用的数据+base64图片位置
				drawCan: {
					pic: '', // 生成的base64
					imgUrlArr: [],
				}
				
			};
		},
		onLoad() {
			this.initAjax();
		},
		methods: {
			initAjax(){
				const vm = this;
				uni.showLoading({
					// mask: true, // 安卓连分享都会遮盖住，ios不会遮盖住
					title: '加载中...'
				});
				setTimeout(()=>{

					const lineNub = vm.businessCard.address.length;
					
					const firstlineNub = vm.businessCard.firstlineNub;// 22个字换行
					let backgroundImage = 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/businessCardbg1.png';
					if(lineNub > firstlineNub){
						backgroundImage = 'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/businessCardbg2.png';
					};
					vm.drawCan.imgUrlArr = [
						backgroundImage,
						'http://imgs.soufucai.com/Uploads/sfcwap/sfcHome/v-banner1.png',
						'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/qc-img.png',
					];
					
				},2000)
			},
			
			// 文案绘制（注意：这里绘制的文案和图片会遮盖住网络绘制的图片和文案）
			drawFun(obj){
				const vm = this;
				const { Context } = obj;
				let firstlineNub = vm.businessCard.firstlineNub;
				let param = vm.businessCard;

				Context.setFillStyle('#2C3240');
				Context.setTextAlign('left');
				Context.setTextBaseline('top');
				Context.font = 'normal bold 34px/34px sans-serif';
				
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

				Context.font = 'normal normal 26px/26px sans-serif';
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
				Context.fillText(text6, hs(119), hs(432));
				

				let text7 = param.address;
				if(param.address.length > firstlineNub){
					const size1 = text7.slice(0, firstlineNub);
					let endLength = text7.length;
					endLength >= (firstlineNub * 2) ? endLength = firstlineNub * 2 :'';
					const size2 = text7.slice(firstlineNub, endLength);
					Context.fillText(size1, hs(119), hs(502));
					Context.fillText(size2, hs(119), hs(552));
				}else {
					Context.fillText(text7, hs(119), hs(502));
				};
			},
			
			// 画网络图片
			imgFun(obj){
				const {res, Context} = obj;
				
				// 背景图
				const backgroundImageUrl =  res[0].res.statusCode == 200 ? res[0].res.tempFilePath : '';
				backgroundImageUrl ? Context.drawImage(backgroundImageUrl, 0, 0, hs(750), hs(1157)):'';

				// 头像
				const headImgUrl = res[1].res.statusCode == 200 ? res[1].res.tempFilePath : '';
				headImgUrl ? Context.drawImage(headImgUrl, hs(65), hs(177), hs(130), hs(130)):'';
				
				// 二维码
				const qrCodeImg = res[2].res.statusCode == 200 ? res[2].res.tempFilePath : '';
				qrCodeImg ? Context.drawImage(qrCodeImg, hs(291), hs(642), hs(168), hs(168)):'';
			},
			// 返回图片路径保存到pic
			saveImgPath(pic){
				this.drawCan.pic = pic;
			},
		},
	}
</script>