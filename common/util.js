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
	// 测试环境
	// baseUrl:"https://test.com/"
	// 正式环境
	baseUrl:"https://xxxx.com/"
};


module.exports = {
	getLocalTime: getLocalTime,
	getHoursTime: getHoursTime,
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
}
