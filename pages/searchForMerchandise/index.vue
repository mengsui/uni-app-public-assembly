<template>
	<view class="content">
		<view class="list">
			<mSearch :show="false" placeholder="商品品牌/关键字" :value="searchValue" @search="search($event,1)"></mSearch>
		</view>
		<view class="filter clear">
			<view :class="{filterTr: true,active: (navIndex==1)}" @click="navClick(1)">
				默认
			</view>
			<view :class="{filterTr: true,active: (navIndex==2)}" @click="navClick(2)">
				销量
			</view>
			<view :class="{filterTr: true,active: (navIndex==3),price_bg: true,bg_img1: (asc==1),bg_img2: (asc==2)}" @click="navClick(3)">
				价格
			</view>
			<view :class="{filterTr: true,active: (navIndex==4),filter_bg: true}" @click="navClick(4)">
				筛选
			</view>
		</view>
		<view class="box">
			
			<view class="same clear" v-for="(item, nub) in goods_list" :key="nub" @click="navPageToClick(item)">
				<view class="same-img f-l" :style="{backgroundImage: 'url('+item.goods_thumb+')'}">
					<!-- <image :src="item.goods_thumb" mode="widthFix"></image> -->
				</view>
				<view class="same-detail f-r">
					<view class="title">{{item.goods_short_name}}</view>
					<view class="taps clear">
						<view class="taps-tr f-l">{{item.attr_str}}</view>
					</view>
					<view class="price">
						<view :class="{size:true,discount: (item.act_sign == '折扣' ? true : false)}">
							<text style="margin-right: 20upx;">
								￥{{item.price>0 ? item.price : '***'}}
							</text>
							<!-- TODO 原价数据 -->
							<i-price v-if="item.is_show_original == 1" status="del" del-color="#999" :value="item.original_price" ></i-price>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view v-if="goods_list.length<=0" class="quexing">
			<view class="tips">暂时无您所搜索的商品</view>
		</view>
		
		<uni-drawer :visible="showPropertyType" mode="right" @close="hidePropertyType" >
			<view class="filterDrawer" v-show="propertyTypeList.length>0">
				<view v-for="(item,index) in propertyTypeList" :key="index">
					<view class="uni-title" >{{item.name}}</view>
					<view class="filter-list clear">
						<view class="filter-item" :class="{active:item1.active}" v-for="(item1,index1) in item.value" :key="index1" @click="propertyTypeItem(index,index1)">
							{{item1.name}}
						</view>
					</view>
				</view>

				<view class="btn-box">
					<view class="Reset-btn" @click="propertyTypeReset">
						重置
					</view>
					<view class="submit-btn" @click="propertyTypeSubmit">
						确定
					</view>
				</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import { dateUtils } from '../../common/util.js';
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	import uniDrawer from "@/components/uni-drawer.vue"
	import iPrice from "@/components/i-price/i-price.vue"

	
	export default {
		components: {
			mSearch,
			uniDrawer,
			iPrice
		},
		data() {
			return {
				user_id: '',
				user_token: '',
				region_id: '',
				
				isLoad: true,
				page: 1,
				pageSize: 10,
				
				navIndex: 1,
				asc: 0,
				searchkey: '',
				searchValue: '',
				goods_list: [],
				
				showPropertyType:false,
				search_json: [],
				propertyTypeList:[],
				param:{}
			};
		},
		onLoad(event){
			const vm = this;
			vm.searchkey = event.searchkey;
			vm.searchValue = event.searchkey;
			
			vm.user_id = uni.getStorageSync('user_id');
			vm.user_token = uni.getStorageSync('user_token');
			vm.region_id = uni.getStorageSync('region_id');
			if(!vm.user_id && !vm.user_token && !vm.region_id){
				uni.navigateTo({
					url: '/pages/login/login'
				});
			};
			vm.param={
				supplier_id:0,
				key_words: vm.searchkey,
				user_id: vm.user_id,
				region_id: vm.region_id,
			};
			this.searchAjax('refresh',vm.param)
		},
		onReachBottom() {
			const vm = this;

			if(this.isLoad){
				this.searchAjax('add',vm.param);
			}
		},
		methods: {
			navPageToClick(item){

				uni.navigateTo({
					url: '/pages/searchCommodityDetails/index?goods_id='+item.goods_id+'&product_id='+item.product_id,
				});
			},
			navClick(index){
				const vm = this;
				vm.navIndex = index;
				if(index == 3){
					vm.asc == 1 ? vm.asc = 2 : vm.asc = 1;
				} else {
					vm.asc = 0;
				};
				switch (index){
					case 1:
						vm.searchAjax('refresh',{
							supplier_id:0,
							key_words: vm.searchkey,
							user_id: vm.user_id,
							region_id: vm.region_id,
						});
						break;
					case 2:
						vm.searchAjax('refresh',{
							supplier_id: 0,
							key_words: vm.searchkey,
							user_id: vm.user_id,
							region_id: vm.region_id,
							price_sort: 0,
							sale_sort: 2,
							search_json: '',
						});
						break;
					case 3:
						vm.searchAjax('refresh',{
							supplier_id: 0,
							key_words: vm.searchkey,
							user_id: vm.user_id,
							region_id: vm.region_id,
							price_sort: vm.asc,
							sale_sort: 0,
							search_json: '',
						});
						break;
					case 4:
						vm.showPropertyTypeFn();
						break;
					default:
						break;
				}
			},
			search(e, val) {
				const vm = this;
				vm.searchkey = e;
				//点击搜索后导航位置应该重置
				vm.navIndex = 1;
				vm.asc = 0;
				vm.searchAjax('refresh',{
					supplier_id:0,
					key_words: vm.searchkey,
					user_id: vm.user_id,
					region_id: vm.region_id,
				});
			},
			searchAjax(action = 'add',param){
				const vm = this;
				uni.showLoading({
					title: '加载中'
				});
				
				if (action === 'refresh') {
					vm.page=1;
				}
				// 接口数据添加。（因为有部分数据不需要传递需要区分下）
				param.p = vm.page;
				param.num = vm.pageSize;
				var city_name = uni.getStorageSync('city_name');
				var long_latitude = uni.getStorageSync('long_latitude');
				param.city_name = city_name;
				param.long_latitude = long_latitude;
				vm.param = param;
				
				uni.request({
					method:"POST",
					url: dateUtils.baseUrl+'Service/Goods/searchGoodsOpen?user_id='+vm.user_id+'&user_token='+vm.user_token+'&device=wap',
					data: param,
					header: {'content-type': 'application/x-www-form-urlencoded'},
					success: (res) => {
						uni.hideLoading();
						//搜索过后导航应该重置为默认
						if (action === 'refresh'){
							vm.goods_list = [];
						}
						try{
							vm.propertyTypeList = res.data.data.data.search_list.map(item=>{
								item.value = item.value.map(it=>{
									it.active = false;
									return it;
								});
								return item;
							});
							
							res.data.data.data.goods_list.forEach(item=>{
								vm.goods_list.push(item);
							});
							if(res.data.data.data.goods_list.length<vm.pageSize){
								vm.isLoad=false;
							}else{
								vm.isLoad=true;
								vm.page++;
							}
						}catch(e){
							//TODO handle the exception
							
						}
					}
				});
			},
			
			
			//侧拉筛选提交
			propertyTypeItem(index,index1){
				var vm = this;
				vm.propertyTypeList[index].value.forEach((value,nub)=>{
					if(index1 == nub){
						value.active ? value.active = false : value.active = true;
					};
				});
			},
			propertyTypeReset(){
				var vm=this;
				vm.search_json=[];
				vm.propertyTypeList.forEach(item=>{
					item.value.forEach((value,index)=>{
						value.active=false;
					})
				})
			},
			propertyTypeSubmit(){
				var vm=this;
				vm.search_json=[];
				vm.propertyTypeList.forEach(item=>{
					let _Arr = [];
					item.value.forEach((value,index)=>{
						if(value.active){
							_Arr.push(value.cid);
						};
					});
					if(_Arr.length > 0){
						let _arr = {
							name: item.field,
							value: _Arr.join('|')
						};
						vm.search_json.push(_arr);
					};
				})
				vm.hidePropertyType();
				
				vm.searchAjax('refresh',{
					supplier_id:0,
					key_words: vm.searchkey,
					user_id: vm.user_id,
					region_id: vm.region_id,
					price_sort: 0,
					sale_sort: 0,
					search_json: JSON.stringify(vm.search_json),
				});
			},
			hidePropertyType(){
				var vm=this;
				vm.showPropertyType=false;
			},
			showPropertyTypeFn(){
				var vm=this;
				vm.showPropertyType=true;
			},
			
		},
	}
