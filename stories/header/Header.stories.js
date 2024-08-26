/**
 * Developed by Anthony Cox in 2024
 */
import { Header } from '../../src';

export default {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 'header-default',
  },
};

export const WithBorderDefault = {
  args: {
    id: 'header-with-border-default',
    showTopBorder: true,
  },
};

export const WithBorderGrey = {
  args: {
    id: 'header-with-border-grey',
    showTopBorder: true,
    topBorderColour: 'grey',
  },
};

export const WithBorderRed = {
  args: {
    id: 'header-with-border-red',
    showTopBorder: true,
    topBorderColour: 'red',
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
