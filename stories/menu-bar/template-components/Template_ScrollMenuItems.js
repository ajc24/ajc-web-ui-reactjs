import React from 'react';
import { ScrollMenuItems } from '../../../src';

class Template_ScrollMenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
    this.handleClick_EnableDisable = this.handleClick_EnableDisable.bind(this);
    this.handleClick_FocusOnPrev = this.handleClick_FocusOnPrev.bind(this);
  }

  handleClick_EnableDisable(event) {
    event.preventDefault();
    this.setState({
      isDisabled: !this.state.isDisabled,
    });
  }

  handleClick_FocusOnPrev(event) {
    event.preventDefault();
    document.querySelector('button[id="prev-button"]').focus();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button id="prev-button">Previous Button</button>
          <ScrollMenuItems id="test-id" isDisabled={this.state.isDisabled} menuBarColour="navy-and-gold" />
        </div>
        <div>
          <button id="focus-on-prev" onClick={this.handleClick_FocusOnPrev}>Focus on Previous Button</button>
          <button id="enable-disable-button" onClick={this.handleClick_EnableDisable}>Enable / Disable Scroll Menu Items Button</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Template_ScrollMenuItems;