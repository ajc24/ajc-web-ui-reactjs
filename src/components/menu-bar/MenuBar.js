/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MenuBarBase, MenuItemLink, ScrollMenuItems } from '../../';
import './css/menu-bar.css';

const menuItemsContainerClass = 'menu-items-container';
const menuItemsContainerAnimationsClass = 'menu-items-container-animations';
const menuItemOpacityTimeout = 250;
const menuItemWidth = 104;

/**
 * Menu Bar component to be used in the web application. This component allows for a number of menu bar item links and
 * dropdown menu items to be rendered, each offering navigation options for the user to navigate around your application.
 * If the number of menu items are too many to fit within the confines of the screen width, the user is presented with
 * buttons with which to scroll through all available menu items available to them.
 */
class MenuBar extends React.Component {
  /**
   * Initialise the Menu Bar component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      hideScrollMenuItemsNext: true,
      hideScrollMenuItemsPrev: true,
      isScrollButtonClickDisabled: false,
      menuItemsList: [],
      numberOfItemsToRender: -1,
      renderIndexStart: -1,
    };
    this.getMenuItemsContainerElement = this.getMenuItemsContainerElement.bind(this);
    this.handleClickScrollLeft = this.handleClickScrollLeft.bind(this);
    this.handleClickScrollRight = this.handleClickScrollRight.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.initialise = this.initialise.bind(this);
    this.setDisableScrollButtonClick = this.setDisableScrollButtonClick.bind(this);
    this.setEnableScrollButtonClick = this.setEnableScrollButtonClick.bind(this);
    this.setMenuItemsContainerAsHidden = this.setMenuItemsContainerAsHidden.bind(this);
    this.setMenuItemsContainerAsVisible = this.setMenuItemsContainerAsVisible.bind(this);
  }

  componentDidMount() {
    /* Initialise the component */
    this.initialise(this.props.menuItemsList);

    /* Watch over all future window resize events - we will want to alter the menu bar to suit the screen size */
    window.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Retrieves the menu items container element from the DOM.
   * @returns {HTMLElement}
   */
  getMenuItemsContainerElement() {
    return document.querySelector(`div[class*="${menuItemsContainerClass}"][class*="${menuItemsContainerAnimationsClass}"]`);
  }

  /**
   * Handles click events on the "Prev" button to scroll left through the list of available menu items.
   */
  handleClickScrollLeft() {
    if (this.state.isScrollButtonClickDisabled === false) {
      /* Mark the menu items container as hidden to gently hide the current list of items */
      this.setDisableScrollButtonClick();

      setTimeout(() => {
        /* Given we had to click "Prev" to scroll left, the "Next" button should be marked as visible after the click */
        const newHideScrollMenuItemsNext = false;

        /* Decrease the render index start position by the number of items to be rendered */
        const newRenderIndexStart = this.state.renderIndexStart - this.state.numberOfItemsToRender;

        /* Determine whether to render the scroll menu items prev button or not */
        const newHideScrollMenuItemsPrev = newRenderIndexStart === 0 ? true : false;

        /* Update the component state */
        this.setState({
          hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
          hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
          renderIndexStart: newRenderIndexStart,
        }, this.setEnableScrollButtonClick);
      }, menuItemOpacityTimeout);
    }
  }

  /**
   * Handles click events on the "Next" button to scroll right through the list of available menu items.
   */
  handleClickScrollRight() {
    if (this.state.isScrollButtonClickDisabled === false) {
      /* Mark the menu items container as hidden to gently hide the current list of items */
      this.setDisableScrollButtonClick();

      setTimeout(() => {
        /* Given we had to click "Next" to scroll right, the "Prev" button should be marked as visible after the click */
        const newHideScrollMenuItemsPrev = false;

        /* Increase the render index start position by the number of items to be rendered */
        const newRenderIndexStart = this.state.renderIndexStart + this.state.numberOfItemsToRender;

        /* Determine whether to render the scroll menu items next button or not */
        let newHideScrollMenuItemsNext;
        (newRenderIndexStart + this.state.numberOfItemsToRender) >= this.state.menuItemsList.length
          ? newHideScrollMenuItemsNext = true
          : newHideScrollMenuItemsNext = false;

        /* Update the component state */
        this.setState({
          hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
          hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
          renderIndexStart: newRenderIndexStart,
        }, this.setEnableScrollButtonClick);
      }, menuItemOpacityTimeout);
    }
  }

