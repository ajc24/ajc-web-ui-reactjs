/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderBase from '../base/HeaderBase';
import HeaderSubtitleText from '../base/HeaderSubtitleText';
import HeaderTitleText from '../base/HeaderTitleText';
import '../css/common.css';
import './css/header.css';

/**
 * Header component which will render any combination of a logo, title and subtitle text. It can be rendered with a 4px upper border or without the border.
 * The border colours range from grey to red. This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most
 * commonly used desktop sizes (1920x1080). The default and small heights of the component is 160px. The tall height of the component is 320px.
 */
class Header extends React.Component {
  /**
   * Initialises the Header component
   * @param {{ id: string, size: string }} props 
   */
  constructor(props) {
    super(props);
  }

  render() {
    /* Set the CSS styling for the DOM elements */
    let contentCss = 'header-content';
    if (this.props.backgroundColour === 'grey') {
      contentCss += ' background-grey';
    } else {
      contentCss += ' background-white';
    }
    if (this.props.topBorder === 'grey' || this.props.topBorder === 'red') {
      /* Enable and render the upper border for the header */
      contentCss += ` header-border-top-${this.props.topBorder}`;
    }
    const titleAndSubtitleContainerCss = 'header-content-title-subtitle-text-container';
    return(
      <HeaderBase id={this.props.id} size={this.props.size}>
        <div id={`${this.props.id}--header-content`} className={contentCss}>
          {
            (this.props.size === undefined || this.props.size === 'default' || this.props.size === 'small') && this.props.logoSrc === undefined &&
              this.props.titleText !== undefined && this.props.subtitleText === undefined &&
                /* Small header - render only a title text component */
                <div className={titleAndSubtitleContainerCss}>
                  <HeaderTitleText id={this.props.id} titleTextColour={this.props.titleTextColour || 'black'}>
                    {this.props.titleText}
                  </HeaderTitleText>
                </div>
          }
          {
            (this.props.size === undefined || this.props.size === 'default' || this.props.size === 'small') && this.props.logoSrc === undefined &&
              this.props.titleText !== undefined && this.props.subtitleText !== undefined &&
                /* Small header - render both title text and subtitle text components */
                <div className={titleAndSubtitleContainerCss}>
                  <HeaderTitleText id={this.props.id} titleTextColour={this.props.titleTextColour || 'black'}>
                    {this.props.titleText}
                  </HeaderTitleText>
                  <HeaderSubtitleText id={this.props.id} headerTitleTextId={this.props.id} subtitleTextColour={this.props.subtitleTextColour || 'black'}>
                    {this.props.subtitleText}
                  </HeaderSubtitleText>
                </div>
          }
          {
            this.props.logoSrc === undefined && this.props.titleText === undefined && this.props.subtitleText === undefined &&
              /* Render custom content as provided by the developer */
              <React.Fragment>
                {this.props.children}
              </React.Fragment>
          }
        </div>
      </HeaderBase>
    );
  }
}
Header.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The custom content to be displayed inside the header. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The header logo image data to be displayed. */
  logoSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** The size of the component ranging from default / small (160px) to tall (320px). */
  size: PropTypes.oneOf([ 'default', 'small', 'tall' ]),
  /** The text content to be displayed as the subtitle text. */
  subtitleText: PropTypes.string,
  /** The colour of the subtitle text, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  subtitleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** The text content to be displayed as the title text. */
  titleText: PropTypes.string,
  /** The colour of the title text, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  titleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: PropTypes.oneOf([ 'off', 'grey', 'red' ]),
};
export default Header;
