/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DropdownMenuBarButton } from '../../src';

export default {
  title: 'Menu Bar/Dropdown Menu Bar Button',
  component: DropdownMenuBarButton,
};

/**
 * Dropdown Menu Bar Button component template, rendered outside all / any menu bar components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DropdownMenuBarButton = args => {
  return <DropdownMenuBarButton {...args} />;
}

/**
 * Dropdown Menu Bar Button component designed to test component visibility toggle
 */
class Template_DropdownMenuBarButton_VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.onClickToggleIsHidden = this.onClickToggleIsHidden.bind(this);
  }

  onClickToggleIsHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    return (
      <React.Fragment>
        <DropdownMenuBarButton backgroundColour="grey" id="visibility-toggle" isHidden={this.state.isHidden} />
        <br />
        <button id="visibility-toggle" onClick={this.onClickToggleIsHidden}>Toggle Visibility</button>
      </React.Fragment>
    );
  }
}

/**
 * Dropdown Menu Bar Button component template to be used to test the visibility toggle
 * @param {*} args 
 * @returns {React.Component}
 */
const Template_DropdownMenuBarButton_VisibilityToggle_Story = args => {
  return <Template_DropdownMenuBarButton_VisibilityToggle {...args} />;
}

export const DefaultWhite = {
  args: {
    id: 'default-white',
    isHidden: false,
  },
  render: Template_DropdownMenuBarButton,
};

export const VisibilityToggleTest = {
  args: {},
  render: Template_DropdownMenuBarButton_VisibilityToggle_Story,
};
