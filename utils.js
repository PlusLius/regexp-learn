/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

module.exports = {
    type : function(obj) {
        return obj && Object.prototype.toString.call(obj);
    },
    print : function(msg) {
        console.log.call(console, msg);
    }
};
