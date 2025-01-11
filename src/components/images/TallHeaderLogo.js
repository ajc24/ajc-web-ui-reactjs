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
    withTitleAndSubtitleText: {
      default: 0,
    },
    withTitleText: {
      noWrap: 0,
      withWrap: 0,
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
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    if (this.props.isTopBorderDisplayed === true) {
      this.setHeight(tallHeaderLogoDimensions.height.solo.withUpperBorder);
    }
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
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /* Switch to indicate whether the Small Header components top border is displayed or not */
  isTopBorderDisplayed: PropTypes.bool,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default TallHeaderLogo;
