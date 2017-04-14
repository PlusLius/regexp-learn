/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var str = 'javaScript is fun',
    str2 = 'JavaScript',
    reg1 = /^java/,
    reg2 = /fun$/i,
    reg3 = /^javascript$/i;

console.log(reg1.test(str));
console.log(reg2.test(str));
console.log(reg3.test(str));
console.log(reg3.test(str2));