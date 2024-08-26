/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import { storybookCssClasses } from '../data/storybook';
import '../../css/header.css';
import '../../css/sizing.css'

class Header extends React.Component {
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
    /* If we are rendering on Storybook, remove the Storybook classes which will affect the width of the component */
    if (document.body.classList.contains(storybookCssClasses.sbShowMain) === true) {
      document.body.classList.remove(storybookCssClasses.sbShowMain);
    }
    if (document.body.classList.contains(storybookCssClasses.sbMainPadded) === true) {
      document.body.classList.remove(storybookCssClasses.sbMainPadded);
    }

    /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */
    if (document.body.classList.contains('ajc-body-default') === false) {
      document.body.classList.add('ajc-body-default');
      document.activeElement.blur();
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
    return (
      <header role="banner" id={`${this.props.id}-container`} className={containerCss}>
        <div className={containerInnerCss} ref={this.backgroundImageElementRef}>
          <div id={`${this.props.id}-root`} className={headerRootCss}>
            Hello World
          </div> 
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Switch to display an 8px top / upper border on the header. */
  showTopBorder: PropTypes.bool,
  /** The colour at which the top / upper border is to be rendered (if enabled). */
  topBorderColour: PropTypes.oneOf([ 'black', 'grey', 'red' ]),
};
Header.defaultProps = {
  showTopBorder: false,
  topBorderColour: 'black',
};
export default Header;

// import React from 'react';
// import PropTypes from 'prop-types';
// import '../../../css/background.css';
// import '../../../css/flex.css';
// import '../../../css/font.css';
// import '../../../css/header.css';
// import '../../../css/width.css';

// /**
//  * Header section root component for a web page template.
//  */
// class Header extends React.Component {
//   constructor(props) {
//     super(props);

//     /* Create the references for this component */
//     this.backgroundImageElementRef = React.createRef();
//   }

//   componentDidMount() {
//     if (this.props.renderBackgroundImage === true && this.props.backgroundImageData !== undefined) {
//       this.backgroundImageElementRef.current.style.backgroundImage = `url(${this.props.backgroundImageData})`;
//     }
//   }

//   render() {
//     let headerRootCss = 'ajc-flex-row ajc-flex-justify-center ajc-width-4k';
//     if (this.props.renderTopBorder === true) {
//       if (this.props.topBorderColour === 'red') {
//         /* Set the top border colour as red */
//         headerRootCss += ' ajc-header-border-red';
//       } else {
//         /* By default the header top border is rendered in grey */
//         headerRootCss += ' ajc-header-border-grey';
//       }
//     }
//     if (this.props.renderBackgroundImage === false) {
//       /* No image is to be rendered - set the relevant header background colour */
//       if (this.props.backgroundColour === 'white') {
//         headerRootCss += ' ajc-background-white';
//       } else if (this.props.backgroundColour === 'grey') {
//         headerRootCss += ' ajc-background-grey-1';
//       } else if (this.props.backgroundColour === 'yellow') {
//         headerRootCss += ' ajc-background-yellow';
//       } else {
//         headerRootCss += ' ajc-background-transparent';
//       }
//     } else {
//       /* When a background image is to be rendered, ensure a transparent background is displayed */
//       headerRootCss += ' ajc-background-transparent';
//     }
//     const headerOuterChildCss = 'ajc-flex-row ajc-flex-justify-center ajc-width-full-hd';
//     const headerInnerChildCss = 'ajc-flex-row ajc-flex-justify-left ajc-header-content ajc-width-hd';
//     const headerContentCss = 'ajc-flex-row ajc-flex-justify-left ajc-width-hd-with-padding ajc-text-black ajc-font-default';
//     return (
//       <header role="banner" id={`${this.props.id}-root`} className={headerRootCss}>
//         <div className={headerOuterChildCss} ref={this.backgroundImageElementRef}>
//           <div className={headerInnerChildCss}>
//             <div id={this.props.id} className={headerContentCss}>
//               {this.props.children}
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }
// Header.propTypes = {
//   /** The background colour of the header panel. By default the background is transparent. */
//   backgroundColour: PropTypes.oneOf([ 'transparent', 'white', 'grey', 'yellow' ]),
//   /** The image to be displayed as the header background. */
//   backgroundImageData: PropTypes.oneOfType([ PropTypes.node, PropTypes.string, PropTypes.object ]),
//   /** The child components to be rendered within the component. By default no children elements are rendered. */
//   children: PropTypes.node,
//   /** The header components unique identifier. */
//   id: PropTypes.string.isRequired,
//   /** Switch to render whether the header background image is displayed or not. By default no background image is rendered. */
//   renderBackgroundImage: PropTypes.bool,
//   /** Switch to render whether the top border is displayed or not. By default no top border is rendered. */
//   renderTopBorder: PropTypes.bool,
//   /** The colour of the top border. */
//   topBorderColour: PropTypes.oneOf([ 'grey', 'red' ]),
// };
// Header.defaultProps = {
//   backgroundColour: 'transparent',
//   backgroundImageData: undefined,
//   children: undefined,
//   renderBackgroundImage: false,
//   renderTopBorder: false,
//   topBorderColour: 'grey',
// };
// export default Header;
