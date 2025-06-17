/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-dropdown-container.css';

const containerMaximumWidth = 328;
const dropdownHyperlinkContainerCss = 'dropdown-menu-bar-container-row-hyperlink-container';
const hyperlinkArrowSpanWidth = 25;
const maximumHyperlinkTitleWidth = 310;
const rightmostScreenPadding = 16;

/**
 * Dropdown Menu Bar Container component which is used to render the hyperlinks associated with a dropdown menu item.
 * This component is intended for use with the Menu Bar component. It has been designed to fit within the boundaries
 * of the most commonly used mobile screen sizes (360x800).
 * 
 * In the case that a hyperlinks text content exceeds the width of the container, the text content will be truncated
 * by one character at a time until the text content successfully fits.
 * 
 * By enabling auto-focus this component is also fully supported by keyboard controls without the user having to first
 * press the Tab key to apply focus. Once the container gains focus, it cannot lose focus again until the user closes
 * the container using the close icon or clicks to select a hyperlink. Hyperlinks can also be selected using the
 * enter key and / or space key.
 */
class DropdownMenuBarContainer extends React.Component {
  /**
   * Constructor for the Dropdown Menu Bar Container component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      left: 0,
      top: 0,
    };
    this.getCloseButtonDOMElement = this.getCloseButtonDOMElement.bind(this);
    this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
    this.getFirstHyperlinkDOMElement = this.getFirstHyperlinkDOMElement.bind(this);
    this.getIdCloseButtonDOMElement = this.getIdCloseButtonDOMElement.bind(this);
    this.getIdContainerDOMElement = this.getIdContainerDOMElement.bind(this);
    this.getLastHyperlinkDOMElement = this.getLastHyperlinkDOMElement.bind(this);
    this.handleHyperlinkTitleWidths = this.handleHyperlinkTitleWidths.bind(this);
    this.handleOnClickClose = this.handleOnClickClose.bind(this);
    this.handleOnClickHyperlink = this.handleOnClickHyperlink.bind(this);
    this.handleOnKeyDownCloseButton = this.handleOnKeyDownCloseButton.bind(this);
    this.handleOnKeyDownHyperlink = this.handleOnKeyDownHyperlink.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsVisible = this.setIsVisible.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    /* Set the initial position of the container and ensure all hyperlink title text content fits within the container width */
    this.setPosition(this.props.top || 0, this.props.left || 0);
    this.handleHyperlinkTitleWidths();
  
