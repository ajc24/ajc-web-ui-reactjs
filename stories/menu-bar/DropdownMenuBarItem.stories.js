/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DropdownMenuBarItem } from '../../src';

export default {
  title: 'Menu Bar/Dropdown Menu Bar Item',
  component: DropdownMenuBarItem,
};

const dropdownMenuBarItemData = {
  dropdownMenuBarItemsList: [
    {
      href: '#',
      id: 'dropdown-menu-bar-item-1',
      title: 'Dropdown Menu Bar Item 1',
    },
    {
      href: '#',
      id: 'dropdown-menu-bar-item-2',
      title: 'Dropdown Menu Bar Item 2',
    },
    {
      href: '#',
      id: 'dropdown-menu-bar-item-3',
      title: 'Dropdown Menu Bar Item 3',
    },
    {
      href: '#',
      id: 'dropdown-menu-bar-item-4',
      title: 'Dropdown Menu Bar Item 4',
    },
    {
      href: '#',
      id: 'dropdown-menu-bar-item-5',
      title: 'Dropdown Menu Bar Item 5',
    },
  ],
  id: 'menu-bar-item',
  title: 'Menu Bar Item',
};

const dropdownMenuBarItemData_TruncatedText = {
  dropdownMenuBarItemsList: [
    {
      href: '#',
      id: 'dropdown-menu-bar-item-1',
      title: 'Dropdown Menu Bar Item 1',
    },
    {
      href: '#',
      id: 'dropdown-menu-bar-item-2',
      title: 'Dropdown Menu Bar Item 2',
    },
  ],
  id: 'menu-bar-item',
  title: 'With Truncated Text Content',
};

/**
 * Dropdown Menu Bar Item component template, rendered outside all / any menu bar components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DropdownMenuBarItem = args => {
  return <DropdownMenuBarItem {...args} />;
}

/**
 * Dropdown Menu Bar Item component designed to test component visibility toggle
 */
class Template_DropdownMenuBarItem_VisibilityToggle extends React.Component {
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
        <DropdownMenuBarItem backgroundColour="grey" dropdownMenuBarItemData={dropdownMenuBarItemData} id="visibility-toggle" isHidden={this.state.isHidden}>
          Toggle Test
        </DropdownMenuBarItem>
        <br />
        <button id="visibility-toggle" onClick={this.onClickToggleIsHidden}>Toggle Visibility</button>
      </React.Fragment>
    );
  }
}

/**
 * Dropdown Menu Bar Item component template to be used to test the visibility toggle
 * @param {*} args 
 * @returns {React.Component}
 */
const Template_DropdownMenuBarItem_VisibilityToggle_Story = args => {
  return <Template_DropdownMenuBarItem_VisibilityToggle {...args} />;
}

export const DefaultWhite = {
  args: {
    children: 'Default White',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'default-white',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithGoldBackground = {
  args: {
    backgroundColour: 'gold',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-gold-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithGreenBackground = {
  args: {
    backgroundColour: 'green',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-green-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithGreyBackground = {
  args: {
    backgroundColour: 'grey',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-grey-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithNavyAndGoldBackground = {
  args: {
    backgroundColour: 'navy-and-gold',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-navy-and-gold-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithNavyAndWhiteBackground = {
  args: {
    backgroundColour: 'navy-and-white',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-navy-and-white-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithRedBackground = {
  args: {
    backgroundColour: 'red',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-red-background',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const WithRightSideSpacing = {
  args: {
    addRightSideSpacing: true,
    backgroundColour: 'navy-and-white',
    dropdownMenuBarItemData: dropdownMenuBarItemData,
    id: 'with-right-side-spacing',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
}

export const WithTruncatedText = {
  args: {
    backgroundColour: 'red',
    dropdownMenuBarItemData: dropdownMenuBarItemData_TruncatedText,
    id: 'with-truncated-text',
    isHidden: false,
  },
  render: Template_DropdownMenuBarItem,
};

export const VisibilityToggleTest = {
  args: {},
  render: Template_DropdownMenuBarItem_VisibilityToggle_Story,
};
