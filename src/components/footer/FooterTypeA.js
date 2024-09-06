/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplateConfig } from '../common';
import '../../css/colour.css';
import '../../css/font.css';
import '../../css/footer.css';
import '../../css/sizing.css';

/**
 * Footer Type A component for rendering all of the footer content for the web application
 */
class FooterTypeA extends React.Component {
  /**
   * Constructor for the footer component
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
    if (this.props.backgroundColour === 'grey' || this.props.backgroundColour === 'red' || this.props.backgroundColour === 'bright-red') {
      /* Render the background colour of the footer in grey, red or bright red */
      containerCss += ` ajc-background-${this.props.backgroundColour}`;
      if (this.props.backgroundColour === 'grey') {
        containerCss += '-2';
      }
    } else {
      /* By default choose a black background */
      containerCss += ' ajc-background-black';
    }
    const containerInnerCss = 'ajc-container-screen-inner';
    const contentCss = 'ajc-footer-content ajc-font-default ajc-font-white';
    return (
      <footer role="contentinfo" id={`${this.props.id}--container`} className={containerCss}>
        <div className={containerInnerCss}>
          <div id={`${this.props.id}--content`} className={contentCss}>
            {this.props.children}
          </div>
        </div>
      </footer>
    );
  }
}
FooterTypeA.propTypes = {
  /** The background colour for the footer. The default colour for the footer is black. */
  backgroundColour: PropTypes.oneOf([ 'black', 'grey', 'red', 'bright-red' ]),
  /** The content to be displayed within the footer component */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
};
FooterTypeA.defaultProps = {
  backgroundColour: undefined,
  children: undefined,
};
export default FooterTypeA;
