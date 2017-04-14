/**
 * Created by huyh on 2017/4/14.
 */
'use strict';

var str = ' I am a cat. ',
    reg = /^\s+|\s+$/;

console.log(str.replace(reg, ''));

var str = '0715-85624582-234',
    str2 = '027-51486325',
    reg = /^(\d{3,4})-(\d{8})(?:-(\d{3,4}))?$/;

console.log(str.match(reg));    // [ '0715-85624582-234', '0715', '85624582', '234', index: 0, input: '0715-85624582-234' ]
console.log(str2.match(reg));   // [ '027-51486325', '027', '51486325', undefined, index: 0, input: '027-51486325' ]

var str = '17985642351',
    reg = /^1[3|4|5|7|8]\d{9}$/;

console.log(str.match(reg));

var reg = /^\d*\.?\d{0,2}$/;

console.log(reg.test('.4'));
console.log(reg.test('3'));
console.log(reg.test('3.3333'));

var str = '223我是abc一只猫234',
    reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/g;

console.log(str.match(reg));

//var str = '<div>java<p>hello</p>script</div>',
//    reg = /<div>[\s\S]*<\/div>/;
//
//if (reg.test(str)) {
//    console.log(RegExp.$1);     // java<p>hello</p>script
//}

var str = '<div class="test" id="test" data-id="2345-766-sd24">hello</div>',
    reg = /<([a-zA-Z]+)(\s*[a-zA-Z-]*?\s*=\s*".+?")*\s*>([\s\S]*?)<\/\1>/;

if (reg.test(str)) {
    console.log(RegExp.$2);
}

var arrs = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],
    reg = /\d/g,
    str = '135268492580',
    res;

res = str.replace(reg, function(v) {
   return arrs[v];
});

console.log(res);

var str = '<a href="http://www.rynxiao.com">rynxiao.com</a>',
    reg = /http:\/\/(?:.?\w+)+/;

console.log(str.match(reg)[0]);


