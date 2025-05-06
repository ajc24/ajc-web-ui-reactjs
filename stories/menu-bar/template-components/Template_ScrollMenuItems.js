/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { ScrollMenuItems } from '../../../src';

/**
 * Template Scroll Menu Items component which tests the keyboard navigation when clicking to disable the buttons
 */
class Template_ScrollMenuItems extends React.Component {
  /**
   * Initialise the Template Scroll Menu Items component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isDisabledLeft: true,
      isDisabledRight: true,
    };
    this.handleClick_Disable_Left = this.handleClick_Disable_Left.bind(this);
    this.handleClick_Disable_Right = this.handleClick_Disable_Right.bind(this);
    this.handleClick_Enable = this.handleClick_Enable.bind(this);
  }

  /**
   * Handles click events which disable the leftmost Scroll Menu Items button
   */
  handleClick_Disable_Left() {
    this.setState({
      isDisabledLeft: true,
    });
  }

  /**
   * Handles click events which disable the rightmost Scroll Menu Items button
   */
  handleClick_Disable_Right() {
    this.setState({
      isDisabledRight: true,
    });
  }

  /**
   * Handles click events which enables both Scroll Menu Items buttons
   * @param {Event} event 
   */
  handleClick_Enable(event) {
    event.preventDefault();
    this.setState({
      isDisabledLeft: false,
      isDisabledRight: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <ScrollMenuItems id="left-scroll-menu-items" isDisabled={this.state.isDisabledLeft} menuBarColour="navy-and-gold" onClick={this.handleClick_Disable_Left} 
            side="left" firstRenderedMenuItemId="first-button" />
          <button id="first-button">First Button</button>
          <button id="last-button">Last Button</button>
          <ScrollMenuItems id="right-scroll-menu-items" isDisabled={this.state.isDisabledRight} menuBarColour="navy-and-gold" onClick={this.handleClick_Disable_Right}
            side="right" lastRenderedMenuItemId="last-button" />
        </div>
        <div>
          <button id="enable-button" onClick={this.handleClick_Enable}>Enable Scroll Menu Items Button</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Template_ScrollMenuItems;