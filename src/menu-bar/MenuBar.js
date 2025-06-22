/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import BaseMenuBar from '../base/BaseMenuBar';
import MenuBarItem from './MenuBarItem';
import DropdownMenuBarItem from './DropdownMenuBarItem';
import ScrollMenuBarItemsLeft from './ScrollMenuBarItemsLeft';
import ScrollMenuBarItemsRight from './ScrollMenuBarItemsRight';
import './css/menu-bar.css';

const menuBarItemAnimationTime = 250;
const menuBarItemWidth = 100;
const menuBarItemWidthWithMargin = 108;

/**
 * Menu Bar component to be used in the web application. This component allows for a number of menu bar items and
 * dropdown menu items to be rendered, each offering navigation options for the user to navigate around the application.
 * If the number of menu bar items are too many to fit within the confines of the screen width, the user is presented with
 * buttons with which to scroll through all available menu bar items.
 */
class MenuBar extends React.Component {
  /**
   * Constructor for the Menu Bar component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isProcessing: false,
      maxIndex: 0,
      menuBarItems: [],
      menuBarItemsHidden: true,
      menuBarItemsRender: undefined,
      scrollMenuBarItemsLeftHidden: true,
      scrollMenuBarItemsRightHidden: true,
    }
    this.getCentralContentElement = this.getCentralContentElement.bind(this);
    this.handleOnClickScrollMenuBarItemsLeft = this.handleOnClickScrollMenuBarItemsLeft.bind(this);
    this.handleOnClickScrollMenuBarItemsRight = this.handleOnClickScrollMenuBarItemsRight.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.setCentralContentWidth = this.setCentralContentWidth.bind(this);
    this.setIsProcessingFalse = this.setIsProcessingFalse.bind(this);
    this.setIsProcessingTrue = this.setIsProcessingTrue.bind(this);
    this.setMenuBarItemsAsHidden = this.setMenuBarItemsAsHidden.bind(this);
    this.setMenuBarItemsAsVisible = this.setMenuBarItemsAsVisible.bind(this);
  }

  componentDidMount() {
    /* Set the menu bar up based on the current screen size */
    this.handleScreenWidth();

    /* Watch over all future window resize events - we will want to alter the number of rendered menu bar items to suit the screen size */
    document.body.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Retrieves the central content element from the DOM
   * @returns {HTMLElement}
   */
  getCentralContentElement() {
    return document.querySelector(`div[id="${this.props.id}--central-content--${this.props.backgroundColour}--menu-bar"]`);
  }

  /**
   * Handles on click events on the "Scroll menu bar items to the left" button
   */
  handleOnClickScrollMenuBarItemsLeft() {
    if (this.state.isProcessing === false) {
      /* Enable is processing and mark the current set of menu bar items as hidden */
      this.setIsProcessingTrue();
      this.setMenuBarItemsAsHidden();

      setTimeout(() => {
        /* After the "hide menu bar items" animation has completed - set the new current index position */
        let newIndex = this.state.index - this.state.maxIndex;
        if (newIndex < 0) {
          newIndex = 0;
        }
        this.setState({
          index: newIndex,
        }, () => {
          /* As soon as the index position is updated - set the menu bar items as visible again and disable is processing */
          this.setMenuBarItemsAsVisible();
          this.setIsProcessingFalse();
        });
      }, menuBarItemAnimationTime);
    }
  }

  /**
   * Handles on click events on the "Scroll menu bar items to the right" button
   */
  handleOnClickScrollMenuBarItemsRight() {
    if (this.state.isProcessing === false) {
      /* Enable is processing and mark the current set of menu bar items as hidden */
      this.setIsProcessingTrue();
      this.setMenuBarItemsAsHidden();

      setTimeout(() => {
        /* After the "hide menu bar items" animation has completed - set the new current index position */
        let newIndex = this.state.index + this.state.maxIndex;
        if (newIndex > this.props.menuBarItemsList.length) {
          newIndex = this.props.menuBarItemsList.length;
        }
        this.setState({
          index: newIndex,
        }, () => {
          /* As soon as the index position is updated - set the menu bar items as visible again and disable is processing */
          this.setMenuBarItemsAsVisible();
          this.setIsProcessingFalse();
        });
      }, menuBarItemAnimationTime);
    }
  }

