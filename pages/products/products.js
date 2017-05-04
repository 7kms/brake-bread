Page({
    data:{
        filterItem:'all'
    },
    selectFilter: function (event) {
        this.setData({
            filterItem: event.currentTarget.dataset.item
        });
    },
    className:function () {
        return 'filter-item item-active'
    }
});
