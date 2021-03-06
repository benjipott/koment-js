/**
 * @file control-bar.js
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = require('video.js');

var _videoJs2 = _interopRequireDefault(_videoJs);

// Required children

require('./koment-toggle');

require('./like-button');

require('./edit-button');

require('./list-button');

require('./post-box/post-box');

/**
 * Container of main controls
 *
 * @extends Component
 * @class KomentBar
 */

var Component = _videoJs2['default'].getComponent('Component');
var ControlBar = _videoJs2['default'].getComponent('ControlBar');
var KomentBar = (function (_ControlBar) {
  _inherits(KomentBar, _ControlBar);

  function KomentBar() {
    _classCallCheck(this, KomentBar);

    _get(Object.getPrototypeOf(KomentBar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(KomentBar, [{
    key: 'createEl',

    /**
     * Create the component's DOM element
     *
     * @return {Element}
     * @method createEl
     */
    value: function createEl() {
      return _videoJs2['default'].createEl('div', {
        className: 'koment-control-bar',
        dir: 'ltr'
      }, {
        // The control bar is a group, so it can contain menuitems
        role: 'group'
      });
    }
  }]);

  return KomentBar;
})(ControlBar);

KomentBar.prototype.options_ = {
  children: ['komentToggle', 'editButton', 'listButton', 'postBox']
};

Component.registerComponent('KomentBar', KomentBar);
exports['default'] = KomentBar;
module.exports = exports['default'];