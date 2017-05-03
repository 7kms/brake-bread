module.exports = {
    $get: function(){
            wx.request({
                url: 'https://mobile-application.mofanghr.com/member/tag/list.json',
                method: 'GET',
                data: {
                    params:JSON.stringify({"group":"o2oWelfare"})
                },
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
    $post: function(){
            wx.request({
                url: 'test.php',
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
}