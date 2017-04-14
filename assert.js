/**
 * Created by huyh on 2017/4/14.
 */
'use strict';

var str = 'yuzhongzi91',
    str2 = '123abc',
    reg = /^(?=[a-z])([a-z0-9])+$/;

console.log(str.match(reg));
console.log(str2.match(reg));

var str = 'bb<div>I am a div</div><p>hello</p><i>world</i><p>javascript</p>',
    reg = /<(?!\/?p\b)[^>]+>/g;

console.log(str.match(reg));

var str = '<p>hello</p>',
    reg = /(?<=<p>).*(?=<\/p>)/;

console.log(str.match(reg));