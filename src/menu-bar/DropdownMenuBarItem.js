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

const maximumMenuBarItemButtonHeight = 55;

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
    this.getArrowDOMElement = this.getArrowDOMElement.bind(this);
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    this.getTitleDOMElement = this.getTitleDOMElement.bind(this);
    this.getIdButtonDOMElement = this.getIdButtonDOMElement.bind(this);
    this.handleOnClickDropdownMenuBarItem = this.handleOnClickDropdownMenuBarItem.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsVisible = this.setIsVisible.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters for this component */
    if (this.state.isHidden === false) {
      this.setIsVisible();
      this.handleTextContentHeight();
    } else if (this.state.isHidden === true) {
      this.setIsHidden();
    }
  }

  componentDidUpdate() {
    if (this.props.isHidden !== this.state.isHidden) {
      if (this.props.isHidden === false) {
        /* Mark the component as visible */
        this.setIsVisible();
        this.handleTextContentHeight();
      } else if (this.props.isHidden === true) {
        /* Mark the component as hidden */
        this.setIsHidden();
      }
    }
  }

  /**
   * Retrieves the dropdown menu bar items arrow element from the DOM
   * @returns {HTMLElement}
   */
  getArrowDOMElement() {
    return document.querySelector(`button[id="${this.getIdButtonDOMElement()}"] > span[class="dropdown-menu-bar-button-arrow"]`);
  }

  /**
   * Retrieves the dropdown menu bar items button element from the DOM
   * @returns {HTMLElement}
   */
  getButtonDOMElement() {
    return document.querySelector(`button[id="${this.getIdButtonDOMElement()}"]`);
  }

  /**
   * Retrieves the dropdown menu bar items title element from the DOM
   * @returns {HTMLElement}
   */
  getTitleDOMElement() {
    return document.querySelector(`button[id="${this.getIdButtonDOMElement()}"] > span[class="dropdown-menu-bar-button-title"]`);
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
    alert('clicked');
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
   * Resets the CSS styling hover changes for the title and arrow elements when the user
   * moves the mouse pointer away from the element again
   */
  handleOnMouseLeave() {
    const titleElement = this.getTitleDOMElement();
    const arrowElement = this.getArrowDOMElement();

    /* Reset the padding for the title element */
    titleElement.style.paddingLeft = '5px';

    /* Reset the width of the arrow element and remove the arrow icon */
    arrowElement.style.minWidth = '5px';
    arrowElement.style.width = '5px';
    arrowElement.innerHTML = '';
  }

  /**
   * When the user hovers over the title and arrow elements, change the styling to
   * display the arrow icon by altering the CSS styling of both elements.
   */
  handleOnMouseOver() {
    const titleElement = this.getTitleDOMElement();
    const arrowElement = this.getArrowDOMElement();

    /* Remove the padding from the title element */
    titleElement.style.paddingLeft = '0px';

    /* Increase the width of the arrow element and render the arrow icon */
    arrowElement.style.minWidth = '10px';
    arrowElement.style.width = '10px';
    arrowElement.innerHTML = '&darr;';
  }

  /**
   * Handles the height of the dropdown menu items title text content. The height of the text content
   * should not exceed the height of the button container element.
   */
  handleTextContentHeight() {
    /* Retrieve the title text span element from the DOM and determine its height and text content */
    const spanElement = this.getTitleDOMElement();
    let spanHeight = spanElement.getBoundingClientRect().height;
    let spanTextContent = spanElement.textContent;
    while (spanTextContent.length > 0 && spanHeight > maximumMenuBarItemButtonHeight) {
      /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
      spanTextContent = `${spanTextContent.substring(0, spanTextContent.length - 1).trim()}...`;

      /* Set the new text content string and determine the new height of the element */
      spanElement.textContent = spanTextContent;
      spanHeight = spanElement.getBoundingClientRect().height;
      if (spanHeight > maximumMenuBarItemButtonHeight) {
        /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
        spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
      }
    }
  }

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
    /* Set the styling for the button and arrow elements */
    const buttonTitleCss = 'dropdown-menu-bar-button-title';
    const buttonArrowCss = 'dropdown-menu-bar-button-arrow';

    return (
      <React.Fragment>
        <button className={buttonCss} id={this.getIdButtonDOMElement()} onBlur={this.handleOnMouseLeave} onClick={this.handleOnClickDropdownMenuBarItem}
          onFocus={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} onMouseOver={this.handleOnMouseOver} tabIndex={this.state.isHidden === true ? '-1' : '0'}>
            <span className={buttonTitleCss}>
              {this.props.dropdownMenuBarItemData.title}
            </span>
            <span className={buttonArrowCss} />
        </button>
      </React.Fragment>
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
  /** The dropdown menu bar item data used to render the menu bar item and the links in the dropdown menu bar container element. */
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
