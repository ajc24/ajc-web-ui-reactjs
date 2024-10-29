/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/menu-bar-base.css';

const defaultComponentId = 'default-id--menu-bar-container';

/**
 * Baseline component setting the template for all Menu Bar components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the component is 55px.
 */
const MenuBarBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--menu-bar-container`);
    }
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  });

  /* Set the CSS class lists for all DOM elements */
  const menuBarContainerCss = 'menu-bar-container background-white';
  const menuBarContentContainerCss = 'menu-bar-content-container background-transparent';

  return (
    <nav id={id} className={menuBarContainerCss}>
      <div className={menuBarContentContainerCss}>
        {props.children}
      </div>
    </nav>
  );
}
MenuBarBase.propTypes = {
  /** The content to be displayed within the menu bar template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
};
export default MenuBarBase;
