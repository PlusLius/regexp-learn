/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var str = 'JavaScript is not java',
    pattern = /Java/i,
    pattern2 = /Java/ig;
console.log(str.search(pattern));
console.log(str.search(pattern2));

var str1 = 'JavaScript is not java',
    pattern = /Java/i;

console.log(str1.replace(pattern, 'live'));
console.log(str1.replace('Java', 'live'));

var str2 = '123-456-789',
    pat = /(\d+)/g;

str2.replace(pat, function(v) {
    console.log(v);
});

str2.replace(pat, function(a, b, c, d) {
    // 会执行三次
    // 第一次打印123, 123, 0, 123-456-789
    // 第二次打印456, 456, 4, 123-456-789
    // 第三次打印789, 789, 8, 123-456-789
    console.log(a, b, c, d);
});

str2.replace(/\d+/g, function(a, b, c, d) {
    // 会执行三次
    // 第一次打印123, 0, 123-456-789, undefined
    // 第二次打印456, 4, 123-456-789, undefined
    // 第三次打印789, 8, 123-456-789, undefined
    console.log(a, b, c, d);
});

var str3 = 'reg.xiao91@gmail.com',
    pattern3 = /^(?=[a-zA-Z])([\w\d-]+)(?:\.([\w\d-]+))*?@([a-zA-Z0-9]+)(?:\.([a-zA-Z]+))+$/;

console.log(str3.match(pattern3));  // [ 'reg.xiao91@gmail.com', 'reg', 'xiao91', 'gmail', 'com', index: 0, input: 'reg.xiao91@gmail.com' ]


var str4 = 'Hope left live become a cat.',
    pat1 = /\s/,
    pat2 = ' ';

console.log(str4.split(pat1));
console.log(str4.split(pat2, 2));