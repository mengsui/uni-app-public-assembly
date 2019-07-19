(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/common/util.js":
/*!********************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/common/util.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;

  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.') };

}

function getLocalTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y, M, D, h, m, s;
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
  var Y, M, D, h, m, s;
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
    '秒': 1000 },

  humanize: function humanize(milliseconds) {
    var humanize = '';
    for (var key in this.UNITS) {
      if (milliseconds >= this.UNITS[key]) {
        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
        break;
      }
    }
    return humanize || '刚刚';
  },
  format: function format(dateStr) {
    var date = this.parse(dateStr);
    var diff = Date.now() - date.getTime();
    if (diff < this.UNITS['天']) {
      return this.humanize(diff);
    }
    var _format = function _format(number) {
      return number < 10 ? '0' + number : number;
    };
    return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
    _format(date.getHours()) + ':' + _format(date.getMinutes());
  },
  parse: function parse(str) {//将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    var a = str.split(/[^0-9]/);
    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  },
  statisticsAdd: function statisticsAdd(option) {
    uni.request({
      // url:"https://app.soufucai.com/Integral/api/statisticsAdd",
      url: "https://testapp.soufucai.com/Integral/api/statisticsAdd",
      data: {
        browse_type: option.browse_type,
        add_time: option.add_time,
        end_time: option.end_time,
        type: 1,
        type_detail: option.type_detail,
        user_id: option.user_id,
        url: option.url,
        product_id: option.product_id,
        title: option.title,
        region_id: option.region_id,
        from: 1,
        mobile_phone: option.mobile_phone },

      success: function success(res) {
        console.log("statisticsAdd.success", res);
      },
      fail: function fail(err) {
        console.log("statisticsAdd.fail", err);
      } });

  },
  phoneAdd: function phoneAdd(option) {
    uni.request({
      // url:"https://app.soufucai.com/XsApi/Users/setRecord",
      url: "https://testapp.soufucai.com/XsApi/Users/setRecord",
      data: {
        user_id: option.user_id,
        user_name: option.user_name,
        tel: option.tel,
        region_id: option.region_id },

      success: function success(res) {
        console.log("phoneAdd.success", res);
      },
      fail: function fail(err) {
        console.log("phoneAdd.fail", err);
      } });

  },
  //这里不要随便解开这个是正式站的不可以随便用。需要测试使用 https://testapp.soufucai.com/  这个来进行测试
  // baseUrl:"https://app.soufucai.com/"
  baseUrl: "https://testapp.soufucai.com/" };



module.exports = {
  getLocalTime: getLocalTime,
  getHoursTime: getHoursTime,
  formatTime: formatTime,
  formatLocation: formatLocation,
  dateUtils: dateUtils };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/QRCodeAlg.js":
/*!********************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/QRCodeAlg.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = QRCodeAlg; /**
                                                                                                            * 获取单个字符的utf8编码
                                                                                                            * unicode BMP平面约65535个字符
                                                                                                            * @param {num} code
                                                                                                            * return {array}
                                                                                                            */
function unicodeFormat8(code) {
  // 1 byte
  var c0, c1, c2;
  if (code < 128) {
    return [code];
    // 2 bytes
  } else if (code < 2048) {
    c0 = 192 + (code >> 6);
    c1 = 128 + (code & 63);
    return [c0, c1];
    // 3 bytes
  } else {
    c0 = 224 + (code >> 12);
    c1 = 128 + (code >> 6 & 63);
    c2 = 128 + (code & 63);
    return [c0, c1, c2];
  }
}
/**
   * 获取字符串的utf8编码字节串
   * @param {string} string
   * @return {array}
   */
function getUTF8Bytes(string) {
  var utf8codes = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    var utf8 = unicodeFormat8(code);
    for (var j = 0; j < utf8.length; j++) {
      utf8codes.push(utf8[j]);
    }
  }
  return utf8codes;
}
/**
   * 二维码算法实现
   * @param {string} data              要编码的信息字符串
   * @param {num} errorCorrectLevel 纠错等级
   */
function QRCodeAlg(data, errorCorrectLevel) {
  this.typeNumber = -1; //版本
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null; //二维矩阵，存放最终结果
  this.moduleCount = 0; //矩阵大小
  this.dataCache = null; //数据缓存
  this.rsBlocks = null; //版本数据信息
  this.totalDataCount = -1; //可使用的数据量
  this.data = data;
  this.utf8bytes = getUTF8Bytes(data);
  this.make();
}
QRCodeAlg.prototype = {
  constructor: QRCodeAlg,
  /**
                           * 获取二维码矩阵大小
                           * @return {num} 矩阵大小
                           */
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  /**
      * 编码
      */
  make: function make() {
    this.getRightType();
    this.dataCache = this.createData();
    this.createQrcode();
  },
  /**
      * 设置二位矩阵功能图形
      * @param  {bool} test 表示是否在寻找最好掩膜阶段
      * @param  {num} maskPattern 掩膜的版本
      */
  makeImpl: function makeImpl(maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(true, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(true);
    }
    this.mapData(this.dataCache, maskPattern);
  },
  /**
      * 设置二维码的位置探测图形
      * @param  {num} row 探测图形的中心横坐标
      * @param  {num} col 探测图形的中心纵坐标
      */
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  /**
      * 创建二维码
      * @return {[type]} [description]
      */
  createQrcode: function createQrcode() {
    var minLostPoint = 0;
    var pattern = 0;
    var bestModules = null;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
        bestModules = this.modules;
      }
    }
    this.modules = bestModules;
    this.setupTypeInfo(false, pattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(false);
    }
  },
  /**
      * 设置定位图形
      * @return {[type]} [description]
      */
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
      if (this.modules[6][r] != null) {
        continue;
      }
      this.modules[6][r] = r % 2 == 0;
    }
  },
  /**
      * 设置矫正图形
      * @return {[type]} [description]
      */
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  /**
      * 设置版本信息（7以上版本才有）
      * @param  {bool} test 是否处于判断最佳掩膜阶段
      * @return {[type]}      [description]
      */
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  /**
      * 设置格式信息（纠错等级和掩膜版本）
      * @param  {bool} test
      * @param  {num} maskPattern 掩膜版本
      * @return {}
      */
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    // vertical
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
      // horizontal
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    // fixed module
    this.modules[this.moduleCount - 8][8] = !test;
  },
  /**
      * 数据编码
      * @return {[type]} [description]
      */
  createData: function createData() {
    var buffer = new QRBitBuffer();
    var lengthBits = this.typeNumber > 9 ? 16 : 8;
    buffer.put(4, 4); //添加模式
    buffer.put(this.utf8bytes.length, lengthBits);
    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
      buffer.put(this.utf8bytes[i], 8);
    }
    if (buffer.length + 4 <= this.totalDataCount * 8) {
      buffer.put(0, 4);
    }
    // padding
    while (buffer.length % 8 != 0) {
      buffer.putBit(false);
    }
    // padding
    while (true) {
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD0, 8);
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD1, 8);
    }
    return this.createBytes(buffer);
  },
  /**
      * 纠错码编码
      * @param  {buffer} buffer 数据编码
      * @return {[type]}
      */
  createBytes: function createBytes(buffer) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var length = this.rsBlock.length / 3;
    var rsBlocks = new Array();
    for (var i = 0; i < length; i++) {
      var count = this.rsBlock[i * 3 + 0];
      var totalCount = this.rsBlock[i * 3 + 1];
      var dataCount = this.rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        rsBlocks.push([dataCount, totalCount]);
      }
    }
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r][0];
      var ecCount = rsBlocks[r][1] - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var data = new Array(this.totalDataCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;

  },
  /**
      * 布置模块，构建最终信息
      * @param  {} data
      * @param  {} maskPattern
      * @return {}
      */
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  } };

/**
        * 填充字段
        */
QRCodeAlg.PAD0 = 0xEC;
QRCodeAlg.PAD1 = 0x11;
//---------------------------------------------------------------------
// 纠错等级对应的编码
//---------------------------------------------------------------------
var QRErrorCorrectLevel = [1, 0, 3, 2];
//---------------------------------------------------------------------
// 掩膜版本
//---------------------------------------------------------------------
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };

//---------------------------------------------------------------------
// 工具类
//---------------------------------------------------------------------
var QRUtil = {
  /*
               每个版本矫正图形的位置
                */
  PATTERN_POSITION_TABLE: [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]],

  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  /*
                                                           BCH编码格式信息
                                                            */
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  /*
     BCH编码版本信息
      */
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },
  /*
     获取BCH位信息
      */
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },
  /*
     获取版本对应的矫正图形位置
      */
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  /*
     掩膜算法
      */
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);}

  },
  /*
     获取RS的纠错多项式
      */
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },
  /*
     获取评价
      */
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount(),
    lostPoint = 0,
    darkCount = 0;
    for (var row = 0; row < moduleCount; row++) {
      var sameCount = 0;
      var head = qrCode.modules[row][0];
      for (var col = 0; col < moduleCount; col++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (col < moduleCount - 6) {
          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
            if (col < moduleCount - 10) {
              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                lostPoint += 40;
              }
            } else if (col > 3) {
              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 2 评价
        if (row < moduleCount - 1 && col < moduleCount - 1) {
          var count = 0;
          if (current) count++;
          if (qrCode.modules[row + 1][col]) count++;
          if (qrCode.modules[row][col + 1]) count++;
          if (qrCode.modules[row + 1][col + 1]) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
        //level 4 评价
        if (current) {
          darkCount++;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var head = qrCode.modules[0][col];
      for (var row = 0; row < moduleCount; row++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (row < moduleCount - 6) {
          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
            if (row < moduleCount - 10) {
              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                lostPoint += 40;
              }
            } else if (row > 3) {
              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
      }
    }
    // LEVEL4
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  } };


//---------------------------------------------------------------------
// QRMath使用的数学工具
//---------------------------------------------------------------------
var QRMath = {
  /*
               将n转化为a^m
                */
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return QRMath.LOG_TABLE[n];
  },
  /*
     将a^m转化为n
      */
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256) };


for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial 多项式
//---------------------------------------------------------------------
/**
 * 多项式类
 * @param {Array} num   系数
 * @param {num} shift a^shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  /**
      * 多项式乘法
      * @param  {QRPolynomial} e 被乘多项式
      * @return {[type]}   [description]
      */
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },
  /**
      * 多项式模运算
      * @param  {QRPolynomial} e 模多项式
      * @return {}
      */
  mod: function mod(e) {
    var tl = this.getLength(),
    el = e.getLength();
    if (tl - el < 0) {
      return this;
    }
    var num = new Array(tl);
    for (var i = 0; i < tl; i++) {
      num[i] = this.get(i);
    }
    while (num.length >= el) {
      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }
      while (num[0] == 0) {
        num.shift();
      }
    }
    return new QRPolynomial(num, 0);
  } };


//---------------------------------------------------------------------
// RS_BLOCK_TABLE
//---------------------------------------------------------------------
/*
二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
 */
var RS_BLOCK_TABLE = [
// L
// M
// Q
// H
// 1
[1, 26, 19],
[1, 26, 16],
[1, 26, 13],
[1, 26, 9],

// 2
[1, 44, 34],
[1, 44, 28],
[1, 44, 22],
[1, 44, 16],

// 3
[1, 70, 55],
[1, 70, 44],
[2, 35, 17],
[2, 35, 13],

// 4
[1, 100, 80],
[2, 50, 32],
[2, 50, 24],
[4, 25, 9],

// 5
[1, 134, 108],
[2, 67, 43],
[2, 33, 15, 2, 34, 16],
[2, 33, 11, 2, 34, 12],

// 6
[2, 86, 68],
[4, 43, 27],
[4, 43, 19],
[4, 43, 15],

// 7
[2, 98, 78],
[4, 49, 31],
[2, 32, 14, 4, 33, 15],
[4, 39, 13, 1, 40, 14],

// 8
[2, 121, 97],
[2, 60, 38, 2, 61, 39],
[4, 40, 18, 2, 41, 19],
[4, 40, 14, 2, 41, 15],

// 9
[2, 146, 116],
[3, 58, 36, 2, 59, 37],
[4, 36, 16, 4, 37, 17],
[4, 36, 12, 4, 37, 13],

// 10
[2, 86, 68, 2, 87, 69],
[4, 69, 43, 1, 70, 44],
[6, 43, 19, 2, 44, 20],
[6, 43, 15, 2, 44, 16],

// 11
[4, 101, 81],
[1, 80, 50, 4, 81, 51],
[4, 50, 22, 4, 51, 23],
[3, 36, 12, 8, 37, 13],

// 12
[2, 116, 92, 2, 117, 93],
[6, 58, 36, 2, 59, 37],
[4, 46, 20, 6, 47, 21],
[7, 42, 14, 4, 43, 15],

// 13
[4, 133, 107],
[8, 59, 37, 1, 60, 38],
[8, 44, 20, 4, 45, 21],
[12, 33, 11, 4, 34, 12],

// 14
[3, 145, 115, 1, 146, 116],
[4, 64, 40, 5, 65, 41],
[11, 36, 16, 5, 37, 17],
[11, 36, 12, 5, 37, 13],

// 15
[5, 109, 87, 1, 110, 88],
[5, 65, 41, 5, 66, 42],
[5, 54, 24, 7, 55, 25],
[11, 36, 12],

// 16
[5, 122, 98, 1, 123, 99],
[7, 73, 45, 3, 74, 46],
[15, 43, 19, 2, 44, 20],
[3, 45, 15, 13, 46, 16],

// 17
[1, 135, 107, 5, 136, 108],
[10, 74, 46, 1, 75, 47],
[1, 50, 22, 15, 51, 23],
[2, 42, 14, 17, 43, 15],

// 18
[5, 150, 120, 1, 151, 121],
[9, 69, 43, 4, 70, 44],
[17, 50, 22, 1, 51, 23],
[2, 42, 14, 19, 43, 15],

// 19
[3, 141, 113, 4, 142, 114],
[3, 70, 44, 11, 71, 45],
[17, 47, 21, 4, 48, 22],
[9, 39, 13, 16, 40, 14],

// 20
[3, 135, 107, 5, 136, 108],
[3, 67, 41, 13, 68, 42],
[15, 54, 24, 5, 55, 25],
[15, 43, 15, 10, 44, 16],

// 21
[4, 144, 116, 4, 145, 117],
[17, 68, 42],
[17, 50, 22, 6, 51, 23],
[19, 46, 16, 6, 47, 17],

// 22
[2, 139, 111, 7, 140, 112],
[17, 74, 46],
[7, 54, 24, 16, 55, 25],
[34, 37, 13],

// 23
[4, 151, 121, 5, 152, 122],
[4, 75, 47, 14, 76, 48],
[11, 54, 24, 14, 55, 25],
[16, 45, 15, 14, 46, 16],

// 24
[6, 147, 117, 4, 148, 118],
[6, 73, 45, 14, 74, 46],
[11, 54, 24, 16, 55, 25],
[30, 46, 16, 2, 47, 17],

// 25
[8, 132, 106, 4, 133, 107],
[8, 75, 47, 13, 76, 48],
[7, 54, 24, 22, 55, 25],
[22, 45, 15, 13, 46, 16],

// 26
[10, 142, 114, 2, 143, 115],
[19, 74, 46, 4, 75, 47],
[28, 50, 22, 6, 51, 23],
[33, 46, 16, 4, 47, 17],

// 27
[8, 152, 122, 4, 153, 123],
[22, 73, 45, 3, 74, 46],
[8, 53, 23, 26, 54, 24],
[12, 45, 15, 28, 46, 16],

// 28
[3, 147, 117, 10, 148, 118],
[3, 73, 45, 23, 74, 46],
[4, 54, 24, 31, 55, 25],
[11, 45, 15, 31, 46, 16],

// 29
[7, 146, 116, 7, 147, 117],
[21, 73, 45, 7, 74, 46],
[1, 53, 23, 37, 54, 24],
[19, 45, 15, 26, 46, 16],

// 30
[5, 145, 115, 10, 146, 116],
[19, 75, 47, 10, 76, 48],
[15, 54, 24, 25, 55, 25],
[23, 45, 15, 25, 46, 16],

// 31
[13, 145, 115, 3, 146, 116],
[2, 74, 46, 29, 75, 47],
[42, 54, 24, 1, 55, 25],
[23, 45, 15, 28, 46, 16],

// 32
[17, 145, 115],
[10, 74, 46, 23, 75, 47],
[10, 54, 24, 35, 55, 25],
[19, 45, 15, 35, 46, 16],

// 33
[17, 145, 115, 1, 146, 116],
[14, 74, 46, 21, 75, 47],
[29, 54, 24, 19, 55, 25],
[11, 45, 15, 46, 46, 16],

// 34
[13, 145, 115, 6, 146, 116],
[14, 74, 46, 23, 75, 47],
[44, 54, 24, 7, 55, 25],
[59, 46, 16, 1, 47, 17],

// 35
[12, 151, 121, 7, 152, 122],
[12, 75, 47, 26, 76, 48],
[39, 54, 24, 14, 55, 25],
[22, 45, 15, 41, 46, 16],

// 36
[6, 151, 121, 14, 152, 122],
[6, 75, 47, 34, 76, 48],
[46, 54, 24, 10, 55, 25],
[2, 45, 15, 64, 46, 16],

// 37
[17, 152, 122, 4, 153, 123],
[29, 74, 46, 14, 75, 47],
[49, 54, 24, 10, 55, 25],
[24, 45, 15, 46, 46, 16],

// 38
[4, 152, 122, 18, 153, 123],
[13, 74, 46, 32, 75, 47],
[48, 54, 24, 14, 55, 25],
[42, 45, 15, 32, 46, 16],

// 39
[20, 147, 117, 4, 148, 118],
[40, 75, 47, 7, 76, 48],
[43, 54, 24, 22, 55, 25],
[10, 45, 15, 67, 46, 16],

// 40
[19, 148, 118, 6, 149, 119],
[18, 75, 47, 31, 76, 48],
[34, 54, 24, 34, 55, 25],
[20, 45, 15, 61, 46, 16]];


/**
                            * 根据数据获取对应版本
                            * @return {[type]} [description]
                            */
QRCodeAlg.prototype.getRightType = function () {
  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var totalDataCount = 0;
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var dataCount = rsBlock[i * 3 + 2];
      totalDataCount += dataCount * count;
    }
    var lengthBytes = typeNumber > 9 ? 2 : 1;
    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
      this.typeNumber = typeNumber;
      this.rsBlock = rsBlock;
      this.totalDataCount = totalDataCount;
      break;
    }
  }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(num >>> length - i - 1 & 1);
    }
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  } };

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/QS-SharePoster.js":
/*!*************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/QS-SharePoster.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = getSharePoster;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/app.js"));
var _QRCodeAlg = _interopRequireDefault(__webpack_require__(/*! ./QRCodeAlg.js */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/QRCodeAlg.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var ShreUserPosterBackgroundKey = 'ShrePosterBackground_'; // 背景图片缓存名称前缀

function getSharePoster(obj) {
  return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(rs, rj) {var type, posterCanvasId, backgroundImage, reserve, qrCodeArray, imagesArray, setCanvasWH, setCanvasToTempFilePath, setDraw, bgObj, i, imgUrl, imageInfo, _i, poster;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

              _app2.default.showLoading('正在准备名片数据');

              type =








              obj.type, posterCanvasId = obj.posterCanvasId, backgroundImage = obj.backgroundImage, reserve = obj.reserve, qrCodeArray = obj.qrCodeArray, imagesArray = obj.imagesArray, setCanvasWH = obj.setCanvasWH, setCanvasToTempFilePath = obj.setCanvasToTempFilePath, setDraw = obj.setDraw;_context.next = 5;return (
                getShreUserPosterBackground({
                  backgroundImage: backgroundImage,
                  type: type }));case 5:bgObj = _context.sent;

              if (setCanvasWH && typeof setCanvasWH == 'function') setCanvasWH(bgObj, type);if (!(
              imagesArray && imagesArray.length > 0)) {_context.next = 29;break;}
              if (typeof imagesArray == 'function')
              imagesArray = imagesArray(bgObj, type);
              _app2.default.showLoading('正在生成需绘制图片的临时路径');
              i = 0;case 11:if (!(i < imagesArray.length)) {_context.next = 28;break;}if (!
              imagesArray[i].url) {_context.next = 25;break;}
              imgUrl = imagesArray[i].url;_context.next = 16;return (
                _app2.default.downloadFile_PromiseFc(imgUrl));case 16:imagesArray[i].url = _context.sent;
              imageInfo = void 0;if (!(
              imagesArray[i].infoCallBack || imagesArray[i].circleSet && imagesArray[i].circleSet.circle)) {_context.next = 22;break;}_context.next = 21;return (
                _app2.default.getImageInfo_PromiseFc(imgUrl));case 21:imageInfo = _context.sent;case 22:
              if (imagesArray[i].infoCallBack) {
                imagesArray[i] = _objectSpread({}, imagesArray[i],
                imagesArray[i].infoCallBack(imageInfo));

              }
              imagesArray[i] = _objectSpread({}, imagesArray[i], {
                imageInfo: imageInfo });

              console.log(JSON.stringify(imagesArray[i]));case 25:i++;_context.next = 11;break;case 28:


              _app2.default.hideLoading();case 29:if (!

              qrCodeArray) {_context.next = 42;break;}
              if (typeof qrCodeArray == 'function')
              qrCodeArray = qrCodeArray(bgObj, type);
              _app2.default.showLoading('正在生成需绘制图片的临时路径');
              _i = 0;case 33:if (!(_i < qrCodeArray.length)) {_context.next = 41;break;}if (!
              qrCodeArray[_i].image) {_context.next = 38;break;}_context.next = 37;return (
                _app2.default.downloadFile_PromiseFc(qrCodeArray[_i].image));case 37:qrCodeArray[_i].image = _context.sent;case 38:_i++;_context.next = 33;break;case 41:

              _app2.default.hideLoading();case 42:_context.next = 44;return (

                drawShareImage({
                  type: type,
                  posterCanvasId: posterCanvasId,
                  reserve: reserve,
                  imagesArray: imagesArray,
                  bgObj: bgObj,
                  qrCodeArray: qrCodeArray,
                  setCanvasToTempFilePath: setCanvasToTempFilePath,
                  setDraw: setDraw }));case 44:poster = _context.sent;

              _app2.default.hideLoading();
              rs({
                bgObj: bgObj,
                poster: poster,
                type: type });_context.next = 52;break;case 49:_context.prev = 49;_context.t0 = _context["catch"](0);


              //TODO handle the exception
              rj(_context.t0);case 52:case "end":return _context.stop();}}}, _callee, this, [[0, 49]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


}

function drawShareImage(obj) {//绘制名片方法
  var
  type =







  obj.type,posterCanvasId = obj.posterCanvasId,reserve = obj.reserve,bgObj = obj.bgObj,qrCodeArray = obj.qrCodeArray,imagesArray = obj.imagesArray,setCanvasToTempFilePath = obj.setCanvasToTempFilePath,setDraw = obj.setDraw;
  return new Promise(function (rs, rj) {
    _app2.default.showLoading('正在绘制名片');
    var Context = uni.createCanvasContext(posterCanvasId);
    Context.setFillStyle('#2C3240');

    if (bgObj && bgObj.path)
    Context.drawImage(bgObj.path, 0, 0);
    if (imagesArray && imagesArray.length > 0) {
      for (var i = 0; i < imagesArray.length; i++) {
        var img = imagesArray[i];
        console.log(JSON.stringify(img));
        if (img.url) {
          if (img.circleSet && img.circleSet.circle) {
            Context.save();
            Context.beginPath();
            var circleObj = setImageCircle(img);
            Context.arc(circleObj.x, circleObj.y, circleObj.r, 0, 2 * Math.PI, false);
            Context.clip();
          }
          if (img.dWidth && img.dHeight && img.sx && img.sy && img.sWidth && img.sHeight) {
            Context.drawImage(img.url, img.dx || 0, img.dy || 0,
            img.dWidth || false, img.dHeight || false,
            img.sx || false, img.sy || false,
            img.sWidth || false, img.sHeight || false);
          } else if (img.dWidth && img.dHeight) {
            Context.drawImage(img.url, img.dx || 0, img.dy || 0,
            img.dWidth || false, img.dHeight || false);
          } else {
            Context.drawImage(img.url, img.dx || 0, img.dy || 0);
          }
          if (img.circleSet && img.circleSet.circle)
          Context.restore();
        }
      }
    }
    // _app.showToast('准备绘制自定义内容');
    if (setDraw && typeof setDraw == 'function') setDraw({
      Context: Context,
      bgObj: bgObj,
      type: type });

    // _app.showToast('准备绘制二维码');
    if (qrCodeArray && qrCodeArray.length > 0) {
      for (var _i2 = 0; _i2 < qrCodeArray.length; _i2++) {
        drawQrCode(Context, qrCodeArray[_i2]);
      }
    }
    // _app.showToast('准备执行draw方法')
    Context.draw(typeof reserve == 'boolean' ? reserve : false, function () {
      // _app.showToast('进入draw方法回调: ' + JSON.stringify(bgObj));
      var data = {
        x: 0,
        y: 0,
        width: bgObj.width,
        height: bgObj.height,





        destWidth: bgObj.width * 2,
        destHeight: bgObj.height * 2,

        quality: 1 };

      if (setCanvasToTempFilePath && typeof setCanvasToTempFilePath == 'function')
      data = setCanvasToTempFilePath(bgObj, type);
      _app2.default.hideLoading();
      _app2.default.showLoading('正在输出图片');
      uni.canvasToTempFilePath(_objectSpread({},
      data, {
        canvasId: posterCanvasId,
        success: function success(res) {
          _app2.default.hideLoading();
          rs(res);
        },
        fail: function fail(err) {
          console.log('输出图片失败:' + JSON.stringify(err));
          rj('输出图片失败:' + JSON.stringify(err));
        } }));

    });
  });
}

function setImageCircle(obj) {var

  dx =





  obj.dx,dy = obj.dy,dWidth = obj.dWidth,dHeight = obj.dHeight,circleSet = obj.circleSet,imageInfo = obj.imageInfo;var

  x =


  circleSet.x,y = circleSet.y,r = circleSet.r;
  if (!r) {
    var d;
    if (dWidth && dHeight)
    d = dWidth > dHeight ? dHeight : dWidth;else

    d = imageInfo.width > imageInfo.height ? imageInfo.height : imageInfo.width;
    r = d / 2;
  }

  if (x === undefined) x = (dx || 0) + r;
  if (y === undefined) y = (dy || 0) + r;

  return {
    x: x,
    y: y,
    r: r };

}

function drawQrCode(Context, qrCodeObj) {//生成二维码方法， 参考了 诗小柒 的二维码生成器代码
  _app2.default.showLoading('正在生成二维码');
  var qrcodeAlgObjCache = [];
  var options = {
    text: qrCodeObj.text || '', // 生成内容
    size: qrCodeObj.size || 200, // 二维码大小
    background: qrCodeObj.background || '#ffffff', // 背景色
    foreground: qrCodeObj.foreground || '#000000', // 前景色
    pdground: qrCodeObj.pdground || '#000000', // 定位角点颜色
    correctLevel: qrCodeObj.correctLevel || 3, // 容错级别
    image: qrCodeObj.image || '', // 二维码图标
    imageSize: qrCodeObj.imageSize || 40, // 二维码图标大小
    dx: qrCodeObj.dx || 0, // x轴距离
    dy: qrCodeObj.dy || 0 // y轴距离
  };
  var qrCodeAlg = null;
  var d = 0;
  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    d = i;
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (d == l) {
    qrCodeAlg = new _QRCodeAlg.default(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({
      text: options.text,
      correctLevel: options.correctLevel,
      obj: qrCodeAlg });

  }
  var getForeGround = function getForeGround(config) {
    var options = config.options;
    if (options.pdground && (
    config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
    config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
    config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
    {
      return options.pdground;
    }
    return options.foreground;
  };
  var count = qrCodeAlg.getModuleCount();
  var ratioSize = options.size;
  var ratioImgSize = options.imageSize;
  //计算每个点的长宽
  var tileW = (ratioSize / count).toPrecision(4);
  var tileH = (ratioSize / count).toPrecision(4);
  //绘制
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < count; col++) {
      var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
      var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
      var foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options });

      Context.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
      Context.fillRect(options.dx + Math.round(col * tileW), options.dy + Math.round(row * tileH), w, h);
    }
  }
  if (options.image) {




    // 画圆角矩形
    var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
      ctxi.setLineWidth(lineWidth);
      ctxi.setFillStyle(options.background);
      ctxi.setStrokeStyle(options.background);
      ctxi.beginPath(); // draw top and top right corner 
      ctxi.moveTo(x + r, y);
      ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
      ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
      ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
      ctxi.arcTo(x, y, x + r, y, r);
      ctxi.closePath();
      if (fill) {
        ctxi.fill();
      }
      if (stroke) {
        ctxi.stroke();
      }
    };var x = options.dx + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = options.dy + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(Context, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);Context.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
  }
  _app2.default.showLoading('二维码绘制完毕');
  _app2.default.hideLoading();
}

function getShreUserPosterBackground(objs) {//检查背景图是否存在于本地， 若存在直接返回， 否则调用getShreUserPosterBackgroundFc方法
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  var ShreUserPosterBackgroundKeys = ShreUserPosterBackgroundKey + (type || 'default');
  return new Promise(function (resolve, reject) {
    try {
      _app2.default.showLoading('正在获取名片背景图');
      var pbg;

      pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKeys);




      console.log('获取的缓存:' + JSON.stringify(pbg));
      if (pbg && pbg.path && pbg.name) {
        console.log('名片有缓存, 准备获取后端背景图进行对比');
        _app2.default.getPosterUrl(objs).then(function (image) {
          console.log('准备对比name是否相同');
          if (pbg.name === _app2.default.fileNameInPath(image)) {
            console.log('name相同, 判断该背景图是否存在于本地');
            _app2.default.checkFile_PromiseFc(pbg.path).then(function (index) {
              if (index >= 0) {
                console.log('名片save路径存在, 对比宽高信息, 存储并输出');
                _app2.default.getImageInfo_PromiseFc(pbg.path).then(function (imageObj) {
                  var obj = _objectSpread({}, pbg);

                  if (!pbg.width || !pbg.height || pbg.width !== imageObj.width || pbg.height !== imageObj.height) {
                    console.log('宽高对比不通过， 重新获取');
                    getShreUserPosterBackgroundFc(objs, image).then(function (savedFilePath) {
                      _app2.default.hideLoading();
                      resolve(savedFilePath);
                    }).catch(function (err) {
                      reject(err);
                    });
                  } else {
                    console.log('宽高对比通过, 再次存储, 并返回路径');
                    obj = _objectSpread({},
                    pbg, {
                      width: imageObj.width,
                      height: imageObj.height });

                    _app2.default.setStorage(ShreUserPosterBackgroundKeys, obj);
                    _app2.default.hideLoading();
                    resolve(obj);
                  }
                });
              } else {
                console.log('名片save路径不存在, 重新获取名片');
                getShreUserPosterBackgroundFc(objs, image).then(function (savedFilePath) {
                  _app2.default.hideLoading();
                  resolve(savedFilePath);
                }).catch(function (err) {
                  reject(err);
                });
              }
            });
          } else {
            console.log('name不相同, 重新获取名片');
            getShreUserPosterBackgroundFc(objs, image).then(function (savedFilePath) {
              _app2.default.hideLoading();
              resolve(savedFilePath);
            }).catch(function (err) {
              reject(err);
            });
          }
        }).catch(function (err) {
          reject(err);
        });
      } else {
        console.log('名片背景图没有缓存, 准备获取名片背景图');
        getShreUserPosterBackgroundFc(objs).then(function (savedFilePath) {
          _app2.default.hideLoading();
          resolve(savedFilePath);
        }).catch(function (err) {
          reject(err);
        });
      }
    } catch (e) {
      _app2.default.hideLoading();
      _app2.default.showToast('获取分享用户背景图失败:' + JSON.stringify(e));
      console.log(JSON.stringify(e));
    }
  });
}

function getShreUserPosterBackgroundFc(objs, upimage) {//下载并保存背景图方法
  var
  backgroundImage =

  objs.backgroundImage,type = objs.type;
  console.log('获取分享背景图, 尝试清空本地数据');
  var ShreUserPosterBackgroundKeys = ShreUserPosterBackgroundKey + (type || 'default');
  var pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKeys);
  if (pbg && pbg.path && pbg.name) {
    _app2.default.removeSavedFile(pbg.path);
    _app2.default.removeStorageSync(ShreUserPosterBackgroundKeys);
    console.log('尝试清空本地数据结束');
  }
  return new Promise(function (resolve, reject) {
    _app2.default.showLoading('正在下载名片背景图');
    if (upimage) {
      console.log('有从后端获取的背景图片路径');
      console.log('尝试下载并保存背景图');
      var name = _app2.default.fileNameInPath(upimage);
      _app2.default.downLoadAndSaveFile_PromiseFc(upimage).then(function (savedFilePath) {
        if (savedFilePath) {
          console.log('下载并保存背景图成功:' + savedFilePath);
          _app2.default.getImageInfo_PromiseFc(savedFilePath).then(function (imageObj) {
            var returnObj = {
              path: savedFilePath,
              width: imageObj.width,
              height: imageObj.height,
              name: name };

            _app2.default.setStorage(ShreUserPosterBackgroundKeys, returnObj);
            _app2.default.hideLoading();
            resolve(returnObj);
          });
        } else {
          _app2.default.hideLoading();
          reject('not find savedFilePath');
        }
      });
    } else {
      console.log('没有从后端获取的背景图片路径, 尝试从后端获取背景图片路径');
      _app2.default.getPosterUrl(objs).then(function (image) {
        console.log('尝试下载并保存背景图');
        var name = _app2.default.fileNameInPath(image);
        _app2.default.downLoadAndSaveFile_PromiseFc(image).then(function (savedFilePath) {
          if (savedFilePath) {
            console.log('下载并保存背景图成功:' + savedFilePath);
            _app2.default.getImageInfo_PromiseFc(savedFilePath).then(function (imageObj) {
              console.log('获取图片信息成功');
              var returnObj = {
                path: savedFilePath,
                width: imageObj.width,
                height: imageObj.height,
                name: name };



              _app2.default.setStorage(ShreUserPosterBackgroundKeys, returnObj);


              _app2.default.hideLoading();
              resolve(returnObj);
            }).catch(function (err) {
              _app2.default.hideLoading();
              console.log('获取图片信息失败:' + JSON.stringify(err));
            });
          } else {
            _app2.default.hideLoading();
            reject('not find savedFilePath');
          }
        });
      }).catch(function (err) {
        reject(err);
      });
    }

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/app.js":
/*!**************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/QS-SharePoster/app.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _app = {
  getPosterUrl: function getPosterUrl(objs) {// 后端获取背景图的url路径方法
    var
    backgroundImage =

    objs.backgroundImage,type = objs.type;
    return new Promise(function (rs, rj) {
      var image;
      if (backgroundImage)
      image = backgroundImage;else

      switch (type) {//根据type获取背景图, 一般要改成request获取
        case 1:
          image = '';
          break;
        default:
          image =
          'http://imgs.soufucai.com/Uploads/xcx/hsgUniApp/businessCardbg1.png';
          break;}

      if (image)
      rs(image); // resolve图片的路径
      else
        rj('背景图片路径不存在');
    });
  },






  //下面一般不用动他
  shareTypeListSheetArray: {
    array: [0, 1, 2, 3, 4, 5] },
  // 分享类型 0-图文链接 1-纯文字 2-纯图片 3-音乐 4-视频 5-小程序
  getStorage: function getStorage(key, scb, fcb) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        if (res.data && res.data != "") {
          if (scb) scb(res.data);
        } else {
          if (fcb) fcb();
        }
      },
      fail: function fail() {
        if (fcb) fcb();
      } });

  },
  setStorage: function setStorage(key, data) {
    console.log('设置缓存');
    console.log('key：' + key);
    console.log('data：' + JSON.stringify(data));
    uni.setStorage({
      key: key,
      data: data });

  },
  setStorageSync: function setStorageSync(key, data) {
    uni.setStorageSync(key, data);
  },
  getStorageSync: function getStorageSync(key) {
    return uni.getStorageSync(key);
  },
  clearStorageSync: function clearStorageSync() {
    uni.clearStorageSync();
  },
  removeStorageSync: function removeStorageSync(key) {
    uni.removeStorageSync(key);
  },
  showLoading: function showLoading(msg, ifmask) {
    uni.showLoading({
      title: msg,
      mask: ifmask || false });

  },
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  showToast: function showToast(msg, icon) {
    uni.showToast({
      title: msg,
      icon: icon || 'none' });

  },
  getImageInfo: function getImageInfo(url, cb, fcb) {
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      },
      fail: function fail(err) {
        if (fcb && typeof fcb == 'function') fcb(err);
      } });

  },
  downloadFile: function downloadFile(url, cb) {
    uni.downloadFile({
      url: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      } });

  },
  downloadFile_PromiseFc: function downloadFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) !== 'http')
      rs(url);else

      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res && res.tempFilePath)
          rs(res.tempFilePath);else

          rj('not find tempFilePath');
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  saveFile: function saveFile(url) {
    uni.saveFile({
      tempFilePath: url,
      success: function success(res) {
        console.log('保存成功:' + JSON.stringify(res));
      } });

  },
  downLoadAndSaveFile_PromiseFc: function downLoadAndSaveFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) === 'http')
      uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res && res.tempFilePath) {






            uni.saveFile({
              tempFilePath: res.tempFilePath,
              success: function success(res) {
                if (res && res.savedFilePath)
                rs(res.savedFilePath);else

                rj('not find savedFilePath');
              },
              fail: function fail(err) {
                rj(err);
              } });



          } else {
            rj('not find tempFilePath');
          }
        },
        fail: function fail(err) {
          rj(err);
        } });else


      rs(url);
    });
  },
  checkFile_PromiseFc: function checkFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      uni.getSavedFileList({
        success: function success(res) {
          var d = res.fileList;
          var index = d.findIndex(function (item) {
            return item.filePath === url;
          });
          rs(index);
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  removeSavedFile: function removeSavedFile(path) {
    uni.getSavedFileList({
      success: function success(res) {
        var d = res.fileList;
        var index = d.findIndex(function (item) {
          return item.filePath === path;
        });
        if (index >= 0)
        uni.removeSavedFile({
          filePath: path });

      } });

  },
  fileNameInPath: function fileNameInPath(path) {
    var s = path.split("/");
    return s[s.length - 1];
  },
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    return new Promise(function (rs, rj) {
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          rs(res);
        },
        fail: function fail(err) {
          rj(err);
        } });

    });
  },
  previewImage: function previewImage(urls) {
    if (typeof urls == 'string')
    urls = [urls];
    uni.previewImage({
      urls: urls });

  },
  actionSheet: function actionSheet(obj, cb) {
    var sheetArray = [];
    for (var i = 0; i < obj.array.length; i++) {
      switch (obj.array[i]) {
        case 'sinaweibo':
          sheetArray[i] = '新浪微博';
          break;
        case 'qq':
          sheetArray[i] = 'QQ';
          break;
        case 'weixin':
          sheetArray[i] = '微信';
          break;
        case 'WXSceneSession':
          sheetArray[i] = '微信好友';
          break;
        case 'WXSenceTimeline':
          sheetArray[i] = '微信朋友圈';
          break;
        case 'WXSceneFavorite':
          sheetArray[i] = '微信收藏';
          break;
        case 0:
          sheetArray[i] = '图文链接';
          break;
        case 1:
          sheetArray[i] = '纯文字';
          break;
        case 2:
          sheetArray[i] = '纯图片';
          break;
        case 3:
          sheetArray[i] = '音乐';
          break;
        case 4:
          sheetArray[i] = '视频';
          break;
        case 5:
          sheetArray[i] = '小程序';
          break;
        default:
          break;}

    }
    this.showActionSheet(sheetArray, cb);
  },
  showActionSheet: function showActionSheet(sheetArray, cb) {
    uni.showActionSheet({
      itemList: sheetArray,
      success: function success(e) {
        if (cb && typeof cb == 'function') cb(e.tapIndex);
      } });

  },
  getProvider: function getProvider(type, cb, sheet) {
    var _this = this;
    uni.getProvider({
      service: type,
      success: function success(res) {
        if (sheet) {
          var obj = {};
          obj.array = res.provider;
          _this.actionSheet(obj, function (index) {
            if (cb && typeof cb == "function") cb(res.provider[index]);
          });
        } else {
          if (type == 'payment') {
            var providers = res.provider;
            var payTypeArray = [];
            for (var i = 0; i < providers.length; i++) {
              if (providers[i] == 'wxpay') {
                payTypeArray[i] = {
                  name: '微信支付',
                  value: providers[i],
                  img: '/static/image/wei.png' };

              } else if (providers[i] == 'alipay') {
                payTypeArray[i] = {
                  name: "支付宝支付",
                  value: providers[i],
                  img: '/static/image/ali.png' };

              }
            }
            if (cb && typeof cb == "function") cb(payTypeArray);
          } else {
            if (cb && typeof cb == "function") cb(res);
          }
        }
      } });

  } };var _default =


















































































































































































_app;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue":
/*!**************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmd-bottom-nav.vue?vue&type=template&id=b7dddeda& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda&");
/* harmony import */ var _cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmd-bottom-nav.vue?vue&type=script&lang=js& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cmd-bottom-nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda&":
/*!*********************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cmd-bottom-nav.vue?vue&type=template&id=b7dddeda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cmd_bottom_nav_vue_vue_type_template_id_b7dddeda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/echarts/echarts.min.js":
/*!***************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/echarts/echarts.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (t, e) { true ? e(exports) : undefined;}(void 0, function (t) {"use strict";function e(t) {var e = {},n = {},i = t.match(/Firefox\/([\d.]+)/),r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),a = t.match(/Edge\/([\d.]+)/),o = /micromessenger/i.test(t);return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), { browser: n, os: e, node: !1, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };}function n(t, e) {"createCanvas" === t && (Mp = null), bp[t] = e;}function i(t) {if (null == t || "object" != typeof t) return t;var e = t,n = gp.call(t);if ("[object Array]" === n) {if (!E(t)) {e = [];for (var r = 0, a = t.length; a > r; r++) {e[r] = i(t[r]);}}} else if (pp[n]) {if (!E(t)) {var o = t.constructor;if (t.constructor.from) e = o.from(t);else {e = new o(t.length);for (var r = 0, a = t.length; a > r; r++) {e[r] = i(t[r]);}}}} else if (!fp[n] && !E(t) && !T(t)) {e = {};for (var s in t) {t.hasOwnProperty(s) && (e[s] = i(t[s]));}}return e;}function r(t, e, n) {if (!S(e) || !S(t)) return n ? i(e) : t;for (var a in e) {if (e.hasOwnProperty(a)) {var o = t[a],s = e[a];!S(s) || !S(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || E(s) || E(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);}}return t;}function a(t, e) {for (var n = t[0], i = 1, a = t.length; a > i; i++) {n = r(n, t[i], e);}return n;}function o(t, e) {for (var n in e) {e.hasOwnProperty(n) && (t[n] = e[n]);}return t;}function s(t, e, n) {for (var i in e) {e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);}return t;}function l() {return Mp || (Mp = Sp().getContext("2d")), Mp;}function h(t, e) {if (t) {if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; i > n; n++) {if (t[n] === e) return n;}}return -1;}function u(t, e) {function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {t.prototype[r] = i[r];}t.prototype.constructor = t, t.superClass = e;}function c(t, e, n) {t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);}function d(t) {return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;}function f(t, e, n) {if (t && e) if (t.forEach && t.forEach === mp) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) {e.call(n, t[i], i, t);} else for (var a in t) {t.hasOwnProperty(a) && e.call(n, t[a], a, t);}}function p(t, e, n) {if (t && e) {if (t.map && t.map === _p) return t.map(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {i.push(e.call(n, t[r], r, t));}return i;}}function g(t, e, n, i) {if (t && e) {if (t.reduce && t.reduce === wp) return t.reduce(e, n, i);for (var r = 0, a = t.length; a > r; r++) {n = e.call(i, n, t[r], r, t);}return n;}}function v(t, e, n) {if (t && e) {if (t.filter && t.filter === yp) return t.filter(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {e.call(n, t[r], r, t) && i.push(t[r]);}return i;}}function m(t, e, n) {if (t && e) for (var i = 0, r = t.length; r > i; i++) {if (e.call(n, t[i], i, t)) return t[i];}}function y(t, e) {var n = xp.call(arguments, 2);return function () {return t.apply(e, n.concat(xp.call(arguments)));};}function x(t) {var e = xp.call(arguments, 1);return function () {return t.apply(this, e.concat(xp.call(arguments)));};}function _(t) {return "[object Array]" === gp.call(t);}function w(t) {return "function" == typeof t;}function b(t) {return "[object String]" === gp.call(t);}function S(t) {var e = typeof t;return "function" === e || !!t && "object" === e;}function M(t) {return !!fp[gp.call(t)];}function I(t) {return !!pp[gp.call(t)];}function T(t) {return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;}function C(t) {return t !== t;}function D() {for (var t = 0, e = arguments.length; e > t; t++) {if (null != arguments[t]) return arguments[t];}}function A(t, e) {return null != t ? t : e;}function k(t, e, n) {return null != t ? t : null != e ? e : n;}function P() {return Function.call.apply(xp, arguments);}function L(t) {if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;}function O(t, e) {if (!t) throw new Error(e);}function z(t) {return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");}function B(t) {t[Ip] = !0;}function E(t) {return t[Ip];}function N(t) {function e(t, e) {n ? i.set(t, e) : i.set(e, t);}var n = _(t);this.data = {};var i = this;t instanceof N ? t.each(e) : t && f(t, e);}function R(t) {return new N(t);}function F(t, e) {for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) {n[i] = t[i];}var r = t.length;for (i = 0; i < e.length; i++) {n[i + r] = e[i];}return n;}function V() {}function G(t, e) {var n = new Cp(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;}function H(t, e) {return t[0] = e[0], t[1] = e[1], t;}function W(t) {var e = new Cp(2);return e[0] = t[0], e[1] = t[1], e;}function X(t, e, n) {return t[0] = e, t[1] = n, t;}function Y(t, e, n) {return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;}function q(t, e, n, i) {return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;}function j(t, e, n) {return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;}function Z(t) {return Math.sqrt(U(t));}function U(t) {return t[0] * t[0] + t[1] * t[1];}function K(t, e, n) {return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;}function $(t, e, n) {return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;}function Q(t, e) {return t[0] * e[0] + t[1] * e[1];}function J(t, e, n) {return t[0] = e[0] * n, t[1] = e[1] * n, t;}function te(t, e) {var n = Z(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;}function ee(t, e) {return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));}function ne(t, e) {return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);}function ie(t, e) {return t[0] = -e[0], t[1] = -e[1], t;}function re(t, e, n, i) {return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;}function ae(t, e, n) {var i = e[0],r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;}function oe(t, e, n) {return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;}function se(t, e, n) {return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;}function le() {this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);}function he(t, e) {return { target: t, topTarget: e && e.topTarget };}function ue(t, e) {var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;}function ce(t, e, n, i, r, a) {var o = t._$handlers;if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;n = ue(t, n), o[e] || (o[e] = []);for (var s = 0; s < o[e].length; s++) {if (o[e][s].h === i) return t;}var l = { h: i, one: a, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast },h = o[e].length - 1,u = o[e][h];return u && u.callAtLast ? o[e].splice(h, 0, l) : o[e].push(l), t;}function de(t) {return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };}function fe(t, e, n, i) {return n = n || {}, i || !dp.canvasSupported ? pe(t, e, n) : dp.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : pe(t, e, n), n;}function pe(t, e, n) {var i = de(t);n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;}function ge(t, e, n) {if (e = e || window.event, null != e.zrX) return e;var i = e.type,r = i && i.indexOf("touch") >= 0;if (r) {var a = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];a && fe(t, a, e, n);} else fe(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var o = e.button;return null == e.which && void 0 !== o && Ep.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;}function ve(t, e, n) {Bp ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);}function me(t, e, n) {Bp ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);}function ye(t) {return 2 === t.which || 3 === t.which;}function xe(t) {var e = t[1][0] - t[0][0],n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);}function _e(t) {return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];}function we(t, e, n) {return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: be };}function be() {Np(this.event);}function Se() {}function Me(t, e, n) {if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {for (var i, r = t; r;) {if (r.clipPath && !r.clipPath.contain(e, n)) return !1;r.silent && (i = !0), r = r.parent;}return i ? Vp : !0;}return !1;}function Ie() {var t = new Wp(6);return Te(t), t;}function Te(t) {return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;}function Ce(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;}function De(t, e, n) {var i = e[0] * n[0] + e[2] * n[1],r = e[1] * n[0] + e[3] * n[1],a = e[0] * n[2] + e[2] * n[3],o = e[1] * n[2] + e[3] * n[3],s = e[0] * n[4] + e[2] * n[5] + e[4],l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;}function Ae(t, e, n) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;}function ke(t, e, n) {var i = e[0],r = e[2],a = e[4],o = e[1],s = e[3],l = e[5],h = Math.sin(n),u = Math.cos(n);return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t;}function Pe(t, e, n) {var i = n[0],r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;}function Le(t, e) {var n = e[0],i = e[2],r = e[4],a = e[1],o = e[3],s = e[5],l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;}function Oe(t) {var e = Ie();return Ce(e, t), e;}function ze(t) {return t > qp || -qp > t;}function Be(t) {this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;}function Ee(t) {return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;}function Ne(t) {return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;}function Re(t) {return 0 > t ? 0 : t > 1 ? 1 : t;}function Fe(t) {return Ee(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));}function Ve(t) {return Re(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));}function Ge(t, e, n) {return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;}function He(t, e, n) {return t + (e - t) * n;}function We(t, e, n, i, r) {return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;}function Xe(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;}function Ye(t, e) {og && Xe(og, e), og = ag.put(t, og || e.slice());}function qe(t, e) {if (t) {e = e || [];var n = ag.get(t);if (n) return Xe(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in rg) return Xe(e, rg[i]), Ye(t, e), e;if ("#" !== i.charAt(0)) {var r = i.indexOf("("),a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {var o = i.substr(0, r),s = i.substr(r + 1, a - (r + 1)).split(","),l = 1;switch (o) {case "rgba":if (4 !== s.length) return void We(e, 0, 0, 0, 1);l = Ve(s.pop());case "rgb":return 3 !== s.length ? void We(e, 0, 0, 0, 1) : (We(e, Fe(s[0]), Fe(s[1]), Fe(s[2]), l), Ye(t, e), e);case "hsla":return 4 !== s.length ? void We(e, 0, 0, 0, 1) : (s[3] = Ve(s[3]), je(s, e), Ye(t, e), e);case "hsl":return 3 !== s.length ? void We(e, 0, 0, 0, 1) : (je(s, e), Ye(t, e), e);default:return;}}We(e, 0, 0, 0, 1);} else {if (4 === i.length) {var h = parseInt(i.substr(1), 16);return h >= 0 && 4095 >= h ? (We(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), Ye(t, e), e) : void We(e, 0, 0, 0, 1);}if (7 === i.length) {var h = parseInt(i.substr(1), 16);return h >= 0 && 16777215 >= h ? (We(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), Ye(t, e), e) : void We(e, 0, 0, 0, 1);}}}}function je(t, e) {var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,i = Ve(t[1]),r = Ve(t[2]),a = .5 >= r ? r * (i + 1) : r + i - r * i,o = 2 * r - a;return e = e || [], We(e, Ee(255 * Ge(o, a, n + 1 / 3)), Ee(255 * Ge(o, a, n)), Ee(255 * Ge(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;}function Ze(t) {if (t) {var e,n,i = t[0] / 255,r = t[1] / 255,a = t[2] / 255,o = Math.min(i, r, a),s = Math.max(i, r, a),l = s - o,h = (s + o) / 2;if (0 === l) e = 0, n = 0;else {n = .5 > h ? l / (s + o) : l / (2 - s - o);var u = ((s - i) / 6 + l / 2) / l,c = ((s - r) / 6 + l / 2) / l,d = ((s - a) / 6 + l / 2) / l;i === s ? e = d - c : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1);}var f = [360 * e, n, h];return null != t[3] && f.push(t[3]), f;}}function Ue(t, e) {var n = qe(t);if (n) {for (var i = 0; 3 > i; i++) {n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);}return en(n, 4 === n.length ? "rgba" : "rgb");}}function Ke(t) {var e = qe(t);return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;}function $e(t, e, n) {if (e && e.length && t >= 0 && 1 >= t) {n = n || [];var i = t * (e.length - 1),r = Math.floor(i),a = Math.ceil(i),o = e[r],s = e[a],l = i - r;return n[0] = Ee(He(o[0], s[0], l)), n[1] = Ee(He(o[1], s[1], l)), n[2] = Ee(He(o[2], s[2], l)), n[3] = Re(He(o[3], s[3], l)), n;}}function Qe(t, e, n) {if (e && e.length && t >= 0 && 1 >= t) {var i = t * (e.length - 1),r = Math.floor(i),a = Math.ceil(i),o = qe(e[r]),s = qe(e[a]),l = i - r,h = en([Ee(He(o[0], s[0], l)), Ee(He(o[1], s[1], l)), Ee(He(o[2], s[2], l)), Re(He(o[3], s[3], l))], "rgba");return n ? { color: h, leftIndex: r, rightIndex: a, value: i } : h;}}function Je(t, e, n, i) {return t = qe(t), t ? (t = Ze(t), null != e && (t[0] = Ne(e)), null != n && (t[1] = Ve(n)), null != i && (t[2] = Ve(i)), en(je(t), "rgba")) : void 0;}function tn(t, e) {return t = qe(t), t && null != e ? (t[3] = Re(e), en(t, "rgba")) : void 0;}function en(t, e) {if (t && t.length) {var n = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";}}function nn(t, e) {return t[e];}function rn(t, e, n) {t[e] = n;}function an(t, e, n) {return (e - t) * n + t;}function on(t, e, n) {return n > .5 ? e : t;}function sn(t, e, n, i, r) {var a = t.length;if (1 === r) for (var o = 0; a > o; o++) {i[o] = an(t[o], e[o], n);} else for (var s = a && t[0].length, o = 0; a > o; o++) {for (var l = 0; s > l; l++) {i[o][l] = an(t[o][l], e[o][l], n);}}}function ln(t, e, n) {var i = t.length,r = e.length;if (i !== r) {var a = i > r;if (a) t.length = r;else for (var o = i; r > o; o++) {t.push(1 === n ? e[o] : ug.call(e[o]));}}for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {isNaN(t[o][l]) && (t[o][l] = e[o][l]);}}}function hn(t, e, n) {if (t === e) return !0;var i = t.length;if (i !== e.length) return !1;if (1 === n) {for (var r = 0; i > r; r++) {if (t[r] !== e[r]) return !1;}} else for (var a = t[0].length, r = 0; i > r; r++) {for (var o = 0; a > o; o++) {if (t[r][o] !== e[r][o]) return !1;}}return !0;}function un(t, e, n, i, r, a, o, s, l) {var h = t.length;if (1 === l) for (var u = 0; h > u; u++) {s[u] = cn(t[u], e[u], n[u], i[u], r, a, o);} else for (var c = t[0].length, u = 0; h > u; u++) {for (var d = 0; c > d; d++) {s[u][d] = cn(t[u][d], e[u][d], n[u][d], i[u][d], r, a, o);}}}function cn(t, e, n, i, r, a, o) {var s = .5 * (n - t),l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;}function dn(t) {if (d(t)) {var e = t.length;if (d(t[0])) {for (var n = [], i = 0; e > i; i++) {n.push(ug.call(t[i]));}return n;}return ug.call(t);}return t;}function fn(t) {return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";}function pn(t) {var e = t[t.length - 1].value;return d(e && e[0]) ? 2 : 1;}function gn(t, e, n, i, r, a) {var o = t._getter,s = t._setter,l = "spline" === e,h = i.length;if (h) {var u,c = i[0].value,f = d(c),p = !1,g = !1,v = f ? pn(i) : 0;i.sort(function (t, e) {return t.time - e.time;}), u = i[h - 1].time;for (var m = [], y = [], x = i[0].value, _ = !0, w = 0; h > w; w++) {m.push(i[w].time / u);var b = i[w].value;if (f && hn(b, x, v) || !f && b === x || (_ = !1), x = b, "string" == typeof b) {var S = qe(b);S ? (b = S, p = !0) : g = !0;}y.push(b);}if (a || !_) {for (var M = y[h - 1], w = 0; h - 1 > w; w++) {f ? ln(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);}f && ln(o(t._target, r), M, v);var I,T,C,D,A,k,P = 0,L = 0;if (p) var O = [0, 0, 0, 0];var z = function z(t, e) {var n;if (0 > e) n = 0;else if (L > e) {for (I = Math.min(P + 1, h - 1), n = I; n >= 0 && !(m[n] <= e); n--) {;}n = Math.min(n, h - 2);} else {for (n = P; h > n && !(m[n] > e); n++) {;}n = Math.min(n - 1, h - 2);}P = n, L = e;var i = m[n + 1] - m[n];if (0 !== i) if (T = (e - m[n]) / i, l) {if (D = y[n], C = y[0 === n ? n : n - 1], A = y[n > h - 2 ? h - 1 : n + 1], k = y[n > h - 3 ? h - 1 : n + 2], f) un(C, D, A, k, T, T * T, T * T * T, o(t, r), v);else {var a;if (p) a = un(C, D, A, k, T, T * T, T * T * T, O, 1), a = fn(O);else {if (g) return on(D, A, T);a = cn(C, D, A, k, T, T * T, T * T * T);}s(t, r, a);}} else if (f) sn(y[n], y[n + 1], T, o(t, r), v);else {var a;if (p) sn(y[n], y[n + 1], T, O, 1), a = fn(O);else {if (g) return on(y[n], y[n + 1], T);a = an(y[n], y[n + 1], T);}s(t, r, a);}},B = new Be({ target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: z, ondestroy: n });return e && "spline" !== e && (B.easing = e), B;}}}function vn(t, e, n, i, r, a, o, s) {function l() {u--, u || a && a();}b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), mn(t, "", t, e, n, i, s);var h = t.animators.slice(),u = h.length;u || a && a();for (var c = 0; c < h.length; c++) {h[c].done(l).start(r, o);}}function mn(t, e, n, i, r, a, o) {var s = {},l = 0;for (var h in i) {i.hasOwnProperty(h) && (null != n[h] ? S(i[h]) && !d(i[h]) ? mn(t, e ? e + "." + h : h, n[h], i[h], r, a, o) : (o ? (s[h] = n[h], yn(t, e, h, i[h])) : s[h] = i[h], l++) : null == i[h] || o || yn(t, e, h, i[h]));}l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0);}function yn(t, e, n, i) {if (e) {var r = {};r[e] = {}, r[e][n] = i, t.attr(r);} else t.attr(n, i);}function xn(t, e, n, i) {0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;}function _n(t) {for (var e = 0; t >= Sg;) {e |= 1 & t, t >>= 1;}return t + e;}function wn(t, e, n, i) {var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {for (; n > r && i(t[r], t[r - 1]) < 0;) {r++;}bn(t, e, r);} else for (; n > r && i(t[r], t[r - 1]) >= 0;) {r++;}return r - e;}function bn(t, e, n) {for (n--; n > e;) {var i = t[e];t[e++] = t[n], t[n--] = i;}}function Sn(t, e, n, i, r) {for (i === e && i++; n > i; i++) {for (var a, o = t[i], s = e, l = i; l > s;) {a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;}var h = i - s;switch (h) {case 3:t[s + 3] = t[s + 2];case 2:t[s + 2] = t[s + 1];case 1:t[s + 1] = t[s];break;default:for (; h > 0;) {t[s + h] = t[s + h - 1], h--;}}t[s] = o;}}function Mn(t, e, n, i, r, a) {var o = 0,s = 0,l = 1;if (a(t, e[n + r]) > 0) {for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) {o = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s), o += r, l += r;} else {for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) {o = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s);var h = o;o = r - l, l = r - h;}for (o++; l > o;) {var u = o + (l - o >>> 1);a(t, e[n + u]) > 0 ? o = u + 1 : l = u;}return l;}function In(t, e, n, i, r, a) {var o = 0,s = 0,l = 1;if (a(t, e[n + r]) < 0) {for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) {o = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s);var h = o;o = r - l, l = r - h;} else {for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) {o = l, l = (l << 1) + 1, 0 >= l && (l = s);}l > s && (l = s), o += r, l += r;}for (o++; l > o;) {var u = o + (l - o >>> 1);a(t, e[n + u]) < 0 ? l = u : o = u + 1;}return l;}function Tn(t, e) {function n(t, e) {l[c] = t, h[c] = e, c += 1;}function i() {for (; c > 1;) {var t = c - 2;if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;else if (h[t] > h[t + 1]) break;a(t);}}function r() {for (; c > 1;) {var t = c - 2;t > 0 && h[t - 1] < h[t + 1] && t--, a(t);}}function a(n) {var i = l[n],r = h[n],a = l[n + 1],u = h[n + 1];h[n] = r + u, n === c - 3 && (l[n + 1] = l[n + 2], h[n + 1] = h[n + 2]), c--;var d = In(t[a], t, i, r, 0, e);i += d, r -= d, 0 !== r && (u = Mn(t[i + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(i, r, a, u) : s(i, r, a, u)));}function o(n, i, r, a) {var o = 0;for (o = 0; i > o; o++) {d[o] = t[n + o];}var s = 0,l = r,h = n;if (t[h++] = t[l++], 0 !== --a) {if (1 === i) {for (o = 0; a > o; o++) {t[h + o] = t[l + o];}return void (t[h + a] = d[s]);}for (var c, f, p, g = u;;) {c = 0, f = 0, p = !1;do {if (e(t[l], d[s]) < 0) {if (t[h++] = t[l++], f++, c = 0, 0 === --a) {p = !0;break;}} else if (t[h++] = d[s++], c++, f = 0, 1 === --i) {p = !0;break;}} while (g > (c | f));if (p) break;do {if (c = In(t[l], d, s, i, 0, e), 0 !== c) {for (o = 0; c > o; o++) {t[h + o] = d[s + o];}if (h += c, s += c, i -= c, 1 >= i) {p = !0;break;}}if (t[h++] = t[l++], 0 === --a) {p = !0;break;}if (f = Mn(d[s], t, l, a, 0, e), 0 !== f) {for (o = 0; f > o; o++) {t[h + o] = t[l + o];}if (h += f, l += f, a -= f, 0 === a) {p = !0;break;}}if (t[h++] = d[s++], 1 === --i) {p = !0;break;}g--;} while (c >= Mg || f >= Mg);if (p) break;0 > g && (g = 0), g += 2;}if (u = g, 1 > u && (u = 1), 1 === i) {for (o = 0; a > o; o++) {t[h + o] = t[l + o];}t[h + a] = d[s];} else {if (0 === i) throw new Error();for (o = 0; i > o; o++) {t[h + o] = d[s + o];}}} else for (o = 0; i > o; o++) {t[h + o] = d[s + o];}}function s(n, i, r, a) {var o = 0;for (o = 0; a > o; o++) {d[o] = t[r + o];}var s = n + i - 1,l = a - 1,h = r + a - 1,c = 0,f = 0;if (t[h--] = t[s--], 0 !== --i) {if (1 === a) {for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) {t[f + o] = t[c + o];}return void (t[h] = d[l]);}for (var p = u;;) {var g = 0,v = 0,m = !1;do {if (e(d[l], t[s]) < 0) {if (t[h--] = t[s--], g++, v = 0, 0 === --i) {m = !0;break;}} else if (t[h--] = d[l--], v++, g = 0, 1 === --a) {m = !0;break;}} while (p > (g | v));if (m) break;do {if (g = i - In(d[l], t, n, i, i - 1, e), 0 !== g) {for (h -= g, s -= g, i -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) {t[f + o] = t[c + o];}if (0 === i) {m = !0;break;}}if (t[h--] = d[l--], 1 === --a) {m = !0;break;}if (v = a - Mn(t[s], d, 0, a, a - 1, e), 0 !== v) {for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) {t[f + o] = d[c + o];}if (1 >= a) {m = !0;break;}}if (t[h--] = t[s--], 0 === --i) {m = !0;break;}p--;} while (g >= Mg || v >= Mg);if (m) break;0 > p && (p = 0), p += 2;}if (u = p, 1 > u && (u = 1), 1 === a) {for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) {t[f + o] = t[c + o];}t[h] = d[l];} else {if (0 === a) throw new Error();for (c = h - (a - 1), o = 0; a > o; o++) {t[c + o] = d[o];}}} else for (c = h - (a - 1), o = 0; a > o; o++) {t[c + o] = d[o];}}var l,h,u = Mg,c = 0,d = [];l = [], h = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;}function Cn(t, e, n, i) {n || (n = 0), i || (i = t.length);var r = i - n;if (!(2 > r)) {var a = 0;if (Sg > r) return a = wn(t, n, i, e), void Sn(t, n, i, n + a, e);var o = new Tn(t, e),s = _n(r);do {if (a = wn(t, n, i, e), s > a) {var l = r;l > s && (l = s), Sn(t, n, n + l, n + a, e), a = l;}o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;} while (0 !== r);o.forceMergeRuns();}}function Dn(t, e) {return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;}function An(t, e, n) {var i = null == e.x ? 0 : e.x,r = null == e.x2 ? 1 : e.x2,a = null == e.y ? 0 : e.y,o = null == e.y2 ? 0 : e.y2;e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;var s = t.createLinearGradient(i, a, r, o);return s;}function kn(t, e, n) {var i = n.width,r = n.height,a = Math.min(i, r),o = null == e.x ? .5 : e.x,s = null == e.y ? .5 : e.y,l = null == e.r ? .5 : e.r;e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);var h = t.createRadialGradient(o, s, 0, o, s, l);return h;}function Pn() {return !1;}function Ln(t, e, n) {var i = Sp(),r = e.getWidth(),a = e.getHeight(),o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;}function On(t) {if ("string" == typeof t) {var e = Rg.get(t);return e && e.image;}return t;}function zn(t, e, n, i, r) {if (t) {if ("string" == typeof t) {if (e && e.__zrImageSrc === t || !n) return e;var a = Rg.get(t),o = { hostEl: n, cb: i, cbPayload: r };return a ? (e = a.image, !En(e) && a.pending.push(o)) : (e = new Image(), e.onload = e.onerror = Bn, Rg.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;}return t;}return e;}function Bn() {var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {var n = t.pending[e],i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();}t.pending.length = 0;}function En(t) {return t && t.width && t.height;}function Nn(t, e) {e = e || Wg;var n = t + ":" + e;if (Fg[n]) return Fg[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) {r = Math.max(Un(i[a], e).width, r);}return Vg > Gg && (Vg = 0, Fg = {}), Vg++, Fg[n] = r, r;}function Rn(t, e, n, i, r, a, o, s) {return o ? Vn(t, e, n, i, r, a, o, s) : Fn(t, e, n, i, r, a, s);}function Fn(t, e, n, i, r, a, o) {var s = Kn(t, e, r, a, o),l = Nn(t, e);r && (l += r[1] + r[3]);var h = s.outerHeight,u = Gn(0, l, n),c = Hn(0, h, i),d = new xn(u, c, l, h);return d.lineHeight = s.lineHeight, d;}function Vn(t, e, n, i, r, a, o, s) {var l = $n(t, { rich: o, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: a }),h = l.outerWidth,u = l.outerHeight,c = Gn(0, h, n),d = Hn(0, u, i);return new xn(c, d, h, u);}function Gn(t, e, n) {return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;}function Hn(t, e, n) {return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;}function Wn(t, e, n) {var i = e.x,r = e.y,a = e.height,o = e.width,s = a / 2,l = "left",h = "top";switch (t) {case "left":i -= n, r += s, l = "right", h = "middle";break;case "right":i += n + o, r += s, h = "middle";break;case "top":i += o / 2, r -= n, l = "center", h = "bottom";break;case "bottom":i += o / 2, r += a + n, l = "center";break;case "inside":i += o / 2, r += s, l = "center", h = "middle";break;case "insideLeft":i += n, r += s, h = "middle";break;case "insideRight":i += o - n, r += s, l = "right", h = "middle";break;case "insideTop":i += o / 2, r += n, l = "center";break;case "insideBottom":i += o / 2, r += a - n, l = "center", h = "bottom";break;case "insideTopLeft":i += n, r += n;break;case "insideTopRight":i += o - n, r += n, l = "right";break;case "insideBottomLeft":i += n, r += a - n, h = "bottom";break;case "insideBottomRight":i += o - n, r += a - n, l = "right", h = "bottom";}return { x: i, y: r, textAlign: l, textVerticalAlign: h };}function Xn(t, e, n, i, r) {if (!e) return "";var a = (t + "").split("\n");r = Yn(e, n, i, r);for (var o = 0, s = a.length; s > o; o++) {a[o] = qn(a[o], r);}return a.join("\n");}function Yn(t, e, n, i) {i = o({}, i), i.font = e;var n = A(n, "...");i.maxIterations = A(i.maxIterations, 2);var r = i.minChar = A(i.minChar, 0);i.cnCharWidth = Nn("国", e);var a = i.ascCharWidth = Nn("a", e);i.placeholder = A(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {s -= a;}var h = Nn(n, e);return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i;}function qn(t, e) {var n = e.containerWidth,i = e.font,r = e.contentWidth;if (!n) return "";var a = Nn(t, i);if (n >= a) return t;for (var o = 0;; o++) {if (r >= a || o >= e.maxIterations) {t += e.ellipsis;break;}var s = 0 === o ? jn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;t = t.substr(0, s), a = Nn(t, i);}return "" === t && (t = e.placeholder), t;}function jn(t, e, n, i) {for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {var s = t.charCodeAt(a);r += s >= 0 && 127 >= s ? n : i;}return a;}function Zn(t) {return Nn("国", t);}function Un(t, e) {return Xg.measureText(t, e);}function Kn(t, e, n, i, r) {null != t && (t += "");var a = A(i, Zn(e)),o = t ? t.split("\n") : [],s = o.length * a,l = s;if (n && (l += n[0] + n[2]), t && r) {var h = r.outerHeight,u = r.outerWidth;if (null != h && l > h) t = "", o = [];else if (null != u) for (var c = Yn(u - (n ? n[1] + n[3] : 0), e, r.ellipsis, { minChar: r.minChar, placeholder: r.placeholder }), d = 0, f = o.length; f > d; d++) {o[d] = qn(o[d], c);}}return { lines: o, height: s, outerHeight: l, lineHeight: a };}function $n(t, e) {var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = Hg.lastIndex = 0; null != (i = Hg.exec(t));) {var a = i.index;a > r && Qn(n, t.substring(r, a)), Qn(n, i[2], i[1]), r = Hg.lastIndex;}r < t.length && Qn(n, t.substring(r, t.length));var o = n.lines,s = 0,l = 0,h = [],u = e.textPadding,c = e.truncate,d = c && c.outerWidth,f = c && c.outerHeight;u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));for (var p = 0; p < o.length; p++) {for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {var x = g.tokens[y],_ = x.styleName && e.rich[x.styleName] || {},w = x.textPadding = _.textPadding,b = x.font = _.font || e.font,S = x.textHeight = A(_.textHeight, Zn(b));if (w && (S += w[0] + w[2]), x.height = S, x.lineHeight = k(_.textLineHeight, e.textLineHeight, S), x.textAlign = _ && _.textAlign || e.textAlign, x.textVerticalAlign = _ && _.textVerticalAlign || "middle", null != f && s + x.lineHeight > f) return { lines: [], width: 0, height: 0 };x.textWidth = Nn(x.text, b);var M = _.textWidth,I = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) x.percentWidth = M, h.push(x), M = 0;else {if (I) {M = x.textWidth;var T = _.textBackgroundColor,C = T && T.image;C && (C = On(C), En(C) && (M = Math.max(M, C.width * S / C.height)));}var D = w ? w[1] + w[3] : 0;M += D;var P = null != d ? d - m : null;null != P && M > P && (!I || D > P ? (x.text = "", x.textWidth = M = 0) : (x.text = Xn(x.text, P - D, b, c.ellipsis, { minChar: c.minChar }), x.textWidth = Nn(x.text, b), M = x.textWidth + D));}m += x.width = M, _ && (v = Math.max(v, x.lineHeight));}g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);}n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);for (var p = 0; p < h.length; p++) {var x = h[p],L = x.percentWidth;x.width = parseInt(L, 10) / 100 * l;}return n;}function Qn(t, e, n) {for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {var s = r[o],l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {var h = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,u = h.length;1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l);}}}function Jn(t) {var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && z(e) || t.textFont || t.font;}function ti(t, e) {var n,i,r,a,o = e.x,s = e.y,l = e.width,h = e.height,u = e.r;0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);}function ei(t) {return ni(t), f(t.rich, ni), t;}function ni(t) {if (t) {t.font = Jn(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || qg[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || jg[n] ? n : "top";var i = t.textPadding;i && (t.textPadding = L(t.textPadding));}}function ii(t, e, n, i, r, a) {i.rich ? ai(t, e, n, i, r, a) : ri(t, e, n, i, r, a);}function ri(t, e, n, i, r, a) {var o,s = hi(i),l = !1,h = e.__attrCachedBy === Dg.PLAIN_TEXT;a !== Ag ? (a && (o = a.style, l = !s && h && o), e.__attrCachedBy = s ? Dg.NONE : Dg.PLAIN_TEXT) : h && (e.__attrCachedBy = Dg.NONE);var u = i.font || Yg;l && u === (o.font || Yg) || (e.font = u);var c = t.__computedFont;t.__styleFont !== u && (t.__styleFont = u, c = t.__computedFont = e.font);var d = i.textPadding,f = i.textLineHeight,p = t.__textCotentBlock;(!p || t.__dirtyText) && (p = t.__textCotentBlock = Kn(n, c, d, f, i.truncate));var g = p.outerHeight,v = p.lines,m = p.lineHeight,y = di(g, i, r),x = y.baseX,_ = y.baseY,w = y.textAlign || "left",b = y.textVerticalAlign;si(e, i, r, x, _);var S = Hn(_, g, b),M = x,I = S;if (s || d) {var T = Nn(n, c),C = T;d && (C += d[1] + d[3]);var D = Gn(x, C, w);s && ui(t, e, i, D, S, C, g), d && (M = mi(x, w, d), I += d[0]);}e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;for (var A = 0; A < Zg.length; A++) {var k = Zg[A],P = k[0],L = k[1],O = i[P];l && O === o[P] || (e[L] = Cg(e, L, O || k[2]));}I += m / 2;var z = i.textStrokeWidth,B = l ? o.textStrokeWidth : null,E = !l || z !== B,N = !l || E || i.textStroke !== o.textStroke,R = pi(i.textStroke, z),F = gi(i.textFill);if (R && (E && (e.lineWidth = z), N && (e.strokeStyle = R)), F && (l && i.textFill === o.textFill || (e.fillStyle = F)), 1 === v.length) R && e.strokeText(v[0], M, I), F && e.fillText(v[0], M, I);else for (var A = 0; A < v.length; A++) {R && e.strokeText(v[A], M, I), F && e.fillText(v[A], M, I), I += m;}}function ai(t, e, n, i, r, a) {a !== Ag && (e.__attrCachedBy = Dg.NONE);var o = t.__textCotentBlock;(!o || t.__dirtyText) && (o = t.__textCotentBlock = $n(n, i)), oi(t, e, o, i, r);}function oi(t, e, n, i, r) {var a = n.width,o = n.outerWidth,s = n.outerHeight,l = i.textPadding,h = di(s, i, r),u = h.baseX,c = h.baseY,d = h.textAlign,f = h.textVerticalAlign;si(e, i, r, u, c);var p = Gn(u, o, d),g = Hn(c, s, f),v = p,m = g;l && (v += l[3], m += l[0]);var y = v + a;hi(i) && ui(t, e, i, p, g, o, s);for (var x = 0; x < n.lines.length; x++) {for (var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, D = y, A = S - 1; S > T && (_ = b[T], !_.textAlign || "left" === _.textAlign);) {li(t, e, _, i, M, m, C, "left"), I -= _.width, C += _.width, T++;}for (; A >= 0 && (_ = b[A], "right" === _.textAlign);) {li(t, e, _, i, M, m, D, "right"), I -= _.width, D -= _.width, A--;}for (C += (a - (C - v) - (y - D) - I) / 2; A >= T;) {_ = b[T], li(t, e, _, i, M, m, C + _.width / 2, "center"), C += _.width, T++;}m += M;}}function si(t, e, n, i, r) {if (n && e.textRotation) {var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);}}function li(t, e, n, i, r, a, o, s) {var l = i.rich[n.styleName] || {};l.text = n.text;var h = n.textVerticalAlign,u = a + r / 2;"top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && hi(l) && ui(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = mi(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), fi(e, "shadowBlur", k(l.textShadowBlur, i.textShadowBlur, 0)), fi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), fi(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)), fi(e, "shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)), fi(e, "textAlign", s), fi(e, "textBaseline", "middle"), fi(e, "font", n.font || Yg);var d = pi(l.textStroke || i.textStroke, p),f = gi(l.textFill || i.textFill),p = A(l.textStrokeWidth, i.textStrokeWidth);d && (fi(e, "lineWidth", p), fi(e, "strokeStyle", d), e.strokeText(n.text, o, u)), f && (fi(e, "fillStyle", f), e.fillText(n.text, o, u));}function hi(t) {return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);}function ui(t, e, n, i, r, a, o) {var s = n.textBackgroundColor,l = n.textBorderWidth,h = n.textBorderColor,u = b(s);if (fi(e, "shadowBlur", n.textBoxShadowBlur || 0), fi(e, "shadowColor", n.textBoxShadowColor || "transparent"), fi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), fi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {e.beginPath();var c = n.textBorderRadius;c ? ti(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();}if (u) {if (fi(e, "fillStyle", s), null != n.fillOpacity) {var d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;} else e.fill();} else if (S(s)) {var f = s.image;f = zn(f, null, t, ci, s), f && En(f) && e.drawImage(f, i, r, a, o);}if (l && h) if (fi(e, "lineWidth", l), fi(e, "strokeStyle", h), null != n.strokeOpacity) {var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;} else e.stroke();}function ci(t, e) {e.image = t;}function di(t, e, n) {var i = e.x || 0,r = e.y || 0,a = e.textAlign,o = e.textVerticalAlign;if (n) {var s = e.textPosition;if (s instanceof Array) i = n.x + vi(s[0], n.width), r = n.y + vi(s[1], n.height);else {var l = Wn(s, n, e.textDistance);i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;}var h = e.textOffset;h && (i += h[0], r += h[1]);}return { baseX: i, baseY: r, textAlign: a, textVerticalAlign: o };}function fi(t, e, n) {return t[e] = Cg(t, e, n), t[e];
  }function pi(t, e) {return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;}function gi(t) {return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;}function vi(t, e) {return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;}function mi(t, e, n) {return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];}function yi(t, e) {return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);}function xi(t) {t = t || {}, yg.call(this, t);for (var e in t) {t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);}this.style = new Pg(t.style, this), this._rect = null, this.__clipPaths = [];}function _i(t) {xi.call(this, t);}function wi(t) {return parseInt(t, 10);}function bi(t) {return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;}function Si(t, e, n) {return ev.copy(t.getBoundingRect()), t.transform && ev.applyTransform(t.transform), nv.width = e, nv.height = n, !ev.intersect(nv);}function Mi(t, e) {if (t === e) return !1;if (!t || !e || t.length !== e.length) return !0;for (var n = 0; n < t.length; n++) {if (t[n] !== e[n]) return !0;}}function Ii(t, e) {for (var n = 0; n < t.length; n++) {var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);}}function Ti(t, e) {var n = document.createElement("div");return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;}function Ci(t) {return "mousewheel" === t && dp.browser.firefox ? "DOMMouseScroll" : t;}function Di(t) {t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {t._touching = !1;}, 700);}function Ai(t) {var e = t.pointerType;return "pen" === e || "touch" === e;}function ki(t) {function e(t, e) {return function () {return e._touching ? void 0 : t.apply(e, arguments);};}f(sv, function (e) {t._handlers[e] = y(uv[e], t);}), f(hv, function (e) {t._handlers[e] = y(uv[e], t);}), f(ov, function (n) {t._handlers[n] = e(uv[n], t);});}function Pi(t) {function e(e, n) {f(e, function (e) {ve(t, Ci(e), n._handlers[e]);}, n);}zp.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._handlers = {}, ki(this), dp.pointerEventsSupported ? e(hv, this) : (dp.touchEventsSupported && e(sv, this), e(ov, this));}function Li(t, e) {var n = new vv(up(), t, e);return pv[n.id] = n, n;}function Oi(t) {if (t) t.dispose();else {for (var e in pv) {pv.hasOwnProperty(e) && pv[e].dispose();}pv = {};}return this;}function zi(t) {return pv[t];}function Bi(t, e) {fv[t] = e;}function Ei(t) {delete pv[t];}function Ni(t) {return t instanceof Array ? t : null == t ? [] : [t];}function Ri(t, e, n) {if (t) {t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; r > i; i++) {var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);}}}function Fi(t) {return !xv(t) || _v(t) || t instanceof Date ? t : t.value;}function Vi(t) {return xv(t) && !(t instanceof Array);}function Gi(t, e) {e = (e || []).slice();var n = p(t || [], function (t) {return { exist: t };});return yv(e, function (t, i) {if (xv(t)) {for (var r = 0; r < n.length; r++) {if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);}for (var r = 0; r < n.length; r++) {var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || Xi(t) || Xi(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null);}}}), yv(e, function (t) {if (xv(t)) {for (var e = 0; e < n.length; e++) {var i = n[e].exist;if (!n[e].option && !Xi(i) && null == t.id) {n[e].option = t;break;}}e >= n.length && n.push({ option: t });}}), n;}function Hi(t) {var e = R();yv(t, function (t) {var n = t.exist;n && e.set(n.id, t);}), yv(t, function (t) {var n = t.option;O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});}), yv(t, function (t, n) {var i = t.exist,r = t.option,a = t.keyInfo;if (xv(r)) {if (a.name = null != r.name ? r.name + "" : i ? i.name : wv + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {var o = 0;do {a.id = "\x00" + a.name + "\x00" + o++;} while (e.get(a.id));}e.set(a.id, t);}});}function Wi(t) {var e = t.name;return !(!e || !e.indexOf(wv));}function Xi(t) {return xv(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");}function Yi(t, e) {return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function (e) {return t.indexOfRawIndex(e);}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function (e) {return t.indexOfName(e);}) : t.indexOfName(e.name) : void 0;}function qi() {var t = "__\x00ec_inner_" + Sv++ + "_" + Math.random().toFixed(5);return function (e) {return e[t] || (e[t] = {});};}function ji(t, e, n) {if (b(e)) {var i = {};i[e + "Index"] = 0, e = i;}var r = n && n.defaultMainType;!r || Zi(e, r + "Index") || Zi(e, r + "Id") || Zi(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return yv(e, function (i, r) {var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],s = o[1],l = (o[2] || "").toLowerCase();if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && h(n.includeMainTypes, s) < 0)) {var u = { mainType: s };("index" !== l || "all" !== i) && (u[l] = i);var c = t.queryComponents(u);a[s + "Models"] = c, a[s + "Model"] = c[0];}}), a;}function Zi(t, e) {return t && t.hasOwnProperty(e);}function Ui(t, e, n) {t.setAttribute ? t.setAttribute(e, n) : t[e] = n;}function Ki(t, e) {return t.getAttribute ? t.getAttribute(e) : t[e];}function $i(t) {return "auto" === t ? dp.domSupported ? "html" : "richText" : t || "html";}function Qi(t) {var e = { main: "", sub: "" };return t && (t = t.split(Mv), e.main = t[0] || "", e.sub = t[1] || ""), e;}function Ji(t) {O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');}function tr(t) {t.$constructor = t, t.extend = function (t) {var e = this,n = function n() {t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);};return o(n.prototype, t), n.extend = this.extend, n.superCall = nr, n.superApply = ir, u(n, this), n.superClass = e, n;};}function er(t) {var e = ["__\x00is_clz", Tv++, Math.random().toFixed(3)].join("_");t.prototype[e] = !0, t.isInstance = function (t) {return !(!t || !t[e]);};}function nr(t, e) {var n = P(arguments, 2);return this.superClass.prototype[e].apply(t, n);}function ir(t, e, n) {return this.superClass.prototype[e].apply(t, n);}function rr(t, e) {function n(t) {var e = i[t.main];return e && e[Iv] || (e = i[t.main] = {}, e[Iv] = !0), e;}e = e || {};var i = {};if (t.registerClass = function (t, e) {if (e) if (Ji(e), e = Qi(e), e.sub) {if (e.sub !== Iv) {var r = n(e);r[e.sub] = t;}} else i[e.main] = t;return t;}, t.getClass = function (t, e, n) {var r = i[t];if (r && r[Iv] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;}, t.getClassesByMainType = function (t) {t = Qi(t);var e = [],n = i[t.main];return n && n[Iv] ? f(n, function (t, n) {n !== Iv && e.push(t);}) : e.push(n), e;}, t.hasClass = function (t) {return t = Qi(t), !!i[t.main];}, t.getAllClassMainTypes = function () {var t = [];return f(i, function (e, n) {t.push(n);}), t;}, t.hasSubTypes = function (t) {t = Qi(t);var e = i[t.main];return e && e[Iv];}, t.parseClassType = Qi, e.registerWhenExtend) {var r = t.extend;r && (t.extend = function (e) {var n = r.call(this, e);return t.registerClass(n, e.type);});}return t;}function ar(t) {return t > -zv && zv > t;}function or(t) {return t > zv || -zv > t;}function sr(t, e, n, i, r) {var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);}function lr(t, e, n, i, r) {var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);}function hr(t, e, n, i, r, a) {var o = i + 3 * (e - n) - t,s = 3 * (n - 2 * e + t),l = 3 * (e - t),h = t - r,u = s * s - 3 * o * l,c = s * l - 9 * o * h,d = l * l - 3 * s * h,f = 0;if (ar(u) && ar(c)) {if (ar(s)) a[0] = 0;else {var p = -l / s;p >= 0 && 1 >= p && (a[f++] = p);}} else {var g = c * c - 4 * u * d;if (ar(g)) {var v = c / u,p = -s / o + v,m = -v / 2;p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);} else if (g > 0) {var y = Ov(g),x = u * s + 1.5 * o * (-c + y),_ = u * s + 1.5 * o * (-c - y);x = 0 > x ? -Lv(-x, Nv) : Lv(x, Nv), _ = 0 > _ ? -Lv(-_, Nv) : Lv(_, Nv);var p = (-s - (x + _)) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p);} else {var w = (2 * u * s - 3 * o * c) / (2 * Ov(u * u * u)),b = Math.acos(w) / 3,S = Ov(u),M = Math.cos(b),p = (-s - 2 * S * M) / (3 * o),m = (-s + S * (M + Ev * Math.sin(b))) / (3 * o),I = (-s + S * (M - Ev * Math.sin(b))) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I);}}return f;}function ur(t, e, n, i, r) {var a = 6 * n - 12 * e + 6 * t,o = 9 * e + 3 * i - 3 * t - 9 * n,s = 3 * e - 3 * t,l = 0;if (ar(o)) {if (or(a)) {var h = -s / a;h >= 0 && 1 >= h && (r[l++] = h);}} else {var u = a * a - 4 * o * s;if (ar(u)) r[0] = -a / (2 * o);else if (u > 0) {var c = Ov(u),h = (-a + c) / (2 * o),d = (-a - c) / (2 * o);h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);}}return l;}function cr(t, e, n, i, r, a) {var o = (e - t) * r + t,s = (n - e) * r + e,l = (i - n) * r + n,h = (s - o) * r + o,u = (l - s) * r + s,c = (u - h) * r + h;a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i;}function dr(t, e, n, i, r, a, o, s, l, h, u) {var c,d,f,p,g,v = .005,m = 1 / 0;Rv[0] = l, Rv[1] = h;for (var y = 0; 1 > y; y += .05) {Fv[0] = sr(t, n, r, o, y), Fv[1] = sr(e, i, a, s, y), p = Pp(Rv, Fv), m > p && (c = y, m = p);}m = 1 / 0;for (var x = 0; 32 > x && !(Bv > v); x++) {d = c - v, f = c + v, Fv[0] = sr(t, n, r, o, d), Fv[1] = sr(e, i, a, s, d), p = Pp(Fv, Rv), d >= 0 && m > p ? (c = d, m = p) : (Vv[0] = sr(t, n, r, o, f), Vv[1] = sr(e, i, a, s, f), g = Pp(Vv, Rv), 1 >= f && m > g ? (c = f, m = g) : v *= .5);}return u && (u[0] = sr(t, n, r, o, c), u[1] = sr(e, i, a, s, c)), Ov(m);}function fr(t, e, n, i) {var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;}function pr(t, e, n, i) {return 2 * ((1 - i) * (e - t) + i * (n - e));}function gr(t, e, n, i, r) {var a = t - 2 * e + n,o = 2 * (e - t),s = t - i,l = 0;if (ar(a)) {if (or(o)) {var h = -s / o;h >= 0 && 1 >= h && (r[l++] = h);}} else {var u = o * o - 4 * a * s;if (ar(u)) {var h = -o / (2 * a);h >= 0 && 1 >= h && (r[l++] = h);} else if (u > 0) {var c = Ov(u),h = (-o + c) / (2 * a),d = (-o - c) / (2 * a);h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);}}return l;}function vr(t, e, n) {var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;}function mr(t, e, n, i, r) {var a = (e - t) * i + t,o = (n - e) * i + e,s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;}function yr(t, e, n, i, r, a, o, s, l) {var h,u = .005,c = 1 / 0;Rv[0] = o, Rv[1] = s;for (var d = 0; 1 > d; d += .05) {Fv[0] = fr(t, n, r, d), Fv[1] = fr(e, i, a, d);var f = Pp(Rv, Fv);c > f && (h = d, c = f);}c = 1 / 0;for (var p = 0; 32 > p && !(Bv > u); p++) {var g = h - u,v = h + u;Fv[0] = fr(t, n, r, g), Fv[1] = fr(e, i, a, g);var f = Pp(Fv, Rv);if (g >= 0 && c > f) h = g, c = f;else {Vv[0] = fr(t, n, r, v), Vv[1] = fr(e, i, a, v);var m = Pp(Vv, Rv);1 >= v && c > m ? (h = v, c = m) : u *= .5;}}return l && (l[0] = fr(t, n, r, h), l[1] = fr(e, i, a, h)), Ov(c);}function xr(t, e, n) {if (0 !== t.length) {var i,r = t[0],a = r[0],o = r[0],s = r[1],l = r[1];for (i = 1; i < t.length; i++) {r = t[i], a = Gv(a, r[0]), o = Hv(o, r[0]), s = Gv(s, r[1]), l = Hv(l, r[1]);}e[0] = a, e[1] = s, n[0] = o, n[1] = l;}}function _r(t, e, n, i, r, a) {r[0] = Gv(t, n), r[1] = Gv(e, i), a[0] = Hv(t, n), a[1] = Hv(e, i);}function wr(t, e, n, i, r, a, o, s, l, h) {var u,c = ur,d = sr,f = c(t, n, r, o, Uv);for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {var p = d(t, n, r, o, Uv[u]);l[0] = Gv(p, l[0]), h[0] = Hv(p, h[0]);}for (f = c(e, i, a, s, Kv), u = 0; f > u; u++) {var g = d(e, i, a, s, Kv[u]);l[1] = Gv(g, l[1]), h[1] = Hv(g, h[1]);}l[0] = Gv(t, l[0]), h[0] = Hv(t, h[0]), l[0] = Gv(o, l[0]), h[0] = Hv(o, h[0]), l[1] = Gv(e, l[1]), h[1] = Hv(e, h[1]), l[1] = Gv(s, l[1]), h[1] = Hv(s, h[1]);}function br(t, e, n, i, r, a, o, s) {var l = vr,h = fr,u = Hv(Gv(l(t, n, r), 1), 0),c = Hv(Gv(l(e, i, a), 1), 0),d = h(t, n, r, u),f = h(e, i, a, c);o[0] = Gv(t, r, d), o[1] = Gv(e, a, f), s[0] = Hv(t, r, d), s[1] = Hv(e, a, f);}function Sr(t, e, n, i, r, a, o, s, l) {var h = oe,u = se,c = Math.abs(r - a);if (1e-4 > c % Yv && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);if (qv[0] = Xv(r) * n + t, qv[1] = Wv(r) * i + e, jv[0] = Xv(a) * n + t, jv[1] = Wv(a) * i + e, h(s, qv, jv), u(l, qv, jv), r %= Yv, 0 > r && (r += Yv), a %= Yv, 0 > a && (a += Yv), r > a && !o ? a += Yv : a > r && o && (r += Yv), o) {var d = a;a = r, r = d;}for (var f = 0; a > f; f += Math.PI / 2) {f > r && (Zv[0] = Xv(f) * n + t, Zv[1] = Wv(f) * i + e, h(s, Zv, s), u(l, Zv, l));}}function Mr(t, e, n, i, r, a, o) {if (0 === r) return !1;var s = r,l = 0,h = t;if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;if (t === n) return Math.abs(a - t) <= s / 2;l = (e - i) / (t - n), h = (t * i - n * e) / (t - n);var u = l * a - o + h,c = u * u / (l * l + 1);return s / 2 * s / 2 >= c;}function Ir(t, e, n, i, r, a, o, s, l, h, u) {if (0 === l) return !1;var c = l;if (u > e + c && u > i + c && u > a + c && u > s + c || e - c > u && i - c > u && a - c > u && s - c > u || h > t + c && h > n + c && h > r + c && h > o + c || t - c > h && n - c > h && r - c > h && o - c > h) return !1;var d = dr(t, e, n, i, r, a, o, s, h, u, null);return c / 2 >= d;}function Tr(t, e, n, i, r, a, o, s, l) {if (0 === o) return !1;var h = o;if (l > e + h && l > i + h && l > a + h || e - h > l && i - h > l && a - h > l || s > t + h && s > n + h && s > r + h || t - h > s && n - h > s && r - h > s) return !1;var u = yr(t, e, n, i, r, a, s, l, null);return h / 2 >= u;}function Cr(t) {return t %= um, 0 > t && (t += um), t;}function Dr(t, e, n, i, r, a, o, s, l) {if (0 === o) return !1;var h = o;s -= t, l -= e;var u = Math.sqrt(s * s + l * l);if (u - h > n || n > u + h) return !1;if (Math.abs(i - r) % cm < 1e-4) return !0;if (a) {var c = i;i = Cr(r), r = Cr(c);} else i = Cr(i), r = Cr(r);i > r && (r += cm);var d = Math.atan2(l, s);return 0 > d && (d += cm), d >= i && r >= d || d + cm >= i && r >= d + cm;}function Ar(t, e, n, i, r, a) {if (a > e && a > i || e > a && i > a) return 0;if (i === e) return 0;var o = e > i ? 1 : -1,s = (a - e) / (i - e);(1 === s || 0 === s) && (o = e > i ? .5 : -.5);var l = s * (n - t) + t;return l === r ? 1 / 0 : l > r ? o : 0;}function kr(t, e) {return Math.abs(t - e) < pm;}function Pr() {var t = vm[0];vm[0] = vm[1], vm[1] = t;}function Lr(t, e, n, i, r, a, o, s, l, h) {if (h > e && h > i && h > a && h > s || e > h && i > h && a > h && s > h) return 0;var u = hr(e, i, a, s, h, gm);if (0 === u) return 0;for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {var v = gm[g],m = 0 === v || 1 === v ? .5 : 1,y = sr(t, n, r, o, v);l > y || (0 > p && (p = ur(e, i, a, s, vm), vm[1] < vm[0] && p > 1 && Pr(), c = sr(e, i, a, s, vm[0]), p > 1 && (d = sr(e, i, a, s, vm[1]))), f += 2 === p ? v < vm[0] ? e > c ? m : -m : v < vm[1] ? c > d ? m : -m : d > s ? m : -m : v < vm[0] ? e > c ? m : -m : c > s ? m : -m);}return f;}function Or(t, e, n, i, r, a, o, s) {if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;var l = gr(e, i, a, s, gm);if (0 === l) return 0;var h = vr(e, i, a);if (h >= 0 && 1 >= h) {for (var u = 0, c = fr(e, i, a, h), d = 0; l > d; d++) {var f = 0 === gm[d] || 1 === gm[d] ? .5 : 1,p = fr(t, n, r, gm[d]);o > p || (u += gm[d] < h ? e > c ? f : -f : c > a ? f : -f);}return u;}var f = 0 === gm[0] || 1 === gm[0] ? .5 : 1,p = fr(t, n, r, gm[0]);return o > p ? 0 : e > a ? f : -f;}function zr(t, e, n, i, r, a, o, s) {if (s -= e, s > n || -n > s) return 0;var l = Math.sqrt(n * n - s * s);gm[0] = -l, gm[1] = l;var h = Math.abs(i - r);if (1e-4 > h) return 0;if (1e-4 > h % fm) {i = 0, r = fm;var u = a ? 1 : -1;return o >= gm[0] + t && o <= gm[1] + t ? u : 0;}if (a) {var l = i;i = Cr(r), r = Cr(l);} else i = Cr(i), r = Cr(r);i > r && (r += fm);for (var c = 0, d = 0; 2 > d; d++) {var f = gm[d];if (f + t > o) {var p = Math.atan2(s, f),u = a ? 1 : -1;0 > p && (p = fm + p), (p >= i && r >= p || p + fm >= i && r >= p + fm) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u);}}return c;}function Br(t, e, n, i, r) {for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {var c = t[u++];switch (c === dm.M && u > 1 && (n || (a += Ar(o, s, l, h, i, r))), 1 === u && (o = t[u], s = t[u + 1], l = o, h = s), c) {case dm.M:l = t[u++], h = t[u++], o = l, s = h;break;case dm.L:if (n) {if (Mr(o, s, t[u], t[u + 1], e, i, r)) return !0;} else a += Ar(o, s, t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case dm.C:if (n) {if (Ir(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;} else a += Lr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case dm.Q:if (n) {if (Tr(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;} else a += Or(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case dm.A:var d = t[u++],f = t[u++],p = t[u++],g = t[u++],v = t[u++],m = t[u++];u += 1;var y = 1 - t[u++],x = Math.cos(v) * p + d,_ = Math.sin(v) * g + f;u > 1 ? a += Ar(o, s, x, _, i, r) : (l = x, h = _);var w = (i - d) * g / p + d;if (n) {if (Dr(d, f, g, v, v + m, y, e, w, r)) return !0;} else a += zr(d, f, g, v, v + m, y, w, r);o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;break;case dm.R:l = o = t[u++], h = s = t[u++];var b = t[u++],S = t[u++],x = l + b,_ = h + S;if (n) {if (Mr(l, h, x, h, e, i, r) || Mr(x, h, x, _, e, i, r) || Mr(x, _, l, _, e, i, r) || Mr(l, _, l, h, e, i, r)) return !0;} else a += Ar(x, h, x, _, i, r), a += Ar(l, _, l, h, i, r);break;case dm.Z:if (n) {if (Mr(o, s, l, h, e, i, r)) return !0;} else a += Ar(o, s, l, h, i, r);o = l, s = h;}}return n || kr(s, h) || (a += Ar(o, s, l, h, i, r) || 0), 0 !== a;}function Er(t, e, n) {return Br(t, 0, !1, e, n);}function Nr(t, e, n, i) {return Br(t, e, !0, n, i);}function Rr(t) {xi.call(this, t), this.path = null;}function Fr(t, e, n, i, r, a, o, s, l, h, u) {var c = l * (Dm / 180),d = Cm(c) * (t - n) / 2 + Tm(c) * (e - i) / 2,f = -1 * Tm(c) * (t - n) / 2 + Cm(c) * (e - i) / 2,p = d * d / (o * o) + f * f / (s * s);p > 1 && (o *= Im(p), s *= Im(p));var g = (r === a ? -1 : 1) * Im((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,v = g * o * f / s,m = g * -s * d / o,y = (t + n) / 2 + Cm(c) * v - Tm(c) * m,x = (e + i) / 2 + Tm(c) * v + Cm(c) * m,_ = Pm([1, 0], [(d - v) / o, (f - m) / s]),w = [(d - v) / o, (f - m) / s],b = [(-1 * d - v) / o, (-1 * f - m) / s],S = Pm(w, b);km(w, b) <= -1 && (S = Dm), km(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Dm), 1 === a && 0 > S && (S += 2 * Dm), u.addData(h, y, x, o, s, _, S, c, a);}function Vr(t) {if (!t) return new hm();for (var e, n = 0, i = 0, r = n, a = i, o = new hm(), s = hm.CMD, l = t.match(Lm), h = 0; h < l.length; h++) {for (var u, c = l[h], d = c.charAt(0), f = c.match(Om) || [], p = f.length, g = 0; p > g; g++) {f[g] = parseFloat(f[g]);}for (var v = 0; p > v;) {var m,y,x,_,w,b,S,M = n,I = i;switch (d) {case "l":n += f[v++], i += f[v++], u = s.L, o.addData(u, n, i);break;case "L":n = f[v++], i = f[v++], u = s.L, o.addData(u, n, i);break;case "m":n += f[v++], i += f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "l";break;case "M":n = f[v++], i = f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "L";break;case "h":n += f[v++], u = s.L, o.addData(u, n, i);break;case "H":n = f[v++], u = s.L, o.addData(u, n, i);break;case "v":i += f[v++], u = s.L, o.addData(u, n, i);break;case "V":i = f[v++], u = s.L, o.addData(u, n, i);break;case "C":u = s.C, o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];break;case "c":u = s.C, o.addData(u, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];break;case "S":m = n, y = i;var T = o.len(),C = o.data;e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, M = f[v++], I = f[v++], n = f[v++], i = f[v++], o.addData(u, m, y, M, I, n, i);break;case "s":m = n, y = i;var T = o.len(),C = o.data;e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, M = n + f[v++], I = i + f[v++], n += f[v++], i += f[v++], o.addData(u, m, y, M, I, n, i);break;case "Q":M = f[v++], I = f[v++], n = f[v++], i = f[v++], u = s.Q, o.addData(u, M, I, n, i);break;case "q":M = f[v++] + n, I = f[v++] + i, n += f[v++], i += f[v++], u = s.Q, o.addData(u, M, I, n, i);break;case "T":m = n, y = i;var T = o.len(),C = o.data;e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n = f[v++], i = f[v++], u = s.Q, o.addData(u, m, y, n, i);break;case "t":m = n, y = i;var T = o.len(),C = o.data;e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n += f[v++], i += f[v++], u = s.Q, o.addData(u, m, y, n, i);break;case "A":x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n = f[v++], i = f[v++], u = s.A, Fr(M, I, n, i, b, S, x, _, w, u, o);break;case "a":x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n += f[v++], i += f[v++], u = s.A, Fr(M, I, n, i, b, S, x, _, w, u, o);}}("z" === d || "Z" === d) && (u = s.Z, o.addData(u), n = r, i = a), e = u;}return o.toStatic(), o;}function Gr(t, e) {var n = Vr(t);return e = e || {}, e.buildPath = function (t) {if (t.setData) {t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);} else {var e = t;n.rebuildPath(e);}}, e.applyTransform = function (t) {Mm(n, t), this.dirty(!0);}, e;}function Hr(t, e) {return new Rr(Gr(t, e));}function Wr(t, e) {return Rr.extend(Gr(t, e));}function Xr(t, e) {for (var n = [], i = t.length, r = 0; i > r; r++) {var a = t[r];a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path);}var o = new Rr(e);return o.createPathProxy(), o.buildPath = function (t) {t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);}, o;}function Yr(t, e, n, i, r, a, o) {var s = .5 * (n - t),l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;}function qr(t, e, n) {var i = e.points,r = e.smooth;if (i && i.length >= 2) {if (r && "spline" !== r) {var a = Gm(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {var l = a[2 * s],h = a[2 * s + 1],u = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);}} else {"spline" === r && (i = Vm(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; c > s; s++) {t.lineTo(i[s][0], i[s][1]);}}n && t.closePath();}}function jr(t, e, n) {var i = n && n.lineWidth;if (e && i) {var r = e.x1,a = e.x2,o = e.y1,s = e.y2;Xm(2 * r) === Xm(2 * a) ? t.x1 = t.x2 = Ur(r, i, !0) : (t.x1 = r, t.x2 = a), Xm(2 * o) === Xm(2 * s) ? t.y1 = t.y2 = Ur(o, i, !0) : (t.y1 = o, t.y2 = s);}}function Zr(t, e, n) {var i = n && n.lineWidth;if (e && i) {var r = e.x,a = e.y,o = e.width,s = e.height;t.x = Ur(r, i, !0), t.y = Ur(a, i, !0), t.width = Math.max(Ur(r + o, i, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(Ur(a + s, i, !1) - t.y, 0 === s ? 0 : 1);}}function Ur(t, e, n) {var i = Xm(2 * t);return (i + Xm(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;}function Kr(t, e, n) {var i = t.cpx2,r = t.cpy2;return null === i || null === r ? [(n ? lr : sr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? lr : sr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? pr : fr)(t.x1, t.cpx1, t.x2, e), (n ? pr : fr)(t.y1, t.cpy1, t.y2, e)];}function $r(t) {xi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;}function Qr(t) {return Rr.extend(t);}function Jr(t, e) {return Wr(t, e);}function ta(t, e, n, i) {var r = Hr(t, e);return n && ("center" === i && (n = na(n, r.getBoundingRect())), ia(r, n)), r;}function ea(t, e, n) {var i = new _i({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {if ("center" === n) {var r = { width: t.width, height: t.height };i.setStyle(na(e, r));}} });return i;}function na(t, e) {var n,i = e.width / e.height,r = t.height * i;r <= t.width ? n = t.height : (r = t.width, n = r / i);var a = t.x + t.width / 2,o = t.y + t.height / 2;return { x: a - r / 2, y: o - n / 2, width: r, height: n };}function ia(t, e) {if (t.applyTransform) {var n = t.getBoundingRect(),i = n.calculateTransform(e);t.applyTransform(i);}}function ra(t) {var e = t.shape,n = t.style.lineWidth;return iy(2 * e.x1) === iy(2 * e.x2) && (e.x1 = e.x2 = oa(e.x1, n, !0)), iy(2 * e.y1) === iy(2 * e.y2) && (e.y1 = e.y2 = oa(e.y1, n, !0)), t;}function aa(t) {var e = t.shape,n = t.style.lineWidth,i = e.x,r = e.y,a = e.width,o = e.height;return e.x = oa(e.x, n, !0), e.y = oa(e.y, n, !0), e.width = Math.max(oa(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(oa(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t;}function oa(t, e, n) {var i = iy(2 * t);return (i + iy(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;}function sa(t) {return null != t && "none" !== t;}function la(t) {if ("string" != typeof t) return t;var e = hy.get(t);return e || (e = Ue(t, -.1), 1e4 > uy && (hy.set(t, e), uy++)), e;}function ha(t) {if (t.__hoverStlDirty) {t.__hoverStlDirty = !1;var e = t.__hoverStl;if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);var n = t.__cachedNormalStl = {};t.__cachedNormalZ2 = t.z2;var i = t.style;for (var r in e) {null != e[r] && (n[r] = i[r]);}n.fill = i.fill, n.stroke = i.stroke;}}function ua(t) {var e = t.__hoverStl;if (e && !t.__highlighted) {var n = t.useHoverLayer;t.__highlighted = n ? "layer" : "plain";var i = t.__zr;if (i || !n) {var r = t,a = t.style;n && (r = i.addHover(t), a = r.style), ka(a), n || ha(r), a.extendFrom(e), ca(a, e, "fill"), ca(a, e, "stroke"), Aa(a), n || (t.dirty(!1), t.z2 += sy);}}}function ca(t, e, n) {!sa(e[n]) && sa(t[n]) && (t[n] = la(t[n]));}function da(t) {var e = t.__highlighted;if (e) if (t.__highlighted = !1, "layer" === e) t.__zr && t.__zr.removeHover(t);else if (e) {var n = t.style,i = t.__cachedNormalStl;i && (ka(n), t.setStyle(i), Aa(n));var r = t.__cachedNormalZ2;null != r && t.z2 - r === sy && (t.z2 = r);}}function fa(t, e) {t.isGroup ? t.traverse(function (t) {!t.isGroup && e(t);}) : e(t);}function pa(t, e) {e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, da(t), ua(t));}function ga(t) {return t && t.__isEmphasisEntered;}function va(t) {this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && fa(this, ua);}function ma(t) {this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && fa(this, da);}function ya() {this.__isEmphasisEntered = !0, fa(this, ua);}function xa() {this.__isEmphasisEntered = !1, fa(this, da);}function _a(t, e, n) {t.isGroup ? t.traverse(function (t) {!t.isGroup && pa(t, t.hoverStyle || e);}) : pa(t, t.hoverStyle || e), wa(t, n);}function wa(t, e) {var n = e === !1;if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {var i = n ? "off" : "on";t[i]("mouseover", va)[i]("mouseout", ma), t[i]("emphasis", ya)[i]("normal", xa), t.__hoverStyleTrigger = !n;}}function ba(t, e, n, i, r, a, o) {r = r || oy;var s,l = r.labelFetcher,h = r.labelDataIndex,u = r.labelDimIndex,c = n.getShallow("show"),d = i.getShallow("show");(c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = w(r.defaultText) ? r.defaultText(h, r) : r.defaultText));var f = c ? s : null,p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;(null != f || null != p) && (Sa(t, n, a, r), Sa(e, i, o, r, !0)), t.text = f, e.text = p;}function Sa(t, e, n, i, r) {return Ia(t, e, i, r), n && o(t, n), t;}function Ma(t, e, n) {var i,r = { isRectText: !0 };n === !1 ? i = !0 : r.autoColor = n, Ia(t, e, r, i);}function Ia(t, e, n, i) {if (n = n || oy, n.isRectText) {var r = e.getShallow("position") || (i ? null : "inside");"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), i ? null : 5);}var o,s = e.ecModel,l = s && s.option.textStyle,h = Ta(e);if (h) {o = {};for (var u in h) {if (h.hasOwnProperty(u)) {var c = e.getModel(["rich", u]);Ca(o[u] = {}, c, l, n, i);}}}return t.rich = o, Ca(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;}function Ta(t) {for (var e; t && t !== t.ecModel;) {var n = (t.option || oy).rich;if (n) {e = e || {};for (var i in n) {n.hasOwnProperty(i) && (e[i] = 1);}}t = t.parentModel;}return e;}function Ca(t, e, n, i, r, a) {n = !r && n || oy, t.textFill = Da(e.getShallow("color"), i) || n.color, t.textStroke = Da(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, Aa(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Da(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Da(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;}function Da(t, e) {return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;}function Aa(t) {var e = t.insideRollbackOpt;if (e && null == t.textFill) {var n,i = e.useInsideStyle,r = t.insideRawTextPosition,a = e.autoColor;i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = { textFill: null, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = { textFill: null }, t.textFill = a), n && (t.insideRollback = n);}}function ka(t) {var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);}function Pa(t, e) {var n = e || e.getModel("textStyle");return z([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));}function La(t, e, n, i, r, a) {"function" == typeof r && (a = r, r = null);var o = i && i.isAnimationEnabled();if (o) {var s = t ? "Update" : "",l = i.getShallow("animationDuration" + s),h = i.getShallow("animationEasing" + s),u = i.getShallow("animationDelay" + s);"function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());} else e.stopAnimation(), e.attr(n), a && a();}function Oa(t, e, n, i, r) {La(!0, t, e, n, i, r);}function za(t, e, n, i, r) {La(!1, t, e, n, i, r);}function Ba(t, e) {for (var n = Te([]); t && t !== e;) {De(n, t.getLocalTransform(), n), t = t.parent;}return n;}function Ea(t, e, n) {return e && !d(e) && (e = jp.getLocalTransform(e)), n && (e = Le([], e)), ae([], t, e);}function Na(t, e, n) {var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return a = Ea(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";}function Ra(t, e, n) {function i(t) {var e = {};return t.traverse(function (t) {!t.isGroup && t.anid && (e[t.anid] = t);}), e;}function r(t) {var e = { position: W(t.position), rotation: t.rotation };return t.shape && (e.shape = o({}, t.shape)), e;}if (t && e) {var a = i(t);e.traverse(function (t) {if (!t.isGroup && t.anid) {var e = a[t.anid];if (e) {var i = r(t);t.attr(r(e)), Oa(t, i, n, t.dataIndex);}}});}}function Fa(t, e) {return p(t, function (t) {var n = t[0];n = ry(n, e.x), n = ay(n, e.x + e.width);var i = t[1];return i = ry(i, e.y), i = ay(i, e.y + e.height), [n, i];});}function Va(t, e) {var n = ry(t.x, e.x),i = ay(t.x + t.width, e.x + e.width),r = ry(t.y, e.y),a = ay(t.y + t.height, e.y + e.height);return i >= n && a >= r ? { x: n, y: r, width: i - n, height: a - r } : void 0;}function Ga(t, e, n) {e = o({ rectHover: !0 }, e);var i = e.style = { strokeNoScale: !0 };return n = n || { x: -1, y: -1, width: 2, height: 2 }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new _i(e)) : ta(t.replace("path://", ""), e, n, "center") : void 0;}function Ha(t, e, n) {this.parentModel = e, this.ecModel = n, this.option = t;}function Wa(t, e, n) {for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++) {;}return null == t && n && (t = n.get(e)), t;}function Xa(t, e) {var n = my(t).getParent;return n ? n.call(t, e) : t.parentModel;}function Ya(t) {return [t || "", yy++, Math.random().toFixed(5)].join("_");}function qa(t) {var e = {};return t.registerSubTypeDefaulter = function (t, n) {t = Qi(t), e[t.main] = n;}, t.determineSubType = function (n, i) {var r = i.type;if (!r) {var a = Qi(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));}return r;}, t;}function ja(t, e) {function n(t) {var n = {},a = [];return f(t, function (o) {var s = i(n, o),l = s.originalDeps = e(o),u = r(l, t);s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function (t) {h(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);h(e.successor, t) < 0 && e.successor.push(o);});}), { graph: n, noEntryList: a };}function i(t, e) {return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];}function r(t, e) {var n = [];return f(t, function (t) {h(e, t) >= 0 && n.push(t);}), n;}t.topologicalTravel = function (t, e, i, r) {function a(t) {l[t].entryCount--, 0 === l[t].entryCount && h.push(t);}function o(t) {u[t] = !0, a(t);}if (t.length) {var s = n(e),l = s.graph,h = s.noEntryList,u = {};for (f(t, function (t) {u[t] = !0;}); h.length;) {var c = h.pop(),d = l[c],p = !!u[c];p && (i.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a);}f(u, function () {throw new Error("Circle dependency may exists");});}};}function Za(t) {return t.replace(/^\s+/, "").replace(/\s+$/, "");}function Ua(t, e, n, i) {var r = e[1] - e[0],a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {if (r > 0) {if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];} else {if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];}} else {if (t === e[0]) return n[0];if (t === e[1]) return n[1];}return (t - e[0]) / r * a + n[0];}function Ka(t, e) {switch (t) {case "center":case "middle":t = "50%";break;case "left":case "top":t = "0%";break;case "right":case "bottom":t = "100%";}return "string" == typeof t ? Za(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;}function $a(t, e, n) {return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;}function Qa(t) {return t.sort(function (t, e) {return t - e;}), t;}function Ja(t) {if (t = +t, isNaN(t)) return 0;for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {e *= 10, n++;}return n;}function to(t) {var e = t.toString(),n = e.indexOf("e");if (n > 0) {var i = +e.slice(n + 1);return 0 > i ? -i : 0;}var r = e.indexOf(".");return 0 > r ? 0 : e.length - 1 - r;}function eo(t, e) {var n = Math.log,i = Math.LN10,r = Math.floor(n(t[1] - t[0]) / i),a = Math.round(n(Math.abs(e[1] - e[0])) / i),o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;}function no(t, e, n) {if (!t[e]) return 0;var i = g(t, function (t, e) {return t + (isNaN(e) ? 0 : e);}, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = p(t, function (t) {return (isNaN(t) ? 0 : t) / i * r * 100;}), o = 100 * r, s = p(a, function (t) {return Math.floor(t);}), l = g(s, function (t, e) {return t + e;}, 0), h = p(a, function (t, e) {return t - s[e];}); o > l;) {for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) {h[d] > u && (u = h[d], c = d);}++s[c], h[c] = 0, ++l;}return s[e] / r;}function io(t) {var e = 2 * Math.PI;return (t % e + e) % e;}function ro(t) {return t > -xy && xy > t;}function ao(t) {if (t instanceof Date) return t;if ("string" == typeof t) {var e = wy.exec(t);if (!e) return new Date(0 / 0);if (e[8]) {var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));}return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);}return new Date(null == t ? 0 / 0 : Math.round(t));}function oo(t) {return Math.pow(10, so(t));}function so(t) {return Math.floor(Math.log(t) / Math.LN10);}function lo(t, e) {var n,i = so(t),r = Math.pow(10, i),a = t / r;return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;}function ho(t, e) {var n = (t.length - 1) * e + 1,i = Math.floor(n),r = +t[i - 1],a = n - i;return a ? r + a * (t[i] - r) : r;}function uo(t) {function e(t, n, i) {return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1));}t.sort(function (t, n) {return e(t, n, 0) ? -1 : 1;});for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) {a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];}a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;}return t;}function co(t) {return t - parseFloat(t) >= 0;}function fo(t) {return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));}function po(t, e) {return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;}function go(t) {return null == t ? "" : (t + "").replace(My, function (t, e) {return Iy[e];});}function vo(t, e, n) {_(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {var o = Ty[a];t = t.replace(Cy(o), Cy(o, 0));}for (var s = 0; i > s; s++) {for (var l = 0; l < r.length; l++) {var h = e[s][r[l]];t = t.replace(Cy(Ty[l], s), n ? go(h) : h);}}return t;}function mo(t, e, n) {return f(e, function (e, i) {t = t.replace("{" + i + "}", n ? go(e) : e);}), t;}function yo(t, e) {t = b(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,i = t.type,e = t.extraCssText,r = t.renderMode || "html",a = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + go(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + go(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } } : "";}function xo(t, e) {return t += "", "0000".substr(0, e - t.length) + t;}function _o(t, e, n) {("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = ao(e),r = n ? "UTC" : "",a = i["get" + r + "FullYear"](),o = i["get" + r + "Month"]() + 1,s = i["get" + r + "Date"](),l = i["get" + r + "Hours"](),h = i["get" + r + "Minutes"](),u = i["get" + r + "Seconds"](),c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", xo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", xo(s, 2)).replace("d", s).replace("hh", xo(l, 2)).replace("h", l).replace("mm", xo(h, 2)).replace("m", h).replace("ss", xo(u, 2)).replace("s", u).replace("SSS", xo(c, 3));}function wo(t) {return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;}function bo(t) {return Rn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate);}function So(t, e, n, i, r, a, o, s) {return Rn(t, e, n, i, r, s, a, o);}function Mo(t, e, n, i, r) {var a = 0,o = 0;null == i && (i = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, h) {var u,c,d = l.position,f = l.getBoundingRect(),p = e.childAt(h + 1),g = p && p.getBoundingRect();if ("horizontal" === t) {var v = f.width + (g ? -g.x + f.x : 0);u = a + v, u > i || l.newline ? (a = 0, u = v, o += s + n, s = f.height) : s = Math.max(s, f.height);} else {var m = f.height + (g ? -g.y + f.y : 0);c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);}l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + n : o = c + n);});}function Io(t, e, n) {n = Sy(n || 0);var i = e.width,r = e.height,a = Ka(t.left, i),o = Ka(t.top, r),s = Ka(t.right, i),l = Ka(t.bottom, r),h = Ka(t.width, i),u = Ka(t.height, r),c = n[2] + n[0],d = n[1] + n[3],f = t.aspect;switch (isNaN(h) && (h = i - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = i - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {case "center":a = i / 2 - h / 2 - n[3];break;case "right":a = i - h - d;}switch (t.top || t.bottom) {case "middle":case "center":o = r / 2 - u / 2 - n[0];break;case "bottom":o = r - u - c;}a = a || 0, o = o || 0, isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));var p = new xn(a + n[3], o + n[0], h, u);return p.margin = n, p;}function To(t, e, n) {function i(n, i) {var o = {},l = 0,h = {},u = 0,c = 2;if (ky(n, function (e) {h[e] = t[e];}), ky(n, function (t) {r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;}), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;if (u !== c && l) {if (l >= c) return o;for (var d = 0; d < n.length; d++) {var f = n[d];if (!r(o, f) && r(t, f)) {o[f] = t[f];break;}}return o;}return h;}function r(t, e) {return t.hasOwnProperty(e);}function a(t, e) {return null != t[e] && "auto" !== t[e];}function o(t, e, n) {ky(t, function (t) {e[t] = n[t];});}!S(n) && (n = {});var s = n.ignoreSize;!_(s) && (s = [s, s]);var l = i(Ly[0], 0),h = i(Ly[1], 1);o(Ly[0], t, l), o(Ly[1], t, h);}function Co(t) {return Do({}, t);}function Do(t, e) {return e && t && ky(Py, function (n) {e.hasOwnProperty(n) && (t[n] = e[n]);}), t;}function Ao(t) {var e = [];return f(Ey.getClassesByMainType(t), function (t) {e = e.concat(t.prototype.dependencies || []);}), e = p(e, function (t) {return Qi(t).main;}), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;}function ko(t, e) {for (var n = t.length, i = 0; n > i; i++) {if (t[i].length > e) return t[i];}return t[n - 1];}function Po(t) {var e = t.get("coordinateSystem"),n = { coordSysName: e, coordSysDims: [], axisMap: R(), categoryAxisMap: R() },i = Gy[e];return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;}function Lo(t) {return "category" === t.get("type");}function Oo(t) {this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Yy ? {} : []), this.sourceFormat = t.sourceFormat || qy, this.seriesLayoutBy = t.seriesLayoutBy || Zy, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;}function zo(t) {var e = t.option.source,n = qy;if (I(e)) n = jy;else if (_(e)) {0 === e.length && (n = Wy);for (var i = 0, r = e.length; r > i; i++) {var a = e[i];if (null != a) {if (_(a)) {n = Wy;break;}if (S(a)) {n = Xy;break;}}}} else if (S(e)) {for (var o in e) {if (e.hasOwnProperty(o) && d(e[o])) {n = Yy;break;}}} else if (null != e) throw new Error("Invalid data");Ky(t).sourceFormat = n;}function Bo(t) {return Ky(t).source;}function Eo(t) {Ky(t).datasetMap = R();}function No(t) {var e = t.option,n = e.data,i = I(n) ? jy : Hy,r = !1,a = e.seriesLayoutBy,o = e.sourceHeader,s = e.dimensions,l = Wo(t);if (l) {var h = l.option;n = h.source, i = Ky(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions;}var u = Ro(n, i, a, o, s),c = e.encode;!c && l && (c = Ho(t, l, n, i, a, u)), Ky(t).source = new Oo({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: u.dimensionsDefine, startIndex: u.startIndex, dimensionsDetectCount: u.dimensionsDetectCount, encodeDefine: c });}function Ro(t, e, n, i, r) {if (!t) return { dimensionsDefine: Fo(r) };var a, o, s;if (e === Wy) "auto" === i || null == i ? Vo(function (t) {null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0);}, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Vo(function (t, e) {r[e] = null != t ? t : "";}, n, t)), a = r ? r.length : n === Uy ? t.length : t[0] ? t[0].length : null;else if (e === Xy) r || (r = Go(t), s = !0);else if (e === Yy) r || (r = [], s = !0, f(t, function (t, e) {r.push(e);}));else if (e === Hy) {var l = Fi(t[0]);a = _(l) && l.length || 1;}var h;return s && f(r, function (t, e) {"name" === (S(t) ? t.name : t) && (h = e);}), { startIndex: o, dimensionsDefine: Fo(r), dimensionsDetectCount: a, potentialNameDimIndex: h };}function Fo(t) {if (t) {var e = R();return p(t, function (t) {if (t = o({}, S(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var n = e.get(t.name);return n ? t.name += "-" + n.count++ : e.set(t.name, { count: 1 }), t;});}}function Vo(t, e, n, i) {if (null == i && (i = 1 / 0), e === Uy) for (var r = 0; r < n.length && i > r; r++) {t(n[r] ? n[r][0] : null, r);} else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) {t(a[r], r);}}function Go(t) {for (var e, n = 0; n < t.length && !(e = t[n++]);) {;}if (e) {var i = [];return f(e, function (t, e) {i.push(e);}), i;}}function Ho(t, e, n, i, r, a) {var o = Po(t),s = {},l = [],h = [],u = t.subType,c = R(["pie", "map", "funnel"]),d = R(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);if (o && null != d.get(u)) {var p = t.ecModel,g = Ky(p).datasetMap,v = e.uid + "_" + r,m = g.get(v) || g.set(v, { categoryWayDim: 1, valueWayDim: 0 });f(o.coordSysDims, function (t) {if (null == o.firstCategoryDimIndex) {var e = m.valueWayDim++;s[t] = e, h.push(e);} else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {var e = m.categoryWayDim++;s[t] = e, h.push(e);}});} else if (null != c.get(u)) {for (var y, x = 0; 5 > x && null == y; x++) {Yo(n, i, r, a.dimensionsDefine, a.startIndex, x) || (y = x);}if (null != y) {s.value = y;var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);h.push(_), l.push(_);}}return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;}function Wo(t) {var e = t.option,n = e.data;return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);}function Xo(t, e) {return Yo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);}function Yo(t, e, n, i, r, a) {function o(t) {return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0;}var s,l = 5;if (I(t)) return !1;var h;if (i && (h = i[a], h = S(h) ? h.name : h), e === Wy) {if (n === Uy) {for (var u = t[a], c = 0; c < (u || []).length && l > c; c++) {if (null != (s = o(u[r + c]))) return s;}} else for (var c = 0; c < t.length && l > c; c++) {var d = t[r + c];if (d && null != (s = o(d[a]))) return s;}} else if (e === Xy) {if (!h) return;for (var c = 0; c < t.length && l > c; c++) {var f = t[c];if (f && null != (s = o(f[h]))) return s;}} else if (e === Yy) {if (!h) return;var u = t[h];if (!u || I(u)) return !1;for (var c = 0; c < u.length && l > c; c++) {if (null != (s = o(u[c]))) return s;}} else if (e === Hy) for (var c = 0; c < t.length && l > c; c++) {var f = t[c],p = Fi(f);if (!_(p)) return !1;if (null != (s = o(p[a]))) return s;}return !1;}function qo(t, e) {if (e) {var n = e.seiresIndex,i = e.seriesId,r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;}}function jo(t, e) {var n = t.color && !t.colorLayer;f(e, function (e, a) {"colorLayer" === a && n || Ey.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e));});}function Zo(t) {t = t, this.option = {}, this.option[$y] = 1, this._componentsMap = R({ series: [] }), this._seriesIndices, this._seriesIndicesMap, jo(t, this._theme.option), r(t, Ry, !1), this.mergeOption(t);}function Uo(t, e) {_(e) || (e = e ? [e] : []);var n = {};return f(e, function (e) {n[e] = (t.get(e) || []).slice();}), n;}function Ko(t, e, n) {var i = e.type ? e.type : n ? n.subType : Ey.determineSubType(t, e);return i;}function $o(t, e) {t._seriesIndicesMap = R(t._seriesIndices = p(e, function (t) {return t.componentIndex;}) || []);}function Qo(t, e) {return e.hasOwnProperty("subType") ? v(t, function (t) {return t.subType === e.subType;}) : t;}function Jo(t) {f(Jy, function (e) {this[e] = y(t[e], t);}, this);}function ts() {this._coordinateSystems = [];}function es(t) {this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;}function ns(t, e, n) {var i,r,a = [],o = [],s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {r = r || {};var l = t.media;ex(l, function (t) {t && t.option && (t.query ? o.push(t) : i || (i = t));});}return r || (r = t), r.timeline || (r.timeline = s), ex([r].concat(a).concat(p(o, function (t) {return t.option;})), function (t) {ex(e, function (e) {e(t, n);});}), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };}function is(t, e, n) {var i = { width: e, height: n, aspectratio: e / n },r = !0;return f(t, function (t, e) {var n = e.match(ax);if (n && n[1] && n[2]) {var a = n[1],o = n[2].toLowerCase();rs(i[o], t, a) || (r = !1);}}), r;}function rs(t, e, n) {return "min" === n ? t >= e : "max" === n ? e >= t : t === e;}function as(t, e) {return t.join(",") === e.join(",");}function os(t, e) {e = e || {}, ex(e, function (e, n) {if (null != e) {var i = t[n];if (Ey.hasClass(n)) {e = Ni(e), i = Ni(i);var r = Gi(i, e);t[n] = ix(r, function (t) {return t.option && t.exist ? rx(t.exist, t.option, !0) : t.exist || t.option;});} else t[n] = rx(i, e, !0);}});}function ss(t) {var e = t && t.itemStyle;if (e) for (var n = 0, i = lx.length; i > n; n++) {var a = lx[n],o = e.normal,s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);}}function ls(t, e, n) {if (t && t[e] && (t[e].normal || t[e].emphasis)) {var i = t[e].normal,r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);}}function hs(t) {ls(t, "itemStyle"), ls(t, "lineStyle"), ls(t, "areaStyle"), ls(t, "label"), ls(t, "labelLine"), ls(t, "upperLabel"), ls(t, "edgeLabel");}function us(t, e) {var n = sx(t) && t[e],i = sx(n) && n.textStyle;if (i) for (var r = 0, a = bv.length; a > r; r++) {var e = bv[r];i.hasOwnProperty(e) && (n[e] = i[e]);}}function cs(t) {t && (hs(t), us(t, "label"), t.emphasis && us(t.emphasis, "label"));}function ds(t) {if (sx(t)) {ss(t), hs(t), us(t, "label"), us(t, "upperLabel"), us(t, "edgeLabel"), t.emphasis && (us(t.emphasis, "label"), us(t.emphasis, "upperLabel"), us(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (ss(e), cs(e));var n = t.markLine;n && (ss(n), cs(n));var i = t.markArea;i && cs(i);var r = t.data;if ("graph" === t.type) {r = r || t.nodes;var a = t.links || t.edges;if (a && !I(a)) for (var o = 0; o < a.length; o++) {cs(a[o]);}f(t.categories, function (t) {hs(t);});}if (r && !I(r)) for (var o = 0; o < r.length; o++) {cs(r[o]);}var e = t.markPoint;if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {cs(s[o]);}var n = t.markLine;if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) {_(l[o]) ? (cs(l[o][0]), cs(l[o][1])) : cs(l[o]);}"gauge" === t.type ? (us(t, "axisLabel"), us(t, "title"), us(t, "detail")) : "treemap" === t.type ? (ls(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {hs(t);})) : "tree" === t.type && hs(t.leaves);}}function fs(t) {return _(t) ? t : t ? [t] : [];}function ps(t) {return (_(t) ? t[0] : t) || {};}function gs(t, e) {e = e.split(",");for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) {;}return n;}function vs(t, e, n, i) {e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) {r = e[o], null == a[r] && (a[r] = {}), a = a[r];}(i || null == a[e[o]]) && (a[e[o]] = n);}function ms(t) {f(ux, function (e) {e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);});}function ys(t) {f(t, function (e, n) {var i = [],r = [0 / 0, 0 / 0],a = [e.stackResultDimension, e.stackedOverDimension],o = e.data,s = e.isStackedByIndex,l = o.map(a, function (a, l, h) {var u = o.get(e.stackedDimension, h);if (isNaN(u)) return r;var c, d;s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);for (var f = 0 / 0, p = n - 1; p >= 0; p--) {var g = t[p];if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {var v = g.data.getByRawIndex(g.stackResultDimension, d);if (u >= 0 && v > 0 || 0 >= u && 0 > v) {u += v, f = v;break;}}}return i[0] = u, i[1] = f, i;});o.hostModel.setData(l), e.data = l;});}function xs(t, e) {Oo.isInstance(t) || (t = Oo.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,i = t.sourceFormat;i === jy && (this._offset = 0, this._dimSize = e, this._data = n);var r = gx[i === Wy ? i + "_" + t.seriesLayoutBy : i];o(this, r);}function _s() {return this._data.length;}function ws(t) {return this._data[t];}function bs(t) {for (var e = 0; e < t.length; e++) {this._data.push(t[e]);}}function Ss(t, e, n) {return null != n ? t[n] : t;}function Ms(t, e, n, i) {return Is(t[i], this._dimensionInfos[e]);}function Is(t, e) {var n = e && e.type;if ("ordinal" === n) {var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;}return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +ao(t)), null == t || "" === t ? 0 / 0 : +t;}function Ts(t, e, n) {if (t) {var i = t.getRawDataItem(e);if (null != i) {var r,a,o = t.getProvider().getSource().sourceFormat,s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), vx[o](i, e, a, r);}}}function Cs(t, e, n) {if (t) {var i = t.getProvider().getSource().sourceFormat;if (i === Hy || i === Xy) {var r = t.getRawDataItem(e);return i !== Hy || S(r) || (r = null), r ? r[n] : void 0;}}}function Ds(t) {return new As(t);}function As(t) {t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;}function ks(t, e, n, i, r, a) {bx.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: bx.next }, t.context);}function Ps(t, e) {t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;}function Ls(t) {var e = t.name;Wi(t) || (t.name = Os(t) || e);}function Os(t) {var e = t.getRawData(),n = e.mapDimension("seriesName", !0),i = [];return f(n, function (t) {var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);}), i.join(" ");}function zs(t) {return t.model.getRawData().count();}function Bs(t) {var e = t.model;return e.setData(e.getRawData().cloneShallow()), Es;}function Es(t, e) {t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);}function Ns(t, e) {f(t.CHANGABLE_METHODS, function (n) {t.wrapMethod(n, x(Rs, e));});}function Rs(t) {var e = Fs(t);e && e.setOutputEnd(this.count());}function Fs(t) {var e = (t.ecModel || {}).scheduler,n = e && e.getPipeline(t.uid);if (n) {var i = n.currentTask;if (i) {var r = i.agentStubMap;r && (i = r.get(t.uid));}return i;}}function Vs() {this.group = new bg(), this.uid = Ya("viewChart"), this.renderTask = Ds({ plan: Ws, reset: Xs }), this.renderTask.context = { view: this };}function Gs(t, e) {if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) {Gs(t.childAt(n), e);}}function Hs(t, e, n) {var i = Yi(t, e);null != i ? f(Ni(i), function (e) {Gs(t.getItemGraphicEl(e), n);}) : t.eachItemGraphicEl(function (t) {Gs(t, n);});}function Ws(t) {return Ax(t.model);}function Xs(t) {var e = t.model,n = t.ecModel,i = t.api,r = t.payload,a = e.pipelineContext.progressiveRender,o = t.view,s = r && Dx(r).updateMethod,l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), Px[l];}function Ys(t, e, n) {function i() {u = new Date().getTime(), c = null, t.apply(o, s || []);}var r,a,o,s,l,h = 0,u = 0,c = null;e = e || 0;var d = function d() {r = new Date().getTime(), o = this, s = arguments;var t = l || e,d = l || n;l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r;};return d.clear = function () {c && (clearTimeout(c), c = null);}, d.debounceNextCall = function (t) {l = t;}, d;}function qs(t, e, n, i) {var r = t[e];if (r) {var a = r[Lx] || r,o = r[zx],s = r[Ox];if (s !== n || o !== i) {if (null == n || !i) return t[e] = a;r = t[e] = Ys(a, n, "debounce" === i), r[Lx] = a, r[zx] = i, r[Ox] = n;}return r;}}function js(t, e, n, i) {this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = R();}function Zs(t, e, n, i, r) {function a(t, e) {return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));}r = r || {};var o;f(e, function (e) {if (!r.visualType || r.visualType === e.visualType) {var s = t._stageTaskMap.get(e.uid),l = s.seriesTaskMap,h = s.overallTask;if (h) {var u,c = h.agentStubMap;c.each(function (t) {a(r, t) && (t.dirty(), u = !0);}), u && h.dirty(), Gx(h, i);var d = t.getPerformArgs(h, r.block);c.each(function (t) {t.perform(d);}), o |= h.perform(d);} else l && l.each(function (s) {a(r, s) && s.dirty();var l = t.getPerformArgs(s, r.block);l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), Gx(s, i), o |= s.perform(l);});}}), t.unfinished |= o;}function Us(t, e, n, i, r) {function a(n) {var a = n.uid,s = o.get(a) || o.set(a, Ds({ plan: el, reset: nl, count: rl }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, al(t, n, s);}var o = n.seriesTaskMap || (n.seriesTaskMap = R()),s = e.seriesType,l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var h = t._pipelineMap;o.each(function (t, e) {h.get(e) || (t.dispose(), o.removeKey(e));});}function Ks(t, e, n, i, r) {function a(e) {var n = e.uid,i = s.get(n);i || (i = s.set(n, Ds({ reset: Qs, onDirty: tl })), o.dirty()), i.context = { model: e, overallProgress: u, modifyOutputEnd: c }, i.agent = o, i.__block = u, al(t, e, i);}var o = n.overallTask = n.overallTask || Ds({ reset: $s });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || R(),l = e.seriesType,h = e.getTargetSeries,u = !0,c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));var d = t._pipelineMap;s.each(function (t, e) {d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));});}function $s(t) {t.overallReset(t.ecModel, t.api, t.payload);}function Qs(t) {return t.overallProgress && Js;}function Js() {this.agent.dirty(), this.getDownstream().dirty();}function tl() {this.agent && this.agent.dirty();}function el(t) {return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);}function nl(t) {t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = Ni(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? p(e, function (t, e) {return il(e);}) : Hx;}function il(t) {return function (e, n) {var i = n.data,r = n.resetDefines[t];if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {r.dataEach(i, a);} else r && r.progress && r.progress(e, i);};}function rl(t) {return t.data.count();}function al(t, e, n) {var i = e.uid,r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;}function ol(t) {Wx = null;try {t(Xx, Yx);} catch (e) {}return Wx;}function sl(t, e) {for (var n in e.prototype) {t[n] = V;}}function ll(t) {if (b(t)) {var e = new DOMParser();t = e.parseFromString(t, "text/xml");}for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {t = t.nextSibling;}return t;}function hl() {this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;}function ul(t, e) {for (var n = t.firstChild; n;) {if (1 === n.nodeType) {var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);}n = n.nextSibling;}}function cl(t, e) {t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));}function dl(t) {for (var e = z(t).split(Jx), n = [], i = 0; i < e.length; i += 2) {var r = parseFloat(e[i]),a = parseFloat(e[i + 1]);n.push([r, a]);}return n;}function fl(t, e, n, i) {var r = e.__inheritedStyle || {},a = "text" === e.type;if (1 === t.nodeType && (gl(t, e), o(r, vl(t)), !i)) for (var s in n_) {if (n_.hasOwnProperty(s)) {var l = t.getAttribute(s);null != l && (r[n_[s]] = l);}}var h = a ? "textFill" : "fill",u = a ? "textStroke" : "stroke";e.style = e.style || new Pg();var c = e.style;null != r.fill && c.set(h, pl(r.fill, n)), null != r.stroke && c.set(u, pl(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {var e = "lineWidth" === t && a ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));}), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {null != r[t] && c.set(t, r[t]);}), r.lineDash && (e.style.lineDash = z(r.lineDash).split(Jx)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r;}function pl(t, e) {var n = e && t && t.match(i_);if (n) {var i = z(n[1]),r = e[i];return r;}return t;}function gl(t, e) {var n = t.getAttribute("transform");if (n) {n = n.replace(/,/g, " ");var i = null,r = [];n.replace(r_, function (t, e, n) {r.push(e, n);});for (var a = r.length - 1; a > 0; a -= 2) {var o = r[a],s = r[a - 1];switch (i = i || Ie(), s) {case "translate":o = z(o).split(Jx), Ae(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);break;case "scale":o = z(o).split(Jx), Pe(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);break;case "rotate":o = z(o).split(Jx), ke(i, i, parseFloat(o[0]));break;case "skew":o = z(o).split(Jx), console.warn("Skew transform is not supported yet");break;case "matrix":var o = z(o).split(Jx);i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);}}e.setLocalTransform(i);}}function vl(t) {var e = t.getAttribute("style"),n = {};if (!e) return n;var i = {};a_.lastIndex = 0;for (var r; null != (r = a_.exec(e));) {i[r[1]] = r[2];}for (var a in n_) {n_.hasOwnProperty(a) && null != i[a] && (n[n_[a]] = i[a]);}return n;}function ml(t, e, n) {var i = e / t.width,r = n / t.height,a = Math.min(i, r),o = [a, a],s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];return { scale: o, position: s };}function yl(t) {return function (e, n, i) {e = e && e.toLowerCase(), zp.prototype[t].call(this, e, n, i);};}function xl() {zp.call(this);}function _l(t, e, n) {function r(t, e) {return t.__prio - e.__prio;}n = n || {}, "string" == typeof e && (e = N_[e]), this.id, this.group, this._dom = t;var a = "canvas",o = this._zr = Li(t, { renderer: n.renderer || a, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height });this._throttledZrFlush = Ys(y(o.flush, o), 17);var e = i(e);e && dx(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new ts();var s = this._api = Rl(this);Cn(E_, r), Cn(O_, r), this._scheduler = new js(this, s, O_, E_), zp.call(this, this._ecEventProcessor = new Fl()), this._messageCenter = new xl(), this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Dl(o, this), B(this);}function wl(t, e, n) {var i,r = this._model,a = this._coordSysMgr.getCoordinateSystems();e = ji(r, e);for (var o = 0; o < a.length; o++) {var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;}}function bl(t) {var e = t._model,n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), Al(t, "component", e, n), Al(t, "chart", e, n), n.plan();}function Sl(t, e, n, i, r) {function a(i) {i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);}var o = t._model;if (!i) return void u_(t._componentsViews.concat(t._chartsViews), a);var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var h = n.excludeSeriesId;null != h && (h = R(Ni(h))), o && o.eachComponent(l, function (e) {h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);}, t);}function Ml(t, e) {var n = t._chartsMap,i = t._scheduler;e.eachSeries(function (t) {i.updateStreamModes(t, n[t.__viewId]);});}function Il(t, e) {var n = t.type,i = t.escapeConnect,r = P_[n],a = r.actionInfo,l = (a.update || "update").split(":"),h = l.pop();l = null != l[0] && f_(l[0]), this[I_] = !0;var u = [t],c = !1;t.batch && (c = !0, u = p(t.batch, function (e) {return e = s(o({}, e), t), e.batch = null, e;}));var d,f = [],g = "highlight" === n || "downplay" === n;u_(u, function (t) {d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Sl(this, h, t, "series") : l && Sl(this, h, t, l.main, l.sub);}, this), "none" === h || g || l || (this[T_] ? (bl(this), A_.update.call(this, t), this[T_] = !1) : A_[h].call(this, t)), d = c ? { type: a.event || n, escapeConnect: i, batch: f } : f[0], this[I_] = !1, !e && this._messageCenter.trigger(d.type, d);}function Tl(t) {for (var e = this._pendingActions; e.length;) {var n = e.shift();Il.call(this, n, t);}}function Cl(t) {!t && this.trigger("updated");}function Dl(t, e) {t.on("rendered", function () {e.trigger("rendered"), !t.animation.isFinished() || e[T_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");});}function Al(t, e, n, i) {function r(t) {var e = "_ec_" + t.id + "_" + t.type,r = s[e];if (!r) {var u = f_(t.type),c = a ? Ix.getClass(u.main, u.sub) : Vs.getClass(u.sub);r = new c(), r.init(n, h), s[e] = r, o.push(r), l.add(r.group);}t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, h);}for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) {o[u].__alive = !1;}a ? n.eachComponent(function (t, e) {"series" !== t && r(e);}) : n.eachSeries(r);for (var u = 0; u < o.length;) {var c = o[u];c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);}}function kl(t) {t.clearColorPalette(), t.eachSeries(function (t) {t.clearColorPalette();});}function Pl(t, e, n, i) {Ll(t, e, n, i), u_(t._chartsViews, function (t) {t.__alive = !1;}), Ol(t, e, n, i), u_(t._chartsViews, function (t) {t.__alive || t.remove(e, n);});}function Ll(t, e, n, i, r) {u_(r || t._componentsViews, function (t) {var r = t.__model;t.render(r, e, n, i), Nl(r, t);});}function Ol(t, e, n, i, r) {var a,o = t._scheduler;e.eachSeries(function (e) {var n = t._chartsMap[e.__viewId];n.__alive = !0;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Nl(e, n), El(e, n);}), o.unfinished |= a, Bl(t._zr, e), Nx(t._zr.dom, e);}function zl(t, e) {u_(B_, function (n) {n(t, e);});}function Bl(t, e) {var n = t.storage,i = 0;n.traverse(function (t) {t.isGroup || i++;}), i > e.get("hoverLayerThreshold") && !dp.node && n.traverse(function (t) {t.isGroup || (t.useHoverLayer = !0);});}function El(t, e) {var n = t.get("blendMode") || null;e.group.traverse(function (t) {t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {t.setStyle("blend", n);});});}function Nl(t, e) {var n = t.get("z"),i = t.get("zlevel");e.group.traverse(function (t) {"group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));});}function Rl(t) {var e = t._coordSysMgr;return o(new Jo(t), { getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {for (; e;) {var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;}} });}function Fl() {this.eventInfo;}function Vl(t) {function e(t, e) {for (var n = 0; n < t.length; n++) {var i = t[n];i[a] = e;}}var n = 0,i = 1,r = 2,a = "__connectUpdateStatus";u_(L_, function (o, s) {t._messageCenter.on(s, function (o) {if (V_[t.group] && t[a] !== n) {if (o && o.escapeConnect) return;var s = t.makeActionFromEvent(o),l = [];u_(F_, function (e) {e !== t && e.group === t.group && l.push(e);}), e(l, n), u_(l, function (t) {t[a] !== i && t.dispatchAction(s);}), e(l, r);}});});}function Gl(t, e, n) {var i = Yl(t);if (i) return i;var r = new _l(t, e, n);return r.id = "ec_" + G_++, F_[r.id] = r, Ui(t, W_, r.id), Vl(r), r;}function Hl(t) {if (_(t)) {var e = t;t = null, u_(e, function (e) {null != e.group && (t = e.group);}), t = t || "g_" + H_++, u_(e, function (e) {e.group = t;});}return V_[t] = !0, t;}function Wl(t) {V_[t] = !1;}function Xl(t) {"string" == typeof t ? t = F_[t] : t instanceof _l || (t = Yl(t)), t instanceof _l && !t.isDisposed() && t.dispose();}function Yl(t) {return F_[Ki(t, W_)];}function ql(t) {return F_[t];}function jl(t, e) {N_[t] = e;}function Zl(t) {z_.push(t);}function Ul(t, e) {nh(O_, t, e, m_);}function Kl(t) {B_.push(t);}function $l(t, e, n) {"function" == typeof e && (n = e, e = "");var i = d_(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, h_(C_.test(i) && C_.test(e)), P_[i] || (P_[i] = { action: n, actionInfo: t }), L_[e] = i;}function Ql(t, e) {ts.register(t, e);}function Jl(t) {var e = ts.get(t);return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;}function th(t, e) {nh(E_, t, e, x_, "layout");}function eh(t, e) {nh(E_, t, e, w_, "visual");}function nh(t, e, n, i, r) {(c_(e) || d_(e)) && (n = e, e = i);var a = js.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;}function ih(t, e) {R_[t] = e;}function rh(t) {return Ey.extend(t);}function ah(t) {return Ix.extend(t);}function oh(t) {return Mx.extend(t);}function sh(t) {return Vs.extend(t);}function lh(t) {n("createCanvas", t);}function hh(t, e, n) {s_.registerMap(t, e, n);}function uh(t) {var e = s_.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };}function ch(t) {return t;}function dh(t, e, n, i, r) {this._old = t, this._new = e, this._oldKeyGetter = n || ch, this._newKeyGetter = i || ch, this.context = r;}function fh(t, e, n, i, r) {for (var a = 0; a < t.length; a++) {var o = "_ec_" + r[i](t[a], a),s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));}}function ph(t) {var e = {},n = e.encode = {},i = R(),r = [],a = [];f(t.dimensions, function (e) {var o = t.getDimensionInfo(e),s = o.coordDim;if (s) {var l = n[s];n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), vh(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);}q_.each(function (t, e) {var i = n[e];n.hasOwnProperty(e) || (i = n[e] = []);var r = o.otherDims[e];null != r && r !== !1 && (i[r] = o.name);});});var o = [],s = {};i.each(function (t, e) {var i = n[e];s[e] = i[0], o = o.concat(i);}), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;var l = n.label;l && l.length && (r = l.slice());var h = n.tooltip;return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;}function gh(t) {return "category" === t ? "ordinal" : "time" === t ? "time" : "float";}function vh(t) {return !("ordinal" === t || "time" === t);}function mh(t) {return t._rawCount > 65535 ? Q_ : tw;}function yh(t) {var e = t.constructor;return e === Array ? t.slice() : new e(t);}function xh(t, e) {f(ew.concat(e.__wrappedMethods || []), function (n) {e.hasOwnProperty(n) && (t[n] = e[n]);}), t.__wrappedMethods = e.__wrappedMethods, f(nw, function (n) {t[n] = i(e[n]);}), t._calculationInfo = o(e._calculationInfo);}function _h(t, e, n, i, r) {var a = $_[e.type],o = i - 1,s = e.name,l = t[s][o];if (l && l.length < n) {for (var h = new a(Math.min(r - o * n, n)), u = 0; u < l.length; u++) {h[u] = l[u];}t[s][o] = h;}for (var c = i * n; r > c; c += n) {t[s].push(new a(Math.min(r - c, n)));}}function wh(t) {var e = t._invertedIndicesMap;f(e, function (n, i) {var r = t._dimensionInfos[i],a = r.ordinalMeta;if (a) {n = e[i] = new J_(a.categories.length);for (var o = 0; o < n.length; o++) {n[o] = U_;}for (var o = 0; o < t._count; o++) {n[t.get(i, o)] = o;}}});}function bh(t, e, n) {var i;if (null != e) {var r = t._chunkSize,a = Math.floor(n / r),o = n % r,s = t.dimensions[e],l = t._storage[s][a];if (l) {i = l[o];var h = t._dimensionInfos[s].ordinalMeta;h && h.categories.length && (i = h.categories[i]);}}return i;}function Sh(t) {return t;}function Mh(t) {return t < this._count && t >= 0 ? this._indices[t] : -1;}function Ih(t, e) {var n = t._idList[e];return null == n && (n = bh(t, t._idDimIdx, e)), null == n && (n = K_ + e), n;}function Th(t) {return _(t) || (t = [t]), t;}function Ch(t, e) {var n = t.dimensions,i = new iw(p(n, t.getDimensionInfo, t), t.hostModel);xh(i, t);for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {var s = n[o];a[s] && (h(e, s) >= 0 ? (r[s] = Dh(a[s]), i._rawExtent[s] = Ah(), i._extent[s] = null) : r[s] = a[s]);}return i;}function Dh(t) {for (var e = new Array(t.length), n = 0; n < t.length; n++) {e[n] = yh(t[n]);}return e;}function Ah() {return [1 / 0, -1 / 0];}function kh(t, e, n) {function r(t, e, n) {null != q_.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0));}Oo.isInstance(e) || (e = Oo.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();for (var a = (n.dimsDef || []).slice(), l = R(n.encodeDef), h = R(), u = R(), c = [], d = Ph(e, t, a, n.dimCount), p = 0; d > p; p++) {var g = a[p] = o({}, S(a[p]) ? a[p] : { name: a[p] }),v = g.name,m = c[p] = { otherDims: {} };
      null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);}l.each(function (t, e) {if (t = Ni(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);var n = l.set(e, []);f(t, function (t, i) {b(t) && (t = h.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i));});});var y = 0;f(t, function (t) {var e, t, n, a;if (b(t)) e = t, t = {};else {e = t.name;var o = t.ordinalMeta;t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;}var h = l.get(e);if (h !== !1) {var h = Ni(h);if (!h.length) for (var u = 0; u < (n && n.length || 1); u++) {for (; y < c.length && null != c[y].coordDim;) {y++;}y < c.length && h.push(y++);}f(h, function (i, o) {var l = c[i];if (r(s(l, t), e, o), null == l.name && n) {var h = n[o];!S(h) && (h = { name: h }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;}a && s(l.otherDims, a);});}});var x = n.generateCoord,_ = n.generateCoordCount,w = null != _;_ = x ? _ || 1 : 0;for (var M = x || "value", I = 0; d > I; I++) {var m = c[I] = c[I] || {},T = m.coordDim;null == T && (m.coordDim = Lh(M, u, w), m.coordDimIndex = 0, (!x || 0 >= _) && (m.isExtraCoord = !0), _--), null == m.name && (m.name = Lh(m.coordDim, h)), null == m.type && Xo(e, I, m.name) && (m.type = "ordinal");}return c;}function Ph(t, e, n, i) {var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return f(e, function (t) {var e = t.dimsDef;e && (r = Math.max(r, e.length));}), r;}function Lh(t, e, n) {if (n || null != e.get(t)) {for (var i = 0; null != e.get(t + i);) {i++;}t += i;}return e.set(t, !0), t;}function Oh(t, e, n) {n = n || {};var i,r,a,o,s = n.byIndex,l = n.stackedCoordDimension,h = !(!t || !t.get("stack"));if (f(e, function (t, n) {b(t) && (e[n] = t = { name: t }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));}), !r || s || i || (s = !0), r) {a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);var u = r.coordDim,c = r.type,d = 0;f(e, function (t) {t.coordDim === u && d++;}), e.push({ name: a, coordDim: u, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 }), d++, e.push({ name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 });}return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };}function zh(t, e) {return !!e && e === t.getCalculationInfo("stackedDimension");}function Bh(t, e) {return zh(t, e) ? t.getCalculationInfo("stackResultDimension") : e;}function Eh(t, e, n) {n = n || {}, Oo.isInstance(t) || (t = Oo.seriesDataToSource(t));var i,r = e.get("coordinateSystem"),a = ts.get(r),o = Po(e);o && (i = p(o.coordSysDims, function (t) {var e = { name: t },n = o.axisMap.get(t);if (n) {var i = n.get("type");e.type = gh(i);}return e;})), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,l,h = ow(t, { coordDimensions: i, generateCoord: n.generateCoord });o && f(h, function (t, e) {var n = t.coordDim,i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);}), l || null == s || (h[s].otherDims.itemName = 0);var u = Oh(e, h),c = new iw(h, e);c.setCalculationInfo(u);var d = null != s && Nh(t) ? function (t, e, n, i) {return i === s ? n : this.defaultDimValueGetter(t, e, n, i);} : null;return c.hasItemOption = !1, c.initData(t, null, d), c;}function Nh(t) {if (t.sourceFormat === Hy) {var e = Rh(t.data || []);return null != e && !_(Fi(e));}}function Rh(t) {for (var e = 0; e < t.length && null == t[e];) {e++;}return t[e];}function Fh(t) {this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);}function Vh(t) {this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;}function Gh(t) {return t._map || (t._map = R(t.categories));}function Hh(t) {return S(t) && null != t.value ? t.value : t + "";}function Wh(t, e, n, i) {var r = {},a = t[1] - t[0],o = r.interval = lo(a / e, !0);null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = Xh(o),l = r.niceTickExtent = [uw(Math.ceil(t[0] / o) * o, s), uw(Math.floor(t[1] / o) * o, s)];return qh(l, t), r;}function Xh(t) {return to(t) + 2;}function Yh(t, e, n) {t[e] = Math.max(Math.min(t[e], n[1]), n[0]);}function qh(t, e) {!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Yh(t, 0, e), Yh(t, 1, e), t[0] > t[1] && (t[0] = t[1]);}function jh(t, e, n, i) {var r = [];if (!t) return r;var a = 1e4;e[0] < n[0] && r.push(e[0]);for (var o = n[0]; o <= n[1] && (r.push(o), o = uw(o + t, i), o !== r[r.length - 1]);) {if (r.length > a) return [];}return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;}function Zh(t) {return t.get("stack") || fw + t.seriesIndex;}function Uh(t) {return t.dim + t.index;}function Kh(t, e) {var n = [];return e.eachSeriesByType(t, function (t) {eu(t) && !nu(t) && n.push(t);}), n;}function $h(t) {var e = [];return f(t, function (t) {var n = t.getData(),i = t.coordinateSystem,r = i.getBaseAxis(),a = r.getExtent(),o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),s = Ka(t.get("barWidth"), o),l = Ka(t.get("barMaxWidth"), o),h = t.get("barGap"),u = t.get("barCategoryGap");e.push({ bandWidth: o, barWidth: s, barMaxWidth: l, barGap: h, barCategoryGap: u, axisKey: Uh(r), stackId: Zh(t) });}), Qh(e);}function Qh(t) {var e = {};f(t, function (t) {var n = t.axisKey,i = t.bandWidth,r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },a = r.stacks;e[n] = r;var o = t.stackId;a[o] || r.autoWidthCount++, a[o] = a[o] || { width: 0, maxWidth: 0 };var s = t.barWidth;s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);var l = t.barMaxWidth;l && (a[o].maxWidth = l);var h = t.barGap;null != h && (r.gap = h);var u = t.barCategoryGap;null != u && (r.categoryGap = u);});var n = {};return f(e, function (t, e) {n[e] = {};var i = t.stacks,r = t.bandWidth,a = Ka(t.categoryGap, r),o = Ka(t.gap, 1),s = t.remainedWidth,l = t.autoWidthCount,h = (s - a) / (l + (l - 1) * o);h = Math.max(h, 0), f(i, function (t) {var e = t.maxWidth;e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--);}), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);var u,c = 0;f(i, function (t) {t.width || (t.width = h), u = t, c += t.width * (1 + o);}), u && (c -= u.width * o);var d = -c / 2;f(i, function (t, i) {n[e][i] = n[e][i] || { offset: d, width: t.width }, d += t.width * (1 + o);});}), n;}function Jh(t, e, n) {if (t && e) {var i = t[Uh(e)];return null != i && null != n && (i = i[Zh(n)]), i;}}function tu(t, e) {var n = Kh(t, e),i = $h(n),r = {};f(n, function (t) {var e = t.getData(),n = t.coordinateSystem,a = n.getBaseAxis(),o = Zh(t),s = i[Uh(a)][o],l = s.offset,h = s.width,u = n.getOtherAxis(a),c = t.get("barMinHeight") || 0;r[o] = r[o] || [], e.setLayout({ offset: l, size: h });for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = zh(e, d), g = u.isHorizontal(), v = iu(a, u, p), m = 0, y = e.count(); y > m; m++) {var x = e.get(d, m),_ = e.get(f, m);if (!isNaN(x)) {var w = x >= 0 ? "p" : "n",b = v;p && (r[o][_] || (r[o][_] = { p: v, n: v }), b = r[o][_][w]);var S, M, I, T;if (g) {var C = n.dataToPoint([x, _]);S = b, M = C[1] + l, I = C[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][_][w] += I);} else {var C = n.dataToPoint([_, x]);S = C[0] + l, M = b, I = h, T = C[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (r[o][_][w] += T);}e.setItemLayout(m, { x: S, y: M, width: I, height: T });}}}, this);}function eu(t) {return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;}function nu(t) {return t.pipelineContext && t.pipelineContext.large;}function iu(t, e) {var n,i,r = e.getGlobalExtent();r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);var a = e.toGlobalCoord(e.dataToCoord(0));return n > a && (a = n), a > i && (a = i), a;}function ru(t, e) {return kw(t, Aw(e));}function au(t, e) {var n,i,r,a = t.type,o = e.getMin(),s = e.getMax(),l = null != o,h = null != s,u = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Ka(i[0], 1), i[1] = Ka(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({ min: u[0], max: u[1] })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({ min: u[0], max: u[1] })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));var c = e.ecModel;if (c && "time" === a) {var d,p = Kh("bar", c);if (f(p, function (t) {d |= t.getBaseAxis() === e.axis;}), d) {var g = $h(p),v = ou(o, s, e, g);o = v.min, s = v.max;}}return [o, s];}function ou(t, e, n, i) {var r = n.axis.getExtent(),a = r[1] - r[0],o = Jh(i, n.axis);if (void 0 === o) return { min: t, max: e };var s = 1 / 0;f(o, function (t) {s = Math.min(t.offset, s);});var l = -1 / 0;f(o, function (t) {l = Math.max(t.offset + t.width, l);}), s = Math.abs(s), l = Math.abs(l);var h = s + l,u = e - t,c = 1 - (s + l) / a,d = u / c - u;return e += d * (l / h), t -= d * (s / h), { min: t, max: e };}function su(t, e) {var n = au(t, e),i = null != e.getMin(),r = null != e.getMax(),a = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(n[0], n[1]), t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var s = e.get("interval");null != s && t.setInterval && t.setInterval(s);}function lu(t, e) {if (e = e || t.get("type")) switch (e) {case "category":return new hw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);case "value":return new dw();default:return (Fh.getClass(e) || dw).create(t);}}function hu(t) {var e = t.scale.getExtent(),n = e[0],i = e[1];return !(n > 0 && i > 0 || 0 > n && 0 > i);}function uu(t) {var e = t.getLabelModel().get("formatter"),n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {return function (n) {return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");};}(e) : "function" == typeof e ? function (i, r) {return null != n && (r = i - n), e(cu(t, i), r);} : function (e) {return t.scale.getLabel(e);};}function cu(t, e) {return "category" === t.type ? t.scale.getLabel(e) : e;}function du(t) {var e = t.model,n = t.scale;if (e.get("axisLabel.show") && !n.isBlank()) {var i,r,a = "category" === t.type,o = n.getExtent();a ? r = n.count() : (i = n.getTicks(), r = i.length);var s,l = t.getLabelModel(),h = uu(t),u = 1;r > 40 && (u = Math.ceil(r / 40));for (var c = 0; r > c; c += u) {var d = i ? i[c] : o[0] + c,f = h(d),p = l.getTextRect(f),g = fu(p, l.get("rotate") || 0);s ? s.union(g) : s = g;}return s;}}function fu(t, e) {var n = e * Math.PI / 180,i = t.plain(),r = i.width,a = i.height,o = r * Math.cos(n) + a * Math.sin(n),s = r * Math.sin(n) + a * Math.cos(n),l = new xn(i.x, i.y, o, s);return l;}function pu(t) {var e = t.get("interval");return null == e ? "auto" : e;}function gu(t) {return "category" === t.type && 0 === pu(t.getLabelModel());}function vu(t, e) {if ("image" !== this.type) {var n = this.style,i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);}}function mu(t, e, n, i, r, a, o) {var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? ea(t.slice(8), new xn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? ta(t.slice(7), {}, new xn(e, n, i, r), o ? "center" : "cover") : new Xw({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = vu, l.setColor(a), l;}function yu(t) {return Eh(t.getSource(), t);}function xu(t, e) {var n = e;Ha.isInstance(e) || (n = new Ha(e), c(n, Ew));var i = lu(n);return i.setExtent(t[0], t[1]), su(i, n), i;}function _u(t) {c(t, Ew);}function wu(t, e) {return Math.abs(t - e) < jw;}function bu(t, e, n) {var i = 0,r = t[0];if (!r) return !1;for (var a = 1; a < t.length; a++) {var o = t[a];i += Ar(r[0], r[1], o[0], o[1], e, n), r = o;}var s = t[0];return wu(r[0], s[0]) && wu(r[1], s[1]) || (i += Ar(r[0], r[1], s[0], s[1], e, n)), 0 !== i;}function Su(t, e, n) {if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {var i = this.getBoundingRect();n = [i.x + i.width / 2, i.y + i.height / 2];}this.center = n;}function Mu(t) {if (!t.UTF8Encoding) return t;var e = t.UTF8Scale;null == e && (e = 1024);for (var n = t.features, i = 0; i < n.length; i++) {for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {var h = o[l];if ("Polygon" === a.type) o[l] = Iu(h, s[l], e);else if ("MultiPolygon" === a.type) for (var u = 0; u < h.length; u++) {var c = h[u];h[u] = Iu(c, s[l][u], e);}}}return t.UTF8Encoding = !1, t;}function Iu(t, e, n) {for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {var s = t.charCodeAt(o) - 64,l = t.charCodeAt(o + 1) - 64;s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n]);}return i;}function Tu(t) {return "category" === t.type ? Du(t) : Pu(t);}function Cu(t, e) {return "category" === t.type ? ku(t, e) : { ticks: t.scale.getTicks() };}function Du(t) {var e = t.getLabelModel(),n = Au(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;}function Au(t, e) {var n = Lu(t, "labels"),i = pu(e),r = Ou(n, i);if (r) return r;var a, o;return w(i) ? a = Fu(t, i) : (o = "auto" === i ? Bu(t) : i, a = Ru(t, o)), zu(n, i, { labels: a, labelCategoryInterval: o });}function ku(t, e) {var n = Lu(t, "ticks"),i = pu(e),r = Ou(n, i);if (r) return r;var a, o;if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = Fu(t, i, !0);else if ("auto" === i) {var s = Au(t, t.getLabelModel());o = s.labelCategoryInterval, a = p(s.labels, function (t) {return t.tickValue;});} else o = i, a = Ru(t, o, !0);return zu(n, i, { ticks: a, tickCategoryInterval: o });}function Pu(t) {var e = t.scale.getTicks(),n = uu(t);return { labels: p(e, function (e, i) {return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };}) };}function Lu(t, e) {return Uw(t)[e] || (Uw(t)[e] = []);}function Ou(t, e) {for (var n = 0; n < t.length; n++) {if (t[n].key === e) return t[n].value;}}function zu(t, e, n) {return t.push({ key: e, value: n }), n;}function Bu(t) {var e = Uw(t).autoInterval;return null != e ? e : Uw(t).autoInterval = t.calculateCategoryInterval();}function Eu(t) {var e = Nu(t),n = uu(t),i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,r = t.scale,a = r.getExtent(),o = r.count();if (a[1] - a[0] < 1) return 0;var s = 1;o > 40 && (s = Math.max(1, Math.floor(o / 40)));for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {var p = 0,g = 0,v = Rn(n(l), e.font, "center", "top");p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);}var m = d / u,y = f / c;isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);var x = Math.max(0, Math.floor(Math.min(m, y))),_ = Uw(t.model),w = _.lastAutoInterval,b = _.lastTickCount;return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - o) <= 1 && w > x ? x = w : (_.lastTickCount = o, _.lastAutoInterval = x), x;}function Nu(t) {var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };}function Ru(t, e, n) {function i(t) {l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });}var r = uu(t),a = t.scale,o = a.getExtent(),s = t.getLabelModel(),l = [],h = Math.max((e || 0) + 1, 1),u = o[0],c = a.count();0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));var d = gu(t),f = s.get("showMinLabel") || d,p = s.get("showMaxLabel") || d;f && u !== o[0] && i(o[0]);for (var g = u; g <= o[1]; g += h) {i(g);}return p && g !== o[1] && i(o[1]), l;}function Fu(t, e, n) {var i = t.scale,r = uu(t),a = [];return f(i.getTicks(), function (t) {var o = i.getLabel(t);e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });}), a;}function Vu(t, e) {var n = t[1] - t[0],i = e,r = n / i / 2;t[0] += r, t[1] -= r;}function Gu(t, e, n, i, r) {function a(t, e) {return u ? t > e : e > t;}var o = e.length;if (t.onBand && !i && o) {var s,l = t.getExtent();if (1 === o) e[0].coord = l[0], s = e[1] = { coord: l[0] };else {var h = e[1].coord - e[0].coord;f(e, function (t) {t.coord -= h / 2;var e = e || 0;e % 2 > 0 && (t.coord -= h / (2 * (e + 1)));}), s = { coord: e[o - 1].coord + h }, e.push(s);}var u = l[0] > l[1];a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({ coord: l[0] }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({ coord: l[1] });}}function Hu(t) {return this._axes[t];}function Wu(t) {eb.call(this, t);}function Xu(t, e) {return e.type || (e.data ? "category" : "value");}function Yu(t, e) {return t.getCoordSysModel() === e;}function qu(t, e, n) {this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;}function ju(t, e, n, i) {function r(t) {return t.dim + "_" + t.index;}n.getAxesOnZeroOf = function () {return a ? [a] : [];};var a,o = t[e],s = n.model,l = s.get("axisLine.onZero"),h = s.get("axisLine.onZeroAxisIndex");if (l) {if (null != h) Zu(o[h]) && (a = o[h]);else for (var u in o) {if (o.hasOwnProperty(u) && Zu(o[u]) && !i[r(o[u])]) {a = o[u];break;}}a && (i[r(a)] = !0);}}function Zu(t) {return t && "category" !== t.type && "time" !== t.type && hu(t);}function Uu(t, e) {var n = t.getExtent(),i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {return t + e;} : function (t) {return i - t + e;}, t.toLocalCoord = "x" === t.dim ? function (t) {return t - e;} : function (t) {return i - t + e;};}function Ku(t) {return p(ub, function (e) {var n = t.getReferringComponents(e)[0];return n;});}function $u(t) {return "cartesian2d" === t.get("coordinateSystem");}function Qu(t, e) {var n = t.mapDimension("defaultedLabel", !0),i = n.length;if (1 === i) return Ts(t, e, n[0]);if (i) {for (var r = [], a = 0; a < n.length; a++) {var o = Ts(t, e, n[a]);r.push(o);}return r.join(" ");}}function Ju(t, e, n, i, r, a) {var o = n.getModel("label"),s = n.getModel("emphasis.label");ba(t, e, o, s, { labelFetcher: r, labelDataIndex: a, defaultText: Qu(r.getData(), a), isRectText: !0, autoColor: i }), tc(t), tc(e);}function tc(t, e) {"outside" === t.textPosition && (t.textPosition = e);}function ec(t, e, n) {n.style.text = null, Oa(n, { shape: { width: 0 } }, e, t, function () {n.parent && n.parent.remove(n);});}function nc(t, e, n) {n.style.text = null, Oa(n, { shape: { r: n.shape.r0 } }, e, t, function () {n.parent && n.parent.remove(n);});}function ic(t, e, n, i, r, a, o, l) {var h = e.getItemVisual(n, "color"),u = e.getItemVisual(n, "opacity"),c = i.getModel("itemStyle"),d = i.getModel("emphasis.itemStyle").getBarItemStyle();l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({ fill: h, opacity: u }, c.getBarItemStyle()));var f = i.getShallow("cursor");f && t.attr("cursor", f);var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";l || Ju(t.style, d, i, h, a, n, p), _a(t, d);}function rc(t, e) {var n = t.get(pb) || 0;return Math.min(n, Math.abs(e.width), Math.abs(e.height));}function ac(t, e, n) {var i = t.getData(),r = [],a = i.getLayout("valueAxisHorizontal") ? 1 : 0;r[1 - a] = i.getLayout("valueAxisStart");var o = new mb({ shape: { points: i.getLayout("largePoints") }, incremental: !!n, __startPoint: r, __valueIdx: a });e.add(o), oc(o, t, i);}function oc(t, e, n) {var i = n.getVisual("borderColor") || n.getVisual("color"),r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth");}function sc(t) {var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;}function lc(t, e, n, i) {var r,a,o = io(n - t.rotation),s = i[0] > i[1],l = "start" === e && !s || "start" !== e && s;return ro(o - yb / 2) ? (a = l ? "bottom" : "top", r = "center") : ro(o - 1.5 * yb) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * yb > o && o > yb / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };}function hc(t) {var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);}function uc(t, e, n) {if (!gu(t.axis)) {var i = t.get("axisLabel.showMinLabel"),r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],o = e[1],s = e[e.length - 1],l = e[e.length - 2],h = n[0],u = n[1],c = n[n.length - 1],d = n[n.length - 2];i === !1 ? (cc(a), cc(h)) : dc(a, o) && (i ? (cc(o), cc(u)) : (cc(a), cc(h))), r === !1 ? (cc(s), cc(c)) : dc(l, s) && (r ? (cc(l), cc(d)) : (cc(s), cc(c)));}}function cc(t) {t && (t.ignore = !0);}function dc(t, e) {var n = t && t.getBoundingRect().clone(),i = e && e.getBoundingRect().clone();if (n && i) {var r = Te([]);return ke(r, r, -t.rotation), n.applyTransform(De([], r, t.getLocalTransform())), i.applyTransform(De([], r, e.getLocalTransform())), n.intersect(i);}}function fc(t) {return "middle" === t || "center" === t;}function pc(t, e, n) {var i = e.axis;if (e.get("axisTick.show") && !i.scale.isBlank()) {for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {var p = l[f].coord;h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * o, c && (ae(h, h, c), ae(u, u, c));var g = new Zm(ra({ anid: "tick_" + l[f].tickValue, shape: { x1: h[0], y1: h[1], x2: u[0], y2: u[1] }, style: s(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 }));t.group.add(g), d.push(g);}return d;}}function gc(t, e, n) {var i = e.axis,r = D(n.axisLabelShow, e.get("axisLabel.show"));if (r && !i.scale.isBlank()) {var a = e.getModel("axisLabel"),o = a.get("margin"),s = i.getViewLabels(),l = (D(n.labelRotate, a.get("rotate")) || 0) * yb / 180,h = wb(n.rotation, l, n.labelDirection),u = e.getCategories(!0),c = [],d = hc(e),p = e.get("triggerEvent");return f(s, function (r, s) {var l = r.tickValue,f = r.formattedLabel,g = r.rawLabel,v = a;u && u[l] && u[l].textStyle && (v = new Ha(u[l].textStyle, a, e.ecModel));var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),y = i.dataToCoord(l),x = [y, n.labelOffset + n.labelDirection * o],_ = new zm({ anid: "label_" + l, position: x, rotation: h.rotation, silent: d, z2: 10 });Sa(_.style, v, { text: f, textAlign: v.getShallow("align", !0) || h.textAlign, textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign, textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m }), p && (_.eventData = sc(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), c.push(_), t.group.add(_), _.decomposeTransform();}), c;}}function vc(t, e) {var n = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };return mc(n, t, e), n.seriesInvolved && xc(n, t), n;}function mc(t, e, n) {var i = e.getComponent("tooltip"),r = e.getComponent("axisPointer"),a = r.get("link", !0) || [],o = [];bb(n.getCoordinateSystems(), function (n) {function s(i, s, l) {var u = l.model.getModel("axisPointer", r),d = u.get("show");if (d && ("auto" !== d || i || Ic(u))) {null == s && (s = u.get("triggerTooltip")), u = i ? yc(l, c, r, e, i, s) : u;var f = u.get("snap"),p = Tc(l.model),g = s || f || "category" === l.type,v = t.axesInfo[p] = { key: p, axis: l, coordSys: n, axisPointerModel: u, triggerTooltip: s, involveSeries: g, snap: f, useHandle: Ic(u), seriesModels: [] };h[p] = v, t.seriesInvolved |= g;var m = _c(a, l);if (null != m) {var y = o[m] || (o[m] = { axesInfo: {} });y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;}}}if (n.axisPointerEnabled) {var l = Tc(n.model),h = t.coordSysAxesInfo[l] = {};t.coordSysMap[l] = n;var u = n.model,c = u.getModel("tooltip", i);if (bb(n.getAxes(), Sb(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {var d = "axis" === c.get("trigger"),f = "cross" === c.get("axisPointer.type"),p = n.getTooltipAxes(c.get("axisPointer.axis"));(d || f) && bb(p.baseAxes, Sb(s, f ? "cross" : !0, d)), f && bb(p.otherAxes, Sb(s, "cross", !1));}}});}function yc(t, e, n, r, a, o) {var l = e.getModel("axisPointer"),h = {};bb(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {h[t] = i(l.get(t));}), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");var u = h.label || (h.label = {});if (null == u.show && (u.show = !1), "cross" === a) {var c = l.get("label.show");if (u.show = null != c ? c : !0, !o) {var d = h.lineStyle = l.get("crossStyle");d && s(u, d.textStyle);}}return t.model.getModel("axisPointer", new Ha(h, n, r));}function xc(t, e) {e.eachSeries(function (e) {var n = e.coordinateSystem,i = e.get("tooltip.trigger", !0),r = e.get("tooltip.show", !0);n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && bb(t.coordSysAxesInfo[Tc(n.model)], function (t) {var i = t.axis;n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());});}, this);}function _c(t, e) {for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {var a = t[r] || {};if (wc(a[i + "AxisId"], n.id) || wc(a[i + "AxisIndex"], n.componentIndex) || wc(a[i + "AxisName"], n.name)) return r;}}function wc(t, e) {return "all" === t || _(t) && h(t, e) >= 0 || t === e;}function bc(t) {var e = Sc(t);if (e) {var n = e.axisPointerModel,i = e.axis.scale,r = n.option,a = n.get("status"),o = n.get("value");null != o && (o = i.parse(o));var s = Ic(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");}}function Sc(t) {var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[Tc(t)];}function Mc(t) {var e = Sc(t);return e && e.axisPointerModel;}function Ic(t) {return !!t.get("handle.show");}function Tc(t) {return t.type + "||" + t.id;}function Cc(t, e, n, i, r, a) {var o = Mb.getAxisPointerClass(t.axisPointerClass);if (o) {var s = Mc(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Dc(t, i);}}function Dc(t, e, n) {var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;}function Ac(t, e, n) {n = n || {};var i = t.coordinateSystem,r = e.axis,a = {},o = r.getAxesOnZeroOf()[0],s = r.position,l = o ? "onZero" : s,h = r.dim,u = i.getRect(),c = [u.x, u.x + u.width, u.y, u.y + u.height],d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },f = e.get("offset") || 0,p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];if (o) {var g = o.toGlobalCoord(o.dataToCoord(0));p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);}a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var m = e.get("axisLabel.rotate");return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;}function kc(t, e, n) {bg.call(this), this.updateData(t, e, n);}function Pc(t) {return [t[0] / 2, t[1] / 2];}function Lc(t, e) {this.parent.drift(t, e);}function Oc() {!ga(this) && Bc.call(this);}function zc() {!ga(this) && Ec.call(this);}function Bc() {if (!this.incremental && !this.useHoverLayer) {var t = this.__symbolOriginalScale,e = t[1] / t[0];this.animateTo({ scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)] }, 400, "elasticOut");}}function Ec() {this.incremental || this.useHoverLayer || this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");}function Nc(t) {this.group = new bg(), this._symbolCtor = t || kc;}function Rc(t, e, n, i) {return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"));}function Fc(t) {return null == t || S(t) || (t = { isIgnore: t }), t || {};}function Vc(t) {var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };}function Gc(t, e, n) {var i,r = t.getBaseAxis(),a = t.getOtherAxis(r),o = Hc(a, n),s = r.dim,l = a.dim,h = e.mapDimension(l),u = e.mapDimension(s),c = "x" === l || "radius" === l ? 1 : 0,d = p(t.dimensions, function (t) {return e.mapDimension(t);}),f = e.getCalculationInfo("stackResultDimension");return (i |= zh(e, d[0])) && (d[0] = f), (i |= zh(e, d[1])) && (d[1] = f), { dataDimsForPoint: d, valueStart: o, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: h, baseDim: u, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };}function Hc(t, e) {var n = 0,i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;}function Wc(t, e, n, i) {var r = 0 / 0;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var a = t.baseDataOffset,o = [];return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);}function Xc(t, e) {var n = [];return e.diff(t).add(function (t) {n.push({ cmd: "+", idx: t });}).update(function (t, e) {n.push({ cmd: "=", idx: e, idx1: t });}).remove(function (t) {n.push({ cmd: "-", idx: t });}).execute(), n;}function Yc(t) {return isNaN(t[0]) || isNaN(t[1]);}function qc(t, e, n, i, r, a, o, s, l, h) {return "none" !== h && h ? jc.apply(this, arguments) : Zc.apply(this, arguments);}function jc(t, e, n, i, r, a, o, s, l, h, u) {for (var c = 0, d = n, f = 0; i > f; f++) {var p = e[d];if (d >= r || 0 > d) break;if (Yc(p)) {if (u) {d += a;continue;}break;}if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {var g = e[c],v = "y" === h ? 1 : 0,m = (p[v] - g[v]) * l;Vb(Hb, g), Hb[v] = g[v] + m, Vb(Wb, p), Wb[v] = p[v] - m, t.bezierCurveTo(Hb[0], Hb[1], Wb[0], Wb[1], p[0], p[1]);} else t.lineTo(p[0], p[1]);c = d, d += a;}return f;}function Zc(t, e, n, i, r, a, o, s, l, h, u) {for (var c = 0, d = n, f = 0; i > f; f++) {var p = e[d];if (d >= r || 0 > d) break;if (Yc(p)) {if (u) {d += a;continue;}break;}if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), Vb(Hb, p);else if (l > 0) {var g = d + a,v = e[g];if (u) for (; v && Yc(e[g]);) {g += a, v = e[g];}var m = .5,y = e[c],v = e[g];if (!v || Yc(v)) Vb(Wb, p);else {Yc(v) && !u && (v = p), j(Gb, v, y);var x, _;if ("x" === h || "y" === h) {var w = "x" === h ? 0 : 1;x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - v[w]);} else x = kp(p, y), _ = kp(p, v);m = _ / (_ + x), Fb(Wb, p, Gb, -l * (1 - m));}Nb(Hb, Hb, s), Rb(Hb, Hb, o), Nb(Wb, Wb, s), Rb(Wb, Wb, o), t.bezierCurveTo(Hb[0], Hb[1], Wb[0], Wb[1], p[0], p[1]), Fb(Hb, p, Gb, l * m);} else t.lineTo(p[0], p[1]);c = d, d += a;}return f;}function Uc(t, e) {var n = [1 / 0, 1 / 0],i = [-1 / 0, -1 / 0];if (e) for (var r = 0; r < t.length; r++) {var a = t[r];a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);}return { min: e ? n : i, max: e ? i : n };}function Kc(t, e) {if (t.length === e.length) {for (var n = 0; n < t.length; n++) {var i = t[n],r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;}return !0;}}function $c(t) {return "number" == typeof t ? t : t ? .5 : 0;}function Qc(t) {var e = t.getGlobalExtent();if (t.onBand) {var n = t.getBandWidth() / 2 - 1,i = e[1] > e[0] ? 1 : -1;e[0] += i * n, e[1] -= i * n;}return e;}function Jc(t, e, n) {if (!n.valueDim) return [];for (var i = [], r = 0, a = e.count(); a > r; r++) {i.push(Wc(n, t, e, r));}return i;}function td(t, e, n, i) {var r = Qc(t.getAxis("x")),a = Qc(t.getAxis("y")),o = t.getBaseAxis().isHorizontal(),s = Math.min(r[0], r[1]),l = Math.min(a[0], a[1]),h = Math.max(r[0], r[1]) - s,u = Math.max(a[0], a[1]) - l;if (n) s -= .5, h += .5, l -= .5, u += .5;else {var c = i.get("lineStyle.width") || 2,d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);}var f = new qm({ shape: { x: s, y: l, width: h, height: u } });return e && (f.shape[o ? "width" : "height"] = 0, za(f, { shape: { width: h, height: u } }, i)), f;}function ed(t, e, n, i) {var r = t.getAngleAxis(),a = t.getRadiusAxis(),o = a.getExtent().slice();o[0] > o[1] && o.reverse();var s = r.getExtent(),l = Math.PI / 180;n && (o[0] -= .5, o[1] += .5);var h = new Rm({ shape: { cx: $a(t.cx, 1), cy: $a(t.cy, 1), r0: $a(o[0], 1), r: $a(o[1], 1), startAngle: -s[0] * l, endAngle: -s[1] * l, clockwise: r.inverse } });return e && (h.shape.endAngle = -s[0] * l, za(h, { shape: { endAngle: -s[1] * l } }, i)), h;}function nd(t, e, n, i) {return "polar" === t.type ? ed(t, e, n, i) : td(t, e, n, i);}function id(t, e, n) {for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {var s = t[o + 1],l = t[o];a.push(l);var h = [];switch (n) {case "end":h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);break;case "middle":var u = (l[r] + s[r]) / 2,c = [];h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);break;default:h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);}}return t[o] && a.push(t[o]), a;}function rd(t, e) {var n = t.getVisual("visualMeta");if (n && n.length && t.count() && "cartesian2d" === e.type) {for (var i, r, a = n.length - 1; a >= 0; a--) {var o = n[a].dimension,s = t.dimensions[o],l = t.getDimensionInfo(s);if (i = l && l.coordDim, "x" === i || "y" === i) {r = n[a];break;}}if (r) {var h = e.getAxis(i),u = p(r.stops, function (t) {return { coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color };}),c = u.length,d = r.outerColors.slice();c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());var g = 10,v = u[0].coord - g,m = u[c - 1].coord + g,y = m - v;if (.001 > y) return "transparent";f(u, function (t) {t.offset = (t.coord - v) / y;}), u.push({ offset: c ? u[c - 1].offset : .5, color: d[1] || "transparent" }), u.unshift({ offset: c ? u[0].offset : .5, color: d[0] || "transparent" });var x = new ty(0, 0, 0, 0, u, !0);return x[i] = v, x[i + "2"] = m, x;}}}function ad(t, e, n) {var i = t.get("showAllSymbol"),r = "auto" === i;if (!i || r) {var a = n.getAxesByScale("ordinal")[0];if (a && (!r || !od(a, e))) {var o = e.mapDimension(a.dim),s = {};return f(a.getViewLabels(), function (t) {s[t.tickValue] = 1;}), function (t) {return !s.hasOwnProperty(e.get(o, t));};}}}function od(t, e) {var n = t.getExtent(),i = Math.abs(n[1] - n[0]) / t.scale.count();isNaN(i) && (i = 0);for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) {if (1.5 * kc.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;}return !0;}function sd(t, e, n, i) {var r = e.getData(),a = this.dataIndex,o = r.getName(a),s = e.get("selectedOffset");i.dispatchAction({ type: "pieToggleSelect", from: t, name: o, seriesId: e.id }), r.each(function (t) {ld(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);});}function ld(t, e, n, i, r) {var a = (e.startAngle + e.endAngle) / 2,o = Math.cos(a),s = Math.sin(a),l = n ? i : 0,h = [o * l, s * l];r ? t.animate().when(200, { position: h }).start("bounceOut") : t.attr("position", h);}function hd(t, e) {function n() {a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;}function i() {a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;}bg.call(this);var r = new Rm({ z2: 2 }),a = new Wm(),o = new zm();this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i);}function ud(t, e, n, i, r, a, o) {function s(e, n, i) {for (var r = e; n > r; r++) {if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);}l(n - 1, i / 2);}function l(e, n) {for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) {;}}function h(t, e, n, i, r, a) {for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) {var h = Math.abs(t[s].y - i),u = t[s].len,c = t[s].len2,d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
        e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d;}}t.sort(function (t, e) {return t.y - e.y;});for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) {u = t[g].y - c, 0 > u && s(g, d, -u, r), c = t[g].y + t[g].height;}0 > o - c && l(d - 1, c - o);for (var g = 0; d > g; g++) {t[g].y >= n ? p.push(t[g]) : f.push(t[g]);}h(f, !1, e, n, i, r), h(p, !0, e, n, i, r);}function cd(t, e, n, i, r, a) {for (var o = [], s = [], l = 0; l < t.length; l++) {dd(t[l]) || (t[l].x < e ? o.push(t[l]) : s.push(t[l]));}ud(s, e, n, i, 1, r, a), ud(o, e, n, i, -1, r, a);for (var l = 0; l < t.length; l++) {if (!dd(t[l])) {var h = t[l].linePoints;if (h) {var u = h[1][0] - h[2][0];h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u;}}}}function dd(t) {return "center" === t.position;}function fd() {var t = Sp();this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {};}function pd(t, e, n) {var i = t[1] - t[0];e = p(e, function (e) {return { interval: [(e.interval[0] - t[0]) / i, (e.interval[1] - t[0]) / i] };});var r = e.length,a = 0;return function (t) {for (var i = a; r > i; i++) {var o = e[i].interval;if (o[0] <= t && t <= o[1]) {a = i;break;}}if (i === r) for (var i = a - 1; i >= 0; i--) {var o = e[i].interval;if (o[0] <= t && t <= o[1]) {a = i;break;}}return i >= 0 && r > i && n[i];};}function gd(t, e) {var n = t[1] - t[0];return e = [(e[0] - t[0]) / n, (e[1] - t[0]) / n], function (t) {return t >= e[0] && t <= e[1];};}function vd(t) {var e = t.dimensions;return "lng" === e[0] && "lat" === e[1];}function md(t) {var e = t.mainData,n = t.datas;n || (n = { main: e }, t.datasAttr = { main: "data" }), t.datas = t.mainData = null, Sd(e, n, t), hS(n, function (n) {hS(e.TRANSFERABLE_METHODS, function (e) {n.wrapMethod(e, x(yd, t));});}), e.wrapMethod("cloneShallow", x(_d, t)), hS(e.CHANGABLE_METHODS, function (n) {e.wrapMethod(n, x(xd, t));}), O(n[e.dataType] === e);}function yd(t, e) {if (bd(this)) {var n = o({}, this[uS]);n[this.dataType] = e, Sd(e, n, t);} else Md(e, this.dataType, this[cS], t);return e;}function xd(t, e) {return t.struct && t.struct.update(this), e;}function _d(t, e) {return hS(e[uS], function (n, i) {n !== e && Md(n.cloneShallow(), i, e, t);}), e;}function wd(t) {var e = this[cS];return null == t || null == e ? e : e[uS][t];}function bd(t) {return t[cS] === t;}function Sd(t, e, n) {t[uS] = {}, hS(e, function (e, i) {Md(e, i, t, n);});}function Md(t, e, n, i) {n[uS][e] = t, t[cS] = n, t.dataType = e, i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] = t), t.getLinkedData = wd;}function Id(t, e, n) {this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = p(e || [], function (e) {return new Ha(e, t, t.ecModel);}), this.leavesModel = new Ha(n || {}, t, t.ecModel);}function Td(t, e) {var n = e.children;t.parentNode !== e && (n.push(t), t.parentNode = e);}function Cd(t) {t.hierNode = { defaultAncestor: null, ancestor: t, prelim: 0, modifier: 0, change: 0, shift: 0, i: 0, thread: null };for (var e, n, i = [t]; e = i.pop();) {if (n = e.children, e.isExpand && n.length) for (var r = n.length, a = r - 1; a >= 0; a--) {var o = n[a];o.hierNode = { defaultAncestor: null, ancestor: o, prelim: 0, modifier: 0, change: 0, shift: 0, i: a, thread: null }, i.push(o);}}}function Dd(t, e) {var n = t.isExpand ? t.children : [],i = t.parentNode.children,r = t.hierNode.i ? i[t.hierNode.i - 1] : null;if (n.length) {Od(t);var a = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2;r ? (t.hierNode.prelim = r.hierNode.prelim + e(t, r), t.hierNode.modifier = t.hierNode.prelim - a) : t.hierNode.prelim = a;} else r && (t.hierNode.prelim = r.hierNode.prelim + e(t, r));t.parentNode.hierNode.defaultAncestor = zd(t, r, t.parentNode.hierNode.defaultAncestor || i[0], e);}function Ad(t) {var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;t.setLayout({ x: e }, !0), t.hierNode.modifier += t.parentNode.hierNode.modifier;}function kd(t) {return arguments.length ? t : Fd;}function Pd(t, e) {var n = {};return t -= Math.PI / 2, n.x = e * Math.cos(t), n.y = e * Math.sin(t), n;}function Ld(t, e) {return Io(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });}function Od(t) {for (var e = t.children, n = e.length, i = 0, r = 0; --n >= 0;) {var a = e[n];a.hierNode.prelim += i, a.hierNode.modifier += i, r += a.hierNode.change, i += a.hierNode.shift + r;}}function zd(t, e, n, i) {if (e) {for (var r = t, a = t, o = a.parentNode.children[0], s = e, l = r.hierNode.modifier, h = a.hierNode.modifier, u = o.hierNode.modifier, c = s.hierNode.modifier; s = Bd(s), a = Ed(a), s && a;) {r = Bd(r), o = Ed(o), r.hierNode.ancestor = t;var d = s.hierNode.prelim + c - a.hierNode.prelim - h + i(s, a);d > 0 && (Rd(Nd(s, t, n), t, d), h += d, l += d), c += s.hierNode.modifier, h += a.hierNode.modifier, l += r.hierNode.modifier, u += o.hierNode.modifier;}s && !Bd(r) && (r.hierNode.thread = s, r.hierNode.modifier += c - l), a && !Ed(o) && (o.hierNode.thread = a, o.hierNode.modifier += h - u, n = t);}return n;}function Bd(t) {var e = t.children;return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread;}function Ed(t) {var e = t.children;return e.length && t.isExpand ? e[0] : t.hierNode.thread;}function Nd(t, e, n) {return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor : n;}function Rd(t, e, n) {var i = n / (e.hierNode.i - t.hierNode.i);e.hierNode.change -= i, e.hierNode.shift += n, e.hierNode.modifier += n, e.hierNode.prelim += n, t.hierNode.change += i;}function Fd(t, e) {return t.parentNode === e.parentNode ? 1 : 2;}function Vd() {jp.call(this);}function Gd(t) {this.name = t, this.zoomLimit, jp.call(this), this._roamTransformable = new Vd(), this._rawTransformable = new Vd(), this._center, this._zoom;}function Hd(t, e, n, i) {var r = n.seriesModel,a = r ? r.coordinateSystem : null;return a === this ? a[t](i) : null;}function Wd(t, e, n) {var i = t.target,r = i.position;r[0] += e, r[1] += n, i.dirty();}function Xd(t, e, n, i) {var r = t.target,a = t.zoomLimit,o = r.position,s = r.scale,l = t.zoom = t.zoom || 1;if (l *= e, a) {var h = a.min || 0,u = a.max || 1 / 0;l = Math.max(Math.min(u, l), h);}var c = l / t.zoom;t.zoom = l, o[0] -= (n - o[0]) * (c - 1), o[1] -= (i - o[1]) * (c - 1), s[0] *= c, s[1] *= c, r.dirty();}function Yd(t, e) {return !!qd(t)[e];}function qd(t) {return t[pS] || (t[pS] = {});}function jd(t) {this.pointerChecker, this._zr = t, this._opt = {};var e = y,n = e(Zd, this),r = e(Ud, this),a = e(Kd, this),o = e($d, this),l = e(Qd, this);zp.call(this), this.setPointerChecker = function (t) {this.pointerChecker = t;}, this.enable = function (e, h) {this.disable(), this._opt = s(i(h) || {}, { zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !1, preventDefaultMouseMove: !0 }), null == e && (e = !0), (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", n), t.on("mousemove", r), t.on("mouseup", a)), (e === !0 || "scale" === e || "zoom" === e) && (t.on("mousewheel", o), t.on("pinch", l));}, this.disable = function () {t.off("mousedown", n), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", o), t.off("pinch", l);}, this.dispose = this.disable, this.isDragging = function () {return this._dragging;}, this.isPinching = function () {return this._pinching;};}function Zd(t) {if (!(ye(t) || t.target && t.target.draggable)) {var e = t.offsetX,n = t.offsetY;this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0);}}function Ud(t) {if (this._dragging && ef("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !Yd(this._zr, "globalPan")) {var e = t.offsetX,n = t.offsetY,i = this._x,r = this._y,a = e - i,o = n - r;this._x = e, this._y = n, this._opt.preventDefaultMouseMove && Np(t.event), tf(this, "pan", "moveOnMouseMove", t, { dx: a, dy: o, oldX: i, oldY: r, newX: e, newY: n });}}function Kd(t) {ye(t) || (this._dragging = !1);}function $d(t) {var e = ef("zoomOnMouseWheel", t, this._opt),n = ef("moveOnMouseWheel", t, this._opt),i = t.wheelDelta,r = Math.abs(i),a = t.offsetX,o = t.offsetY;if (0 !== i && (e || n)) {if (e) {var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1,l = i > 0 ? s : 1 / s;Jd(this, "zoom", "zoomOnMouseWheel", t, { scale: l, originX: a, originY: o });}if (n) {var h = Math.abs(i),u = (i > 0 ? 1 : -1) * (h > 3 ? .4 : h > 1 ? .15 : .05);Jd(this, "scrollMove", "moveOnMouseWheel", t, { scrollDelta: u, originX: a, originY: o });}}}function Qd(t) {if (!Yd(this._zr, "globalPan")) {var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;Jd(this, "zoom", null, t, { scale: e, originX: t.pinchX, originY: t.pinchY });}}function Jd(t, e, n, i, r) {t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && (Np(i.event), tf(t, e, n, i, r));}function tf(t, e, n, i, r) {r.isAvailableBehavior = y(ef, null, n, i), t.trigger(e, r);}function ef(t, e, n) {var i = n[t];return !t || i && (!b(i) || e.event[i + "Key"]);}function nf(t, e, n) {var i = e.getComponentByElement(t.topTarget),r = i && i.coordinateSystem;return i && i !== n && !gS[i.mainType] && r && r.model !== n;}function rf(t, e) {var n = t.getItemLayout(e);return n && !isNaN(n.x) && !isNaN(n.y) && "none" !== t.getItemVisual(e, "symbol");}function af(t, e, n) {return n.itemModel = e, n.itemStyle = e.getModel("itemStyle").getItemStyle(), n.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(), n.lineStyle = e.getModel("lineStyle").getLineStyle(), n.labelModel = e.getModel("label"), n.hoverLabelModel = e.getModel("emphasis.label"), n.symbolInnerColor = t.isExpand === !1 && 0 !== t.children.length ? n.itemStyle.fill : "#fff", n;}function of(t, e, n, i, r, a) {var o = !n,l = t.tree.getNodeByDataIndex(e),h = l.getModel(),a = af(l, h, a),u = t.tree.root,c = l.parentNode === u ? l : l.parentNode || l,d = t.getItemGraphicEl(c.dataIndex),f = c.getLayout(),p = d ? { x: d.position[0], y: d.position[1], rawX: d.__radialOldRawX, rawY: d.__radialOldRawY } : f,g = l.getLayout();o ? (n = new kc(t, e, a), n.attr("position", [p.x, p.y])) : n.updateData(t, e, a), n.__radialOldRawX = n.__radialRawX, n.__radialOldRawY = n.__radialRawY, n.__radialRawX = g.rawX, n.__radialRawY = g.rawY, i.add(n), t.setItemGraphicEl(e, n), Oa(n, { position: [g.x, g.y] }, r);var v = n.getSymbolPath();if ("radial" === a.layout) {var m,y,x = u.children[0],_ = x.getLayout(),w = x.children.length;if (g.x === _.x && l.isExpand === !0) {var b = {};b.x = (x.children[0].getLayout().x + x.children[w - 1].getLayout().x) / 2, b.y = (x.children[0].getLayout().y + x.children[w - 1].getLayout().y) / 2, m = Math.atan2(b.y - _.y, b.x - _.x), 0 > m && (m = 2 * Math.PI + m), y = b.x < _.x, y && (m -= Math.PI);} else m = Math.atan2(g.y - _.y, g.x - _.x), 0 > m && (m = 2 * Math.PI + m), 0 === l.children.length || 0 !== l.children.length && l.isExpand === !1 ? (y = g.x < _.x, y && (m -= Math.PI)) : (y = g.x > _.x, y || (m -= Math.PI));var S = y ? "left" : "right";v.setStyle({ textPosition: S, textRotation: -m, textOrigin: "center", verticalAlign: "middle" });}if (l.parentNode && l.parentNode !== u) {var M = n.__edge;M || (M = n.__edge = new Km({ shape: lf(a, p, p), style: s({ opacity: 0, strokeNoScale: !0 }, a.lineStyle) })), Oa(M, { shape: lf(a, f, g), style: { opacity: 1 } }, r), i.add(M);}}function sf(t, e, n, i, r, a) {for (var o, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, h = s.getModel(), a = af(s, h, a), u = s.parentNode === l ? s : s.parentNode || s; o = u.getLayout(), null == o;) {u = u.parentNode === l ? u : u.parentNode || u;}Oa(n, { position: [o.x + 1, o.y + 1] }, r, function () {i.remove(n), t.setItemGraphicEl(e, null);}), n.fadeOut(null, { keepLabel: !0 });var c = n.__edge;c && Oa(c, { shape: lf(a, o, o), style: { opacity: 0 } }, r, function () {i.remove(c);});}function lf(t, e, n) {var i,r,a,o,s,l,h,u,c = t.orient;if ("radial" === t.layout) {s = e.rawX, h = e.rawY, l = n.rawX, u = n.rawY;var d = Pd(s, h),f = Pd(s, h + (u - h) * t.curvature),p = Pd(l, u + (h - u) * t.curvature),g = Pd(l, u);return { x1: d.x, y1: d.y, x2: g.x, y2: g.y, cpx1: f.x, cpy1: f.y, cpx2: p.x, cpy2: p.y };}return s = e.x, h = e.y, l = n.x, u = n.y, ("LR" === c || "RL" === c) && (i = s + (l - s) * t.curvature, r = h, a = l + (s - l) * t.curvature, o = u), ("TB" === c || "BT" === c) && (i = s, r = h + (u - h) * t.curvature, a = l, o = u + (h - u) * t.curvature), { x1: s, y1: h, x2: l, y2: u, cpx1: i, cpy1: r, cpx2: a, cpy2: o };}function hf(t, e, n) {var i = t.getZoom(),r = t.getCenter(),a = e.zoom,o = t.dataToPoint(r);if (null != e.dx && null != e.dy) {o[0] -= e.dx, o[1] -= e.dy;var r = t.pointToData(o);t.setCenter(r);}if (null != a) {if (n) {var s = n.min || 0,l = n.max || 1 / 0;a = Math.max(Math.min(i * a, l), s) / i;}t.scale[0] *= a, t.scale[1] *= a;var h = t.position,u = (e.originX - h[0]) * (a - 1),c = (e.originY - h[1]) * (a - 1);h[0] -= u, h[1] -= c, t.updateTransform();var r = t.pointToData(o);t.setCenter(r), t.setZoom(a * i);}return { center: t.getCenter(), zoom: t.getZoom() };}function uf(t, e, n) {for (var i, r = [t], a = []; i = r.pop();) {if (a.push(i), i.isExpand) {var o = i.children;if (o.length) for (var s = 0; s < o.length; s++) {r.push(o[s]);}}}for (; i = a.pop();) {e(i, n);}}function cf(t, e) {for (var n, i = [t]; n = i.pop();) {if (e(n), n.isExpand) {var r = n.children;if (r.length) for (var a = r.length - 1; a >= 0; a--) {i.push(r[a]);}}}}function df(t, e) {var n = Ld(t, e);t.layoutInfo = n;var i = t.get("layout"),r = 0,a = 0,o = null;"radial" === i ? (r = 2 * Math.PI, a = Math.min(n.height, n.width) / 2, o = kd(function (t, e) {return (t.parentNode === e.parentNode ? 1 : 2) / t.depth;})) : (r = n.width, a = n.height, o = kd());var s = t.getData().tree.root,l = s.children[0];if (l) {Cd(s), uf(l, Dd, o), s.hierNode.modifier = -l.hierNode.prelim, cf(l, Ad);var h = l,u = l,c = l;cf(l, function (t) {var e = t.getLayout().x;e < h.getLayout().x && (h = t), e > u.getLayout().x && (u = t), t.depth > c.depth && (c = t);});var d = h === u ? 1 : o(h, u) / 2,f = d - h.getLayout().x,p = 0,g = 0,v = 0,m = 0;if ("radial" === i) p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), cf(l, function (t) {v = (t.getLayout().x + f) * p, m = (t.depth - 1) * g;var e = Pd(v, m);t.setLayout({ x: e.x, y: e.y, rawX: v, rawY: m }, !0);});else {var y = t.getOrient();"RL" === y || "LR" === y ? (g = a / (u.getLayout().x + d + f), p = r / (c.depth - 1 || 1), cf(l, function (t) {m = (t.getLayout().x + f) * g, v = "LR" === y ? (t.depth - 1) * p : r - (t.depth - 1) * p, t.setLayout({ x: v, y: m }, !0);})) : ("TB" === y || "BT" === y) && (p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), cf(l, function (t) {v = (t.getLayout().x + f) * p, m = "TB" === y ? (t.depth - 1) * g : a - (t.depth - 1) * g, t.setLayout({ x: v, y: m }, !0);}));}}}function ff(t, e, n) {var i,r = {},a = "toggleSelected" === t;return n.eachComponent("legend", function (n) {a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));var o = n.getData();f(o, function (t) {var e = t.get("name");if ("\n" !== e && "" !== e) {var i = n.isSelected(e);r[e] = r.hasOwnProperty(e) ? r[e] && i : i;}});}), { name: e.name, selected: r };}function pf(t, e) {var n = Sy(e.get("padding")),i = e.getItemStyle(["color", "opacity"]);i.fill = e.get("backgroundColor");var t = new qm({ shape: { x: t.x - n[3], y: t.y - n[0], width: t.width + n[1] + n[3], height: t.height + n[0] + n[2], r: e.get("borderRadius") }, style: i, silent: !0, z2: -1 });return t;}function gf(t, e) {e.dispatchAction({ type: "legendToggleSelect", name: t });}function vf(t, e, n, i) {var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "highlight", seriesName: t, name: e, excludeSeriesId: i });}function mf(t, e, n, i) {var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "downplay", seriesName: t, name: e, excludeSeriesId: i });}function yf(t, e, n) {var i = t.getOrient(),r = [1, 1];r[i.index] = 0, To(e, n, { type: "box", ignoreSize: r });}function xf(t, e, n, i, r) {var a = t.axis;if (!a.scale.isBlank() && a.containData(e)) {if (!t.involveSeries) return void n.showPointer(t, e);var s = _f(e, t),l = s.payloadBatch,h = s.snapToValue;l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), n.showPointer(t, e, l, r), n.showTooltip(t, s, h);}}function _f(t, e) {var n = e.axis,i = n.dim,r = t,a = [],o = Number.MAX_VALUE,s = -1;return AS(e.seriesModels, function (e) {var l,h,u = e.getData().mapDimension(i, !0);if (e.getAxisTooltipData) {var c = e.getAxisTooltipData(u, t, n);h = c.dataIndices, l = c.nestestValue;} else {if (h = e.getData().indicesOfNearest(u[0], t, "category" === n.type ? .5 : null), !h.length) return;l = e.getData().get(u[0], h[0]);}if (null != l && isFinite(l)) {var d = t - l,f = Math.abs(d);o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), AS(h, function (t) {a.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });}));}}), { payloadBatch: a, snapToValue: r };}function wf(t, e, n, i) {t[e.key] = { value: n, payloadBatch: i };}function bf(t, e, n, i) {var r = n.payloadBatch,a = e.axis,o = a.model,s = e.axisPointerModel;if (e.triggerTooltip && r.length) {var l = e.coordSys.model,h = Tc(l),u = t.map[h];u || (u = t.map[h] = { coordSysId: l.id, coordSysIndex: l.componentIndex, coordSysType: l.type, coordSysMainType: l.mainType, dataByAxis: [] }, t.list.push(u)), u.dataByAxis.push({ axisDim: a.dim, axisIndex: o.componentIndex, axisType: o.type, axisId: o.id, value: i, valueLabelOpt: { precision: s.get("label.precision"), formatter: s.get("label.formatter") }, seriesDataIndices: r.slice() });}}function Sf(t, e, n) {var i = n.axesInfo = [];AS(e, function (e, n) {var r = e.axisPointerModel.option,a = t[n];a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });});}function Mf(t, e, n, i) {if (Df(e) || !t.list.length) return void i({ type: "hideTip" });var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};i({ type: "showTip", escapeConnect: !0, x: e[0], y: e[1], tooltipOption: n.tooltipOption, position: n.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list });}function If(t, e, n) {var i = n.getZr(),r = "axisPointerLastHighlights",a = PS(i)[r] || {},o = PS(i)[r] = {};AS(t, function (t) {var e = t.axisPointerModel.option;"show" === e.status && AS(e.seriesDataIndices, function (t) {var e = t.seriesIndex + " | " + t.dataIndex;o[e] = t;});});var s = [],l = [];f(a, function (t, e) {!o[e] && l.push(t);}), f(o, function (t, e) {!a[e] && s.push(t);}), l.length && n.dispatchAction({ type: "downplay", escapeConnect: !0, batch: l }), s.length && n.dispatchAction({ type: "highlight", escapeConnect: !0, batch: s });}function Tf(t, e) {for (var n = 0; n < (t || []).length; n++) {var i = t[n];if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;}}function Cf(t) {var e = t.axis.model,n = {},i = n.axisDim = t.axis.dim;return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n;}function Df(t) {return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);}function Af(t, e, n) {if (!dp.node) {var i = e.getZr();OS(i).records || (OS(i).records = {}), kf(i, e);var r = OS(i).records[t] || (OS(i).records[t] = {});r.handler = n;}}function kf(t, e) {function n(n, i) {t.on(n, function (n) {var r = zf(e);zS(OS(t).records, function (t) {t && i(t, n, r.dispatchAction);}), Pf(r.pendings, e);});}OS(t).initialized || (OS(t).initialized = !0, n("click", x(Of, "click")), n("mousemove", x(Of, "mousemove")), n("globalout", Lf));}function Pf(t, e) {var n,i = t.showTip.length,r = t.hideTip.length;i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n));}function Lf(t, e, n) {t.handler("leave", null, n);}function Of(t, e, n, i) {e.handler(t, n, i);}function zf(t) {var e = { showTip: [], hideTip: [] },n = function n(i) {var r = e[i.type];r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));};return { dispatchAction: n, pendings: e };}function Bf(t, e) {if (!dp.node) {var n = e.getZr(),i = (OS(n).records || {})[t];i && (OS(n).records[t] = null);}}function Ef() {}function Nf(t, e, n, i) {Rf(ES(n).lastProp, i) || (ES(n).lastProp = i, e ? Oa(n, i, t) : (n.stopAnimation(), n.attr(i)));}function Rf(t, e) {if (S(t) && S(e)) {var n = !0;return f(e, function (e, i) {n = n && Rf(t[i], e);}), !!n;}return t === e;}function Ff(t, e) {t[e.get("label.show") ? "show" : "hide"]();}function Vf(t) {return { position: t.position.slice(), rotation: t.rotation || 0 };}function Gf(t, e, n) {var i = e.get("z"),r = e.get("zlevel");t && t.traverse(function (t) {"group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);});}function Hf(t) {var e,n = t.get("type"),i = t.getModel(n + "Style");return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e;}function Wf(t, e, n, i, r) {var a = n.get("value"),o = Yf(a, e.axis, e.ecModel, n.get("seriesDataIndices"), { precision: n.get("label.precision"), formatter: n.get("label.formatter") }),s = n.getModel("label"),l = Sy(s.get("padding") || 0),h = s.getFont(),u = Rn(o, h),c = r.position,d = u.width + l[1] + l[3],f = u.height + l[0] + l[2],p = r.align;"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);var g = r.verticalAlign;"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Xf(c, d, f, i);var v = s.get("backgroundColor");v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = { shape: { x: 0, y: 0, width: d, height: f, r: s.get("borderRadius") }, position: c.slice(), style: { text: o, textFont: h, textFill: s.getTextColor(), textPosition: "inside", fill: v, stroke: s.get("borderColor") || "transparent", lineWidth: s.get("borderWidth") || 0, shadowBlur: s.get("shadowBlur"), shadowColor: s.get("shadowColor"), shadowOffsetX: s.get("shadowOffsetX"), shadowOffsetY: s.get("shadowOffsetY") }, z2: 10 };}function Xf(t, e, n, i) {var r = i.getWidth(),a = i.getHeight();t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);}function Yf(t, e, n, i, r) {t = e.scale.parse(t);var a = e.scale.getLabel(t, { precision: r.precision }),o = r.formatter;if (o) {var s = { value: cu(e, t), seriesData: [] };f(i, function (t) {var e = n.getSeriesByIndex(t.seriesIndex),i = t.dataIndexInside,r = e && e.getDataParams(i);r && s.seriesData.push(r);}), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s));}return a;}function qf(t, e, n) {var i = Ie();return ke(i, i, n.rotation), Ae(i, i, n.position), Ea([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);}function jf(t, e, n, i, r, a) {var o = xb.innerTextLayout(n.rotation, 0, n.labelDirection);n.labelMargin = r.get("label.margin"), Wf(e, i, r, a, { position: qf(i.axis, t, n), align: o.textAlign, verticalAlign: o.textVerticalAlign });}function Zf(t, e, n) {return n = n || 0, { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };}function Uf(t, e, n) {return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };}function Kf(t, e) {var n = {};return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);}function $f(t) {return "x" === t.dim ? 0 : 1;}function Qf(t) {var e = "cubic-bezier(0.23, 1, 0.32, 1)",n = "left " + t + "s " + e + ",top " + t + "s " + e;return p(WS, function (t) {return t + "transition:" + n;}).join(";");}function Jf(t) {var e = [],n = t.get("fontSize"),i = t.getTextColor();return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), GS(["decoration", "align"], function (n) {var i = t.get(n);i && e.push("text-" + n + ":" + i);}), e.join(";");}function tp(t) {var e = [],n = t.get("transitionDuration"),i = t.get("backgroundColor"),r = t.getModel("textStyle"),a = t.get("padding");return n && e.push(Qf(n)), i && (dp.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Ke(i)), e.push("filter:alpha(opacity=70)"))), GS(["width", "color", "radius"], function (n) {var i = "border-" + n,r = HS(i),a = t.get(r);null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));}), e.push(Jf(r)), null != a && e.push("padding:" + Sy(a).join("px ") + "px"), e.join(";") + ";";}function ep(t, e) {if (dp.wxa) return null;var n = document.createElement("div"),i = this._zr = e.getZr();this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;var r = this;n.onmouseenter = function () {r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;}, n.onmousemove = function (e) {if (e = e || window.event, !r._enterable) {var n = i.handler;ge(t, e, !0), n.dispatch("mousemove", e);}}, n.onmouseleave = function () {r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;};}function np(t) {this._zr = t.getZr(), this._show = !1, this._hideTimeout;}function ip(t) {for (var e = t.pop(); t.length;) {var n = t.pop();n && (Ha.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = { formatter: n }), e = new Ha(n, e, e.ecModel));}return e;}function rp(t, e) {return t.dispatchAction || y(e.dispatchAction, e);}function ap(t, e, n, i, r, a, o) {var s = n.getOuterSize(),l = s.width,h = s.height;return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e];}function op(t, e, n, i, r) {var a = n.getOuterSize(),o = a.width,s = a.height;return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];}function sp(t, e, n) {var i = n[0],r = n[1],a = 5,o = 0,s = 0,l = e.width,h = e.height;switch (t) {case "inside":o = e.x + l / 2 - i / 2, s = e.y + h / 2 - r / 2;break;case "top":o = e.x + l / 2 - i / 2, s = e.y - r - a;break;case "bottom":o = e.x + l / 2 - i / 2, s = e.y + h + a;break;case "left":o = e.x - i - a, s = e.y + h / 2 - r / 2;break;case "right":o = e.x + l + a, s = e.y + h / 2 - r / 2;}return [o, s];}function lp(t) {return "center" === t || "middle" === t;}var hp = 2311,up = function up() {return hp++;},cp = {};cp = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1 } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 } : e(navigator.userAgent);var dp = cp,fp = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },pp = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },gp = Object.prototype.toString,vp = Array.prototype,mp = vp.forEach,yp = vp.filter,xp = vp.slice,_p = vp.map,wp = vp.reduce,bp = {},Sp = function Sp() {return bp.createCanvas();};bp.createCanvas = function () {return document.createElement("canvas");};var Mp,Ip = "__ec_primitive__";N.prototype = { constructor: N, get: function get(t) {return this.data.hasOwnProperty(t) ? this.data[t] : null;}, set: function set(t, e) {return this.data[t] = e;}, each: function each(t, e) {void 0 !== e && (t = y(t, e));for (var n in this.data) {this.data.hasOwnProperty(n) && t(this.data[n], n);}}, removeKey: function removeKey(t) {delete this.data[t];} };var Tp = (Object.freeze || Object)({ $override: n, clone: i, merge: r, mergeAll: a, extend: o, defaults: s, createCanvas: Sp, getContext: l, indexOf: h, inherits: u, mixin: c, isArrayLike: d, each: f, map: p, reduce: g, filter: v, find: m, bind: y, curry: x, isArray: _, isFunction: w, isString: b, isObject: S, isBuiltInObject: M, isTypedArray: I, isDom: T, eqNaN: C, retrieve: D, retrieve2: A, retrieve3: k, slice: P, normalizeCssArray: L, assert: O, trim: z, setAsPrimitive: B, isPrimitive: E, createHashMap: R, concatArray: F, noop: V }),Cp = "undefined" == typeof Float32Array ? Array : Float32Array,Dp = Z,Ap = U,kp = ee,Pp = ne,Lp = (Object.freeze || Object)({ create: G, copy: H, clone: W, set: X, add: Y, scaleAndAdd: q, sub: j, len: Z, length: Dp, lenSquare: U, lengthSquare: Ap, mul: K, div: $, dot: Q, scale: J, normalize: te, distance: ee, dist: kp, distanceSquare: ne, distSquare: Pp, negate: ie, lerp: re, applyTransform: ae, min: oe, max: se });le.prototype = { constructor: le, _dragStart: function _dragStart(t) {var e = t.target;e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(he(e, t), "dragstart", t.event));}, _drag: function _drag(t) {var e = this._draggingTarget;if (e) {var n = t.offsetX,i = t.offsetY,r = n - this._x,a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(he(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(he(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(he(o, t), "dragenter", t.event));}}, _dragEnd: function _dragEnd(t) {var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(he(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(he(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;} };var Op = Array.prototype.slice,zp = function zp(t) {this._$handlers = {}, this._$eventProcessor = t;};zp.prototype = { constructor: zp, one: function one(t, e, n, i) {return ce(this, t, e, n, i, !0);}, on: function on(t, e, n, i) {return ce(this, t, e, n, i, !1);}, isSilent: function isSilent(t) {var e = this._$handlers;return !e[t] || !e[t].length;}, off: function off(t, e) {var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {if (n[t]) {for (var i = [], r = 0, a = n[t].length; a > r; r++) {n[t][r].h !== e && i.push(n[t][r]);}n[t] = i;}n[t] && 0 === n[t].length && delete n[t];} else delete n[t];return this;}, trigger: function trigger(t) {var e = this._$handlers[t],n = this._$eventProcessor;if (e) {var i = arguments,r = i.length;r > 3 && (i = Op.call(i, 1));for (var a = e.length, o = 0; a > o;) {var s = e[o];if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;else {switch (r) {case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx, i[1]);break;case 3:s.h.call(s.ctx, i[1], i[2]);break;default:s.h.apply(s.ctx, i);}s.one ? (e.splice(o, 1), a--) : o++;}}}return n && n.afterTrigger && n.afterTrigger(t), this;}, triggerWithContext: function triggerWithContext(t) {var e = this._$handlers[t],n = this._$eventProcessor;if (e) {var i = arguments,r = i.length;r > 4 && (i = Op.call(i, 1, i.length - 1));for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {switch (r) {case 1:l.h.call(a);break;case 2:l.h.call(a, i[1]);break;case 3:l.h.call(a, i[1], i[2]);break;default:l.h.apply(a, i);}l.one ? (e.splice(s, 1), o--) : s++;}}}return n && n.afterTrigger && n.afterTrigger(t), this;} };var Bp = "undefined" != typeof window && !!window.addEventListener,Ep = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,Np = Bp ? function (t) {t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;} : function (t) {t.returnValue = !1, t.cancelBubble = !0;},Rp = function Rp() {this._track = [];};Rp.prototype = { constructor: Rp, recognize: function recognize(t, e, n) {return this._doTrack(t, e, n), this._recognize(t);}, clear: function clear() {return this._track.length = 0, this;}, _doTrack: function _doTrack(t, e, n) {var i = t.touches;if (i) {for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; o > a; a++) {var s = i[a],l = fe(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);}this._track.push(r);}}, _recognize: function _recognize(t) {for (var e in Fp) {if (Fp.hasOwnProperty(e)) {var n = Fp[e](this._track, t);if (n) return n;}}} };var Fp = { pinch: function pinch(t, e) {var n = t.length;if (n) {var i = (t[n - 1] || {}).points,r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {var a = xe(i) / xe(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = _e(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };}}} },Vp = "silent";Se.prototype.dispose = function () {};var Gp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],Hp = function Hp(t, e, n, i) {zp.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new Se(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, le.call(this), this.setHandlerProxy(n);};Hp.prototype = { constructor: Hp, setHandlerProxy: function setHandlerProxy(t) {this.proxy && this.proxy.dispose(), t && (f(Gp, function (e) {t.on && t.on(e, this[e], this);}, this), t.handler = this), this.proxy = t;}, mousemove: function mousemove(t) {var e = t.zrX,n = t.zrY,i = this._hovered,r = i.target;r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);var a = this._hovered = this.findHover(e, n),o = a.target,s = this.proxy;s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);}, mouseout: function mouseout(t) {this.dispatchToElement(this._hovered, "mouseout", t);var e,n = t.toElement || t.relatedTarget;do {n = n && n.parentNode;} while (n && 9 !== n.nodeType && !(e = n === this.painterRoot));!e && this.trigger("globalout", { event: t });}, resize: function resize() {this._hovered = {};}, dispatch: function dispatch(t, e) {var n = this[t];n && n.call(this, e);}, dispose: function dispose() {this.proxy.dispose(), this.storage = this.proxy = this.painter = null;}, setCursorStyle: function setCursorStyle(t) {var e = this.proxy;e.setCursor && e.setCursor(t);}, dispatchToElement: function dispatchToElement(t, e, n) {t = t || {};var i = t.target;if (!i || !i.silent) {for (var r = "on" + e, a = we(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) {;}a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {"function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);}));}}, findHover: function findHover(t, e, n) {for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {var o;if (i[a] !== n && !i[a].ignore && (o = Me(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== Vp)) {r.target = i[a];break;}}return r;}, processGesture: function processGesture(t, e) {this._gestureMgr || (this._gestureMgr = new Rp());var n = this._gestureMgr;"start" === e && n.clear();var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);if ("end" === e && n.clear(), i) {var r = i.type;t.gestureEvent = r, this.dispatchToElement({ target: i.target }, r, i.event);}} }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {Hp.prototype[t] = function (e) {var n = this.findHover(e.zrX, e.zrY),i = n.target;if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {if (this._downEl !== this._upEl || !this._downPoint || kp(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;}this.dispatchToElement(n, t, e);};}), c(Hp, zp), c(Hp, le);var Wp = "undefined" == typeof Float32Array ? Array : Float32Array,Xp = (Object.freeze || Object)({ create: Ie, identity: Te, copy: Ce, mul: De, translate: Ae, rotate: ke, scale: Pe, invert: Le, clone: Oe }),Yp = Te,qp = 5e-5,jp = function jp(t) {t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;},Zp = jp.prototype;Zp.transform = null, Zp.needLocalTransform = function () {return ze(this.rotation) || ze(this.position[0]) || ze(this.position[1]) || ze(this.scale[0] - 1) || ze(this.scale[1] - 1);};var Up = [];Zp.updateTransform = function () {var t = this.parent,e = t && t.transform,n = this.needLocalTransform(),i = this.transform;if (!n && !e) return void (i && Yp(i));i = i || Ie(), n ? this.getLocalTransform(i) : Yp(i), e && (n ? De(i, t.transform, i) : Ce(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {this.getGlobalScale(Up);var a = Up[0] < 0 ? -1 : 1,o = Up[1] < 0 ? -1 : 1,s = ((Up[0] - a) * r + a) / Up[0] || 0,l = ((Up[1] - o) * r + o) / Up[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;}this.invTransform = this.invTransform || Ie(), Le(this.invTransform, i);}, Zp.getLocalTransform = function (t) {return jp.getLocalTransform(this, t);}, Zp.setTransform = function (t) {var e = this.transform,n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, Zp.restoreTransform = function (t) {var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);};var Kp = [],$p = Ie();Zp.setLocalTransform = function (t) {if (t) {var e = t[0] * t[0] + t[1] * t[1],n = t[2] * t[2] + t[3] * t[3],i = this.position,r = this.scale;ze(e - 1) && (e = Math.sqrt(e)), ze(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);}}, Zp.decomposeTransform = function () {if (this.transform) {var t = this.parent,e = this.transform;t && t.transform && (De(Kp, t.invTransform, e), e = Kp);var n = this.origin;n && (n[0] || n[1]) && ($p[4] = n[0], $p[5] = n[1], De(Kp, e, $p), Kp[4] -= n[0], Kp[5] -= n[1], e = Kp), this.setLocalTransform(e);}}, Zp.getGlobalScale = function (t) {var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);}, Zp.transformCoordToLocal = function (t, e) {var n = [t, e],i = this.invTransform;return i && ae(n, n, i), n;}, Zp.transformCoordToGlobal = function (t, e) {var n = [t, e],i = this.transform;return i && ae(n, n, i), n;}, jp.getLocalTransform = function (t, e) {e = e || [], Yp(e);var n = t.origin,i = t.scale || [1, 1],r = t.rotation || 0,a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), Pe(e, e, i), r && ke(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;};var Qp = { linear: function linear(t) {return t;}, quadraticIn: function quadraticIn(t) {return t * t;}, quadraticOut: function quadraticOut(t) {return t * (2 - t);}, quadraticInOut: function quadraticInOut(t) {return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);}, cubicIn: function cubicIn(t) {return t * t * t;}, cubicOut: function cubicOut(t) {return --t * t * t + 1;}, cubicInOut: function cubicInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);}, quarticIn: function quarticIn(t) {return t * t * t * t;}, quarticOut: function quarticOut(t) {return 1 - --t * t * t * t;}, quarticInOut: function quarticInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);}, quinticIn: function quinticIn(t) {return t * t * t * t * t;}, quinticOut: function quinticOut(t) {return --t * t * t * t * t + 1;}, quinticInOut: function quinticInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);}, sinusoidalIn: function sinusoidalIn(t) {return 1 - Math.cos(t * Math.PI / 2);}, sinusoidalOut: function sinusoidalOut(t) {return Math.sin(t * Math.PI / 2);}, sinusoidalInOut: function sinusoidalInOut(t) {return .5 * (1 - Math.cos(Math.PI * t));}, exponentialIn: function exponentialIn(t) {return 0 === t ? 0 : Math.pow(1024, t - 1);}, exponentialOut: function exponentialOut(t) {return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);}, exponentialInOut: function exponentialInOut(t) {return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);}, circularIn: function circularIn(t) {return 1 - Math.sqrt(1 - t * t);}, circularOut: function circularOut(t) {return Math.sqrt(1 - --t * t);}, circularInOut: function circularInOut(t) {return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);}, elasticIn: function elasticIn(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));}, elasticOut: function elasticOut(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);}, elasticInOut: function elasticInOut(t) {var e,n = .1,i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);}, backIn: function backIn(t) {var e = 1.70158;return t * t * ((e + 1) * t - e);}, backOut: function backOut(t) {var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;}, backInOut: function backInOut(t) {var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);}, bounceIn: function bounceIn(t) {return 1 - Qp.bounceOut(1 - t);}, bounceOut: function bounceOut(t) {return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;}, bounceInOut: function bounceInOut(t) {return .5 > t ? .5 * Qp.bounceIn(2 * t) : .5 * Qp.bounceOut(2 * t - 1) + .5;} };Be.prototype = { constructor: Be, step: function step(t, e) {if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);var n = (t - this._startTime - this._pausedTime) / this._life;if (!(0 > n)) {n = Math.min(n, 1);var i = this.easing,r = "string" == typeof i ? Qp[i] : i,a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;}}, restart: function restart(t) {var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;}, fire: function fire(t, e) {t = "on" + t, this[t] && this[t](this._target, e);}, pause: function pause() {this._paused = !0;}, resume: function resume() {this._paused = !1;} };var Jp = function Jp() {this.head = null, this.tail = null, this._len = 0;},tg = Jp.prototype;tg.insert = function (t) {var e = new eg(t);return this.insertEntry(e), e;}, tg.insertEntry = function (t) {this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;}, tg.remove = function (t) {var e = t.prev,n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;}, tg.len = function () {return this._len;}, tg.clear = function () {this.head = this.tail = null, this._len = 0;};var eg = function eg(t) {this.value = t, this.next, this.prev;},ng = function ng(t) {this._list = new Jp(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;},ig = ng.prototype;ig.put = function (t, e) {var n = this._list,i = this._map,r = null;if (null == i[t]) {var a = n.len(),o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;}o ? o.value = e : o = new eg(e), o.key = t, n.insertEntry(o), i[t] = o;}return r;}, ig.get = function (t) {var e = this._map[t],n = this._list;return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;}, ig.clear = function () {this._list.clear(), this._map = {};};var rg = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },ag = new ng(20),og = null,sg = $e,lg = Qe,hg = (Object.freeze || Object)({ parse: qe, lift: Ue, toHex: Ke, fastLerp: $e, fastMapToColor: sg, lerp: Qe, mapToColor: lg, modifyHSL: Je, modifyAlpha: tn, stringify: en }),ug = Array.prototype.slice,cg = function cg(t, e, n, i) {this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || nn, this._setter = i || rn, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];};cg.prototype = { when: function when(t, e) {var n = this._tracks;for (var i in e) {if (e.hasOwnProperty(i)) {if (!n[i]) {n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: dn(r) });}n[i].push({ time: t, value: e[i] });}}return this;}, during: function during(t) {return this._onframeList.push(t), this;}, pause: function pause() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].pause();}this._paused = !0;}, resume: function resume() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].resume();}this._paused = !1;}, isPaused: function isPaused() {return !!this._paused;}, _doneCallback: function _doneCallback() {this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; e > n; n++) {t[n].call(this);}}, start: function start(t, e) {var n,i = this,r = 0,a = function a() {r--, r || i._doneCallback();};for (var o in this._tracks) {if (this._tracks.hasOwnProperty(o)) {var s = gn(this, t, a, this._tracks[o], o, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);}}if (n) {var l = n.onframe;n.onframe = function (t, e) {l(t, e);for (var n = 0; n < i._onframeList.length; n++) {i._onframeList[n](t, e);}};}return r || this._doneCallback(), this;}, stop: function stop(t) {for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);}e.length = 0;}, delay: function delay(t) {return this._delay = t, this;}, done: function done(t) {return t && this._doneList.push(t), this;}, getClips: function getClips() {return this._clipList;} };var dg = 1;"undefined" != typeof window && (dg = Math.max(window.devicePixelRatio || 1, 1));var fg = 0,pg = dg,gg = function gg() {};1 === fg ? gg = function gg() {for (var t in arguments) {throw new Error(arguments[t]);}} : fg > 1 && (gg = function gg() {for (var t in arguments) {console.log(arguments[t]);}});var vg = gg,mg = function mg() {this.animators = [];};mg.prototype = { constructor: mg, animate: function animate(t, e) {var n,i = !1,r = this,a = this.__zr;if (t) {var o = t.split("."),s = r;i = "shape" === o[0];for (var l = 0, u = o.length; u > l; l++) {s && (s = s[o[l]]);}s && (n = s);} else n = r;if (!n) return void vg('Property "' + t + '" is not existed in element ' + r.id);var c = r.animators,d = new cg(n, e);return d.during(function () {r.dirty(i);}).done(function () {c.splice(h(c, d), 1);}), c.push(d), a && a.animation.addAnimator(d), d;}, stopAnimation: function stopAnimation(t) {for (var e = this.animators, n = e.length, i = 0; n > i; i++) {e[i].stop(t);}return e.length = 0, this;}, animateTo: function animateTo(t, e, n, i, r, a) {vn(this, t, e, n, i, r, a);}, animateFrom: function animateFrom(t, e, n, i, r, a) {vn(this, t, e, n, i, r, a, !0);} };var yg = function yg(t) {jp.call(this, t), zp.call(this, t), mg.call(this, t), this.id = t.id || up();};yg.prototype = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function drift(t, e) {switch (this.draggable) {case "horizontal":e = 0;break;case "vertical":t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);}, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {this.updateTransform();}, traverse: function traverse() {}, attrKV: function attrKV(t, e) {if ("position" === t || "scale" === t || "origin" === t) {if (e) {var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];}} else this[t] = e;}, hide: function hide() {this.ignore = !0, this.__zr && this.__zr.refresh();}, show: function show() {this.ignore = !1, this.__zr && this.__zr.refresh();}, attr: function attr(t, e) {if ("string" == typeof t) this.attrKV(t, e);else if (S(t)) for (var n in t) {t.hasOwnProperty(n) && this.attrKV(n, t[n]);}return this.dirty(!1), this;}, setClipPath: function setClipPath(t) {var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);}, removeClipPath: function removeClipPath() {var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));}, addSelfToZr: function addSelfToZr(t) {this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {t.animation.addAnimator(e[n]);}this.clipPath && this.clipPath.addSelfToZr(t);}, removeSelfFromZr: function removeSelfFromZr(t) {this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {t.animation.removeAnimator(e[n]);}this.clipPath && this.clipPath.removeSelfFromZr(t);} }, c(yg, mg), c(yg, jp), c(yg, zp);var xg = ae,_g = Math.min,wg = Math.max;xn.prototype = { constructor: xn, union: function union(t) {var e = _g(t.x, this.x),n = _g(t.y, this.y);this.width = wg(t.x + t.width, this.x + this.width) - e, this.height = wg(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;}, applyTransform: function () {var t = [],e = [],n = [],i = [];return function (r) {if (r) {t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, xg(t, t, r), xg(e, e, r), xg(n, n, r), xg(i, i, r), this.x = _g(t[0], e[0], n[0], i[0]), this.y = _g(t[1], e[1], n[1], i[1]);var a = wg(t[0], e[0], n[0], i[0]),o = wg(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;}};}(), calculateTransform: function calculateTransform(t) {var e = this,n = t.width / e.width,i = t.height / e.height,r = Ie();return Ae(r, r, [-e.x, -e.y]), Pe(r, r, [n, i]), Ae(r, r, [t.x, t.y]), r;}, intersect: function intersect(t) {if (!t) return !1;t instanceof xn || (t = xn.create(t));var e = this,n = e.x,i = e.x + e.width,r = e.y,a = e.y + e.height,o = t.x,s = t.x + t.width,l = t.y,h = t.y + t.height;return !(o > i || n > s || l > a || r > h);}, contain: function contain(t, e) {var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;}, clone: function clone() {return new xn(this.x, this.y, this.width, this.height);}, copy: function copy(t) {this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;}, plain: function plain() {return { x: this.x, y: this.y, width: this.width, height: this.height };} }, xn.create = function (t) {return new xn(t.x, t.y, t.width, t.height);};var bg = function bg(t) {t = t || {}, yg.call(this, t);for (var e in t) {t.hasOwnProperty(e) && (this[e] = t[e]);}this._children = [], this.__storage = null, this.__dirty = !0;};bg.prototype = { constructor: bg, isGroup: !0, type: "group", silent: !1, children: function children() {return this._children.slice();}, childAt: function childAt(t) {return this._children[t];}, childOfName: function childOfName(t) {for (var e = this._children, n = 0; n < e.length; n++) {if (e[n].name === t) return e[n];}}, childCount: function childCount() {return this._children.length;}, add: function add(t) {return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;}, addBefore: function addBefore(t, e) {if (t && t !== this && t.parent !== this && e && e.parent === this) {var n = this._children,i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));}return this;}, _doAdd: function _doAdd(t) {t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof bg && t.addChildrenToStorage(e)), n && n.refresh();}, remove: function remove(t) {var e = this.__zr,n = this.__storage,i = this._children,r = h(i, t);return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof bg && t.delChildrenFromStorage(n)), e && e.refresh(), this);}, removeAll: function removeAll() {var t,e,n = this._children,i = this.__storage;for (e = 0; e < n.length; e++) {t = n[e], i && (i.delFromStorage(t), t instanceof bg && t.delChildrenFromStorage(i)), t.parent = null;}return n.length = 0, this;}, eachChild: function eachChild(t, e) {for (var n = this._children, i = 0; i < n.length; i++) {var r = n[i];t.call(e, r, i);}return this;}, traverse: function traverse(t, e) {for (var n = 0; n < this._children.length; n++) {var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);}return this;}, addChildrenToStorage: function addChildrenToStorage(t) {for (var e = 0; e < this._children.length; e++) {var n = this._children[e];t.addToStorage(n), n instanceof bg && n.addChildrenToStorage(t);}}, delChildrenFromStorage: function delChildrenFromStorage(t) {for (var e = 0; e < this._children.length; e++) {var n = this._children[e];t.delFromStorage(n), n instanceof bg && n.delChildrenFromStorage(t);}}, dirty: function dirty() {return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;}, getBoundingRect: function getBoundingRect(t) {for (var e = null, n = new xn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {var o = i[a];if (!o.ignore && !o.invisible) {var s = o.getBoundingRect(),l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));}}return e || n;} }, u(bg, yg);var Sg = 32,Mg = 7,Ig = function Ig() {this._roots = [], this._displayList = [], this._displayListLen = 0;};Ig.prototype = { constructor: Ig, traverse: function traverse(t, e) {for (var n = 0; n < this._roots.length; n++) {this._roots[n].traverse(t, e);}}, getDisplayList: function getDisplayList(t, e) {return e = e || !1, t && this.updateDisplayList(e), this._displayList;}, updateDisplayList: function updateDisplayList(t) {this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) {this._updateAndAddDisplayable(e[i], null, t);}n.length = this._displayListLen, dp.canvasSupported && Cn(n, Dn);}, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {if (!t.ignore || n) {t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {e = e ? e.slice() : [];for (var r = i, a = t; r;) {r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;}}if (t.isGroup) {for (var o = t._children, s = 0; s < o.length; s++) {var l = o[s];t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);}t.__dirty = !1;} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;}}, addRoot: function addRoot(t) {t.__storage !== this && (t instanceof bg && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));}, delRoot: function delRoot(t) {if (null == t) {for (var e = 0; e < this._roots.length; e++) {var n = this._roots[e];n instanceof bg && n.delChildrenFromStorage(this);}return this._roots = [], this._displayList = [], void (this._displayListLen = 0);}if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) {this.delRoot(t[e]);} else {var r = h(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof bg && t.delChildrenFromStorage(this));}}, addToStorage: function addToStorage(t) {return t && (t.__storage = this, t.dirty(!1)), this;}, delFromStorage: function delFromStorage(t) {return t && (t.__storage = null), this;}, dispose: function dispose() {this._renderList = this._roots = null;}, displayableSortFunc: Dn };var Tg = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },Cg = function Cg(t, e, n) {return Tg.hasOwnProperty(e) ? n *= t.dpr : n;},Dg = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },Ag = 9,kg = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],Pg = function Pg(t) {this.extendFrom(t, !1);};Pg.prototype = { constructor: Pg, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: !1, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {var i = this,r = n && n.style,a = !r || t.__attrCachedBy !== Dg.STYLE_BIND;t.__attrCachedBy = Dg.STYLE_BIND;for (var o = 0; o < kg.length; o++) {var s = kg[o],l = s[0];(a || i[l] !== r[l]) && (t[l] = Cg(t, l, i[l] || s[1]));}if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {var h = i.lineWidth;t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);}}, hasFill: function hasFill() {var t = this.fill;return null != t && "none" !== t;}, hasStroke: function hasStroke() {var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;}, extendFrom: function extendFrom(t, e) {if (t) for (var n in t) {!t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);}}, set: function set(t, e) {"string" == typeof t ? this[t] = e : this.extendFrom(t, !0);}, clone: function clone() {var t = new this.constructor();return t.extendFrom(this, !0), t;}, getGradient: function getGradient(t, e, n) {for (var i = "radial" === e.type ? kn : An, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) {r.addColorStop(a[o].offset, a[o].color);}return r;} };for (var Lg = Pg.prototype, Og = 0; Og < kg.length; Og++) {var zg = kg[Og];zg[0] in Lg || (Lg[zg[0]] = zg[1]);}Pg.getGradient = Lg.getGradient;var Bg = function Bg(t, e) {this.image = t, this.repeat = e, this.type = "pattern";};Bg.prototype.getCanvasPattern = function (t) {return t.createPattern(this.image, this.repeat || "repeat");};var Eg = function Eg(t, e, n) {var i;n = n || pg, "string" == typeof t ? i = Ln(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = Pn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;};Eg.prototype = { constructor: Eg, __dirty: !0, __used: !1, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: !1, getElementCount: function getElementCount() {return this.__endIndex - this.__startIndex;}, initContext: function initContext() {this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;}, createBackBuffer: function createBackBuffer() {var t = this.dpr;this.domBack = Ln("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t);}, resize: function resize(t, e) {var n = this.dpr,i = this.dom,r = i.style,a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 !== n && this.ctxBack.scale(n, n));}, clear: function clear(t, e) {var n = this.dom,i = this.ctx,r = n.width,a = n.height,e = e || this.clearColor,o = this.motionBlur && !t,s = this.lastFrameAlpha,l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {var h;e.colorStops ? (h = e.__canvasGradient || Pg.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = h) : e.image && (h = Bg.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore();}if (o) {var u = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore();}} };var Ng = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {setTimeout(t, 16);},Rg = new ng(50),Fg = {},Vg = 0,Gg = 5e3,Hg = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Wg = "12px sans-serif",Xg = {};Xg.measureText = function (t, e) {var n = l();return n.font = e || Wg, n.measureText(t);};var Yg = Wg,qg = { left: 1, right: 1, center: 1 },jg = { top: 1, bottom: 1, middle: 1 },Zg = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],Ug = new xn(),Kg = function Kg() {};Kg.prototype = { constructor: Kg, drawRectText: function drawRectText(t, e) {var n = this.style;e = n.textRect || e, this.__dirty && ei(n, !0);var i = n.text;if (null != i && (i += ""), yi(i, n)) {t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (Ug.copy(e), Ug.applyTransform(r), e = Ug), ii(this, t, i, n, e, Ag), t.restore();}} }, xi.prototype = { constructor: xi, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: !1, incremental: !1, globalScaleRatio: 1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {return this.rectContain(t, e);}, traverse: function traverse(t, e) {t.call(e, this);}, rectContain: function rectContain(t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect();return i.contain(n[0], n[1]);}, dirty: function dirty() {this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();}, animateStyle: function animateStyle(t) {return this.animate("style", t);}, attrKV: function attrKV(t, e) {"style" !== t ? yg.prototype.attrKV.call(this, t, e) : this.style.set(e);}, setStyle: function setStyle(t, e) {return this.style.set(t, e), this.dirty(!1), this;}, useStyle: function useStyle(t) {return this.style = new Pg(t, this), this.dirty(!1), this;} }, u(xi, yg), c(xi, Kg), _i.prototype = { constructor: _i, type: "image", brush: function brush(t, e) {var n = this.style,i = n.image;n.bind(t, this, e);var r = this._image = zn(i, this._image, this, this.onload);if (r && En(r)) {var a = n.x || 0,o = n.y || 0,s = n.width,l = n.height,h = r.width / r.height;if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {var u = n.sx || 0,c = n.sy || 0;t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l);} else if (n.sx && n.sy) {var u = n.sx,c = n.sy,d = s - u,f = l - c;t.drawImage(r, u, c, d, f, a, o, s, l);} else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));}}, getBoundingRect: function getBoundingRect() {var t = this.style;return this._rect || (this._rect = new xn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;} }, u(_i, xi);var $g = 1e5,Qg = 314159,Jg = .01,tv = .001,ev = new xn(0, 0, 0, 0),nv = new xn(0, 0, 0, 0),iv = function iv(t, e, n) {this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || pg, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var a = this._zlevelList = [],s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {var l = t.width,h = t.height;null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;var u = new Eg(t, this, this.dpr);u.__builtin__ = !0, u.initContext(), s[Qg] = u, u.zlevel = Qg, a.push(Qg), this._domRoot = t;} else {this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = Ti(this._width, this._height);t.appendChild(c);}this._hoverlayer = null, this._hoverElements = [];};iv.prototype = { constructor: iv, getType: function getType() {return "canvas";}, isSingleCanvas: function isSingleCanvas() {return this._singleCanvas;}, getViewportRoot: function getViewportRoot() {return this._domRoot;}, getViewportRootOffset: function getViewportRootOffset() {var t = this.getViewportRoot();return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;}, refresh: function refresh(t) {var e = this.storage.getDisplayList(!0),n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {var r = n[i],a = this._layers[r];if (!a.__builtin__ && a.refresh) {var o = 0 === i ? this._backgroundColor : null;a.refresh(o);}}return this.refreshHover(), this;}, addHover: function addHover(t, e) {if (!t.__hoverMir) {var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;}}, removeHover: function removeHover(t) {var e = t.__hoverMir,n = this._hoverElements,i = h(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;}, clearHover: function clearHover() {for (var t = this._hoverElements, e = 0; e < t.length; e++) {var n = t[e].__from;n && (n.__hoverMir = null);}t.length = 0;}, refreshHover: function refreshHover() {var t = this._hoverElements,e = t.length,n = this._hoverlayer;if (n && n.clear(), e) {Cn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer($g));var i = {};n.ctx.save();for (var r = 0; e > r;) {var a = t[r],o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);}n.ctx.restore();}}, getHoverLayer: function getHoverLayer() {return this.getLayer($g);}, _paintList: function _paintList(t, e, n) {if (this._redrawId === n) {e = e || !1, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {var r = this;Ng(function () {r._paintList(t, e, n);});}}}, _compositeManually: function _compositeManually() {var t = this.getLayer(Qg).ctx,e = this._domRoot.width,n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {i.virtual && t.drawImage(i.dom, 0, 0, e, n);});}, _doPaintList: function _doPaintList(t, e) {for (var n = [], i = 0; i < this._zlevelList.length; i++) {var r = this._zlevelList[i],a = this._layers[r];a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);}for (var o = !0, s = 0; s < n.length; s++) {var a = n[s],l = a.ctx,h = {};l.save();var u = e ? a.__startIndex : a.__drawIndex,c = !e && a.incremental && Date.now,d = c && Date.now(),p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (u === a.__startIndex) {var g = t[u];g.incremental && g.notClear && !e || a.clear(!1, p);}-1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);for (var v = u; v < a.__endIndex; v++) {var m = t[v];if (this._doPaintEl(m, a, e, h), m.__dirty = m.__dirtyText = !1, c) {var y = Date.now() - d;if (y > 15) break;}}a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore();}return dp.wxa && f(this._layers, function (t) {t && t.ctx && t.ctx.draw && t.ctx.draw();}), o;}, _doPaintEl: function _doPaintEl(t, e, n, i) {var r = e.ctx,a = t.transform;if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && Si(t, this._width, this._height))) {var o = t.__clipPaths;(!i.prevElClipPaths || Mi(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Ii(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);}}, getLayer: function getLayer(t, e) {this._singleCanvas && !this._needsManuallyCompositing && (t = Qg);var n = this._layers[t];return n || (n = new Eg("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;}, insertLayer: function insertLayer(t, e) {var n = this._layers,i = this._zlevelList,r = i.length,a = null,o = -1,s = this._domRoot;if (n[t]) return void vg("ZLevel " + t + " has been used already");if (!bi(e)) return void vg("Layer of zlevel " + t + " is not valid");if (r > 0 && t > i[0]) {for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) {;}a = n[i[o]];}if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);}, eachLayer: function eachLayer(t, e) {var n,i,r = this._zlevelList;for (i = 0; i < r.length; i++) {n = r[i], t.call(e, this._layers[n], n);}}, eachBuiltinLayer: function eachBuiltinLayer(t, e) {var n,i,r,a = this._zlevelList;for (r = 0; r < a.length; r++) {i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);}}, eachOtherLayer: function eachOtherLayer(t, e) {var n,i,r,a = this._zlevelList;for (r = 0; r < a.length; r++) {i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);}}, getLayers: function getLayers() {return this._layers;}, _updateLayerStatus: function _updateLayerStatus(t) {function e(t) {r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);}if (this.eachBuiltinLayer(function (t) {t.__dirty = t.__used = !1;}), this._singleCanvas) for (var n = 1; n < t.length; n++) {var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {this._needsManuallyCompositing = !0;break;}}for (var r = null, a = 0, n = 0; n < t.length; n++) {var o,i = t[n],s = i.zlevel;i.incremental ? (o = this.getLayer(s + tv, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Jg : 0), this._needsManuallyCompositing), o.__builtin__ || vg("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
      }e(n), this.eachBuiltinLayer(function (t) {!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);});}, clear: function clear() {return this.eachBuiltinLayer(this._clearLayer), this;}, _clearLayer: function _clearLayer(t) {t.clear();}, setBackgroundColor: function setBackgroundColor(t) {this._backgroundColor = t;}, configLayer: function configLayer(t, e) {if (e) {var n = this._layerConfig;n[t] ? r(n[t], e, !0) : n[t] = e;for (var i = 0; i < this._zlevelList.length; i++) {var a = this._zlevelList[i];if (a === t || a === t + Jg) {var o = this._layers[a];r(o, n[t], !0);}}}}, delLayer: function delLayer(t) {var e = this._layers,n = this._zlevelList,i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1));}, resize: function resize(t, e) {if (this._domRoot.style) {var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) {this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);}f(this._progressiveLayers, function (n) {n.resize(t, e);}), this.refresh(!0);}this._width = t, this._height = e;} else {if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(Qg).resize(t, e);}return this;}, clearLayer: function clearLayer(t) {var e = this._layers[t];e && e.clear();}, dispose: function dispose() {this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;}, getRenderedCanvas: function getRenderedCanvas(t) {if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Qg].dom;var e = new Eg("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {this.refresh();var n = e.dom.width,i = e.dom.height,r = e.ctx;this.eachLayer(function (t) {t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());});} else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {var l = o[s];this._doPaintEl(l, e, !0, a);}return e.dom;}, getWidth: function getWidth() {return this._width;}, getHeight: function getHeight() {return this._height;}, _getSize: function _getSize(t) {var e = this._opts,n = ["width", "height"][t],i = ["clientWidth", "clientHeight"][t],r = ["paddingLeft", "paddingTop"][t],a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,s = document.defaultView.getComputedStyle(o);return (o[i] || wi(s[n]) || wi(o.style[n])) - (wi(s[r]) || 0) - (wi(s[a]) || 0) | 0;}, pathToImage: function pathToImage(t, e) {e = e || this.dpr;var n = document.createElement("canvas"),i = n.getContext("2d"),r = t.getBoundingRect(),a = t.style,o = a.shadowBlur * e,s = a.shadowOffsetX * e,l = a.shadowOffsetY * e,h = a.hasStroke() ? a.lineWidth : 0,u = Math.max(h / 2, -s + o),c = Math.max(h / 2, s + o),d = Math.max(h / 2, -l + o),f = Math.max(h / 2, l + o),p = r.width + u + c,g = r.height + d + f;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = _i,y = new m({ style: { x: 0, y: 0, image: n } });return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;} };var rv = function rv(t) {t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, zp.call(this);};rv.prototype = { constructor: rv, addClip: function addClip(t) {this._clips.push(t);}, addAnimator: function addAnimator(t) {t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {this.addClip(e[n]);}}, removeClip: function removeClip(t) {var e = h(this._clips, t);e >= 0 && this._clips.splice(e, 1);}, removeAnimator: function removeAnimator(t) {for (var e = t.getClips(), n = 0; n < e.length; n++) {this.removeClip(e[n]);}t.animation = null;}, _update: function _update() {for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {var s = n[o],l = s.step(t, e);l && (r.push(l), a.push(s));}for (var o = 0; i > o;) {n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;}i = r.length;for (var o = 0; i > o; o++) {a[o].fire(r[o]);}this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();}, _startLoop: function _startLoop() {function t() {e._running && (Ng(t), !e._paused && e._update());}var e = this;this._running = !0, Ng(t);}, start: function start() {this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();}, stop: function stop() {this._running = !1;}, pause: function pause() {this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);}, resume: function resume() {this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);}, clear: function clear() {this._clips = [];}, isFinished: function isFinished() {return !this._clips.length;}, animate: function animate(t, e) {e = e || {};var n = new cg(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;} }, c(rv, zp);var av = 300,ov = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],sv = ["touchstart", "touchend", "touchmove"],lv = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },hv = p(ov, function (t) {var e = t.replace("mouse", "pointer");return lv[e] ? e : t;}),uv = { mousemove: function mousemove(t) {t = ge(this.dom, t), this.trigger("mousemove", t);}, mouseout: function mouseout(t) {t = ge(this.dom, t);var e = t.toElement || t.relatedTarget;if (e !== this.dom) for (; e && 9 !== e.nodeType;) {if (e === this.dom) return;e = e.parentNode;}this.trigger("mouseout", t);}, touchstart: function touchstart(t) {t = ge(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date(), this.handler.processGesture(this, t, "start"), uv.mousemove.call(this, t), uv.mousedown.call(this, t), Di(this);}, touchmove: function touchmove(t) {t = ge(this.dom, t), t.zrByTouch = !0, this.handler.processGesture(this, t, "change"), uv.mousemove.call(this, t), Di(this);}, touchend: function touchend(t) {t = ge(this.dom, t), t.zrByTouch = !0, this.handler.processGesture(this, t, "end"), uv.mouseup.call(this, t), +new Date() - this._lastTouchMoment < av && uv.click.call(this, t), Di(this);}, pointerdown: function pointerdown(t) {uv.mousedown.call(this, t);}, pointermove: function pointermove(t) {Ai(t) || uv.mousemove.call(this, t);}, pointerup: function pointerup(t) {uv.mouseup.call(this, t);}, pointerout: function pointerout(t) {Ai(t) || uv.mouseout.call(this, t);} };f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {uv[t] = function (e) {e = ge(this.dom, e), this.trigger(t, e);};});var cv = Pi.prototype;cv.dispose = function () {for (var t = ov.concat(sv), e = 0; e < t.length; e++) {var n = t[e];me(this.dom, Ci(n), this._handlers[n]);}}, cv.setCursor = function (t) {this.dom.style && (this.dom.style.cursor = t || "default");}, c(Pi, zp);var dv = !dp.canvasSupported,fv = { canvas: iv },pv = {},gv = "4.0.7",vv = function vv(t, e, n) {n = n || {}, this.dom = e, this.id = t;var i = this,r = new Ig(),a = n.renderer;if (dv) {if (!fv.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";} else a && fv[a] || (a = "canvas");var o = new fv[a](e, r, n, t);this.storage = r, this.painter = o;var s = dp.node || dp.worker ? null : new Pi(o.getViewportRoot());this.handler = new Hp(r, o, s, o.root), this.animation = new rv({ stage: { update: y(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,h = r.addToStorage;r.delFromStorage = function (t) {l.call(r, t), t && t.removeSelfFromZr(i);}, r.addToStorage = function (t) {h.call(r, t), t.addSelfToZr(i);};};vv.prototype = { constructor: vv, getId: function getId() {return this.id;}, add: function add(t) {this.storage.addRoot(t), this._needsRefresh = !0;}, remove: function remove(t) {this.storage.delRoot(t), this._needsRefresh = !0;}, configLayer: function configLayer(t, e) {this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;}, setBackgroundColor: function setBackgroundColor(t) {this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;}, refreshImmediately: function refreshImmediately() {this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;}, refresh: function refresh() {this._needsRefresh = !0;}, flush: function flush() {var t;this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");}, addHover: function addHover(t, e) {if (this.painter.addHover) {var n = this.painter.addHover(t, e);return this.refreshHover(), n;}}, removeHover: function removeHover(t) {this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());}, clearHover: function clearHover() {this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());}, refreshHover: function refreshHover() {this._needsRefreshHover = !0;}, refreshHoverImmediately: function refreshHoverImmediately() {this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();}, resize: function resize(t) {t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();}, clearAnimation: function clearAnimation() {this.animation.clear();}, getWidth: function getWidth() {return this.painter.getWidth();}, getHeight: function getHeight() {return this.painter.getHeight();}, pathToImage: function pathToImage(t, e) {return this.painter.pathToImage(t, e);}, setCursorStyle: function setCursorStyle(t) {this.handler.setCursorStyle(t);}, findHover: function findHover(t, e) {return this.handler.findHover(t, e);}, on: function on(t, e, n) {this.handler.on(t, e, n);}, off: function off(t, e) {this.handler.off(t, e);}, trigger: function trigger(t, e) {this.handler.trigger(t, e);}, clear: function clear() {this.storage.delRoot(), this.painter.clear();}, dispose: function dispose() {this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Ei(this.id);} };var mv = (Object.freeze || Object)({ version: gv, init: Li, dispose: Oi, getInstance: zi, registerPainter: Bi }),yv = f,xv = S,_v = _,wv = "series\x00",bv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],Sv = 0,Mv = ".",Iv = "___EC__COMPONENT__CONTAINER___",Tv = 0,Cv = function Cv(t) {for (var e = 0; e < t.length; e++) {t[e][1] || (t[e][1] = t[e][0]);}return function (e, n, i) {for (var r = {}, a = 0; a < t.length; a++) {var o = t[a][1];if (!(n && h(n, o) >= 0 || i && h(i, o) < 0)) {var s = e.getShallow(o);null != s && (r[t[a][0]] = s);}}return r;};},Dv = Cv([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),Av = { getLineStyle: function getLineStyle(t) {var e = Dv(this, t),n = this.getLineDash(e.lineWidth);return n && (e.lineDash = n), e;}, getLineDash: function getLineDash(t) {null == t && (t = 1);var e = this.get("type"),n = Math.max(t, 2),i = 4 * t;return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n];} },kv = Cv([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),Pv = { getAreaStyle: function getAreaStyle(t, e) {return kv(this, t, e);} },Lv = Math.pow,Ov = Math.sqrt,zv = 1e-8,Bv = 1e-4,Ev = Ov(3),Nv = 1 / 3,Rv = G(),Fv = G(),Vv = G(),Gv = Math.min,Hv = Math.max,Wv = Math.sin,Xv = Math.cos,Yv = 2 * Math.PI,qv = G(),jv = G(),Zv = G(),Uv = [],Kv = [],$v = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },Qv = [],Jv = [],tm = [],em = [],nm = Math.min,im = Math.max,rm = Math.cos,am = Math.sin,om = Math.sqrt,sm = Math.abs,lm = "undefined" != typeof Float32Array,hm = function hm(t) {this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;};hm.prototype = { constructor: hm, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e) {this._ux = sm(1 / pg / t) || 0, this._uy = sm(1 / pg / e) || 0;}, getContext: function getContext() {return this._ctx;}, beginPath: function beginPath(t) {return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;}, moveTo: function moveTo(t, e) {return this.addData($v.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;}, lineTo: function lineTo(t, e) {var n = sm(t - this._xi) > this._ux || sm(e - this._yi) > this._uy || this._len < 5;return this.addData($v.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;}, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, a) {return this.addData($v.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;}, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {return this.addData($v.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;}, arc: function arc(t, e, n, i, r, a) {return this.addData($v.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = rm(r) * n + t, this._yi = am(r) * n + e, this;}, arcTo: function arcTo(t, e, n, i, r) {return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;}, rect: function rect(t, e, n, i) {return this._ctx && this._ctx.rect(t, e, n, i), this.addData($v.R, t, e, n, i), this;}, closePath: function closePath() {this.addData($v.Z);var t = this._ctx,e = this._x0,n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;}, fill: function fill(t) {t && t.fill(), this.toStatic();}, stroke: function stroke(t) {t && t.stroke(), this.toStatic();}, setLineDash: function setLineDash(t) {if (t instanceof Array) {this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {e += t[n];}this._dashSum = e;}return this;}, setLineDashOffset: function setLineDashOffset(t) {return this._dashOffset = t, this;}, len: function len() {return this._len;}, setData: function setData(t) {var e = t.length;this.data && this.data.length === e || !lm || (this.data = new Float32Array(e));for (var n = 0; e > n; n++) {this.data[n] = t[n];}this._len = e;}, appendPath: function appendPath(t) {t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) {n += t[r].len();}lm && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; e > r; r++) {for (var a = t[r].data, o = 0; o < a.length; o++) {this.data[i++] = a[o];}}this._len = i;}, addData: function addData(t) {if (this._saveData) {var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {e[this._len++] = arguments[n];}this._prevCmd = t;}}, _expandData: function _expandData() {if (!(this.data instanceof Array)) {for (var t = [], e = 0; e < this._len; e++) {t[e] = this.data[e];}this.data = t;}}, _needsDash: function _needsDash() {return this._lineDash;}, _dashedLineTo: function _dashedLineTo(t, e) {var n,i,r = this._dashSum,a = this._dashOffset,o = this._lineDash,s = this._ctx,l = this._xi,h = this._yi,u = t - l,c = e - h,d = om(u * u + c * c),f = l,p = h,g = o.length;for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 === u && (c > 0 && e >= p || 0 > c && p >= e);) {i = this._dashIdx, n = o[i], f += u * n, p += c * n, this._dashIdx = (i + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? nm(f, t) : im(f, t), c >= 0 ? nm(p, e) : im(p, e));}u = f - t, c = p - e, this._dashOffset = -om(u * u + c * c);}, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, a) {var o,s,l,h,u,c = this._dashSum,d = this._dashOffset,f = this._lineDash,p = this._ctx,g = this._xi,v = this._yi,m = sr,y = 0,x = this._dashIdx,_ = f.length,w = 0;for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) {s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += om(s * s + l * l);}for (; _ > x && (w += f[x], !(w > d)); x++) {;}for (o = (w - d) / y; 1 >= o;) {h = m(g, t, n, r, o), u = m(v, e, i, a, o), x % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[x] / y, x = (x + 1) % _;}x % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -om(s * s + l * l);}, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {var r = n,a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);}, toStatic: function toStatic() {var t = this.data;t instanceof Array && (t.length = this._len, lm && (this.data = new Float32Array(t)));}, getBoundingRect: function getBoundingRect() {Qv[0] = Qv[1] = tm[0] = tm[1] = Number.MAX_VALUE, Jv[0] = Jv[1] = em[0] = em[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {var o = t[a++];switch (1 === a && (e = t[a], n = t[a + 1], i = e, r = n), o) {case $v.M:i = t[a++], r = t[a++], e = i, n = r, tm[0] = i, tm[1] = r, em[0] = i, em[1] = r;break;case $v.L:_r(e, n, t[a], t[a + 1], tm, em), e = t[a++], n = t[a++];break;case $v.C:wr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], tm, em), e = t[a++], n = t[a++];break;case $v.Q:br(e, n, t[a++], t[a++], t[a], t[a + 1], tm, em), e = t[a++], n = t[a++];break;case $v.A:var s = t[a++],l = t[a++],h = t[a++],u = t[a++],c = t[a++],d = t[a++] + c;a += 1;var f = 1 - t[a++];1 === a && (i = rm(c) * h + s, r = am(c) * u + l), Sr(s, l, h, u, c, d, f, tm, em), e = rm(d) * h + s, n = am(d) * u + l;break;case $v.R:i = e = t[a++], r = n = t[a++];var p = t[a++],g = t[a++];_r(i, r, i + p, r + g, tm, em);break;case $v.Z:e = i, n = r;}oe(Qv, Qv, tm), se(Jv, Jv, em);}return 0 === a && (Qv[0] = Qv[1] = Jv[0] = Jv[1] = 0), new xn(Qv[0], Qv[1], Jv[0] - Qv[0], Jv[1] - Qv[1]);}, rebuildPath: function rebuildPath(t) {for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {var d = s[c++];switch (1 === c && (i = s[c], r = s[c + 1], e = i, n = r), d) {case $v.M:e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case $v.L:a = s[c++], o = s[c++], (sm(a - i) > l || sm(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);break;case $v.C:t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case $v.Q:t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case $v.A:var f = s[c++],p = s[c++],g = s[c++],v = s[c++],m = s[c++],y = s[c++],x = s[c++],_ = s[c++],w = g > v ? g : v,b = g > v ? 1 : g / v,S = g > v ? v / g : 1,M = Math.abs(g - v) > .001,I = m + y;M ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - _), 1 === c && (e = rm(m) * g + f, n = am(m) * v + p), i = rm(I) * g + f, r = am(I) * v + p;break;case $v.R:e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case $v.Z:t.closePath(), i = e, r = n;}}} }, hm.CMD = $v;var um = 2 * Math.PI,cm = 2 * Math.PI,dm = hm.CMD,fm = 2 * Math.PI,pm = 1e-4,gm = [-1, -1, -1],vm = [-1, -1],mm = Bg.prototype.getCanvasPattern,ym = Math.abs,xm = new hm(!0);Rr.prototype = { constructor: Rr, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, subPixelOptimize: !1, brush: function brush(t, e) {var n = this.style,i = this.path || xm,r = n.hasStroke(),a = n.hasFill(),o = n.fill,s = n.stroke,l = a && !!o.colorStops,h = r && !!s.colorStops,u = a && !!o.image,c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {var d;l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));}l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = mm.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = mm.call(s, t));var f = n.lineDash,p = n.lineDashOffset,g = !!t.setLineDash,v = this.getGlobalScale();if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {var m = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;} else i.fill(t);if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {var m = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;} else i.stroke(t);f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));}, buildPath: function buildPath() {}, createPathProxy: function createPathProxy() {this.path = new hm();}, getBoundingRect: function getBoundingRect() {var t = this._rect,e = this.style,n = !t;if (n) {var i = this.path;i || (i = this.path = new hm()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();}if (this._rect = t, e.hasStroke()) {var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {r.copy(t);var a = e.lineWidth,o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);}return r;}return t;}, contain: function contain(t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect(),r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {var a = this.path.data;if (r.hasStroke()) {var o = r.lineWidth,s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Nr(a, o / s, t, e))) return !0;}if (r.hasFill()) return Er(a, t, e);}return !1;}, dirty: function dirty(t) {null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();}, animateShape: function animateShape(t) {return this.animate("shape", t);}, attrKV: function attrKV(t, e) {"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : xi.prototype.attrKV.call(this, t, e);}, setShape: function setShape(t, e) {var n = this.shape;if (n) {if (S(t)) for (var i in t) {t.hasOwnProperty(i) && (n[i] = t[i]);} else n[t] = e;this.dirty(!0);}return this;}, getLineScale: function getLineScale() {var t = this.transform;return t && ym(t[0] - 1) > 1e-10 && ym(t[3] - 1) > 1e-10 ? Math.sqrt(ym(t[0] * t[3] - t[2] * t[1])) : 1;} }, Rr.extend = function (t) {var e = function e(_e2) {Rr.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {this.shape = this.shape || {};var i = this.shape;for (var r in n) {!i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);}}t.init && t.init.call(this, _e2);};u(e, Rr);for (var n in t) {"style" !== n && "shape" !== n && (e.prototype[n] = t[n]);}return e;}, u(Rr, xi);var _m = hm.CMD,wm = [[], [], []],bm = Math.sqrt,Sm = Math.atan2,Mm = function Mm(t, e) {var n,i,r,a,o,s,l = t.data,h = _m.M,u = _m.C,c = _m.L,d = _m.R,f = _m.A,p = _m.Q;for (r = 0, a = 0; r < l.length;) {switch (n = l[r++], a = r, i = 0, n) {case h:i = 1;break;case c:i = 1;break;case u:i = 3;break;case p:i = 2;break;case f:var g = e[4],v = e[5],m = bm(e[0] * e[0] + e[1] * e[1]),y = bm(e[2] * e[2] + e[3] * e[3]),x = Sm(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += x, l[r++] += x, r += 2, a = r;break;case d:s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; i > o; o++) {var s = wm[o];s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];}}},Im = Math.sqrt,Tm = Math.sin,Cm = Math.cos,Dm = Math.PI,Am = function Am(t) {return Math.sqrt(t[0] * t[0] + t[1] * t[1]);},km = function km(t, e) {return (t[0] * e[0] + t[1] * e[1]) / (Am(t) * Am(e));},Pm = function Pm(t, e) {return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(km(t, e));},Lm = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,Om = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,zm = function zm(t) {xi.call(this, t);};zm.prototype = { constructor: zm, type: "text", brush: function brush(t, e) {var n = this.style;this.__dirty && ei(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;return null != i && (i += ""), yi(i, n) ? (this.setTransform(t), ii(this, t, i, n, null, e), void this.restoreTransform(t)) : void (t.__attrCachedBy = Dg.NONE);}, getBoundingRect: function getBoundingRect() {var t = this.style;if (this.__dirty && ei(t, !0), !this._rect) {var e = t.text;null != e ? e += "" : e = "";var n = Rn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, pi(t.textStroke, t.textStrokeWidth)) {var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;}this._rect = n;}return this._rect;} }, u(zm, xi);var Bm = Rr.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);} }),Em = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],Nm = function Nm(t) {return dp.browser.ie && dp.browser.version >= 11 ? function () {var e,n = this.__clipPaths,i = this.style;if (n) for (var r = 0; r < n.length; r++) {var a = n[r],o = a && a.shape,s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {for (var l = 0; l < Em.length; l++) {Em[l][2] = i[Em[l][0]], i[Em[l][0]] = Em[l][1];}e = !0;break;}}if (t.apply(this, arguments), e) for (var l = 0; l < Em.length; l++) {i[Em[l][0]] = Em[l][2];}} : t;},Rm = Rr.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, brush: Nm(Rr.prototype.brush), buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = Math.max(e.r0 || 0, 0),a = Math.max(e.r, 0),o = e.startAngle,s = e.endAngle,l = e.clockwise,h = Math.cos(o),u = Math.sin(o);t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();} }),Fm = Rr.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);} }),Vm = function Vm(t, e) {for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) {r += ee(t[a - 1], t[a]);}var o = r / 2;o = n > o ? n : o;for (var a = 0; o > a; a++) {var s,l,h,u = a / (o - 1) * (e ? n : n - 1),c = Math.floor(u),d = u - c,f = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);var p = d * d,g = d * p;i.push([Yr(s[0], f[0], l[0], h[0], d, p, g), Yr(s[1], f[1], l[1], h[1], d, p, g)]);}return i;},Gm = function Gm(t, e, n, i) {var r,a,o,s,l = [],h = [],u = [],c = [];if (i) {o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];for (var d = 0, f = t.length; f > d; d++) {oe(o, o, t[d]), se(s, s, t[d]);}oe(o, o, i[0]), se(s, s, i[1]);}for (var d = 0, f = t.length; f > d; d++) {var p = t[d];if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {if (0 === d || d === f - 1) {l.push(W(t[d]));continue;}r = t[d - 1], a = t[d + 1];}j(h, a, r), J(h, h, e);var g = ee(p, r),v = ee(p, a),m = g + v;0 !== m && (g /= m, v /= m), J(u, h, -g), J(c, h, v);var y = Y([], p, u),x = Y([], p, c);i && (se(y, y, o), oe(y, y, s), se(x, x, o), oe(x, x, s)), l.push(y), l.push(x);}return n && l.push(l.shift()), l;},Hm = Rr.extend({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, e) {qr(t, e, !0);} }),Wm = Rr.extend({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {qr(t, e, !1);} }),Xm = Math.round,Ym = {},qm = Rr.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n, i, r, a;this.subPixelOptimize ? (Zr(Ym, e, this.style), n = Ym.x, i = Ym.y, r = Ym.width, a = Ym.height, Ym.r = e.r, e = Ym) : (n = e.x, i = e.y, r = e.width, a = e.height), e.r ? ti(t, e) : t.rect(n, i, r, a), t.closePath();} }),jm = {},Zm = Rr.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n, i, r, a;this.subPixelOptimize ? (jr(jm, e, this.style), n = jm.x1, i = jm.y1, r = jm.x2, a = jm.y2) : (n = e.x1, i = e.y1, r = e.x2, a = e.y2);var o = e.percent;0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));}, pointAt: function pointAt(t) {var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];} }),Um = [],Km = Rr.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n = e.x1,i = e.y1,r = e.x2,a = e.y2,o = e.cpx1,s = e.cpy1,l = e.cpx2,h = e.cpy2,u = e.percent;0 !== u && (t.moveTo(n, i), null == l || null == h ? (1 > u && (mr(n, o, r, u, Um), o = Um[1], r = Um[2], mr(i, s, a, u, Um), s = Um[1], a = Um[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (cr(n, o, l, r, u, Um), o = Um[1], l = Um[2], r = Um[3], cr(i, s, h, a, u, Um), s = Um[1], h = Um[2], a = Um[3]), t.bezierCurveTo(o, s, l, h, r, a)));}, pointAt: function pointAt(t) {return Kr(this.shape, t, !1);}, tangentAt: function tangentAt(t) {var e = Kr(this.shape, t, !0);return te(e, e);} }),$m = Rr.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = Math.max(e.r, 0),a = e.startAngle,o = e.endAngle,s = e.clockwise,l = Math.cos(a),h = Math.sin(a);t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s);} }),Qm = Rr.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {t = t || e[n].__dirtyPath;}this.__dirtyPath = t, this.__dirty = this.__dirty || t;}, beforeBrush: function beforeBrush() {this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1]);}}, buildPath: function buildPath(t, e) {for (var n = e.paths || [], i = 0; i < n.length; i++) {n[i].buildPath(t, n[i].shape, !0);}}, afterBrush: function afterBrush() {for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {t[e].__dirtyPath = !1;}}, getBoundingRect: function getBoundingRect() {return this._updatePathDirty(), Rr.prototype.getBoundingRect.call(this);} }),Jm = function Jm(t) {this.colorStops = t || [];};Jm.prototype = { constructor: Jm, addColorStop: function addColorStop(t, e) {this.colorStops.push({ offset: t, color: e });} };var ty = function ty(t, e, n, i, r, a) {this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Jm.call(this, r);};ty.prototype = { constructor: ty }, u(ty, Jm);var ey = function ey(t, e, n, i, r) {this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Jm.call(this, i);};ey.prototype = { constructor: ey }, u(ey, Jm), $r.prototype.incremental = !0, $r.prototype.clearDisplaybles = function () {this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;}, $r.prototype.addDisplayable = function (t, e) {e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();}, $r.prototype.addDisplayables = function (t, e) {e = e || !1;for (var n = 0; n < t.length; n++) {this.addDisplayable(t[n], e);}}, $r.prototype.eachPendingDisplayable = function (t) {for (var e = this._cursor; e < this._displayables.length; e++) {t && t(this._displayables[e]);}for (var e = 0; e < this._temporaryDisplayables.length; e++) {t && t(this._temporaryDisplayables[e]);}}, $r.prototype.update = function () {this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;}for (var t = 0; t < this._temporaryDisplayables.length; t++) {var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;}}, $r.prototype.brush = function (t) {for (var e = this._cursor; e < this._displayables.length; e++) {var n = this._displayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);}this._cursor = e;for (var e = 0; e < this._temporaryDisplayables.length; e++) {var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);}this._temporaryDisplayables = [], this.notClear = !0;};var ny = [];$r.prototype.getBoundingRect = function () {if (!this._rect) {for (var t = new xn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {var n = this._displayables[e],i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(ny)), t.union(i);}this._rect = t;}return this._rect;}, $r.prototype.contain = function (t, e) {var n = this.transformCoordToLocal(t, e),i = this.getBoundingRect();if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {var a = this._displayables[r];if (a.contain(t, e)) return !0;}return !1;}, u($r, xi);var iy = Math.round,ry = Math.max,ay = Math.min,oy = {},sy = 1,ly = Xr,hy = R(),uy = 0,cy = (Object.freeze || Object)({ Z2_EMPHASIS_LIFT: sy, extendShape: Qr, extendPath: Jr, makePath: ta, makeImage: ea, mergePath: ly, resizePath: ia, subPixelOptimizeLine: ra, subPixelOptimizeRect: aa, subPixelOptimize: oa, setElementHoverStyle: pa, isInEmphasis: ga, setHoverStyle: _a, setAsHoverStyleTrigger: wa, setLabelStyle: ba, setTextStyle: Sa, setText: Ma, getFont: Pa, updateProps: Oa, initProps: za, getTransform: Ba, applyTransform: Ea, transformDirection: Na, groupTransition: Ra, clipPointsByRect: Fa, clipRectByRect: Va, createIcon: Ga, Group: bg, Image: _i, Text: zm, Circle: Bm, Sector: Rm, Ring: Fm, Polygon: Hm, Polyline: Wm, Rect: qm, Line: Zm, BezierCurve: Km, Arc: $m, IncrementalDisplayable: $r, CompoundPath: Qm, LinearGradient: ty, RadialGradient: ey, BoundingRect: xn }),dy = ["textStyle", "color"],fy = { getTextColor: function getTextColor(t) {var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(dy) : null);}, getFont: function getFont() {return Pa({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);}, getTextRect: function getTextRect(t) {return Rn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));} },py = Cv([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),gy = { getItemStyle: function getItemStyle(t, e) {var n = py(this, t, e),i = this.getBorderLineDash();return i && (n.lineDash = i), n;}, getBorderLineDash: function getBorderLineDash() {var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];} },vy = c,my = qi();Ha.prototype = { constructor: Ha, init: null, mergeOption: function mergeOption(t) {r(this.option, t, !0);}, get: function get(t, e) {return null == t ? this.option : Wa(this.option, this.parsePath(t), !e && Xa(this, t));}, getShallow: function getShallow(t, e) {var n = this.option,i = null == n ? n : n[t],r = !e && Xa(this, t);return null == i && r && (i = r.getShallow(t)), i;}, getModel: function getModel(t, e) {var n,i = null == t ? this.option : Wa(this.option, t = this.parsePath(t));return e = e || (n = Xa(this, t)) && n.getModel(t), new Ha(i, e, this.ecModel);}, isEmpty: function isEmpty() {return null == this.option;}, restoreData: function restoreData() {}, clone: function clone() {var t = this.constructor;return new t(i(this.option));}, setReadOnly: function setReadOnly() {}, parsePath: function parsePath(t) {return "string" == typeof t && (t = t.split(".")), t;}, customizeGetParent: function customizeGetParent(t) {my(this).getParent = t;}, isAnimationEnabled: function isAnimationEnabled() {if (!dp.node) {if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();}} }, tr(Ha), er(Ha), vy(Ha, Av), vy(Ha, Pv), vy(Ha, fy), vy(Ha, gy);var yy = 0,xy = 1e-4,_y = 9007199254740991,wy = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,by = (Object.freeze || Object)({ linearMap: Ua, parsePercent: Ka, round: $a, asc: Qa, getPrecision: Ja, getPrecisionSafe: to, getPixelPrecision: eo, getPercentWithPrecision: no, MAX_SAFE_INTEGER: _y, remRadian: io, isRadianAroundZero: ro, parseDate: ao, quantity: oo, nice: lo, quantile: ho, reformIntervals: uo, isNumeric: co }),Sy = L,My = /([&<>"'])/g,Iy = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },Ty = ["a", "b", "c", "d", "e", "f", "g"],Cy = function Cy(t, e) {return "{" + t + (null == e ? "" : e) + "}";
  },Dy = Xn,Ay = (Object.freeze || Object)({ addCommas: fo, toCamelCase: po, normalizeCssArray: Sy, encodeHTML: go, formatTpl: vo, formatTplSimple: mo, getTooltipMarker: yo, formatTime: _o, capitalFirst: wo, truncateText: Dy, getTextBoundingRect: bo, getTextRect: So }),ky = f,Py = ["left", "right", "top", "bottom", "width", "height"],Ly = [["width", "left", "right"], ["height", "top", "bottom"]],Oy = Mo,zy = (x(Mo, "vertical"), x(Mo, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };} }),By = qi(),Ey = Ha.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {Ha.call(this, t, e, n, i), this.uid = Ya("ec_cpt_model");}, init: function init(t, e, n) {this.mergeDefaultAndTheme(t, n);}, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {var n = this.layoutMode,i = n ? Co(t) : {},a = e.getTheme();r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && To(t, i, n);}, mergeOption: function mergeOption(t) {r(this.option, t, !0);var e = this.layoutMode;e && To(this.option, t, e);}, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {var t = By(this);if (!t.defaultOption) {for (var e = [], n = this.constructor; n;) {var i = n.prototype.defaultOption;i && e.push(i), n = n.superClass;}for (var a = {}, o = e.length - 1; o >= 0; o--) {a = r(a, e[o], !0);}t.defaultOption = a;}return t.defaultOption;}, getReferringComponents: function getReferringComponents(t) {return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });} });rr(Ey, { registerWhenExtend: !0 }), qa(Ey), ja(Ey, Ao), c(Ey, zy);var Ny = "";"undefined" != typeof navigator && (Ny = navigator.platform || "");var Ry = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: Ny.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 },Fy = qi(),Vy = { clearColorPalette: function clearColorPalette() {Fy(this).colorIdx = 0, Fy(this).colorNameMap = {};}, getColorFromPalette: function getColorFromPalette(t, e, n) {e = e || this;var i = Fy(e),r = i.colorIdx || 0,a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = Ni(this.get("color", !0)),s = this.get("colorLayer", !0),l = null != n && s ? ko(s, n) : o;if (l = l || o, l && l.length) {var h = l[r];return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h;}} },Gy = { cartesian2d: function cartesian2d(t, e, n, i) {var r = t.getReferringComponents("xAxis")[0],a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Lo(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Lo(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);}, singleAxis: function singleAxis(t, e, n, i) {var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), Lo(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);}, polar: function polar(t, e, n, i) {var r = t.getReferringComponents("polar")[0],a = r.findAxisModel("radiusAxis"),o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Lo(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Lo(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);}, geo: function geo(t, e) {e.coordSysDims = ["lng", "lat"];}, parallel: function parallel(t, e, n, i) {var r = t.ecModel,a = r.getComponent("parallel", t.get("parallelIndex")),o = e.coordSysDims = a.dimensions.slice();f(a.parallelAxisIndex, function (t, a) {var s = r.getComponent("parallelAxis", t),l = o[a];n.set(l, s), Lo(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);});} },Hy = "original",Wy = "arrayRows",Xy = "objectRows",Yy = "keyedColumns",qy = "unknown",jy = "typedArray",Zy = "column",Uy = "row";Oo.seriesDataToSource = function (t) {return new Oo({ data: t, sourceFormat: I(t) ? jy : Hy, fromDataset: !1 });}, er(Oo);var Ky = qi(),$y = "\x00_ec_inner",Qy = Ha.extend({ init: function init(t, e, n, i) {n = n || {}, this.option = null, this._theme = new Ha(n), this._optionManager = i;}, setOption: function setOption(t, e) {O(!($y in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);}, resetOption: function resetOption(t) {var e = !1,n = this._optionManager;if (!t || "recreate" === t) {var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Zo.call(this, i), e = !0;}if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = !0);}if (!t || "recreate" === t || "media" === t) {var a = n.getMediaOption(this, this._api);a.length && f(a, function (t) {this.mergeOption(t, e = !0);}, this);}return e;}, mergeOption: function mergeOption(t) {function e(e, i) {var r = Ni(t[e]),s = Gi(a.get(e), r);Hi(s), f(s, function (t) {var n = t.option;S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Ko(e, n, t.exist));});var l = Uo(a, i);n[e] = [], a.set(e, []), f(s, function (t, i) {var r = t.exist,s = t.option;if (O(S(s) || r, "Empty component definition"), s) {var h = Ey.getClass(e, t.keyInfo.subType, !0);if (r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {var u = o({ dependentModels: l, componentIndex: i }, t.keyInfo);r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0);}} else r.mergeOption({}, this), r.optionUpdated({}, !1);a.get(e)[i] = r, n[e][i] = r.option;}, this), "series" === e && $o(this, a.get("series"));}var n = this.option,a = this._componentsMap,s = [];Eo(this), f(t, function (t, e) {null != t && (Ey.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0));}), Ey.topologicalTravel(s, Ey.getAllClassMainTypes(), e, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || []);}, getOption: function getOption() {var t = i(this.option);return f(t, function (e, n) {if (Ey.hasClass(n)) {for (var e = Ni(e), i = e.length - 1; i >= 0; i--) {Xi(e[i]) && e.splice(i, 1);}t[n] = e;}}), delete t[$y], t;}, getTheme: function getTheme() {return this._theme;}, getComponent: function getComponent(t, e) {var n = this._componentsMap.get(t);return n ? n[e || 0] : void 0;}, queryComponents: function queryComponents(t) {var e = t.mainType;if (!e) return [];var n = t.index,i = t.id,r = t.name,a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) _(n) || (n = [n]), o = v(p(n, function (t) {return a[t];}), function (t) {return !!t;});else if (null != i) {var s = _(i);o = v(a, function (t) {return s && h(i, t.id) >= 0 || !s && t.id === i;});} else if (null != r) {var l = _(r);o = v(a, function (t) {return l && h(r, t.name) >= 0 || !l && t.name === r;});} else o = a.slice();return Qo(o, t);}, findComponents: function findComponents(t) {function e(t) {var e = r + "Index",n = r + "Id",i = r + "Name";return !t || null == t[e] && null == t[n] && null == t[i] ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };}function n(e) {return t.filter ? v(e, t.filter) : e;}var i = t.query,r = t.mainType,a = e(i),o = a ? this.queryComponents(a) : this._componentsMap.get(r);return n(Qo(o, t));}, eachComponent: function eachComponent(t, e, n) {var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {f(t, function (t, r) {e.call(n, i, t, r);});});else if (b(t)) f(i.get(t), e, n);else if (S(t)) {var r = this.findComponents(t);f(r, e, n);}}, getSeriesByName: function getSeriesByName(t) {var e = this._componentsMap.get("series");return v(e, function (e) {return e.name === t;});}, getSeriesByIndex: function getSeriesByIndex(t) {return this._componentsMap.get("series")[t];}, getSeriesByType: function getSeriesByType(t) {var e = this._componentsMap.get("series");return v(e, function (e) {return e.subType === t;});}, getSeries: function getSeries() {return this._componentsMap.get("series").slice();}, getSeriesCount: function getSeriesCount() {return this._componentsMap.get("series").length;}, eachSeries: function eachSeries(t, e) {f(this._seriesIndices, function (n) {var i = this._componentsMap.get("series")[n];t.call(e, i, n);}, this);}, eachRawSeries: function eachRawSeries(t, e) {f(this._componentsMap.get("series"), t, e);}, eachSeriesByType: function eachSeriesByType(t, e, n) {f(this._seriesIndices, function (i) {var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);}, this);}, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {return f(this.getSeriesByType(t), e, n);}, isSeriesFiltered: function isSeriesFiltered(t) {return null == this._seriesIndicesMap.get(t.componentIndex);}, getCurrentSeriesIndices: function getCurrentSeriesIndices() {return (this._seriesIndices || []).slice();}, filterSeries: function filterSeries(t, e) {var n = v(this._componentsMap.get("series"), t, e);$o(this, n);}, restoreData: function restoreData(t) {var e = this._componentsMap;$o(this, e.get("series"));var n = [];e.each(function (t, e) {n.push(e);}), Ey.topologicalTravel(n, Ey.getAllClassMainTypes(), function (n) {f(e.get(n), function (e) {("series" !== n || !qo(e, t)) && e.restoreData();});});} });c(Qy, Vy);var Jy = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],tx = {};ts.prototype = { constructor: ts, create: function create(t, e) {var n = [];f(tx, function (i) {var r = i.create(t, e);n = n.concat(r || []);}), this._coordinateSystems = n;}, update: function update(t, e) {f(this._coordinateSystems, function (n) {n.update && n.update(t, e);});}, getCoordinateSystems: function getCoordinateSystems() {return this._coordinateSystems.slice();} }, ts.register = function (t, e) {tx[t] = e;}, ts.get = function (t) {return tx[t];};var ex = f,nx = i,ix = p,rx = r,ax = /^(min|max)?(.+)$/;es.prototype = { constructor: es, setOption: function setOption(t, e) {t && f(Ni(t.series), function (t) {t && t.data && I(t.data) && B(t.data);}), t = nx(t, !0);var n = this._optionBackup,i = ns.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (os(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;}, mountOption: function mountOption(t) {var e = this._optionBackup;return this._timelineOptions = ix(e.timelineOptions, nx), this._mediaList = ix(e.mediaList, nx), this._mediaDefault = nx(e.mediaDefault), this._currentMediaIndices = [], nx(t ? e.baseOption : this._newBaseOption);}, getTimelineOption: function getTimelineOption(t) {var e,n = this._timelineOptions;if (n.length) {var i = t.getComponent("timeline");i && (e = nx(n[i.getCurrentIndex()], !0));}return e;}, getMediaOption: function getMediaOption() {var t = this._api.getWidth(),e = this._api.getHeight(),n = this._mediaList,i = this._mediaDefault,r = [],a = [];if (!n.length && !i) return a;for (var o = 0, s = n.length; s > o; o++) {is(n[o].query, t, e) && r.push(o);}return !r.length && i && (r = [-1]), r.length && !as(r, this._currentMediaIndices) && (a = ix(r, function (t) {return nx(-1 === t ? i.option : n[t].option);})), this._currentMediaIndices = r, a;} };var ox = f,sx = S,lx = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],hx = function hx(t, e) {ox(fs(t.series), function (t) {sx(t) && ds(t);});var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ox(n, function (e) {ox(fs(t[e]), function (t) {t && (us(t, "axisLabel"), us(t.axisPointer, "label"));});}), ox(fs(t.parallel), function (t) {var e = t && t.parallelAxisDefault;us(e, "axisLabel"), us(e && e.axisPointer, "label");}), ox(fs(t.calendar), function (t) {ls(t, "itemStyle"), us(t, "dayLabel"), us(t, "monthLabel"), us(t, "yearLabel");}), ox(fs(t.radar), function (t) {us(t, "name");}), ox(fs(t.geo), function (t) {sx(t) && (cs(t), ox(fs(t.regions), function (t) {cs(t);}));}), ox(fs(t.timeline), function (t) {cs(t), ls(t, "label"), ls(t, "itemStyle"), ls(t, "controlStyle", !0);var e = t.data;_(e) && f(e, function (t) {S(t) && (ls(t, "label"), ls(t, "itemStyle"));});}), ox(fs(t.toolbox), function (t) {ls(t, "iconStyle"), ox(t.feature, function (t) {ls(t, "iconStyle");});}), us(ps(t.axisPointer), "label"), us(ps(t.tooltip).axisPointer, "label");},ux = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],cx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],dx = function dx(t, e) {hx(t, e), t.series = Ni(t.series), f(t.series, function (t) {if (S(t)) {var e = t.type;if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {var n = gs(t, "pointer.color");null != n && vs(t, "itemStyle.normal.color", n);}ms(t);}}), t.dataRange && (t.visualMap = t.dataRange), f(cx, function (e) {var n = t[e];n && (_(n) || (n = [n]), f(n, function (t) {ms(t);}));});},fx = function fx(t) {var e = R();t.eachSeries(function (t) {var n = t.get("stack");if (n) {var i = e.get(n) || e.set(n, []),r = t.getData(),a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);}}), e.each(ys);},px = xs.prototype;px.pure = !1, px.persistent = !0, px.getSource = function () {return this._source;};var gx = { arrayRows_column: { pure: !0, count: function count() {return Math.max(0, this._data.length - this._source.startIndex);}, getItem: function getItem(t) {return this._data[t + this._source.startIndex];}, appendData: bs }, arrayRows_row: { pure: !0, count: function count() {var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;}, getItem: function getItem(t) {t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {var r = n[i];e.push(r ? r[t] : null);}return e;}, appendData: function appendData() {throw new Error('Do not support appendData when set seriesLayoutBy: "row".');} }, objectRows: { pure: !0, count: _s, getItem: ws, appendData: bs }, keyedColumns: { pure: !0, count: function count() {var t = this._source.dimensionsDefine[0].name,e = this._data[t];return e ? e.length : 0;}, getItem: function getItem(t) {for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {var r = this._data[n[i].name];e.push(r ? r[t] : null);}return e;}, appendData: function appendData(t) {var e = this._data;f(t, function (t, n) {for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {i.push(t[r]);}});} }, original: { count: _s, getItem: ws, appendData: bs }, typedArray: { persistent: !1, pure: !0, count: function count() {return this._data ? this._data.length / this._dimSize : 0;}, getItem: function getItem(t, e) {t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) {e[i] = this._data[n + i];}return e;}, appendData: function appendData(t) {this._data = t;}, clean: function clean() {this._offset += this.count(), this._data = null;} } },vx = { arrayRows: Ss, objectRows: function objectRows(t, e, n, i) {return null != n ? t[i] : t;}, keyedColumns: Ss, original: function original(t, e, n) {var i = Fi(t);return null != n && i instanceof Array ? i[n] : i;}, typedArray: Ss },mx = { arrayRows: Ms, objectRows: function objectRows(t, e) {return Is(t[e], this._dimensionInfos[e]);}, keyedColumns: Ms, original: function original(t, e, n, i) {var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && Vi(t) && (this.hasItemOption = !0), Is(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);}, typedArray: function typedArray(t, e, n, i) {return t[i];} },yx = /\{@(.+?)\}/g,xx = { getDataParams: function getDataParams(t, e) {var n = this.getData(e),i = this.getRawValue(t, e),r = n.getRawIndex(t),a = n.getName(t),o = n.getRawDataItem(t),s = n.getItemVisual(t, "color"),l = this.ecModel.getComponent("tooltip"),h = l && l.get("renderMode"),u = $i(h),c = this.mainType,d = "series" === c;return { componentType: c, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: d ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: d ? this.id : null, seriesName: d ? this.name : null, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, marker: yo({ color: s, renderMode: u }), $vars: ["seriesName", "name", "value"] };}, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {e = e || "normal";var a = this.getData(n),o = a.getItemModel(t),s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, l(s);if ("string" == typeof l) {var h = vo(l, s);return h.replace(yx, function (e, n) {var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Ts(a, t, n);});}}, getRawValue: function getRawValue(t, e) {return Ts(this.getData(e), t);}, formatTooltip: function formatTooltip() {} },_x = As.prototype;_x.perform = function (t) {function e(t) {return !(t >= 1) && (t = 1), t;}var n = this._upstream,i = t && t.skip;if (this._dirty && n) {var r = this.context;r.data = r.outputData = n.context.outputData;}this.__pipeline && (this.__pipeline.currentTask = this);var a;this._plan && !i && (a = this._plan(this.context));var o = e(this._modBy),s = this._modDataCount || 0,l = e(t && t.modBy),h = t && t.modDataCount || 0;(o !== l || s !== h) && (a = "reset");var u;(this._dirty || "reset" === a) && (this._dirty = !1, u = Ps(this, i)), this._modBy = l, this._modDataCount = h;var c = t && t.step;if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {var d = this._dueIndex,f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);if (!i && (u || f > d)) {var p = this._progress;if (_(p)) for (var g = 0; g < p.length; g++) {ks(this, p[g], d, f, l, h);} else ks(this, p, d, f, l, h);}this._dueIndex = f;var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;this._outputDueEnd = v;} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();};var bx = function () {function t() {return n > i ? i++ : null;}function e() {var t = i % o * r + Math.ceil(i / o),e = i >= n ? null : a > t ? t : i;return i++, e;}var n,i,r,a,o,s = { reset: function reset(l, h, u, c) {i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;} };return s;}();_x.dirty = function () {this._dirty = !0, this._onDirty && this._onDirty(this.context);}, _x.unfinished = function () {return this._progress && this._dueIndex < this._dueEnd;}, _x.pipe = function (t) {(this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());}, _x.dispose = function () {this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);}, _x.getUpstream = function () {return this._upstream;}, _x.getDownstream = function () {return this._downstream;}, _x.setOutputEnd = function (t) {this._outputDueEnd = this._settedOutputEnd = t;};var Sx = qi(),Mx = Ey.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendDataProvider: null, visualColorAccessPath: "itemStyle.color", layoutMode: null, init: function init(t, e, n) {this.seriesIndex = this.componentIndex, this.dataTask = Ds({ count: zs, reset: Bs }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), No(this);var i = this.getInitialData(t, n);Ns(i, this), this.dataTask.context.data = i, Sx(this).dataBeforeProcessed = i, Ls(this);}, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {var n = this.layoutMode,i = n ? Co(t) : {},a = this.subType;Ey.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Ri(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && To(t, i, n);}, mergeOption: function mergeOption(t, e) {t = r(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && To(this.option, t, n), No(this);var i = this.getInitialData(t, e);Ns(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Sx(this).dataBeforeProcessed = i, Ls(this);}, fillDataTextStyle: function fillDataTextStyle(t) {if (t && !I(t)) for (var e = ["show"], n = 0; n < t.length; n++) {t[n] && t[n].label && Ri(t[n], "label", e);}}, getInitialData: function getInitialData() {}, appendData: function appendData(t) {var e = this.getRawData();e.appendData(t.data);}, getData: function getData(t) {var e = Fs(this);if (e) {var n = e.context.data;return null == t ? n : n.getLinkedData(t);}return Sx(this).data;}, setData: function setData(t) {var e = Fs(this);if (e) {var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);}Sx(this).data = t;}, getSource: function getSource() {return Bo(this);}, getRawData: function getRawData() {return Sx(this).dataBeforeProcessed;}, getBaseAxis: function getBaseAxis() {var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();}, formatTooltip: function formatTooltip(t, e, n, i) {function r(n) {function r(t, n) {var r = c.getDimensionInfo(n);if (r && r.otherDims.tooltip !== !1) {var d = r.type,f = "sub" + o.seriesIndex + "at" + u,p = yo({ color: y, type: "subItem", renderMode: i, markerId: f }),g = "string" == typeof p ? p : p.content,v = (a ? g + go(r.displayName || "-") + ": " : "") + go("ordinal" === d ? t + "" : "time" === d ? e ? "" : _o("yyyy/MM/dd hh:mm:ss", t) : fo(t));v && s.push(v), l && (h[f] = y, ++u);}}var a = g(n, function (t, e, n) {var i = c.getDimensionInfo(n);return t |= i && i.tooltip !== !1 && null != i.displayName;}, 0),s = [];d.length ? f(d, function (e) {r(Ts(c, t, e), e);}) : f(n, r);var p = a ? l ? "\n" : "<br/>" : "",v = p + s.join(p || ", ");return { renderMode: i, content: v, style: h };}function a(t) {return { renderMode: i, content: go(fo(t)), style: h };}var o = this;i = i || "html";var s = "html" === i ? "<br/>" : "\n",l = "richText" === i,h = {},u = 0,c = this.getData(),d = c.mapDimension("defaultedTooltip", !0),p = d.length,v = this.getRawValue(t),m = _(v),y = c.getItemVisual(t, "color");S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";var x = p > 1 || m && !p ? r(v) : a(p ? Ts(c, t, d[0]) : m ? v[0] : v),w = x.content,b = o.seriesIndex + "at" + u,M = yo({ color: y, type: "item", renderMode: i, markerId: b });h[b] = y, ++u;var I = c.getName(t),T = this.name;Wi(this) || (T = ""), T = T ? go(T) + (e ? ": " : s) : "";var C = "string" == typeof M ? M : M.content,D = e ? C + T + w : T + C + (I ? go(I) + ": " + w : w);return { html: D, markers: h };}, isAnimationEnabled: function isAnimationEnabled() {if (dp.node) return !1;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;}, restoreData: function restoreData() {this.dataTask.dirty();}, getColorFromPalette: function getColorFromPalette(t, e, n) {var i = this.ecModel,r = Vy.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;}, coordDimToDataDim: function coordDimToDataDim(t) {return this.getRawData().mapDimension(t, !0);}, getProgressive: function getProgressive() {return this.get("progressive");}, getProgressiveThreshold: function getProgressiveThreshold() {return this.get("progressiveThreshold");}, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });c(Mx, xx), c(Mx, Vy);var Ix = function Ix() {this.group = new bg(), this.uid = Ya("viewComponent");};Ix.prototype = { constructor: Ix, init: function init() {}, render: function render() {}, dispose: function dispose() {}, filterForExposedEvent: null };var Tx = Ix.prototype;Tx.updateView = Tx.updateLayout = Tx.updateVisual = function () {}, tr(Ix), rr(Ix, { registerWhenExtend: !0 });var Cx = function Cx() {var t = qi();return function (e) {var n = t(e),i = e.pipelineContext,r = n.large,a = n.progressiveRender,o = n.large = i.large,s = n.progressiveRender = i.progressiveRender;return !!(r ^ o || a ^ s) && "reset";};},Dx = qi(),Ax = Cx();Vs.prototype = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, n, i) {Hs(t.getData(), i, "emphasis");}, downplay: function downplay(t, e, n, i) {Hs(t.getData(), i, "normal");}, remove: function remove() {this.group.removeAll();}, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var kx = Vs.prototype;kx.updateView = kx.updateLayout = kx.updateVisual = function (t, e, n, i) {this.render(t, e, n, i);}, tr(Vs, ["dispose"]), rr(Vs, { registerWhenExtend: !0 }), Vs.markUpdateMethod = function (t, e) {Dx(t).updateMethod = e;};var Px = { incrementalPrepareRender: { progress: function progress(t, e) {e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);} }, render: { forceFirstProgress: !0, progress: function progress(t, e) {e.view.render(e.model, e.ecModel, e.api, e.payload);} } },Lx = "\x00__throttleOriginMethod",Ox = "\x00__throttleRate",zx = "\x00__throttleType",Bx = { createOnAllSeries: !0, performRawSeries: !0, reset: function reset(t, e) {var n = t.getData(),i = (t.visualColorAccessPath || "itemStyle.color").split("."),r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {"function" != typeof r || r instanceof Jm || n.each(function (e) {n.setItemVisual(e, "color", r(t.getDataParams(e)));});var a = function a(t, e) {var n = t.getItemModel(e),r = n.get(i, !0);null != r && t.setItemVisual(e, "color", r);};return { dataEach: n.hasItemOption ? a : null };}} },Ex = { toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },Nx = function Nx(t, e) {function n(t, e) {if ("string" != typeof t) return t;var n = t;return f(e, function (t, e) {n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);}), n;}function i(t) {var e = o.get(t);if (null == e) {for (var n = t.split("."), i = Ex.aria, r = 0; r < n.length; ++r) {i = i[n[r]];}return i;}return e;}function r() {var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;}function a(t) {return Ex.series.typeNames[t] || "自定义图";}var o = e.getModel("aria");if (o.get("show")) {if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));var s = 0;e.eachSeries(function () {++s;}, this);var l,h = o.get("data.maxCount") || 10,u = o.get("series.maxCount") || 10,c = Math.min(s, u);if (!(1 > s)) {var d = r();l = d ? n(i("general.withTitle"), { title: d }) : i("general.withoutTitle");var p = [],g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";l += n(i(g), { seriesCount: s }), e.eachSeries(function (t, e) {if (c > e) {var r,o = t.get("name"),l = "series." + (s > 1 ? "multiple" : "single") + ".";r = i(o ? l + "withName" : l + "withoutName"), r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: a(t.subType) });var u = t.getData();window.data = u, r += u.count() > h ? n(i("data.partialData"), { displayCnt: h }) : i("data.allData");for (var d = [], f = 0; f < u.count(); f++) {if (h > f) {var g = u.getName(f),v = Ts(u, f);d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));}}r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);}}), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);}}},Rx = Math.PI,Fx = function Fx(t, e) {e = e || {}, s(e, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var n = new qm({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),i = new $m({ shape: { startAngle: -Rx / 2, endAngle: -Rx / 2 + .1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),r = new qm({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });i.animateShape(!0).when(1e3, { endAngle: 3 * Rx / 2 }).start("circularInOut"), i.animateShape(!0).when(1e3, { startAngle: 3 * Rx / 2 }).delay(300).start("circularInOut");var a = new bg();return a.add(i), a.add(r), a.add(n), a.resize = function () {var e = t.getWidth() / 2,a = t.getHeight() / 2;i.setShape({ cx: e, cy: a });var o = i.shape.r;r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });}, a.resize(), a;},Vx = js.prototype;Vx.restoreData = function (t, e) {t.restoreData(e), this._stageTaskMap.each(function (t) {var e = t.overallTask;e && e.dirty();});}, Vx.getPerformArgs = function (t, e) {if (t.__pipeline) {var n = this._pipelineMap.get(t.__pipeline.id),i = n.context,r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,a = r ? n.step : null,o = i && i.modDataCount,s = null != o ? Math.ceil(o / a) : null;return { step: a, modBy: s, modDataCount: o };}}, Vx.getPipeline = function (t) {return this._pipelineMap.get(t);}, Vx.updateStreamModes = function (t, e) {var n = this._pipelineMap.get(t.uid),i = t.getData(),r = i.count(),a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,o = t.get("large") && r >= t.get("largeThreshold"),s = "mod" === t.get("progressiveChunkMode") ? r : null;t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };}, Vx.restorePipelines = function (t) {var e = this,n = e._pipelineMap = R();t.eachSeries(function (t) {var i = t.getProgressive(),r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), al(e, t, t.dataTask);});}, Vx.prepareStageTasks = function () {var t = this._stageTaskMap,e = this.ecInstance.getModel(),n = this.api;f(this._allHandlers, function (i) {var r = t.get(i.uid) || t.set(i.uid, []);i.reset && Us(this, i, r, e, n), i.overallReset && Ks(this, i, r, e, n);}, this);}, Vx.prepareView = function (t, e, n, i) {var r = t.renderTask,a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, al(this, e, r);}, Vx.performDataProcessorTasks = function (t, e) {Zs(this, this._dataProcessorHandlers, t, e, { block: !0 });}, Vx.performVisualTasks = function (t, e, n) {Zs(this, this._visualHandlers, t, e, n);}, Vx.performSeriesTasks = function (t) {var e;t.eachSeries(function (t) {e |= t.dataTask.perform();}), this.unfinished |= e;}, Vx.plan = function () {this._pipelineMap.each(function (t) {var e = t.tail;do {if (e.__block) {t.blockIndex = e.__idxInPipeline;break;}e = e.getUpstream();} while (e);});};var Gx = Vx.updatePayload = function (t, e) {"remain" !== e && (t.context.payload = e);},Hx = il(0);js.wrapStageHandler = function (t, e) {return w(t) && (t = { overallReset: t, seriesType: ol(t) }), t.uid = Ya("stageHandler"), e && (t.visualType = e), t;};var Wx,Xx = {},Yx = {};sl(Xx, Qy), sl(Yx, Jo), Xx.eachSeriesByType = Xx.eachRawSeriesByType = function (t) {Wx = t;}, Xx.eachComponent = function (t) {"series" === t.mainType && t.subType && (Wx = t.subType);};var qx = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],jx = { color: qx, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], qx] },Zx = "#eee",Ux = function Ux() {return { axisLine: { lineStyle: { color: Zx } }, axisTick: { lineStyle: { color: Zx } }, axisLabel: { textStyle: { color: Zx } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: Zx } } };},Kx = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],$x = { color: Kx, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: Zx }, crossStyle: { color: Zx } } }, legend: { textStyle: { color: Zx } }, textStyle: { color: Zx }, title: { textStyle: { color: Zx } }, toolbox: { iconStyle: { normal: { borderColor: Zx } } }, dataZoom: { textStyle: { color: Zx } }, visualMap: { textStyle: { color: Zx } }, timeline: { lineStyle: { color: Zx }, itemStyle: { normal: { color: Kx[1] } }, label: { normal: { textStyle: { color: Zx } } }, controlStyle: { normal: { color: Zx, borderColor: Zx } } }, timeAxis: Ux(), logAxis: Ux(), valueAxis: Ux(), categoryAxis: Ux(), line: { symbol: "circle" }, graph: { color: Kx }, gauge: { title: { textStyle: { color: Zx } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };$x.categoryAxis.splitLine.show = !1, Ey.extend({ type: "dataset", defaultOption: { seriesLayoutBy: Zy, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function optionUpdated() {zo(this);} }), Ix.extend({ type: "dataset" });var Qx = Rr.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function buildPath(t, e) {var n = .5522848,i = e.cx,r = e.cy,a = e.rx,o = e.ry,s = a * n,l = o * n;t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath();} }),Jx = /[\s,]+/;hl.prototype.parse = function (t, e) {e = e || {};var n = ll(t);if (!n) throw new Error("Illegal svg");var i = new bg();this._root = i;var r = n.getAttribute("viewBox") || "",a = parseFloat(n.getAttribute("width") || e.width),o = parseFloat(n.getAttribute("height") || e.height);isNaN(a) && (a = null), isNaN(o) && (o = null), fl(n, i, null, !0);for (var s = n.firstChild; s;) {this._parseNode(s, i), s = s.nextSibling;}var l, h;if (r) {var u = z(r).split(Jx);u.length >= 4 && (l = { x: parseFloat(u[0] || 0), y: parseFloat(u[1] || 0), width: parseFloat(u[2]), height: parseFloat(u[3]) });}if (l && null != a && null != o && (h = ml(l, a, o), !e.ignoreViewBox)) {var c = i;i = new bg(), i.add(c), c.scale = h.scale.slice(), c.position = h.position.slice();}return e.ignoreRootClip || null == a || null == o || i.setClipPath(new qm({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: h };}, hl.prototype._parseNode = function (t, e) {var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);var i;if (this._isDefine) {var r = e_[n];if (r) {var a = r.call(this, t),o = t.getAttribute("id");o && (this._defs[o] = a);}} else {var r = t_[n];r && (i = r.call(this, t, e), e.add(i));}for (var s = t.firstChild; s;) {1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;}"defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1);
  }, hl.prototype._parseText = function (t, e) {if (1 === t.nodeType) {var n = t.getAttribute("dx") || 0,i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);}var r = new zm({ style: { text: t.textContent, transformText: !0 }, position: [this._textX || 0, this._textY || 0] });cl(e, r), fl(t, r, this._defs);var a = r.style.fontSize;a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);var o = r.getBoundingRect();return this._textX += o.width, e.add(r), r;};var t_ = { g: function g(t, e) {var n = new bg();return cl(e, n), fl(t, n, this._defs), n;}, rect: function rect(t, e) {var n = new qm();return cl(e, n), fl(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;}, circle: function circle(t, e) {var n = new Bm();return cl(e, n), fl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;}, line: function line(t, e) {var n = new Zm();return cl(e, n), fl(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;}, ellipse: function ellipse(t, e) {var n = new Qx();return cl(e, n), fl(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;}, polygon: function polygon(t, e) {var n = t.getAttribute("points");n && (n = dl(n));var i = new Hm({ shape: { points: n || [] } });return cl(e, i), fl(t, i, this._defs), i;}, polyline: function polyline(t, e) {var n = new Rr();cl(e, n), fl(t, n, this._defs);var i = t.getAttribute("points");i && (i = dl(i));var r = new Wm({ shape: { points: i || [] } });return r;}, image: function image(t, e) {var n = new _i();return cl(e, n), fl(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;}, text: function text(t, e) {var n = t.getAttribute("x") || 0,i = t.getAttribute("y") || 0,r = t.getAttribute("dx") || 0,a = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);var o = new bg();return cl(e, o), fl(t, o, this._defs), o;}, tspan: function tspan(t, e) {var n = t.getAttribute("x"),i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,a = t.getAttribute("dy") || 0,o = new bg();return cl(e, o), fl(t, o, this._defs), this._textX += r, this._textY += a, o;}, path: function path(t, e) {var n = t.getAttribute("d") || "",i = Hr(n);return cl(e, i), fl(t, i, this._defs), i;} },e_ = { lineargradient: function lineargradient(t) {var e = parseInt(t.getAttribute("x1") || 0, 10),n = parseInt(t.getAttribute("y1") || 0, 10),i = parseInt(t.getAttribute("x2") || 10, 10),r = parseInt(t.getAttribute("y2") || 0, 10),a = new ty(e, n, i, r);return ul(t, a), a;}, radialgradient: function radialgradient() {} },n_ = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },i_ = /url\(\s*#(.*?)\)/,r_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,a_ = /([^\s:;]+)\s*:\s*([^:;]+)/g,o_ = R(),s_ = { registerMap: function registerMap(t, e, n) {var i;return _(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), f(i, function (t) {var e = t.type;"geoJson" === e && (e = t.type = "geoJSON");var n = l_[e];n(t);}), o_.set(t, i);}, retrieveMap: function retrieveMap(t) {return o_.get(t);} },l_ = { geoJSON: function geoJSON(t) {var e = t.source;t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;}, svg: function svg(t) {t.svgXML = ll(t.source);} },h_ = O,u_ = f,c_ = w,d_ = S,f_ = Ey.parseClassType,p_ = "4.2.1",g_ = { zrender: "4.0.6" },v_ = 1,m_ = 1e3,y_ = 5e3,x_ = 1e3,__ = 2e3,w_ = 3e3,b_ = 4e3,S_ = 5e3,M_ = { PROCESSOR: { FILTER: m_, STATISTIC: y_ }, VISUAL: { LAYOUT: x_, GLOBAL: __, CHART: w_, COMPONENT: b_, BRUSH: S_ } },I_ = "__flagInMainProcess",T_ = "__optionUpdated",C_ = /^[a-zA-Z0-9_]+$/;xl.prototype.on = yl("on"), xl.prototype.off = yl("off"), xl.prototype.one = yl("one"), c(xl, zp);var D_ = _l.prototype;D_._onframe = function () {if (!this._disposed) {var t = this._scheduler;if (this[T_]) {var e = this[T_].silent;this[I_] = !0, bl(this), A_.update.call(this), this[I_] = !1, this[T_] = !1, Tl.call(this, e), Cl.call(this, e);} else if (t.unfinished) {var n = v_,i = this._model,r = this._api;t.unfinished = !1;do {var a = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), Ml(this, i), t.performVisualTasks(i), Ol(this, this._model, r, "remain"), n -= +new Date() - a;} while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();}}}, D_.getDom = function () {return this._dom;}, D_.getZr = function () {return this._zr;}, D_.setOption = function (t, e, n) {var i;if (d_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[I_] = !0, !this._model || e) {var r = new es(this._api),a = this._theme,o = this._model = new Qy(null, null, a, r);o.scheduler = this._scheduler, o.init(null, null, a, r);}this._model.setOption(t, z_), n ? (this[T_] = { silent: i }, this[I_] = !1) : (bl(this), A_.update.call(this), this._zr.flush(), this[T_] = !1, this[I_] = !1, Tl.call(this, i), Cl.call(this, i));}, D_.setTheme = function () {console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");}, D_.getModel = function () {return this._model;}, D_.getOption = function () {return this._model && this._model.getOption();}, D_.getWidth = function () {return this._zr.getWidth();}, D_.getHeight = function () {return this._zr.getHeight();}, D_.getDevicePixelRatio = function () {return this._zr.painter.dpr || window.devicePixelRatio || 1;}, D_.getRenderedCanvas = function (t) {if (dp.canvasSupported) {t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr;return e.painter.getRenderedCanvas(t);}}, D_.getSvgDataUrl = function () {if (dp.svgSupported) {var t = this._zr,e = t.storage.getDisplayList();return f(e, function (t) {t.stopAnimation(!0);}), t.painter.pathToDataUrl();}}, D_.getDataURL = function (t) {t = t || {};var e = t.excludeComponents,n = this._model,i = [],r = this;u_(e, function (t) {n.eachComponent({ mainType: t }, function (t) {var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = !0);});});var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return u_(i, function (t) {t.group.ignore = !1;}), a;}, D_.getConnectedDataURL = function (t) {if (dp.canvasSupported) {var e = this.group,n = Math.min,r = Math.max,a = 1 / 0;if (V_[e]) {var o = a,s = a,l = -a,h = -a,u = [],c = t && t.pixelRatio || 1;f(F_, function (a) {if (a.group === e) {var c = a.getRenderedCanvas(i(t)),d = a.getDom().getBoundingClientRect();o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({ dom: c, left: d.left, top: d.top });}}), o *= c, s *= c, l *= c, h *= c;var d = l - o,p = h - s,g = Sp();g.width = d, g.height = p;var v = Li(g);return u_(u, function (t) {var e = new _i({ style: { x: t.left * c - o, y: t.top * c - s, image: t.dom } });v.add(e);}), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));}return this.getDataURL(t);}}, D_.convertToPixel = x(wl, "convertToPixel"), D_.convertFromPixel = x(wl, "convertFromPixel"), D_.containPixel = function (t, e) {var n,i = this._model;return t = ji(i, t), f(t, function (t, i) {i.indexOf("Models") >= 0 && f(t, function (t) {var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));}}, this);}, this), !!n;}, D_.getVisual = function (t, e) {var n = this._model;t = ji(n, t, { defaultMainType: "series" });var i = t.seriesModel,r = i.getData(),a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;return null != a ? r.getItemVisual(a, e) : r.getVisual(e);}, D_.getViewOfComponentModel = function (t) {return this._componentsMap[t.__viewId];}, D_.getViewOfSeriesModel = function (t) {return this._chartsMap[t.__viewId];};var A_ = { prepareAndUpdate: function prepareAndUpdate(t) {bl(this), A_.update.call(this, t);}, update: function update(t) {var e = this._model,n = this._api,i = this._zr,r = this._coordSysMgr,a = this._scheduler;if (e) {a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Ml(this, e), r.update(e, n), kl(e), a.performVisualTasks(e, t), Pl(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (dp.canvasSupported) i.setBackgroundColor(o);else {var s = qe(o);o = en(s, "rgb"), 0 === s[3] && (o = "transparent");}zl(e, n);}}, updateTransform: function updateTransform(t) {var e = this._model,n = this,i = this._api;if (e) {var r = [];e.eachComponent(function (a, o) {var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);} else r.push(s);});var a = R();e.eachSeries(function (r) {var o = n._chartsMap[r.__viewId];if (o.updateTransform) {var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);} else a.set(r.uid, 1);}), kl(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }), Ol(n, e, i, t, a), zl(e, this._api);}}, updateView: function updateView(t) {var e = this._model;e && (Vs.markUpdateMethod(t, "updateView"), kl(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), Pl(this, this._model, this._api, t), zl(e, this._api));}, updateVisual: function updateVisual(t) {A_.update.call(this, t);}, updateLayout: function updateLayout(t) {A_.update.call(this, t);} };D_.resize = function (t) {this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {var n = e.resetOption("media"),i = t && t.silent;this[I_] = !0, n && bl(this), A_.update.call(this), this[I_] = !1, Tl.call(this, i), Cl.call(this, i);}}, D_.showLoading = function (t, e) {if (d_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), R_[t]) {var n = R_[t](this._api, e),i = this._zr;this._loadingFX = n, i.add(n);}}, D_.hideLoading = function () {this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;}, D_.makeActionFromEvent = function (t) {var e = o({}, t);return e.type = L_[t.type], e;}, D_.dispatchAction = function (t, e) {if (d_(e) || (e = { silent: !!e }), P_[t.type] && this._model) {if (this[I_]) return void this._pendingActions.push(t);Il.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && dp.browser.weChat && this._throttledZrFlush(), Tl.call(this, e.silent), Cl.call(this, e.silent);}}, D_.appendData = function (t) {var e = t.seriesIndex,n = this.getModel(),i = n.getSeriesByIndex(e);i.appendData(t), this._scheduler.unfinished = !0;}, D_.on = yl("on"), D_.off = yl("off"), D_.one = yl("one");var k_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];D_._initEvents = function () {u_(k_, function (t) {var e = function e(_e3) {var n,i = this.getModel(),r = _e3.target,a = "globalout" === t;if (a) n = {};else if (r && null != r.dataIndex) {var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};} else r && r.eventData && (n = o({}, r.eventData));if (n) {var l = n.componentType,h = n.componentIndex;("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", h = n.seriesIndex);var u = l && null != h && i.getComponent(l, h),c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];n.event = _e3, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: u, view: c }, this.trigger(t, n);}};e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this);}, this), u_(L_, function (t, e) {this._messageCenter.on(e, function (t) {this.trigger(e, t);}, this);}, this);}, D_.isDisposed = function () {return this._disposed;}, D_.clear = function () {this.setOption({ series: [] }, !0);}, D_.dispose = function () {if (!this._disposed) {this._disposed = !0, Ui(this.getDom(), W_, "");var t = this._api,e = this._model;u_(this._componentsViews, function (n) {n.dispose(e, t);}), u_(this._chartsViews, function (n) {n.dispose(e, t);}), this._zr.dispose(), delete F_[this.id];}}, c(_l, zp), Fl.prototype = { constructor: Fl, normalizeQuery: function normalizeQuery(t) {var e = {},n = {},i = {};if (b(t)) {var r = f_(t);e.mainType = r.main || null, e.subType = r.sub || null;} else {var a = ["Index", "Name", "Id"],o = { name: 1, dataIndex: 1, dataType: 1 };f(t, function (t, r) {for (var s = !1, l = 0; l < a.length; l++) {var h = a[l],u = r.lastIndexOf(h);if (u > 0 && u === r.length - h.length) {var c = r.slice(0, u);"data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0);}}o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);});}return { cptQuery: e, dataQuery: n, otherQuery: i };}, filter: function filter(t, e) {function n(t, e, n, i) {return null == t[n] || e[i || n] === t[n];}var i = this.eventInfo;if (!i) return !0;var r = i.targetEl,a = i.packedEvent,o = i.model,s = i.view;if (!o || !s) return !0;var l = e.cptQuery,h = e.dataQuery;return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(h, a, "name") && n(h, a, "dataIndex") && n(h, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));}, afterTrigger: function afterTrigger() {this.eventInfo = null;} };var P_ = {},L_ = {},O_ = [],z_ = [],B_ = [],E_ = [],N_ = {},R_ = {},F_ = {},V_ = {},G_ = new Date() - 0,H_ = new Date() - 0,W_ = "_echarts_instance_",X_ = Wl;eh(__, Bx), Zl(dx), Ul(y_, fx), ih("default", Fx), $l({ type: "highlight", event: "highlight", update: "highlight" }, V), $l({ type: "downplay", event: "downplay", update: "downplay" }, V), jl("light", jx), jl("dark", $x);var Y_ = {};dh.prototype = { constructor: dh, add: function add(t) {return this._add = t, this;}, update: function update(t) {return this._update = t, this;}, remove: function remove(t) {return this._remove = t, this;}, execute: function execute() {var t,e = this._old,n = this._new,i = {},r = {},a = [],o = [];for (fh(e, i, a, "_oldKeyGetter", this), fh(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {var s = a[t],l = r[s];if (null != l) {var h = l.length;h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t);} else this._remove && this._remove(t);}for (var t = 0; t < o.length; t++) {var s = o[t];if (r.hasOwnProperty(s)) {var l = r[s];if (null == l) continue;if (l.length) for (var u = 0, h = l.length; h > u; u++) {this._add && this._add(l[u]);} else this._add && this._add(l);}}} };var q_ = R(["tooltip", "label", "itemName", "itemId", "seriesName"]),j_ = S,Z_ = "undefined",U_ = -1,K_ = "e\x00\x00",$_ = { "float": typeof Float64Array === Z_ ? Array : Float64Array, "int": typeof Int32Array === Z_ ? Array : Int32Array, ordinal: Array, number: Array, time: Array },Q_ = typeof Uint32Array === Z_ ? Array : Uint32Array,J_ = typeof Int32Array === Z_ ? Array : Int32Array,tw = typeof Uint16Array === Z_ ? Array : Uint16Array,ew = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],nw = ["_extent", "_approximateExtent", "_rawExtent"],iw = function iw(t, e) {t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {var o = t[a];b(o) && (o = { name: o });var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);}this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = ph(this), this._invertedIndicesMap = r, this._calculationInfo = {};},rw = iw.prototype;rw.type = "list", rw.hasItemOption = !0, rw.getDimension = function (t) {return isNaN(t) || (t = this.dimensions[t] || t), t;}, rw.getDimensionInfo = function (t) {return this._dimensionInfos[this.getDimension(t)];}, rw.getDimensionsOnCoord = function () {return this._dimensionsSummary.dataDimsOnCoord.slice();}, rw.mapDimension = function (t, e) {var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return e === !0 ? (i || []).slice() : i && i[e];}, rw.initData = function (t, e, n) {var i = Oo.isInstance(t) || d(t);i && (t = new xs(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = mx[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = mx.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);}, rw.getProvider = function () {return this._rawData;}, rw.appendData = function (t) {var e = this._rawData,n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);}, rw.appendValues = function (t, e) {for (var n = this._chunkSize, i = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), h = this._chunkCount, u = 0; a > u; u++) {var c = r[u];o[c] || (o[c] = Ah()), i[c] || (i[c] = []), _h(i, this._dimensionInfos[c], n, h, l), this._chunkCount = i[c].length;}for (var d = new Array(a), f = s; l > f; f++) {for (var p = f - s, g = Math.floor(f / n), v = f % n, m = 0; a > m; m++) {var c = r[m],y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);i[c][g][v] = y;var x = o[c];y < x[0] && (x[0] = y), y > x[1] && (x[1] = y);}e && (this._nameList[f] = e[p]);}this._rawCount = this._count = l, this._extent = {}, wh(this);}, rw._initDataFromProvider = function (t, e) {if (!(t >= e)) {for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {var g = o[p];c[g] || (c[g] = Ah());var v = l[g];0 === v.otherDims.itemName && (n = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), _h(a, v, i, f, e), this._chunkCount = a[g].length;}for (var m = new Array(s), y = t; e > y; y++) {m = r.getItem(y, m);for (var x = Math.floor(y / i), _ = y % i, w = 0; s > w; w++) {var g = o[w],b = a[g][x],S = this._dimValueGetter(m, g, y, w);b[_] = S;var M = c[g];S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);}if (!r.pure) {var I = h[y];if (m && null == I) if (null != m.name) h[y] = I = m.name;else if (null != n) {var T = o[n],C = a[T][x];if (C) {I = C[_];var D = l[T].ordinalMeta;D && D.categories.length && (I = D.categories[I]);}}var A = null == m ? null : m.id;null == A && null != I && (d[I] = d[I] || 0, A = I, d[I] > 0 && (A += "__ec__" + d[I]), d[I]++), null != A && (u[y] = A);}}!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, wh(this);}}, rw.count = function () {return this._count;}, rw.getIndices = function () {var t,e = this._indices;if (e) {var n = e.constructor,i = this._count;if (n === Array) {t = new n(i);for (var r = 0; i > r; r++) {t[r] = e[r];}} else t = new n(e.buffer, 0, i);} else for (var n = mh(this), t = new n(this.count()), r = 0; r < t.length; r++) {t[r] = r;}return t;}, rw.get = function (t, e) {if (!(e >= 0 && e < this._count)) return 0 / 0;var n = this._storage;if (!n[t]) return 0 / 0;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),r = e % this._chunkSize,a = n[t][i],o = a[r];return o;}, rw.getByRawIndex = function (t, e) {if (!(e >= 0 && e < this._rawCount)) return 0 / 0;var n = this._storage[t];if (!n) return 0 / 0;var i = Math.floor(e / this._chunkSize),r = e % this._chunkSize,a = n[i];return a[r];}, rw._getFast = function (t, e) {var n = Math.floor(e / this._chunkSize),i = e % this._chunkSize,r = this._storage[t][n];return r[i];}, rw.getValues = function (t, e) {var n = [];_(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; r > i; i++) {n.push(this.get(t[i], e));}return n;}, rw.hasValue = function (t) {for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) {if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;}return !0;}, rw.getDataExtent = function (t) {t = this.getDimension(t);var e = this._storage[t],n = Ah();if (!e) return n;var i,r = this.count(),a = !this._indices;if (a) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var o = i[0], s = i[1], l = 0; r > l; l++) {var h = this._getFast(t, this.getRawIndex(l));o > h && (o = h), h > s && (s = h);}return i = [o, s], this._extent[t] = i, i;}, rw.getApproximateExtent = function (t) {return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);}, rw.setApproximateExtent = function (t, e) {e = this.getDimension(e), this._approximateExtent[e] = t.slice();}, rw.getCalculationInfo = function (t) {return this._calculationInfo[t];}, rw.setCalculationInfo = function (t, e) {j_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;}, rw.getSum = function (t) {var e = this._storage[t],n = 0;if (e) for (var i = 0, r = this.count(); r > i; i++) {var a = this.get(t, i);isNaN(a) || (n += a);}return n;}, rw.getMedian = function (t) {var e = [];this.each(t, function (t) {isNaN(t) || e.push(t);});var n = [].concat(e).sort(function (t, e) {return t - e;}),i = this.count();return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;}, rw.rawIndexOf = function (t, e) {var n = t && this._invertedIndicesMap[t],i = n[e];return null == i || isNaN(i) ? U_ : i;}, rw.indexOfName = function (t) {for (var e = 0, n = this.count(); n > e; e++) {if (this.getName(e) === t) return e;}return -1;}, rw.indexOfRawIndex = function (t) {if (!this._indices) return t;if (t >= this._rawCount || 0 > t) return -1;var e = this._indices,n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; r >= i;) {var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {if (!(e[a] > t)) return a;r = a - 1;}}return -1;}, rw.indicesOfNearest = function (t, e, n) {var i = this._storage,r = i[t],a = [];if (!r) return a;null == n && (n = 1 / 0);for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {var u = e - this.get(t, l),c = Math.abs(u);n >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l));}return a;}, rw.getRawIndex = Sh, rw.getRawDataItem = function (t) {if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {var i = this.dimensions[n];e.push(this.get(i, t));}return e;}, rw.getName = function (t) {var e = this.getRawIndex(t);return this._nameList[e] || bh(this, this._nameDimIdx, e) || "";}, rw.getId = function (t) {return Ih(this, this.getRawIndex(t));}, rw.each = function (t, e, n, i) {if (this._count) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Th(t), this.getDimension, this);for (var r = t.length, a = 0; a < this.count(); a++) {switch (r) {case 0:e.call(n, a);break;case 1:e.call(n, this.get(t[0], a), a);break;case 2:e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:for (var o = 0, s = []; r > o; o++) {s[o] = this.get(t[o], a);}s[o] = a, e.apply(n, s);}}}}, rw.filterSelf = function (t, e, n, i) {if (this._count) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Th(t), this.getDimension, this);for (var r = this.count(), a = mh(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {var d,f = this.getRawIndex(c);if (0 === l) d = e.call(n, c);else if (1 === l) {var g = this._getFast(u, f);d = e.call(n, g, c);} else {for (var v = 0; l > v; v++) {s[v] = this._getFast(u, f);}s[v] = c, d = e.apply(n, s);}d && (o[h++] = f);}return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? Mh : Sh, this;}}, rw.selectRange = function (t) {if (this._count) {var e = [];for (var n in t) {t.hasOwnProperty(n) && e.push(n);}var i = e.length;if (i) {var r = this.count(),a = mh(this),o = new a(r),s = 0,l = e[0],h = t[l][0],u = t[l][1],c = !1;if (!this._indices) {var d = 0;if (1 === i) {for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {var y = g[m];(y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++;}}c = !0;} else if (2 === i) {for (var f = this._storage[l], x = this._storage[e[1]], _ = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {for (var g = f[p], b = x[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {var y = g[m],S = b[m];(y >= h && u >= y || isNaN(y)) && (S >= _ && w >= S || isNaN(S)) && (o[s++] = d), d++;}}c = !0;}}if (!c) if (1 === i) for (var m = 0; r > m; m++) {var M = this.getRawIndex(m),y = this._getFast(l, M);(y >= h && u >= y || isNaN(y)) && (o[s++] = M);} else for (var m = 0; r > m; m++) {for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {var T = e[p],y = this._getFast(n, M);(y < t[T][0] || y > t[T][1]) && (I = !1);}I && (o[s++] = this.getRawIndex(m));}return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Mh : Sh, this;}}}, rw.mapArray = function (t, e, n, i) {"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {r.push(e && e.apply(this, arguments));}, n), r;}, rw.map = function (t, e, n, i) {n = n || i || this, t = p(Th(t), this.getDimension, this);var r = Ch(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? Mh : Sh;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {for (var f = 0; l > f; f++) {u[f] = this.get(t[f], d);}u[l] = d;var g = e && e.apply(n, u);if (null != g) {"object" != typeof g && (o[0] = g, g = o);for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, x = 0; x < g.length; x++) {var _ = t[x],w = g[x],b = c[_],S = a[_];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);}}}return r;}, rw.downSample = function (t, e, n, i) {for (var r = Ch(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (mh(this))(h), f = 0, p = 0; h > p; p += s) {s > h - p && (s = h - p, o.length = s);for (var g = 0; s > g; g++) {var v = this.getRawIndex(p + g),m = Math.floor(v / u),y = v % u;o[g] = l[m][y];}var x = n(o),_ = this.getRawIndex(Math.min(p + i(o, x) || 0, h - 1)),w = Math.floor(_ / u),b = _ % u;l[w][b] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _;}return r._count = f, r._indices = d, r.getRawIndex = Mh, r;}, rw.getItemModel = function (t) {var e = this.hostModel;return new Ha(this.getRawDataItem(t), e, e && e.ecModel);}, rw.diff = function (t) {var e = this;return new dh(t ? t.getIndices() : [], this.getIndices(), function (e) {return Ih(t, e);}, function (t) {return Ih(e, t);});}, rw.getVisual = function (t) {var e = this._visual;return e && e[t];}, rw.setVisual = function (t, e) {if (j_(t)) for (var n in t) {t.hasOwnProperty(n) && this.setVisual(n, t[n]);} else this._visual = this._visual || {}, this._visual[t] = e;}, rw.setLayout = function (t, e) {if (j_(t)) for (var n in t) {t.hasOwnProperty(n) && this.setLayout(n, t[n]);} else this._layout[t] = e;}, rw.getLayout = function (t) {return this._layout[t];}, rw.getItemLayout = function (t) {return this._itemLayouts[t];}, rw.setItemLayout = function (t, e, n) {this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;}, rw.clearItemLayouts = function () {this._itemLayouts.length = 0;}, rw.getItemVisual = function (t, e, n) {var i = this._itemVisuals[t],r = i && i[e];return null != r || n ? r : this.getVisual(e);}, rw.setItemVisual = function (t, e, n) {var i = this._itemVisuals[t] || {},r = this.hasItemVisual;if (this._itemVisuals[t] = i, j_(e)) for (var a in e) {e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);} else i[e] = n, r[e] = !0;}, rw.clearAllVisual = function () {this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};};var aw = function aw(t) {t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;};rw.setItemGraphicEl = function (t, e) {var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(aw, e)), this._graphicEls[t] = e;}, rw.getItemGraphicEl = function (t) {return this._graphicEls[t];}, rw.eachItemGraphicEl = function (t, e) {f(this._graphicEls, function (n, i) {n && t && t.call(e, n, i);});}, rw.cloneShallow = function (t) {if (!t) {var e = p(this.dimensions, this.getDimensionInfo, this);t = new iw(e, this.hostModel);}if (t._storage = this._storage, xh(t, this), this._indices) {var n = this._indices.constructor;t._indices = new n(this._indices);} else t._indices = null;return t.getRawIndex = t._indices ? Mh : Sh, t;}, rw.wrapMethod = function (t, e) {var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {var t = n.apply(this, arguments);return e.apply(this, [t].concat(P(arguments)));});}, rw.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], rw.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var ow = function ow(t, e) {return e = e || {}, kh(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });};Fh.prototype.parse = function (t) {return t;}, Fh.prototype.getSetting = function (t) {return this._setting[t];}, Fh.prototype.contain = function (t) {var e = this._extent;return t >= e[0] && t <= e[1];}, Fh.prototype.normalize = function (t) {var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);}, Fh.prototype.scale = function (t) {var e = this._extent;return t * (e[1] - e[0]) + e[0];}, Fh.prototype.unionExtent = function (t) {var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);}, Fh.prototype.unionExtentFromData = function (t, e) {this.unionExtent(t.getApproximateExtent(e));}, Fh.prototype.getExtent = function () {return this._extent.slice();}, Fh.prototype.setExtent = function (t, e) {var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);}, Fh.prototype.isBlank = function () {return this._isBlank;}, Fh.prototype.setBlank = function (t) {this._isBlank = t;}, Fh.prototype.getLabel = null, tr(Fh), rr(Fh, { registerWhenExtend: !0 }), Vh.createByAxisModel = function (t) {var e = t.option,n = e.data,i = n && p(n, Hh);return new Vh({ categories: i, needCollect: !i, deduplication: e.dedplication !== !1 });};var sw = Vh.prototype;sw.getOrdinal = function (t) {return Gh(this).get(t);}, sw.parseAndCollect = function (t) {var e,n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = Gh(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e;};var lw = Fh.prototype,hw = Fh.extend({ type: "ordinal", init: function init(t, e) {(!t || _(t)) && (t = new Vh({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];}, parse: function parse(t) {return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);}, contain: function contain(t) {return t = this.parse(t), lw.contain.call(this, t) && null != this._ordinalMeta.categories[t];}, normalize: function normalize(t) {return lw.normalize.call(this, this.parse(t));}, scale: function scale(t) {return Math.round(lw.scale.call(this, t));}, getTicks: function getTicks() {for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {t.push(n), n++;}return t;}, getLabel: function getLabel(t) {return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];}, count: function count() {return this._extent[1] - this._extent[0] + 1;}, unionExtentFromData: function unionExtentFromData(t, e) {this.unionExtent(t.getApproximateExtent(e));}, getOrdinalMeta: function getOrdinalMeta() {return this._ordinalMeta;}, niceTicks: V, niceExtent: V });hw.create = function () {return new hw();};var uw = $a,cw = $a,dw = Fh.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));}, unionExtent: function unionExtent(t) {var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), dw.prototype.setExtent.call(this, e[0], e[1]);}, getInterval: function getInterval() {return this._interval;}, setInterval: function setInterval(t) {this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Xh(t);}, getTicks: function getTicks() {return jh(this._interval, this._extent, this._niceExtent, this._intervalPrecision);}, getLabel: function getLabel(t, e) {if (null == t) return "";var n = e && e.precision;return null == n ? n = to(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = cw(t, n, !0), fo(t);}, niceTicks: function niceTicks(t, e, n) {t = t || 5;var i = this._extent,r = i[1] - i[0];if (isFinite(r)) {0 > r && (r = -r, i.reverse());var a = Wh(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;}}, niceExtent: function niceExtent(t) {var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);} else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = cw(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = cw(Math.ceil(e[1] / r) * r));} });dw.create = function () {return new dw();};var fw = "__ec_stack_",pw = .5,gw = "undefined" != typeof Float32Array ? Float32Array : Array,vw = { seriesType: "bar", plan: Cx(), reset: function reset(t) {function e(t, e) {for (var n, c = new gw(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) {f[h] = e.get(o, n), f[1 - h] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];}e.setLayout({ largePoints: c, barWidth: u, valueAxisStart: iu(r, a, !1), valueAxisHorizontal: l });}if (eu(t) && nu(t)) {var n = t.getData(),i = t.coordinateSystem,r = i.getBaseAxis(),a = i.getOtherAxis(r),o = n.mapDimension(a.dim),s = n.mapDimension(r.dim),l = a.isHorizontal(),h = l ? 0 : 1,u = Jh($h([t]), r, t).width;return u > pw || (u = pw), { progress: e };}} },mw = dw.prototype,yw = Math.ceil,xw = Math.floor,_w = 1e3,ww = 60 * _w,bw = 60 * ww,Sw = 24 * bw,Mw = function Mw(t, e, n, i) {for (; i > n;) {var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;}return n;},Iw = dw.extend({ type: "time", getLabel: function getLabel(t) {var e = this._stepLvl,n = new Date(t);return _o(e[0], n, this.getSetting("useUTC"));}, niceExtent: function niceExtent(t) {var e = this._extent;if (e[0] === e[1] && (e[0] -= Sw, e[1] += Sw), e[1] === -1 / 0 && 1 / 0 === e[0]) {var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Sw;}this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = $a(xw(e[0] / i) * i)), t.fixMax || (e[1] = $a(yw(e[1] / i) * i));}, niceTicks: function niceTicks(t, e, n) {t = t || 10;var i = this._extent,r = i[1] - i[0],a = r / t;null != e && e > a && (a = e), null != n && a > n && (a = n);var o = Tw.length,s = Mw(Tw, a, 0, o),l = Tw[Math.min(s, o - 1)],h = l[1];if ("year" === l[0]) {var u = r / h,c = lo(u / t, !0);
        h *= c;}var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,f = [Math.round(yw((i[0] - d) / h) * h + d), Math.round(xw((i[1] - d) / h) * h + d)];qh(f, i), this._stepLvl = l, this._interval = h, this._niceExtent = f;}, parse: function parse(t) {return +ao(t);} });f(["contain", "normalize"], function (t) {Iw.prototype[t] = function (e) {return mw[t].call(this, this.parse(e));};});var Tw = [["hh:mm:ss", _w], ["hh:mm:ss", 5 * _w], ["hh:mm:ss", 10 * _w], ["hh:mm:ss", 15 * _w], ["hh:mm:ss", 30 * _w], ["hh:mm\nMM-dd", ww], ["hh:mm\nMM-dd", 5 * ww], ["hh:mm\nMM-dd", 10 * ww], ["hh:mm\nMM-dd", 15 * ww], ["hh:mm\nMM-dd", 30 * ww], ["hh:mm\nMM-dd", bw], ["hh:mm\nMM-dd", 2 * bw], ["hh:mm\nMM-dd", 6 * bw], ["hh:mm\nMM-dd", 12 * bw], ["MM-dd\nyyyy", Sw], ["MM-dd\nyyyy", 2 * Sw], ["MM-dd\nyyyy", 3 * Sw], ["MM-dd\nyyyy", 4 * Sw], ["MM-dd\nyyyy", 5 * Sw], ["MM-dd\nyyyy", 6 * Sw], ["week", 7 * Sw], ["MM-dd\nyyyy", 10 * Sw], ["week", 14 * Sw], ["week", 21 * Sw], ["month", 31 * Sw], ["week", 42 * Sw], ["month", 62 * Sw], ["week", 70 * Sw], ["quarter", 95 * Sw], ["month", 31 * Sw * 4], ["month", 31 * Sw * 5], ["half-year", 380 * Sw / 2], ["month", 31 * Sw * 8], ["month", 31 * Sw * 10], ["year", 380 * Sw]];Iw.create = function (t) {return new Iw({ useUTC: t.ecModel.get("useUTC") });};var Cw = Fh.prototype,Dw = dw.prototype,Aw = to,kw = $a,Pw = Math.floor,Lw = Math.ceil,Ow = Math.pow,zw = Math.log,Bw = Fh.extend({ type: "log", base: 10, $constructor: function $constructor() {Fh.apply(this, arguments), this._originalScale = new dw();}, getTicks: function getTicks() {var t = this._originalScale,e = this._extent,n = t.getExtent();return p(Dw.getTicks.call(this), function (i) {var r = $a(Ow(this.base, i));return r = i === e[0] && t.__fixMin ? ru(r, n[0]) : r, r = i === e[1] && t.__fixMax ? ru(r, n[1]) : r;}, this);}, getLabel: Dw.getLabel, scale: function scale(t) {return t = Cw.scale.call(this, t), Ow(this.base, t);}, setExtent: function setExtent(t, e) {var n = this.base;t = zw(t) / zw(n), e = zw(e) / zw(n), Dw.setExtent.call(this, t, e);}, getExtent: function getExtent() {var t = this.base,e = Cw.getExtent.call(this);e[0] = Ow(t, e[0]), e[1] = Ow(t, e[1]);var n = this._originalScale,i = n.getExtent();return n.__fixMin && (e[0] = ru(e[0], i[0])), n.__fixMax && (e[1] = ru(e[1], i[1])), e;}, unionExtent: function unionExtent(t) {this._originalScale.unionExtent(t);var e = this.base;t[0] = zw(t[0]) / zw(e), t[1] = zw(t[1]) / zw(e), Cw.unionExtent.call(this, t);}, unionExtentFromData: function unionExtentFromData(t, e) {this.unionExtent(t.getApproximateExtent(e));}, niceTicks: function niceTicks(t) {t = t || 10;var e = this._extent,n = e[1] - e[0];if (!(1 / 0 === n || 0 >= n)) {var i = oo(n),r = t / n * i;for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {i *= 10;}var a = [$a(Lw(e[0] / i) * i), $a(Pw(e[1] / i) * i)];this._interval = i, this._niceExtent = a;}}, niceExtent: function niceExtent(t) {Dw.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;} });f(["contain", "normalize"], function (t) {Bw.prototype[t] = function (e) {return e = zw(e) / zw(this.base), Cw[t].call(this, e);};}), Bw.create = function () {return new Bw();};var Ew = { getMin: function getMin(t) {var e = this.option,n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n;}, getMax: function getMax(t) {var e = this.option,n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n;}, getNeedCrossZero: function getNeedCrossZero() {var t = this.option;return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;}, getCoordSysModel: V, setRange: function setRange(t, e) {this.option.rangeStart = t, this.option.rangeEnd = e;}, resetRange: function resetRange() {this.option.rangeStart = this.option.rangeEnd = null;} },Nw = Qr({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = e.width / 2,a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();} }),Rw = Qr({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.cx,i = e.cy,r = e.width / 2,a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();} }),Fw = Qr({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.x,i = e.y,r = e.width / 5 * 3,a = Math.max(r, e.height),o = r / 2,s = o * o / (a - o),l = i - a + o + s,h = Math.asin(s / o),u = Math.cos(h) * o,c = Math.sin(h),d = Math.cos(h),f = .6 * o,p = .7 * o;t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath();} }),Vw = Qr({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {var n = e.height,i = e.width,r = e.x,a = e.y,o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();} }),Gw = { line: Zm, rect: qm, roundRect: qm, square: qm, circle: Bm, diamond: Rw, pin: Fw, arrow: Vw, triangle: Nw },Hw = { line: function line(t, e, n, i, r) {r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;}, rect: function rect(t, e, n, i, r) {r.x = t, r.y = e, r.width = n, r.height = i;}, roundRect: function roundRect(t, e, n, i, r) {r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;}, square: function square(t, e, n, i, r) {var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;}, circle: function circle(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;}, diamond: function diamond(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;}, pin: function pin(t, e, n, i, r) {r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;}, arrow: function arrow(t, e, n, i, r) {r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;}, triangle: function triangle(t, e, n, i, r) {r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;} },Ww = {};f(Gw, function (t, e) {Ww[e] = new t();});var Xw = Qr({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, beforeBrush: function beforeBrush() {var t = this.style,e = this.shape;"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");}, buildPath: function buildPath(t, e, n) {var i = e.symbolType,r = Ww[i];"none" !== e.symbolType && (r || (i = "rect", r = Ww[i]), Hw[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n));} }),Yw = { isDimensionStacked: zh, enableDataStack: Oh, getStackedDimension: Bh },qw = (Object.freeze || Object)({ createList: yu, getLayoutRect: Io, dataStack: Yw, createScale: xu, mixinAxisModelCommonMethods: _u, completeDimensions: kh, createDimensions: ow, createSymbol: mu }),jw = 1e-8;Su.prototype = { constructor: Su, properties: null, getBoundingRect: function getBoundingRect() {var t = this._rect;if (t) return t;for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) {if ("polygon" === o[s].type) {var l = o[s].exterior;xr(l, r, a), oe(n, n, r), se(i, i, a);}}return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new xn(n[0], n[1], i[0] - n[0], i[1] - n[1]);}, contain: function contain(t) {var e = this.getBoundingRect(),n = this.geometries;if (!e.contain(t[0], t[1])) return !1;t: for (var i = 0, r = n.length; r > i; i++) {if ("polygon" === n[i].type) {var a = n[i].exterior,o = n[i].interiors;if (bu(a, t[0], t[1])) {for (var s = 0; s < (o ? o.length : 0); s++) {if (bu(o[s])) continue t;}return !0;}}}return !1;}, transformTo: function transformTo(t, e, n, i) {var r = this.getBoundingRect(),a = r.width / r.height;n ? i || (i = n / a) : n = a * i;for (var o = new xn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, h = 0; h < l.length; h++) {if ("polygon" === l[h].type) {for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) {ae(u[d], u[d], s);}for (var f = 0; f < (c ? c.length : 0); f++) {for (var d = 0; d < c[f].length; d++) {ae(c[f][d], c[f][d], s);}}}}r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2];}, cloneShallow: function cloneShallow(t) {null == t && (t = this.name);var e = new Su(t, this.geometries, this.center);return e._rect = this._rect, e.transformTo = null, e;} };var Zw = function Zw(t) {return Mu(t), p(v(t.features, function (t) {return t.geometry && t.properties && t.geometry.coordinates.length > 0;}), function (t) {var e = t.properties,n = t.geometry,i = n.coordinates,r = [];"Polygon" === n.type && r.push({ type: "polygon", exterior: i[0], interiors: i.slice(1) }), "MultiPolygon" === n.type && f(i, function (t) {t[0] && r.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });});var a = new Su(e.name, r, e.cp);return a.properties = e, a;});},Uw = qi(),Kw = [0, 1],$w = function $w(t, e, n) {this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1;};$w.prototype = { constructor: $w, contain: function contain(t) {var e = this._extent,n = Math.min(e[0], e[1]),i = Math.max(e[0], e[1]);return t >= n && i >= t;}, containData: function containData(t) {return this.contain(this.dataToCoord(t));}, getExtent: function getExtent() {return this._extent.slice();}, getPixelPrecision: function getPixelPrecision(t) {return eo(t || this.scale.getExtent(), this._extent);}, setExtent: function setExtent(t, e) {var n = this._extent;n[0] = t, n[1] = e;}, dataToCoord: function dataToCoord(t, e) {var n = this._extent,i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Vu(n, i.count())), Ua(t, Kw, n, e);}, coordToData: function coordToData(t, e) {var n = this._extent,i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), Vu(n, i.count()));var r = Ua(t, n, Kw, e);return this.scale.scale(r);}, pointToData: function pointToData() {}, getTicksCoords: function getTicksCoords(t) {t = t || {};var e = t.tickModel || this.getTickModel(),n = Cu(this, e),i = n.ticks,r = p(i, function (t) {return { coord: this.dataToCoord(t), tickValue: t };}, this),a = e.get("alignWithLabel");return Gu(this, r, n.tickCategoryInterval, a, t.clamp), r;}, getViewLabels: function getViewLabels() {return Tu(this).labels;}, getLabelModel: function getLabelModel() {return this.model.getModel("axisLabel");}, getTickModel: function getTickModel() {return this.model.getModel("axisTick");}, getBandWidth: function getBandWidth() {var t = this._extent,e = this.scale.getExtent(),n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;}, isHorizontal: null, getRotate: null, calculateCategoryInterval: function calculateCategoryInterval() {return Eu(this);} };var Qw = Zw,Jw = {};f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {Jw[t] = Tp[t];});var tb = {};f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {tb[t] = cy[t];});var eb = function eb(t) {this._axes = {}, this._dimList = [], this.name = t || "";};eb.prototype = { constructor: eb, type: "cartesian", getAxis: function getAxis(t) {return this._axes[t];}, getAxes: function getAxes() {return p(this._dimList, Hu, this);}, getAxesByScale: function getAxesByScale(t) {return t = t.toLowerCase(), v(this.getAxes(), function (e) {return e.scale.type === t;});}, addAxis: function addAxis(t) {var e = t.dim;this._axes[e] = t, this._dimList.push(e);}, dataToCoord: function dataToCoord(t) {return this._dataCoordConvert(t, "dataToCoord");}, coordToData: function coordToData(t) {return this._dataCoordConvert(t, "coordToData");}, _dataCoordConvert: function _dataCoordConvert(t, e) {for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {var a = n[r],o = this._axes[a];i[a] = o[e](t[a]);}return i;} }, Wu.prototype = { constructor: Wu, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function getBaseAxis() {return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");}, containPoint: function containPoint(t) {var e = this.getAxis("x"),n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));}, containData: function containData(t) {return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);}, dataToPoint: function dataToPoint(t, e, n) {var i = this.getAxis("x"),r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;}, clampData: function clampData(t, e) {var n = this.getAxis("x").scale,i = this.getAxis("y").scale,r = n.getExtent(),a = i.getExtent(),o = n.parse(t[0]),s = i.parse(t[1]);return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;}, pointToData: function pointToData(t, e) {var n = this.getAxis("x"),i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;}, getOtherAxis: function getOtherAxis(t) {return this.getAxis("x" === t.dim ? "y" : "x");} }, u(Wu, eb);var nb = function nb(t, e, n, i, r) {$w.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";};nb.prototype = { constructor: nb, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function isHorizontal() {var t = this.position;return "top" === t || "bottom" === t;}, getGlobalExtent: function getGlobalExtent(t) {var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;}, getOtherAxis: function getOtherAxis() {this.grid.getOtherAxis();}, pointToData: function pointToData(t, e) {return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);}, toLocalCoord: null, toGlobalCoord: null }, u(nb, $w);var ib = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },rb = {};rb.categoryAxis = r({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, ib), rb.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5 }, ib), rb.timeAxis = s({ scale: !0, min: "dataMin", max: "dataMax" }, rb.valueAxis), rb.logAxis = s({ scale: !0, logBase: 10 }, rb.valueAxis);var ab = ["value", "category", "time", "log"],ob = function ob(t, e, n, i) {f(ab, function (o) {e.extend({ type: t + "Axis." + o, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, i) {var a = this.layoutMode,s = a ? Co(e) : {},l = i.getTheme();r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && To(e, s, a);}, optionUpdated: function optionUpdated() {var t = this.option;"category" === t.type && (this.__ordinalMeta = Vh.createByAxisModel(this));}, getCategories: function getCategories(t) {var e = this.option;return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;}, getOrdinalMeta: function getOrdinalMeta() {return this.__ordinalMeta;}, defaultOption: a([{}, rb[o + "Axis"], i], !0) });}), Ey.registerSubTypeDefaulter(t + "Axis", x(n, t));},sb = Ey.extend({ type: "cartesian2dAxis", axis: null, init: function init() {sb.superApply(this, "init", arguments), this.resetRange();}, mergeOption: function mergeOption() {sb.superApply(this, "mergeOption", arguments), this.resetRange();}, restoreData: function restoreData() {sb.superApply(this, "restoreData", arguments), this.resetRange();}, getCoordSysModel: function getCoordSysModel() {return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];} });r(sb.prototype, Ew);var lb = { offset: 0 };ob("x", sb, Xu, lb), ob("y", sb, Xu, lb), Ey.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var hb = qu.prototype;hb.type = "grid", hb.axisPointerEnabled = !0, hb.getRect = function () {return this._rect;}, hb.update = function (t, e) {var n = this._axesMap;this._updateScale(t, this.model), f(n.x, function (t) {su(t.scale, t.model);}), f(n.y, function (t) {su(t.scale, t.model);});var i = {};f(n.x, function (t) {ju(n, "y", t, i);}), f(n.y, function (t) {ju(n, "x", t, i);}), this.resize(this.model, e);}, hb.resize = function (t, e, n) {function i() {f(a, function (t) {var e = t.isHorizontal(),n = e ? [0, r.width] : [0, r.height],i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), Uu(t, e ? r.x : r.y);});}var r = Io(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var a = this._axesList;i(), !n && t.get("containLabel") && (f(a, function (t) {if (!t.model.get("axisLabel.inside")) {var e = du(t);if (e) {var n = t.isHorizontal() ? "height" : "width",i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);}}}), i());}, hb.getAxis = function (t, e) {var n = this._axesMap[t];if (null != n) {if (null == e) for (var i in n) {if (n.hasOwnProperty(i)) return n[i];}return n[e];}}, hb.getAxes = function () {return this._axesList.slice();}, hb.getCartesian = function (t, e) {if (null != t && null != e) {var n = "x" + t + "y" + e;return this._coordsMap[n];}S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) {if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];}}, hb.getCartesians = function () {return this._coordsList.slice();}, hb.convertToPixel = function (t, e, n) {var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;}, hb.convertFromPixel = function (t, e, n) {var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;}, hb._findConvertTarget = function (t, e) {var n,i,r = e.seriesModel,a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],s = e.gridModel,l = this._coordsList;if (r) n = r.coordinateSystem, h(l, n) < 0 && (n = null);else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) i = this.getAxis("x", a.componentIndex);else if (o) i = this.getAxis("y", o.componentIndex);else if (s) {var u = s.coordinateSystem;u === this && (n = this._coordsList[0]);}return { cartesian: n, axis: i };}, hb.containPoint = function (t) {var e = this._coordsList[0];return e ? e.containPoint(t) : void 0;}, hb._initCartesian = function (t, e) {function n(n) {return function (o, s) {if (Yu(o, t, e)) {var l = o.get("position");"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;var h = new nb(n, lu(o), [0, 0], o.get("type"), l),u = "category" === h.type;h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[n][s] = h, a[n]++;}};}var i = { left: !1, right: !1, top: !1, bottom: !1 },r = { x: {}, y: {} },a = { x: 0, y: 0 };return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, n) {f(r.y, function (i, r) {var a = "x" + n + "y" + r,o = new Wu(a);o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);}, this);}, this)) : (this._axesMap = {}, void (this._axesList = []));}, hb._updateScale = function (t, e) {function n(t, e) {f(t.mapDimension(e.dim, !0), function (n) {e.scale.unionExtentFromData(t, Bh(t, n));});}f(this._axesList, function (t) {t.scale.setExtent(1 / 0, -1 / 0);}), t.eachSeries(function (i) {if ($u(i)) {var r = Ku(i, t),a = r[0],o = r[1];if (!Yu(a, e, t) || !Yu(o, e, t)) return;var s = this.getCartesian(a.componentIndex, o.componentIndex),l = i.getData(),h = s.getAxis("x"),u = s.getAxis("y");"list" === l.type && (n(l, h, i), n(l, u, i));}}, this);}, hb.getTooltipAxes = function (t) {var e = [],n = [];return f(this.getCartesians(), function (i) {var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),a = i.getOtherAxis(r);h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a);}), { baseAxes: e, otherAxes: n };};var ub = ["xAxis", "yAxis"];qu.create = function (t, e) {var n = [];return t.eachComponent("grid", function (i, r) {var a = new qu(i, t, e);a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);}), t.eachSeries(function (e) {if ($u(e)) {var n = Ku(e, t),i = n[0],r = n[1],a = i.getCoordSysModel(),o = a.coordinateSystem;e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);}}), n;}, qu.dimensions = qu.prototype.dimensions = Wu.prototype.dimensions, ts.register("cartesian2d", qu);var cb = Mx.extend({ type: "series.__base_bar__", getInitialData: function getInitialData() {return Eh(this.getSource(), this);}, getMarkerPosition: function getMarkerPosition(t) {var e = this.coordinateSystem;if (e) {var n = e.dataToPoint(e.clampData(t)),i = this.getData(),r = i.getLayout("offset"),a = i.getLayout("size"),o = e.getBaseAxis().isHorizontal() ? 0 : 1;return n[o] += r + a / 2, n;}return [0 / 0, 0 / 0];}, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, barMinHeight: 0, barMinAngle: 0, large: !1, largeThreshold: 400, progressive: 3e3, progressiveChunkMode: "mod", itemStyle: {}, emphasis: {} } });cb.extend({ type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function getProgressive() {return this.get("large") ? this.get("progressive") : !1;}, getProgressiveThreshold: function getProgressiveThreshold() {var t = this.get("progressiveThreshold"),e = this.get("largeThreshold");return e > t && (t = e), t;} });var db = Cv([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),fb = { getBarItemStyle: function getBarItemStyle(t) {var e = db(this, t);if (this.getBorderLineDash) {var n = this.getBorderLineDash();n && (e.lineDash = n);}return e;} },pb = ["itemStyle", "barBorderWidth"];o(Ha.prototype, fb), sh({ type: "bar", render: function render(t, e, n) {this._updateDrawMode(t);var i = t.get("coordinateSystem");return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group;}, incrementalPrepareRender: function incrementalPrepareRender(t) {this._clear(), this._updateDrawMode(t);}, incrementalRender: function incrementalRender(t, e) {this._incrementalRenderLarge(t, e);}, _updateDrawMode: function _updateDrawMode(t) {var e = t.pipelineContext.large;(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear());}, _renderNormal: function _renderNormal(t) {var e,n = this.group,i = t.getData(),r = this._data,a = t.coordinateSystem,o = a.getBaseAxis();"cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);var s = t.isAnimationEnabled() ? t : null;i.diff(r).add(function (r) {if (i.hasValue(r)) {var o = i.getItemModel(r),l = vb[a.type](i, r, o),h = gb[a.type](i, r, o, l, e, s);i.setItemGraphicEl(r, h), n.add(h), ic(h, i, r, o, l, t, e, "polar" === a.type);}}).update(function (o, l) {var h = r.getItemGraphicEl(l);if (!i.hasValue(o)) return void n.remove(h);var u = i.getItemModel(o),c = vb[a.type](i, o, u);h ? Oa(h, { shape: c }, s, o) : h = gb[a.type](i, o, u, c, e, s, !0), i.setItemGraphicEl(o, h), n.add(h), ic(h, i, o, u, c, t, e, "polar" === a.type);}).remove(function (t) {var e = r.getItemGraphicEl(t);"cartesian2d" === a.type ? e && ec(t, s, e) : e && nc(t, s, e);}).execute(), this._data = i;}, _renderLarge: function _renderLarge(t) {this._clear(), ac(t, this.group);}, _incrementalRenderLarge: function _incrementalRenderLarge(t, e) {ac(e, this.group, !0);}, dispose: V, remove: function remove(t) {this._clear(t);}, _clear: function _clear(t) {var e = this.group,n = this._data;t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function (e) {"sector" === e.type ? nc(e.dataIndex, t, e) : ec(e.dataIndex, t, e);}) : e.removeAll(), this._data = null;} });var gb = { cartesian2d: function cartesian2d(t, e, n, i, r, a, s) {var l = new qm({ shape: o({}, i) });if (a) {var h = l.shape,u = r ? "height" : "width",c = {};h[u] = 0, c[u] = i[u], cy[s ? "updateProps" : "initProps"](l, { shape: c }, a, e);}return l;}, polar: function polar(t, e, n, i, r, a, o) {var l = i.startAngle < i.endAngle,h = new Rm({ shape: s({ clockwise: l }, i) });if (a) {var u = h.shape,c = r ? "r" : "endAngle",d = {};u[c] = r ? 0 : i.startAngle, d[c] = i[c], cy[o ? "updateProps" : "initProps"](h, { shape: d }, a, e);}return h;} },vb = { cartesian2d: function cartesian2d(t, e, n) {var i = t.getItemLayout(e),r = rc(n, i),a = i.width > 0 ? 1 : -1,o = i.height > 0 ? 1 : -1;return { x: i.x + a * r / 2, y: i.y + o * r / 2, width: i.width - a * r, height: i.height - o * r };}, polar: function polar(t, e) {var n = t.getItemLayout(e);return { cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle };} },mb = Rr.extend({ type: "largeBar", shape: { points: [] }, buildPath: function buildPath(t, e) {for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) {i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1]);}} }),yb = Math.PI,xb = function xb(t, e) {this.opt = e, this.axisModel = t, s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new bg();var n = new bg({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;};xb.prototype = { constructor: xb, hasBuilder: function hasBuilder(t) {return !!_b[t];}, add: function add(t) {_b[t].call(this);}, getGroup: function getGroup() {return this.group;} };var _b = { axisLine: function axisLine() {var t = this.opt,e = this.axisModel;if (e.get("axisLine.show")) {var n = this.axisModel.axis.getExtent(),i = this._transform,r = [n[0], 0],a = [n[1], 0];i && (ae(r, r, i), ae(a, a, i));var s = o({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Zm(ra({ anid: "line", shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 })));var l = e.get("axisLine.symbol"),h = e.get("axisLine.symbolSize"),u = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof u && (u = [u, u]), null != l) {"string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);var c = h[0],d = h[1];f([{ rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: u[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])) }], function (e, n) {if ("none" !== l[n] && null != l[n]) {var i = mu(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),a = e.r + e.offset,o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: !0, z2: 11 }), this.group.add(i);}}, this);}}}, axisTickLabel: function axisTickLabel() {var t = this.axisModel,e = this.opt,n = pc(this, t, e),i = gc(this, t, e);uc(t, i, n);}, axisName: function axisName() {var t = this.opt,e = this.axisModel,n = D(t.axisName, e.get("name"));if (n) {var i,r = e.get("nameLocation"),a = t.nameDirection,s = e.getModel("nameTextStyle"),l = e.get("nameGap") || 0,h = this.axisModel.axis.getExtent(),u = h[0] > h[1] ? -1 : 1,c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, fc(r) ? t.labelOffset + a * l : 0],d = e.get("nameRotate");null != d && (d = d * yb / 180);var f;fc(r) ? i = wb(t.rotation, null != d ? d : t.rotation, a) : (i = lc(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));var p = s.getFont(),g = e.get("nameTruncate", !0) || {},v = g.ellipsis,m = D(t.nameTruncateMaxWidth, g.maxWidth, f),y = null != v && null != m ? Dy(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,x = e.get("tooltip", !0),_ = e.mainType,w = { componentType: _, name: n, $vars: ["name"] };w[_ + "Index"] = e.componentIndex;var b = new zm({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: hc(e), z2: 1, tooltip: x && x.show ? o({ content: n, formatter: function formatter() {return n;}, formatterParams: w }, x) : null });Sa(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: i.textAlign, textVerticalAlign: i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = sc(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();}} },wb = xb.innerTextLayout = function (t, e, n) {var i,r,a = io(e - t);return ro(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : ro(a - yb) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && yb > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };},bb = f,Sb = x,Mb = ah({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {this.axisPointerClass && bc(t), Mb.superApply(this, "render", arguments), Cc(this, t, e, n, i, !0);}, updateAxisPointer: function updateAxisPointer(t, e, n, i) {Cc(this, t, e, n, i, !1);}, remove: function remove(t, e) {var n = this._axisPointer;n && n.remove(e), Mb.superApply(this, "remove", arguments);}, dispose: function dispose(t, e) {Dc(this, e), Mb.superApply(this, "dispose", arguments);} }),Ib = [];Mb.registerAxisPointerClass = function (t, e) {Ib[t] = e;}, Mb.getAxisPointerClass = function (t) {return t && Ib[t];};var Tb = ["axisLine", "axisTickLabel", "axisName"],Cb = ["splitArea", "splitLine"],Db = Mb.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function render(t, e, n, i) {this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new bg(), this.group.add(this._axisGroup), t.get("show")) {var a = t.getCoordSysModel(),o = Ac(a, t),s = new xb(t, o);f(Tb, s.add, s), this._axisGroup.add(s.getGroup()), f(Cb, function (e) {t.get(e + ".show") && this["_" + e](t, a);}, this), Ra(r, this._axisGroup, t), Db.superCall(this, "render", t, e, n, i);}}, remove: function remove() {this._splitAreaColors = null;}, _splitLine: function _splitLine(t, e) {var n = t.axis;if (!n.scale.isBlank()) {var i = t.getModel("splitLine"),r = i.getModel("lineStyle"),a = r.get("color");a = _(a) ? a : [a];for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({ tickModel: i }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {var g = n.toGlobalCoord(u[p].coord);l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);var v = h++ % a.length,m = u[p].tickValue;this._axisGroup.add(new Zm(ra({ anid: null != m ? "line_" + u[p].tickValue : null, shape: { x1: c[0], y1: c[1], x2: d[0], y2: d[1] }, style: s({ stroke: a[v] }, f), silent: !0 })));}}}, _splitArea: function _splitArea(t, e) {var n = t.axis;if (!n.scale.isBlank()) {var i = t.getModel("splitArea"),r = i.getModel("areaStyle"),a = r.get("color"),o = e.coordinateSystem.getRect(),l = n.getTicksCoords({ tickModel: i, clamp: !0 });if (l.length) {var h = a.length,u = this._splitAreaColors,c = R(),d = 0;if (u) for (var f = 0; f < l.length; f++) {var p = u.get(l[f].tickValue);if (null != p) {d = (p + (h - 1) * f) % h;break;}}var g = n.toGlobalCoord(l[0].coord),v = r.getAreaStyle();a = _(a) ? a : [a];for (var f = 1; f < l.length; f++) {var m,y,x,w,b = n.toGlobalCoord(l[f].coord);n.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);var S = l[f - 1].tickValue;null != S && c.set(S, d), this._axisGroup.add(new qm({ anid: null != S ? "area_" + S : null, shape: { x: m, y: y, width: x, height: w }, style: s({ fill: a[d] }, v), silent: !0 })), d = (d + 1) % h;}this._splitAreaColors = c;}}} });Db.extend({ type: "xAxis" }), Db.extend({ type: "yAxis" }), ah({ type: "grid", render: function render(t) {this.group.removeAll(), t.get("show") && this.group.add(new qm({ shape: t.coordinateSystem.getRect(), style: s({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));} }), Zl(function (t) {t.xAxis && t.yAxis && !t.grid && (t.grid = {});}), th(x(tu, "bar")), th(vw), eh({ seriesType: "bar", reset: function reset(t) {t.getData().setVisual("legendSymbol", "roundRect");} }), Mx.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function getInitialData() {return Eh(this.getSource(), this);}, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, hoverAnimation: !0, clipOverflow: !0, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: !0, showAllSymbol: "auto", connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0 } });var Ab = kc.prototype,kb = kc.getSymbolSize = function (t, e) {var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];};Ab._createSymbol = function (t, e, n, i, r) {this.removeAll();var a = e.getItemVisual(n, "color"),o = mu(t, -1, -1, 2, 2, a, r);o.attr({ z2: 100, culling: !0, scale: Pc(i) }), o.drift = Lc, this._symbolType = t, this.add(o);}, Ab.stopSymbolAnimation = function (t) {this.childAt(0).stopAnimation(t);}, Ab.getSymbolPath = function () {return this.childAt(0);}, Ab.getScale = function () {return this.childAt(0).scale;}, Ab.highlight = function () {this.childAt(0).trigger("emphasis");}, Ab.downplay = function () {this.childAt(0).trigger("normal");}, Ab.setZ = function (t, e) {var n = this.childAt(0);n.zlevel = t, n.z = e;}, Ab.setDraggable = function (t) {var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : "pointer";}, Ab.updateData = function (t, e, n) {this.silent = !1;var i = t.getItemVisual(e, "symbol") || "circle",r = t.hostModel,a = kb(t, e),o = i !== this._symbolType;if (o) {var s = t.getItemVisual(e, "symbolKeepAspect");this._createSymbol(i, t, e, a, s);} else {var l = this.childAt(0);l.silent = !1, Oa(l, { scale: Pc(a) }, r, e);}if (this._updateCommon(t, e, a, n), o) {var l = this.childAt(0),h = n && n.fadeIn,u = { scale: l.scale.slice() };h && (u.style = { opacity: l.style.opacity }), l.scale = [0, 0], h && (l.style.opacity = 0), za(l, u, r, e);}this._seriesModel = r;};var Pb = ["itemStyle"],Lb = ["emphasis", "itemStyle"],Ob = ["label"],zb = ["emphasis", "label"];Ab._updateCommon = function (t, e, n, i) {function r(e) {return b ? t.getName(e) : Qu(t, e);}var a = this.childAt(0),s = t.hostModel,l = t.getItemVisual(e, "color");"image" !== a.type && a.useStyle({ strokeNoScale: !0 });var h = i && i.itemStyle,u = i && i.hoverItemStyle,c = i && i.symbolRotate,d = i && i.symbolOffset,f = i && i.labelModel,p = i && i.hoverLabelModel,g = i && i.hoverAnimation,v = i && i.cursorStyle;if (!i || t.hasItemOption) {var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);h = m.getModel(Pb).getItemStyle(["color"]), u = m.getModel(Lb).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(Ob), p = m.getModel(zb), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor");} else u = o({}, u);var y = a.style;a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [Ka(d[0], n[0]), Ka(d[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(h);var x = t.getItemVisual(e, "opacity");null != x && (y.opacity = x);var _ = t.getItemVisual(e, "liftZ"),w = a.__z2Origin;null != _ ? null == w && (a.__z2Origin = a.z2, a.z2 += _) : null != w && (a.z2 = w, a.__z2Origin = null);var b = i && i.useNameLabel;ba(y, u, f, p, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: !0, autoColor: l }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = u, _a(a), a.__symbolOriginalScale = Pc(n), g && s.isAnimationEnabled() && a.on("mouseover", Oc).on("mouseout", zc).on("emphasis", Bc).on("normal", Ec);
  }, Ab.fadeOut = function (t, e) {var n = this.childAt(0);this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), Oa(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);}, u(kc, bg);var Bb = Nc.prototype;Bb.updateData = function (t, e) {e = Fc(e);var n = this.group,i = t.hostModel,r = this._data,a = this._symbolCtor,o = Vc(t);r || n.removeAll(), t.diff(r).add(function (i) {var r = t.getItemLayout(i);if (Rc(t, r, i, e)) {var s = new a(t, i, o);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);}}).update(function (s, l) {var h = r.getItemGraphicEl(l),u = t.getItemLayout(s);return Rc(t, u, s, e) ? (h ? (h.updateData(t, s, o), Oa(h, { position: u }, i)) : (h = new a(t, s), h.attr("position", u)), n.add(h), void t.setItemGraphicEl(s, h)) : void n.remove(h);}).remove(function (t) {var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {n.remove(e);});}).execute(), this._data = t;}, Bb.isPersistent = function () {return !0;}, Bb.updateLayout = function () {var t = this._data;t && t.eachItemGraphicEl(function (e, n) {var i = t.getItemLayout(n);e.attr("position", i);});}, Bb.incrementalPrepareUpdate = function (t) {this._seriesScope = Vc(t), this._data = null, this.group.removeAll();}, Bb.incrementalUpdate = function (t, e, n) {function i(t) {t.isGroup || (t.incremental = t.useHoverLayer = !0);}n = Fc(n);for (var r = t.start; r < t.end; r++) {var a = e.getItemLayout(r);if (Rc(e, a, r, n)) {var o = new this._symbolCtor(e, r, this._seriesScope);o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);}}}, Bb.remove = function (t) {var e = this.group,n = this._data;n && t ? n.eachItemGraphicEl(function (t) {t.fadeOut(function () {e.remove(t);});}) : e.removeAll();};var Eb = function Eb(t, e, n, i, r, a, o, s) {for (var l = Xc(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = Gc(r, e, o), m = Gc(a, t, s), y = 0; y < l.length; y++) {var x = l[y],_ = !0;switch (x.cmd) {case "=":var w = t.getItemLayout(x.idx),b = e.getItemLayout(x.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));break;case "+":var S = x.idx;h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(Wc(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));break;case "-":var S = x.idx,M = t.getRawIndex(S);M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(Wc(m, a, t, S)), g.push(M)) : _ = !1;}_ && (f.push(x), p.push(p.length));}p.sort(function (t, e) {return g[t] - g[e];});for (var I = [], T = [], C = [], D = [], A = [], y = 0; y < p.length; y++) {var S = p[y];I[y] = h[S], T[y] = u[S], C[y] = c[S], D[y] = d[S], A[y] = f[S];}return { current: I, next: T, stackedOnCurrent: C, stackedOnNext: D, status: A };},Nb = oe,Rb = se,Fb = q,Vb = H,Gb = [],Hb = [],Wb = [],Xb = Rr.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, style: { fill: null, stroke: "#000" }, brush: Nm(Rr.prototype.brush), buildPath: function buildPath(t, e) {var n = e.points,i = 0,r = n.length,a = Uc(n, e.smoothConstraint);if (e.connectNulls) {for (; r > 0 && Yc(n[r - 1]); r--) {;}for (; r > i && Yc(n[i]); i++) {;}}for (; r > i;) {i += qc(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;}} }),Yb = Rr.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, brush: Nm(Rr.prototype.brush), buildPath: function buildPath(t, e) {var n = e.points,i = e.stackedOnPoints,r = 0,a = n.length,o = e.smoothMonotone,s = Uc(n, e.smoothConstraint),l = Uc(i, e.smoothConstraint);if (e.connectNulls) {for (; a > 0 && Yc(n[a - 1]); a--) {;}for (; a > r && Yc(n[r]); r++) {;}}for (; a > r;) {var h = qc(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);qc(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath();}} });Vs.extend({ type: "line", init: function init() {var t = new bg(),e = new Nc();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;}, render: function render(t, e, n) {var i = t.coordinateSystem,r = this.group,a = t.getData(),o = t.getModel("lineStyle"),l = t.getModel("areaStyle"),h = a.mapArray(a.getItemLayout),u = "polar" === i.type,c = this._coordSys,d = this._symbolDraw,f = this._polyline,p = this._polygon,g = this._lineGroup,v = t.get("animation"),m = !l.isEmpty(),y = l.get("origin"),x = Gc(i, a, y),_ = Jc(i, a, x),w = t.get("showSymbol"),b = w && !u && ad(t, a, i),S = this._data;S && S.eachItemGraphicEl(function (t, e) {t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));}), w || d.remove(), r.add(g);var M = !u && t.get("step");f && c.type === i.type && M === this._step ? (m && !p ? p = this._newPolygon(h, _, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(nd(i, !1, !1, t)), w && d.updateData(a, { isIgnore: b, clipShape: nd(i, !1, !0, t) }), a.eachItemGraphicEl(function (t) {t.stopAnimation(!0);}), Kc(this._stackedOnPoints, _) && Kc(this._points, h) || (v ? this._updateAnimation(a, _, i, n, M, y) : (M && (h = id(h, i, M), _ = id(_, i, M)), f.setShape({ points: h }), p && p.setShape({ points: h, stackedOnPoints: _ })))) : (w && d.updateData(a, { isIgnore: b, clipShape: nd(i, !1, !0, t) }), M && (h = id(h, i, M), _ = id(_, i, M)), f = this._newPolyline(h, i, v), m && (p = this._newPolygon(h, _, i, v)), g.setClipPath(nd(i, !0, !1, t)));var I = rd(a, i) || a.getVisual("color");f.useStyle(s(o.getLineStyle(), { fill: "none", stroke: I, lineJoin: "bevel" }));var T = t.get("smooth");if (T = $c(t.get("smooth")), f.setShape({ smooth: T, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {var C = a.getCalculationInfo("stackedOnSeries"),D = 0;p.useStyle(s(l.getAreaStyle(), { fill: I, opacity: .7, lineJoin: "bevel" })), C && (D = $c(C.get("smooth"))), p.setShape({ smooth: T, stackedOnSmooth: D, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });}this._data = a, this._coordSys = i, this._stackedOnPoints = _, this._points = h, this._step = M, this._valueOrigin = y;}, dispose: function dispose() {}, highlight: function highlight(t, e, n, i) {var r = t.getData(),a = Yi(r, i);if (!(a instanceof Array) && null != a && a >= 0) {var o = r.getItemGraphicEl(a);if (!o) {var s = r.getItemLayout(a);if (!s) return;o = new kc(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);}o.highlight();} else Vs.prototype.highlight.call(this, t, e, n, i);}, downplay: function downplay(t, e, n, i) {var r = t.getData(),a = Yi(r, i);if (null != a && a >= 0) {var o = r.getItemGraphicEl(a);o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());} else Vs.prototype.downplay.call(this, t, e, n, i);}, _newPolyline: function _newPolyline(t) {var e = this._polyline;return e && this._lineGroup.remove(e), e = new Xb({ shape: { points: t }, silent: !0, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;}, _newPolygon: function _newPolygon(t, e) {var n = this._polygon;return n && this._lineGroup.remove(n), n = new Yb({ shape: { points: t, stackedOnPoints: e }, silent: !0 }), this._lineGroup.add(n), this._polygon = n, n;}, _updateAnimation: function _updateAnimation(t, e, n, i, r, a) {var o = this._polyline,s = this._polygon,l = t.hostModel,h = Eb(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),u = h.current,c = h.stackedOnCurrent,d = h.next,f = h.stackedOnNext;r && (u = id(h.current, n, r), c = id(h.stackedOnCurrent, n, r), d = id(h.next, n, r), f = id(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, Oa(o, { shape: { points: d } }, l), s && (s.setShape({ points: u, stackedOnPoints: c }), Oa(s, { shape: { points: d, stackedOnPoints: f } }, l));for (var p = [], g = h.status, v = 0; v < g.length; v++) {var m = g[v].cmd;if ("=" === m) {var y = t.getItemGraphicEl(g[v].idx1);y && p.push({ el: y, ptIdx: v });}}o.animators && o.animators.length && o.animators[0].during(function () {for (var t = 0; t < p.length; t++) {var e = p[t].el;e.attr("position", o.shape.__points[p[t].ptIdx]);}});}, remove: function remove() {var t = this.group,e = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (n, i) {n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;} });var qb = function qb(t, e, n) {return { seriesType: t, performRawSeries: !0, reset: function reset(t, i) {function r(e, n) {if ("function" == typeof s) {var i = t.getRawValue(n),r = t.getDataParams(n);e.setItemVisual(n, "symbolSize", s(i, r));}if (e.hasItemOption) {var a = e.getItemModel(n),o = a.getShallow("symbol", !0),l = a.getShallow("symbolSize", !0),h = a.getShallow("symbolKeepAspect", !0);null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != h && e.setItemVisual(n, "symbolKeepAspect", h);}}var a = t.getData(),o = t.get("symbol") || e,s = t.get("symbolSize"),l = t.get("symbolKeepAspect");if (a.setVisual({ legendSymbol: n || o, symbol: o, symbolSize: s, symbolKeepAspect: l }), !i.isSeriesFiltered(t)) {var h = "function" == typeof s;return { dataEach: a.hasItemOption || h ? r : null };}} };},jb = function jb(t) {return { seriesType: t, plan: Cx(), reset: function reset(t) {function e(t, e) {for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {var d;if (1 === s) {var f = e.get(o[0], l);d = !isNaN(f) && i.dataToPoint(f, null, c);} else {var f = u[0] = e.get(o[0], l),p = u[1] = e.get(o[1], l);d = !isNaN(f) && !isNaN(p) && i.dataToPoint(u, null, c);}a ? (r[h++] = d ? d[0] : 0 / 0, r[h++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0]);}a && e.setLayout("symbolPoints", r);}var n = t.getData(),i = t.coordinateSystem,r = t.pipelineContext,a = r.large;if (i) {var o = p(i.dimensions, function (t) {return n.mapDimension(t);}).slice(0, 2),s = o.length,l = n.getCalculationInfo("stackResultDimension");return zh(n, o[0]) && (o[0] = l), zh(n, o[1]) && (o[1] = l), s && { progress: e };}} };},Zb = { average: function average(t) {for (var e = 0, n = 0, i = 0; i < t.length; i++) {isNaN(t[i]) || (e += t[i], n++);}return 0 === n ? 0 / 0 : e / n;}, sum: function sum(t) {for (var e = 0, n = 0; n < t.length; n++) {e += t[n] || 0;}return e;}, max: function max(t) {for (var e = -1 / 0, n = 0; n < t.length; n++) {t[n] > e && (e = t[n]);}return isFinite(e) ? e : 0 / 0;}, min: function min(t) {for (var e = 1 / 0, n = 0; n < t.length; n++) {t[n] < e && (e = t[n]);}return isFinite(e) ? e : 0 / 0;}, nearest: function nearest(t) {return t[0];} },Ub = function Ub(t) {return Math.round(t.length / 2);},Kb = function Kb(t) {return { seriesType: t, modifyOutputEnd: !0, reset: function reset(t) {var e = t.getData(),n = t.get("sampling"),i = t.coordinateSystem;if ("cartesian2d" === i.type && n) {var r = i.getBaseAxis(),a = i.getOtherAxis(r),o = r.getExtent(),s = o[1] - o[0],l = Math.round(e.count() / s);if (l > 1) {var h;"string" == typeof n ? h = Zb[n] : "function" == typeof n && (h = n), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, Ub));}}} };};eh(qb("line", "circle", "line")), th(jb("line")), Ul(M_.PROCESSOR.STATISTIC, Kb("line"));var $b = function $b(t, e, n) {e = _(e) && { coordDimensions: e } || o({}, e);var i = t.getSource(),r = ow(i, e),a = new iw(r, t);return a.initData(i, n), a;},Qb = { updateSelectedMap: function updateSelectedMap(t) {this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {return t.set(e.name, e), t;}, R());}, select: function select(t, e) {var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),i = this.get("selectedMode");"single" === i && this._selectTargetMap.each(function (t) {t.selected = !1;}), n && (n.selected = !0);}, unSelect: function unSelect(t, e) {var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);n && (n.selected = !1);}, toggleSelected: function toggleSelected(t, e) {var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0;}, isSelected: function isSelected(t, e) {var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return n && n.selected;} },Jb = oh({ type: "series.pie", init: function init(t) {Jb.superApply(this, "init", arguments), this.legendDataProvider = function () {return this.getRawData();}, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);}, mergeOption: function mergeOption(t) {Jb.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());}, getInitialData: function getInitialData() {return $b(this, ["value"]);}, _createSelectableList: function _createSelectableList() {for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) {n.push({ name: t.getName(i), value: t.get(e, i), selected: Cs(t, i, "selected") });}return n;}, getDataParams: function getDataParams(t) {var e = this.getData(),n = Jb.superCall(this, "getDataParams", t),i = [];return e.each(e.mapDimension("value"), function (t) {i.push(t);}), n.percent = no(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;}, _defaultLabelLine: function _defaultLabelLine(t) {Ri(t, "labelLine", ["show"]);var e = t.labelLine,n = t.emphasis.labelLine;e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;}, defaultOption: { zlevel: 0, z: 2, legendHoverLink: !0, hoverAnimation: !0, center: ["50%", "50%"], radius: [0, "75%"], clockwise: !0, startAngle: 90, minAngle: 0, selectedOffset: 10, hoverOffset: 10, avoidLabelOverlap: !0, percentPrecision: 2, stillShowZeroSum: !0, label: { rotate: !1, show: !0, position: "outer" }, labelLine: { show: !0, length: 15, length2: 15, smooth: !1, lineStyle: { width: 1, type: "solid" } }, itemStyle: { borderWidth: 1 }, animationType: "expansion", animationEasing: "cubicOut" } });c(Jb, Qb);var tS = hd.prototype;tS.updateData = function (t, e, n) {function i() {a.stopAnimation(!0), a.animateTo({ shape: { r: u.r + l.get("hoverOffset") } }, 300, "elasticOut");}function r() {a.stopAnimation(!0), a.animateTo({ shape: { r: u.r } }, 300, "elasticOut");}var a = this.childAt(0),l = t.hostModel,h = t.getItemModel(e),u = t.getItemLayout(e),c = o({}, u);if (c.label = null, n) {a.setShape(c);var d = l.getShallow("animationType");"scale" === d ? (a.shape.r = u.r0, za(a, { shape: { r: u.r } }, l, e)) : (a.shape.endAngle = u.startAngle, Oa(a, { shape: { endAngle: u.endAngle } }, l, e));} else Oa(a, { shape: c }, l, e);var f = t.getItemVisual(e, "color");a.useStyle(s({ lineJoin: "bevel", fill: f }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();var p = h.getShallow("cursor");p && a.attr("cursor", p), ld(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), _a(this);}, tS._updateLabel = function (t, e) {var n = this.childAt(1),i = this.childAt(2),r = t.hostModel,a = t.getItemModel(e),o = t.getItemLayout(e),s = o.label,l = t.getItemVisual(e, "color");Oa(n, { shape: { points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]] } }, r, e), Oa(i, { style: { x: s.x, y: s.y } }, r, e), i.attr({ rotation: s.rotation, origin: [s.x, s.y], z2: 10 });var h = a.getModel("label"),u = a.getModel("emphasis.label"),c = a.getModel("labelLine"),d = a.getModel("emphasis.labelLine"),l = t.getItemVisual(e, "color");ba(i.style, i.hoverStyle = {}, h, u, { labelFetcher: t.hostModel, labelDataIndex: e, defaultText: t.getName(e), autoColor: l, useInsideStyle: !!s.inside }, { textAlign: s.textAlign, textVerticalAlign: s.verticalAlign, opacity: t.getItemVisual(e, "opacity") }), i.ignore = i.normalIgnore = !h.get("show"), i.hoverIgnore = !u.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({ stroke: l, opacity: t.getItemVisual(e, "opacity") }), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();var f = c.get("smooth");f && f === !0 && (f = .4), n.setShape({ smooth: f });}, u(hd, bg);var eS = (Vs.extend({ type: "pie", init: function init() {var t = new bg();this._sectorGroup = t;}, render: function render(t, e, n, i) {if (!i || i.from !== this.uid) {var r = t.getData(),a = this._data,o = this.group,s = e.get("animation"),l = !a,h = t.get("animationType"),u = x(sd, this.uid, t, s, n),c = t.get("selectedMode");if (r.diff(a).add(function (t) {var e = new hd(r, t);l && "scale" !== h && e.eachChild(function (t) {t.stopAnimation(!0);}), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e);}).update(function (t, e) {var n = a.getItemGraphicEl(e);n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n);}).remove(function (t) {var e = a.getItemGraphicEl(t);o.remove(e);}).execute(), s && l && r.count() > 0 && "scale" !== h) {var d = r.getItemLayout(0),f = Math.max(n.getWidth(), n.getHeight()) / 2,p = y(o.removeClipPath, o);o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t));} else o.removeClipPath();this._data = r;}}, dispose: function dispose() {}, _createClipPath: function _createClipPath(t, e, n, i, r, a, o) {var s = new Rm({ shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r } });return za(s, { shape: { endAngle: i + (r ? 1 : -1) * Math.PI * 2 } }, o, a), s;}, containPoint: function containPoint(t, e) {var n = e.getData(),i = n.getItemLayout(0);if (i) {var r = t[0] - i.cx,a = t[1] - i.cy,o = Math.sqrt(r * r + a * a);return o <= i.r && o >= i.r0;}} }), function (t, e) {f(e, function (e) {e.update = "updateView", $l(e, function (n, i) {var r = {};return i.eachComponent({ mainType: "series", subType: t, query: n }, function (t) {t[e.method] && t[e.method](n.name, n.dataIndex);var i = t.getData();i.each(function (e) {var n = i.getName(e);r[n] = t.isSelected(n) || !1;});}), { name: n.name, selected: r };});});}),nS = function nS(t) {return { getTargetSeries: function getTargetSeries(e) {var n = {},i = R();return e.eachSeriesByType(t, function (t) {t.__paletteScope = n, i.set(t.uid, t);}), i;}, reset: function reset(t) {var e = t.getRawData(),n = {},i = t.getData();i.each(function (t) {var e = i.getRawIndex(t);n[e] = t;}), e.each(function (r) {var a = n[r],o = null != a && i.getItemVisual(a, "color", !0);if (o) e.setItemVisual(r, "color", o);else {var s = e.getItemModel(r),l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l);}});} };},iS = function iS(t, e, n, i) {var r,a,o = t.getData(),s = [],l = !1;o.each(function (n) {var i,h,u,c,d = o.getItemLayout(n),f = o.getItemModel(n),p = f.getModel("label"),g = p.get("position") || f.get("emphasis.label.position"),v = f.getModel("labelLine"),m = v.get("length"),y = v.get("length2"),x = (d.startAngle + d.endAngle) / 2,_ = Math.cos(x),w = Math.sin(x);r = d.cx, a = d.cy;var b = "inside" === g || "inner" === g;if ("center" === g) i = d.cx, h = d.cy, c = "center";else {var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r,M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;if (i = S + 3 * _, h = M + 3 * w, !b) {var I = S + _ * (m + e - d.r),T = M + w * (m + e - d.r),C = I + (0 > _ ? -1 : 1) * y,D = T;i = C + (0 > _ ? -5 : 5), h = D, u = [[S, M], [I, T], [C, D]];}c = b ? "center" : _ > 0 ? "left" : "right";}var A = p.getFont(),k = p.get("rotate") ? 0 > _ ? -x + Math.PI : -x : 0,P = t.getFormattedLabel(n, "normal") || o.getName(n),L = Rn(P, A, c, "top");l = !!k, d.label = { x: i, y: h, position: g, height: L.height, len: m, len2: y, linePoints: u, textAlign: c, verticalAlign: "middle", rotation: k, inside: b }, b || s.push(d.label);}), !l && t.get("avoidLabelOverlap") && cd(s, r, a, e, n, i);},rS = 2 * Math.PI,aS = Math.PI / 180,oS = function oS(t, e, n) {e.eachSeriesByType(t, function (t) {var e = t.getData(),i = e.mapDimension("value"),r = t.get("center"),a = t.get("radius");_(a) || (a = [0, a]), _(r) || (r = [r, r]);var o = n.getWidth(),s = n.getHeight(),l = Math.min(o, s),h = Ka(r[0], o),u = Ka(r[1], s),c = Ka(a[0], l / 2),d = Ka(a[1], l / 2),f = -t.get("startAngle") * aS,p = t.get("minAngle") * aS,g = 0;e.each(i, function (t) {!isNaN(t) && g++;});var v = e.getSum(i),m = Math.PI / (v || g) * 2,y = t.get("clockwise"),x = t.get("roseType"),w = t.get("stillShowZeroSum"),b = e.getDataExtent(i);b[0] = 0;var S = rS,M = 0,I = f,T = y ? 1 : -1;if (e.each(i, function (t, n) {var i;if (isNaN(t)) return void e.setItemLayout(n, { angle: 0 / 0, startAngle: 0 / 0, endAngle: 0 / 0, clockwise: y, cx: h, cy: u, r0: c, r: x ? 0 / 0 : d });i = "area" !== x ? 0 === v && w ? m : t * m : rS / g, p > i ? (i = p, S -= p) : M += t;var r = I + T * i;e.setItemLayout(n, { angle: i, startAngle: I, endAngle: r, clockwise: y, cx: h, cy: u, r0: c, r: x ? Ua(t, b, [c, d]) : d }), I = r;}), rS > S && g) if (.001 >= S) {var C = rS / g;e.each(i, function (t, n) {if (!isNaN(t)) {var i = e.getItemLayout(n);i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n + 1) * C;}});} else m = S / M, I = f, e.each(i, function (t, n) {if (!isNaN(t)) {var i = e.getItemLayout(n),r = i.angle === p ? p : t * m;i.startAngle = I, i.endAngle = I + T * r, I += T * r;}});iS(t, d, o, s);});},sS = function sS(t) {return { seriesType: t, reset: function reset(t, e) {var n = e.findComponents({ mainType: "legend" });if (n && n.length) {var i = t.getData();i.filterSelf(function (t) {for (var e = i.getName(t), r = 0; r < n.length; r++) {if (!n[r].isSelected(e)) return !1;}return !0;});}} };};eS("pie", [{ type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected" }, { type: "pieSelect", event: "pieselected", method: "select" }, { type: "pieUnSelect", event: "pieunselected", method: "unSelect" }]), eh(nS("pie")), th(x(oS, "pie")), Ul(sS("pie")), Mx.extend({ type: "series.heatmap", getInitialData: function getInitialData() {return Eh(this.getSource(), this, { generateCoord: "value" });}, preventIncremental: function preventIncremental() {var t = ts.get(this.get("coordinateSystem"));return t && t.dimensions ? "lng" === t.dimensions[0] && "lat" === t.dimensions[1] : void 0;}, defaultOption: { coordinateSystem: "cartesian2d", zlevel: 0, z: 2, geoIndex: 0, blurSize: 30, pointSize: 20, maxOpacity: 1, minOpacity: 0 } });var lS = 256;fd.prototype = { update: function update(t, e, n, i, r, a) {var o = this._getBrush(),s = this._getGradient(t, r, "inRange"),l = this._getGradient(t, r, "outOfRange"),h = this.pointSize + this.blurSize,u = this.canvas,c = u.getContext("2d"),d = t.length;u.width = e, u.height = n;for (var f = 0; d > f; ++f) {var p = t[f],g = p[0],v = p[1],m = p[2],y = i(m);c.globalAlpha = y, c.drawImage(o, g - h, v - h);}if (!u.width || !u.height) return u;for (var x = c.getImageData(0, 0, u.width, u.height), _ = x.data, w = 0, b = _.length, S = this.minOpacity, M = this.maxOpacity, I = M - S; b > w;) {var y = _[w + 3] / 256,T = 4 * Math.floor(y * (lS - 1));if (y > 0) {var C = a(y) ? s : l;y > 0 && (y = y * I + S), _[w++] = C[T], _[w++] = C[T + 1], _[w++] = C[T + 2], _[w++] = C[T + 3] * y * 256;} else w += 4;}return c.putImageData(x, 0, 0), u;}, _getBrush: function _getBrush() {var t = this._brushCanvas || (this._brushCanvas = Sp()),e = this.pointSize + this.blurSize,n = 2 * e;t.width = n, t.height = n;var i = t.getContext("2d");return i.clearRect(0, 0, n, n), i.shadowOffsetX = n, i.shadowBlur = this.blurSize, i.shadowColor = "#000", i.beginPath(), i.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), t;}, _getGradient: function _getGradient(t, e, n) {for (var i = this._gradientPixels, r = i[n] || (i[n] = new Uint8ClampedArray(1024)), a = [0, 0, 0, 0], o = 0, s = 0; 256 > s; s++) {e[n](s / 255, !0, a), r[o++] = a[0], r[o++] = a[1], r[o++] = a[2], r[o++] = a[3];}return r;} }, sh({ type: "heatmap", render: function render(t, e, n) {var i;e.eachComponent("visualMap", function (e) {e.eachTargetSeries(function (n) {n === t && (i = e);});}), this.group.removeAll(), this._incrementalDisplayable = null;var r = t.coordinateSystem;"cartesian2d" === r.type || "calendar" === r.type ? this._renderOnCartesianAndCalendar(t, n, 0, t.getData().count()) : vd(r) && this._renderOnGeo(r, t, i, n);}, incrementalPrepareRender: function incrementalPrepareRender() {this.group.removeAll();}, incrementalRender: function incrementalRender(t, e, n, i) {var r = e.coordinateSystem;r && this._renderOnCartesianAndCalendar(e, i, t.start, t.end, !0);}, _renderOnCartesianAndCalendar: function _renderOnCartesianAndCalendar(t, e, n, i, r) {var a,s,l = t.coordinateSystem;if ("cartesian2d" === l.type) {var h = l.getAxis("x"),u = l.getAxis("y");a = h.getBandWidth(), s = u.getBandWidth();}for (var c = this.group, d = t.getData(), f = "itemStyle", p = "emphasis.itemStyle", g = "label", v = "emphasis.label", m = t.getModel(f).getItemStyle(["color"]), y = t.getModel(p).getItemStyle(), x = t.getModel(g), _ = t.getModel(v), w = l.type, b = "cartesian2d" === w ? [d.mapDimension("x"), d.mapDimension("y"), d.mapDimension("value")] : [d.mapDimension("time"), d.mapDimension("value")], S = n; i > S; S++) {var M;if ("cartesian2d" === w) {if (isNaN(d.get(b[2], S))) continue;var I = l.dataToPoint([d.get(b[0], S), d.get(b[1], S)]);M = new qm({ shape: { x: I[0] - a / 2, y: I[1] - s / 2, width: a, height: s }, style: { fill: d.getItemVisual(S, "color"), opacity: d.getItemVisual(S, "opacity") } });} else {if (isNaN(d.get(b[1], S))) continue;M = new qm({ z2: 1, shape: l.dataToRect([d.get(b[0], S)]).contentShape, style: { fill: d.getItemVisual(S, "color"), opacity: d.getItemVisual(S, "opacity") } });}var T = d.getItemModel(S);d.hasItemOption && (m = T.getModel(f).getItemStyle(["color"]), y = T.getModel(p).getItemStyle(), x = T.getModel(g), _ = T.getModel(v));var C = t.getRawValue(S),D = "-";C && null != C[2] && (D = C[2]), ba(m, y, x, _, { labelFetcher: t, labelDataIndex: S, defaultText: D, isRectText: !0 }), M.setStyle(m), _a(M, d.hasItemOption ? y : o({}, y)), M.incremental = r, r && (M.useHoverLayer = !0), c.add(M), d.setItemGraphicEl(S, M);}}, _renderOnGeo: function _renderOnGeo(t, e, n, i) {var r = n.targetVisuals.inRange,a = n.targetVisuals.outOfRange,o = e.getData(),s = this._hmLayer || this._hmLayer || new fd();s.blurSize = e.get("blurSize"), s.pointSize = e.get("pointSize"), s.minOpacity = e.get("minOpacity"), s.maxOpacity = e.get("maxOpacity");var l = t.getViewRect().clone(),h = t.getRoamTransform();l.applyTransform(h);var u = Math.max(l.x, 0),c = Math.max(l.y, 0),d = Math.min(l.width + l.x, i.getWidth()),f = Math.min(l.height + l.y, i.getHeight()),p = d - u,g = f - c,v = [o.mapDimension("lng"), o.mapDimension("lat"), o.mapDimension("value")],m = o.mapArray(v, function (e, n, i) {var r = t.dataToPoint([e, n]);return r[0] -= u, r[1] -= c, r.push(i), r;}),y = n.getExtent(),x = "visualMap.continuous" === n.type ? gd(y, n.option.range) : pd(y, n.getPieceList(), n.option.selected);s.update(m, p, g, r.color.getNormalizer(), { inRange: r.color.getColorMapper(), outOfRange: a.color.getColorMapper() }, x);var _ = new _i({ style: { width: p, height: g, x: u, y: c, image: s.canvas }, silent: !0 });this.group.add(_);}, dispose: function dispose() {} });var hS = f,uS = "\x00__link_datas",cS = "\x00__link_mainData",dS = function dS(t, e) {this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e;};dS.prototype = { constructor: dS, isRemoved: function isRemoved() {return this.dataIndex < 0;}, eachNode: function eachNode(t, e, n) {"function" == typeof t && (n = e, e = t, t = null), t = t || {}, b(t) && (t = { order: t });var i,r = t.order || "preorder",a = this[t.attr || "children"];"preorder" === r && (i = e.call(n, this));for (var o = 0; !i && o < a.length; o++) {a[o].eachNode(t, e, n);}"postorder" === r && e.call(n, this);}, updateDepthAndHeight: function updateDepthAndHeight(t) {var e = 0;this.depth = t;for (var n = 0; n < this.children.length; n++) {var i = this.children[n];i.updateDepthAndHeight(t + 1), i.height > e && (e = i.height);}this.height = e + 1;}, getNodeById: function getNodeById(t) {if (this.getId() === t) return this;for (var e = 0, n = this.children, i = n.length; i > e; e++) {var r = n[e].getNodeById(t);if (r) return r;}}, contains: function contains(t) {if (t === this) return !0;for (var e = 0, n = this.children, i = n.length; i > e; e++) {var r = n[e].contains(t);if (r) return r;}}, getAncestors: function getAncestors(t) {for (var e = [], n = t ? this : this.parentNode; n;) {e.push(n), n = n.parentNode;}return e.reverse(), e;}, getValue: function getValue(t) {var e = this.hostTree.data;return e.get(e.getDimension(t || "value"), this.dataIndex);}, setLayout: function setLayout(t, e) {this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e);}, getLayout: function getLayout() {return this.hostTree.data.getItemLayout(this.dataIndex);}, getModel: function getModel(t) {if (!(this.dataIndex < 0)) {var e,n = this.hostTree,i = n.data.getItemModel(this.dataIndex),r = this.getLevelModel();return r || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !1) || (e = this.getLeavesModel()), i.getModel(t, (r || e || n.hostModel).getModel(t));}}, getLevelModel: function getLevelModel() {return (this.hostTree.levelModels || [])[this.depth];}, getLeavesModel: function getLeavesModel() {return this.hostTree.leavesModel;}, setVisual: function setVisual(t, e) {this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e);}, getVisual: function getVisual(t, e) {return this.hostTree.data.getItemVisual(this.dataIndex, t, e);}, getRawIndex: function getRawIndex() {return this.hostTree.data.getRawIndex(this.dataIndex);}, getId: function getId() {return this.hostTree.data.getId(this.dataIndex);}, isAncestorOf: function isAncestorOf(t) {for (var e = t.parentNode; e;) {if (e === this) return !0;e = e.parentNode;}return !1;}, isDescendantOf: function isDescendantOf(t) {return t !== this && t.isAncestorOf(this);} }, Id.prototype = { constructor: Id, type: "tree", eachNode: function eachNode(t, e, n) {this.root.eachNode(t, e, n);}, getNodeByDataIndex: function getNodeByDataIndex(t) {var e = this.data.getRawIndex(t);return this._nodes[e];}, getNodeByName: function getNodeByName(t) {return this.root.getNodeByName(t);}, update: function update() {for (var t = this.data, e = this._nodes, n = 0, i = e.length; i > n; n++) {e[n].dataIndex = -1;}for (var n = 0, i = t.count(); i > n; n++) {e[t.getRawIndex(n)].dataIndex = n;}}, clearLayouts: function clearLayouts() {this.data.clearItemLayouts();} }, Id.createTree = function (t, e, n) {function i(t, e) {var n = t.value;o = Math.max(o, _(n) ? n.length : 1), a.push(t);var s = new dS(t.name, r);e ? Td(s, e) : r.root = s, r._nodes.push(s);var l = t.children;if (l) for (var h = 0; h < l.length; h++) {i(l[h], s);}}var r = new Id(e, n.levels, n.leaves),a = [],o = 1;i(t), r.root.updateDepthAndHeight(0);var s = ow(a, { coordDimensions: ["value"], dimensionsCount: o }),l = new iw(s, e);return l.initData(a), md({ mainData: l, struct: r, structAttr: "tree" }), r.update(), r;}, Mx.extend({ type: "series.tree", layoutInfo: null, layoutMode: "box", getInitialData: function getInitialData(t) {var e = { name: t.name, children: t.data },n = t.leaves || {},i = {};i.leaves = n;var r = Id.createTree(e, this, i),a = 0;r.eachNode("preorder", function (t) {t.depth > a && (a = t.depth);});var o = t.expandAndCollapse,s = o && t.initialTreeDepth >= 0 ? t.initialTreeDepth : a;return r.root.eachNode("preorder", function (t) {var e = t.hostTree.data.getRawDataItem(t.dataIndex);t.isExpand = e && null != e.collapsed ? !e.collapsed : t.depth <= s;}), r.data;}, getOrient: function getOrient() {var t = this.get("orient");return "horizontal" === t ? t = "LR" : "vertical" === t && (t = "TB"), t;}, setZoom: function setZoom(t) {this.option.zoom = t;}, setCenter: function setCenter(t) {this.option.center = t;}, formatTooltip: function formatTooltip(t) {for (var e = this.getData().tree, n = e.root.children[0], i = e.getNodeByDataIndex(t), r = i.getValue(), a = i.name; i && i !== n;) {a = i.parentNode.name + "." + a, i = i.parentNode;}return go(a + (isNaN(r) || null == r ? "" : " : " + r));}, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "view", left: "12%", top: "12%", right: "12%", bottom: "12%", layout: "orthogonal", roam: !1, nodeScaleRatio: .4, center: null, zoom: 1, orient: "LR", symbol: "emptyCircle", symbolSize: 7, expandAndCollapse: !0, initialTreeDepth: 2, lineStyle: { color: "#ccc", width: 1.5, curveness: .5 }, itemStyle: { color: "lightsteelblue", borderColor: "#c23531", borderWidth: 1.5 }, label: { show: !0, color: "#555" }, leaves: { label: { show: !0 } }, animationEasing: "linear", animationDuration: 700, animationDurationUpdate: 1e3 } });var fS = ae;c(Vd, jp), Gd.prototype = { constructor: Gd, type: "view", dimensions: ["x", "y"], setBoundingRect: function setBoundingRect(t, e, n, i) {return this._rect = new xn(t, e, n, i), this._rect;}, getBoundingRect: function getBoundingRect() {return this._rect;}, setViewRect: function setViewRect(t, e, n, i) {this.transformTo(t, e, n, i), this._viewRect = new xn(t, e, n, i);}, transformTo: function transformTo(t, e, n, i) {var r = this.getBoundingRect(),a = this._rawTransformable;a.transform = r.calculateTransform(new xn(t, e, n, i)), a.decomposeTransform(), this._updateTransform();}, setCenter: function setCenter(t) {t && (this._center = t, this._updateCenterAndZoom());}, setZoom: function setZoom(t) {t = t || 1;var e = this.zoomLimit;e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom();}, getDefaultCenter: function getDefaultCenter() {var t = this.getBoundingRect(),e = t.x + t.width / 2,n = t.y + t.height / 2;return [e, n];}, getCenter: function getCenter() {return this._center || this.getDefaultCenter();}, getZoom: function getZoom() {return this._zoom || 1;}, getRoamTransform: function getRoamTransform() {return this._roamTransformable.getLocalTransform();}, _updateCenterAndZoom: function _updateCenterAndZoom() {var t = this._rawTransformable.getLocalTransform(),e = this._roamTransformable,n = this.getDefaultCenter(),i = this.getCenter(),r = this.getZoom();i = ae([], i, t), n = ae([], n, t), e.origin = i, e.position = [n[0] - i[0], n[1] - i[1]], e.scale = [r, r], this._updateTransform();}, _updateTransform: function _updateTransform() {var t = this._roamTransformable,e = this._rawTransformable;e.parent = t, t.updateTransform(), e.updateTransform(), Ce(this.transform || (this.transform = []), e.transform || Ie()), this._rawTransform = e.getLocalTransform(), this.invTransform = this.invTransform || [], Le(this.invTransform, this.transform), this.decomposeTransform();}, getViewRect: function getViewRect() {return this._viewRect;}, getViewRectAfterRoam: function getViewRectAfterRoam() {var t = this.getBoundingRect().clone();return t.applyTransform(this.transform), t;}, dataToPoint: function dataToPoint(t, e, n) {var i = e ? this._rawTransform : this.transform;return n = n || [], i ? fS(n, t, i) : H(n, t);}, pointToData: function pointToData(t) {var e = this.invTransform;return e ? fS([], t, e) : [t[0], t[1]];}, convertToPixel: x(Hd, "dataToPoint"), convertFromPixel: x(Hd, "pointToData"), containPoint: function containPoint(t) {return this.getViewRectAfterRoam().contain(t[0], t[1]);} }, c(Gd, jp);var pS = "\x00_ec_interaction_mutex";$l({ type: "takeGlobalCursor", event: "globalCursorTaken", update: "update" }, function () {}), c(jd, zp);var gS = { axisPointer: 1, tooltip: 1, brush: 1 };sh({ type: "tree", init: function init(t, e) {this._oldTree, this._mainGroup = new bg(), this._controller = new jd(e.getZr()), this._controllerHost = { target: this.group }, this.group.add(this._mainGroup);}, render: function render(t, e, n) {var i = t.getData(),r = t.layoutInfo,a = this._mainGroup,o = t.get("layout");"radial" === o ? a.attr("position", [r.x + r.width / 2, r.y + r.height / 2]) : a.attr("position", [r.x, r.y]), this._updateViewCoordSys(t), this._updateController(t, e, n);var s = this._data,l = { expandAndCollapse: t.get("expandAndCollapse"), layout: o, orient: t.getOrient(), curvature: t.get("lineStyle.curveness"), symbolRotate: t.get("symbolRotate"), symbolOffset: t.get("symbolOffset"), hoverAnimation: t.get("hoverAnimation"), useNameLabel: !0, fadeIn: !0 };i.diff(s).add(function (e) {rf(i, e) && of(i, e, null, a, t, l);}).update(function (e, n) {var r = s.getItemGraphicEl(n);return rf(i, e) ? void of(i, e, r, a, t, l) : void (r && sf(s, n, r, a, t, l));}).remove(function (e) {var n = s.getItemGraphicEl(e);n && sf(s, e, n, a, t, l);}).execute(), this._nodeScaleRatio = t.get("nodeScaleRatio"), this._updateNodeAndLinkScale(t), l.expandAndCollapse === !0 && i.eachItemGraphicEl(function (e, i) {e.off("click").on("click", function () {n.dispatchAction({ type: "treeExpandAndCollapse", seriesId: t.id, dataIndex: i });});}), this._data = i;}, _updateViewCoordSys: function _updateViewCoordSys(t) {var e = t.getData(),n = [];e.each(function (t) {var i = e.getItemLayout(t);!i || isNaN(i.x) || isNaN(i.y) || n.push([+i.x, +i.y]);});var i = [],r = [];xr(n, i, r), r[0] - i[0] === 0 && (r[0] += 1, i[0] -= 1), r[1] - i[1] === 0 && (r[1] += 1, i[1] -= 1);var a = t.coordinateSystem = new Gd();a.zoomLimit = t.get("scaleLimit"), a.setBoundingRect(i[0], i[1], r[0] - i[0], r[1] - i[1]), a.setCenter(t.get("center")), a.setZoom(t.get("zoom")), this.group.attr({ position: a.position, scale: a.scale }), this._viewCoordSys = a;
    }, _updateController: function _updateController(t, e, n) {var i = this._controller,r = this._controllerHost,a = this.group;i.setPointerChecker(function (e, i, r) {var o = a.getBoundingRect();return o.applyTransform(a.transform), o.contain(i, r) && !nf(e, n, t);}), i.enable(t.get("roam")), r.zoomLimit = t.get("scaleLimit"), r.zoom = t.coordinateSystem.getZoom(), i.off("pan").off("zoom").on("pan", function (e) {Wd(r, e.dx, e.dy), n.dispatchAction({ seriesId: t.id, type: "treeRoam", dx: e.dx, dy: e.dy });}, this).on("zoom", function (e) {Xd(r, e.scale, e.originX, e.originY), n.dispatchAction({ seriesId: t.id, type: "treeRoam", zoom: e.scale, originX: e.originX, originY: e.originY }), this._updateNodeAndLinkScale(t);}, this);}, _updateNodeAndLinkScale: function _updateNodeAndLinkScale(t) {var e = t.getData(),n = this._getNodeGlobalScale(t),i = [n, n];e.eachItemGraphicEl(function (t) {t.attr("scale", i);});}, _getNodeGlobalScale: function _getNodeGlobalScale(t) {var e = t.coordinateSystem;if ("view" !== e.type) return 1;var n = this._nodeScaleRatio,i = e.scale,r = i && i[0] || 1,a = e.getZoom(),o = (a - 1) * n + 1;return o / r;}, dispose: function dispose() {this._controller && this._controller.dispose(), this._controllerHost = {};}, remove: function remove() {this._mainGroup.removeAll(), this._data = null;} }), $l({ type: "treeExpandAndCollapse", event: "treeExpandAndCollapse", update: "update" }, function (t, e) {e.eachComponent({ mainType: "series", subType: "tree", query: t }, function (e) {var n = t.dataIndex,i = e.getData().tree,r = i.getNodeByDataIndex(n);r.isExpand = !r.isExpand;});}), $l({ type: "treeRoam", event: "treeRoam", update: "none" }, function (t, e) {e.eachComponent({ mainType: "series", subType: "tree", query: t }, function (e) {var n = e.coordinateSystem,i = hf(n, t);e.setCenter && e.setCenter(i.center), e.setZoom && e.setZoom(i.zoom);});});var vS = function vS(t, e) {t.eachSeriesByType("tree", function (t) {df(t, e);});};eh(qb("tree", "circle")), th(vS), rh({ type: "title", layoutMode: { type: "box", ignoreSize: !0 }, defaultOption: { zlevel: 0, z: 6, show: !0, text: "", target: "blank", subtext: "", subtarget: "blank", left: 0, top: 0, backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, textStyle: { fontSize: 18, fontWeight: "bolder", color: "#333" }, subtextStyle: { color: "#aaa" } } }), ah({ type: "title", render: function render(t, e, n) {if (this.group.removeAll(), t.get("show")) {var i = this.group,r = t.getModel("textStyle"),a = t.getModel("subtextStyle"),o = t.get("textAlign"),s = t.get("textBaseline"),l = new zm({ style: Sa({}, r, { text: t.get("text"), textFill: r.getTextColor() }, { disableBox: !0 }), z2: 10 }),h = l.getBoundingRect(),u = t.get("subtext"),c = new zm({ style: Sa({}, a, { text: u, textFill: a.getTextColor(), y: h.height + t.get("itemGap"), textVerticalAlign: "top" }, { disableBox: !0 }), z2: 10 }),d = t.get("link"),f = t.get("sublink"),p = t.get("triggerEvent", !0);l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {window.open(d, "_" + t.get("target"));}), f && c.on("click", function () {window.open(f, "_" + t.get("subtarget"));}), l.eventData = c.eventData = p ? { componentType: "title", componentIndex: t.componentIndex } : null, i.add(l), u && i.add(c);var g = i.getBoundingRect(),v = t.getBoxLayoutParams();v.width = g.width, v.height = g.height;var m = Io(v, { width: n.getWidth(), height: n.getHeight() }, t.get("padding"));o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), i.attr("position", [m.x, m.y]);var y = { textAlign: o, textVerticalAlign: s };l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();var x = m.margin,_ = t.getItemStyle(["color", "opacity"]);_.fill = t.get("backgroundColor");var w = new qm({ shape: { x: g.x - x[3], y: g.y - x[0], width: g.width + x[1] + x[3], height: g.height + x[0] + x[2], r: t.get("borderRadius") }, style: _, silent: !0 });aa(w), i.add(w);}} });var mS = rh({ type: "legend.plain", dependencies: ["series"], layoutMode: { type: "box", ignoreSize: !0 }, init: function init(t, e, n) {this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {};}, mergeOption: function mergeOption(t) {mS.superCall(this, "mergeOption", t);}, optionUpdated: function optionUpdated() {this._updateData(this.ecModel);var t = this._data;if (t[0] && "single" === this.get("selectedMode")) {for (var e = !1, n = 0; n < t.length; n++) {var i = t[n].get("name");if (this.isSelected(i)) {this.select(i), e = !0;break;}}!e && this.select(t[0].get("name"));}}, _updateData: function _updateData(t) {var e = [],n = [];t.eachRawSeries(function (i) {var r = i.name;n.push(r);var a;if (i.legendDataProvider) {var o = i.legendDataProvider(),s = o.mapArray(o.getName);t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0;} else a = !0;a && Wi(i) && e.push(i.name);}), this._availableNames = n;var i = this.get("data") || e,r = p(i, function (t) {return ("string" == typeof t || "number" == typeof t) && (t = { name: t }), new Ha(t, this, this.ecModel);}, this);this._data = r;}, getData: function getData() {return this._data;}, select: function select(t) {var e = this.option.selected,n = this.get("selectedMode");if ("single" === n) {var i = this._data;f(i, function (t) {e[t.get("name")] = !1;});}e[t] = !0;}, unSelect: function unSelect(t) {"single" !== this.get("selectedMode") && (this.option.selected[t] = !1);}, toggleSelected: function toggleSelected(t) {var e = this.option.selected;e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);}, isSelected: function isSelected(t) {var e = this.option.selected;return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0;}, defaultOption: { zlevel: 0, z: 4, show: !0, orient: "horizontal", left: "center", top: 0, align: "auto", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderRadius: 0, borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 25, itemHeight: 14, inactiveColor: "#ccc", textStyle: { color: "#333" }, selectedMode: !0, tooltip: { show: !1 } } });$l("legendToggleSelect", "legendselectchanged", x(ff, "toggleSelected")), $l("legendSelect", "legendselected", x(ff, "select")), $l("legendUnSelect", "legendunselected", x(ff, "unSelect"));var yS = x,xS = f,_S = bg,wS = ah({ type: "legend.plain", newlineDisabled: !1, init: function init() {this.group.add(this._contentGroup = new _S()), this._backgroundEl, this._isFirstRender = !0;}, getContentGroup: function getContentGroup() {return this._contentGroup;}, render: function render(t, e, n) {var i = this._isFirstRender;if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {var r = t.get("align");r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(r, t, e, n);var a = t.getBoxLayoutParams(),o = { width: n.getWidth(), height: n.getHeight() },l = t.get("padding"),h = Io(a, o, l),u = this.layoutInner(t, r, h, i),c = Io(s({ width: u.width, height: u.height }, a), o, l);this.group.attr("position", [c.x - u.x, c.y - u.y]), this.group.add(this._backgroundEl = pf(u, t));}}, resetInner: function resetInner() {this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl);}, renderInner: function renderInner(t, e, n, i) {var r = this.getContentGroup(),a = R(),o = e.get("selectedMode"),s = [];n.eachRawSeries(function (t) {!t.get("legendHoverLink") && s.push(t.id);}), xS(e.getData(), function (l, h) {var u = l.get("name");if (!this.newlineDisabled && ("" === u || "\n" === u)) return void r.add(new _S({ newline: !0 }));var c = n.getSeriesByName(u)[0];if (!a.get(u)) if (c) {var d = c.getData(),f = d.getVisual("color");"function" == typeof f && (f = f(c.getDataParams(0)));var p = d.getVisual("legendSymbol") || "roundRect",g = d.getVisual("symbol"),v = this._createItem(u, h, l, e, p, g, t, f, o);v.on("click", yS(gf, u, i)).on("mouseover", yS(vf, c.name, null, i, s)).on("mouseout", yS(mf, c.name, null, i, s)), a.set(u, !0);} else n.eachRawSeries(function (n) {if (!a.get(u) && n.legendDataProvider) {var r = n.legendDataProvider(),c = r.indexOfName(u);if (0 > c) return;var d = r.getItemVisual(c, "color"),f = "roundRect",p = this._createItem(u, h, l, e, f, null, t, d, o);p.on("click", yS(gf, u, i)).on("mouseover", yS(vf, null, u, i, s)).on("mouseout", yS(mf, null, u, i, s)), a.set(u, !0);}}, this);}, this);}, _createItem: function _createItem(t, e, n, i, r, a, s, l, h) {var u = i.get("itemWidth"),c = i.get("itemHeight"),d = i.get("inactiveColor"),f = i.get("symbolKeepAspect"),p = i.isSelected(t),g = new _S(),v = n.getModel("textStyle"),m = n.get("icon"),y = n.getModel("tooltip"),x = y.parentModel;if (r = m || r, g.add(mu(r, 0, 0, u, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" === a)) {var _ = .8 * c;"none" === a && (a = "circle"), g.add(mu(a, (u - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f ? !0 : f));}var w = "left" === s ? u + 5 : -5,b = s,S = i.get("formatter"),M = t;"string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new zm({ style: Sa({}, v, { text: M, x: w, y: c / 2, textFill: p ? v.getTextColor() : d, textAlign: b, textVerticalAlign: "middle" }) }));var I = new qm({ shape: g.getBoundingRect(), invisible: !0, tooltip: y.get("show") ? o({ content: t, formatter: x.get("formatter", !0) || function () {return t;}, formatterParams: { componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"] } }, y.option) : null });return g.add(I), g.eachChild(function (t) {t.silent = !0;}), I.silent = !h, this.getContentGroup().add(g), _a(g), g.__legendDataIndex = e, g;}, layoutInner: function layoutInner(t, e, n) {var i = this.getContentGroup();Oy(t.get("orient"), i, t.get("itemGap"), n.width, n.height);var r = i.getBoundingRect();return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect();}, remove: function remove() {this.getContentGroup().removeAll(), this._isFirstRender = !0;} }),bS = function bS(t) {var e = t.findComponents({ mainType: "legend" });e && e.length && t.filterSeries(function (t) {for (var n = 0; n < e.length; n++) {if (!e[n].isSelected(t.name)) return !1;}return !0;});};Ul(bS), Ey.registerSubTypeDefaulter("legend", function () {return "plain";});var SS = mS.extend({ type: "legend.scroll", setScrollDataIndex: function setScrollDataIndex(t) {this.option.scrollDataIndex = t;}, defaultOption: { scrollDataIndex: 0, pageButtonItemGap: 5, pageButtonGap: null, pageButtonPosition: "end", pageFormatter: "{current}/{total}", pageIcons: { horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"], vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"] }, pageIconColor: "#2f4554", pageIconInactiveColor: "#aaa", pageIconSize: 15, pageTextStyle: { color: "#333" }, animationDurationUpdate: 800 }, init: function init(t, e, n, i) {var r = Co(t);SS.superCall(this, "init", t, e, n, i), yf(this, t, r);}, mergeOption: function mergeOption(t, e) {SS.superCall(this, "mergeOption", t, e), yf(this, this.option, t);}, getOrient: function getOrient() {return "vertical" === this.get("orient") ? { index: 1, name: "vertical" } : { index: 0, name: "horizontal" };} }),MS = bg,IS = ["width", "height"],TS = ["x", "y"],CS = wS.extend({ type: "legend.scroll", newlineDisabled: !0, init: function init() {CS.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new MS()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new MS()), this._showController;}, resetInner: function resetInner() {CS.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;}, renderInner: function renderInner(t, e, n, i) {function r(t, n) {var r = t + "DataIndex",l = Ga(e.get("pageIcons", !0)[e.getOrient().name][n], { onclick: y(a._pageGo, a, r, e, i) }, { x: -s[0] / 2, y: -s[1] / 2, width: s[0], height: s[1] });l.name = t, o.add(l);}var a = this;CS.superCall(this, "renderInner", t, e, n, i);var o = this._controllerGroup,s = e.get("pageIconSize", !0);_(s) || (s = [s, s]), r("pagePrev", 0);var l = e.getModel("pageTextStyle");o.add(new zm({ name: "pageText", style: { textFill: l.getTextColor(), font: l.getFont(), textVerticalAlign: "middle", textAlign: "center" }, silent: !0 })), r("pageNext", 1);}, layoutInner: function layoutInner(t, e, n, i) {var r = this.getContentGroup(),a = this._containerGroup,o = this._controllerGroup,s = t.getOrient().index,l = IS[s],h = IS[1 - s],u = TS[1 - s];Oy(t.get("orient"), r, t.get("itemGap"), s ? n.width : null, s ? null : n.height), Oy("horizontal", o, t.get("pageButtonItemGap", !0));var c = r.getBoundingRect(),d = o.getBoundingRect(),f = this._showController = c[l] > n[l],p = [-c.x, -c.y];i || (p[s] = r.position[s]);var g = [0, 0],v = [-d.x, -d.y],m = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));if (f) {var y = t.get("pageButtonPosition", !0);"end" === y ? v[s] += n[l] - d[l] : g[s] += d[l] + m;}v[1 - s] += c[h] / 2 - d[h] / 2, r.attr("position", p), a.attr("position", g), o.attr("position", v);var x = this.group.getBoundingRect(),x = { x: 0, y: 0 };if (x[l] = f ? n[l] : c[l], x[h] = Math.max(c[h], d[h]), x[u] = Math.min(0, d[u] + v[1 - s]), a.__rectSize = n[l], f) {var _ = { x: 0, y: 0 };_[l] = Math.max(n[l] - d[l] - m, 0), _[h] = x[h], a.setClipPath(new qm({ shape: _ })), a.__rectSize = _[l];} else o.eachChild(function (t) {t.attr({ invisible: !0, silent: !0 });});var w = this._getPageInfo(t);return null != w.pageIndex && Oa(r, { position: w.contentPosition }, f ? t : !1), this._updatePageInfoView(t, w), x;}, _pageGo: function _pageGo(t, e, n) {var i = this._getPageInfo(e)[t];null != i && n.dispatchAction({ type: "legendScroll", scrollDataIndex: i, legendId: e.id });}, _updatePageInfoView: function _updatePageInfoView(t, e) {var n = this._controllerGroup;f(["pagePrev", "pageNext"], function (i) {var r = null != e[i + "DataIndex"],a = n.childOfName(i);a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default");});var i = n.childOfName("pageText"),r = t.get("pageFormatter"),a = e.pageIndex,o = null != a ? a + 1 : 0,s = e.pageCount;i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({ current: o, total: s }));}, _getPageInfo: function _getPageInfo(t) {function e(t) {if (t) {var e = t.getBoundingRect(),n = e[l] + t.position[o];return { s: n, e: n + e[s], i: t.__legendDataIndex };}}function n(t, e) {return t.e >= e && t.s <= e + a;}var i = t.get("scrollDataIndex", !0),r = this.getContentGroup(),a = this._containerGroup.__rectSize,o = t.getOrient().index,s = IS[o],l = TS[o],h = this._findTargetItemIndex(i),u = r.children(),c = u[h],d = u.length,f = d ? 1 : 0,p = { contentPosition: r.position.slice(), pageCount: f, pageIndex: f - 1, pagePrevDataIndex: null, pageNextDataIndex: null };if (!c) return p;var g = e(c);p.contentPosition[o] = -g.s;for (var v = h + 1, m = g, y = g, x = null; d >= v; ++v) {x = e(u[v]), (!x && y.e > m.s + a || x && !n(x, m.s)) && (m = y.i > m.i ? y : x, m && (null == p.pageNextDataIndex && (p.pageNextDataIndex = m.i), ++p.pageCount)), y = x;}for (var v = h - 1, m = g, y = g, x = null; v >= -1; --v) {x = e(u[v]), x && n(y, x.s) || !(m.i < y.i) || (y = m, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = m.i), ++p.pageCount, ++p.pageIndex), m = x;}return p;}, _findTargetItemIndex: function _findTargetItemIndex(t) {var e,n = this.getContentGroup();return this._showController ? n.eachChild(function (n, i) {n.__legendDataIndex === t && (e = i);}) : e = 0, e;} });$l("legendScroll", "legendscroll", function (t, e) {var n = t.scrollDataIndex;null != n && e.eachComponent({ mainType: "legend", subType: "scroll", query: t }, function (t) {t.setScrollDataIndex(n);});});var DS = function DS(t, e) {var n,i = [],r = t.seriesIndex;if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };var a = n.getData(),o = Yi(a, t);if (null == o || 0 > o || _(o)) return { point: [] };var s = a.getItemGraphicEl(o),l = n.coordinateSystem;if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {return a.mapDimension(t);}), o, !0)) || [];else if (s) {var h = s.getBoundingRect().clone();h.applyTransform(s.transform), i = [h.x + h.width / 2, h.y + h.height / 2];}return { point: i, el: s };},AS = f,kS = x,PS = qi(),LS = function LS(t, e, n) {var i = t.currTrigger,r = [t.x, t.y],a = t,o = t.dispatchAction || y(n.dispatchAction, n),s = e.getComponent("axisPointer").coordSysAxesInfo;if (s) {Df(r) && (r = DS({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, e).point);var l = Df(r),h = a.axesInfo,u = s.axesInfo,c = "leave" === i || Df(r),d = {},f = {},p = { list: [], map: {} },g = { showPointer: kS(wf, f), showTooltip: kS(bf, p) };AS(s.coordSysMap, function (t, e) {var n = l || t.containPoint(r);AS(s.coordSysAxesInfo[e], function (t) {var e = t.axis,i = Tf(h, t);if (!c && n && (!h || i)) {var a = i && i.value;null != a || l || (a = e.pointToData(r)), null != a && xf(t, a, g, !1, d);}});});var v = {};return AS(u, function (t, e) {var n = t.linkGroup;n && !f[e] && AS(n.axesInfo, function (e, i) {var r = f[i];if (e !== t && r) {var a = r.value;n.mapper && (a = t.axis.scale.parse(n.mapper(a, Cf(e), Cf(t)))), v[t.key] = a;}});}), AS(v, function (t, e) {xf(u[e], t, g, !0, d);}), Sf(f, u, d), Mf(p, r, t, o), If(u, o, n), d;}},OS = (rh({ type: "axisPointer", coordSysAxesInfo: null, defaultOption: { show: "auto", triggerOn: null, zlevel: 0, z: 50, type: "line", snap: !1, triggerTooltip: !0, value: null, status: null, link: [], animation: null, animationDurationUpdate: 200, lineStyle: { color: "#aaa", width: 1, type: "solid" }, shadowStyle: { color: "rgba(150,150,150,0.3)" }, label: { show: !0, formatter: null, precision: "auto", margin: 3, color: "#fff", padding: [5, 7, 5, 7], backgroundColor: "auto", borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: "#aaa" }, handle: { show: !1, icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", size: 45, margin: 50, color: "#333", shadowBlur: 3, shadowColor: "#aaa", shadowOffsetX: 0, shadowOffsetY: 2, throttle: 40 } } }), qi()),zS = f,BS = ah({ type: "axisPointer", render: function render(t, e, n) {var i = e.getComponent("tooltip"),r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";Af("axisPointer", n, function (t, e, n) {"none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({ type: "updateAxisPointer", currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });});}, remove: function remove(t, e) {Bf(e.getZr(), "axisPointer"), BS.superApply(this._model, "remove", arguments);}, dispose: function dispose(t, e) {Bf("axisPointer", e), BS.superApply(this._model, "dispose", arguments);} }),ES = qi(),NS = i,RS = y;Ef.prototype = { _group: null, _lastGraphicKey: null, _handle: null, _dragging: !1, _lastValue: null, _lastStatus: null, _payloadInfo: null, animationThreshold: 15, render: function render(t, e, n, i) {var r = e.get("value"),a = e.get("status");if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {this._lastValue = r, this._lastStatus = a;var o = this._group,s = this._handle;if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());o && o.show(), s && s.show();var l = {};this.makeElOption(l, r, t, e, n);var h = l.graphicKey;h !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = h;var u = this._moveAnimation = this.determineAnimation(t, e);if (o) {var c = x(Nf, e, u);this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);} else o = this._group = new bg(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);Gf(o, e, !0), this._renderHandle(r);}}, remove: function remove(t) {this.clear(t);}, dispose: function dispose(t) {this.clear(t);}, determineAnimation: function determineAnimation(t, e) {var n = e.get("animation"),i = t.axis,r = "category" === i.type,a = e.get("snap");if (!a && !r) return !1;if ("auto" === n || null == n) {var o = this.animationThreshold;if (r && i.getBandWidth() > o) return !0;if (a) {var s = Sc(t).seriesDataCount,l = i.getExtent();return Math.abs(l[0] - l[1]) / s > o;}return !1;}return n === !0;}, makeElOption: function makeElOption() {}, createPointerEl: function createPointerEl(t, e) {var n = e.pointer;if (n) {var i = ES(t).pointerEl = new cy[n.type](NS(e.pointer));t.add(i);}}, createLabelEl: function createLabelEl(t, e, n, i) {if (e.label) {var r = ES(t).labelEl = new qm(NS(e.label));t.add(r), Ff(r, i);}}, updatePointerEl: function updatePointerEl(t, e, n) {var i = ES(t).pointerEl;i && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));}, updateLabelEl: function updateLabelEl(t, e, n, i) {var r = ES(t).labelEl;r && (r.setStyle(e.label.style), n(r, { shape: e.label.shape, position: e.label.position }), Ff(r, i));}, _renderHandle: function _renderHandle(t) {if (!this._dragging && this.updateHandleTransform) {var e = this._axisPointerModel,n = this._api.getZr(),i = this._handle,r = e.getModel("handle"),a = e.get("status");if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);var o;this._handle || (o = !0, i = this._handle = Ga(r.get("icon"), { cursor: "move", draggable: !0, onmousemove: function onmousemove(t) {Np(t.event);}, onmousedown: RS(this._onHandleDragMove, this, 0, 0), drift: RS(this._onHandleDragMove, this), ondragend: RS(this._onHandleDragEnd, this) }), n.add(i)), Gf(i, e, !1);var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];i.setStyle(r.getItemStyle(null, s));var l = r.get("size");_(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), qs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);}}, _moveHandleToValue: function _moveHandleToValue(t, e) {Nf(this._axisPointerModel, !e && this._moveAnimation, this._handle, Vf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));}, _onHandleDragMove: function _onHandleDragMove(t, e) {var n = this._handle;if (n) {this._dragging = !0;var i = this.updateHandleTransform(Vf(n), [t, e], this._axisModel, this._axisPointerModel);this._payloadInfo = i, n.stopAnimation(), n.attr(Vf(i)), ES(n).lastProp = null, this._doDispatchAxisPointer();}}, _doDispatchAxisPointer: function _doDispatchAxisPointer() {var t = this._handle;if (t) {var e = this._payloadInfo,n = this._axisModel;this._api.dispatchAction({ type: "updateAxisPointer", x: e.cursorPoint[0], y: e.cursorPoint[1], tooltipOption: e.tooltipOption, axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }] });}}, _onHandleDragEnd: function _onHandleDragEnd() {this._dragging = !1;var t = this._handle;if (t) {var e = this._axisPointerModel.get("value");this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });}}, getHandleTransform: null, updateHandleTransform: null, clear: function clear(t) {this._lastValue = null, this._lastStatus = null;var e = t.getZr(),n = this._group,i = this._handle;e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null);}, doClear: function doClear() {}, buildLabel: function buildLabel(t, e, n) {return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };} }, Ef.prototype.constructor = Ef, tr(Ef);var FS = Ef.extend({ makeElOption: function makeElOption(t, e, n, i, r) {var a = n.axis,o = a.grid,s = i.get("type"),l = Kf(o, a).getOtherAxis(a).getGlobalExtent(),h = a.toGlobalCoord(a.dataToCoord(e, !0));if (s && "none" !== s) {var u = Hf(i),c = VS[s](a, h, l, u);c.style = u, t.graphicKey = c.type, t.pointer = c;}var d = Ac(o.model, n);jf(e, t, d, n, i, r);}, getHandleTransform: function getHandleTransform(t, e, n) {var i = Ac(e.axis.grid.model, e, { labelInside: !1 });return i.labelMargin = n.get("handle.margin"), { position: qf(e.axis, t, i), rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };}, updateHandleTransform: function updateHandleTransform(t, e, n) {var i = n.axis,r = i.grid,a = i.getGlobalExtent(!0),o = Kf(r, i).getOtherAxis(i).getGlobalExtent(),s = "x" === i.dim ? 0 : 1,l = t.position;l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);var h = (o[1] + o[0]) / 2,u = [h, h];u[s] = l[s];var c = [{ verticalAlign: "middle" }, { align: "center" }];return { position: l, rotation: t.rotation, cursorPoint: u, tooltipOption: c[s] };} }),VS = { line: function line(t, e, n, i) {var r = Zf([e, n[0]], [e, n[1]], $f(t));return ra({ shape: r, style: i }), { type: "Line", shape: r };}, shadow: function shadow(t, e, n) {var i = Math.max(1, t.getBandWidth()),r = n[1] - n[0];return { type: "Rect", shape: Uf([e - i / 2, n[0]], [i, r], $f(t)) };} };Mb.registerAxisPointerClass("CartesianAxisPointer", FS), Zl(function (t) {if (t) {(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});var e = t.axisPointer.link;e && !_(e) && (t.axisPointer.link = [e]);}}), Ul(M_.PROCESSOR.STATISTIC, function (t, e) {t.getComponent("axisPointer").coordSysAxesInfo = vc(t, e);}), $l({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, LS), rh({ type: "tooltip", dependencies: ["axisPointer"], defaultOption: { zlevel: 0, z: 60, show: !0, showContent: !0, trigger: "item", triggerOn: "mousemove|click", alwaysShowContent: !1, displayMode: "single", renderMode: "auto", confine: !1, showDelay: 0, hideDelay: 100, transitionDuration: .4, enterable: !1, backgroundColor: "rgba(50,50,50,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} } }, textStyle: { color: "#fff", fontSize: 14 } } });var GS = f,HS = po,WS = ["", "-webkit-", "-moz-", "-o-"],XS = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";ep.prototype = { constructor: ep, _enterable: !0, update: function update() {var t = this._container,e = t.currentStyle || document.defaultView.getComputedStyle(t),n = t.style;"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");}, show: function show(t) {clearTimeout(this._hideTimeout);var e = this.el;e.style.cssText = XS + tp(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0;}, setContent: function setContent(t) {this.el.innerHTML = null == t ? "" : t;}, setEnterable: function setEnterable(t) {this._enterable = t;}, getSize: function getSize() {var t = this.el;return [t.clientWidth, t.clientHeight];}, moveTo: function moveTo(t, e) {var n,i = this._zr;i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);var r = this.el.style;r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;}, hide: function hide() {this.el.style.display = "none", this._show = !1;}, hideLater: function hideLater(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());}, isShow: function isShow() {return this._show;}, getOuterSize: function getOuterSize() {var t = this.el.clientWidth,e = this.el.clientHeight;if (document.defaultView && document.defaultView.getComputedStyle) {var n = document.defaultView.getComputedStyle(this.el);n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));}return { width: t, height: e };} }, np.prototype = { constructor: np, _enterable: !0, update: function update() {}, show: function show() {this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0;}, setContent: function setContent(t, e, n) {this.el && this._zr.remove(this.el);for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {var l = r.indexOf(o),h = r.substr(s + a.length, l - s - a.length);i["marker" + h] = h.indexOf("sub") > -1 ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[h], textOffset: [3, 0] } : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[h] }, r = r.substr(l + 1), s = r.indexOf("{marker");}this.el = new zm({ style: { rich: i, text: t, textLineHeight: 20, textBackgroundColor: n.get("backgroundColor"), textBorderRadius: n.get("borderRadius"), textFill: n.get("textStyle.color"), textPadding: n.get("padding") }, z: n.get("z") }), this._zr.add(this.el);var u = this;this.el.on("mouseover", function () {u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;}), this.el.on("mouseout", function () {u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;});}, setEnterable: function setEnterable(t) {this._enterable = t;}, getSize: function getSize() {var t = this.el.getBoundingRect();return [t.width, t.height];}, moveTo: function moveTo(t, e) {this.el && this.el.attr("position", [t, e]);}, hide: function hide() {this.el.hide(), this._show = !1;}, hideLater: function hideLater(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());}, isShow: function isShow() {return this._show;}, getOuterSize: function getOuterSize() {return this.getSize();} };var YS = y,qS = f,jS = Ka,ZS = new qm({ shape: { x: -1, y: -1, width: 2, height: 2 } });ah({ type: "tooltip", init: function init(t, e) {if (!dp.node) {var n = t.getComponent("tooltip"),i = n.get("renderMode");this._renderMode = $i(i);var r;"html" === this._renderMode ? (r = new ep(e.getDom(), e), this._newLine = "<br/>") : (r = new np(e), this._newLine = "\n"), this._tooltipContent = r;}}, render: function render(t, e, n) {if (!dp.node) {this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");var i = this._tooltipContent;i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();}}, _initGlobalListener: function _initGlobalListener() {var t = this._tooltipModel,e = t.get("triggerOn");Af("itemTooltip", this._api, YS(function (t, n, i) {"none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));}, this));}, _keepShow: function _keepShow() {var t = this._tooltipModel,e = this._ecModel,n = this._api;if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {var i = this;clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });});}}, manuallyShowTip: function manuallyShowTip(t, e, n, i) {if (i.from !== this.uid && !dp.node) {var r = rp(i, n);this._ticket = "";var a = i.dataByCoordSys;if (i.tooltip && null != i.x && null != i.y) {var o = ZS;o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({ offsetX: i.x, offsetY: i.y, target: o }, r);} else if (a) this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, event: {}, dataByCoordSys: i.dataByCoordSys, tooltipOption: i.tooltipOption }, r);else if (null != i.seriesIndex) {if (this._manuallyAxisShowTip(t, e, n, i)) return;var s = DS(i, e),l = s.point[0],h = s.point[1];null != l && null != h && this._tryShow({ offsetX: l, offsetY: h, position: i.position, target: s.el, event: {} }, r);} else null != i.x && null != i.y && (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }), this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target, event: {} }, r));}}, manuallyHideTip: function manuallyHideTip(t, e, n, i) {var r = this._tooltipContent;!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(rp(i, n));}, _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, n, i) {var r = i.seriesIndex,a = i.dataIndex,o = e.getComponent("axisPointer").coordSysAxesInfo;if (null != r && null != a && null != o) {var s = e.getSeriesByIndex(r);if (s) {var l = s.getData(),t = ip([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);if ("axis" === t.get("trigger")) return n.dispatchAction({ type: "updateAxisPointer", seriesIndex: r, dataIndex: a, position: i.position }), !0;}}}, _tryShow: function _tryShow(t, e) {var n = t.target,i = this._tooltipModel;if (i) {this._lastX = t.offsetX, this._lastY = t.offsetY;var r = t.dataByCoordSys;r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));}}, _showOrMove: function _showOrMove(t, e) {var n = t.get("showDelay");e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();}, _showAxisTooltip: function _showAxisTooltip(t, e) {var n = this._ecModel,i = this._tooltipModel,a = [e.offsetX, e.offsetY],o = [],s = [],l = ip([e.tooltipOption, i]),h = this._renderMode,u = this._newLine,c = {};qS(t, function (t) {qS(t.dataByAxis, function (t) {var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),i = t.value,a = [];if (e && null != i) {var l = Yf(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);f(t.seriesDataIndices, function (o) {var u = n.getSeriesByIndex(o.seriesIndex),d = o.dataIndexInside,f = u && u.getDataParams(d);if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = cu(e.axis, i), f.axisValueLabel = l, f) {s.push(f);var p,g = u.formatTooltip(d, !0, null, h);if (S(g)) {p = g.html;var v = g.markers;r(c, v);} else p = g;a.push(p);}});var d = l;o.push("html" !== h ? a.join(u) : (d ? go(d) + u : "") + a.join(u));}});}, this), o.reverse(), o = o.join(this._newLine + this._newLine);var d = e.position;this._showOrMove(l, function () {this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c);});}, _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, n) {var i = this._ecModel,r = e.seriesIndex,a = i.getSeriesByIndex(r),o = e.dataModel || a,s = e.dataIndex,l = e.dataType,h = o.getData(),u = ip([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),c = u.get("trigger");if (null == c || "item" === c) {var d,f,p = o.getDataParams(s, l),g = o.formatTooltip(s, !1, l, this._renderMode);S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);var v = "item_" + o.name + "_" + s;this._showOrMove(u, function () {this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);}), n({ type: "showTip", dataIndexInside: s, dataIndex: h.getRawIndex(s), seriesIndex: r, from: this.uid });}}, _showComponentItemTooltip: function _showComponentItemTooltip(t, e, n) {var i = e.tooltip;if ("string" == typeof i) {var r = i;i = { content: r, formatter: r };}var a = new Ha(i, this._tooltipModel, this._ecModel),o = a.get("content"),s = Math.random();this._showOrMove(a, function () {this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);}), n({ type: "showTip", from: this.uid });}, _showTooltipContent: function _showTooltipContent(t, e, n, i, r, a, o, s, l) {if (this._ticket = "", t.get("showContent") && t.get("show")) {var h = this._tooltipContent,u = t.get("formatter");o = o || t.get("position");var c = e;if (u && "string" == typeof u) c = vo(u, n, !0);else if ("function" == typeof u) {var d = YS(function (e, i) {e === this._ticket && (h.setContent(i, l, t), this._updatePosition(t, o, r, a, h, n, s));}, this);this._ticket = i, c = u(n, i, d);}h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, n, s);}}, _updatePosition: function _updatePosition(t, e, n, i, r, a, o) {var s = this._api.getWidth(),l = this._api.getHeight();e = e || t.get("position");var h = r.getSize(),u = t.get("align"),c = t.get("verticalAlign"),d = o && o.getBoundingRect().clone();if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, { viewSize: [s, l], contentSize: h.slice() })), _(e)) n = jS(e[0], s), i = jS(e[1], l);else if (S(e)) {e.width = h[0], e.height = h[1];var f = Io(e, { width: s, height: l });n = f.x, i = f.y, u = null, c = null;} else if ("string" == typeof e && o) {var p = sp(e, d, h);n = p[0], i = p[1];} else {var p = ap(n, i, r, s, l, u ? null : 20, c ? null : 20);n = p[0], i = p[1];}if (u && (n -= lp(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= lp(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {var p = op(n, i, r, s, l);
        n = p[0], i = p[1];}r.moveTo(n, i);}, _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {var e = this._lastDataByCoordSys,n = !!e && e.length === t.length;return n && qS(e, function (e, i) {var r = e.dataByAxis || {},a = t[i] || {},o = a.dataByAxis || [];n &= r.length === o.length, n && qS(r, function (t, e) {var i = o[e] || {},r = t.seriesDataIndices || [],a = i.seriesDataIndices || [];n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && qS(r, function (t, e) {var i = a[e];n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;});});}), this._lastDataByCoordSys = t, !!n;}, _hide: function _hide(t) {this._lastDataByCoordSys = null, t({ type: "hideTip", from: this.uid });}, dispose: function dispose(t, e) {dp.node || (this._tooltipContent.hide(), Bf("itemTooltip", e));} }), $l({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, function () {}), $l({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, function () {}), t.version = p_, t.dependencies = g_, t.PRIORITY = M_, t.init = Gl, t.connect = Hl, t.disConnect = Wl, t.disconnect = X_, t.dispose = Xl, t.getInstanceByDom = Yl, t.getInstanceById = ql, t.registerTheme = jl, t.registerPreprocessor = Zl, t.registerProcessor = Ul, t.registerPostUpdate = Kl, t.registerAction = $l, t.registerCoordinateSystem = Ql, t.getCoordinateSystemDimensions = Jl, t.registerLayout = th, t.registerVisual = eh, t.registerLoading = ih, t.extendComponentModel = rh, t.extendComponentView = ah, t.extendSeriesModel = oh, t.extendChartView = sh, t.setCanvasCreator = lh, t.registerMap = hh, t.getMap = uh, t.dataTool = Y_, t.zrender = mv, t.number = by, t.format = Ay, t.throttle = Ys, t.helper = qw, t.matrix = Xp, t.vector = Lp, t.color = hg, t.parseGeoJSON = Zw, t.parseGeoJson = Qw, t.util = Jw, t.graphic = tb, t.List = iw, t.Model = Ha, t.Axis = $w, t.env = dp;});

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue":
/*!**********************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./echarts.vue?vue&type=template&id=c08d25d8&scoped=true& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true&");
/* harmony import */ var _echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts.vue?vue&type=script&lang=js& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c08d25d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./echarts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_style_index_0_id_c08d25d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./echarts.vue?vue&type=template&id=c08d25d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_echarts_vue_vue_type_template_id_c08d25d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/wx-canvas.js":
/*!***********************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/wx-canvas.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var WxCanvas = /*#__PURE__*/function () {
  function WxCanvas(ctx, canvasId) {_classCallCheck(this, WxCanvas);
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;

    WxCanvas.initStyle(ctx);
    this.initEvent();
  }_createClass(WxCanvas, [{ key: "getContext", value: function getContext(

    contextType) {
      return contextType === '2d' ? this.ctx : null;
    } }, { key: "setChart", value: function setChart(

    chart) {
      this.chart = chart;
    } }, { key: "attachEvent", value: function attachEvent()

    {
      // noop
    } }, { key: "detachEvent", value: function detachEvent()

    {
      // noop
    } }, { key: "initEvent", value: function initEvent()





















    {var _this = this;
      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown' },
      {
        wxName: 'touchMove',
        ecName: 'mousemove' },
      {
        wxName: 'touchEnd',
        ecName: 'mouseup' },
      {
        wxName: 'touchEnd',
        ecName: 'click' }];


      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.mp.touches[0];
          _this.chart._zr.handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y });

        };
      });
    } }], [{ key: "initStyle", value: function initStyle(ctx) {var _arguments = arguments;var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];styles.forEach(function (style) {Object.defineProperty(ctx, style, { set: function set(value) {if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {ctx["set".concat(style.charAt(0).toUpperCase()).concat(style.slice(1))](value);}} });});ctx.createRadialGradient = function () {return ctx.createCircularGradient(_arguments);};} }]);return WxCanvas;}();exports.default = WxCanvas;

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue":
/*!*********************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpvuePicker.vue?vue&type=template&id=1f8c1486& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486&");
/* harmony import */ var _mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpvuePicker.vue?vue&type=script&lang=js& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mpvuePicker.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mpvuePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mpvuePicker.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486&":
/*!****************************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mpvuePicker.vue?vue&type=template&id=1f8c1486& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mpvuePicker_vue_vue_type_template_id_1f8c1486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue":
/*!*******************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-drawer.vue?vue&type=template&id=65124d7a& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a&");
/* harmony import */ var _uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-drawer.vue?vue&type=script&lang=js& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-drawer.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-drawer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a&":
/*!**************************************************************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-drawer.vue?vue&type=template&id=65124d7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_drawer_vue_vue_type_template_id_65124d7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../../../../../Users/apple/xcx/subgroup-uni-app/pages.json":
/*!****************************************************!*\
  !*** /Users/apple/xcx/subgroup-uni-app/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref5.isPage,initRelation$$1 = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$1);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function callHook$1(vm, hook, params) {
  var handlers = vm.$options[hook];
  if (hook === 'onError' && handlers) {
    handlers = [handlers];
  }
  if(typeof handlers === 'function'){
    handlers = [handlers]
  }

  var ret;
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
//      try {
        ret = handlers[i].call(vm, params);
//       } catch (e) {//fixed by xxxxxx
//         handleError(e, vm, (hook + " hook"));
//       }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  // for child
  if (vm.$children.length) {
    vm.$children.forEach(function (v) {
      return callHook$1(v, hook, params);
    });
  }

  return ret
}

function getRootVueVm(page) {
  return page.$vm.$root;
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return {
    // 页面的初始数据
    data: {
      $root: {}
    },

    // mp lifecycle for vue
    // 生命周期函数--监听页面加载
    onLoad:function onLoad(query) {
      //页面加载的时候
      var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(App);
      // 挂载Vue对象到page上
      this.$vm = app;
      var rootVueVM = app.$root;
      rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__//fixed by xxxxxx(createIntersectionObserver)
      rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
      
      //初始化mp对象
      if (!rootVueVM.$mp) {
        rootVueVM.$mp = {};
      }
      var mp = rootVueVM.$mp;
      mp.mpType = 'page';
      mp.page = this;
      mp.query = query;
      mp.status = 'load';
      //mount 要在 mp.status = 'load';赋值之后，不然mount方法会重复添加微信Page
      //具体原因参考mpvue核心库源码，_initMP方法
      app.$mount();
    },

    handleProxy: function handleProxy(e) {
      var rootVueVM = getRootVueVm(this);
      return rootVueVM.$handleProxyWithVue(e)
    },

    // 生命周期函数--监听页面显示
    onShow:function onShow() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'show';
      callHook$1(rootVueVM, 'onShow');
      //   // 只有页面需要 setData
      rootVueVM.$nextTick(function () {
        rootVueVM._initDataToMP();
      });
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady:function onReady() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'ready';
      callHook$1(rootVueVM, 'onReady');
    },

    // 生命周期函数--监听页面隐藏
    onHide: function onHide() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'hide';
      callHook$1(rootVueVM, 'onHide');
    },

    // 生命周期函数--监听页面卸载
    onUnload: function onUnload() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onUnload');
      rootVueVM.$destroy();
    },

    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function onPullDownRefresh() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onPullDownRefresh');
    },

    // 页面上拉触底事件的处理函数
    onReachBottom: function onReachBottom() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onReachBottom');
    },

    // Do something when page scroll
    onPageScroll: function onPageScroll(options) {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onPageScroll', options);
    },

    // 当前是 tab 页时，点击 tab 时触发
    onTabItemTap: function onTabItemTap(options) {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onTabItemTap', options);
    },
		
    // // 用户点击右上角分享
    onShareAppMessage: App.onShareAppMessage ?
      function (options) {
        var rootVueVM = getRootVueVm(this);
        return callHook$1(rootVueVM, 'onShareAppMessage', options);
      } : null,

    //fixed by xxxxxx
    onNavigationBarButtonTap: function onNavigationBarButtonTap(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarButtonTap", options)
    },
    onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputChanged", options)
    },
    onNavigationBarSearchInputConfirmed: function onNavigationBarSearchInputConfirmed(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputConfirmed", options)
    },
    onNavigationBarSearchInputClicked: function onNavigationBarSearchInputClicked(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputClicked", options)
    },
    onBackPress: function onBackPress(options) {
        var rootVueVM = getRootVueVm(this);
    		return callHook$1(rootVueVM, "onBackPress",options)
    },
		$getAppWebview:function (e) {
				return plus.webview.getWebviewById('' + this.__wxWebviewId__)
		}
  };
});


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// fix env
try {
    if (!global) global = {}
    global.process = global.process || {}
    global.process.env = global.process.env || {}
    global.App = global.App || App
    global.Page = global.Page || Page
    global.Component = global.Component || Component
    global.getApp = global.getApp || getApp
} catch (e) {}

;(function(global, factory) {
     true
        ? (module.exports = factory())
        : undefined
})(this, function() {
    "use strict"

    //fixed by xxxxxx
    function calcDiff(holder, key, newObj, oldObj) {
        if (newObj === oldObj || newObj === undefined) {
            return
        }

        if (newObj == null || oldObj == null || typeof newObj !== typeof oldObj) {
            holder[key] = newObj
        } else if (Array.isArray(newObj) && Array.isArray(oldObj)) {
            if (newObj.length === oldObj.length) {
                for (var i = 0, len = newObj.length; i < len; ++i) {
                    calcDiff(holder, key + "[" + i + "]", newObj[i], oldObj[i])
                }
            } else {
                holder[key] = newObj
            }
        } else if (typeof newObj === "object" && typeof oldObj === "object") {
            var newKeys = Object.keys(newObj)
            var oldKeys = Object.keys(oldObj)

            if (newKeys.length !== oldKeys.length) {
                holder[key] = newObj
            } else {
                var allKeysSet = Object.create(null)
                for (var i = 0, len = newKeys.length; i < len; ++i) {
                    allKeysSet[newKeys[i]] = true
                    allKeysSet[oldKeys[i]] = true
                }
                if (Object.keys(allKeysSet).length !== newKeys.length) {
                    holder[key] = newObj
                } else {
                    for (var i = 0, len = newKeys.length; i < len; ++i) {
                        var k = newKeys[i]
                        calcDiff(holder, key + "." + k, newObj[k], oldObj[k])
                    }
                }
            }
        } else if (newObj !== oldObj) {
            holder[key] = newObj
        }
    }

    function diff(newObj, oldObj) {
        var keys = Object.keys(newObj)
        var diffResult = {}
        for (var i = 0, len = keys.length; i < len; ++i) {
            var k = keys[i]
            var oldKeyPath = k.split(".")
            var oldValue = oldObj[oldKeyPath[0]]
            for (var j = 1, jlen = oldKeyPath.length; j < jlen && oldValue !== undefined; ++j) {
                oldValue = oldValue[oldKeyPath[j]]
            }
            calcDiff(diffResult, k, newObj[k], oldValue)
        }
        return diffResult
    }

    /*  */

    // these helpers produces better vm code in JS engines due to their
    // explicitness and function inlining
    function isUndef(v) {
        return v === undefined || v === null
    }

    function isDef(v) {
        return v !== undefined && v !== null
    }

    function isTrue(v) {
        return v === true
    }

    function isFalse(v) {
        return v === false
    }

    /**
     * Check if value is primitive
     */
    function isPrimitive(value) {
        return typeof value === "string" || typeof value === "number"
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === "object"
    }

    var _toString = Object.prototype.toString

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]"
    }

    function isRegExp(v) {
        return _toString.call(v) === "[object RegExp]"
    }

    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex(val) {
        var n = parseFloat(val)
        return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString(val) {
        return val == null
            ? ""
            : typeof val === "object"
                ? JSON.stringify(val, null, 2)
                : String(val)
    }

    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber(val) {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
    }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap(str, expectsLowerCase) {
        var map = Object.create(null)
        var list = str.split(",")
        for (var i = 0; i < list.length; i++) {
            map[list[i]] = true
        }
        return expectsLowerCase
            ? function(val) {
                  return map[val.toLowerCase()]
              }
            : function(val) {
                  return map[val]
              }
    }

    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap("slot,component", true)

    /**
     * Check if a attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap("key,ref,slot,is")

    /**
     * Remove an item from an array
     */
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item)
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }

    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key)
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        var cache = Object.create(null)
        return function cachedFn(str) {
            var hit = cache[str]
            return hit || (cache[str] = fn(str))
        }
    }

    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g
    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : ""
        })
    })

    /**
     * Capitalize a string.
     */
    var capitalize = cached(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /([^-])([A-Z])/g
    var hyphenate = cached(function(str) {
        return str
            .replace(hyphenateRE, "$1-$2")
            .replace(hyphenateRE, "$1-$2")
            .toLowerCase()
    })

    /**
     * Simple bind, faster than native
     */
    function bind(fn, ctx) {
        function boundFn(a) {
            var l = arguments.length
            return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)
        }
        // record original fn length
        boundFn._length = fn.length
        return boundFn
    }

    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray(list, start) {
        start = start || 0
        var i = list.length - start
        var ret = new Array(i)
        while (i--) {
            ret[i] = list[i + start]
        }
        return ret
    }

    /**
     * Mix properties into target object.
     */
    function extend(to, _from) {
        for (var key in _from) {
            to[key] = _from[key]
        }
        return to
    }

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
        var res = {}
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                extend(res, arr[i])
            }
        }
        return res
    }

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
    function noop(a, b, c) {}

    /**
     * Always return false.
     */
    var no = function(a, b, c) {
        return false
    }

    /**
     * Return same value
     */
    var identity = function(_) {
        return _
    }

    /**
     * Generate a static keys string from compiler modules.
     */

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual(a, b) {
        var isObjectA = isObject(a)
        var isObjectB = isObject(b)
        if (isObjectA && isObjectB) {
            try {
                return JSON.stringify(a) === JSON.stringify(b)
            } catch (e) {
                // possible circular reference
                return a === b
            }
        } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b)
        } else {
            return false
        }
    }

    function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
                return i
            }
        }
        return -1
    }

    /**
     * Ensure a function is called only once.
     */
    function once(fn) {
        var called = false
        return function() {
            if (!called) {
                called = true
                fn.apply(this, arguments)
            }
        }
    }

    var SSR_ATTR = "data-server-rendered"

    var ASSET_TYPES = ["component", "directive", "filter"]

    var LIFECYCLE_HOOKS = [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed",
        "activated",
        "deactivated",
        "onLaunch",
        "onLoad",
        "onShow",
        "onReady",
        "onHide",
        "onUnload",
        "onPullDownRefresh",
        "onReachBottom",
        "onShareAppMessage",
        "onPageScroll",
        "onTabItemTap",
        "attached",
        "ready",
        "moved",
        "detached",
        "onUniNViewMessage", //fixed by xxxxxx
        "onNavigationBarButtonTap", //fixed by xxxxxx
        "onBackPress",//fixed by xxxxxx
    ]

    /*  */

    var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
        silent: false,

        /**
         * Show production mode tip message on boot?
         */
        productionTip: "production" !== "production",

        /**
         * Whether to enable devtools
         */
        devtools: "production" !== "production",

        /**
         * Whether to record perf
         */
        performance: false,

        /**
         * Error handler for watcher errors
         */
        errorHandler: null,

        /**
         * Warn handler for watcher warns
         */
        warnHandler: null,

        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
        keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,

        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
        isReservedAttr: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,

        /**
         * Exposed for legacy reasons
         */
        _lifecycleHooks: LIFECYCLE_HOOKS
    }

    /*  */

    var emptyObject = Object.freeze({})

    /**
     * Check if a string starts with $ or _
     */
    function isReserved(str) {
        var c = (str + "").charCodeAt(0)
        return c === 0x24 || c === 0x5f
    }

    /**
     * Define a property.
     */
    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        })
    }

    /**
     * Parse simple path.
     */
    var bailRE = /[^\w.$]/

    function parsePath(path) {
        if (bailRE.test(path)) {
            return
        }
        var segments = path.split(".")
        return function(obj) {
            for (var i = 0; i < segments.length; i++) {
                if (!obj) {
                    return
                }
                obj = obj[segments[i]]
            }
            return obj
        }
    }

    /*  */

    var warn = noop

    var formatComponentName = null // work around flow check

    /*  */

    function handleError(err, vm, info) {
        if (config.errorHandler) {
            config.errorHandler.call(null, err, vm, info)
        } else {
            if (inBrowser && typeof console !== "undefined") {
                console.error(err)
            } else {
                throw err
            }
        }
    }

    /*  */

    // can we use __proto__?
    var hasProto = "__proto__" in {}

    // Browser environment sniffing
    var inBrowser = typeof window !== "undefined"
    var UA = ["mpvue-runtime"].join()
    var isIE = UA && /msie|trident/.test(UA)
    var isIE9 = UA && UA.indexOf("msie 9.0") > 0
    var isEdge = UA && UA.indexOf("edge/") > 0
    var isAndroid = UA && UA.indexOf("android") > 0
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

    // Firefix has a "watch" function on Object.prototype...
    var nativeWatch = {}.watch

    var supportsPassive = false
    if (inBrowser) {
        try {
            var opts = {}
            Object.defineProperty(opts, "passive", {
                get: function get() {
                    /* istanbul ignore next */
                    supportsPassive = true
                }
            }) // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, opts)
        } catch (e) {}
    }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer
    var isServerRendering = function() {
        if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && typeof global !== "undefined") {
                // detect presence of vue-server-renderer and avoid
                // Webpack shimming the process
                _isServer = global["process"].env.VUE_ENV === "server"
            } else {
                _isServer = false
            }
        }
        return _isServer
    }

    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

    /* istanbul ignore next */
    function isNative(Ctor) {
        return typeof Ctor === "function" && /native code/.test(Ctor.toString())
    }

    var hasSymbol =
        typeof Symbol !== "undefined" &&
        isNative(Symbol) &&
        typeof Reflect !== "undefined" &&
        isNative(Reflect.ownKeys)

    /**
     * Defer a task to execute it asynchronously.
     */
    var nextTick = (function() {
        var callbacks = []
        var pending = false
        var timerFunc

        function nextTickHandler() {
            pending = false
            var copies = callbacks.slice(0)
            callbacks.length = 0
            for (var i = 0; i < copies.length; i++) {
                copies[i]()
            }
        }

        // the nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore if */
        if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve()
            var logError = function(err) {
                console.error(err)
            }
            timerFunc = function() {
                p.then(nextTickHandler).catch(logError)
                // in problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                if (isIOS) {
                    setTimeout(noop)
                }
            }
            // } else if (typeof MutationObserver !== 'undefined' && (
            //   isNative(MutationObserver) ||
            //   // PhantomJS and iOS 7.x
            //   MutationObserver.toString() === '[object MutationObserverConstructor]'
            // )) {
            //   // use MutationObserver where native Promise is not available,
            //   // e.g. PhantomJS IE11, iOS7, Android 4.4
            //   var counter = 1
            //   var observer = new MutationObserver(nextTickHandler)
            //   var textNode = document.createTextNode(String(counter))
            //   observer.observe(textNode, {
            //     characterData: true
            //   })
            //   timerFunc = () => {
            //     counter = (counter + 1) % 2
            //     textNode.data = String(counter)
            //   }
        } else {
            // fallback to setTimeout
            /* istanbul ignore next */
            timerFunc = function() {
                setTimeout(nextTickHandler, 0)
            }
        }

        return function queueNextTick(cb, ctx) {
            var _resolve
            callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(ctx)
                    } catch (e) {
                        handleError(e, ctx, "nextTick")
                    }
                } else if (_resolve) {
                    _resolve(ctx)
                }
            })
            if (!pending) {
                pending = true
                timerFunc()
            }
            if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve, reject) {
                    _resolve = resolve
                })
            }
        }
    })()

    var _Set
    /* istanbul ignore if */
    if (typeof Set !== "undefined" && isNative(Set)) {
        // use native Set when available.
        _Set = Set
    } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = (function() {
            function Set() {
                this.set = Object.create(null)
            }
            Set.prototype.has = function has(key) {
                return this.set[key] === true
            }
            Set.prototype.add = function add(key) {
                this.set[key] = true
            }
            Set.prototype.clear = function clear() {
                this.set = Object.create(null)
            }

            return Set
        })()
    }

    /*  */

    var uid$1 = 0

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep() {
        this.id = uid$1++
        this.subs = []
    }

    Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub)
    }

    Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub)
    }

    Dep.prototype.depend = function depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
        var subs = this.subs.slice()
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }

    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
    Dep.target = null
    var targetStack = []

    function pushTarget(_target) {
        if (Dep.target) {
            targetStack.push(Dep.target)
        }
        Dep.target = _target
    }

    function popTarget() {
        Dep.target = targetStack.pop()
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

    var arrayProto = Array.prototype
    var arrayMethods = Object.create(arrayProto)
    ;["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(method) {
        // cache original method
        var original = arrayProto[method]
        def(arrayMethods, method, function mutator() {
            var args = [],
                len = arguments.length
            while (len--) args[len] = arguments[len]

            var result = original.apply(this, args)
            var ob = this.__ob__
            var inserted
            switch (method) {
                case "push":
                case "unshift":
                    inserted = args
                    break
                case "splice":
                    inserted = args.slice(2)
                    break
            }
            if (inserted) {
                ob.observeArray(inserted)
            }
            // notify change
            ob.dep.notify()
            return result
        })
    })

    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
    var observerState = {
        shouldConvert: true
    }

    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
    var Observer = function Observer(value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, "__ob__", this)
        if (Array.isArray(value)) {
            var augment = hasProto ? protoAugment : copyAugment
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i], obj[keys[i]])
        }
    }

    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }

    // helpers

    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment(target, src, keys) {
        /* eslint-disable no-proto */
        target.__proto__ = src
        /* eslint-enable no-proto */
    }

    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            def(target, key, src[key])
        }
    }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe(value, asRootData) {
        if (!isObject(value)) {
            return
        }
        var ob
        if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__
        } else if (
            observerState.shouldConvert &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
        ) {
            ob = new Observer(value)
        }
        if (asRootData && ob) {
            ob.vmCount++
        }
        return ob
    }

    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1(obj, key, val, customSetter, shallow) {
        var dep = new Dep()

        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property && property.configurable === false) {
            return
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get
        var setter = property && property.set

        var childOb = !shallow && observe(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                var value = getter ? getter.call(obj) : val
                if (Dep.target) {
                    dep.depend()
                    if (childOb) {
                        childOb.dep.depend()
                    }
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
                return value
            },
            set: function reactiveSetter(newVal) {
                var value = getter ? getter.call(obj) : val
                /* eslint-disable no-self-compare */
                if (newVal === value || (newVal !== newVal && value !== value)) {
                    return
                }
                /* eslint-enable no-self-compare */
                if (false) {}
                if (setter) {
                    setter.call(obj, newVal)
                } else {
                    val = newVal
                }
                childOb = !shallow && observe(newVal)
                dep.notify()
            }
        })
    }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set(target, key, val) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key)
            target.splice(key, 1, val)
            return val
        }
        if (hasOwn(target, key)) {
            target[key] = val
            return val
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
             false &&
                false
            return val
        }
        if (!ob) {
            target[key] = val
            return val
        }
        defineReactive$$1(ob.value, key, val)
        ob.dep.notify()
        return val
    }

    /**
     * Delete a property and trigger change if necessary.
     */
    function del(target, key) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1)
            return
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
             false &&
                false
            return
        }
        if (!hasOwn(target, key)) {
            return
        }
        delete target[key]
        if (!ob) {
            return
        }
        ob.dep.notify()
    }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            e && e.__ob__ && e.__ob__.dep.depend()
            if (Array.isArray(e)) {
                dependArray(e)
            }
        }
    }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies

    /**
     * Options with restrictions
     */
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData(to, from) {
        if (!from) {
            return to
        }
        var key, toVal, fromVal
        var keys = Object.keys(from)
        for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            toVal = to[key]
            fromVal = from[key]
            if (!hasOwn(to, key)) {
                set(to, key, fromVal)
            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                mergeData(toVal, fromVal)
            }
        }
        return to
    }

    /**
     * Data
     */
    function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
                return parentVal
            }
            if (!parentVal) {
                return childVal
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
                return mergeData(
                    typeof childVal === "function" ? childVal.call(this) : childVal,
                    parentVal.call(this)
                )
            }
        } else if (parentVal || childVal) {
            return function mergedInstanceDataFn() {
                // instance merge
                var instanceData = typeof childVal === "function" ? childVal.call(vm) : childVal
                var defaultData = typeof parentVal === "function" ? parentVal.call(vm) : undefined
                if (instanceData) {
                    return mergeData(instanceData, defaultData)
                } else {
                    return defaultData
                }
            }
        }
    }

    strats.data = function(parentVal, childVal, vm) {
        if (!vm) {
            if (childVal && typeof childVal !== "function") {
                 false &&
                    false

                return parentVal
            }
            return mergeDataOrFn.call(this, parentVal, childVal)
        }

        return mergeDataOrFn(parentVal, childVal, vm)
    }

    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook(parentVal, childVal) {
        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : Array.isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal
    }

    LIFECYCLE_HOOKS.forEach(function(hook) {
        strats[hook] = mergeHook
    })

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets(parentVal, childVal) {
        var res = Object.create(parentVal || null)
        return childVal ? extend(res, childVal) : res
    }

    ASSET_TYPES.forEach(function(type) {
        strats[type + "s"] = mergeAssets
    })

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function(parentVal, childVal) {
        // work around Firefox's Object.prototype.watch...
        if (parentVal === nativeWatch) {
            parentVal = undefined
        }
        if (childVal === nativeWatch) {
            childVal = undefined
        }
        /* istanbul ignore if */
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = {}
        extend(ret, parentVal)
        for (var key in childVal) {
            var parent = ret[key]
            var child = childVal[key]
            if (parent && !Array.isArray(parent)) {
                parent = [parent]
            }
            ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]
        }
        return ret
    }

    /**
     * Other object hashes.
     */
    strats.props = strats.methods = strats.inject = strats.computed = function(
        parentVal,
        childVal
    ) {
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = Object.create(null)
        extend(ret, parentVal)
        extend(ret, childVal)
        return ret
    }
    strats.provide = mergeDataOrFn

    /**
     * Default strategy.
     */
    var defaultStrat = function(parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal
    }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps(options) {
        var props = options.props
        if (!props) {
            return
        }
        var res = {}
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }
        options.props = res
    }

    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject(options) {
        var inject = options.inject
        if (Array.isArray(inject)) {
            var normalized = (options.inject = {})
            for (var i = 0; i < inject.length; i++) {
                normalized[inject[i]] = inject[i]
            }
        }
    }

    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives(options) {
        var dirs = options.directives
        if (dirs) {
            for (var key in dirs) {
                var def = dirs[key]
                if (typeof def === "function") {
                    dirs[key] = {
                        bind: def,
                        update: def
                    }
                }
            }
        }
    }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions(parent, child, vm) {
        if (typeof child === "function") {
            child = child.options
        }

        normalizeProps(child)
        normalizeInject(child)
        normalizeDirectives(child)
        var extendsFrom = child.extends
        if (extendsFrom) {
            parent = mergeOptions(parent, extendsFrom, vm)
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm)
            }
        }
        var options = {}
        var key
        for (key in parent) {
            mergeField(key)
        }
        for (key in child) {
            if (!hasOwn(parent, key)) {
                mergeField(key)
            }
        }

        function mergeField(key) {
            var strat = strats[key] || defaultStrat
            options[key] = strat(parent[key], child[key], vm, key)
        }
        return options
    }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset(options, type, id, warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== "string") {
            return
        }
        var assets = options[type]
        // check local registration variations first
        if (hasOwn(assets, id)) {
            return assets[id]
        }
        var camelizedId = camelize(id)
        if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId]
        }
        var PascalCaseId = capitalize(camelizedId)
        if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId]
        }
        // fallback to prototype chain
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
        if (false) {}
        return res
    }

    /*  */

    function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key]
        var absent = !hasOwn(propsData, key)
        var value = propsData[key]
        // handle boolean props
        if (isType(Boolean, prop.type)) {
            if (absent && !hasOwn(prop, "default")) {
                value = false
            } else if (!isType(String, prop.type) && (value === "" || value === hyphenate(key))) {
                value = true
            }
        }
        // check default value
        if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key)
            // since the default value is a fresh copy,
            // make sure to observe it.
            var prevShouldConvert = observerState.shouldConvert
            observerState.shouldConvert = true
            observe(value)
            observerState.shouldConvert = prevShouldConvert
        }
        return value
    }

    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, "default")) {
            return undefined
        }
        var def = prop.default
        // warn against non-factory defaults for Object & Array
        if (false) {}
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (
            vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
        ) {
            return vm._props[key]
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def
    }

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/)
        return match ? match[1] : ""
    }

    function isType(type, fn) {
        if (!Array.isArray(fn)) {
            return getType(fn) === getType(type)
        }
        for (var i = 0, len = fn.length; i < len; i++) {
            if (getType(fn[i]) === getType(type)) {
                return true
            }
        }
        /* istanbul ignore next */
        return false
    }

    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */

    var mark
    var measure

    /*  */

    var VNode = function VNode(
        tag,
        data,
        children,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.functionalContext = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    }

    var prototypeAccessors = {
        child: {}
    }

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function() {
        return this.componentInstance
    }

    Object.defineProperties(VNode.prototype, prototypeAccessors)

    var createEmptyVNode = function(text) {
        if (text === void 0) text = ""

        var node = new VNode()
        node.text = text
        node.isComment = true
        return node
    }

    function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val))
    }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode(vnode) {
        var cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children,
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
        )
        cloned.ns = vnode.ns
        cloned.isStatic = vnode.isStatic
        cloned.key = vnode.key
        cloned.isComment = vnode.isComment
        cloned.isCloned = true
        return cloned
    }

    function cloneVNodes(vnodes) {
        var len = vnodes.length
        var res = new Array(len)
        for (var i = 0; i < len; i++) {
            res[i] = cloneVNode(vnodes[i])
        }
        return res
    }

    /*  */

    var normalizeEvent = cached(function(name) {
        var passive = name.charAt(0) === "&"
        name = passive ? name.slice(1) : name
        var once$$1 = name.charAt(0) === "~" // Prefixed last, checked first
        name = once$$1 ? name.slice(1) : name
        var capture = name.charAt(0) === "!"
        name = capture ? name.slice(1) : name
        return {
            name: name,
            once: once$$1,
            capture: capture,
            passive: passive
        }
    })

    function createFnInvoker(fns) {
        function invoker() {
            var arguments$1 = arguments

            var fns = invoker.fns
            if (Array.isArray(fns)) {
                var cloned = fns.slice()
                for (var i = 0; i < cloned.length; i++) {
                    cloned[i].apply(null, arguments$1)
                }
            } else {
                // return handler return value for single handlers
                return fns.apply(null, arguments)
            }
        }
        invoker.fns = fns
        return invoker
    }

    function updateListeners(on, oldOn, add, remove$$1, vm) {
        var name, cur, old, event
        for (name in on) {
            cur = on[name]
            old = oldOn[name]
            event = normalizeEvent(name)
            if (isUndef(cur)) {
                 false &&
                    false
            } else if (isUndef(old)) {
                if (isUndef(cur.fns)) {
                    cur = on[name] = createFnInvoker(cur)
                }
                add(event.name, cur, event.once, event.capture, event.passive)
            } else if (cur !== old) {
                old.fns = cur
                on[name] = old
            }
        }
        for (name in oldOn) {
            if (isUndef(on[name])) {
                event = normalizeEvent(name)
                remove$$1(event.name, oldOn[name], event.capture)
            }
        }
    }

    /*  */

    /*  */

    function extractPropsFromVNodeData(data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props
        if (isUndef(propOptions)) {
            return
        }
        var res = {}
        var attrs = data.attrs
        var props = data.props
        if (isDef(attrs) || isDef(props)) {
            for (var key in propOptions) {
                var altKey = hyphenate(key)
                checkProp(res, props, key, altKey, true) ||
                    checkProp(res, attrs, key, altKey, false)
            }
        }
        return res
    }

    function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
            if (hasOwn(hash, key)) {
                res[key] = hash[key]
                if (!preserve) {
                    delete hash[key]
                }
                return true
            } else if (hasOwn(hash, altKey)) {
                res[key] = hash[altKey]
                if (!preserve) {
                    delete hash[altKey]
                }
                return true
            }
        }
        return false
    }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren(children) {
        for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
                return Array.prototype.concat.apply([], children)
            }
        }
        return children
    }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren(children) {
        return isPrimitive(children)
            ? [createTextVNode(children)]
            : Array.isArray(children)
                ? normalizeArrayChildren(children)
                : undefined
    }

    function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }

    function normalizeArrayChildren(children, nestedIndex) {
        var res = []
        var i, c, last
        for (i = 0; i < children.length; i++) {
            c = children[i]
            if (isUndef(c) || typeof c === "boolean") {
                continue
            }
            last = res[res.length - 1]
            //  nested
            if (Array.isArray(c)) {
                res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || "") + "_" + i))
            } else if (isPrimitive(c)) {
                if (isTextNode(last)) {
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    last.text += String(c)
                } else if (c !== "") {
                    // convert primitive to vnode
                    res.push(createTextVNode(c))
                }
            } else {
                if (isTextNode(c) && isTextNode(last)) {
                    // merge adjacent text nodes
                    res[res.length - 1] = createTextVNode(last.text + c.text)
                } else {
                    // default key for nested array children (likely generated by v-for)
                    if (
                        isTrue(children._isVList) &&
                        isDef(c.tag) &&
                        isUndef(c.key) &&
                        isDef(nestedIndex)
                    ) {
                        c.key = "__vlist" + nestedIndex + "_" + i + "__"
                    }
                    res.push(c)
                }
            }
        }
        return res
    }

    /*  */

    function ensureCtor(comp, base) {
        if (comp.__esModule && comp.default) {
            comp = comp.default
        }
        return isObject(comp) ? base.extend(comp) : comp
    }

    function createAsyncPlaceholder(factory, data, context, children, tag) {
        var node = createEmptyVNode()
        node.asyncFactory = factory
        node.asyncMeta = {
            data: data,
            context: context,
            children: children,
            tag: tag
        }
        return node
    }

    function resolveAsyncComponent(factory, baseCtor, context) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp
        }

        if (isDef(factory.resolved)) {
            return factory.resolved
        }

        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp
        }

        if (isDef(factory.contexts)) {
            // already pending
            factory.contexts.push(context)
        } else {
            var contexts = (factory.contexts = [context])
            var sync = true

            var forceRender = function() {
                for (var i = 0, l = contexts.length; i < l; i++) {
                    contexts[i].$forceUpdate()
                }
            }

            var resolve = once(function(res) {
                // cache resolved
                factory.resolved = ensureCtor(res, baseCtor)
                // invoke callbacks only if this is not a synchronous resolve
                // (async resolves are shimmed as synchronous during SSR)
                if (!sync) {
                    forceRender()
                }
            })

            var reject = once(function(reason) {
                 false &&
                    false
                if (isDef(factory.errorComp)) {
                    factory.error = true
                    forceRender()
                }
            })

            var res = factory(resolve, reject)

            if (isObject(res)) {
                if (typeof res.then === "function") {
                    // () => Promise
                    if (isUndef(factory.resolved)) {
                        res.then(resolve, reject)
                    }
                } else if (isDef(res.component) && typeof res.component.then === "function") {
                    res.component.then(resolve, reject)

                    if (isDef(res.error)) {
                        factory.errorComp = ensureCtor(res.error, baseCtor)
                    }

                    if (isDef(res.loading)) {
                        factory.loadingComp = ensureCtor(res.loading, baseCtor)
                        if (res.delay === 0) {
                            factory.loading = true
                        } else {
                            setTimeout(function() {
                                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                    factory.loading = true
                                    forceRender()
                                }
                            }, res.delay || 200)
                        }
                    }

                    if (isDef(res.timeout)) {
                        setTimeout(function() {
                            if (isUndef(factory.resolved)) {
                                reject(null)
                            }
                        }, res.timeout)
                    }
                }
            }

            sync = false
            // return in case resolved synchronously
            return factory.loading ? factory.loadingComp : factory.resolved
        }
    }

    /*  */

    function getFirstComponentChild(children) {
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                var c = children[i]
                if (isDef(c) && isDef(c.componentOptions)) {
                    return c
                }
            }
        }
    }

    /*  */

    /*  */

    function initEvents(vm) {
        vm._events = Object.create(null)
        vm._hasHookEvent = false
        // init parent attached events
        var listeners = vm.$options._parentListeners
        if (listeners) {
            updateComponentListeners(vm, listeners)
        }
    }

    var target

    function add(event, fn, once$$1) {
        if (once$$1) {
            target.$once(event, fn)
        } else {
            target.$on(event, fn)
        }
    }

    function remove$1(event, fn) {
        target.$off(event, fn)
    }

    function updateComponentListeners(vm, listeners, oldListeners) {
        target = vm
        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)
    }

    function eventsMixin(Vue) {
        var hookRE = /^hook:/
        Vue.prototype.$on = function(event, fn) {
            var this$1 = this

            var vm = this
            if (Array.isArray(event)) {
                for (var i = 0, l = event.length; i < l; i++) {
                    this$1.$on(event[i], fn)
                }
            } else {
                ;(vm._events[event] || (vm._events[event] = [])).push(fn)
                // optimize hook:event cost by using a boolean flag marked at registration
                // instead of a hash lookup
                if (hookRE.test(event)) {
                    vm._hasHookEvent = true
                }
            }
            return vm
        }

        Vue.prototype.$once = function(event, fn) {
            var vm = this

            function on() {
                vm.$off(event, on)
                fn.apply(vm, arguments)
            }
            on.fn = fn
            vm.$on(event, on)
            return vm
        }

        Vue.prototype.$off = function(event, fn) {
            var this$1 = this

            var vm = this
            // all
            if (!arguments.length) {
                vm._events = Object.create(null)
                return vm
            }
            // array of events
            if (Array.isArray(event)) {
                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                    this$1.$off(event[i$1], fn)
                }
                return vm
            }
            // specific event
            var cbs = vm._events[event]
            if (!cbs) {
                return vm
            }
            if (arguments.length === 1) {
                vm._events[event] = null
                return vm
            }
            // specific handler
            var cb
            var i = cbs.length
            while (i--) {
                cb = cbs[i]
                if (cb === fn || cb.fn === fn) {
                    cbs.splice(i, 1)
                    break
                }
            }
            return vm
        }

        Vue.prototype.$emit = function(event) {
            var vm = this
            var cbs = vm._events[event]
            if (cbs) {
                cbs = cbs.length > 1 ? toArray(cbs) : cbs
                var args = toArray(arguments, 1)
                for (var i = 0, l = cbs.length; i < l; i++) {
                    try {
                        cbs[i].apply(vm, args)
                    } catch (e) {
                        handleError(e, vm, 'event handler for "' + event + '"')
                    }
                }
            }
            return vm
        }
    }

    /*  */

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots(children, context) {
        var slots = {}
        if (!children) {
            return slots
        }
        var defaultSlot = []
        for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i]
            // named slots should only be respected if the vnode was rendered in the
            // same context.
            if (
                (child.context === context || child.functionalContext === context) &&
                child.data &&
                child.data.slot != null
            ) {
                var name = child.data.slot
                var slot = slots[name] || (slots[name] = [])
                if (child.tag === "template") {
                    slot.push.apply(slot, child.children)
                } else {
                    slot.push(child)
                }
            } else {
                defaultSlot.push(child)
            }
        }
        // ignore whitespace
        if (!defaultSlot.every(isWhitespace)) {
            slots.default = defaultSlot
        }
        return slots
    }

    function isWhitespace(node) {
        return node.isComment || node.text === " "
    }

    function resolveScopedSlots(
        fns, // see flow/vnode
        res
    ) {
        res = res || {}
        for (var i = 0; i < fns.length; i++) {
            if (Array.isArray(fns[i])) {
                resolveScopedSlots(fns[i], res)
            } else {
                res[fns[i].key] = fns[i].fn
            }
        }
        return res
    }

    /*  */

    var activeInstance = null

    function initLifecycle(vm) {
        var options = vm.$options

        // locate first non-abstract parent
        var parent = options.parent
        if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
                parent = parent.$parent
            }
            parent.$children.push(vm)
        }

        vm.$parent = parent
        vm.$root = parent ? parent.$root : vm

        vm.$children = []
        vm.$refs = {}

        vm._watcher = null
        vm._inactive = null
        vm._directInactive = false
        vm._isMounted = false
        vm._isDestroyed = false
        vm._isBeingDestroyed = false
    }

    function lifecycleMixin(Vue) {
        Vue.prototype._update = function(vnode, hydrating) {
            var vm = this
            if (vm._isMounted) {
                callHook(vm, "beforeUpdate")
            }
            var prevEl = vm.$el
            var prevVnode = vm._vnode
            var prevActiveInstance = activeInstance
            activeInstance = vm
            vm._vnode = vnode
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
            if (!prevVnode) {
                // initial render
                vm.$el = vm.__patch__(
                    vm.$el,
                    vnode,
                    hydrating,
                    false /* removeOnly */,
                    vm.$options._parentElm,
                    vm.$options._refElm
                )
                // no need for the ref nodes after initial patch
                // this prevents keeping a detached DOM tree in memory (#5851)
                vm.$options._parentElm = vm.$options._refElm = null
            } else {
                // updates
                vm.$el = vm.__patch__(prevVnode, vnode)
            }
            activeInstance = prevActiveInstance
            // update __vue__ reference
            if (prevEl) {
                prevEl.__vue__ = null
            }
            if (vm.$el) {
                vm.$el.__vue__ = vm
            }
            // if parent is an HOC, update its $el as well
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                vm.$parent.$el = vm.$el
            }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
        }

        Vue.prototype.$forceUpdate = function() {
            var vm = this
            if (vm._watcher) {
                vm._watcher.update()
            }
        }

        Vue.prototype.$destroy = function() {
            var vm = this
            if (vm._isBeingDestroyed) {
                return
            }
            callHook(vm, "beforeDestroy")
            vm._isBeingDestroyed = true
            // remove self from parent
            var parent = vm.$parent
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                remove(parent.$children, vm)
            }
            // teardown watchers
            if (vm._watcher) {
                vm._watcher.teardown()
            }
            var i = vm._watchers.length
            while (i--) {
                vm._watchers[i].teardown()
            }
            // remove reference from data ob
            // frozen object may not have observer.
            if (vm._data.__ob__) {
                vm._data.__ob__.vmCount--
            }
            // call the last hook...
            vm._isDestroyed = true
            // invoke destroy hooks on current rendered tree
            vm.__patch__(vm._vnode, null)
            // fire destroyed hook
            callHook(vm, "destroyed")
            // turn off all instance listeners.
            vm.$off()
            // remove __vue__ reference
            if (vm.$el) {
                vm.$el.__vue__ = null
            }
        }
    }

    function mountComponent(vm, el, hydrating) {
        vm.$el = el
        if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode
        }
        callHook(vm, "beforeMount")

        var updateComponent
        /* istanbul ignore if */
        if (false) {} else {
            updateComponent = function() {
                vm._update(vm._render(), hydrating)
            }
        }

        vm._watcher = new Watcher(vm, updateComponent, noop)
        hydrating = false

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
            vm._isMounted = true
            callHook(vm, "mounted")
        }
        return vm
    }

    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        var hasChildren = !!(
            renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            parentVnode.data.scopedSlots || // has new scoped slots
            vm.$scopedSlots !== emptyObject
        ) // has old scoped slots

        vm.$options._parentVnode = parentVnode
        vm.$vnode = parentVnode // update vm's placeholder node without re-render

        if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode
        }
        vm.$options._renderChildren = renderChildren

        // update $attrs and $listensers hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
        vm.$attrs = parentVnode.data && parentVnode.data.attrs
        vm.$listeners = listeners

        // update props
        if (propsData && vm.$options.props) {
            observerState.shouldConvert = false
            var props = vm._props
            var propKeys = vm.$options._propKeys || []
            for (var i = 0; i < propKeys.length; i++) {
                var key = propKeys[i]
                props[key] = validateProp(key, vm.$options.props, propsData, vm)
            }
            observerState.shouldConvert = true
            // keep a copy of raw propsData
            vm.$options.propsData = propsData
        }

        // update listeners
        if (listeners) {
            var oldListeners = vm.$options._parentListeners
            vm.$options._parentListeners = listeners
            updateComponentListeners(vm, listeners, oldListeners)
        }
        // resolve slots + force update if has children
        if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context)
            vm.$forceUpdate()
        }
    }

    function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
                return true
            }
        }
        return false
    }

    function activateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = false
            if (isInInactiveTree(vm)) {
                return
            }
        } else if (vm._directInactive) {
            return
        }
        if (vm._inactive || vm._inactive === null) {
            vm._inactive = false
            for (var i = 0; i < vm.$children.length; i++) {
                activateChildComponent(vm.$children[i])
            }
            callHook(vm, "activated")
        }
    }

    function deactivateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = true
            if (isInInactiveTree(vm)) {
                return
            }
        }
        if (!vm._inactive) {
            vm._inactive = true
            for (var i = 0; i < vm.$children.length; i++) {
                deactivateChildComponent(vm.$children[i])
            }
            callHook(vm, "deactivated")
        }
    }

    function callHook(vm, hook) {
        var handlers = vm.$options[hook]
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    handlers[i].call(vm)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }
    }

    /*  */

    var MAX_UPDATE_COUNT = 100

    var queue = []
    var activatedChildren = []
    var has = {}
    var circular = {}
    var waiting = false
    var flushing = false
    var index = 0

    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0
        has = {}
        waiting = flushing = false
    }

    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue() {
        flushing = true
        var watcher, id

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(function(a, b) {
            return a.id - b.id
        })

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index = 0; index < queue.length; index++) {
            watcher = queue[index]
            id = watcher.id
            has[id] = null
            watcher.run()
            // in dev build, check and stop circular updates.
            if (false) {}
        }

        // keep copies of post queues before resetting state
        var activatedQueue = activatedChildren.slice()
        var updatedQueue = queue.slice()

        resetSchedulerState()

        // call component updated and activated hooks
        callActivatedHooks(activatedQueue)
        callUpdatedHooks(updatedQueue)

        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
            devtools.emit("flush")
        }
    }

    function callUpdatedHooks(queue) {
        var i = queue.length
        while (i--) {
            var watcher = queue[i]
            var vm = watcher.vm
            if (vm._watcher === watcher && vm._isMounted) {
                callHook(vm, "updated")
            }
        }
    }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false
        activatedChildren.push(vm)
    }

    function callActivatedHooks(queue) {
        for (var i = 0; i < queue.length; i++) {
            queue[i]._inactive = true
            activateChildComponent(queue[i], true /* true */)
        }
    }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher(watcher) {
        var id = watcher.id
        if (has[id] == null) {
            has[id] = true
            if (!flushing) {
                queue.push(watcher)
            } else {
                // if already flushing, splice the watcher based on its id
                // if already past its id, it will be run next immediately.
                var i = queue.length - 1
                while (i > index && queue[i].id > watcher.id) {
                    i--
                }
                queue.splice(i + 1, 0, watcher)
            }
            // queue the flush
            if (!waiting) {
                waiting = true
                nextTick(flushSchedulerQueue)
            }
        }
    }

    /*  */

    var uid$2 = 0

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher(vm, expOrFn, cb, options) {
        this.vm = vm
        vm._watchers.push(this)
        // options
        if (options) {
            this.deep = !!options.deep
            this.user = !!options.user
            this.lazy = !!options.lazy
            this.sync = !!options.sync
        } else {
            this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid$2 // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new _Set()
        this.newDepIds = new _Set()
        this.expression = ""
        // parse expression for getter
        if (typeof expOrFn === "function") {
            this.getter = expOrFn
        } else {
            this.getter = parsePath(expOrFn)
            if (!this.getter) {
                this.getter = function() {}
                 false &&
                    false
            }
        }
        this.value = this.lazy ? undefined : this.get()
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get() {
        pushTarget(this)
        var value
        var vm = this.vm
        try {
            value = this.getter.call(vm, vm)
        } catch (e) {
            if (this.user) {
                handleError(e, vm, 'getter for watcher "' + this.expression + '"')
            } else {
                throw e
            }
        } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value)
            }
            popTarget()
            this.cleanupDeps()
        }
        return value
    }

    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id)
            this.newDeps.push(dep)
            if (!this.depIds.has(id)) {
                dep.addSub(this)
            }
        }
    }

    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            var dep = this$1.deps[i]
            if (!this$1.newDepIds.has(dep.id)) {
                dep.removeSub(this$1)
            }
        }
        var tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update() {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true
        } else if (this.sync) {
            this.run()
        } else {
            queueWatcher(this)
        }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run() {
        if (this.active) {
            var value = this.get()
            if (
                value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep
            ) {
                // set new value
                var oldValue = this.value
                this.value = value
                if (this.user) {
                    try {
                        this.cb.call(this.vm, value, oldValue)
                    } catch (e) {
                        handleError(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                } else {
                    this.cb.call(this.vm, value, oldValue)
                }
            }
        }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get()
        this.dirty = false
    }

    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            this$1.deps[i].depend()
        }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown() {
        var this$1 = this

        if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
                remove(this.vm._watchers, this)
            }
            var i = this.deps.length
            while (i--) {
                this$1.deps[i].removeSub(this$1)
            }
            this.active = false
        }
    }

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    var seenObjects = new _Set()

    function traverse(val) {
        seenObjects.clear()
        _traverse(val, seenObjects)
    }

    function _traverse(val, seen) {
        var i, keys
        var isA = Array.isArray(val)
        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
            return
        }
        if (val.__ob__) {
            var depId = val.__ob__.dep.id
            if (seen.has(depId)) {
                return
            }
            seen.add(depId)
        }
        if (isA) {
            i = val.length
            while (i--) {
                _traverse(val[i], seen)
            }
        } else {
            keys = Object.keys(val)
            i = keys.length
            while (i--) {
                _traverse(val[keys[i]], seen)
            }
        }
    }

    /*  */

    var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
    }

    function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function initState(vm) {
        vm._watchers = []
        var opts = vm.$options
        if (opts.props) {
            initProps(vm, opts.props)
        }
        if (opts.methods) {
            initMethods(vm, opts.methods)
        }
        if (opts.data) {
            initData(vm)
        } else {
            observe((vm._data = {}), true /* asRootData */)
        }
        if (opts.computed) {
            initComputed(vm, opts.computed)
        }
        if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch)
        }
    }

    function checkOptionType(vm, name) {
        var option = vm.$options[name]
        if (!isPlainObject(option)) {
            warn('component option "' + name + '" should be an object.', vm)
        }
    }

    function initProps(vm, propsOptions) {
        var propsData = vm.$options.propsData || {}
        var props = (vm._props = {})
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        var keys = (vm.$options._propKeys = [])
        var isRoot = !vm.$parent
        // root instance props should be converted
        observerState.shouldConvert = isRoot
        var loop = function(key) {
            keys.push(key)
            var value = validateProp(key, propsOptions, propsData, vm)
            /* istanbul ignore else */
            {
                defineReactive$$1(props, key, value)
            }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
            if (!(key in vm)) {
                proxy(vm, "_props", key)
            }
        }

        for (var key in propsOptions) loop(key)
        observerState.shouldConvert = true
    }

    function initData(vm) {
        var data = vm.$options.data
        data = vm._data = typeof data === "function" ? getData(data, vm) : data || {}
        if (!isPlainObject(data)) {
            data = {}
             false &&
                false
        }
        // proxy data on instance
        var keys = Object.keys(data)
        var props = vm.$options.props
        var methods = vm.$options.methods
        var i = keys.length
        while (i--) {
            var key = keys[i]
            if (props && hasOwn(props, key)) {
                 false &&
                    false
            } else if (!isReserved(key)) {
                proxy(vm, "_data", key)
            }
        }
        // observe data
        observe(data, true /* asRootData */)
    }

    function getData(data, vm) {
        try {
            return data.call(vm)
        } catch (e) {
            handleError(e, vm, "data()")
            return {}
        }
    }

    var computedWatcherOptions = {
        lazy: true
    }

    function initComputed(vm, computed) {
         false && false
        var watchers = (vm._computedWatchers = Object.create(null))

        for (var key in computed) {
            var userDef = computed[key]
            var getter = typeof userDef === "function" ? userDef : userDef.get
            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)

            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
            if (!(key in vm)) {
                defineComputed(vm, key, userDef)
            } else {
            }
        }
    }

    function defineComputed(target, key, userDef) {
        if (typeof userDef === "function") {
            sharedPropertyDefinition.get = createComputedGetter(key)
            sharedPropertyDefinition.set = noop
        } else {
            sharedPropertyDefinition.get = userDef.get
                ? userDef.cache !== false
                    ? createComputedGetter(key)
                    : userDef.get
                : noop
            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function createComputedGetter(key) {
        return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key]
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate()
                }
                if (Dep.target) {
                    watcher.depend()
                }
                return watcher.value
            }
        }
    }

    function initMethods(vm, methods) {
         false && false
        var props = vm.$options.props
        for (var key in methods) {
            vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
        }
    }

    function initWatch(vm, watch) {
         false && false
        for (var key in watch) {
            var handler = watch[key]
            if (Array.isArray(handler)) {
                for (var i = 0; i < handler.length; i++) {
                    createWatcher(vm, key, handler[i])
                }
            } else {
                createWatcher(vm, key, handler)
            }
        }
    }

    function createWatcher(vm, keyOrFn, handler, options) {
        if (isPlainObject(handler)) {
            options = handler
            handler = handler.handler
        }
        if (typeof handler === "string") {
            handler = vm[handler]
        }
        return vm.$watch(keyOrFn, handler, options)
    }

    function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {}
        dataDef.get = function() {
            return this._data
        }
        var propsDef = {}
        propsDef.get = function() {
            return this._props
        }
        Object.defineProperty(Vue.prototype, "$data", dataDef)
        Object.defineProperty(Vue.prototype, "$props", propsDef)

        Vue.prototype.$set = set
        Vue.prototype.$delete = del

        Vue.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this
            if (isPlainObject(cb)) {
                return createWatcher(vm, expOrFn, cb, options)
            }
            options = options || {}
            options.user = true
            var watcher = new Watcher(vm, expOrFn, cb, options)
            if (options.immediate) {
                cb.call(vm, watcher.value)
            }
            return function unwatchFn() {
                watcher.teardown()
            }
        }
    }

    /*  */

    function initProvide(vm) {
        var provide = vm.$options.provide
        if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide
        }
    }

    function initInjections(vm) {
        var result = resolveInject(vm.$options.inject, vm)
        if (result) {
            observerState.shouldConvert = false
            Object.keys(result).forEach(function(key) {
                /* istanbul ignore else */
                {
                    defineReactive$$1(vm, key, result[key])
                }
            })
            observerState.shouldConvert = true
        }
    }

    function resolveInject(inject, vm) {
        if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            var result = Object.create(null)
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i]
                var provideKey = inject[key]
                var source = vm
                while (source) {
                    if (source._provided && provideKey in source._provided) {
                        result[key] = source._provided[provideKey]
                        break
                    }
                    source = source.$parent
                }
                if (false) {}
            }
            return result
        }
    }

    /*  */

    function createFunctionalComponent(Ctor, propsData, data, context, children) {
        var props = {}
        var propOptions = Ctor.options.props
        if (isDef(propOptions)) {
            for (var key in propOptions) {
                props[key] = validateProp(key, propOptions, propsData || {})
            }
        } else {
            if (isDef(data.attrs)) {
                mergeProps(props, data.attrs)
            }
            if (isDef(data.props)) {
                mergeProps(props, data.props)
            }
        }
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        var _context = Object.create(context)
        var h = function(a, b, c, d) {
            return createElement(_context, a, b, c, d, true)
        }
        var vnode = Ctor.options.render.call(null, h, {
            data: data,
            props: props,
            children: children,
            parent: context,
            listeners: data.on || {},
            injections: resolveInject(Ctor.options.inject, context),
            slots: function() {
                return resolveSlots(children, context)
            }
        })
        if (vnode instanceof VNode) {
            vnode.functionalContext = context
            vnode.functionalOptions = Ctor.options
            if (data.slot) {
                ;(vnode.data || (vnode.data = {})).slot = data.slot
            }
        }
        return vnode
    }

    function mergeProps(to, from) {
        for (var key in from) {
            to[camelize(key)] = from[key]
        }
    }

    /*  */

    // hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
        init: function init(vnode, hydrating, parentElm, refElm) {
            if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
                var child = (vnode.componentInstance = createComponentInstanceForVnode(
                    vnode,
                    activeInstance,
                    parentElm,
                    refElm
                ))
                child.$mount(hydrating ? vnode.elm : undefined, hydrating)
            } else if (vnode.data.keepAlive) {
                // kept-alive components, treat as a patch
                var mountedNode = vnode // work around flow
                componentVNodeHooks.prepatch(mountedNode, mountedNode)
            }
        },

        prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions
            var child = (vnode.componentInstance = oldVnode.componentInstance)
            updateChildComponent(
                child,
                options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children // new children
            )
        },

        insert: function insert(vnode) {
            var context = vnode.context
            var componentInstance = vnode.componentInstance

            if (!componentInstance._isMounted) {
                componentInstance._isMounted = true
                callHook(componentInstance, "mounted")
            }
            if (vnode.data.keepAlive) {
                if (context._isMounted) {
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
                    queueActivatedComponent(componentInstance)
                } else {
                    activateChildComponent(componentInstance, true /* direct */)
                }
            }
        },

        destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance
            if (!componentInstance._isDestroyed) {
                if (!vnode.data.keepAlive) {
                    componentInstance.$destroy()
                } else {
                    deactivateChildComponent(componentInstance, true /* direct */)
                }
            }
        }
    }

    var hooksToMerge = Object.keys(componentVNodeHooks)

    function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
            return
        }

        var baseCtor = context.$options._base

        // plain options object: turn it into a constructor
        if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor)
        }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== "function") {
            return
        }

        // async component
        var asyncFactory
        if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)
            if (Ctor === undefined) {
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)
            }
        }

        data = data || {}

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        // transform component v-model data into props & events
        if (isDef(data.model)) {
            transformModel(Ctor.options, data)
        }

        // extract props
        var propsData = extractPropsFromVNodeData(data, Ctor, tag)

        // functional component
        if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // keep listeners
        var listeners = data.on

        if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
            var slot = data.slot
            data = {}
            if (slot) {
                data.slot = slot
            }
        }

        // merge component management hooks onto the placeholder node
        mergeHooks(data)

        // return a placeholder vnode
        var name = Ctor.options.name || tag
        var vnode = new VNode(
            "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
            data,
            undefined,
            undefined,
            undefined,
            context,
            {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            },
            asyncFactory
        )
        return vnode
    }

    function createComponentInstanceForVnode(
        vnode, // we know it's MountedComponentVNode but flow doesn't
        parent, // activeInstance in lifecycle state
        parentElm,
        refElm
    ) {
        var vnodeComponentOptions = vnode.componentOptions
        var options = {
            _isComponent: true,
            parent: parent,
            propsData: vnodeComponentOptions.propsData,
            _componentTag: vnodeComponentOptions.tag,
            _parentVnode: vnode,
            _parentListeners: vnodeComponentOptions.listeners,
            _renderChildren: vnodeComponentOptions.children,
            _parentElm: parentElm || null,
            _refElm: refElm || null
        }
        // check inline-template render functions
        var inlineTemplate = vnode.data.inlineTemplate
        if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render
            options.staticRenderFns = inlineTemplate.staticRenderFns
        }
        return new vnodeComponentOptions.Ctor(options)
    }

    function mergeHooks(data) {
        if (!data.hook) {
            data.hook = {}
        }
        for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i]
            var fromParent = data.hook[key]
            var ours = componentVNodeHooks[key]
            data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
        }
    }

    function mergeHook$1(one, two) {
        return function(a, b, c, d) {
            one(a, b, c, d)
            two(a, b, c, d)
        }
    }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel(options, data) {
        var prop = (options.model && options.model.prop) || "value"
        var event = (options.model && options.model.event) || "input"
        ;(data.props || (data.props = {}))[prop] = data.model.value
        var on = data.on || (data.on = {})
        if (isDef(on[event])) {
            on[event] = [data.model.callback].concat(on[event])
        } else {
            on[event] = data.model.callback
        }
    }

    /*  */

    var SIMPLE_NORMALIZE = 1
    var ALWAYS_NORMALIZE = 2

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children
            children = data
            data = undefined
        }
        if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE
        }
        return _createElement(context, tag, data, children, normalizationType)
    }

    function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
             false &&
                false
            return createEmptyVNode()
        }
        // object syntax in v-bind
        if (isDef(data) && isDef(data.is)) {
            tag = data.is
        }
        if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode()
        }
        // warn against non-primitive key
        if (
            false
        ) {}
        // support single function children as default scoped slot
        if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {}
            data.scopedSlots = {
                default: children[0]
            }
            children.length = 0
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children)
        } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children)
        }
        var vnode, ns
        if (typeof tag === "string") {
            var Ctor
            ns = config.getTagNamespace(tag)
            if (config.isReservedTag(tag)) {
                // platform built-in elements
                vnode = new VNode(
                    config.parsePlatformTagName(tag),
                    data,
                    children,
                    undefined,
                    undefined,
                    context
                )
            } else if (isDef((Ctor = resolveAsset(context.$options, "components", tag)))) {
                // component
                vnode = createComponent(Ctor, data, context, children, tag)
            } else {
                // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                vnode = new VNode(tag, data, children, undefined, undefined, context)
            }
        } else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children)
        }
        if (isDef(vnode)) {
            if (ns) {
                applyNS(vnode, ns)
            }
            return vnode
        } else {
            return createEmptyVNode()
        }
    }

    function applyNS(vnode, ns) {
        vnode.ns = ns
        if (vnode.tag === "foreignObject") {
            // use default namespace inside foreignObject
            return
        }
        if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
                var child = vnode.children[i]
                if (isDef(child.tag) && isUndef(child.ns)) {
                    applyNS(child, ns)
                }
            }
        }
    }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList(val, render) {
        var ret, i, l, keys, key
        if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length)
            for (i = 0, l = val.length; i < l; i++) {
                ret[i] = render(val[i], i)
            }
        } else if (typeof val === "number") {
            ret = new Array(val)
            for (i = 0; i < val; i++) {
                ret[i] = render(i + 1, i)
            }
        } else if (isObject(val)) {
            keys = Object.keys(val)
            ret = new Array(keys.length)
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i]
                ret[i] = render(val[key], key, i)
            }
        }
        if (isDef(ret)) {
            ret._isVList = true
        }
        return ret
    }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot(name, fallback, props, bindObject) {
        var scopedSlotFn = this.$scopedSlots[name]
        if (scopedSlotFn) {
            // scoped slot
            props = props || {}
            if (bindObject) {
                props = extend(extend({}, bindObject), props)
            }
            return scopedSlotFn(props) || fallback
        } else {
            var slotNodes = this.$slots[name]
            // warn duplicate slot usage
            if (slotNodes && "production" !== "production") {
                slotNodes._rendered &&
                    warn(
                        'Duplicate presence of slot "' +
                            name +
                            '" found in the same render tree ' +
                            "- this will likely cause render errors.",
                        this
                    )
                slotNodes._rendered = true
            }
            return slotNodes || fallback
        }
    }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter(id) {
        return resolveAsset(this.$options, "filters", id, true) || identity
    }

    /*  */

    /**
     * Runtime helper for checking keyCodes from config.
     */
    function checkKeyCodes(eventKeyCode, key, builtInAlias) {
        var keyCodes = config.keyCodes[key] || builtInAlias
        if (Array.isArray(keyCodes)) {
            return keyCodes.indexOf(eventKeyCode) === -1
        } else {
            return keyCodes !== eventKeyCode
        }
    }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
            if (!isObject(value)) {
                 false &&
                    false
            } else {
                if (Array.isArray(value)) {
                    value = toObject(value)
                }
                var hash
                var loop = function(key) {
                    if (key === "class" || key === "style" || isReservedAttribute(key)) {
                        hash = data
                    } else {
                        var type = data.attrs && data.attrs.type
                        hash =
                            asProp || config.mustUseProp(tag, type, key)
                                ? data.domProps || (data.domProps = {})
                                : data.attrs || (data.attrs = {})
                    }
                    if (!(key in hash)) {
                        hash[key] = value[key]

                        if (isSync) {
                            var on = data.on || (data.on = {})
                            on["update:" + key] = function($event) {
                                value[key] = $event
                            }
                        }
                    }
                }

                for (var key in value) loop(key)
            }
        }
        return data
    }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic(index, isInFor) {
        var tree = this._staticTrees[index]
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by doing a shallow clone.
        if (tree && !isInFor) {
            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)
        }
        // otherwise, render a fresh tree.
        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(
            this._renderProxy
        )
        markStatic(tree, "__static__" + index, false)
        return tree
    }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce(tree, index, key) {
        markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true)
        return tree
    }

    function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
                if (tree[i] && typeof tree[i] !== "string") {
                    markStaticNode(tree[i], key + "_" + i, isOnce)
                }
            }
        } else {
            markStaticNode(tree, key, isOnce)
        }
    }

    function markStaticNode(node, key, isOnce) {
        node.isStatic = true
        node.key = key
        node.isOnce = isOnce
    }

    /*  */

    function bindObjectListeners(data, value) {
        if (value) {
            if (!isPlainObject(value)) {
                 false &&
                    false
            } else {
                var on = (data.on = data.on ? extend({}, data.on) : {})
                for (var key in value) {
                    var existing = on[key]
                    var ours = value[key]
                    on[key] = existing ? [].concat(ours, existing) : ours
                }
            }
        }
        return data
    }

    /*  */

    function initRender(vm) {
        vm._vnode = null // the root of the child tree
        vm._staticTrees = null
        var parentVnode = (vm.$vnode = vm.$options._parentVnode) // the placeholder node in parent tree
        var renderContext = parentVnode && parentVnode.context
        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)
        vm.$scopedSlots = emptyObject
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false)
        }
        // normalization is always applied for the public version, used in
        // user-written render functions.
        vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true)
        }

        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
        var parentData = parentVnode && parentVnode.data
        /* istanbul ignore else */
        {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs, null, true)
            defineReactive$$1(vm, "$listeners", parentData && parentData.on, null, true)
        }
    }

    function renderMixin(Vue) {
        Vue.prototype.$nextTick = function(fn) {
            return nextTick(fn, this)
        }

        Vue.prototype._render = function() {
            var vm = this
            var ref = vm.$options
            var render = ref.render
            var staticRenderFns = ref.staticRenderFns
            var _parentVnode = ref._parentVnode

            if (vm._isMounted) {
                // clone slot nodes on re-renders
                for (var key in vm.$slots) {
                    vm.$slots[key] = cloneVNodes(vm.$slots[key])
                }
            }

            vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject

            if (staticRenderFns && !vm._staticTrees) {
                vm._staticTrees = []
            }
            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
            vm.$vnode = _parentVnode
            // render self
            var vnode
            try {
                vnode = render.call(vm._renderProxy, vm.$createElement)
            } catch (e) {
                handleError(e, vm, "render function")
                // return error render result,
                // or previous vnode to prevent render error causing blank component
                /* istanbul ignore else */
                {
                    vnode = vm._vnode
                }
            }
            // return empty vnode in case the render function errored out
            if (!(vnode instanceof VNode)) {
                if (false) {}
                vnode = createEmptyVNode()
            }
            // set parent
            vnode.parent = _parentVnode
            return vnode
        }

        // internal render helpers.
        // these are exposed on the instance prototype to reduce generated render
        // code size.
        Vue.prototype._o = markOnce
        Vue.prototype._n = toNumber
        Vue.prototype._s = toString
        Vue.prototype._l = renderList
        Vue.prototype._t = renderSlot
        Vue.prototype._q = looseEqual
        Vue.prototype._i = looseIndexOf
        Vue.prototype._m = renderStatic
        Vue.prototype._f = resolveFilter
        Vue.prototype._k = checkKeyCodes
        Vue.prototype._b = bindObjectProps
        Vue.prototype._v = createTextVNode
        Vue.prototype._e = createEmptyVNode
        Vue.prototype._u = resolveScopedSlots
        Vue.prototype._g = bindObjectListeners
    }

    /*  */

    var uid = 0

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            var vm = this
            // a uid
            vm._uid = uid++

            var startTag, endTag
            /* istanbul ignore if */
            if (false) {}

            // a flag to avoid this being observed
            vm._isVue = true
            // merge options
            if (options && options._isComponent) {
                // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                initInternalComponent(vm, options)
            } else {
                vm.$options = mergeOptions(
                    resolveConstructorOptions(vm.constructor),
                    options || {},
                    vm
                )
            }
            /* istanbul ignore else */
            {
                vm._renderProxy = vm
            }
            // expose real self
            vm._self = vm
            initLifecycle(vm)
            initEvents(vm)
            initRender(vm)
            callHook(vm, "beforeCreate")
            initInjections(vm) // resolve injections before data/props
            initState(vm)
            initProvide(vm) // resolve provide after data/props
            callHook(vm, "created")

            /* istanbul ignore if */
            if (false) {}

            if (vm.$options.el) {
                vm.$mount(vm.$options.el)
            }
        }
    }

    function initInternalComponent(vm, options) {
        var opts = (vm.$options = Object.create(vm.constructor.options))
        // doing this because it's faster than dynamic enumeration.
        opts.parent = options.parent
        opts.propsData = options.propsData
        opts._parentVnode = options._parentVnode
        opts._parentListeners = options._parentListeners
        opts._renderChildren = options._renderChildren
        opts._componentTag = options._componentTag
        opts._parentElm = options._parentElm
        opts._refElm = options._refElm
        if (options.render) {
            opts.render = options.render
            opts.staticRenderFns = options.staticRenderFns
        }
    }

    function resolveConstructorOptions(Ctor) {
        var options = Ctor.options
        if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super)
            var cachedSuperOptions = Ctor.superOptions
            if (superOptions !== cachedSuperOptions) {
                // super option changed,
                // need to resolve new options.
                Ctor.superOptions = superOptions
                // check if there are any late-modified/attached options (#4976)
                var modifiedOptions = resolveModifiedOptions(Ctor)
                // update base extend options
                if (modifiedOptions) {
                    extend(Ctor.extendOptions, modifiedOptions)
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
                if (options.name) {
                    options.components[options.name] = Ctor
                }
            }
        }
        return options
    }

    function resolveModifiedOptions(Ctor) {
        var modified
        var latest = Ctor.options
        var extended = Ctor.extendOptions
        var sealed = Ctor.sealedOptions
        for (var key in latest) {
            if (latest[key] !== sealed[key]) {
                if (!modified) {
                    modified = {}
                }
                modified[key] = dedupe(latest[key], extended[key], sealed[key])
            }
        }
        return modified
    }

    function dedupe(latest, extended, sealed) {
        // compare latest and sealed to ensure lifecycle hooks won't be duplicated
        // between merges
        if (Array.isArray(latest)) {
            var res = []
            sealed = Array.isArray(sealed) ? sealed : [sealed]
            extended = Array.isArray(extended) ? extended : [extended]
            for (var i = 0; i < latest.length; i++) {
                // push original options and not sealed options to exclude duplicated options
                if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
                    res.push(latest[i])
                }
            }
            return res
        } else {
            return latest
        }
    }

    function Vue$3(options) {
        if (false) {}
        this._init(options)
    }

    initMixin(Vue$3)
    stateMixin(Vue$3)
    eventsMixin(Vue$3)
    lifecycleMixin(Vue$3)
    renderMixin(Vue$3)

    /*  */

    function initUse(Vue) {
        Vue.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = [])
            if (installedPlugins.indexOf(plugin) > -1) {
                return this
            }

            // additional parameters
            var args = toArray(arguments, 1)
            args.unshift(this)
            if (typeof plugin.install === "function") {
                plugin.install.apply(plugin, args)
            } else if (typeof plugin === "function") {
                plugin.apply(null, args)
            }
            installedPlugins.push(plugin)
            return this
        }
    }

    /*  */

    function initMixin$1(Vue) {
        Vue.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin)
            return this
        }
    }

    /*  */

    function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0
        var cid = 1

        /**
         * Class inheritance
         */
        Vue.extend = function(extendOptions) {
            extendOptions = extendOptions || {}
            var Super = this
            var SuperId = Super.cid
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
            if (cachedCtors[SuperId]) {
                return cachedCtors[SuperId]
            }

            var name = extendOptions.name || Super.options.name
            var Sub = function VueComponent(options) {
                this._init(options)
            }
            Sub.prototype = Object.create(Super.prototype)
            Sub.prototype.constructor = Sub
            Sub.cid = cid++
            Sub.options = mergeOptions(Super.options, extendOptions)
            Sub["super"] = Super

            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
            if (Sub.options.props) {
                initProps$1(Sub)
            }
            if (Sub.options.computed) {
                initComputed$1(Sub)
            }

            // allow further extension/mixin/plugin usage
            Sub.extend = Super.extend
            Sub.mixin = Super.mixin
            Sub.use = Super.use

            // create asset registers, so extended classes
            // can have their private assets too.
            ASSET_TYPES.forEach(function(type) {
                Sub[type] = Super[type]
            })
            // enable recursive self-lookup
            if (name) {
                Sub.options.components[name] = Sub
            }

            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
            Sub.superOptions = Super.options
            Sub.extendOptions = extendOptions
            Sub.sealedOptions = extend({}, Sub.options)

            // cache constructor
            cachedCtors[SuperId] = Sub
            return Sub
        }
    }

    function initProps$1(Comp) {
        var props = Comp.options.props
        for (var key in props) {
            proxy(Comp.prototype, "_props", key)
        }
    }

    function initComputed$1(Comp) {
        var computed = Comp.options.computed
        for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key])
        }
    }

    /*  */

    function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
        ASSET_TYPES.forEach(function(type) {
            Vue[type] = function(id, definition) {
                if (!definition) {
                    return this.options[type + "s"][id]
                } else {
                    /* istanbul ignore if */
                    if (type === "component" && isPlainObject(definition)) {
                        definition.name = definition.name || id
                        definition = this.options._base.extend(definition)
                    }
                    if (type === "directive" && typeof definition === "function") {
                        definition = {
                            bind: definition,
                            update: definition
                        }
                    }
                    this.options[type + "s"][id] = definition
                    return definition
                }
            }
        })
    }

    /*  */

    var patternTypes = [String, RegExp, Array]

    function getComponentName(opts) {
        return opts && (opts.Ctor.options.name || opts.tag)
    }

    function matches(pattern, name) {
        if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1
        } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1
        } else if (isRegExp(pattern)) {
            return pattern.test(name)
        }
        /* istanbul ignore next */
        return false
    }

    function pruneCache(cache, current, filter) {
        for (var key in cache) {
            var cachedNode = cache[key]
            if (cachedNode) {
                var name = getComponentName(cachedNode.componentOptions)
                if (name && !filter(name)) {
                    if (cachedNode !== current) {
                        pruneCacheEntry(cachedNode)
                    }
                    cache[key] = null
                }
            }
        }
    }

    function pruneCacheEntry(vnode) {
        if (vnode) {
            vnode.componentInstance.$destroy()
        }
    }

    var KeepAlive = {
        name: "keep-alive",
        abstract: true,

        props: {
            include: patternTypes,
            exclude: patternTypes
        },

        created: function created() {
            this.cache = Object.create(null)
        },

        destroyed: function destroyed() {
            var this$1 = this

            for (var key in this$1.cache) {
                pruneCacheEntry(this$1.cache[key])
            }
        },

        watch: {
            include: function include(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return matches(val, name)
                })
            },
            exclude: function exclude(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return !matches(val, name)
                })
            }
        },

        render: function render() {
            var vnode = getFirstComponentChild(this.$slots.default)
            var componentOptions = vnode && vnode.componentOptions
            if (componentOptions) {
                // check pattern
                var name = getComponentName(componentOptions)
                if (
                    name &&
                    ((this.include && !matches(this.include, name)) ||
                        (this.exclude && matches(this.exclude, name)))
                ) {
                    return vnode
                }
                var key =
                    vnode.key == null
                        ? // same constructor may get registered as different local components
                          // so cid alone is not enough (#3269)
                          componentOptions.Ctor.cid +
                          (componentOptions.tag ? "::" + componentOptions.tag : "")
                        : vnode.key
                if (this.cache[key]) {
                    vnode.componentInstance = this.cache[key].componentInstance
                } else {
                    this.cache[key] = vnode
                }
                vnode.data.keepAlive = true
            }
            return vnode
        }
    }

    var builtInComponents = {
        KeepAlive: KeepAlive
    }

    /*  */

    function initGlobalAPI(Vue) {
        // config
        var configDef = {}
        configDef.get = function() {
            return config
        }
        Object.defineProperty(Vue, "config", configDef)

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
            warn: warn,
            extend: extend,
            mergeOptions: mergeOptions,
            defineReactive: defineReactive$$1
        }

        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick

        Vue.options = Object.create(null)
        ASSET_TYPES.forEach(function(type) {
            Vue.options[type + "s"] = Object.create(null)
        })

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue

        extend(Vue.options.components, builtInComponents)

        initUse(Vue)
        initMixin$1(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
    }

    initGlobalAPI(Vue$3)

    Object.defineProperty(Vue$3.prototype, "$isServer", {
        get: isServerRendering
    })

    Object.defineProperty(Vue$3.prototype, "$ssrContext", {
        get: function get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext
        }
    })

    Vue$3.version = "2.4.1"
    Vue$3.mpvueVersion = "1.0.12"

    /* globals renderer */

    var isReservedTag = makeMap(
        "template,script,style,element,content,slot,link,meta,svg,view," +
            "a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select," +
            "slider,slider-neighbor,indicator,trisition,trisition-group,canvas," +
            "list,cell,header,loading,loading-indicator,refresh,scrollable,scroller," +
            "video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",
        true
    )

    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap("style,class")

    // Elements that you can, intentionally, leave open (and which close themselves)
    // more flexable than web
    var canBeLeftOpenTag = makeMap(
        "web,spinner,switch,video,textarea,canvas," + "indicator,marquee,countdown",
        true
    )

    var isUnaryTag = makeMap("embed,img,image,input,link,meta", true)

    function mustUseProp() {
        /* console.log('mustUseProp') */
    }

    function getTagNamespace() {
        /* console.log('getTagNamespace') */
    }

    function isUnknownElement() {
        /* console.log('isUnknownElement') */
    }

    function getComKey(vm) {
        return vm && vm.$attrs ? vm.$attrs["mpcomid"] : "0"
    }

    // 用于小程序的 event type 到 web 的 event
    var eventTypeMap = {
        tap: ["tap", "click"],
        touchstart: ["touchstart"],
        touchmove: ["touchmove"],
        touchcancel: ["touchcancel"],
        touchend: ["touchend"],
        longtap: ["longtap"],
        input: ["input"],
        blur: ["change", "blur"],
        submit: ["submit"],
        focus: ["focus"],
        scrolltoupper: ["scrolltoupper"],
        scrolltolower: ["scrolltolower"],
        scroll: ["scroll"]
    }

    /*  */

    // import { namespaceMap } from 'mp/util/index'

    var obj = {}

    function createElement$1(tagName, vnode) {
        return obj
    }

    function createElementNS(namespace, tagName) {
        return obj
    }

    function createTextNode(text) {
        return obj
    }

    function createComment(text) {
        return obj
    }

    function insertBefore(parentNode, newNode, referenceNode) {}

    function removeChild(node, child) {}

    function appendChild(node, child) {}

    function parentNode(node) {
        return obj
    }

    function nextSibling(node) {
        return obj
    }

    function tagName(node) {
        return "div"
    }

    function setTextContent(node, text) {
        return obj
    }

    function setAttribute(node, key, val) {
        return obj
    }

    var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setAttribute: setAttribute
    })

    /*  */

    var ref = {
        create: function create(_, vnode) {
            registerRef(vnode)
        },
        update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
                registerRef(oldVnode, true)
                registerRef(vnode)
            }
        },
        destroy: function destroy(vnode) {
            registerRef(vnode, true)
        }
    }

    function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref
        if (!key) {
            return
        }

        var vm = vnode.context
        var ref = vnode.componentInstance || vnode.elm
        var refs = vm.$refs
        if (isRemoval) {
            if (Array.isArray(refs[key])) {
                remove(refs[key], ref)
            } else if (refs[key] === ref) {
                refs[key] = undefined
            }
        } else {
            if (vnode.data.refInFor) {
                if (!Array.isArray(refs[key])) {
                    refs[key] = [ref]
                } else if (refs[key].indexOf(ref) < 0) {
                    // $flow-disable-line
                    refs[key].push(ref)
                }
            } else {
                refs[key] = ref
            }
        }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *

    /*
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

    var emptyNode = new VNode("", {}, [])

    var hooks = ["create", "activate", "update", "remove", "destroy"]

    function sameVnode(a, b) {
        return (
            a.key === b.key &&
            ((a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)) ||
                (isTrue(a.isAsyncPlaceholder) &&
                    a.asyncFactory === b.asyncFactory &&
                    isUndef(b.asyncFactory.error)))
        )
    }

    // Some browsers do not support dynamically changing type for <input>
    // so they need to be treated as different nodes
    function sameInputType(a, b) {
        if (a.tag !== "input") {
            return true
        }
        var i
        var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type
        var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type
        return typeA === typeB
    }

    function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key
        var map = {}
        for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key
            if (isDef(key)) {
                map[key] = i
            }
        }
        return map
    }

    function createPatchFunction(backend) {
        var i, j
        var cbs = {}

        var modules = backend.modules
        var nodeOps = backend.nodeOps

        for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = []
            for (j = 0; j < modules.length; ++j) {
                if (isDef(modules[j][hooks[i]])) {
                    cbs[hooks[i]].push(modules[j][hooks[i]])
                }
            }
        }

        function emptyNodeAt(elm) {
            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
        }

        function createRmCb(childElm, listeners) {
            function remove$$1() {
                if (--remove$$1.listeners === 0) {
                    removeNode(childElm)
                }
            }
            remove$$1.listeners = listeners
            return remove$$1
        }

        function removeNode(el) {
            var parent = nodeOps.parentNode(el)
            // element may have already been removed due to v-html / v-text
            if (isDef(parent)) {
                nodeOps.removeChild(parent, el)
            }
        }

        var inPre = 0

        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
            vnode.isRootInsert = !nested // for transition enter check
            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                return
            }

            var data = vnode.data
            var children = vnode.children
            var tag = vnode.tag
            if (isDef(tag)) {
                vnode.elm = vnode.ns
                    ? nodeOps.createElementNS(vnode.ns, tag)
                    : nodeOps.createElement(tag, vnode)
                setScope(vnode)

                /* istanbul ignore if */
                {
                    createChildren(vnode, children, insertedVnodeQueue)
                    if (isDef(data)) {
                        invokeCreateHooks(vnode, insertedVnodeQueue)
                    }
                    insert(parentElm, vnode.elm, refElm)
                }

                if (false) {}
            } else if (isTrue(vnode.isComment)) {
                vnode.elm = nodeOps.createComment(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            } else {
                vnode.elm = nodeOps.createTextNode(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            }
        }

        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i = vnode.data
            if (isDef(i)) {
                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
                if (isDef((i = i.hook)) && isDef((i = i.init))) {
                    i(vnode, false /* hydrating */, parentElm, refElm)
                }
                // after calling the init hook, if the vnode is a child component
                // it should've created a child instance and mounted it. the child
                // component also has set the placeholder vnode's elm.
                // in that case we can just return the element and be done.
                if (isDef(vnode.componentInstance)) {
                    initComponent(vnode, insertedVnodeQueue)
                    if (isTrue(isReactivated)) {
                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
                    }
                    return true
                }
            }
        }

        function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
                vnode.data.pendingInsert = null
            }
            vnode.elm = vnode.componentInstance.$el
            if (isPatchable(vnode)) {
                invokeCreateHooks(vnode, insertedVnodeQueue)
                setScope(vnode)
            } else {
                // empty component root.
                // skip all element-related modules except for ref (#3455)
                registerRef(vnode)
                // make sure to invoke the insert hook
                insertedVnodeQueue.push(vnode)
            }
        }

        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
            var innerNode = vnode
            while (innerNode.componentInstance) {
                innerNode = innerNode.componentInstance._vnode
                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                    for (i = 0; i < cbs.activate.length; ++i) {
                        cbs.activate[i](emptyNode, innerNode)
                    }
                    insertedVnodeQueue.push(innerNode)
                    break
                }
            }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
            insert(parentElm, vnode.elm, refElm)
        }

        function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
                if (isDef(ref$$1)) {
                    if (ref$$1.parentNode === parent) {
                        nodeOps.insertBefore(parent, elm, ref$$1)
                    }
                } else {
                    nodeOps.appendChild(parent, elm)
                }
            }
        }

        function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length; ++i) {
                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)
                }
            } else if (isPrimitive(vnode.text)) {
                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
            }
        }

        function isPatchable(vnode) {
            while (vnode.componentInstance) {
                vnode = vnode.componentInstance._vnode
            }
            return isDef(vnode.tag)
        }

        function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, vnode)
            }
            i = vnode.data.hook // Reuse variable
            if (isDef(i)) {
                if (isDef(i.create)) {
                    i.create(emptyNode, vnode)
                }
                if (isDef(i.insert)) {
                    insertedVnodeQueue.push(vnode)
                }
            }
        }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope(vnode) {
            var i
            var ancestor = vnode
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setAttribute(vnode.elm, i, "")
                }
                ancestor = ancestor.parent
            }
            // for slot content they should also get the scopeId from the host instance.
            if (
                isDef((i = activeInstance)) &&
                i !== vnode.context &&
                isDef((i = i.$options._scopeId))
            ) {
                nodeOps.setAttribute(vnode.elm, i, "")
            }
        }

        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)
            }
        }

        function invokeDestroyHook(vnode) {
            var i, j
            var data = vnode.data
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
                    i(vnode)
                }
                for (i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](vnode)
                }
            }
            if (isDef((i = vnode.children))) {
                for (j = 0; j < vnode.children.length; ++j) {
                    invokeDestroyHook(vnode.children[j])
                }
            }
        }

        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
                var ch = vnodes[startIdx]
                if (isDef(ch)) {
                    if (isDef(ch.tag)) {
                        removeAndInvokeRemoveHook(ch)
                        invokeDestroyHook(ch)
                    } else {
                        // Text node
                        removeNode(ch.elm)
                    }
                }
            }
        }

        function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
                var i
                var listeners = cbs.remove.length + 1
                if (isDef(rm)) {
                    // we have a recursively passed down rm callback
                    // increase the listeners count
                    rm.listeners += listeners
                } else {
                    // directly removing
                    rm = createRmCb(vnode.elm, listeners)
                }
                // recursively invoke hooks on child component root node
                if (
                    isDef((i = vnode.componentInstance)) &&
                    isDef((i = i._vnode)) &&
                    isDef(i.data)
                ) {
                    removeAndInvokeRemoveHook(i, rm)
                }
                for (i = 0; i < cbs.remove.length; ++i) {
                    cbs.remove[i](vnode, rm)
                }
                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                    i(vnode, rm)
                } else {
                    rm()
                }
            } else {
                removeNode(vnode.elm)
            }
        }

        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0
            var newStartIdx = 0
            var oldEndIdx = oldCh.length - 1
            var oldStartVnode = oldCh[0]
            var oldEndVnode = oldCh[oldEndIdx]
            var newEndIdx = newCh.length - 1
            var newStartVnode = newCh[0]
            var newEndVnode = newCh[newEndIdx]
            var oldKeyToIdx, idxInOld, elmToMove, refElm

            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
            var canMove = !removeOnly

            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (isUndef(oldStartVnode)) {
                    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
                } else if (isUndef(oldEndVnode)) {
                    oldEndVnode = oldCh[--oldEndIdx]
                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
                    oldStartVnode = oldCh[++oldStartIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldStartVnode, newEndVnode)) {
                    // Vnode moved right
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
                    canMove &&
                        nodeOps.insertBefore(
                            parentElm,
                            oldStartVnode.elm,
                            nodeOps.nextSibling(oldEndVnode.elm)
                        )
                    oldStartVnode = oldCh[++oldStartIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldEndVnode, newStartVnode)) {
                    // Vnode moved left
                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else {
                    if (isUndef(oldKeyToIdx)) {
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
                    }
                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
                    if (isUndef(idxInOld)) {
                        // New element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
                        newStartVnode = newCh[++newStartIdx]
                    } else {
                        elmToMove = oldCh[idxInOld]
                        /* istanbul ignore if */
                        if (false) {}
                        if (sameVnode(elmToMove, newStartVnode)) {
                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
                            oldCh[idxInOld] = undefined
                            canMove &&
                                nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm)
                            newStartVnode = newCh[++newStartIdx]
                        } else {
                            // same key but different element. treat as new element
                            createElm(
                                newStartVnode,
                                insertedVnodeQueue,
                                parentElm,
                                oldStartVnode.elm
                            )
                            newStartVnode = newCh[++newStartIdx]
                        }
                    }
                }
            }
            if (oldStartIdx > oldEndIdx) {
                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
            } else if (newStartIdx > newEndIdx) {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
            }
        }

        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
            if (oldVnode === vnode) {
                return
            }

            var elm = (vnode.elm = oldVnode.elm)

            if (isTrue(oldVnode.isAsyncPlaceholder)) {
                if (isDef(vnode.asyncFactory.resolved)) {
                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
                } else {
                    vnode.isAsyncPlaceholder = true
                }
                return
            }

            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
            if (
                isTrue(vnode.isStatic) &&
                isTrue(oldVnode.isStatic) &&
                vnode.key === oldVnode.key &&
                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
                vnode.componentInstance = oldVnode.componentInstance
                return
            }

            var i
            var data = vnode.data
            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
                i(oldVnode, vnode)
            }

            var oldCh = oldVnode.children
            var ch = vnode.children
            if (isDef(data) && isPatchable(vnode)) {
                for (i = 0; i < cbs.update.length; ++i) {
                    cbs.update[i](oldVnode, vnode)
                }
                if (isDef((i = data.hook)) && isDef((i = i.update))) {
                    i(oldVnode, vnode)
                }
            }
            if (isUndef(vnode.text)) {
                if (isDef(oldCh) && isDef(ch)) {
                    if (oldCh !== ch) {
                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
                    }
                } else if (isDef(ch)) {
                    if (isDef(oldVnode.text)) {
                        nodeOps.setTextContent(elm, "")
                    }
                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
                } else if (isDef(oldCh)) {
                    removeVnodes(elm, oldCh, 0, oldCh.length - 1)
                } else if (isDef(oldVnode.text)) {
                    nodeOps.setTextContent(elm, "")
                }
            } else if (oldVnode.text !== vnode.text) {
                nodeOps.setTextContent(elm, vnode.text)
            }
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
                    i(oldVnode, vnode)
                }
            }
        }

        function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
                vnode.parent.data.pendingInsert = queue
            } else {
                for (var i = 0; i < queue.length; ++i) {
                    queue[i].data.hook.insert(queue[i])
                }
            }
        }

        var bailed = false
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        var isRenderedModule = makeMap("attrs,style,class,staticClass,staticStyle,key")

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate(elm, vnode, insertedVnodeQueue) {
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                vnode.elm = elm
                vnode.isAsyncPlaceholder = true
                return true
            }
            vnode.elm = elm
            var tag = vnode.tag
            var data = vnode.data
            var children = vnode.children
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.init))) {
                    i(vnode, true /* hydrating */)
                }
                if (isDef((i = vnode.componentInstance))) {
                    // child component. it should have hydrated its own tree.
                    initComponent(vnode, insertedVnodeQueue)
                    return true
                }
            }
            if (isDef(tag)) {
                if (isDef(children)) {
                    // empty element, allow client to pick up and populate children
                    if (!elm.hasChildNodes()) {
                        createChildren(vnode, children, insertedVnodeQueue)
                    } else {
                        var childrenMatch = true
                        var childNode = elm.firstChild
                        for (var i$1 = 0; i$1 < children.length; i$1++) {
                            if (
                                !childNode ||
                                !hydrate(childNode, children[i$1], insertedVnodeQueue)
                            ) {
                                childrenMatch = false
                                break
                            }
                            childNode = childNode.nextSibling
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            if (
                                false
                            ) {}
                            return false
                        }
                    }
                }
                if (isDef(data)) {
                    for (var key in data) {
                        if (!isRenderedModule(key)) {
                            invokeCreateHooks(vnode, insertedVnodeQueue)
                            break
                        }
                    }
                }
            } else if (elm.data !== vnode.text) {
                elm.data = vnode.text
            }
            return true
        }

        return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
            if (isUndef(vnode)) {
                if (isDef(oldVnode)) {
                    invokeDestroyHook(oldVnode)
                }
                return
            }

            var isInitialPatch = false
            var insertedVnodeQueue = []

            if (isUndef(oldVnode)) {
                // empty mount (likely as component), create new root element
                isInitialPatch = true
                createElm(vnode, insertedVnodeQueue, parentElm, refElm)
            } else {
                var isRealElement = isDef(oldVnode.nodeType)
                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                    // patch existing root node
                    patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
                } else {
                    if (isRealElement) {
                        // mounting to a real element
                        // check if this is server-rendered content and if we can perform
                        // a successful hydration.
                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                            oldVnode.removeAttribute(SSR_ATTR)
                            hydrating = true
                        }
                        if (isTrue(hydrating)) {
                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                invokeInsertHook(vnode, insertedVnodeQueue, true)
                                return oldVnode
                            } else {
                            }
                        }
                        // either not server-rendered, or hydration failed.
                        // create an empty node and replace it
                        oldVnode = emptyNodeAt(oldVnode)
                    }
                    // replacing existing element
                    var oldElm = oldVnode.elm
                    var parentElm$1 = nodeOps.parentNode(oldElm)
                    createElm(
                        vnode,
                        insertedVnodeQueue,
                        // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        oldElm._leaveCb ? null : parentElm$1,
                        nodeOps.nextSibling(oldElm)
                    )

                    if (isDef(vnode.parent)) {
                        // component root element replaced.
                        // update parent placeholder node element, recursively
                        var ancestor = vnode.parent
                        while (ancestor) {
                            ancestor.elm = vnode.elm
                            ancestor = ancestor.parent
                        }
                        if (isPatchable(vnode)) {
                            for (var i = 0; i < cbs.create.length; ++i) {
                                cbs.create[i](emptyNode, vnode.parent)
                            }
                        }
                    }

                    if (isDef(parentElm$1)) {
                        removeVnodes(parentElm$1, [oldVnode], 0, 0)
                    } else if (isDef(oldVnode.tag)) {
                        invokeDestroyHook(oldVnode)
                    }
                }
            }

            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
            return vnode.elm
        }
    }

    /*  */

    // import baseModules from 'core/vdom/modules/index'
    // const platformModules = []
    // import platformModules from 'web/runtime/modules/index'

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    // const modules = platformModules.concat(baseModules)
    var modules = [ref]

    var corePatch = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
    })

    function patch() {
        corePatch.apply(this, arguments)
        this.$updateDataToMP()
    }

    function callHook$1(vm, hook, params) {
        var handlers = vm.$options[hook]
        if (hook === "onError" && handlers) {
            handlers = [handlers]
        }

        var ret
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    ret = handlers[i].call(vm, params)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }

        // for child
        if (vm.$children.length) {
            vm.$children.forEach(function(v) {
                return callHook$1(v, hook, params)
            })
        }

        return ret
    }

    // mpType 小程序实例的类型，可能的值是 'app', 'page'
    // rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得
    function getGlobalData(app, rootVueVM) {
        var mp = rootVueVM.$mp
        if (app && app.globalData) {
            mp.appOptions = app.globalData.appOptions
        }
    }

    // 格式化 properties 属性，并给每个属性加上 observer 方法

    // properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
    // properties: {
    //   paramA: Number,
    //   myProperty: { // 属性名
    //     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    //     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    //     observer: function(newVal, oldVal, changedPath) {
    //        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    //        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
    //     }
    //   },
    // }

    // props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad
    // props: {
    //   // 基础的类型检查 (`null` 匹配任何类型)
    //   propA: Number,
    //   // 多个可能的类型
    //   propB: [String, Number],
    //   // 必填的字符串
    //   propC: {
    //     type: String,
    //     required: true
    //   },
    //   // 带有默认值的数字
    //   propD: {
    //     type: Number,
    //     default: 100
    //   },
    //   // 带有默认值的对象
    //   propE: {
    //     type: Object,
    //     // 对象或数组且一定会从一个工厂函数返回默认值
    //     default: function () {
    //       return { message: 'hello' }
    //     }
    //   },
    //   // 自定义验证函数
    //   propF: {
    //     validator: function (value) {
    //       // 这个值必须匹配下列字符串中的一个
    //       return ['success', 'warning', 'danger'].indexOf(value) !== -1
    //     }
    //   }
    // }

    // core/util/options
    function normalizeProps$1(props, res, vm) {
        if (!props) {
            return
        }
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }

        // fix vueProps to properties
        for (var key$1 in res) {
            if (res.hasOwnProperty(key$1)) {
                var item = res[key$1]
                if (item.default) {
                    item.value = item.default
                }
                var oldObserver = item.observer
                item.observer = function(newVal, oldVal) {
                    vm[name] = newVal
                    // 先修改值再触发原始的 observer，跟 watch 行为保持一致
                    if (typeof oldObserver === "function") {
                        oldObserver.call(vm, newVal, oldVal)
                    }
                }
            }
        }

        return res
    }

    function normalizeProperties(vm) {
        var properties = vm.$options.properties
        var vueProps = vm.$options.props
        var res = {}

        normalizeProps$1(properties, res, vm)
        normalizeProps$1(vueProps, res, vm)

        return res
    }

    /**
     * 把 properties 中的属性 proxy 到 vm 上
     */
    function initMpProps(vm) {
        var mpProps = (vm._mpProps = {})
        var keys = Object.keys(vm.$options.properties || {})
        keys.forEach(function(key) {
            if (!(key in vm)) {
                proxy(vm, "_mpProps", key)
                mpProps[key] = undefined // for observe
            }
        })
        observe(mpProps, true)
    }

    function initMP(mpType, next) {
        var rootVueVM = this.$root
        if (!rootVueVM.$mp) {
            rootVueVM.$mp = {}
        }

        var mp = rootVueVM.$mp

        // Please do not register multiple Pages
        // if (mp.registered) {
        if (mp.status) {
            // 处理子组件的小程序生命周期
            if (mpType === "app") {
                callHook$1(this, "onLaunch", mp.appOptions)
            } else {
                this.__wxWebviewId__ = rootVueVM.__wxWebviewId__
                this.__wxExparserNodeId__ = rootVueVM.__wxExparserNodeId__
                callHook$1(this, "onLoad", mp.query)
                // callHook$1(this, "onReady") // 避免 onReady触发两次
            }
            return next()
        }
        // mp.registered = true

        mp.mpType = mpType
        mp.status = "register"

        if (mpType === "app") {
            global.App({
                // 页面的初始数据
                globalData: {
                    appOptions: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // Do something initial when launch.
                onLaunch: function onLaunch(options) {
                    if (options === void 0) options = {}

                    mp.app = this
                    mp.status = "launch"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onLaunch", options)
                    next()
                },

                // Do something when app show.
                onShow: function onShow(options) {
                    if (options === void 0) options = {}

                    mp.status = "show"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onShow", options)
                },

                // Do something when app hide.
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
                },

                onError: function onError(err) {
                    callHook$1(rootVueVM, "onError", err)
                },
                //fixed by xxxxxx
                onUniNViewMessage: function onUniNViewMessage(e) {
                    callHook$1(rootVueVM, "onUniNViewMessage", e)
                }
            })
        } else if (mpType === "component") {
            initMpProps(rootVueVM)

            global.Component({
                // 小程序原生的组件属性
                properties: normalizeProperties(rootVueVM),
                // 页面的初始数据
                data: {
                    $root: {}
                },
                methods: {
                    handleProxy: function handleProxy(e) {
                        return rootVueVM.$handleProxyWithVue(e)
                    }
                },
                // mp lifecycle for vue
                // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
                created: function created() {
                    mp.status = "created"
                    mp.page = this
                },
                // 组件生命周期函数，在组件实例进入页面节点树时执行
                attached: function attached() {
                    mp.status = "attached"
                    callHook$1(rootVueVM, "attached")
                },
                // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
                ready: function ready() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "ready")
                    next()

                    // 只有页面需要 setData
                    rootVueVM.$nextTick(function() {
                        rootVueVM._initDataToMP()
                    })
                },
                // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
                moved: function moved() {
                    callHook$1(rootVueVM, "moved")
                },
                // 组件生命周期函数，在组件实例被从页面节点树移除时执行
                detached: function detached() {
                    mp.status = "detached"
                    callHook$1(rootVueVM, "detached")
                }
            })
        } else {
            var app = global.getApp()
    
            
            global.Page({
                // 页面的初始数据
                data: {
                    $root: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // mp lifecycle for vue
                // 生命周期函数--监听页面加载
                onLoad: function onLoad(query) {
                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
                    rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__
                    mp.page = this
                    mp.query = query
                    mp.status = "load"
                    getGlobalData(app, rootVueVM)
                    //仅load时重置数据
                    if (rootVueVM.$options && typeof rootVueVM.$options.data === "function") {
                    		Object.assign(rootVueVM.$data, rootVueVM.$options.data())
                    }
                    callHook$1(rootVueVM, "onLoad", query)
                },

                // 生命周期函数--监听页面显示
                onShow: function onShow() {
                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
                    rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__
                    mp.page = this
                    mp.status = "show"
                
                    callHook$1(rootVueVM, "onShow")
                    
                    //   // 只有页面需要 setData
                    rootVueVM.$nextTick(function () {
                    	rootVueVM._initDataToMP();
                    });
                },

                // 生命周期函数--监听页面初次渲染完成
                onReady: function onReady() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "onReady")
                    next()
                },

                // 生命周期函数--监听页面隐藏
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
                },

                // 生命周期函数--监听页面卸载
                onUnload: function onUnload() {
                    mp.status = "unload"
                    callHook$1(rootVueVM, "onUnload")
                    mp.page = null
                },

                // 页面相关事件处理函数--监听用户下拉动作
                onPullDownRefresh: function onPullDownRefresh() {
                    callHook$1(rootVueVM, "onPullDownRefresh")
                },

                // 页面上拉触底事件的处理函数
                onReachBottom: function onReachBottom() {
                    callHook$1(rootVueVM, "onReachBottom")
                },

                // 用户点击右上角分享
                onShareAppMessage: rootVueVM.$options.onShareAppMessage
                    ? function(options) {
                          return callHook$1(rootVueVM, "onShareAppMessage", options)
                      }
                    : null,

                // Do something when page scroll
                onPageScroll: function onPageScroll(options) {
                    callHook$1(rootVueVM, "onPageScroll", options)
                },

                // 当前是 tab 页时，点击 tab 时触发
                onTabItemTap: function onTabItemTap(options) {
                    callHook$1(rootVueVM, "onTabItemTap", options)
                }
            })
        }
    }

    // 节流方法，性能优化
    // 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。
    // $c === $child
    // $k === $comKey

    // 新型的被拍平的数据结构
    // {
    //   $root: {
    //     '1-1'{
    //       // ... data
    //     },
    //     '1.2-1': {
    //       // ... data1
    //     },
    //     '1.2-2': {
    //       // ... data2
    //     }
    //   }
    // }

    function getVmData(vm) {
        // 确保当前 vm 所有数据被同步
        var dataKeys = [].concat(
            Object.keys(vm._data || {}),
            Object.keys(vm._props || {}),
            Object.keys(vm._mpProps || {}),
            Object.keys(vm._computedWatchers || {})
        )
        return dataKeys.reduce(function(res, key) {
            res[key] = vm[key]
            return res
        }, {})
    }

    function getParentComKey(vm, res) {
        if (res === void 0) res = []

        var ref = vm || {}
        var $parent = ref.$parent
        if (!$parent) {
            return res
        }
        res.unshift(getComKey($parent))
        if ($parent.$parent) {
            return getParentComKey($parent, res)
        }
        return res
    }

    function formatVmData(vm) {
        var $p = getParentComKey(vm).join(",")
        var $k = $p + ($p ? "," : "") + getComKey(vm)

        // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据
        // 改动 vue.runtime 所获的的核心能力
        var data = Object.assign(getVmData(vm), {
            $k: $k,
            $kk: $k + ",",
            $p: $p
        })
        var key = "$root." + $k
        var res = {}
        res[key] = data
        return res
    }

    function collectVmData(vm, res) {
        if (res === void 0) res = {}

        var vms = vm.$children
        if (vms && vms.length) {
            vms.forEach(function(v) {
                return collectVmData(v, res)
            })
        }
        return Object.assign(res, formatVmData(vm))
    }

    /**
     * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
     * 自动合并 data
     *
     * @param  {function}   func      传入函数
     * @param  {number}     wait      表示时间窗口的间隔
     * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
     *                                如果想忽略结尾边界上的调用，传入{trailing: false}
     * @return {function}             返回客户调用函数
     */
    function throttle(func, wait, options) {
        var context, args, result
        var timeout = null
        // 上次执行时间点
        var previous = 0
        if (!options) {
            options = {}
        }
        // 延迟执行函数
        function later() {
            // 若设定了开始边界不执行选项，上次执行时间始终为0
            previous = options.leading === false ? 0 : Date.now()
            timeout = null
            result = func.apply(context, args)
            if (!timeout) {
                context = args = null
            }
        }
        return function(handle, data) {
            var now = Date.now()
            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
            if (!previous && options.leading === false) {
                previous = now
            }
            // 延迟执行时间间隔
            var remaining = wait - (now - previous)
            context = this
            args = args ? [handle, Object.assign(args[1], data)] : [handle, data]
            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
            // remaining大于时间窗口wait，表示客户端系统时间被调整过
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout)
                timeout = null
                previous = now
                result = func.apply(context, args)
                if (!timeout) {
                    context = args = null
                }
                // 如果延迟执行不存在，且没有设定结尾边界不执行选项
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
            return result
        }
    }

    // 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
    var throttleSetData = throttle(function(handle, data) {
        handle && handle(data)
    }, 50)

    function getPage(vm) {
        var rootVueVM = vm.$root
        var ref = rootVueVM.$mp || {}
        var mpType = ref.mpType
        if (mpType === void 0) mpType = ""
        var page = ref.page

        // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
        if (mpType === "app" || !page || typeof page.setData !== "function") {
            return
        }
        return page
    }

    // 优化每次 setData 都传递大量新数据
    function updateDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = JSON.parse(JSON.stringify(formatVmData(this)))
        //fixed by xxxxxx
        throttleSetData(page.setData.bind(page), diff(data, page.data))
    }

    function initDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = collectVmData(this.$root)
        //fixed by xxxxxx
        page.setData(JSON.parse(JSON.stringify(data)))
    }

    function getVM(vm, comkeys) {
        if (comkeys === void 0) comkeys = []

        var keys = comkeys.slice(1)
        if (!keys.length) {
            return vm
        }

        return keys.reduce(function(res, key) {
            var len = res.$children.length
            for (var i = 0; i < len; i++) {
                var v = res.$children[i]
                var k = getComKey(v)
                if (k === key) {
                    res = v
                    return res
                }
            }
            return res
        }, vm)
    }

    function getHandle(vnode, eventid, eventTypes) {
        if (eventTypes === void 0) eventTypes = []

        var res = []
        if (!vnode || !vnode.tag) {
            return res
        }

        var ref = vnode || {}
        var data = ref.data
        if (data === void 0) data = {}
        var children = ref.children
        if (children === void 0) children = []
        var componentInstance = ref.componentInstance
        if (componentInstance) {
            // 增加 slot 情况的处理
            // Object.values 会多增加几行编译后的代码
            Object.keys(componentInstance.$slots).forEach(function(slotKey) {
                var slot = componentInstance.$slots[slotKey]
                var slots = Array.isArray(slot) ? slot : [slot]
                slots.forEach(function(node) {
                    res = res.concat(getHandle(node, eventid, eventTypes))
                })
            })
        } else {
            // 避免遍历超出当前组件的 vm
            children.forEach(function(node) {
                res = res.concat(getHandle(node, eventid, eventTypes))
            })
        }

        var attrs = data.attrs
        var on = data.on
        if (attrs && on && attrs["eventid"] === eventid) {
            eventTypes.forEach(function(et) {
                var h = on[et]
                if (typeof h === "function") {
                    res.push(h)
                } else if (Array.isArray(h)) {
                    res = res.concat(h)
                }
            })
            return res
        }

        return res
    }

    function getWebEventByMP(e) {
        var type = e.type
        var timeStamp = e.timeStamp
        var touches = e.touches
        var detail = e.detail
        if (detail === void 0) detail = {}
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        if (currentTarget === void 0) currentTarget = {}
        var x = detail.x
        var y = detail.y
        var event = {
            mp: e,
            type: type,
            timeStamp: timeStamp,
            x: x,
            y: y,
            target: Object.assign({}, target, detail),
            detail: detail, //fixed by xxxxxx
            currentTarget: currentTarget,
            stopPropagation: noop,
            preventDefault: noop
        }

        if (touches && touches.length) {
            Object.assign(event, touches[0])
            event.touches = touches
        }
        return event
    }

    function handleProxyWithVue(e) {
        var rootVueVM = this.$root
        var type = e.type
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        var ref = currentTarget || target
        var dataset = ref.dataset
        if (dataset === void 0) dataset = {}
        var comkey = dataset.comkey
        if (comkey === void 0) comkey = ""
        var eventid = dataset.eventid
        var vm = getVM(rootVueVM, comkey.split(","))

        if (!vm) {
            return
        }

        var webEventTypes = eventTypeMap[type] || [type]
        var handles = getHandle(vm._vnode, eventid, webEventTypes)

        // TODO, enevt 还需要处理更多
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Event
        if (handles.length) {
            var event = getWebEventByMP(e)
            if (handles.length === 1) {
                var result = handles[0](event)
                return result
            }
            handles.forEach(function(h) {
                return h(event)
            })
        }
    }

    // for platforms
    // import config from 'core/config'
    // install platform specific utils
    Vue$3.config.mustUseProp = mustUseProp
    Vue$3.config.isReservedTag = isReservedTag
    Vue$3.config.isReservedAttr = isReservedAttr
    Vue$3.config.getTagNamespace = getTagNamespace
    Vue$3.config.isUnknownElement = isUnknownElement

    // install platform patch function
    Vue$3.prototype.__patch__ = patch

    // public mount method
    Vue$3.prototype.$mount = function(el, hydrating) {
        var this$1 = this

        // el = el && inBrowser ? query(el) : undefined
        // return mountComponent(this, el, hydrating)

        // 初始化小程序生命周期相关
        var options = this.$options

        if (options && (options.render || options.mpType)) {
            var mpType = options.mpType
            if (mpType === void 0) mpType = "page"
            return this._initMP(mpType, function() {
                return mountComponent(this$1, undefined, undefined)
            })
        } else {
            return mountComponent(this, undefined, undefined)
        }
    }

    // for mp
    Vue$3.prototype._initMP = initMP

    Vue$3.prototype.$updateDataToMP = updateDataToMP
    Vue$3.prototype._initDataToMP = initDataToMP

    Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue

    /*  */

    return Vue$3
})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















// import cmdIcon from "../cmd-icon/cmd-icon.vue"
var _default2 =
{
  name: 'cmd-bottom-nav',
  //     components: {
  //       cmdIcon
  //     },
  props: {
    /**
            * 导航列表选中项
            */
    current: {
      type: Number,
      default: 0 },

    /**
                     * 导航列表
                     */
    list: {
      type: Array,
      default: function _default() {
        return [];
      } },

    /**
            * 文字颜色
            */
    fontColor: {
      type: String,
      default: '' },

    /**
                      * 底部上边线颜色
                      */
    borderColor: {
      type: String,
      default: '' },

    /**
                      * 背景颜色
                      */
    backgroundColor: {
      type: String,
      default: '' },

    /**
                      * 激活文字颜色
                      */
    activeFontColor: {
      type: String,
      default: '' },

    // 只在激活状态显示文本
    textAuto: {
      type: Boolean,
      default: false },

    // 固定到页面底部
    fixed: {
      type: Boolean,
      default: true } },



  data: function data() {

    return {
      listNav: [
      {
        "pagePath": "/pages/index/index",
        "text": "组件",
        "src": "../../static/home.png",
        "srcSelect": "../../static/homeactive.png" },

      {
        "pagePath": "/pages/template/template",
        "text": "模板",
        "src": "../../static/business.png",
        "srcSelect": "../../static/businessactive.png" }],


      // 选中项
      select: this.current };

  },

  computed: {
    /**
               * 底部导航栏颜色样式
               */
    setColorStyle: function setColorStyle() {
      var colorStyle = '';
      // 文字颜色
      if (this.fontColor != '') {
        colorStyle += "color:".concat(this.fontColor, ";");
      }
      // 上边线颜色
      if (this.borderColor != '') {
        colorStyle += "border-top: 1px ".concat(this.borderColor, " solid;");
      }
      // 背景颜色
      if (this.backgroundColor != '') {
        colorStyle += "background: ".concat(this.backgroundColor, ";");
      }
      return colorStyle;
    },
    /**
        * 激活文字样式
        */
    setActiveFontColorStyle: function setActiveFontColorStyle() {
      var activeFontColorStyle = '';
      if (this.activeFontColor != '') {
        activeFontColorStyle += "color:".concat(this.activeFontColor, ";");
      }
      return activeFontColorStyle;
    } },

  onShow: function onShow() {
    var vm = this;
    // 这里需要判断用户是否可以显示这个导航
    // 			const userInfo = JSON.parse( uni.getStorageSync('userInfo') );
    // 			if(userInfo){
    // 				console.log('有登录状态')
    // 				//这里判断是否显示用户推荐标签
    // 				if(Number( userInfo.access_recommend_user) == 1) {
    // 					vm.listNav.push({
    // 						"pagePath": "/pages/recommendation/recommendation",
    // 						"text": "用户推荐",
    // 						"src": "../../static/recommendation.png",
    // 						"srcSelect": "../../static/recommendationactive.png"
    // 					});
    // 				};
    // 				
    // 			} else {
    // 				console.log('无登录状态需要重新登录');
    // // 				uni.navigateTo({
    // // 					url: '/pages/login/login'
    // // 				})
    // 			};
  },
  methods: {
    /**
              * 点击事件
              */
    $_click: function $_click(index) {
      this.select = index;
      if (this.current != index) {
        uni.redirectTo({
          url: this.listNav[index].pagePath });

      }
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _wxCanvas = _interopRequireDefault(__webpack_require__(/*! ./wx-canvas */ "../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/wx-canvas.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =

{
  props: {
    param: {
      type: String,
      default: '' },

    echarts: {
      required: true,
      type: Object,
      default: function _default() {
        return null;
      } },

    onInit: {
      required: true,
      type: Function,
      default: null },

    canvasId: {
      type: String,
      default: 'ec-canvas' },

    lazyLoad: {
      type: Boolean,
      default: false },

    disableTouch: {
      type: Boolean,
      default: false },

    throttleTouch: {
      type: Boolean,
      default: false } },














  onReady: function onReady() {
    if (!this.echarts) {
      console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" ' +
      'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
      return;
    }

    if (!this.lazyLoad) this.init();
  },

  methods: {
    init: function init() {
      if (!this.onInit) {
        console.warn('请传入 onInit 函数进行初始化');
        return;
      }
      var vm = this;var
      canvasId = this.canvasId,param = this.param;
      this.ctx = wx.createCanvasContext(canvasId);

      var canvas = new _wxCanvas.default(this.ctx, canvasId);

      this.echarts.setCanvasCreator(function () {return canvas;});


      var query = wx.createSelectorQuery();
      query.select("#".concat(canvasId)).boundingClientRect(function (res) {
        if (!res) {
          setTimeout(function () {return vm.init();}, 50);
          return;
        }
        vm.chart = vm.onInit(canvas, res.width, res.height, param);
      }).exec();
    },
    canvasToTempFilePath: function canvasToTempFilePath(opt) {
      var vm = this;var
      canvasId = this.canvasId;
      this.ctx.draw(true, function () {
        wx.canvasToTempFilePath(_objectSpread({
          canvasId: canvasId },
        opt));

      });
    },
    touchStart: function touchStart(e) {var
      disableTouch = this.disableTouch,chart = this.chart;
      if (disableTouch || !chart || !e.mp.touches.length) return;
      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousedown', {
        zrX: touch.x,
        zrY: touch.y });

      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y });

    },
    touchMove: function touchMove(e) {var

      disableTouch =
      this.disableTouch,throttleTouch = this.throttleTouch,chart = this.chart,lastMoveTime = this.lastMoveTime;
      if (disableTouch || !chart || !e.mp.touches.length) return;

      if (throttleTouch) {
        var currMoveTime = Date.now();
        if (currMoveTime - lastMoveTime < 240) return;
        this.lastMoveTime = currMoveTime;
      }

      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y });

    },
    touchEnd: function touchEnd(e) {var
      disableTouch = this.disableTouch,chart = this.chart;
      if (disableTouch || !chart) return;
      var touch = e.mp.changedTouches ? e.mp.changedTouches[0] : {};
      chart._zr.handler.dispatch('mouseup', {
        zrX: touch.x,
        zrY: touch.y });

      chart._zr.handler.dispatch('click', {
        zrX: touch.x,
        zrY: touch.y });

    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =
































































{
  data: function data() {
    return {
      pickerChangeValue: [],
      pickerValue: [],
      pickerValueArrayChange: true,
      modeChange: false,
      pickerValueSingleArray: [],
      pickerValueHour: [],
      pickerValueMinute: [],
      pickerValueMulArray: [],
      pickerValueMulTwoOne: [],
      pickerValueMulTwoTwo: [],
      pickerValueMulThreeOne: [],
      pickerValueMulThreeTwo: [],
      pickerValueMulThreeThree: [],
      /* 是否显示控件 */
      showPicker: false };

  },
  props: {
    /* mode */
    mode: {
      type: String,
      default: 'selector' },

    /* picker 数值 */
    pickerValueArray: {
      type: Array,
      default: function _default() {
        return [];
      } },

    /* 默认值 */
    pickerValueDefault: {
      type: Array,
      default: function _default() {
        return [];
      } },

    /* 几级联动 */
    deepLength: {
      type: Number,
      default: 2 },

    /* 主题色 */
    themeColor: String },

  watch: _defineProperty({
    pickerValueArray: function pickerValueArray(oldVal, newVal) {
      this.pickerValueArrayChange = true;
    },
    mode: function mode(oldVal, newVal) {
      this.modeChange = true;
    } }, "pickerValueArray", function pickerValueArray(
  val) {
    this.initPicker(val);
  }),

  methods: {
    initPicker: function initPicker(valueArray) {
      var pickerValueArray = valueArray;
      this.pickerValue = this.pickerValueDefault;
      // 初始化多级联动
      if (this.mode === 'selector') {
        this.pickerValueSingleArray = valueArray;
      } else if (this.mode === 'timeSelector') {
        this.modeChange = false;
        var hourArray = [];
        var minuteArray = [];
        for (var i = 0; i < 24; i++) {
          hourArray.push({
            value: i,
            label: i > 9 ? "".concat(i, " \u65F6") : "0".concat(i, " \u65F6") });

        }
        for (var _i = 0; _i < 60; _i++) {
          minuteArray.push({
            value: _i,
            label: _i > 9 ? "".concat(_i, " \u5206") : "0".concat(_i, " \u5206") });

        }
        this.pickerValueHour = hourArray;
        this.pickerValueMinute = minuteArray;
      } else if (this.mode === 'multiSelector') {
        this.pickerValueMulArray = valueArray;
      } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 2) {
        // 两级联动
        var pickerValueMulTwoOne = [];
        var pickerValueMulTwoTwo = [];
        // 第一列
        for (var _i2 = 0, length = pickerValueArray.length; _i2 < length; _i2++) {
          pickerValueMulTwoOne.push(pickerValueArray[_i2]);
        }
        // 渲染第二列
        // 如果有设定的默认值
        if (this.pickerValueDefault.length === 2) {
          var num = this.pickerValueDefault[0];
          for (
          var _i3 = 0, _length = pickerValueArray[num].children.length; _i3 < _length; _i3++)
          {
            pickerValueMulTwoTwo.push(pickerValueArray[num].children[_i3]);
          }
        } else {
          for (
          var _i4 = 0, _length2 = pickerValueArray[0].children.length; _i4 < _length2; _i4++)
          {
            pickerValueMulTwoTwo.push(pickerValueArray[0].children[_i4]);
          }
        }
        this.pickerValueMulTwoOne = pickerValueMulTwoOne;
        this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
      } else if (
      this.mode === 'multiLinkageSelector' &&
      this.deepLength === 3)
      {
        var pickerValueMulThreeOne = [];
        var pickerValueMulThreeTwo = [];
        var pickerValueMulThreeThree = [];
        // 第一列
        for (var _i5 = 0, _length3 = pickerValueArray.length; _i5 < _length3; _i5++) {
          pickerValueMulThreeOne.push(pickerValueArray[_i5]);
        }
        // 渲染第二列
        this.pickerValueDefault =
        this.pickerValueDefault.length === 3 ?
        this.pickerValueDefault :
        [0, 0, 0];
        if (this.pickerValueDefault.length === 3) {
          var _num = this.pickerValueDefault[0];
          for (
          var _i6 = 0, _length4 = pickerValueArray[_num].children.length; _i6 < _length4; _i6++)
          {
            pickerValueMulThreeTwo.push(pickerValueArray[_num].children[_i6]);
          }
          // 第三列
          var numSecond = this.pickerValueDefault[1];
          for (var _i7 = 0, _length5 = pickerValueArray[_num].children[numSecond].children.length; _i7 < _length5; _i7++) {
            pickerValueMulThreeThree.push(
            pickerValueArray[_num].children[numSecond].children[_i7]);

          }
        }
        this.pickerValueMulThreeOne = pickerValueMulThreeOne;
        this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
        this.pickerValueMulThreeThree = pickerValueMulThreeThree;
      }
    },
    show: function show() {var _this = this;
      setTimeout(function () {
        if (_this.pickerValueArrayChange || _this.modeChange) {
          _this.initPicker(_this.pickerValueArray);
          _this.showPicker = true;
          _this.pickerValueArrayChange = false;
          _this.modeChange = false;
        } else {
          _this.showPicker = true;
        }
      }, 0);
    },
    maskClick: function maskClick() {
      this.pickerCancel();
    },
    pickerCancel: function pickerCancel() {
      this.showPicker = false;
      this._initPickerVale();
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label };

      this.$emit('onCancel', pickObj);
    },
    pickerConfirm: function pickerConfirm(e) {
      this.showPicker = false;
      this._initPickerVale();
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label };

      this.$emit('onConfirm', pickObj);
    },
    showPickerView: function showPickerView() {
      this.showPicker = true;
    },
    pickerChange: function pickerChange(e) {
      this.pickerValue = e.mp.detail.value;
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label };

      this.$emit('onChange', pickObj);
    },
    pickerChangeMul: function pickerChangeMul(e) {
      if (this.deepLength === 2) {
        var pickerValueArray = this.pickerValueArray;
        var changeValue = e.mp.detail.value;
        // 处理第一列滚动
        if (changeValue[0] !== this.pickerValue[0]) {
          var pickerValueMulTwoTwo = [];
          // 第一列滚动第二列数据更新
          for (var i = 0, length = pickerValueArray[changeValue[0]].children.length; i < length; i++) {
            pickerValueMulTwoTwo.push(pickerValueArray[changeValue[0]].children[i]);
          }
          this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
          // 第二列初始化为 0
          changeValue[1] = 0;
        }
        this.pickerValue = changeValue;
      } else if (this.deepLength === 3) {
        var _pickerValueArray = this.pickerValueArray;
        var _changeValue = e.mp.detail.value;
        var pickerValueMulThreeTwo = [];
        var pickerValueMulThreeThree = [];
        // 重新渲染第二列
        // 如果是第一列滚动
        if (_changeValue[0] !== this.pickerValue[0]) {
          this.pickerValueMulThreeTwo = [];
          for (var _i8 = 0, _length6 = _pickerValueArray[_changeValue[0]].children.length; _i8 < _length6; _i8++) {
            pickerValueMulThreeTwo.push(_pickerValueArray[_changeValue[0]].children[_i8]);
          }
          // 重新渲染第三列
          for (var _i9 = 0, _length7 = _pickerValueArray[_changeValue[0]].children[0].children.length; _i9 <
          _length7; _i9++) {
            pickerValueMulThreeThree.push(_pickerValueArray[_changeValue[0]].children[0].children[_i9]);
          }
          _changeValue[1] = 0;
          _changeValue[2] = 0;
          this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
          this.pickerValueMulThreeThree = pickerValueMulThreeThree;
        } else if (_changeValue[1] !== this.pickerValue[1]) {
          // 第二列滚动
          // 重新渲染第三列
          this.pickerValueMulThreeThree = [];
          pickerValueMulThreeTwo = this.pickerValueMulThreeTwo;
          for (var _i10 = 0, _length8 = _pickerValueArray[_changeValue[0]].children[_changeValue[1]].children.length; _i10 <
          _length8; _i10++) {
            pickerValueMulThreeThree.push(_pickerValueArray[_changeValue[0]].children[_changeValue[1]].children[
            _i10]);
          }
          _changeValue[2] = 0;
          this.pickerValueMulThreeThree = pickerValueMulThreeThree;
        }
        this.pickerValue = _changeValue;
      }
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label };

      this.$emit('onChange', pickObj);
    },
    // 获取 pxikerLabel
    _getPickerLabelAndValue: function _getPickerLabelAndValue(value, mode) {
      var pickerLable;
      var pickerGetValue = [];
      // selector
      if (mode === 'selector') {
        pickerLable = this.pickerValueSingleArray[value].label;
        pickerGetValue.push(this.pickerValueSingleArray[value].value);
      } else if (mode === 'timeSelector') {
        pickerLable = "".concat(this.pickerValueHour[value[0]].label, "-").concat(this.pickerValueMinute[value[1]].label);
        pickerGetValue.push(this.pickerValueHour[value[0]].value);
        pickerGetValue.push(this.pickerValueHour[value[1]].value);
      } else if (mode === 'multiSelector') {
        for (var i = 0; i < value.length; i++) {
          if (i > 0) {
            pickerLable += this.pickerValueMulArray[i][value[i]].label + (i === value.length - 1 ? '' :
            '-');
          } else {
            pickerLable = this.pickerValueMulArray[i][value[i]].label + '-';
          }
          pickerGetValue.push(this.pickerValueMulArray[i][value[i]].value);
        }
      } else if (mode === 'multiLinkageSelector') {
        /* eslint-disable indent */
        pickerLable =
        this.deepLength === 2 ? "".concat(
        this.pickerValueMulTwoOne[value[0]].label, "-").concat(this.pickerValueMulTwoTwo[value[1]].label) : "".concat(
        this.pickerValueMulThreeOne[value[0]].label, "-").concat(this.pickerValueMulThreeTwo[value[1]].label, "-").concat(this.pickerValueMulThreeThree[value[2]].label);
        if (this.deepLength === 2) {
          pickerGetValue.push(this.pickerValueMulTwoOne[value[0]].value);
          pickerGetValue.push(this.pickerValueMulTwoTwo[value[1]].value);
        } else {
          pickerGetValue.push(this.pickerValueMulThreeOne[value[0]].value);
          pickerGetValue.push(this.pickerValueMulThreeTwo[value[1]].value);
          pickerGetValue.push(this.pickerValueMulThreeThree[value[2]].value);
        }
        /* eslint-enable indent */
      }
      return {
        label: pickerLable,
        value: pickerGetValue };

    },
    // 初始化 pickerValue 默认值
    _initPickerVale: function _initPickerVale() {
      if (this.pickerValue.length === 0) {
        if (this.mode === 'selector') {
          this.pickerValue = [0];
        } else if (this.mode === 'multiSelector') {
          this.pickerValue = new Int8Array(this.pickerValueArray.length);
        } else if (
        this.mode === 'multiLinkageSelector' &&
        this.deepLength === 2)
        {
          this.pickerValue = [0, 0];
        } else if (
        this.mode === 'multiLinkageSelector' &&
        this.deepLength === 3)
        {
          this.pickerValue = [0, 0, 0];
        }
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =









{
  props: {
    /**
            * 显示状态
            */
    visible: {
      type: Boolean,
      default: false },

    /**
                         * 显示模式（左、右），只在初始化生效
                         */
    mode: String,
    /**
                   * 蒙层显示状态
                   */
    mask: {
      type: [Boolean, String],
      default: true } },


  data: function data() {
    return {
      rightMode: false,
      catchtouchmove: false };

  },
  computed: {
    showMask: function showMask() {
      return String(this.mask) === 'true';
    } },

  created: function created() {
    this.rightMode = this.mode === 'right';

    this.catchtouchmove = true;

  },
  methods: {
    close: function close() {
      this.$emit('close');
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=style&index=0&id=c08d25d8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/cmd-bottom-nav/cmd-bottom-nav.vue?vue&type=template&id=b7dddeda& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: "cmd-bottom-nav",
      class: [
        _vm.textAuto ? "cmd-bottom-nav-text-auto" : "",
        _vm.fixed ? "cmd-bottom-nav-fixed" : ""
      ],
      style: _vm.setColorStyle
    },
    _vm._l(_vm.listNav, function(nav, index) {
      return _c(
        "view",
        {
          key: index,
          class: [
            "cmd-bottom-nav-box",
            _vm.select == index ? "cmd-bottom-nav-active" : ""
          ],
          style: _vm.select == index ? _vm.setActiveFontColorStyle : "",
          attrs: { eventid: "080eb260-0-" + index },
          on: {
            tap: function($event) {
              _vm.$_click(index)
            }
          }
        },
        [
          _c("view", { staticClass: "cmd-bottom-nav-box-icon" }),
          nav.src && !nav.icon
            ? _c("image", {
                staticClass: "cmd-bottom-nav-box-img",
                attrs: {
                  src: _vm.select == index ? nav.srcSelect : nav.src,
                  mode: "aspectFit"
                }
              })
            : _vm._e(),
          _c("text", { staticClass: "cmd-bottom-nav-box-text" }, [
            _vm._v(_vm._s(nav.text))
          ])
        ]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-echarts/src/echarts.vue?vue&type=template&id=c08d25d8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canvasId
    ? _c("canvas", {
        staticClass: "ec-canvas",
        attrs: {
          id: _vm.canvasId,
          canvasId: _vm.canvasId,
          eventid: "0f4e9c3e-0"
        },
        on: {
          touchstart: _vm.touchStart,
          touchmove: _vm.touchMove,
          touchend: _vm.touchEnd,
          error: _vm.error
        }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/mpvue-picker/mpvuePicker.vue?vue&type=template&id=1f8c1486& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "mpvue-picker" }, [
    _c("view", {
      class: { pickerMask: _vm.showPicker },
      attrs: { catchtouchmove: "true", eventid: "95a2222e-0" },
      on: { click: _vm.maskClick }
    }),
    _c(
      "view",
      {
        staticClass: "mpvue-picker-content ",
        class: { "mpvue-picker-view-show": _vm.showPicker }
      },
      [
        _c(
          "view",
          {
            staticClass: "mpvue-picker__hd",
            attrs: { catchtouchmove: "true" }
          },
          [
            _c(
              "view",
              {
                staticClass: "mpvue-picker__action",
                attrs: { eventid: "95a2222e-1" },
                on: { click: _vm.pickerCancel }
              },
              [_vm._v("取消")]
            ),
            _c(
              "view",
              {
                staticClass: "mpvue-picker__action",
                style: { color: _vm.themeColor },
                attrs: { eventid: "95a2222e-2" },
                on: { click: _vm.pickerConfirm }
              },
              [_vm._v("确定")]
            )
          ]
        ),
        _vm.mode === "selector" && _vm.pickerValueSingleArray.length > 0
          ? _c(
              "picker-view",
              {
                staticClass: "mpvue-picker-view",
                attrs: {
                  "indicator-style": "height: 40px;",
                  value: _vm.pickerValue,
                  eventid: "95a2222e-3"
                },
                on: { change: _vm.pickerChange }
              },
              [
                _c(
                  "block",
                  [
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-0" } },
                      _vm._l(_vm.pickerValueSingleArray, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm.mode === "timeSelector"
          ? _c(
              "picker-view",
              {
                staticClass: "mpvue-picker-view",
                attrs: {
                  "indicator-style": "height: 40px;",
                  value: _vm.pickerValue,
                  eventid: "95a2222e-4"
                },
                on: { change: _vm.pickerChange }
              },
              [
                _c(
                  "block",
                  [
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-1" } },
                      _vm._l(_vm.pickerValueHour, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    ),
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-2" } },
                      _vm._l(_vm.pickerValueMinute, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm.mode === "multiSelector"
          ? _c(
              "picker-view",
              {
                staticClass: "mpvue-picker-view",
                attrs: {
                  "indicator-style": "height: 40px;",
                  value: _vm.pickerValue,
                  eventid: "95a2222e-5"
                },
                on: { change: _vm.pickerChange }
              },
              _vm._l(_vm.pickerValueMulArray.length, function(n, index) {
                return _c(
                  "block",
                  { key: index },
                  [
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-3-" + index } },
                      _vm._l(_vm.pickerValueMulArray[n], function(
                        item,
                        index1
                      ) {
                        return _c(
                          "view",
                          { key: index1, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    )
                  ],
                  1
                )
              })
            )
          : _vm._e(),
        _vm.mode === "multiLinkageSelector" && _vm.deepLength === 2
          ? _c(
              "picker-view",
              {
                staticClass: "mpvue-picker-view",
                attrs: {
                  "indicator-style": "height: 40px;",
                  value: _vm.pickerValue,
                  eventid: "95a2222e-6"
                },
                on: { change: _vm.pickerChangeMul }
              },
              [
                _c(
                  "block",
                  [
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-4" } },
                      _vm._l(_vm.pickerValueMulTwoOne, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    ),
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-5" } },
                      _vm._l(_vm.pickerValueMulTwoTwo, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm.mode === "multiLinkageSelector" && _vm.deepLength === 3
          ? _c(
              "picker-view",
              {
                staticClass: "mpvue-picker-view",
                attrs: {
                  "indicator-style": "height: 40px;",
                  value: _vm.pickerValue,
                  eventid: "95a2222e-7"
                },
                on: { change: _vm.pickerChangeMul }
              },
              [
                _c(
                  "block",
                  [
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-6" } },
                      _vm._l(_vm.pickerValueMulThreeOne, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    ),
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-7" } },
                      _vm._l(_vm.pickerValueMulThreeTwo, function(item, index) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    ),
                    _c(
                      "picker-view-column",
                      { attrs: { mpcomid: "95a2222e-8" } },
                      _vm._l(_vm.pickerValueMulThreeThree, function(
                        item,
                        index
                      ) {
                        return _c(
                          "view",
                          { key: index, staticClass: "picker-item" },
                          [_vm._v(_vm._s(item.label))]
                        )
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/apple/xcx/subgroup-uni-app/components/uni-drawer.vue?vue&type=template&id=65124d7a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: "uni-drawer",
      class: {
        "uni-drawer-visible": _vm.visible,
        "uni-drawer-right": _vm.rightMode
      },
      attrs: { catchtouchmove: _vm.catchtouchmove }
    },
    [
      _vm.showMask
        ? _c("view", {
            staticClass: "uni-drawer-mask",
            attrs: { eventid: "b1ebf5c6-0" },
            on: { tap: _vm.close }
          })
        : _vm._e(),
      _c(
        "view",
        { staticClass: "uni-drawer-content" },
        [_vm._t("default", null, { mpcomid: "b1ebf5c6-0" })],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map