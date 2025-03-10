/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import { getColourCombination } from '../data/colour-combinations';
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

  /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
  const { backgroundColour, fontColour } = getColourCombination(props.backgroundColour);

  /* Set the styling for the navigation element */
  const footerCss = `footer screen-width-root background-white font-default font-${fontColour}`;

  /* Set the styling for the outer content element */
  const outerContentCss = `footer-content-outer screen-width-content-outer background-${backgroundColour}`;

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
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The content to be displayed within the footer template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
};
export default FooterBase;
