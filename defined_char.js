/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var str = 'abc',
    pattern = /[abc]/;

console.log(str.match(pattern));

var str = 'abcd',
    pattern = /[^abc]/;

console.log(str.match(pattern));

var str = '<p>I am a cat.</p>\n<b>what about you?</b>',
    pattern = /.*/;

console.log(str.match(pattern));

var str = 'Your are _ so cute #*& so | beatiful ',
    pattern = /\w+/g;

console.log(str.match(pattern));

var str = 'Your are _ so cute #*& so | beatiful ',
    pattern = /\W+/g;

console.log(str.match(pattern));

var str = 'Your \r\n\f ful',
    pattern = /\s/g;

console.log(str.match(pattern));

var str = 'Your \r\n\f ful',
    pattern = /\S/g;

console.log(str.match(pattern));

var str = '123helloworld34javascript',
    pattern = /\d+/g;

console.log(str.match(pattern));

var str = '123helloworld34javascript',
    pattern = /\D+/g;

console.log(str.match(pattern));

var str = 'I never come back',
    pattern = /e\b/g;

if (pattern.test(str)) {
    console.log(RegExp['$&']);
    console.log(RegExp['$`']);
}

var str = 'I never come back',
    pattern = /e\B/g;

if (pattern.test(str)) {
    console.log(RegExp['$&']);  // e
    console.log(RegExp['$`']);  // I never com
}

var str = 'hello \n world',
    pattern = /\n/;

console.log(str.match(pattern));

var str = 'Visit W3School. Hello World!',
    pattern = /\u0057/g;

console.log(str.match(pattern));    // [ 'W', 'W' ]

var str = 'Visit W3School. Hello World!',
    pattern = /\x57/g;

console.log(str.match(pattern));