/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../';
import { colourCombinations } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-scroll-menu-items.css';

/**
 * Scroll Menu Items button component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click to view the previous / next set of menu items in the menu bar when the menu bar items are too many to comfortably fit within
 * the width of the screen.
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
      buttonCssSelectorPath: undefined,
      id: undefined,
      isHidden: false,
      isSelected: false,
      menuBarColour: undefined,
      side: undefined,
    };
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.initialise = this.initialise.bind(this);
    this.setArrowIconColour = this.setArrowIconColour.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsSelected = this.setIsSelected.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters (id, isHidden, menuBarColour, side) for the component */
    let initSide;
    (this.props.side !== undefined && (this.props.side === 'left' || this.props.side === 'right'))
      ? initSide = this.props.side
      : initSide = 'right';
    const initId = this.props.id;
    const initIsHidden = this.props.isHidden || false;
    const initMenuBarColour = this.props.menuBarColour || 'white';
    this.initialise(initId, initIsHidden, initMenuBarColour, initSide);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
      /* Update the isHidden state since the isHidden property has changed to a new value */
      this.setIsHidden(this.props.isHidden);
    }
  }

  /**
   * Handler function for when the button loses focus
   * @param {Event} event 
   */
  handleOnBlur(event) {
    event.preventDefault();
    this.setIsSelected(false, this.handleOnMouseLeave);
  }

  /**
   * Handler function for click events on the button
   * @param {Event} event 
   */
  handleOnClick(event) {
    event.preventDefault();
    if (event.button === 0) {
      /* A left click has been detected - set the button selection to true and fire the onClick functionality if specified */
      this.setIsSelected(true);
      if (this.props.onClick !== undefined) {
        this.props.onClick();
      }
    }
  }

  /**
   * Handler function for hover events on the button
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
    if (this.state.isSelected === false && (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red')) {
      /* Hover state finished - restore the colour of the arrow icon to its original colour again */
      this.setArrowIconColour('white');
    }
  }

  /**
   * Initialises this component with all relevant state values
   * @param {string} initId 
   * @param {boolean} initIsHidden 
   * @param {string} initMenuBarColour 
   * @param {string} initSide 
   */
  initialise(initId, initIsHidden, initMenuBarColour, initSide) {
    const initArrowIconColour = colourCombinations[`${initMenuBarColour}`].fontColour;
    this.setState({
      arrowIconColour: initArrowIconColour,
      id: initId,
      isHidden: initIsHidden,
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
   * Sets whether the buttons contents are visible (false) or hidden (true)
   * @param {boolean} newIsHidden 
   */
  setIsHidden(newIsHidden) {
    this.setState({
      isHidden: newIsHidden,
    });
  }

  /**
   * Sets whether the button has been selected or not and follows up this
   * process by executing the follow on function if one is specified
   * @param {boolean} newIsSelected 
   * @param {Function|undefined} followOnFunction 
   */
  setIsSelected(newIsSelected, followOnFunction = undefined) {
    this.setState({
      isSelected: newIsSelected,
    }, followOnFunction);
  }

  render() {
    /* Set the styling for the container element and determine which side has been chosen */
    let containerCss = 'scroll-menu-items-container';
    this.state.side !== undefined
      ? containerCss += ` scroll-menu-items-container-${this.state.side}`
      : containerCss += ' scroll-menu-items-container-right';
    
    /* Set the styling for the button */
    let buttonCss = 'scroll-menu-items-button font-default';

    if (this.state.menuBarColour !== undefined) {
      const backgroundColour = colourCombinations[`${this.state.menuBarColour}`].backgroundColour;
      const fontColour = colourCombinations[`${this.state.menuBarColour}`].fontColour;
      buttonCss += ` scroll-menu-items-button-border-${backgroundColour} background-${backgroundColour} font-${fontColour}`;
    }
    /* Set the styling for the button span container element */
    const buttonSpanCss = 'scroll-menu-items-button-span';

    /* Set the styling for the button text element */
    const buttonTextCss = 'scroll-menu-items-button-text';

    return (
      <div className={containerCss}>
        <button id={`${this.props.id}--scroll-menu-items-${this.state.side}`} type="button" className={buttonCss} tabIndex={this.state.isHidden === true ? '-1' : '0'}
          onClick={this.state.isHidden === false ? this.handleOnClick : undefined} aria-label={`Scroll the list of menu items to the ${this.state.side}.`}
          aria-hidden={`${this.state.isHidden}`} data-is-selected={this.state.isSelected} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}
          onFocus={this.handleOnMouseEnter} onBlur={this.handleOnBlur}>
            {
              this.state.isHidden === false &&
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
            }
        </button>
      </div>
    );
  }
}
ScrollMenuItems.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The switch for whether the button is to be hidden or not. If the button is hidden, no content within the button is displayed and all mouse interactions are disabled. */
  isHidden: PropTypes.bool,
  /** The background colour set to the menu bar in which this component is rendered. The default colour for the background is white. */
  menuBarColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The custom functionality to be executed on clicking the button. */
  onClick: PropTypes.func,
  /** The side at which this menu item will be rendered in the menu bar. Renders to either the left or right side. By default the right side is pre-selected. */
  side: PropTypes.oneOf([ 'left', 'right' ]),
};
export default ScrollMenuItems;
