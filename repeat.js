/**
 * Created by huyh on 2017/4/14.
 */
'use strict';

var str = 'aaaaa',
    str1 = 'aaaaaaaaaa',
    reg = /a+/;

console.log(reg.exec(str));
console.log(reg.exec(str1));

var str = '.abc.def.xyz.com',
    reg = /(.\w+){2,3}/;

console.log(str.match(reg));    // [ '.abc.def.xyz', '.xyz', index: 0, input: '.abc.def.xyz.com' ]

var str = '.abc.def.xyz.com',
    reg = /(.\w+){2,}/;

console.log(str.match(reg));    // [ '.abc.def.xyz.com', '.com', index: 0, input: '.abc.def.xyz.com' ]

var str = '.abc.def.xyz.com',
    reg = /(.\w+){2}/;

console.log(str.match(reg));    // [ '.abc.def', '.def', index: 0, input: '.abc.def.xyz.com' ]

var str = '.abc//.def.xyz.com',
    reg = /(.\w+\/?)?/;

console.log(str.match(reg));    // [ '.abc/', '.abc/', index: 0, input: '.abc//.def.xyz.com' ]

var str = '.abc//.def.xyz.com',
    reg = /(.\w+\/*)*/;

console.log(str.match(reg));    // [ '.abc//.def.xyz.com', '.com', index: 0, input: '.abc//.def.xyz.com' ]

var str = '.abc//.def.xyz.com',
    reg = /(.\w+\/+)+/;

console.log(str.match(reg));    // [ '.abc//.def.xyz.com', '.com', index: 0, input: '.abc//.def.xyz.com' ]

var str = 'aaaa',
    str1 = '<p>Hello</p><p>Javascript</p>',
    reg = /a+?/,
    reg2 = /(<(\w+)>[^<]*<\/\2>)+/,
    reg3 = /(<p>[^<]*<\/p>)+?/;

console.log(reg.exec(str));     // [ 'a', index: 0, input: 'aaaa' ]
console.log(str1.match(reg2));  // [ '<p>Hello</p><p>Javascript</p>', '<p>Javascript</p>', index: 0, input: '<p>Hello</p><p>Javascript</p>' ]
console.log(str1.match(reg3));  // [ '<p>Hello</p>', '<p>Hello</p>', index: 0, input: '<p>Hello</p><p>Javascript</p>' ]