/**
 * @file koment-toggle.js
 */
import toTitleCase from '../../utils/to-title-case'

import Component from '../../component.js';
import './post-comment-box';

/**
 * The button component for toggling and selecting koment
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends Component
 * @class PostUserBox
 */
class PostUserBox extends Component {

  constructor (player, options, ready) {
    super(player, options, ready);
    this.update();
  }

  /**
   * Event handler for updates to the player's poster source
   *
   * @method update
   */
  update () {
    const url = this.player_.options_.user.picture;

    this.setSrc(url);

    // If there's no poster source we should display:none on this component
    // so it's not still clickable or right-clickable
    if (url) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * Set the poster source depending on the display method
   *
   * @param {String} url The URL to the poster source
   * @method setSrc
   */
  setSrc (url) {
    let backgroundImage = '';

    // Any falsey values should stay as an empty string, otherwise
    // this will throw an extra error
    if (url) {
      backgroundImage = `url("${url}")`;
    }

    this.el_.style.backgroundImage = backgroundImage;
  }


  createEl () {

    let el = super.createEl('div', {
      className: 'koment-avatar',
    }, {
      'aria-live': 'off'
    });

    return el;
  }

}

Component.registerComponent('PostUserBox', PostUserBox);
export default PostUserBox;
