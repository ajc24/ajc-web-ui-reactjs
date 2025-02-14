/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/base-main.css';

const defaultComponentId = 'default-id--main-base';

/**
 * Baseline component setting the template for all Main components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The minimum height of the component is 652px, expanding to larger sizes when required.
 */
const MainBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();

    /* Set the title for the current web page only if it has not already been set */
    document.title = props.title;
  
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--main-base`);
    }
  });

  /* Set the styling for the main element */
  const mainCss = 'main screen-width-root background-white';

  /* Set the styling for the outer content element */
  let outerContentCss = 'main-content-outer screen-width-content-outer';
  (props.backgroundColour === 'grey' || props.backgroundColour === 'white')
    ? outerContentCss += ` background-${props.backgroundColour}`
    : outerContentCss += ' background-white';

  /* Set the styling for the inner content element */
  const innerContentCss = 'main-content-inner screen-width-content-inner';
  return (
    <main id={id} className={mainCss} aria-label={props.title}>
      <div className={outerContentCss}>
        <div className={innerContentCss}>
          {props.children}
        </div>
      </div>
    </main>
  );
}
MainBase.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The content to be displayed within the main template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** The title of the web page content to be rendered in the main component. This title will be rendered in the browser tab. */
  title: PropTypes.string.isRequired,
};
export default MainBase;
