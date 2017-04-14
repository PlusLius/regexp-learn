/**
 * Created by huyh on 2017/4/14.
 */
'use strict';

var str = 'a b c',
    reg = /(\w\s)+/;

console.log(str.match(reg));

var str = '20170809',
    str2 = '20170808',
    reg = /(\d{4})(\d{2})(\d{2})/,
    reg2 = /(\d{4})(\d{2})\2/;

console.log(str.replace(reg, '$1-$2-$3'));
console.log(str.replace(reg2, '$1/$2'));
console.log(str.replace(/a/, '$1/$2'));
console.log(str2.replace(reg2, '$1/$2'));

var str2 = '20170808',
    reg2 = /(?:\d{4})(\d{2})\1/;

console.log(str2.replace(reg2, '$1'));   // 08