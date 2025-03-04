/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MenuBarBase, ScrollMenuItems } from '../../';
// import { colourCombinations } from '../data/colour-combinations';
// import '../css/common.css';
// import './css/menu-bar-scroll-menu-items.css';
import './css/menu-bar.css';

/**
 * Scroll Menu Items button component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click to view the previous / next set of menu items in the menu bar when the menu bar items are too many to comfortably fit within
 * the width of the screen.
 */



class MenuBar extends React.Component {
  /**
   * Initialise the Menu Bar component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      // arrowIconColour: undefined,
      // buttonCssSelectorPath: undefined,
      // id: undefined,
      // isHidden: false,
      // isSelected: false,
      // menuBarColour: undefined,
      // side: undefined,
    };
    // this.handleOnBlur = this.handleOnBlur.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
    // this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    // this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    // this.initialise = this.initialise.bind(this);
    // this.setArrowIconColour = this.setArrowIconColour.bind(this);
    // this.setIsHidden = this.setIsHidden.bind(this);
    // this.setIsSelected = this.setIsSelected.bind(this);
  }

  componentDidMount() {
    // /* Initialise all of the key parameters (id, isHidden, menuBarColour, side) for the component */
    // let initSide;
    // (this.props.side !== undefined && (this.props.side === 'left' || this.props.side === 'right'))
    //   ? initSide = this.props.side
    //   : initSide = 'right';
    // const initId = this.props.id;
    // const initIsHidden = this.props.isHidden || false;
    // const initMenuBarColour = this.props.menuBarColour || 'white';
    // this.initialise(initId, initIsHidden, initMenuBarColour, initSide);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
  //     /* Update the isHidden state since the isHidden property has changed to a new value */
  //     this.setIsHidden(this.props.isHidden);
  //   }
  // }

  render() {
    /* Set the styling for the overall menu bar container element */
    const menuBarContainerCss = 'menu-bar-container';

    /* Set the styling for the menu items container element */
    const menuItemsContainerCss = 'menu-items-container';

    return (
      <MenuBarBase backgroundColour={this.props.backgroundColour} id={this.props.id}>
        <div className={menuBarContainerCss} >
          <ScrollMenuItems id={this.props.id} menuBarColour={this.props.backgroundColour} side="left" />
          <div className={menuItemsContainerCss}>
             Menu Bar Items Will Be Rendered Here
          </div>
          <ScrollMenuItems id={this.props.id} menuBarColour={this.props.backgroundColour} side="right" />
        </div>
      </MenuBarBase>
    );
  }
}
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
};
export default MenuBar;