    if (this.props.isHidden !== undefined && this.props.isHidden !== this.state.isHidden) {
      if (this.props.isHidden === false) {
        /* Mark the component as visible */
        this.setIsVisible();
      } else if (this.props.isHidden === true) {
        /* Mark the component as hidden */
        this.setIsHidden();
      }
    } else {
      /* By default - ensure the container is set to hidden */
      this.setIsHidden();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isHidden && prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
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
   * Retrieves the close button for the dropdown menu bar container element from the DOM
   * @returns {HTMLElement}
   */
  getCloseButtonDOMElement() {
    return document.querySelector(`button[id="${this.getIdCloseButtonDOMElement()}"]`);
  }

  /**
   * Retrieves the dropdown menu bar container element from the DOM
   * @returns {HTMLElement}
   */
  getContainerDOMElement() {
    return document.querySelector(`div[id="${this.getIdContainerDOMElement()}"]`);
  }

  /**
   * Retrieves the first available hyperlink element from the DOM
   * @returns {HTMLElement}
   */
  getFirstHyperlinkDOMElement() {
    return document.querySelectorAll(`div[id="${this.getIdContainerDOMElement()}"] > div[class="${dropdownHyperlinkContainerCss}"] > a`)[0];
  }

  /**
   * Retrieves the ID for the close button DOM element
   * @returns {string}
   */
  getIdCloseButtonDOMElement() {
    return `${this.props.id}--${this.props.backgroundColour || 'white'}--close--dropdown-menu-bar-container`;
  }

  /**
   * Retrieves the ID for the container DOM element
   * @returns {string}
   */
  getIdContainerDOMElement() {
    return `${this.props.id}--${this.props.backgroundColour || 'white'}--dropdown-menu-bar-container`;
  }

  /**
   * Retrieves the ID of the last available hyperlink in the container
   * @returns {string}
   */
  getIdLastHyperlinkDOMElement() {
    const lastHyperlinkElement = this.getLastHyperlinkDOMElement();
    return lastHyperlinkElement.getAttribute('id');
  }

  /**
   * Retrieves the last available hyperlink element from the DOM
   * @returns {HTMLElement}
   */
  getLastHyperlinkDOMElement() {
    const allHyperlinkElements = document.querySelectorAll(`div[id="${this.getIdContainerDOMElement()}"] > div[class="${dropdownHyperlinkContainerCss}"] > a`);
    return allHyperlinkElements[allHyperlinkElements.length - 1];
  }

  /**
   * Truncates hyperlink title text if required so that it fits within the width of the container
   */
  handleHyperlinkTitleWidths() {
    const allHyperlinkTitleElements = document.querySelectorAll('span[id$="--title--dropdown-menu-bar-container-item"] > span:nth-child(1)');
    for (let index = 0; index < allHyperlinkTitleElements.length; index += 1) {
      /* Determine the initial width of the text content + the arrow icon */
      const hyperlinkTitleElement = allHyperlinkTitleElements[index];
      let hyperlinkTitleWidth = hyperlinkTitleElement.getBoundingClientRect().width;
      while ((hyperlinkTitleWidth + hyperlinkArrowSpanWidth) > maximumHyperlinkTitleWidth) {
        /* Reduce the hyperlink title text content character by character until it fits perfectly within the width of the container */
        let currentTitle = hyperlinkTitleElement.textContent;
        currentTitle = currentTitle.replace('...', '').trim();
        currentTitle = currentTitle.substring(0, currentTitle.length - 1).trim();
        currentTitle = `${currentTitle}...`;
        
        /* Set the new text content now that we have reduced the content by one character */
        hyperlinkTitleElement.textContent = currentTitle;

        /* Determine the new width of the text content now that we have truncated the text */
        hyperlinkTitleWidth = hyperlinkTitleElement.getBoundingClientRect().width;
      }
    }
  }

  /**
   * Handles click events on the dropdown menu bar containers close button
   * @param {Event} event 
   */
  handleOnClickClose(event) {
    event.preventDefault();
    this.setIsHidden();
  }

  /**
   * Ensures that the container is hidden if the user selects one of the hyperlinks
   */
  handleOnClickHyperlink() {
    this.setIsHidden();
  }

  /**
   * Handle key down events on the close button
   * @param {Event} event 
   */
  handleOnKeyDownCloseButton(event) {
    if (event.shiftKey === true && event.key === 'Tab') {
      /* If shift + tab have been pressed on the close button element, cycle focus back to the last hyperlink element */
      if (event.target.id === this.getIdCloseButtonDOMElement()) {
        event.preventDefault();
        const lastHyperlinkElement = this.getLastHyperlinkDOMElement();
        lastHyperlinkElement.focus();
      }
    } else if (event.key === 'Escape') {
      /* Hide the container element if the escape key is pressed */
      this.setIsHidden();
    }
  }

  /**
   * Handle key down events on the hyperlink
   * @param {Event} event 
   */
  handleOnKeyDownHyperlink(event) {
    if (event.key === ' ') {
      /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
      event.target.click();
    } else if (event.shiftKey === false && event.key === 'Tab') {
      /* If the tab key has been pressed on the last hyperlink element, cycle focus back to the close button element */
      if (event.target.id === this.getIdLastHyperlinkDOMElement()) {
        event.preventDefault();
        const closeButtonElement = this.getCloseButtonDOMElement();
        closeButtonElement.focus();
      }
    } else if (event.key === 'Escape') {
      /* Hide the container element if the escape key is pressed */
      this.setIsHidden();
    }
  }

  /**
   * Sets the dropdown menu bar container as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the dropdown menu bar container is now hidden */
    this.setState({ isHidden: true });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Set the container elements opacity so that it is now hidden */
    if (containerElement !== null) {
      containerElement.style.visibility = 'hidden';
    }
  }

  /**
   * Sets the dropdown menu bar container as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the dropdown menu bar container is now visible */
    this.setState({ isHidden: false });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Set the container elements opacity so that it is now visible */
    if (containerElement !== null) {
      containerElement.style.visibility = 'visible';
    }

