'use strict';

var _module2 = require('./module1');

var _module3 = require('./module2');

var _module4 = require('./module3');

var _module5 = _interopRequireDefault(_module4);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module2.foo)();
(0, _module2.bar)();
(0, _module3.fun)();
(0, _module3.fun2)();
_module5.default.foo();
(0, _jquery2.default)('body').css('background', 'pink');