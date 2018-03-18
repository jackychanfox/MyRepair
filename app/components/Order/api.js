import Config from "../../config"

var OrderApi = {

    getList(sub_url, cb){
        $.ajax({
            url: Config.BACKEND_API_URL+sub_url,
            method: 'GET',
            dataType:"json"
        }).then((res)=>{
            if ( cb ) cb( null, res )
        }, (error)=>{
            if ( cb ) cb(error.responseText, null)
        })
    },
    postItem(sub_url, data, cb){
        $.ajax({
            url: Config.BACKEND_API_URL+sub_url,
            method: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                if (cb) cb(null, data)
            },
            failure: function(errMsg){
                if (cb) cb(errMsg, null)
            }
        })
    },

    // Device
    getOrderList(cb){
        this.getList("/orders", cb)
    },
    getOrder(id, cb){
        this.getList("/orders/"+id, cb)
    },
    postOrder(data, cb){
        this.postItem("/orders", data, cb)
    },

}

module.exports = OrderApi;
