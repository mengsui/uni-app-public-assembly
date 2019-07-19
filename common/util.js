function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

function getLocalTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var  Y , M , D , h , m , s;
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = change(date.getDate()) + ' ';
    h = change(date.getHours()) + ':';
    m = change(date.getMinutes()) + ':';
    s = change(date.getSeconds());
    return Y + M + D + h + m + s;
}
function getHoursTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var  Y , M , D , h , m , s;
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = change(date.getDate()) + ' ';
    h = change(date.getHours()) + ':';
    m = change(date.getMinutes()) + ':';
    s = change(date.getSeconds());
    return h + m + s;
}
function change(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},
	statisticsAdd:function(option){
		uni.request({
			// url:"https://app.soufucai.com/Integral/api/statisticsAdd",
			url:"https://testapp.soufucai.com/Integral/api/statisticsAdd",
			data:{
				browse_type:option.browse_type,
				add_time:option.add_time,
				end_time:option.end_time,
				type:1,
				type_detail:option.type_detail,
				user_id:option.user_id,
				url:option.url,
				product_id:option.product_id,
				title:option.title,
				region_id:option.region_id,
				from:1,
				mobile_phone:option.mobile_phone,
			},
			success(res) {
				console.log("statisticsAdd.success",res);
			},
			fail(err) {
				console.log("statisticsAdd.fail",err);
			}
		})
	},
	phoneAdd:function(option){
		uni.request({
			// url:"https://app.soufucai.com/XsApi/Users/setRecord",
			url:"https://testapp.soufucai.com/XsApi/Users/setRecord",
			data:{
				user_id:option.user_id,
				user_name:option.user_name,
				tel:option.tel,
				region_id:option.region_id
			},
			success(res) {
				console.log("phoneAdd.success",res);
			},
			fail(err) {
				console.log("phoneAdd.fail",err);
			}
		})
	},
	//这里不要随便解开这个是正式站的不可以随便用。需要测试使用 https://testapp.soufucai.com/  这个来进行测试
	// baseUrl:"https://app.soufucai.com/"
	baseUrl:"https://testapp.soufucai.com/"
};


module.exports = {
	getLocalTime:getLocalTime,
	getHoursTime:getHoursTime,
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils
}
