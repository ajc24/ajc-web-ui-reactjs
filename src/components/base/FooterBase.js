/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import '../css/common.css';
import './css/footer-base.css';

const defaultComponentId = 'default-id--footer-container';
const defaultComponentSize = 'default';

/**
 * Baseline component setting the template for all Footer components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component are 87px. The tall height of the component is open to any height (auto) but is set to a minimum height of 87px.
 */
const FooterBase = props => {
  const [id, setId] = useState(defaultComponentId);
  const [size, setSize] = useState(defaultComponentSize);

  useEffect(() => {
    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--footer-container`);
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
  let footerContainerCss = 'footer-container background-white';
  if (size === 'tall') {
    /* Set the taller footer baseline to be rendered */
    footerContainerCss += ' footer-container-size-tall';
  } else {
    /* Set the smaller footer baseline to be rendered as a default */
    footerContainerCss += ' footer-container-size-small';
  }
  const footerContentContainerCss = 'footer-content-container background-transparent';

  return (
    <footer role="contentinfo" id={id} className={footerContainerCss}>
      <div className={footerContentContainerCss}>
        {props.children}
      </div>
    </footer>
  );
}
FooterBase.propTypes = {
  /** The content to be displayed within the footer template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** The size of the component ranging from default / small (87px) to tall (auto with minimum height of 87px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
};
export default FooterBase;
