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
class HeaderBase extends React.Component {
  /**
   * Initialise the Header Base component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      id: defaultComponentId,
      size: defaultComponentSize,
    };
    this.setId = this.setId.bind(this);
    this.setSize = this.setSize.bind(this);

    /* Create the references for this component */
    this.contentContainerRef = React.createRef();
  }

  componentDidMount() {
    /* Set the ID for the component */
    if (this.props.id !== undefined) {
      this.setId(`${this.props.id}--header-container`);
    }
    /* Set the size for the component */
    if (this.props.size !== undefined) {
      if (this.props.size === 'default' || this.props.size === 'small' || this.props.size === 'tall') {
        /* Set the declared supported size for this component */
        this.setSize(this.props.size);
      } else {
        /* An invalid size was specified - set to default size */
        this.setSize('default');
      }
    }
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();

    /* Set the background image to the header component */
    if (this.props.backgroundImageSrc !== undefined) {
      this.contentContainerRef.current.style.backgroundImage = `url(${this.props.backgroundImageSrc})`;
    }
  }

  /**
   * Sets the ID for the base header component
   * @param {string} newId 
   */
  setId(newId) {
    this.setState({
      id: newId,
    });
  }

  /**
   * Sets the size for the base header component
   * @param {'default'|'small'|'tall'} newSize 
   */
  setSize(newSize) {
    this.setState({
      size: newSize,
    });
  }

  render() {
    /* Set the CSS class lists for all DOM elements */
    let headerContainerCss = 'header-container background-white';
    if (this.state.size === 'tall') {
      /* Set the taller header baseline to be rendered */
      headerContainerCss += ' header-container-size-tall';
    } else {
      /* Set the smaller header baseline to be rendered as a default */
      headerContainerCss += ' header-container-size-small';
    }
    const headerContentContainerCss = 'header-content-container background-transparent';

    return (
      <header role="banner" id={this.state.id} className={headerContainerCss}>
        <div className={headerContentContainerCss} ref={this.contentContainerRef}>
          {this.props.children}
        </div>
      </header>
    );
  };
}
HeaderBase.propTypes = {
  /** The background image data to be displayed. */
  backgroundImageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** The content to be displayed within the header template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** The size of the component ranging from default / small (160px) to tall (320px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
};
export default HeaderBase;
