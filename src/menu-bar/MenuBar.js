/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import BaseMenuBar from '../base/BaseMenuBar';
import MenuBarItem from './MenuBarItem';
import './css/menu-bar.css';

const menuBarItemAnimationTime = 250;
const menuBarItemWidth = 100;

class MenuBar extends React.Component {
  /**
   * Constructor for the Menu Bar component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      maxIndex: 0,
      menuBarItems: [],
      menuBarItemsHidden: true,
    }
    this.getCentralContentElement = this.getCentralContentElement.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.setCentralContentWidth = this.setCentralContentWidth.bind(this);
    this.setMenuBarItemsAsHidden = this.setMenuBarItemsAsHidden.bind(this);
    this.setMenuBarItemsAsVisible = this.setMenuBarItemsAsVisible.bind(this);
  }

  componentDidMount() {
    /* Set the menu bar up based on the current screen size */
    this.handleScreenWidth();

    /* Watch over all future window resize events - we will want to alter the number of rendered menu bar items to suit the screen size */
    window.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Retrieves the central content element from the DOM
   * @returns {HTMLElement}
   */
  getCentralContentElement() {
    return document.querySelector(`div[id="${this.props.id}--central-content--menu-bar"]`);
  }

  /**
   * Handles resize events in the browser. This function will hide the currently displayed menu bar
   * items, then determine the maximum number of menu bar items that can be rendered inside the central
   * content area of the menu bar based on the current screen size and finally mark all menu items as
   * visible again
   */
  handleScreenWidth() {
    this.setMenuBarItemsAsHidden();

    setTimeout(() => {
      this.setCentralContentWidth();

      setTimeout(() => {
        this.setMenuBarItemsAsVisible();
      }, menuBarItemAnimationTime);
    }, menuBarItemAnimationTime);
    
  }

  setCentralContentWidth() {
    /* Determine the current width of the central content element */
    const centralContentElement = this.getCentralContentElement();
    if (centralContentElement !== null) {
      const centralContentWidth = centralContentElement.getBoundingClientRect().width;
    
      /* Reset the current index and determine how many elements will fit within the width of the element */
      const newIndex = 0;
      const newMaxIndex = parseInt(centralContentWidth / menuBarItemWidth, 10);

      /* Set these indexes in state */
      this.setState({
        index: newIndex,
        maxIndex: newMaxIndex,
      });
    }
  }

  /**
   * Sets all menu bar items as hidden
   */
  setMenuBarItemsAsHidden() {
    this.setState({ menuBarItemsHidden: true });
  }

  /**
   * Sets all menu bar items as visible
   */
  setMenuBarItemsAsVisible() {
    this.setState({ menuBarItemsHidden: false });
  }

  render() {
    const centralContentCss = 'menu-bar-central-content';

    return (
      <BaseMenuBar backgroundColour={this.props.backgroundColour} id={`${this.props.id}--menu-bar`}>
        <div style={{ marginRight: '8px', minWidth: '52px', width: '52px' }}/>
        <div id={`${this.props.id}--central-content--menu-bar`} className={centralContentCss}>
          {
            this.props.menuBarItemsList.map((menuBarItemData, index) => {
              if (index >= this.state.index && index < (this.state.index + this.state.maxIndex)) {
                let addRightSideSpacing = true;
                if (index === ((this.state.index + this.state.maxIndex) - 1) || index === this.props.menuBarItemsList.length - 1) {
                  /* Do not add right side spacing for the last rendered item in the current output and / or the last rendered item in the list */
                  addRightSideSpacing = false;
                }
                return <MenuBarItem addRightSideSpacing={addRightSideSpacing} backgroundColour={this.props.backgroundColour} href={menuBarItemData.href} id={menuBarItemData.id}
                  isHidden={this.state.menuBarItemsHidden} key={menuBarItemData.id}>
                    {menuBarItemData.title}
                </MenuBarItem>;
              }
              return null;
            })
          }
        </div> 
        <div style={{ marginLeft: '8px', minWidth: '52px', width: '52px' }}/>
      </BaseMenuBar>
    );
  }
}
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
};
export default MenuBar;
