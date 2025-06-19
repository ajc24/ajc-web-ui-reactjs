/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuBarContainer from './DropdownMenuBarContainer';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-dropdown-item.css';
import './css/menu-bar-item.css';


class DropdownMenuBarItem extends React.Component {
  /**
   * Initialise the Menu Bar Item component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      isSelected: false,
    };
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    // this.getSpanDOMElement = this.getSpanDOMElement.bind(this);
    this.getIdButtonDOMElement = this.getIdButtonDOMElement.bind(this);
    this.handleOnClickDropdownMenuBarItem = this.handleOnClickDropdownMenuBarItem.bind(this);
    // this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    // this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    // this.setIsSelected = this.setIsSelected(this);
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
   * Retrieves the dropdown menu bar items button element from the DOM
   * @returns {HTMLElement}
   */
  getButtonDOMElement() {
    return document.querySelector(`button[id="${this.getIdButtonDOMElement()}"]`);
  }

  /**
   * Retrieves the ID for the dropdown menu bar items button DOM element
   * @returns {string}
   */
  getIdButtonDOMElement() {
    return `${this.props.dropdownMenuBarItemData.id}--${this.props.backgroundColour || 'white'}--button--dropdown-menu-bar-item`;
  }

  /**
   * Retrieves the links span element from the DOM
   * @returns {HTMLElement}
   */
  // getSpanDOMElement() {
  //   return document.querySelector(`div[id="${this.props.id}--menu-bar-item"] > a > span`);
  // }

  /**
   * When the element is visible click events will mark the dropdown menu bar container element
   * as visible / hidden depending on the components selection status.
   * @param {event} event
   */
  handleOnClickDropdownMenuBarItem(event) {
    event.preventDefault();
    if (this.state.isHidden === false) {
      if (this.state.isSelected === false) {
        const buttonElement = this.getButtonDOMElement();
        const buttonElementDimensions = buttonElement.getBoundingClientRect();
        const top = buttonElementDimensions.top;
        const left = buttonElementDimensions.left;

      }
      // this.setState({
      //   isSelected: true,
      // });
    }
  }

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
   * Sets the dropdown menu bar items button as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the dropdown menu bar items button is now hidden */
    this.setState({
      isHidden: true,
      isSelected: false,
    });

    /* Get the button element from the DOM */
    const buttonElement = this.getButtonDOMElement();

    /* Set the button elements opacity so that it is now hidden */
    buttonElement.style.opacity = 0;
  }

  /**
   * Sets the dropdown menu bar items button as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the dropdown menu bar items button is now visible */
    this.setState({ isHidden: false });

    /* Get the button element from the DOM */
    const buttonElement = this.getButtonDOMElement();

    /* Set the button elements opacity so that it is now visible */
    buttonElement.style.opacity = 1;
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.backgroundColour);

    /* Set the styling for the dropdown menu bar items button element */
    let buttonCss = `dropdown-menu-bar-button menu-bar-common-transitions background-${backgroundColour} font-default font-${fontColour}`;
    if (this.props.addRightSideSpacing === true) {
      buttonCss += ' menu-bar-item-container-right-side-spacing';
    }
    const buttonTitleCss = 'dropdown-menu-bar-button-title';
    const buttonArrowCss = 'dropdown-menu-bar-button-arrow';

    // /* Set the styling for the internal hyperlink element */
    // const hyperlinkCss = `menu-bar-item-hyperlink background-${backgroundColour} font-default font-${fontColour}`;

    // /* Set the styling for the hyperlinks internal text content */
    // const hyperlinkInnerContentCss = 'menu-bar-item-inner-content';

    return (
      <React.Fragment>
        <button className={buttonCss} id={this.getIdButtonDOMElement()}>
          <span id={`${this.props.dropdownMenuBarItemData.id}--${this.props.backgroundColour || 'white'}--title--dropdown-menu-bar-item`} className={buttonTitleCss}>
            {this.props.dropdownMenuBarItemData.title}
          </span>
          <span className={buttonArrowCss}>
            &darr;
          </span>
        </button>
      </React.Fragment>

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
DropdownMenuBarItem.propTypes = {
  /** Optional right side spacing (margin) of 8px to be used when separating multiple dropdown menu bar item components. By default this spacing is disabled. */
  addRightSideSpacing: PropTypes.bool,
  /** The background colour for the dropdown menu bar item. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The dropdown menu bar items text content. */
  children: PropTypes.string,
  dropdownMenuBarItemData: PropTypes.shape({
    dropdownMenuBarItemsList: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  /** Sets whether the dropdown menu bar item is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
};
export default DropdownMenuBarItem;
