/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var Utils = require('./utils.js');

var reg = /<(\/?)(\w+)([^>]*?)>/,
    str = "<div class='hello'><b>hello</b><i>regexp</i></div>";
var matches = reg.exec(str);
Utils.print(matches[0]);
Utils.print(matches[1]);
Utils.print(matches[2]);
Utils.print(matches[3]);
Utils.print(matches.index);
Utils.print(reg.lastIndex);

var matches = reg.exec(str);
Utils.print(matches[0]);
Utils.print(matches[1]);
Utils.print(matches[2]);
Utils.print(matches[3]);
Utils.print(matches.index);
Utils.print(reg.lastIndex);

var reg1 = /<(\/?)(\w+)([^>]*?)>/g,
    str1 = "<div class='hello'><b>hello</b><i>regexp</i></div>";
var matches = reg1.exec(str1);
Utils.print(matches[0]);
Utils.print(matches[1]);
Utils.print(matches[2]);
Utils.print(matches[3]);
Utils.print(matches.index);
Utils.print(reg1.lastIndex);

var matches = reg1.exec(str1);
Utils.print(matches[0]);
Utils.print(matches[1]);
Utils.print(matches[2]);
Utils.print(matches[3]);
Utils.print(matches.index);
Utils.print(reg1.lastIndex);
