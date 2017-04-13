/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var reg1 = /\[abc\]/,
    reg2 = new RegExp("\\[abc\\]"),
    str = '[abc]';

console.log(str.match(reg1));
console.log(str.match(reg2));
console.log(reg1.source);
console.log(reg2.source);