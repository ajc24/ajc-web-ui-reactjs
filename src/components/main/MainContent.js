/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplateConfig } from '../common';
import '../../css/colour.css';
import '../../css/font.css';
import '../../css/main.css';
import '../../css/sizing.css';

/**
 * Main Content component for rendering all of the main content for the web application
 */
class MainContent extends React.Component {
  /**
   * Constructor for the main content component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* Set the title for the current web page */
    document.title = this.props.title;

    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();
  }

  render() {
    /* Build the list of CSS classes to be assigned to the container element */
    let containerCss = 'ajc-container-screen';
    if (this.props.backgroundColour !== undefined && (this.props.backgroundColour === 'white' || this.props.backgroundColour === 'grey' ||
      this.props.backgroundColour === 'yellow' || this.props.backgroundColour === 'transparent')) {
        /* Set the colour for the background of the main content */
        containerCss += ` ajc-background-${this.props.backgroundColour}`;
        if (this.props.backgroundColour === 'grey') {
          containerCss += '-1';
        }
    } else {
      /* By default - choose a transparent background */
      containerCss += ' ajc-background-transparent';
    }
    const containerInnerCss = 'ajc-container-screen-inner';
    const contentCss = 'ajc-main-content ajc-font-default ajc-font-black';
    return (
      <main id="main-content--container" className={containerCss} aria-label={this.props.title}>
        <div className={containerInnerCss}>
          <div id="main-content--content" className={contentCss}>
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}
MainContent.propTypes = {
  /** The background colour for the main content. The default for the main content background is transparent. */
  backgroundColour: PropTypes.oneOf([ 'transparent', 'white', 'grey', 'yellow' ]),
  /** The content to be displayed within the main content component */
  children: PropTypes.any,
  /** The title of the web page content to be rendered in the main component. This title will be rendered in the browser tab. */
  title: PropTypes.string.isRequired,
};
MainContent.defaultProps = {
  backgroundColour: undefined,
  children: undefined,
};
export default MainContent;
