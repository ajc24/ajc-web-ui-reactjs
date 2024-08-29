/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import { setupDocumentBodyCss } from '../common';
import '../../css/colour.css';
import '../../css/font.css';
import '../../css/header.css';
import '../../css/sizing.css';

/**
 * Header Type A component for rendering the header section of a web application
 */
class HeaderTypeA extends React.Component {
  /**
   * Constructor for the header component
   * @param {any} props 
   */
  constructor(props) {
    super(props);

    /* Create the references for this component */
    this.backgroundImageElementRef = React.createRef();
  }

  componentDidMount() {
    /* Setup the default CSS styling for the page which is rendering this component */
    setupDocumentBodyCss();

    /* Render the headers background image if it has been set */
    if (this.props.backgroundImage !== undefined) {
      this.backgroundImageElementRef.current.style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
  }

  render() {
    /* Build the list of CSS classes to be assigned to the container element */
    let containerCss = 'ajc-container-screen';
    if (this.props.showTopBorder === true) {
      if (this.props.topBorderColour === 'grey' || this.props.topBorderColour === 'red') {
        /* Render the upper border in grey or red */
        containerCss += ` ajc-header-border-${this.props.topBorderColour}`;
      } else {
        /* By default choose a black border */
        containerCss += ' ajc-header-border-black';
      }
    }
    if (this.props.backgroundColour !== undefined && (this.props.backgroundColour === 'white' || this.props.backgroundColour === 'grey' ||
      this.props.backgroundColour === 'yellow' || this.props.backgroundColour === 'transparent')) {
        /* Set the colour for the background of the header */
        containerCss += ` ajc-background-${this.props.backgroundColour}`;
        if (this.props.backgroundColour === 'grey') {
          containerCss += '-1';
        }
    } else {
      /* By default - choose a transparent background */
      containerCss += ' ajc-background-transparent';
    }
    const containerInnerCss = 'ajc-container-screen-inner';
    /* Build the list of CSS classes to be assigned to the root element */
    let headerRootCss = 'ajc-header-root';
    if (this.props.showTopBorder === true) {
      /* Render the header at a lesser height to accommodate for the border */
      headerRootCss += ' ajc-header-root-with-border';
    } else {
      /* Render the header at a full height to compensate for the lack of a border */
      headerRootCss += ' ajc-header-root-no-border';
    }
    /* Build the list of CSS classes to be assigned to the content element */
    let contentCss = 'ajc-header-content ajc-font-default ajc-font-black';
    if (this.props.alignment !== undefined && (this.props.alignment === 'left' || this.props.alignment === 'center' || this.props.alignment === 'right')) {
      /* Set the alignment for the header contents */
      contentCss += ` ajc-header-content-alignment-${this.props.alignment}`;
    } else {
      /* By default - choose left alignment */
      contentCss += ' ajc-header-content-alignment-left';
    }
    return (
      <header role="banner" id={`${this.props.id}--container`} className={containerCss}>
        <div className={containerInnerCss} ref={this.backgroundImageElementRef}>
          <div id={`${this.props.id}--root`} className={headerRootCss}>
            <div className={contentCss}>
              {this.props.children}
            </div>
          </div> 
        </div>
      </header>
    );
  }
}
HeaderTypeA.propTypes = {
  /** The alignment for the inner items of the header. By default, the header contents will be left aligned. */
  alignment: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  /** The background colour for the header. The default colour for the background is transparent. */
  backgroundColour: PropTypes.oneOf([ 'transparent', 'white', 'grey', 'yellow' ]),
  /** The background image to be displayed in the header. */
  backgroundImage: PropTypes.oneOfType([ PropTypes.node, PropTypes.string, PropTypes.object ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Switch to display an 8px top / upper border on the header. By default, no border is displayed on the header. */
  showTopBorder: PropTypes.bool,
  /** The colour at which the top / upper border is to be rendered (if enabled). The default colour for the border is black. */
  topBorderColour: PropTypes.oneOf([ 'black', 'grey', 'red' ]),
};
HeaderTypeA.defaultProps = {
  alignment: undefined,
  backgroundColour: undefined,
  backgroundImage: undefined,
  showTopBorder: false,
  topBorderColour: 'black',
};
export default HeaderTypeA;
