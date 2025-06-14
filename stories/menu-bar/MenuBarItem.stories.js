/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { MenuBarItem } from '../../src';

export default {
  title: 'Menu Bar/Menu Bar Item',
  component: MenuBarItem,
};

/**
 * Menu Bar Item component template, rendered outside all / any menu bar components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MenuBarItem = args => {
  return <MenuBarItem {...args} />;
}

class Template_MenuBarItem_VisibilityToggle extends React.Component {
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
        <MenuBarItem backgroundColour="gold" href="#" id="visibility-toggle" isHidden={this.state.isHidden} />
        <br />
        <button id="visibility-toggle" onClick={this.onClickToggleIsHidden}>Toggle Visibility</button>
      </React.Fragment>
    );
  }
}

const Template_MenuBarItem_VisibilityToggle_Story = args => {
  return <Template_MenuBarItem_VisibilityToggle {...args} />;
}

export const Default = {
  args: {
    children: '',
    href: '#',
    id: 'default',
    isHidden: false,
  },
  render: Template_MenuBarItem,
};

export const WithGoldBackground = {
  args: {
    backgroundColour: 'gold',
    children: '',
    href: '#',
    id: 'with-gold-background',
    isHidden: false,
  },
  render: Template_MenuBarItem,
};

export const VisibilityTest = {
  args: {},
  render: Template_MenuBarItem_VisibilityToggle_Story,
};
