/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-scroll-items.css';

/**
 * Scroll Menu Bar Items Right button component intended for use with the Menu Bar component. This component allows a user to click to view the next set
 * of menu bar items in the menu bar. This button is necessary in circumstances where there are too many menu bar items to comfortably fit within the width
 * of the screen. Keyboard events are also supported with both the spacebar and enter key interactions acting as click events on the button.
 */
class ScrollMenuBarItemsRight extends React.Component {
  /**
   * Initialise the Scroll Menu Bar Items Right component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
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
   * Retrieves the scroll menu bar items right container element from the DOM
   * @returns {HTMLElement}
   */
  getContainerDOMElement() {
    return document.querySelector(`div[id="${this.props.id}--container--scroll-menu-bar-items-right"]`);
  }

  /**
   * Ensures onclick events are disabled when the element is marked as hidden, otherwise
   * the provided onClick function property is executed
   * @param {event} event
   */
  handleOnClick(event) {
    if (this.state.isHidden === true) {
      event.preventDefault();
    } else {
      /* Execute the provided onClick functionality */
      this.props.onClick();
    }
  }

  /**
   * Handle key down events on the button
   * @param {Event} event 
   */
  handleOnKeyDown(event) {
    if (event.key === ' ') {
      /* Ensure that a spacebar key press also correctly fires a click event on the button */
      event.target.click();
    }
  }

  /**
   * Sets the scroll menu bar items right button as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the button is now hidden */
    this.setState({ isHidden: true });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Set the container elements opacity so that it is now hidden */
    containerElement.style.opacity = 0;
  }

  /**
   * Sets the scroll menu bar items right button as visible in the UI
   */
  setIsVisible() {
    /* Ensure state is updated to reflect that the button is now visible */
    this.setState({ isHidden: false });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Set the container elements opacity so that it is now visible */
    containerElement.style.opacity = 1;
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.backgroundColour);

    /* Set the styling for the scroll menu bar items right container element */
    const containerCss = 'scroll-menu-bar-items-container background-transparent menu-bar-common-transitions scroll-menu-bar-items-container-left-side-spacing';

    /* Set the styling for the button element */
    const buttonCss = `scroll-menu-items-button background-${backgroundColour} font-default font-${fontColour}`;

    return (
      <div className={containerCss} id={`${this.props.id}--container--scroll-menu-bar-items-right`}>
        <button aria-hidden={`${this.state.isHidden}`} aria-label="Scroll the list of menu bar items to the right." className={buttonCss}
          id={`${this.props.id}--scroll-menu-bar-items-right`} onClick={this.handleOnClick} onKeyDown={this.handleOnKeyDown}
          tabIndex={this.state.isHidden === true ? '-1' : '0'} type="button">
            Next<br />&rarr;
        </button>
      </div>
    );
  }
}
ScrollMenuBarItemsRight.propTypes = {
  /** The background colour for the scroll menu bar items right button. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the scroll menu bar items right button is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: PropTypes.bool,
  /** The custom functionality to be executed on clicking the button. */
  onClick: PropTypes.func.isRequired,
};
export default ScrollMenuBarItemsRight;
