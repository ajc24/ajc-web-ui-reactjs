/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { Header } from '../../src';
// import headerBgImage from '../images/files/header-bg-image.png';
// import tallHeaderBgImage from '../images/files/tall-header-bg-image.png';

export default {
  title: 'Header Components/Header',
  component: Header,
  tags: ['autodocs'],
};

/**
 * Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_Header = args => {
  return <React.Fragment>
    <Header {...args} >
      <p>This component is designed to act as a header component in a web application.</p>
      <p>This version of the header component is rendering custom developer content.</p>
    </Header>
  </React.Fragment>;
}
export const Default = Template_Header.bind({});
Default.args = {};
