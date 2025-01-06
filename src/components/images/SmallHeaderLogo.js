/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import DecorativeImage from './DecorativeImage';
import './css/image.css';

/* Set the size dimensions for header logos (if rendered) */
const smallHeaderLogoDimensions = {
  height: {
    noUpperBorder: 144,
    withUpperBorder: 140,
  },
  width: {
    noUpperBorder: 144,
    rectangle: 328,
    withUpperBorder: 140,
  },
};

/**
 * Small Header Logo component which describes an image which is used solely for decoration in the header of
 * a web application. This component is intended for use with the Small Header component.
 */
const SmallHeaderLogo = props => {
  /* Set the styling for the container element for the image */
  let containerCss = '';
  if (props.logoAlignment === 'center') {
    /* Logo image center alignment */
    containerCss += 'image-small-header-logo-alignment-center';
  } else {
    /* By default choose left alignment */
    containerCss += 'image-small-header-logo-alignment-left';
  }
  /* Set the heights and widths for the logo being rendered */
  let logoHeight;
  let logoWidth;
  if (props.isTopBorderDisplayed === true) {
    /* Render the image to fit between the Small Header component with top border enabled */
    logoHeight = smallHeaderLogoDimensions.height.withUpperBorder;
    logoWidth = smallHeaderLogoDimensions.width.withUpperBorder;
  } else {
    /* By default render the image as if the Small Headers top border is not enabled */
    logoHeight = smallHeaderLogoDimensions.height.noUpperBorder;
    logoWidth = smallHeaderLogoDimensions.width.noUpperBorder;
  }
  if (props.logoType !== undefined && props.logoType === 'rectangle') {
    logoWidth = smallHeaderLogoDimensions.width.rectangle;
  }

  return (
    <div className={containerCss}>
      <DecorativeImage id={`${props.id}--small-header-logo`} src={props.src} height={logoHeight} width={logoWidth} />
    </div>
  );
}
SmallHeaderLogo.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /* Switch to indicate whether the Small Header components top border is displayed or not */
  isTopBorderDisplayed: PropTypes.bool,
  /**
   * The alignment of the small header logo.
   * 
   * When rendered in a Small Header component with no title text rendered, this logo will be rendered centrally horizontally within the Small Header.
   * If title text is rendered within the Small Header, this logo will be left aligned within the Small Header.
   */
  logoAlignment: PropTypes.oneOf([ 'center', 'left' ]),
  /**
   * The type of logo to be displayed in the header.
   * 
   * If the small header logo is rendered without any title or subtitle text content beside it, this logo can be rendered in both square and rectangular forms.
   * 
   * By default, a square logo type is chosen. You can override this setting by choosing the "rectangle" logo type. When a rectangular logo is rendered, the maximum width
   * it will be rendered at is 328px to suit rendering on smaller screens.
   */
  logoType: PropTypes.oneOf([ 'rectangle', 'square' ]),
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default SmallHeaderLogo;