    /* Auto focus on the first available hyperlink in the container element if required */
    if (this.props.enableAutoFocus === true) {
      this.getFirstHyperlinkDOMElement().focus();
    }
  }

  /**
   * Sets the position for the container to be rendered at
   * @param {string} newTop 
   * @param {string} newLeft 
   */
  setPosition(newTop, newLeft) {
    const rightmostScreenPos = window.innerWidth;
    const rightmostContainerPos = newLeft + containerMaximumWidth + rightmostScreenPadding;
    
    let finalLeft = newLeft;
    if (rightmostContainerPos > rightmostScreenPos) {
      const exceedsRightmostScreenPosBy = rightmostContainerPos - rightmostScreenPos;
      finalLeft -= exceedsRightmostScreenPosBy;
    }
    this.setState({
      left: finalLeft,
      top: newTop,
    }, () => {
      const containerElement = this.getContainerDOMElement();
      containerElement.style.top = `${this.state.top}px`;
      containerElement.style.left = `${this.state.left}px`;
    });
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.backgroundColour);

    /* Set the styling for the container element */
    const containerCss = `dropdown-menu-bar-container background-${backgroundColour}`;

    /* Set the styling for the top and bottom rows of the container */
    const topRowCss = `dropdown-menu-bar-container-row-top background-${backgroundColour}`;
    const topRowCloseButtonCss = `dropdown-menu-bar-container-row-top-close background-${backgroundColour} font-default font-${fontColour}`;
    const bottomRowCss = `dropdown-menu-bar-container-row-bottom background-${backgroundColour}`;

    /* Set the styling for the rows of hyperlinks to be rendered in the container */
    const hyperlinkCss = `dropdown-menu-bar-container-row-hyperlink background-${backgroundColour} font-default font-${fontColour}`;
    const hyperlinkTitleCss = 'dropdown-menu-bar-container-row-hyperlink-title';
    const hyperlinkTitleArrowCss = 'dropdown-menu-bar-container-row-hyperlink-title-arrow';

    return (
      <div aria-hidden={this.state.isHidden} className={containerCss} id={`${this.props.id}--${this.props.backgroundColour || 'white'}--dropdown-menu-bar-container`}>
        <div className={topRowCss}>
          <button aria-label="Close this dropdown menu." className={topRowCloseButtonCss} id={`${this.getIdCloseButtonDOMElement()}`} onClick={this.handleOnClickClose}
            onKeyDown={this.handleOnKeyDownCloseButton} tabIndex={this.state.isHidden === true ? '-1' : '0'} title="Close this dropdown menu.">
              &nbsp;&nbsp;&nbsp;&Chi;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
        <div className={dropdownHyperlinkContainerCss}>
          {
            this.props.dropdownMenuBarItemsList.map((dropdownMenuBarItemData, index) => {
              return <a aria-label={`${dropdownMenuBarItemData.title}`} className={hyperlinkCss} href={dropdownMenuBarItemData.href}
                id={`${index}--${dropdownMenuBarItemData.id}--dropdown-menu-bar-container-item`} key={`${index}--${dropdownMenuBarItemData.id}--dropdown-menu-bar-container-item`}
                onClick={this.handleOnClickHyperlink} onKeyDown={this.handleOnKeyDownHyperlink} tabIndex={this.state.isHidden === true ? '-1' : '0'} title={`${dropdownMenuBarItemData.title}`}>
                  <span id={`${index}--${dropdownMenuBarItemData.id}--title--dropdown-menu-bar-container-item`} className={hyperlinkTitleCss}>
                    <span>{dropdownMenuBarItemData.title}</span>
                    <span className={hyperlinkTitleArrowCss}>&nbsp;&nbsp;&rarr;</span>
                  </span>
              </a>
            })
          }
        </div>
        <div className={bottomRowCss} />
      </div>
    );
  }
}
DropdownMenuBarContainer.propTypes = {
  /** The background colour for the dropdown menu bar container. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The list of dropdown menu bar items to be rendered in the container component. */
  dropdownMenuBarItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  /** Automatically enables focus on the first hyperlink in the container. Suitable for use when the container is accessed via the keyboard. */
  enableAutoFocus: PropTypes.bool,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the dropdown menu bar container is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
  /** The leftmost position for the container to be rendered at on-screen. */
  left: PropTypes.number,
  /** The upper position for the container to be rendered at on-screen. */
  top: PropTypes.number,
};
export default DropdownMenuBarContainer;
