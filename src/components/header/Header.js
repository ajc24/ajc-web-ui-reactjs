/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { HeaderBase } from '../../';

/**
 * Decorative Image component which describes an image which is used solely for decoration in a web application.
 * The height and width of the image are fully customisable. You can not define alt text for this image.
 * On click events are fully disabled.
 */
const Header = props => {
  return (
    <HeaderBase backgroundColour={props.backgroundColour} backgroundImageSrc={props.backgroundImageSrc} id={props.id} size={props.size || 'default'}
      topBorder={props.topBorder || 'off'}>
    </HeaderBase>
  );
}
Header.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The background image data to be displayed. Depending on your choice of header size, your background image should suit the dimensions of 1920x160 (small) or 1920x320 (tall). */
  backgroundImageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /**
   * The custom content to be displayed within the header component.
   * This content will only be displayed if you have not chosen to render any of the following: an image logo, title text or subtitle text.
   */
  children: PropTypes.any,
  /** The unique identifier for the header. */
  id: PropTypes.string,
  /** The image data to be displayed as the header logo. */
  logoSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** The size of the header ranging from default / small (160px) to tall (320px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
  /** The colour of the subtitle text content, either in a black or white colour. By default the black colour is pre-selected. */
  subtitleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** The text content to be displayed as the subtitle text. */
  subtitleTextContent: PropTypes.string, 
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: PropTypes.oneOf([ 'off', 'gold', 'green', 'green-2', 'grey', 'navy', 'red' ]),
  /** The colour of the title text content, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  titleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** The text content to be displayed as the title text. */
  titleTextContent: PropTypes.string, 
  
};
export default Header;
