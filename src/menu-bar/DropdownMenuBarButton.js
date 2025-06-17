/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-dropdown-button.css';
import './css/menu-bar-item.css';


class DropdownMenuBarButton extends React.Component {
  /**
   * Initialise the Menu Bar Item component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    // this.getSpanDOMElement = this.getSpanDOMElement.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
    // this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    // this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsVisible = this.setIsVisible.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters for this component */
    if (this.state.isHidden === false) {
      this.setIsVisible();
      // this.handleTextContentHeight();
    } else if (this.state.isHidden === true) {
      this.setIsHidden();
    }
  }

  componentDidUpdate() {
    if (this.props.isHidden !== this.state.isHidden) {
      if (this.props.isHidden === false) {
        /* Mark the component as visible */
        this.setIsVisible();
        // this.handleTextContentHeight();
      } else if (this.props.isHidden === true) {
        /* Mark the component as hidden */
        this.setIsHidden();
      }
    }
  }

  /**
   * Retrieves the dropdown menu bar button element from the DOM
   * @returns {HTMLElement}
   */
  getButtonDOMElement() {
    return document.querySelector(`button[id="${this.props.id}--dropdown-menu-bar-button"]`);
  }

  /**
   * Retrieves the links span element from the DOM
   * @returns {HTMLElement}
   */
  // getSpanDOMElement() {
  //   return document.querySelector(`div[id="${this.props.id}--menu-bar-item"] > a > span`);
  // }

  /**
   * Ensures onclick events are disabled when the element is marked as hidden
   * @param {event} event
   */
  // handleOnClick(event) {
  //   if (this.state.isHidden === true) {
  //     event.preventDefault();
  //   }
  // }

  /**
   * Handle key down events on the hyperlink
   * @param {Event} event 
   */
  // handleOnKeyDown(event) {
  //   if (event.key === ' ') {
  //     /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
  //     event.target.click();
  //   }
  // }

  /**
   * Handles the height of the menu item link text content. The height of the text content
   * should not exceed the height of the item container itself.
   */
  // handleTextContentHeight() {
  //   /* Retrieve the span element from the DOM and determine its height and text content */
  //   const spanElement = this.getSpanDOMElement();
  //   let spanHeight = spanElement.getBoundingClientRect().height;
  //   let spanTextContent = spanElement.textContent;
  //   while (spanTextContent.length > 0 && spanHeight > maximumMenuItemLinkHeight) {
  //     /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
  //     spanTextContent = `${spanTextContent.substring(0, spanTextContent.length - 1).trim()}...`;

  //     /* Set the new text content string and determine the new height of the element */
  //     spanElement.textContent = spanTextContent;
  //     spanHeight = spanElement.getBoundingClientRect().height;
  //     if (spanHeight > maximumMenuItemLinkHeight) {
  //       /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
  //       spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
  //     }
  //   }
  // }

  /**
   * Sets the dropdown menu bar button as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the dropdown menu bar button is now hidden */
    this.setState({ isHidden: true });

    /* Get the button element from the DOM */
    const buttonElement = this.getButtonDOMElement();

    /* Set the button elements opacity so that it is now hidden */
    buttonElement.style.opacity = 0;
  }

  /**
   * Sets thedropdown menu bar button as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the dropdown menu bar button is now visible */
    this.setState({ isHidden: false });

    /* Get the button element from the DOM */
    const buttonElement = this.getButtonDOMElement();

    /* Set the button elements opacity so that it is now visible */
    buttonElement.style.opacity = 1;
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.backgroundColour);

    /* Set the styling for the menu bar item container element */
    let containerCss = `dropdown-menu-bar-button menu-bar-common-transitions background-${backgroundColour} font-default font-${fontColour}`;
    if (this.props.addRightSideSpacing === true) {
      containerCss += ' menu-bar-item-container-right-side-spacing';
    }
    // /* Set the styling for the internal hyperlink element */
    // const hyperlinkCss = `menu-bar-item-hyperlink background-${backgroundColour} font-default font-${fontColour}`;

    // /* Set the styling for the hyperlinks internal text content */
    // const hyperlinkInnerContentCss = 'menu-bar-item-inner-content';

    return (
      <button className={containerCss} id={`${this.props.id}--dropdown-menu-bar-button`}>
        Test
      </button>


      // <div className={containerCss} id={`${this.props.id}--menu-bar-item`}>
      //   <a aria-hidden={`${this.state.isHidden}`} aria-label={this.props.children} className={hyperlinkCss} href={`${this.props.href}`} 
      //     id={`${this.props.id}--menu-bar-item-hyperlink`} onClick={this.handleOnClick} onKeyDown={this.handleOnKeyDown} role="link"
      //     tabIndex={this.state.isHidden === true ? '-1' : '0'} title={this.props.children}>
      //       <span className={hyperlinkInnerContentCss}>{this.props.children}</span>
      //   </a>
      // </div>
    );
  }
}
DropdownMenuBarButton.propTypes = {
  /** Optional right side spacing (margin) of 8px to be used when separating multiple dropdown menu bar button components. By default this spacing is disabled. */
  addRightSideSpacing: PropTypes.bool,
  /** The background colour for the dropdown menu bar button. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  // /** The menu bar items text content. */
  // children: PropTypes.string,
  // /** The URL to which the user will be redirected to after clicking on the menu bar item. */
  // href: PropTypes.string.isRequired,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the dropdown menu bar button is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
};
export default DropdownMenuBarButton;
