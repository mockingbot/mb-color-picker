export {
  rgb
}
function getDegree (start, end, width, height) {
  var deltaX = end.x - start.x;
  var deltaY = end.y - start.y;
  //从(0,0)逆时针旋转到(deltaX, deltaY)的角度
  var deg = Math.atan2(deltaY * height, deltaX * width) / Math.PI * 180
  //弧度转角度
  return deg
  return Math.round(deg)
}
//e.g. (0.2, -0.5, 100, 200, 45)
function getLinearPercent (perX, perY, width, height, theta){
  // console.log("====================")
  // console.log(perX, perY, width, height, theta)
  // console.log('theta: ',theta)
  if(theta < -90){
    // 左上
    var posX = width * (1 - perX);
    var posY = height * (1 - perY);
  }else if(theta < 0){
    // 右上
    var posX = width * perX;
    var posY = height * (1 - perY);
  }else if(theta < 90){
    // 右下
    var posX = width * perX;
    var posY = height * perY;
  }else{
    // 左下
    var posX = width * (1 - perX);
    var posY = height * perY;
  }
  // console.log('传入参数实际坐标: ',posX, posY)
  //求出夹角tan的绝对值
  var tan = Math.abs(Math.tan(theta / 180 * Math.PI))
  // console.log('tan: ',tan)
  //分子
  var molecular = posX + posY * tan;
  //分母
  // var denominator = width + height * tan;
  var denominator = width + height * tan;
  // var sin = Math.sin(-theta / 180 * Math.PI)
  // console.log(perY * height / sin)
  // console.log(molecular / (1 + tan * tan))
  var result = molecular / denominator;
  // console.log('渐变百分比点为: ',result)
  // console.log("====================")
  // console.log(result)
  return parseFloat(result.toFixed(2))
}
//Color space convertions
var hexToRgb = function (hex) {
  var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
  return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
};
var hexToHsb = function (hex) {
  return rgbToHsb(hexToRgb(hex));
};
var rgbToHsb = function (rgb) {
  var hsb = {h: 0, s: 0, b: 0};
  var min = Math.min(rgb.r, rgb.g, rgb.b);
  var max = Math.max(rgb.r, rgb.g, rgb.b);
  var delta = max - min;
  hsb.b = max;
  hsb.s = max != 0 ? 255 * delta / max : 0;
  if (hsb.s != 0) {
    if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
    else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
    else hsb.h = 4 + (rgb.r - rgb.g) / delta;
  } else hsb.h = -1;
  hsb.h *= 60;
  if (hsb.h < 0) hsb.h += 360;
  hsb.s *= 100/255;
  hsb.b *= 100/255;
  return hsb;
};
var hsbToRgb = function (hsb) {
  var rgb = {};
  var h = hsb.h;
  var s = hsb.s*255/100;
  var v = hsb.b*255/100;
  if(s == 0) {
    rgb.r = rgb.g = rgb.b = v;
  } else {
    var t1 = v;
    var t2 = (255-s)*v/255;
    var t3 = (t1-t2)*(h%60)/60;
    if(h==360) h = 0;
    if(h<60) {rgb.r=t1; rgb.b=t2; rgb.g=t2+t3}
    else if(h<120) {rgb.g=t1; rgb.b=t2; rgb.r=t1-t3}
    else if(h<180) {rgb.g=t1; rgb.r=t2; rgb.b=t2+t3}
    else if(h<240) {rgb.b=t1; rgb.r=t2; rgb.g=t1-t3}
    else if(h<300) {rgb.b=t1; rgb.g=t2; rgb.r=t2+t3}
    else if(h<360) {rgb.r=t1; rgb.g=t2; rgb.b=t1-t3}
    else {rgb.r=0; rgb.g=0; rgb.b=0}
  }
  return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
};
var rgbToHex = function (rgb) {
  var hex = [
    rgb.r.toString(16),
    rgb.g.toString(16),
    rgb.b.toString(16)
  ];
  $.each(hex, function (nr, val) {
    if (val.length == 1) {
      hex[nr] = '0' + val;
    }
  });
  return hex.join('');
};
var hsbToHex = function (hsb) {
  return rgbToHex(hsbToRgb(hsb));
};