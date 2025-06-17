/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-dropdown-container.css';

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
    this.getCloseButtonDOMElement = this.getCloseButtonDOMElement.bind(this);
    this.getContainerDOMElement = this.getContainerDOMElement.bind(this);
    this.handleOnClickClose = this.handleOnClickClose.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsVisible = this.setIsVisible.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    this.setPosition(this.props.top || 0, this.props.left || 0);
  
    /* Initialise all of the key parameters for this component */
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
    return document.querySelector(`button[id="${this.props.id}--${this.props.backgroundColour || 'white'}--close--dropdown-menu-bar-container"]`);
  }

  /**
   * Retrieves the dropdown menu bar container element from the DOM
   * @returns {HTMLElement}
   */
  getContainerDOMElement() {
    return document.querySelector(`div[id="${this.props.id}--${this.props.backgroundColour || 'white'}--dropdown-menu-bar-container"]`);
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
   * Sets the dropdown menu bar container as hidden in the UI 
   */
  setIsHidden() {
    /* Ensure state is updated to reflect that the dropdown menu bar container is now hidden */
    this.setState({ isHidden: true });

    /* Get the container element from the DOM */
    const containerElement = this.getContainerDOMElement();

    /* Set the container elements opacity so that it is now hidden */
    containerElement.style.visibility = 'hidden';
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
    containerElement.style.visibility = 'visible';

    /* Auto focus on the close button of the container element */
    // const closeButtonElement = this.getCloseButtonDOMElement();
    // closeButtonElement.focus();
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
    const hyperlinkContainerCss = 'dropdown-menu-bar-container-row-hyperlink-container';
    const hyperlinkCss = `dropdown-menu-bar-container-row-hyperlink background-${backgroundColour} font-default font-${fontColour}`;

    return (
      <div aria-hidden={this.state.isHidden} className={containerCss} id={`${this.props.id}--${this.props.backgroundColour || 'white'}--dropdown-menu-bar-container`}>
        <div className={topRowCss}>
          <button aria-label="Close this dropdown menu." className={topRowCloseButtonCss}
            id={`${this.props.id}--${this.props.backgroundColour || 'white'}--close--dropdown-menu-bar-container`} onClick={this.handleOnClickClose}
            tabIndex={this.state.isHidden === true ? '-1' : '0'} title="Close this dropdown menu.">
              &nbsp;&nbsp;&nbsp;&Chi;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
        <div className={hyperlinkContainerCss}>
          {
            this.props.dropdownMenuBarItemsList.map((dropdownMenuBarItemData, index) => {
              return <a aria-label={`${dropdownMenuBarItemData.title}`} className={hyperlinkCss} href={dropdownMenuBarItemData.href}
                id={`${index}--${dropdownMenuBarItemData.id}--dropdown-menu-bar-container-item`} key={`${index}--${dropdownMenuBarItemData.id}--dropdown-menu-bar-container-item`}
                tabIndex={this.state.isHidden === true ? '-1' : '0'} title={`${dropdownMenuBarItemData.title}`}>
                  {dropdownMenuBarItemData.title}&nbsp;&nbsp;&rarr;
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
