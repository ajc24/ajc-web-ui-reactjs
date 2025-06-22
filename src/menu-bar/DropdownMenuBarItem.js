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

/* Set the external IDs which may be interacted with via mouse or keyboard events */
const containerCloseButtonId = '--close--dropdown-menu-bar-container';
const containerHyperlinkId = '--dropdown-menu-bar-container-item';
const dropdownMenuBarItemButtonId = '--button--dropdown-menu-bar-item';
const menuBarItemHyperlinkId = '--menu-bar-item-hyperlink';

/* CSS styling parameters */
const maximumMenuBarItemButtonHeight = 55;

/**
 * Dropdown Menu Bar Item component which is intended for use with the Menu Bar component. This component will render
 * a clickable menu bar item to the user. Clicking this item will open a dropdown menu container element which contains
 * all of the hyperlinks associated with the dropdown menu bar item. Everything has been designed to fit within the
 * boundaries of the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * 
 * By design only a single dropdown menu bar item can be selected at any one time, also only one dropdown menu bar container
 * element can be rendered at any one time.
 * 
 * All dropdown menu bar items and dropdown menu bar container hyperlinks are fully interactive via both mouse and keyboard.
 */
class DropdownMenuBarItem extends React.Component {
  /**
   * Initialise the Menu Bar Item component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      enableAutoFocus: false,
      isHidden: true,
      isSelected: false,
      top: 0,
      left: 0,
    };
    this.getArrowDOMElement = this.getArrowDOMElement.bind(this);
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    this.getTitleDOMElement = this.getTitleDOMElement.bind(this);
    this.getIdButtonDOMElement = this.getIdButtonDOMElement.bind(this);
    this.handleOnClickButtonSpan = this.handleOnClickButtonSpan.bind(this);
    this.handleOnClickDropdownMenuBarItem = this.handleOnClickDropdownMenuBarItem.bind(this);
    this.handleOnClickExternalElements = this.handleOnClickExternalElements.bind(this);
    this.handleOnKeyDownButton = this.handleOnKeyDownButton.bind(this);
    this.handleOnKeyDownExternalElements = this.handleOnKeyDownExternalElements.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
    this.setIsDeselected = this.setIsDeselected.bind(this);
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
    /* Watch for click events which can de-select the dropdown menu bar item and hide the container element */
    document.body.addEventListener('click', this.handleOnClickExternalElements);
    document.body.addEventListener('keydown', this.handleOnKeyDownExternalElements);
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
   * Since the span elements for the dropdown menu bar items button sit on top of the button, click events are
   * sometimes registered on the span elements and not the button, which can cause problems with the external elements
   * click handlers. Therefore explicitly redirect span element clicks to be button element clicks instead.
   * @param {Event} event 
   */
  handleOnClickButtonSpan(event) {
    event.preventDefault();
    const buttonElement = this.getButtonDOMElement();
    buttonElement.click();
  }

  /**
   * When the element is visible click events will mark the dropdown menu bar container element
   * as visible / hidden depending on the components selection status.
   * @param {event} event
   * @param {boolean} newEnableAutoFocus
   */
  handleOnClickDropdownMenuBarItem(event, newEnableAutoFocus = false) {
    event.preventDefault();
    if (this.state.isHidden === false) {
      if (this.state.isSelected === true) {
        this.setIsDeselected();
      } else if (this.state.isSelected === false) {
        /* Get the overall dimensions of the button element */
        const buttonElement = this.getButtonDOMElement();
        const buttonElementDimensions = buttonElement.getBoundingClientRect();

        /**
         * Retrieve the bottom and left positions of the button - these will act as the top and the left positions
         * of the dropdown menu bar container component. Add an extra pixel to the bottom position to ensure that
         * there is a nice decorative space between the menu bar item and the menu bar container
         */
        const bottom = parseInt(buttonElementDimensions.bottom, 10) + 1;
        const left = parseInt(buttonElementDimensions.left, 10);
        this.setState({
          enableAutoFocus: newEnableAutoFocus,
          isSelected: true,
          left: left,
          top: bottom,
        });
      }
    }
  }

  /**
   * Handles click events on external elements which can affect the selection and visibility of the dropdown menu bar item
   * and the dropdown menu bar container elements respectively.
   * @param {Event} event 
   */
  handleOnClickExternalElements(event) {
    const targetElementId = `${event.target.id}`;
    if (this.state.isSelected === true) {
      let isSelected = true;
      if (targetElementId.includes(dropdownMenuBarItemButtonId) === true && targetElementId !== this.getIdButtonDOMElement()) {
        isSelected = false;
        this.setIsDeselected();
      }
      if (isSelected === true && targetElementId.includes(containerCloseButtonId) === true) {
        isSelected = false;
        this.setIsDeselected();
      }
      if (isSelected === true && targetElementId.includes(containerHyperlinkId) === true) {
        isSelected = false;
        this.setIsDeselected();
      }
      if (isSelected === true && targetElementId.includes(menuBarItemHyperlinkId) === true) {
        isSelected = false;
        this.setIsDeselected();
      }
    }
  }

  /**
   * Handles key press events on the button - both space and enter key presses should activate the button and also ensure
   * that auto-focus is enabled on the container element.
   * @param {Event} event 
   */
  handleOnKeyDownButton(event) {
    const enableAutoFocus = true;
    if (event.key === 'Enter' || event.key === ' ') {
      /* If the enter key or the space key have been pressed, ensure a click event occurs with auto focus enabled */
      this.handleOnClickDropdownMenuBarItem(event, enableAutoFocus);
      this.handleOnMouseLeave();
    }
  }

