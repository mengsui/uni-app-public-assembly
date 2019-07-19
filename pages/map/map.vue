<template>
	<view style="width: 100%; height: 100%;">
		<view class="myMap" style="width: 100%; height: 100%;" >
			<map id="myMap" style="width: 100%; height: 100%;" 
				:latitude="latitude" 
				:longitude="longitude" 
				:markers="covers"
				:polyline="polyline"
			/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [],
				polyline: [],
				
			};
		},
		onLoad() {
			const vm = this;
			vm.mapInit();
		},
		methods: {
			mapInit() {
				const vm = this;
				const mapContext = uni.createMapContext("myMap");
				vm.covers = [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/map-start.png',
					width: 20,
					height: 20,
					callout: {
						fontSize: 13,
						content: '姓名：赵艺伟\n拜访时间：2019-10-21\n内容内容内容内内容内容内容内容诶内容诶内容内 \n容内容内容诶内容诶容诶内容诶',
						bgColor: "#fff",
						borderRadius: 10,
						padding: 10,
						color: '#2C3240',
						textAlign: 'left'
					}
				},
				{
					latitude: 39.90,
					longitude: 116.3974,
					iconPath: '../../static/map-line.png',
					width: 20,
					height: 20,
					callout: {
						fontSize: 13,
						content: '姓名：赵艺伟\n拜访时间：2019-10-21\n内容内容内容内内容内容内容内容诶内容诶内容内 \n容内容内容诶内容诶容诶内容诶',
						bgColor: "#fff",
						borderRadius: 10,
						padding: 10,
						color: '#2C3240',
						textAlign: 'left'
					}
				}, 
				{
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/map-end.png',
					width: 20,
					height: 20,
					callout: {
						content: '这里写文案\n22',
						bgColor: "#000",
						borderRadius: 10,
						padding: 5,
						color: '#fff',
						textAlign: 'left'
					}
				}];


				// 这个是连接线
				vm.polyline = [{
					points: vm.covers,
					color: "#FB6214",
					width: 3,
					dottedLine: false,
					arrowLine: true
				}]
				mapContext.includePoints({
					points: vm.covers
				});
			}
		},
	}
</script>
<style>
	page {
		width: 100%; height: 100%;
	}
</style>