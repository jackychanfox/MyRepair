import Config from "../../config"

var UserApi = {

    getList(sub_url, cb) {
        $.ajax({
            url: Config.BACKEND_API_URL + sub_url,
            method: 'GET',
            dataType: "json"
        }).then((res) => {
            if (cb) cb(null, res)
        }, (error) => {
            if (cb) cb(error.responseText, null)
        })
    },
    postItem(sub_url, data, cb) {
        console.log(data)
        $.ajax({
            url: Config.BACKEND_API_URL + sub_url,
            method: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (cb) cb(null, data)
            },
            failure: function (errMsg) {
                if (cb) cb(errMsg, null)
            }
        })
    },
    putItem(sub_url, data, cb) {
        console.log(data)
        $.ajax({
            url: Config.BACKEND_API_URL + sub_url,
            method: 'PUT',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (cb) cb(null, data)
            },
            failure: function (errMsg) {
                if (cb) cb(errMsg, null)
            }
        })
    },
    deleteItem(sub_url, cb) {
        $.ajax({
            url: Config.BACKEND_API_URL + sub_url,
            method: 'DELETE',
            dataType: "json",
            success: function (data) {
                if (cb) cb(null, data)
            },
            failure: function (errMsg) {
                if (cb) cb(errMsg, null)
            }
        })
    },

    // Vendors
    getVendorList(cb) {
        this.getList("/vendors", cb)
    },
    getVendor(id, cb) {
        this.getList("/vendors/" + id, cb)
    },
    postVendor(data, cb) {
        if ( data.id != undefined && data.id != null ){
            this.putItem("/vendors", data, cb)
        }else{
            this.postItem("/vendors/insert", data, cb)
        }
        
    },
    deleteVendor(id, cb){
        this.deleteItem("/vendors/"+id, cb)
    },

    // Customers
    getCustomerList(cb) {
        this.getList("/customers", cb)
    },
    getCustomer(id, cb) {
        this.getList("/customers/" + id, cb)
    },
    postCustomer(data, cb) {
        if ( data.id != undefined && data.id != null ){
            this.putItem("/customers", data, cb)
        }else{
            this.postItem("/customers/insert", data, cb)
        }
        
    },
    deleteCustomer(id, cb){
        this.deleteItem("/customers/"+id, cb)
    },

}

module.exports = UserApi;
