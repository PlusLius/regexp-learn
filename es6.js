'use strict';

//console.log(/^\uD83D/u.test('\uD83D\uDC2A'));   // false

console.log(/^\uD83D/.test('\uD83D\uDC2A'));    // true

//var str = 'aaa_aa_a',
//    reg1 = /a+/g,
//    reg2 = /a+/y;
//
//console.log(reg1.exec(str)); // aaa
//console.log(reg2.exec(str)); // aaa
//
//console.log(reg1.exec(str)); // aa
//console.log(reg2.exec(str)); // null

var r = /test/ig;
console.log(r.flags);   // gi

console.log(RegExp.escape('The Quick Brown Fox'));
// "The Quick Brown Fox"

console.log(RegExp.escape('Buy it. use it. break it. fix it.'));
// "Buy it\. use it\. break it\. fix it\."

console.log(RegExp.escape('(*.*)'));
// "\(\*\.\*\)"

const re = /foo.bar/s;
// 另一种写法
// const re = new RegExp('foo.bar', 's');

console.log(re.test('foo\nbar')); // true
console.log(re.dotAll); // true
console.log(re.flags); // 's'

//const regex = /^\p{Number}+$/u;
//console.log(regex.test('²³¹¼½¾')); // true
//console.log(regex.test('㉛㉜㉝')); // true
//console.log(regex.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ')); // true