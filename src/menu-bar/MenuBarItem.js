/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-item.css';

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
    this.state = {
      isHidden: true,
//       containerId: undefined,
//       href: undefined,
//       id: undefined,
//       isDisabled: true,
    };
    this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
    // this.getHyperlinkDOMElement = this.getHyperlinkDOMElement.bind(this);
//     this.getSpanDOMElement = this.getSpanDOMElement.bind(this);
//     this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
//     this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
//     this.initialise = this.initialise.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsVisible = this.setIsVisible.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters for this component */
    if (this.state.isHidden === false) {
      this.setIsVisible();
    } else if (this.state.isHidden === true) {
      this.setIsHidden();
    }
    
//     const initId = this.props.id;
//     const initHref = this.props.href;
//     this.initialise(initId, initHref);

//     /* Auto handle whether all of the text content for the menu item can be rendered within its container */
//     this.handleTextContentHeight();
  }

  componentDidUpdate() {
    if (this.props.isHidden !== this.state.isHidden) {
      if (this.props.isHidden === false) {
        /* Mark the component as visible */
        this.setIsVisible();
      } else if (this.props.isHidden === true) {
        /* Mark the component as hidden */
        this.setIsHidden();
      }
    }
  }

  /**
   * Retrieves the menu bar items container element from the DOM
   * @returns {HTMLElement}
   */
  getContainerDOMElement() {
    return document.querySelector(`div[id="${this.props.id}--menu-bar-item"]`);
  }

  /**
   * Retrieves the link element from the DOM
   * @returns {HTMLElement}
   */
  // getHyperlinkDOMElement() {
  //   return document.querySelector(`a[id="${this.props.id}--menu-bar-item-hyperlink"]`);
  // }

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

  onClick(event) {
    if (this.state.isHidden === true) {
      event.preventDefault();
    }
  }

  /**
   * Sets the menu bar item as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the menu bar item is now hidden */
    this.setState({ isHidden: true });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Add the hidden class from the container element and then set its opacity so that it is now hidden */
    containerElement.style.opacity = 0;
    setTimeout(() => {
      /* Execute this after 250ms to give the opacity transition animation time to complete */
      containerElement.classList.add('hidden');
    }, 250);
  }

  /**
   * Sets the menu bar item as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the menu bar item is now visible */
    this.setState({ isHidden: false });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Remove the hidden class from the container element and then set its opacity so that it is now visible */
    containerElement.style.opacity = 1;
    setTimeout(() => {
      /* Execute this after 250ms to give the opacity transition animation time to complete */
      containerElement.classList.add('hidden');
    }, 250);
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.backgroundColour);

    /* Set the styling for the menu item link container element */
    let containerCss = 'menu-bar-item-container background-transparent menu-bar-common-transitions';
    if (this.props.addRightSideSpacing === true) {
      containerCss += ' menu-bar-item-container-right-side-spacing';
    }
    /* Set the styling for the internal hyperlink element */
    const hyperlinkCss = `menu-bar-item-hyperlink background-${backgroundColour} font-default font-${fontColour}`;

    /* Set the styling for the hyperlinks internal text content */
    const hyperlinkInnerContentCss = 'menu-bar-item-inner-content';

    return (
      <div aria-hidden={`${this.state.isHidden}`} className={containerCss} id={`${this.props.id}--menu-bar-item`}>
        <a className={hyperlinkCss} href={`${this.props.href}`} id={`${this.props.id}--menu-bar-item-hyperlink`} onClick={this.onClick} role="link">
          <span className={hyperlinkInnerContentCss}>Test Text</span>
        </a>
      </div>
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
  /** Optional right side spacing (margin) of 8px to be used when separating multiple menu bar item components. By default this spacing is disabled. */
  addRightSideSpacing: PropTypes.bool,
  /** The background colour for the menu bar item. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The menu bar items text content. */
  children: PropTypes.string,
  /** The URL to which the user will be redirected to after clicking on the menu bar item. */
  href: PropTypes.string.isRequired,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the menu bar item is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
};
export default MenuBarItem;

// On a mobile phone screen -> 328px to play with
// Menu items are 100px wide x 2 of them -> 128px remains
// Scroll buttons are 55px wide x 2 of them -> 10px remains

// Padding between menu bar items x 1 -> 10px remains (8px spacing between menu bar items)

// Padding remaining for scroll buttons -> 5px each side

// x + 8 + 100 + 8 + 100 + 8 + x
// 2x + 224 = 328
// 2x = 328 - 224
// 2x = 104
// x = 52 (Scroll Menu Bars)