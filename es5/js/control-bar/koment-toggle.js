/**
 * @file koment-toggle.js
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

var _komentButton = require('./koment-button');

var _komentButton2 = _interopRequireDefault(_komentButton);

var Component = _videoJs2['default'].getComponent('Component');
/**
 * The button component for toggling and selecting koment
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends Button
 * @class KomentToggle
 */

var KomentToggle = (function (_KomentButton) {
  _inherits(KomentToggle, _KomentButton);

  function KomentToggle(player, options, ready) {
    _classCallCheck(this, KomentToggle);

    _get(Object.getPrototypeOf(KomentToggle.prototype), 'constructor', this).call(this, player, options, ready);
    this.on(player, 'togglemenu', this.handleToggleChange);
    if (player.koment.options_.open) {
      player.koment.toggleMenu(player.koment.options_.open);
    }
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  _createClass(KomentToggle, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'koment-toggle ' + _get(Object.getPrototypeOf(KomentToggle.prototype), 'buildCSSClass', this).call(this);
    }

    /**
     * Handle click on text track
     *
     * @method handleClick
     */
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      _get(Object.getPrototypeOf(KomentToggle.prototype), 'handleClick', this).call(this, event);
      this.player_.koment.toggleMenu();
    }
  }, {
    key: 'handleToggleChange',
    value: function handleToggleChange() {
      if (this.player_.koment.isKomentOn()) {
        this.controlText('Non-Koment');
      } else {
        this.controlText('Koment');
      }
    }
  }]);

  return KomentToggle;
})(_komentButton2['default']);

KomentToggle.prototype.options_ = {
  attributes: {}
};

KomentToggle.prototype.controlText_ = 'Koment';

Component.registerComponent('KomentToggle', KomentToggle);
exports['default'] = KomentToggle;
module.exports = exports['default'];