  /**
   * Handles resize events in the browser. This function will hide the currently displayed menu bar
   * items, then determine the maximum number of menu bar items that can be rendered inside the central
   * content area of the menu bar based on the current screen size and finally mark all menu items as
   * visible again
   */
  handleScreenWidth() {
    /* Enable is processing and mark the current set of menu bar items as hidden */
    this.setIsProcessingTrue();
    this.setMenuBarItemsAsHidden();

    setTimeout(() => {
      /* After the "hide menu bar items" animation has completed - set the new central content width */
      this.setCentralContentWidth();

      setTimeout(() => {
        /* After all processing is completed - set the menu bar items as visible again and disable is processing */
        this.setMenuBarItemsAsVisible();
        this.setIsProcessingFalse();
      }, menuBarItemAnimationTime);
    }, menuBarItemAnimationTime);
  }

  /**
   * Resets the current menu bar item index and sets the maximum index to suit
   * the current screen size
   */
  setCentralContentWidth() {
    /* Determine the current width of the central content element */
    const centralContentElement = this.getCentralContentElement();
    if (centralContentElement !== null) {
      let centralContentWidth = parseInt(centralContentElement.getBoundingClientRect().width, 10);

      /* Reset the current index and determine how many elements will fit within the width of the element */
      const newIndex = 0;
      let newMaxIndex = 0;
      if (centralContentWidth > menuBarItemWidth) {
        /* Account for the smallest width item first */
        newMaxIndex += 1;
        centralContentWidth -= menuBarItemWidth;
      }
      /* Now account for all of the other menu bar item widths which will include margins */
      const remainder = parseInt(centralContentWidth / menuBarItemWidthWithMargin, 10);
      newMaxIndex += remainder;

      /* Set these indexes in state */
      this.setState({
        index: newIndex,
        maxIndex: newMaxIndex,
      });
    }
  }

  /**
   * Toggles the isProcessing value to false (disables processing)
   */
  setIsProcessingFalse() {
    this.setState({
      isProcessing: false,
    });
  }

  /**
   * Toggles the isProcessing value to true (enables processing)
   */
  setIsProcessingTrue() {
    this.setState({
      isProcessing: true,
    });
  }

  /**
   * Sets all menu bar items as hidden
   */
  setMenuBarItemsAsHidden() {
    this.setState({
      menuBarItemsHidden: true,
    });
  }

  /**
   * Sets all menu bar items as visible
   */
  setMenuBarItemsAsVisible() {
    this.setState({
      scrollMenuBarItemsLeftHidden: this.state.index === 0,
      menuBarItemsHidden: false,
      scrollMenuBarItemsRightHidden: (this.state.index + this.state.maxIndex) >= this.props.menuBarItemsList.length,
    });
  }

  render() {
    const centralContentCss = 'menu-bar-central-content';

    return (
      <BaseMenuBar backgroundColour={this.props.backgroundColour} id={`${this.props.id}--${this.props.backgroundColour}--menu-bar`}>
        <ScrollMenuBarItemsLeft backgroundColour={this.props.backgroundColour} id={this.props.id} isHidden={this.state.scrollMenuBarItemsLeftHidden}
          onClick={this.handleOnClickScrollMenuBarItemsLeft}/>
        <div id={`${this.props.id}--central-content--${this.props.backgroundColour}--menu-bar`} className={centralContentCss}>
          {
            this.props.menuBarItemsList.map((menuBarItemData, index) => {
              if (index >= this.state.index && index < (this.state.index + this.state.maxIndex)) {
                let addRightSideSpacing = true;
                if (index === ((this.state.index + this.state.maxIndex) - 1) || index === this.props.menuBarItemsList.length - 1) {
                  /* Do not add right side spacing for the last rendered item in the current output and / or the last rendered item in the list */
                  addRightSideSpacing = false;
                }
                if (menuBarItemData.dropdownMenuBarItemsList === undefined) {
                  return <MenuBarItem addRightSideSpacing={addRightSideSpacing} backgroundColour={this.props.backgroundColour} href={menuBarItemData.href} id={menuBarItemData.id}
                    isHidden={this.state.menuBarItemsHidden} key={menuBarItemData.id}>
                      {menuBarItemData.title}
                  </MenuBarItem>;
                }
                if (menuBarItemData.dropdownMenuBarItemsList !== undefined) {
                  return <DropdownMenuBarItem addRightSideSpacing={addRightSideSpacing} backgroundColour={this.props.backgroundColour}
                    dropdownMenuBarItemData={menuBarItemData} id={menuBarItemData.id} isHidden={this.state.menuBarItemsHidden} key={menuBarItemData.id} />
                }
              }
              return null;
            })
          }
        </div> 
        <ScrollMenuBarItemsRight backgroundColour={this.props.backgroundColour} id={this.props.id} isHidden={this.state.scrollMenuBarItemsRightHidden}
          onClick={this.handleOnClickScrollMenuBarItemsRight}/>
      </BaseMenuBar>
    );
  }
}
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The list of menu bar items to be rendered in the menu bar. */
  menuBarItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
export default MenuBar;
