/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var Utils = require('./utils.js');

var regexp1 = /regexp/,
    regexp2 = new RegExp(/hello/g);

Utils.print(Utils.type(regexp1));
Utils.print(Utils.type(regexp2));
Utils.print('hello regexp hello'.match(regexp2));
Utils.print(regexp1 === regexp2);
