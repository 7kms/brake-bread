var serverUrl = 'https://mobile-application.mofanghr.com';
var Promise = require('../lib/es6-promise');
module.exports = {
    $get: function(url,params){
            wx.request({
                url: serverUrl + url,
                method: 'GET',
                data: params,
                header: {
                    'content-type': 'application/json'
                },
                success: function(res) {
                    console.log(res.data)
                },
                error:function (err) {
                    console.log(err);
                }
         })
    },
    $post: function(url,params){
            wx.request({
                url: serverUrl + url,
                method: 'POST',
                data: {
                    x: '' ,
                    y: ''
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function(res) {
                    console.log(res.data)
                }
         })
    }
};