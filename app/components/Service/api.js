import Config from "../../config"

var ServiceApi = {

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
    getDeviceList(cb){
        this.getList("/devices", cb)
    },
    getDevice(id, cb){
        this.getList("/devices/"+id, cb)
    },
    postDevice(data, cb){
        this.postItem("/devices", data, cb)
    },

    // Make
    getMakeList(cb){
        this.getList("/makes", cb)
    },
    getMake(id, cb){
        this.getList("/makes/"+id, cb)
    },
    postDevice(data, cb){
        this.postItem("/makes", data, cb)
    },

    // Model
    getModelList(cb){
        this.getList("/models", cb)
    },
    getModel(id, cb){
        this.getList("/models/"+id, cb)
    },
    postDevice(data, cb){
        this.postItem("/models", data, cb)
    },

    // Service
    getServiceList(cb){
        this.getList("/services", cb)
    },
    getservice(id, cb){
        this.getList("/services/"+id, cb)
    },
    postDevice(data, cb){
        this.postItem("/services", data, cb)
    },
}

module.exports = ServiceApi;