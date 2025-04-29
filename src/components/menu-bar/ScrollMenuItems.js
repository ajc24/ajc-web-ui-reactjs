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
      id: undefined,
      isDisabled: true,
      // isHidden: false,
      // isSelected: false,
      menuBarColour: undefined,
      side: 'right',
    };
    this.getButtonDOMElement = this.getButtonDOMElement.bind(this);
    // this.handleOnBlur = this.handleOnBlur.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
    // this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    // this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.initialise = this.initialise.bind(this);
    // this.setArrowIconColour = this.setArrowIconColour.bind(this);
    this.setIsDisabled = this.setIsDisabled.bind(this);
    // this.setIsHidden = this.setIsHidden.bind(this);
    // this.setIsSelected = this.setIsSelected.bind(this);
  }

  componentDidMount() {
    /* Initialise all of the key parameters for this component*/
    const initId = this.props.id;
    const initSide = this.props.side;
    const initMenuBarColour = this.props.menuBarColour;
    // let initSide;
    // (this.props.side !== undefined && (this.props.side === 'left' || this.props.side === 'right'))
    //   ? initSide = this.props.side
    //   : initSide = 'right';
    
    // const initIsHidden = this.props.isHidden || false;
    
    this.initialise(initId, initSide, initMenuBarColour);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isDisabled !== this.props.isDisabled && this.props.isDisabled !== this.state.isDisabled) {
      this.setIsDisabled(this.props.isDisabled);
    }
    // if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
    //   /* Update the isHidden state since the isHidden property has changed to a new value */
    //   this.setIsHidden(this.props.isHidden);
    // }
  }

  getButtonDOMElement() {
    return document.querySelector(`button[id="${this.props.id}--scroll-menu-items-${this.state.side}"]`);
  }

  /**
   * Handler function for when the button loses focus
   * @param {Event} event 
   */
  // handleOnBlur(event) {
  //   event.preventDefault();
  //   this.setIsSelected(false, this.handleOnMouseLeave);
  // }

  /**
   * Handler function for click events on the button
   * @param {Event} event 
   */
  // handleOnClick(event) {
  //   event.preventDefault();
  //   if (event.button === 0) {
  //     /* A left click has been detected - set the button selection to true and fire the onClick functionality if specified */
  //     this.setIsSelected(true);
  //     if (this.props.onClick !== undefined) {
  //       this.props.onClick();
  //     }
  //   }
  // }

  /**
   * Handler function for hover events on the button
   * @param {Event} event 
   */
  // handleOnMouseEnter(event) {
  //   event.preventDefault();
  //   if (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red') {
  //     /* On hover - change the colour of the arrow icon to reflect the text colour change */
  //     this.setArrowIconColour('black');
  //   }
  // }

  /**
   * Handler function for when hover events on the button are ended
   * @param {Event|undefined} event 
   */
  // handleOnMouseLeave(event = undefined) {
  //   if (event !== undefined) {
  //     event.preventDefault();
  //   }
  //   if (this.state.isSelected === false && (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red')) {
  //     /* Hover state finished - restore the colour of the arrow icon to its original colour again */
  //     this.setArrowIconColour('white');
  //   }
  // }

  /**
   * Initialises this component with all relevant state values
   * @param {string} initId
   * @param {string} initSide
   * @param {string} initMenuBarColour
   */
  // initialise(initId, initIsHidden, initMenuBarColour, initSide) {
  initialise(initId = 'default-scroll-menu-items', initSide = 'right', initMenuBarColour = 'white') {
    const initArrowIconColour = getColourCombination(initMenuBarColour).fontColour;
    this.setState({
      arrowIconColour: initArrowIconColour,
      id: `${initId}-${initSide}`,
      // isHidden: initIsHidden,
      menuBarColour: initMenuBarColour,
      side: initSide,
    });
  }

  /**
   * Sets the arrow icons colour to the specified value
   * @param {string} newArrowIconColour 
   */
  // setArrowIconColour(newArrowIconColour) {
  //   this.setState({
  //     arrowIconColour: newArrowIconColour,
  //   });
  // }

  setIsDisabled(newIsDisabled) {
    const buttonElement = this.getButtonDOMElement();
    if (newIsDisabled === true) {
      /* Disable the button */
      buttonElement.style.opacity = 0;
    } else {
      /* Enable the button */
      buttonElement.style.opacity = 1;
    }
    this.setState({
      isDisabled: !this.state.isDisabled,
    });
  }

  /**
   * Sets whether the buttons contents are visible (false) or hidden (true)
   * @param {boolean} newIsHidden 
   */
  // setIsHidden(newIsHidden) {
  //   this.setState({
  //     isHidden: newIsHidden,
  //   });
  // }

  /**
   * Sets whether the button has been selected or not and follows up this
   * process by executing the follow on function if one is specified
   * @param {boolean} newIsSelected 
   * @param {Function|undefined} followOnFunction 
   */
  // setIsSelected(newIsSelected, followOnFunction = undefined) {
  //   this.setState({
  //     isSelected: newIsSelected,
  //   }, followOnFunction);
  // }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.state.menuBarColour);

    /* Set the styling for the container element and determine which side has been chosen */
    const containerCss = `scroll-menu-items-container scroll-menu-items-container-${this.state.side}`;

    /* Set the styling for the button */    
    const buttonCss = `scroll-menu-items-button menu-bar-common-transitions font-default scroll-menu-items-button-border-${backgroundColour} background-${backgroundColour}`
      + ` font-${fontColour}`;
    
    // /* Set the styling for the button span container element */
    // const buttonSpanCss = 'scroll-menu-items-button-span';

    // /* Set the styling for the button text element */
    // const buttonTextCss = 'scroll-menu-items-button-text';

    return (
      <React.Fragment>
        <div className={containerCss}>
          <button id={`${this.props.id}--scroll-menu-items-${this.state.side}`} type="button" className={buttonCss} tabIndex={this.state.isDisabled === true ? '-1' : '0'}
            aria-hidden={`${this.state.isDisabled}`}>
              Test Button
          </button>
        </div>
        <div>
          <p>{this.state.isDisabled}</p>
        </div>
      </React.Fragment>
    );

    // return (
    //   <div className={containerCss}>
    //     <button id={`${this.props.id}--scroll-menu-items-${this.state.side}`} type="button" className={buttonCss} tabIndex={this.state.isHidden === true ? '-1' : '0'}
    //       onClick={this.state.isHidden === false ? this.handleOnClick : undefined} aria-label={`Scroll the list of menu items to the ${this.state.side}.`}
    //       aria-hidden={`${this.state.isHidden}`} data-is-selected={this.state.isSelected} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}
    //       onFocus={this.handleOnMouseEnter} onBlur={this.handleOnBlur}>
    //         {
    //           this.state.isHidden === false &&
    //             <span className={buttonSpanCss}>
    //               {
    //                 /* Set the relevant spacing to push the "Prev" arrow icon over to the right (alignment) */
    //                 this.state.side === 'left' &&
    //                   <React.Fragment>&nbsp;&nbsp;</React.Fragment>
    //               }
    //               <ArrowIcon colour={this.state.arrowIconColour} direction={this.state.side} id={this.props.id} size="2" />
    //               {
    //                 /* Set the relevant spacing to push the "Next" arrow icon over to the left (alignment) */
    //                 this.state.side === 'right' &&
    //                   <React.Fragment>&nbsp;</React.Fragment>
    //               }
    //               <br />
    //               <span className={buttonTextCss}>
    //                 {
    //                   /* Set the button text content for the left sided version of this component */
    //                   this.state.side === 'left' &&
    //                     <React.Fragment>Prev</React.Fragment>
    //                 }
    //                 {
    //                   /* Set the button text content for the right sided version of this component */
    //                   this.state.side === 'right' &&
    //                     <React.Fragment>Next</React.Fragment>
    //                 }
    //               </span>
    //             </span>
    //         }
    //     </button>
    //   </div>
    // );
  }
}
ScrollMenuItems.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Sets whether the button is enabled or disabled. Is set to disabled by default until specified otherwise. */
  isDisabled: PropTypes.bool,
  /** The background colour set to the menu bar in which this component is rendered. The default colour for the background is white. */
  menuBarColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The side at which this menu item will be rendered in the menu bar. Renders to either the left or right side. By default the right side is pre-selected. */
  side: PropTypes.oneOf([ 'left', 'right' ]),
};

//ScrollMenuItems.propTypes = {
  /** The unique identifier for this component. */
  //id: PropTypes.string.isRequired,
  /**
   * The switch for whether the button is to be hidden or not.
   * If the button is hidden, no content within the button is displayed and all mouse and keyboard interactions are disabled.
   */
  //isHidden: PropTypes.bool,
  /** The background colour set to the menu bar in which this component is rendered. The default colour for the background is white. */
  //menuBarColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The custom functionality to be executed on clicking the button. */
  //onClick: PropTypes.func,
  /** The side at which this menu item will be rendered in the menu bar. Renders to either the left or right side. By default the right side is pre-selected. */
  //side: PropTypes.oneOf([ 'left', 'right' ]),
//};
export default ScrollMenuItems;
