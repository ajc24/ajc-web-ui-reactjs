/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/base-header.css';

const defaultComponentId = 'default-id--header-base';
const defaultComponentSize = 'default';

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component is 160px. The tall height of the component is 320px.
 */
const HeaderBase = props => {
  const [id, setId] = useState(defaultComponentId);
  const [size, setSize] = useState(defaultComponentSize);
  const outerContentRef = useRef(null);

  useEffect(() => {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();

    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--header-base`);
    }
    /* Set the size for the component */
    if (props.size !== undefined) {
      if (props.size === 'default' || props.size === 'small' || props.size === 'tall') {
        /* Set the declared supported size for this component */
        setSize(props.size);
      } else {
        /* An invalid size was specified - set to default size */
        setSize('default');
      }
    }
    /* Set the background image to the outer content element */
    if (props.backgroundImageSrc !== undefined) {
      outerContentRef.current.style.backgroundImage = `url(${props.backgroundImageSrc})`;
      outerContentRef.current.dataset.bgimage = 'true';
    }
  });

  /* Determine if a top border has been rendered */
  let topBorderRendered;
  (props.topBorder === 'gold' || props.topBorder === 'green' || props.topBorder === 'green-2' || props.topBorder === 'grey' || props.topBorder === 'navy'
    || props.topBorder === 'red')
      ? topBorderRendered = true
      : topBorderRendered = false;

  /* Set the styling for the header element */
  const headerCss = 'header screen-width-root background-white font-default font-black';
  
  /* Set the styling for the outer content element */
  let outerContentCss = 'header-content-outer screen-width-content-outer';
  if (props.backgroundImageSrc === undefined) {
    /* Set the background colour for the header only if a background image is not defined */
    props.backgroundColour === 'grey' ? outerContentCss += ' background-grey' : outerContentCss += ' background-white';
  }
  /* Set the top border for the outer content element if required */
  topBorderRendered === true
    ? outerContentCss += ` header-border-top-${props.topBorder}`
    : outerContentCss += ''.trim();

  /* Set the styling for the inner content element */
  let innerContentCss = 'header-content-inner screen-width-content-inner';
  if (topBorderRendered === true) {
    size === 'tall'
      ? innerContentCss += ' header-tall-height-with-border'
      : innerContentCss += ' header-small-height-with-border';
  } else {
    size === 'tall'
      ? innerContentCss += ' header-tall-height-no-border'
      : innerContentCss += ' header-small-height-no-border';
  }
  return (
    <header role="banner" id={id} className={headerCss}>
      <div className={outerContentCss} ref={outerContentRef} data-bgimage="false">
        <div className={innerContentCss}>
          {props.children}
        </div>
      </div>
    </header>
  );
}
HeaderBase.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The background image data to be displayed. Depending on your choice of header size, your background image should suit the dimensions of 1920x160 (small) or 1920x320 (tall). */
  backgroundImageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** The content to be displayed within the header component. */
  children: PropTypes.any,
  /** The unique identifier for the header. */
  id: PropTypes.string,
  /** The size of the header ranging from default / small (160px) to tall (320px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: PropTypes.oneOf([ 'off', 'gold', 'green', 'green-2', 'grey', 'navy', 'red' ]),
};
export default HeaderBase;
