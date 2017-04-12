/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var Utils = require('./utils.js');

var reg = /\[hello\] regexp/i;

Utils.print(reg.global);
Utils.print(reg.ignoreCase);
Utils.print(reg.multiline);
Utils.print(reg.lastIndex);
Utils.print(reg.source);

var reg2 = new RegExp('\\[hello\\] regexp', 'ig');

Utils.print(reg2.global);
Utils.print(reg2.ignoreCase);
Utils.print(reg2.multiline);
Utils.print(reg2.lastIndex);
Utils.print(reg2.source);
