/**
 * Created by huyh on 2017/4/14.
 */
'use strict';

var str = '<a href="http://www.rynxiao.com">rynxiao.com</a>',
    reg = /http:\/\/(?:.?\w+)+/,
    start_time = new Date().getTime(),
    i = 0,
    end_time,
    duration;

for (; i < 100000; i++) {
    reg.test(str);
}

end_time = new Date().getTime();
duration = end_time - start_time;

console.log(duration);

//var str = '<a href="http://www.rynxiao.com">rynxiao.com</a>',
//    start_time = new Date().getTime(),
//    i = 0,
//    end_time,
//    duration;
//
//for (; i < 1000000; i++) {
//    /http:\/\/(?:.?\w+)+/.test(str);
//}
//
//end_time = new Date().getTime();
//duration = end_time - start_time;
//
//console.log(duration);