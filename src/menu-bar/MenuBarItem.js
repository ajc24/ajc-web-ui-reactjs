/**
 * Developed by Anthony Cox in 2025
 */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { getColourCombination } from '../data/colour-combinations';
// import '../css/common.css';
// import './css/menu-bar-common.css';
// import './css/menu-bar-item-link.css';

// const maximumMenuItemLinkHeight = 50;

/**
 * Menu Bar Item hyperlink component intended for use with the Menu Bar component. This component allows a user to click the menu item or
 * interact with the item via the keyboard (spacebar and enter key presses supported) and from there, will be redirected to another page
 * in the web application.
 */
class MenuBarItem extends React.Component {
  /**
   * Initialise the Menu Bar Item component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
//     this.state = {
//       containerId: undefined,
//       href: undefined,
//       id: undefined,
//       isDisabled: true,
//     };
//     this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
//     this.getLinkDOMElement = this.getLinkDOMElement.bind(this);
//     this.getSpanDOMElement = this.getSpanDOMElement.bind(this);
//     this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
//     this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
//     this.initialise = this.initialise.bind(this);
//     this.setIsDisabled = this.setIsDisabled.bind(this);
  }

//   componentDidMount() {
//     /* Initialise all of the key parameters for this component*/
//     const initId = this.props.id;
//     const initHref = this.props.href;
//     this.initialise(initId, initHref);

//     /* Auto handle whether all of the text content for the menu item can be rendered within its container */
//     this.handleTextContentHeight();
//   }

//   /**
//    * Retrieves the links container element from the DOM
//    * @returns {HTMLElement}
//    */
//   getContainerDOMElement() {
//     return document.querySelector(`div[id="${this.state.containerId}"]`);
//   }

//   /**
//    * Retrieves the link element from the DOM
//    * @returns {HTMLElement}
//    */
//   getLinkDOMElement() {
//     return document.querySelector(`a[id="${this.state.id}"]`);
//   }

//   /**
//    * Retrieves the links span element from the DOM
//    * @returns {HTMLElement}
//    */
//   getSpanDOMElement() {
//     return document.querySelector(`a[id="${this.state.id}"] > span`);
//   }

//   /**
//    * Handle key down events on the hyperlink
//    * @param {Event} event 
//    */
//   handleOnKeyDown(event) {
//     if (event.key === ' ') {
//       /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
//       event.target.click();
//     }
//   }

//   /**
//    * Handles the height of the menu item link text content. The height of the text content
//    * should not exceed the height of the item container itself.
//    */
//   handleTextContentHeight() {
//     if (this.state.isDisabled === false) {
//       /* Retrieve the span element from the DOM and determine its height and text content */
//       const spanElement = this.getSpanDOMElement();
//       let spanHeight = spanElement.getBoundingClientRect().height;
//       let spanTextContent = spanElement.textContent;
//       while (spanTextContent.length > 0 && spanHeight > maximumMenuItemLinkHeight) {
//         /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
//         spanTextContent = `${spanTextContent.substring(0, spanTextContent.length - 1).trim()}...`;

//         /* Set the new text content string and determine the new height of the element */
//         spanElement.textContent = spanTextContent;
//         spanHeight = spanElement.getBoundingClientRect().height;
//         if (spanHeight > maximumMenuItemLinkHeight) {
//           /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
//           spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
//         }
//       }
//     }
//   }

//   /**
//    * Initialises this component with all relevant state values
//    * @param {string} initId
//    * @param {string} initHref
//    */
//   initialise(initId = 'default', initHref = '#') {
//     const initContainerId = `${initId}--menu-item-link-container`;
//     this.setState({
//       containerId: initContainerId,
//       id: `${initId}--menu-item-link`,
//       href: initHref,
//     });
//   }

//   /**
//    * Sets the link as enabled or disabled
//    * @param {boolean} newIsDisabled 
//    */
//   setIsDisabled(newIsDisabled) {
//     /* Retrieve all the relevant DOM elements */
//     const containerElement = this.getContainerDOMElement();
//     const linkElement = this.getLinkDOMElement();

//     if (newIsDisabled === false) {
//       /* The component is currently disabled and is being enabled - unhide the container element first */
//       containerElement.classList.remove('hidden');

//       /* Now set the link element to appear */
//       linkElement.style.opacity = 1;
//     } else {
//       /* The component is being marked as disabled - hide the link element first and then hide the container */
//       linkElement.style.opacity = 0;

//       /* Now hide the container element only after the opacity transition for the menu item link has finished */
//       setTimeout(() => {
//         containerElement.classList.add('hidden');
//       }, 250);
//     }
//   }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.menuItemColour);

//     /* Set the styling for the menu item link container element */
//     let containerCss = `menu-item-link-container`;
//     (this.props.rightSideSpacing !== undefined && this.props.rightSideSpacing === false)
//       ? containerCss += ' menu-item-link-container-right-side-spacing-off'
//       : containerCss += ' menu-item-link-container-right-side-spacing-on';

//     /* Set the styling for the link element */
//     const linkCss = `menu-item-link background-${backgroundColour} menu-item-link-border-${backgroundColour} font-default font-${fontColour} menu-bar-common-transitions`;

    return (
//       <div aria-hidden={`${this.state.isDisabled}`} className={containerCss} id={`${this.state.containerId}`}>
//         <a aria-label={this.props.children} className={linkCss} href={`${this.state.href}`} id={`${this.state.id}`} onKeyDown={this.handleOnKeyDown} role="link"
//           tabIndex={this.state.isDisabled === true ? '-1' : '0'}>
//             <span>{this.props.children}</span>
//         </a>
//       </div>
    );
  }
}
MenuBarItem.propTypes = {
//   /** The menu item links text content. */
//   children: PropTypes.string,
//   /** The URL to which the user will be redirected to after clicking on the link. */
//   href: PropTypes.string,
//   /** The unique identifier for this component. */
//   id: PropTypes.string,
//   /** Sets whether the link is enabled or disabled. Is set to disabled by default until specified otherwise. */
//   isDisabled: PropTypes.bool,
//   /** The background colour for the menu item link. The default colour for the background is white. */
//   menuItemColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
//   /** Optional right side spacing (margin) of 4px to be used when separating multiple menu item link components. By default this spacing is enabled. */
//   rightSideSpacing: PropTypes.bool,
};
export default MenuBarItem;
