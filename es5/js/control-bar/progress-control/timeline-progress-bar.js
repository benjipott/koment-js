/**
 * @file timeline-progress-bar.js
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = require('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = require('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _lodash = require('lodash');

/**
 * Shows load progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class TimelineProgressBar
 */

var TimelineProgressBar = (function (_Component) {
  _inherits(TimelineProgressBar, _Component);

  function TimelineProgressBar(player, options) {
    _classCallCheck(this, TimelineProgressBar);

    _get(Object.getPrototypeOf(TimelineProgressBar.prototype), 'constructor', this).call(this, player, options);
    this.on(player, 'komentsupdated', this.update);
    this.on(player, 'progress', this.update);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  _createClass(TimelineProgressBar, [{
    key: 'createEl',
    value: function createEl() {
      return _get(Object.getPrototypeOf(TimelineProgressBar.prototype), 'createEl', this).call(this, 'div', {
        className: 'koment-timeline-progress'
      });
    }

    /**
     * Update progress bar
     *
     * @method update
     */
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var items = this.player_.komentsList();
      var duration = this.player_.duration();
      var children = this.el_.children;

      // get the percent width of a time compared to the total end
      var percentify = function percentify(time, end) {
        // no NaN
        var percent = time / end || 0;

        return (percent >= 1 ? 1 : percent) * 100 + '%';
      };

      // add child elements to represent the individual buffered time ranges
      (0, _lodash.forEach)(items, function (item, i) {

        var part = children[i];

        if (!part) {
          part = _this.el_.appendChild(Dom.createEl());
        }

        // set the percent based on the width of the progress bar (bufferedEnd)
        part.style.left = percentify(item.timecode, duration);
      });
    }
  }]);

  return TimelineProgressBar;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('TimelineProgressBar', TimelineProgressBar);
exports['default'] = TimelineProgressBar;
module.exports = exports['default'];