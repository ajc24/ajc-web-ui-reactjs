/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';

/**
 * 328px
 * 
 * 300px + 28px square icons
 * each line = 30px height -> 29px + 1px border top
 */

const containerMaximumWidth = 328;
const rightmostScreenPadding = 16;


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
    this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    this.setPosition(this.props.top || 0, this.props.left || 0);
  }

  componentDidUpdate() {

  }

  /**
   * Retrieves the dropdown menu bar container element from the DOM
   * @returns {HTMLElement}
   */
  getContainerDOMElement() {
    return document.querySelector(`div[id="${this.props.id}--${this.props.backgroundColour}--dropdown-menu-bar-container"]`);
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
    const containerCss = 'dropdown-menu-bar-container';

    return (
      <div aria-hidden={this.state.isHidden} className={containerCss} id={`${this.props.id}--${this.props.backgroundColour}--dropdown-menu-bar-container`}>
        Text Content
      </div>
    );
  }
}
DropdownMenuBarContainer.propTypes = {
  /** The background colour for the dropdown menu bar container. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
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
