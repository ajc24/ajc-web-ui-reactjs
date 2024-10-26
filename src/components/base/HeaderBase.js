/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/header-base.css';

const defaultComponentId = 'default-id--header-container';

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the component is 160px.
 */
const HeaderBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--header-container`);
    }
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  });

  /* Set the CSS class lists for all DOM elements */
  const headerContainerCss = 'header-container background-white';
  const headerContentContainerCss = 'header-content-container background-transparent';

  return (
    <header role="banner" id={id} className={headerContainerCss}>
      <div className={headerContentContainerCss}>
        {props.children}
      </div>
    </header>
  );
}
HeaderBase.propTypes = {
  /** The content to be displayed within the header template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
};
export default HeaderBase;
