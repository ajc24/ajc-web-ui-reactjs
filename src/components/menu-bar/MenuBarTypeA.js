/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplateConfig } from '../common';
import '../../css/colour.css';
import '../../css/font.css';
import '../../css/menubar.css';
import '../../css/sizing.css';

/**
 * Menu Bar Type A component for rendering the menu bar / navigation section of a web application
 */
class MenuBarTypeA extends React.Component {
  /**
   * Constructor for the menu bar component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  }

  render() {
    /* Build the list of CSS classes to be assigned to the container element */
    let containerCss = 'ajc-container-screen';
    if (this.props.backgroundColour === 'grey' || this.props.backgroundColour === 'red') {
      /* Render the background colour of the menu bar in grey or red */
      containerCss += ` ajc-background-${this.props.backgroundColour}`;
      if (this.props.backgroundColour === 'grey') {
        containerCss += '-2';
      }
    } else {
      /* By default choose a black background */
      containerCss += ' ajc-background-black';
    }
    const containerInnerCss = 'ajc-container-screen-inner';
    const contentCss = 'ajc-menu-bar-type-a-content ajc-font-default ajc-font-white';
    return (
      <div role="navigation" id={`${this.props.id}--container`} className={containerCss}>
        <div className={containerInnerCss}>
          <div id={`${this.props.id}--content`} className={contentCss}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
MenuBarTypeA.propTypes = {
  /** The background colour for the menu bar. The default colour for the menu bar is black. */
  backgroundColour: PropTypes.oneOf([ 'black', 'grey', 'red' ]),
  /** The content to be displayed within the menu bar component */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
};
MenuBarTypeA.defaultProps = {
  backgroundColour: undefined,
  children: undefined,
};
export default MenuBarTypeA;
