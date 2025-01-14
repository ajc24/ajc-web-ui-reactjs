/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import DecorativeImage from './DecorativeImage';
import './css/image.css';

/* Set the size dimensions for header logos (if rendered) */
const tallHeaderLogoDimensions = {
  height: {
    solo: {
      noUpperBorder: 304,
      withUpperBorder: 300,
    },
  },
  width: {
    default: 328,
  },
};

/**
 * Tall Header Logo component which describes an image which is used solely for decoration in the header of
 * a web application. This component is intended for use with the Tall Header component.
 */
class TallHeaderLogo extends React.Component {
  /**
   * Initialise the tall header logo component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      height: tallHeaderLogoDimensions.height.solo.noUpperBorder,
      width: tallHeaderLogoDimensions.width.default,
    }
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    /* Initial set of the header logo size based on the screens current size */
    this.handleScreenWidth();

    /* Watch over all future window resize events - we will want to alter the height of the logo depending on how the title text and subtitle text elements are rendered */
    window.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Handles resize events in the browser. This function will reduce the alter the logo size
   * depending on whether the logo is rendered with header title text and what size the title text is
   * currently being rendered at (ie. whether it is max size, reduced in size, is truncated)
   */
  handleScreenWidth() {
    /* Set the initial height of the logo based on whether the top border is rendered or not */
    let newLogoHeight = tallHeaderLogoDimensions.height.solo.noUpperBorder;
    if (this.props.isTopBorderDisplayed === true) {
      newLogoHeight = tallHeaderLogoDimensions.height.solo.withUpperBorder;
    }
    if (this.props.headerTitleTextId !== undefined) {
      /* Title text is rendered with the logo - get the title text heading element and determine its height */
      const titleTextElement = document.querySelector(`div[id="${this.props.headerTitleTextId}--title-text"] > h1`);
      if (titleTextElement !== null) {
        const titleTextElementHeight = titleTextElement.getBoundingClientRect().height;

        /* Set the initial new logo height based on the height of the title text element */
        newLogoHeight -= titleTextElementHeight;
        if (this.props.subtitleTextId !== undefined) {
          /* Subtitle text is also rendered with the logo - alter the logo height to suit */
          const subtitleTextElement = document.querySelector(`div[id="${this.props.subtitleTextId}--subtitle-text"] > p`);
          if (subtitleTextElement !== null) {
            const isHidden = subtitleTextElement.getAttribute('aria-hidden');
            if (isHidden === 'false') {
              /* Set the final new logo height based on the height of the subtitle text element */
              const subtitleTextElementHeight = subtitleTextElement.getBoundingClientRect().height;
              newLogoHeight -= subtitleTextElementHeight;
            }
          }
        }
      }
    }
    /* Set the height of the logo now we have taken the top border and both the title text and subtitle text elements into account */ 
    this.setHeight(newLogoHeight);
  }

  /**
   * Sets the height of the logo
   * @param {number} newHeight 
   */
  setHeight(newHeight) {
    this.setState({
      height: newHeight,
    });
  }

  render() {
    const containerCss = 'image-tall-header-logo-alignment';
    return (
      <div className={containerCss}>
        <DecorativeImage id={`${this.props.id}--tall-header-logo`} src={this.props.src} height={this.state.height} width={this.state.width} />
      </div>
    );
  }
}
TallHeaderLogo.propTypes = {
  /** The unique identifier which was given to the header title text component. */
  headerTitleTextId: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /* Switch to indicate whether the Small Header components top border is displayed or not */
  isTopBorderDisplayed: PropTypes.bool,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The unique identifier which was given to the subtitle text component. */
  subtitleTextId: PropTypes.string,
};
export default TallHeaderLogo;
