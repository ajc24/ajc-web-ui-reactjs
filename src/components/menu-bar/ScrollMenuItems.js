/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../..';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-scroll-menu-items.css';

/**
 * Scroll Menu Items button component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click to view the previous / next set of menu items in the menu bar when the menu bar items are too many to comfortably fit within
 * the width of the screen. Keyboard events are also supported with both the spacebar and enter key interactions acting as click events on the button.
 */
class ScrollMenuItems extends React.Component {
  /**
   * Initialise the Scroll Menu Items component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      arrowIconColour: undefined,
      firstRenderedMenuItemId: undefined,
      id: undefined,
      isDisabled: true,
      isInFocus: false,
      lastRenderedMenuItemId: undefined,
      menuBarColour: undefined,
      side: 'right',
    };
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.initialise = this.initialise.bind(this);
    this.setArrowIconColour = this.setArrowIconColour.bind(this);
    this.setFirstRenderedMenuItemId = this.setFirstRenderedMenuItemId.bind(this);
    this.setIsDisabled = this.setIsDisabled.bind(this);
    this.setIsInFocus = this.setIsInFocus.bind(this);
    this.setLastRenderedMenuItemId = this.setLastRenderedMenuItemId.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters for this component*/
    const initId = this.props.id;
    const initSide = this.props.side;
    const initMenuBarColour = this.props.menuBarColour;
    const initFirstRenderedMenuItemId = this.props.firstRenderedMenuItemId;
    const initLastRenderedMenuItemId = this.props.lastRenderedMenuItemId;
    this.initialise(initId, initSide, initMenuBarColour, initFirstRenderedMenuItemId, initLastRenderedMenuItemId);
  }

  componentDidUpdate() {
    if (this.props.isDisabled !== this.state.isDisabled) {
      this.setIsDisabled(this.props.isDisabled);
    }
  }

  /**
   * Retrieves this button element from the DOM
   * @returns {HTMLElement}
   */
  getButtonDOMElement() {
    return document.querySelector(`button[id="${this.state.id}"]`);
  }

  /**
   * Handler function for when the button loses focus
   * @param {Event} event 
   */
  handleOnBlur(event) {
    event.preventDefault();
    this.setIsInFocus(false, this.handleOnMouseLeave);
  }

  /**
   * Handler function for click events on the button
   * @param {Event} event 
   */
  handleOnClick(event) {
    event.preventDefault();
    if (event.button === 0) {
      /* A left click has been detected - set the button in focus switch to true and fire the onClick functionality if specified */
      this.setIsInFocus(true);
      if (this.props.onClick !== undefined) {
        /* If custom onClick functionality has been specified - execute that functionality */
        this.props.onClick();
      }
    }
  }

  /**
   * Handler function for focus events on the button
   * @param {Event} event 
   */
  handleOnMouseEnter(event) {
    event.preventDefault();
    if (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red') {
      /* On hover - change the colour of the arrow icon to reflect the text colour change */
      this.setArrowIconColour('black');
    }
  }

  /**
   * Handler function for when hover events on the button are ended
   * @param {Event|undefined} event 
   */
  handleOnMouseLeave(event = undefined) {
    if (event !== undefined) {
      event.preventDefault();
    }
    if (this.state.isInFocus === false && (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red')) {
      /* Hover state finished - restore the colour of the arrow icon to its original colour again */
      this.setArrowIconColour('white');
    }
  }

  /**
   * Initialises this component with all relevant state values
   * @param {string} initId
   * @param {string} initSide
   * @param {string} initMenuBarColour
   * @param {string} initFirstRenderedMenuItemId
   * @param {string} initLastRenderedMenuItemId
   */
  initialise(initId = 'default', initSide = 'right', initMenuBarColour = 'white', initFirstRenderedMenuItemId = undefined, initLastRenderedMenuItemId = undefined) {
    const initArrowIconColour = getColourCombination(initMenuBarColour).fontColour;
    this.setState({
      arrowIconColour: initArrowIconColour,
      firstRenderedMenuItemId: initFirstRenderedMenuItemId,
      id: `${initId}--scroll-menu-items-${initSide}`,
      lastRenderedMenuItemId: initLastRenderedMenuItemId,
      menuBarColour: initMenuBarColour,
      side: initSide,
    });
  }

  /**
   * Sets the arrow icons colour to the specified value
   * @param {string} newArrowIconColour 
   */
  setArrowIconColour(newArrowIconColour) {
    this.setState({
      arrowIconColour: newArrowIconColour,
    });
  }

  /**
   * Sets the ID for the last rendered menu item
   * @param {string} newFirstRenderedMenuItemId 
   */
  setFirstRenderedMenuItemId(newFirstRenderedMenuItemId = undefined) {
    this.setState({
      firstRenderedMenuItemId: newFirstRenderedMenuItemId,
    });
  }

  /**
   * Sets the button as enabled or disabled
   * @param {boolean} newIsDisabled 
   */
  setIsDisabled(newIsDisabled) {
    const buttonElement = this.getButtonDOMElement();
    if (newIsDisabled === true) {
      /* Disable the button */
      buttonElement.style.opacity = 0;
      if (this.state.side === 'left') {
        /* If the left sided button is disabled - switch focus to the neighbouring menu item to its right */
        const firstMenuItemElement = document.getElementById(this.state.firstRenderedMenuItemId);
        if (firstMenuItemElement !== null) {
          firstMenuItemElement.focus();
        }
      } else {
        /* If the right sided button is disabled - switch focus to the neighbouring menu item to its left */
        const lastMenuItemElement = document.getElementById(this.state.lastRenderedMenuItemId);
        if (lastMenuItemElement !== null) {
          lastMenuItemElement.focus();
        }
      }
    } else {
      /* Enable the button */
      buttonElement.style.opacity = 1;
    }
    this.setState({
      isDisabled: !this.state.isDisabled,
    });
  }

  /**
   * Sets whether the button is in focus or not and follows up this
   * process by executing the follow on function if one is specified
   * @param {boolean} newIsInFocus 
   * @param {Function|undefined} followOnFunction 
   */
  setIsInFocus(newIsInFocus, followOnFunction = undefined) {
    this.setState({
      isInFocus: newIsInFocus,
    }, followOnFunction);
  }

  /**
   * Sets the ID for the last rendered menu item
   * @param {string} newLastRenderedMenuItemId 
   */
  setLastRenderedMenuItemId(newLastRenderedMenuItemId = undefined) {
    this.setState({
      lastRenderedMenuItemId: newLastRenderedMenuItemId,
    });
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.state.menuBarColour);

    /* Set the styling for the container element and determine which side has been chosen */
    const containerCss = `scroll-menu-items-container scroll-menu-items-container-${this.state.side}`;

    /* Set the styling for the button */    
    const buttonCss = `scroll-menu-items-button menu-bar-common-transitions font-default scroll-menu-items-button-border-${backgroundColour} background-${backgroundColour}`
      + ` font-${fontColour}`;
    
    /* Set the styling for the button span container element */
    const buttonSpanCss = 'scroll-menu-items-button-span';

    /* Set the styling for the button text element */
    const buttonTextCss = 'scroll-menu-items-button-text';

    return (
      <React.Fragment>
        <div className={containerCss}>
          <button aria-hidden={`${this.state.isDisabled}`} aria-label={`Scroll the list of menu items to the ${this.state.side}.`} className={buttonCss}
            id={`${this.state.id}`} onBlur={this.handleOnBlur} onClick={this.state.isDisabled === false ? this.handleOnClick : undefined}
            onFocus={this.handleOnMouseEnter} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}
            tabIndex={this.state.isDisabled === true ? '-1' : '0'} type="button">
              <span className={buttonSpanCss}>
                {
                  /* Set the relevant spacing to push the "Prev" arrow icon over to the right (alignment) */
                  this.state.side === 'left' &&
                    <React.Fragment>&nbsp;&nbsp;</React.Fragment>
                }
                <ArrowIcon colour={this.state.arrowIconColour} direction={this.state.side} id={this.props.id} size="2" />
                {
                  /* Set the relevant spacing to push the "Next" arrow icon over to the left (alignment) */
                  this.state.side === 'right' &&
                    <React.Fragment>&nbsp;</React.Fragment>
                }
                <br />
                <span className={buttonTextCss}>
                  {
                    /* Set the button text content for the left sided version of this component */
                    this.state.side === 'left' &&
                      <React.Fragment>Prev</React.Fragment>
                  }
                  {
                    /* Set the button text content for the right sided version of this component */
                    this.state.side === 'right' &&
                      <React.Fragment>Next</React.Fragment>
                  }
                </span>
              </span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
ScrollMenuItems.propTypes = {
  /** The unique identifier for the first menu item rendered in the menu bar. */
  firstRenderedMenuItemId: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** Sets whether the button is enabled or disabled. Is set to disabled by default until specified otherwise. */
  isDisabled: PropTypes.bool,
  /** The unique identifier for the last menu item rendered in the menu bar. */
  lastRenderedMenuItemId: PropTypes.string,
  /** The background colour set to the menu bar in which this component is rendered. The default colour for the background is white. */
  menuBarColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The custom functionality to be executed on clicking the button. */
  onClick: PropTypes.func,
  /** The side at which this menu item will be rendered in the menu bar. Renders to either the left or right side. By default the right side is pre-selected. */
  side: PropTypes.oneOf([ 'left', 'right' ]),
};
export default ScrollMenuItems;
