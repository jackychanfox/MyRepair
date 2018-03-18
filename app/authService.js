
import * as async from 'async'
import * as _ from 'underscore'
import moment from 'moment'
import Cache from './utils/Cache'

module.exports = {
    isLogin() {
        //check if current user exists or not
        var username = sessionStorage.getItem('username');
        var password = sessionStorage.getItem('password');

        console.log('isLogin---', username, password)

        if ( username == 'admin@ex.com' && password == 'admin' )  return true;
        console.log('isLogin---fail')
        return false;
    },

}
