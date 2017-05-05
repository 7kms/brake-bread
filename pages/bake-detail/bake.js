var coverUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493919377490&di=b126dea7baf0fc123ed9a3bf2bd7822d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F45%2F42B58PICbzp_1024.jpg';
Page({
    data:{
      loading: true,
      info:{
          coverUrl,
          name: '小烘焙',
          price: '315.00',
          desc: '味道还是不错滴',
          inventory: 100,
          postage: 30,
          comments:[{}, {}]
      }
    },
    getItemDetail(itemId){
        wx.showLoading({title:'加载中...'});
        console.log(itemId);
        setTimeout(()=>{
              this.setData({
                  loading: false
              });
            wx.hideLoading();
        },1000);
    },
    onLoad(options){
        let {itemId} = options;
        this.getItemDetail(itemId);
    }
});