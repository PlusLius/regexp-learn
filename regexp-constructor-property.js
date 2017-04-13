/**
 * Created by huyh on 2017/4/12.
 */
'use strict';

var Utils = require('./utils.js');

var pattern = /(.)or/,
    str = 'this is a normal string or meaningful';

if (pattern.test(str)) {
    Utils.print(RegExp.input);
    Utils.print(RegExp.lastMatch);
    Utils.print(RegExp.lastParen);
    Utils.print(RegExp.leftContext);
    Utils.print(RegExp.multiline);
    Utils.print(RegExp.rightContext);

    Utils.print(RegExp['$_']);
    Utils.print(RegExp['$&']);
    Utils.print(RegExp['$+']);
    Utils.print(RegExp['$`']);
    Utils.print(RegExp['$*']);
    Utils.print(RegExp['$\'']);
}