  /**
   * Handle changes to the screen width. Depending on the width of the screen, a subset of
   * the menu items list may need to be rendered to the user at any given time.
   */
  handleScreenWidth() {
    /* Determine the new number of items to render based on the current screen width */
    const menuItemContainerElement = this.getMenuItemsContainerElement();
    const menuItemContainerWidth = menuItemContainerElement.getBoundingClientRect().width;
    const newNumberOfItemsToRender = Math.floor(menuItemContainerWidth / menuItemWidth);

    /* Since we are resetting the render start index to zero on resizing - there will never be a prev button displayed */
    const newHideScrollMenuItemsPrev = true;

    /* Determine whether to render the scroll menu items next button or not */
    let newHideScrollMenuItemsNext;
    ((this.state.renderIndexStart + newNumberOfItemsToRender) >= this.state.menuItemsList.length)
      ? newHideScrollMenuItemsNext = true
      : newHideScrollMenuItemsNext = false;

    /* Update the component state */
    this.setState({
      hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
      hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
      numberOfItemsToRender: newNumberOfItemsToRender,
      renderIndexStart: 0,
    });
  }

  /**
   * Set the initial list of menu items and set the initial render start index.
   * Follows on from this action by handling the current screen width.
   * @param {Array.<JSON>} initMenuItemsList 
   */
  initialise(initMenuItemsList) {
    this.setState({
      menuItemsList: initMenuItemsList,
      renderIndexStart: 0,
    }, this.handleScreenWidth);
  }

  /**
   * Disables the scrolling buttons functionality and follows on from
   * this action by setting the menu items container element as hidden.
   */
  setDisableScrollButtonClick() {
    this.setState({
      isScrollButtonClickDisabled: true,
    }, this.setMenuItemsContainerAsHidden);
  }

  /**
   * Enables the scrolling buttons functionality.
   */
  setEnableScrollButtonClick() {
    this.setState({
      isScrollButtonClickDisabled: false,
    });
  }

  /**
   * Sets the opacity of the menu items container element to 0, rendering it hidden to the user.
   */
  setMenuItemsContainerAsHidden() {
    const menuItemContainerElement = this.getMenuItemsContainerElement();
    menuItemContainerElement.style.opacity = 0;
  }

  /**
   * Sets the opacity of the menu items container element to 1, rendering it visible to the user.
   */
  setMenuItemsContainerAsVisible() {
    const menuItemContainerElement = this.getMenuItemsContainerElement();
    menuItemContainerElement.style.opacity = 1;
  }

  render() {
    /* Set the styling for the overall menu bar container element */
    const menuBarContainerCss = 'menu-bar-container';

    /* Set the styling for the menu items container element */
    const menuItemsContainerCss = `${menuItemsContainerClass} ${menuItemsContainerAnimationsClass}`;

    /* Set the styling for the unordered list element */
    const unorderedListCss = 'menu-items-unordered-list';

    return (
      <MenuBarBase backgroundColour={this.props.backgroundColour} id={this.props.id}>
        <div className={menuBarContainerCss}>
          <ScrollMenuItems id={this.props.id} isHidden={this.state.hideScrollMenuItemsPrev} menuBarColour={this.props.backgroundColour} onClick={this.handleClickScrollLeft}
            side="left" />
          <div className={menuItemsContainerCss}>
            <ul className={unorderedListCss}>
              {
                this.state.menuItemsList.map((itemData, index) => {
                  if (index >= this.state.renderIndexStart && index < (this.state.renderIndexStart + this.state.numberOfItemsToRender)) {
                    /* Determine whether this is the last item being rendered - last menu items do not need right side spacing */
                    const isLastRenderedItem = 
                      index === (this.state.renderIndexStart + this.state.numberOfItemsToRender) - 1
                      || ((this.state.renderIndexStart + this.state.numberOfItemsToRender) > this.state.menuItemsList.length && index === this.state.menuItemsList.length - 1);

                    if (isLastRenderedItem === true) {
                      /* When all menu items are rendered, ensure the container element is visible */
                      this.setMenuItemsContainerAsVisible();
                    }

                    if (itemData.href !== undefined) {
                      /* Render a menu item link component */
                      return <li key={`${index}--${itemData.id}--list-item`}>
                        <MenuItemLink href={`${itemData.href}`} id={`${index}--${itemData.id}`} menuItemColour={this.props.backgroundColour}
                          rightSideSpacing={isLastRenderedItem ? false : true}>
                            {itemData.title}
                        </MenuItemLink>
                      </li>;
                    }
                  }
                })
              }
            </ul>
          </div>
          <ScrollMenuItems id={this.props.id} isHidden={this.state.hideScrollMenuItemsNext} menuBarColour={this.props.backgroundColour} onClick={this.handleClickScrollRight} 
            side="right" />
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
  /** The list of menu items to be rendered within the scope of the menu bar. */
  menuItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
export default MenuBar;
