/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import './css/icon.css';

/**
 * Arrow icon component is a purely presentational component which can be rendered as an arrow icon
 * anywhere in the web application. There are four variations of this icon: up arrow icon, down arrow icon,
 * left arrow icon, right arrow icon.
 * 
 * This icon can also be rendered in a range of different colours.
 */
const ArrowIcon = props => {
}
ArrowIcon.propTypes = {
  /** The colour of the arrow icon component. The icon is displayed in black by default. */
  colour: PropTypes.oneOf([ 'black', 'default', 'gold', 'white' ]),
  /** The direction of the arrow icon. By default the component is rendered as a right arrow icon. */
  direction: PropTypes.oneOf([ 'default', 'down', 'left', 'right', 'up' ]),
  /** The unique identifier for the arrow icon. */
  id: PropTypes.string,
};
export default ArrowIcon;
