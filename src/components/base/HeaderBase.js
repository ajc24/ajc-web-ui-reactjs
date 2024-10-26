/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/header-base.css';

const defaultComponentId = 'default-id--header-container';
const defaultComponentSize = 'default';

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component is 160px. The tall height of the component is 320px.
 */
const HeaderBase = props => {
  const [id, setId] = useState(defaultComponentId);
  const [size, setSize] = useState(defaultComponentSize);

  useEffect(() => {
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--header-container`);
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
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  });

  /* Set the CSS class lists for all DOM elements */
  let headerContainerCss = 'header-container background-white';
  if (size === 'tall') {
    /* Set the taller header baseline to be rendered */
    headerContainerCss += ' header-container-size-tall';
  } else {
    /* Set the smaller header baseline to be rendered as a default */
    headerContainerCss += ' header-container-size-small';
  }
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
  /** The size of the component ranging from default / small (160px) to tall (320px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
};
export default HeaderBase;
