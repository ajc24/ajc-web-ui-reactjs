/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/base-footer.css';

const defaultComponentId = 'default-id--footer-base';

/**
 * Baseline component setting the template for all Footer components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The minimum height of the component is 71px, expanding to whatever height is suitable for the content within.
 */
const FooterBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();

    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--footer-base`);
    }
  });

  /* Set the styling for the navigation element */
  const footerCss = 'footer screen-width-root background-white';

  /* Set the styling for the outer content element */
  let outerContentCss = 'footer-content-outer screen-width-content-outer';
  if (props.backgroundColour === 'white' || props.backgroundColour === 'red' || props.backgroundColour === 'green') {
    /* Set the background colour to the specified colour */
    outerContentCss += ` background-${props.backgroundColour}`;
  } else if (props.backgroundColour === 'grey') {
    /* Set the background colour as grey */
    outerContentCss += ` background-${props.backgroundColour}-2`;
  } else {
    /* Default set the background colour as white */
    outerContentCss += ` background-white`;
  }
  /* Set the styling for the inner content element */
  const innerContentCss = 'footer-content-inner screen-width-content-inner';
  return (
    <footer role="contentinfo" id={id} className={footerCss}>
      <div className={outerContentCss}>
        <div className={innerContentCss}>
          {props.children}
        </div>
      </div>
    </footer>
  );
}
FooterBase.propTypes = {
  /** The background colour for the footer. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'green', 'grey', 'red', 'white' ]),
  /** The content to be displayed within the footer template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
};
export default FooterBase;
