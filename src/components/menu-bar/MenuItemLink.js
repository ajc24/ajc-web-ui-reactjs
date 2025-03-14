/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/menu-bar-common.css';
import './css/menu-bar-item-link.css';

const maximumMenuItemLinkHeight = 50;

/**
 * Menu Item Link hyperlink component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click the menu item or interact with the item via the keyboard (spacebar and enter key presses supported) and from there, will be redirected
 * to another page in the web application.
 */
class MenuItemLink extends React.Component {
  /**
   * Initialise the Menu Item Link component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleTextContentHeight = this.handleTextContentHeight.bind(this);
  }

  componentDidMount() {
    this.handleTextContentHeight();
  }

  /**
   * Handle key down events on the hyperlink
   * @param {Event} event 
   */
  handleOnKeyDown(event) {
    if (event.key === ' ') {
      /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
      event.target.click();
    }
  }

  /**
   * Handles the height of the menu item link text content. The height of the text content
   * should not exceed the height of the item container itself.
   */
  handleTextContentHeight() {
    if (this.props.isHidden === undefined || this.props.isHidden === false) {
      /* Retrieve the span element from the DOM and determine its height and text content */
      const spanElement = document.querySelector(`a[id="${this.props.id}--menu-item-link"] > span`);
      let spanHeight = spanElement.getBoundingClientRect().height;
      let spanTextContent = spanElement.textContent;
      while (spanTextContent.length > 0 && spanHeight > maximumMenuItemLinkHeight) {
        /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
        spanTextContent = `${spanTextContent.substring(0, spanTextContent.length - 1).trim()}...`;

        /* Set the new text content string and determine the new height of the element */
        spanElement.textContent = spanTextContent;
        spanHeight = spanElement.getBoundingClientRect().height;
        if (spanHeight > maximumMenuItemLinkHeight) {
          /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
          spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
        }
      }
    }
  }

  render() {
    /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
    const { backgroundColour, fontColour } = getColourCombination(this.props.menuItemColour);

    /* Set the styling for the menu item link container element */
    let containerCss = `menu-item-link-container`;
    (this.props.rightSideSpacing !== undefined && this.props.rightSideSpacing === false)
      ? containerCss += ' menu-item-link-container-right-side-spacing-off'
      : containerCss += ' menu-item-link-container-right-side-spacing-on';
    (this.props.isHidden !== undefined && this.props.isHidden === true)
      ? containerCss += ' hidden'
      : containerCss += ''.trim();

    /* Set the styling for the link element */
    const linkCss = `menu-item-link background-${backgroundColour} menu-item-link-border-${backgroundColour} font-default font-${fontColour}`;

    return (
      <div className={containerCss} aria-hidden={`${this.props.isHidden || false}`}>
        <a id={`${this.props.id}--menu-item-link`} className={linkCss} role="link" aria-label={this.props.children} tabIndex={this.props.isHidden === true ? '-1' : '0'}
          href={`${this.props.href}`} onKeyDown={this.handleOnKeyDown}>
            <span>{this.props.children}</span>
        </a>
      </div>
    );
  }
}
MenuItemLink.propTypes = {
  /** The menu item links text content. */
  children: PropTypes.string.isRequired,
  /** The URL to which the user will be redirected to after clicking on the link. */
  href: PropTypes.string.isRequired,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The switch for whether the menu item is to be hidden or not. If the menu item is hidden, no content is displayed and all mouse and keyboard interactions are disabled. */
  isHidden: PropTypes.bool,
  /** The background colour for the menu item link. The default colour for the background is white. */
  menuItemColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** Optional right side spacing (margin) of 4px to be used when separating multiple menu item link components. By default this spacing is enabled. */
  rightSideSpacing: PropTypes.bool,
};
export default MenuItemLink;
