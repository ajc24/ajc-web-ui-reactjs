/**
 * Developed by Anthony Cox in 2025
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/base-header.css';

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component is 160px. The tall height of the component is 320px.
 */
const BaseHeader = props => {
  useEffect(() => {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  });

  /* Set the styling for the header element */
  const headerCss = 'header screen-width-root background-white font-default font-black';

  /* Set the styling for the outer content element */
  let outerContentCss = 'header-content-outer screen-width-content-outer';
  props.backgroundColour === 'grey' ? outerContentCss += ' background-grey-body' : outerContentCss += ' background-white';

  /* Set the styling for the inner content element */
  const innerContentCss = 'header-content-inner screen-width-content-inner';

  return (
    <header role="banner" id={props.id !== undefined ? props.id : 'default--base-header'} className={headerCss}>
      <div className={outerContentCss} data-headerbgimage="false">
        <div className={innerContentCss}>
          {props.children}
        </div>
      </div>
    </header>
  );
}
BaseHeader.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The content to be displayed within the header component. */
  children: PropTypes.any,
  /** The unique identifier for the header. */
  id: PropTypes.string,
};
export default BaseHeader;
