/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/main-base.css';

const defaultComponentId = 'default-id--main-container';

/**
 * Baseline component setting the template for all Main components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the component is 768px.
 */
const MainBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Set the title for the current web page only if it has not already been set */
    document.title = props.title;
  
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--main-container`);
    }
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  });

  /* Set the CSS class lists for all DOM elements */
  const mainContainerCss = 'main-container background-white';
  const mainContentContainerCss = 'main-content-container background-transparent';

  return (
    <main id={id} className={mainContainerCss} aria-label={props.title}>
      <div className={mainContentContainerCss}>
        {props.children}
      </div>
    </main>
  );
}
MainBase.propTypes = {
  /** The content to be displayed within the main template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** The title of the web page content to be rendered in the main component. This title will be rendered in the browser tab. */
  title: PropTypes.string.isRequired,
};
export default MainBase;
