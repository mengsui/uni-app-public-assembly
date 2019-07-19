<template>
	<view style="width: 100%; height: 100%;">
		<view class="myMap" style="width: 100%; height: 100%;" >
			<map id="myMap" style="width: 100%; height: 100%;" 
				:latitude="latitude" 
				:longitude="longitude" 
				:circles="covers"
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
				covers: []
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
					radius: 15,  
                    strokeWidth: 1,  
                    color: "#FB6214",  
                    fillColor: "#FB6214",
				}, {
					latitude: 39.90,
					longitude: 116.39,
					radius: 15,  
                    strokeWidth: 1,  
                    color: "#FB6214",  
                    fillColor: "#FB6214",  
				}, {
					latitude: 39.90,
					longitude: 116.3974,
					radius: 15,  
                    strokeWidth: 1,  
                    color: "#FB6214",  
                    fillColor: "#FB6214",  
				}, {
					latitude: 39.90,
					longitude: 116.397,
					radius: 15,  
                    strokeWidth: 1,  
                    color: "#FB6214",  
                    fillColor: "#FB6214",  
				}];
				
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