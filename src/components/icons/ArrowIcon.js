/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import './css/icon-arrow.css';

/* Set the various sizes for the arrow icon */
const sizes = {
  '1': 'arrow-icon-size-one',
  '2': 'arrow-icon-size-two',
};

/**
 * Arrow icon component is a purely presentational component which can be rendered as an arrow icon
 * anywhere in the web application. There are four variations of this icon: up arrow icon, down arrow icon,
 * left arrow icon, right arrow icon.
 * 
 * This icon can also be rendered in a range of different colours and sizes.
 */
const ArrowIcon = props => {
  let direction;
  (props.direction === 'down' || props.direction === 'left' || props.direction === 'right' || props.direction === 'up')
    ? direction = props.direction
    : direction = 'right';

  /* Set the styling for the arrow icon */
  let iconCss = 'arrow-icon';

  /* Set the size for the arrow icon */
  if (props.size !== undefined && sizes[`${props.size}`] !== undefined) {
    const targetSize = sizes[`${props.size}`];
    iconCss += ` ${targetSize}`;
  } else {
    /* By default - choose the smallest size */
    iconCss += ' arrow-icon-size-one';
  }

  /* Set the colour for the arrow icon - by default use black colour */
  (props.colour !== undefined && (props.colour === 'black' || props.colour === 'gold' || props.colour === 'white'))
    ? iconCss += ` arrow-icon-border-${props.colour}`
    : iconCss += ' arrow-icon-border-black';

  /* Set the direction for the arrow icon - by default use a right facing arrow icon */
  iconCss += ` arrow-icon-direction-${direction}`;

  return (
    <React.Fragment>
      <div id={`${props.id}--arrow-icon-${direction}`} className={iconCss} aria-hidden="true" />
    </React.Fragment>
  );
}
ArrowIcon.propTypes = {
  /** The colour of the arrow icon component. The icon is displayed in black by default. */
  colour: PropTypes.oneOf([ 'black', 'default', 'gold', 'white' ]),
  /** The direction of the arrow icon. By default the component is rendered as a right arrow icon. */
  direction: PropTypes.oneOf([ 'default', 'down', 'left', 'right', 'up' ]),
  /** The unique identifier for the arrow icon. */
  id: PropTypes.string.isRequired,
  /** The size of the icon, each additional number increments the size of the icon by a further 5px. By default the smallest icon is pre-selected. */
  size: PropTypes.oneOf([ '1', '2' ]),
};
export default ArrowIcon;
