//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    // indicatorColor: '',
    // indicatorActiveColor: '',
    interval: 3000,
    duration: 1000,
    cover:'//gd4.alicdn.com/imgextra/i2/436989353/TB2haoBdNeK.eBjSZFlXXaywXXa_!!436989353.jpg_400x400.jpg'
  },
  clickBanner: function(event){
    console.log(event.currentTarget.dataset.index)
  }
});