</script>

<style lang="less" scoped>
	.ellipsis(){
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.moveellipse(@line) when (isnumber(@line)) {
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: @line;
		-webkit-box-orient: vertical;
	}
	.clear:after {
	    content: '';
	    display: block;
	    clear: both;
	    width: 0;
	    height: 0;
	}
	.f-l {
		float: left;
	}
	.f-r {
		float: right;
	}
	.content {
		width: 100%;
		overflow: hidden;
	}
	.quexing {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: calc(100% - 175upx);
		.tips {
			position: absolute;
			left: 0;
			top: 50%;
			margin-top: -138upx;
			width: 100%;
			line-height: 42upx;
			text-align: center;
			font-size: 30upx;
			color: #333;
			padding-top: 234upx;
			background-image: url(https://wap.soufucai.com/img/XCX/sfc/static/goods-none2.png);
			background-position: center top;
			background-repeat: no-repeat;
			background-size: 220upx 206upx;
		}
	}
	.list{
		width:100%;
		display:-webkit-box;
		display:-webkit-flex;
		display:flex;
		align-items:flex-start;
		background: #fff;
	}
	.border-top {
		border-top: 1upx solid #ddd;
	}
	
	.filterDrawer{
		padding:30upx;
		position: relative;
		height:100%;
		box-sizing: border-box;
		.uni-title{
			height:37upx;
			font-size:26upx;
			font-weight:600;
			color:rgba(51,51,51,1);
			line-height:37upx;
			padding:0;
			margin-bottom: 20upx;
		}
		.filter-list{
			.filter-item{
				// width: 108upx;
				padding: 0 15upx;
				height: 57upx;
				line-height: 57upx;
				text-align: center;
				background:rgba(245,245,245,1);
				border-radius:4upx;
				font-size: 24upx;
				margin-right:19upx;
				margin-bottom:19upx;
				float:left;
			}
// 			.filter-item:nth-child(4n){
// 				margin-right:0upx;
// 			}
			.filter-item.active{
				background: url("https://wap.soufucai.com/img/XCX/sfc/static/status-background.png") no-repeat 0 0;
				background-size: cover;
			}
			.filter-item-time{
				height:57upx;
				line-height: 57upx;
				background:rgba(255,255,255,1);
				border-radius:4upx;
				border:1upx solid rgba(153,153,153,1);
				padding:0 15upx;
				margin-bottom: 20upx;
				.sfc-input{
					font-size: 24upx;
					height: 57upx;
					line-height: 57upx;
				}
			}
		}
		.btn-box{
			display: flex;
			position: absolute;
			left:30upx;
			right:30upx;
			bottom: 30upx;
			.Reset-btn{
				width:236upx;
				height:77upx;
				line-height:77upx;
				border-radius:4upx;
				border:1px solid rgba(0,121,243,1);
				color:rgba(0,121,243,1);
				text-align: center;
				box-sizing: border-box;
				margin-right:25upx;
			}
			.submit-btn{
				width:236upx;
				height:77upx;
				line-height:77upx;
				background:rgba(0,121,243,1);
				color:#fff;
				border-radius:4upx;
				text-align: center;
				box-sizing: border-box;
			}
		}
	}
	
	.filter {
		padding: 20upx 25upx;
		border-bottom: 1upx solid #ddd;
		.filterTr {
			float: left;
			width: 25%;
			text-align: center;
			font-size: 32upx;
			line-height: 45upx;
			color: #333;
			&.active {
				color: #F5A623;
			}
			&.price_bg {
				background-image: url('https://wap.soufucai.com/img/XCX/sfc/static/filter.png');
				background-position: 130upx center;
				background-repeat: no-repeat;
				background-size: 15upx 29upx;
				&.active.bg_img1 {
					background-image: url('https://wap.soufucai.com/img/XCX/sfc/static/filterS.png');
				}
				&.active.bg_img2 {
					background-image: url('https://wap.soufucai.com/img/XCX/sfc/static/filterJ.png');
				}
			}
			&.filter_bg {
				background-image: url('https://wap.soufucai.com/img/XCX/sfc/static/filter_bg.png');
				background-position: 130upx center;
				background-repeat: no-repeat;
				background-size: 30upx 34upx;
				&.active {
					background-image: url('https://wap.soufucai.com/img/XCX/sfc/static/filter_bgA.png');
				}
			}
		}
	}
	.box {
		padding: 20upx 25upx 0;
		.same {
			position: relative;
			padding: 20upx 0;
			&:before{
				content: '';
				position: absolute;
				left: 25upx;
				bottom: 0;
				border-top: 1upx solid #ddd;
				height: 1upx;
				width: 725upx;
			}
			.same-img {
				width: 144upx;
				height: 144upx;
				overflow: hidden;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 100%;
				.image {
					width: 100%;
					height: 100%;
				}
			}
			.same-detail {
				width: 532upx;
				.title {
					font-size: 28upx;
					line-height: 40upx;
					margin-bottom: 10upx;
					color: #333;
					.moveellipse(2);
				}
				.taps {
					margin-bottom: 15upx;
					.taps-tr {
						font-size: 26upx;
						line-height: 37upx;
						color: #666;
						margin-right: 25upx;
					}
				}
				.price {
					font-size: 30upx;
					line-height: 42upx;
					color: #F23D00;
					font-weight: bold;
					.size {
						float: left;
					}
					.discount {
						padding-right: 118upx;
						background-image: url(https://wap.soufucai.com/img/XCX/sfc/static/discount.png);
						background-position: right center;
						background-repeat: no-repeat;
						background-size: 93upx 37upx;
					}
				}
			}
		}
	}
</style>
