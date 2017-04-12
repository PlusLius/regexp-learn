/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var Utils = require('./utils.js');


// global
var str = 'hello world, hello life',
    reg1 = /hello/,
    reg2 = /hello/g;

Utils.print(str.match(reg1));
Utils.print(str.match(reg2));

// case-insensitive
var cStr = 'Hello world',
    cReg1 = /hello/,
    cReg2 = /hello/i;

Utils.print(cReg1.exec(cStr));
Utils.print(cReg2.exec(cStr));

// multiline
var mStr = 'hello world\n hello life',
    mReg1 = /world$/,
    mReg2 = /world$/m;

Utils.print(mStr.match(mReg1));
Utils.print(mStr.match(mReg2));