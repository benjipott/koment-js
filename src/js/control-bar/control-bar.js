/**
 * @file control-bar.js
 */
import Component from '../component';

// Required children
import './koment-toggle';
import './like-button';

/**
 * Container of main controls
 *
 * @extends Component
 * @class ControlBar
 */
class ControlBar extends Component {

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */
  createEl () {
    return super.createEl('div', {
      className: 'koment-control-bar',
      dir: 'ltr'
    }, {
      // The control bar is a group, so it can contain menuitems
      role: 'group'
    });
  }
}

ControlBar.prototype.options_ = {
  children: [
    'komentToggle',
    'likeButton',
  ]
};

Component.registerComponent('ControlBar', ControlBar);
export default ControlBar;