  /**
   * Handles key press events on external elements which can affect the selection and visibility of the dropdown menu bar item
   * and the dropdown menu bar container elements respectively.
   * @param {Event} event 
   */
  handleOnKeyDownExternalElements(event) {
    let deselectedFromKeyboardEvent = true;

    /* Keyboard events are only processed if the menu bar item is selected and the container element is visible */
    if (this.state.isSelected === true) {
      /**
       * In all instances below the dropdown menu bar item will be marked as deselected and keyboard focus is returned to the dropdown menu item button element:
       * 
       * 1. An escape key press used to exit from and hide the container element.
       * 2. Pressing enter or space on the container elements close button to exit from and hide the container element.
       */
      if (
        (event.key === 'Escape') ||
        ((event.key === 'Enter' || event.key === ' ') && event.target.id.length > 0 && event.target.id.includes(containerCloseButtonId))
      ) {
        if (event.key === 'Enter') {
          /* Ensure the default behaviour for an Enter key press is disabled - otherwise the container may not be closed properly */
          event.preventDefault();
        }
        this.setIsDeselected(deselectedFromKeyboardEvent);
      }
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
    arrowElement.innerHTML = '&or;<br />&or;';
  }

  /**
   * Handles the height of the dropdown menu items title text content. The height of the text content
   * should not exceed the height of the button container element.
   */
  handleTextContentHeight() {
    /* Retrieve the title text span element from the DOM and determine its height and text content */
    const spanElement = this.getTitleDOMElement();
    let spanHeight = parseInt(spanElement.getBoundingClientRect().height, 10);
    let spanTextContent = spanElement.textContent;
    while (spanTextContent.length > 0 && spanHeight > maximumMenuBarItemButtonHeight) {
      /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
      spanTextContent = `${spanTextContent.substring(0, spanTextContent.length - 1).trim()}...`;

      /* Set the new text content string and determine the new height of the element */
      spanElement.textContent = spanTextContent;
      spanHeight = parseInt(spanElement.getBoundingClientRect().height, 10);
      if (spanHeight > maximumMenuBarItemButtonHeight) {
        /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
        spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
      }
    }
  }

  /**
   * Disables auto focus and ensures the dropdown menu item is no longer marked as selected
   * and the container element is no longer visible as a result
   * @param {boolean} deselectedFromKeyboardEvent
   */
  setIsDeselected(deselectedFromKeyboardEvent = false) {
    this.setState({
      enableAutoFocus: false,
      isSelected: false,
    }, () => {
      /**
       * If a keyboard event was used to deselect the menu item (which in turn hides the container element) then make sure
       * that focus is clearly returned to the dropdown menu item button again.
       */
      if (deselectedFromKeyboardEvent === true) {
        const buttonElement = this.getButtonDOMElement();
        buttonElement.focus();
      }
    });
  }

  /**
   * Sets the dropdown menu bar items button as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the dropdown menu bar items button is now hidden */
    this.setState({
      isHidden: true,
      isSelected: false,
    }, () => {
      /* Get the button element from the DOM */
      const buttonElement = this.getButtonDOMElement();

      /* Set the button elements opacity so that it is now hidden */
      buttonElement.style.opacity = 0;
    });
  }

  /**
   * Sets the dropdown menu bar items button as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the dropdown menu bar items button is now visible */
    this.setState({
      isHidden: false
    }, () => {
      /* Get the button element from the DOM */
      const buttonElement = this.getButtonDOMElement();

      /* Set the button elements opacity so that it is now visible */
      buttonElement.style.opacity = 1;
    });
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
        <button aria-label={`${this.props.dropdownMenuBarItemData.title} dropdown menu item.`} className={buttonCss}
          data-isselected={`${this.state.isSelected}`} id={this.getIdButtonDOMElement()} onBlur={this.handleOnMouseLeave} onClick={this.handleOnClickDropdownMenuBarItem}
          onFocus={this.handleOnMouseOver} onKeyDown={this.handleOnKeyDownButton} onMouseLeave={this.handleOnMouseLeave} onMouseOver={this.handleOnMouseOver}
          tabIndex={this.state.isHidden === true ? '-1' : '0'} title={`${this.props.dropdownMenuBarItemData.title}`}>
            <span onClick={this.handleOnClickButtonSpan} className={buttonTitleCss}>
              {this.props.dropdownMenuBarItemData.title}
            </span>
            <span onClick={this.handleOnClickButtonSpan} className={buttonArrowCss} />
        </button>
        <DropdownMenuBarContainer backgroundColour={this.props.backgroundColour} dropdownMenuBarItemsList={this.props.dropdownMenuBarItemData.dropdownMenuBarItemsList}
          enableAutoFocus={this.state.enableAutoFocus} id={this.props.id} isHidden={!this.state.isSelected} left={this.state.left} top={this.state.top} />
      </React.Fragment>
    );
  }
}
DropdownMenuBarItem.propTypes = {
  /** Optional right side spacing (margin) of 8px to be used when separating multiple dropdown menu bar item components. By default this spacing is disabled. */
  addRightSideSpacing: PropTypes.bool,
  /** The background colour for the dropdown menu bar item. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
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
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the dropdown menu bar item is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
};
export default DropdownMenuBarItem;
