/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DecorativeImage } from '../..';
import '../css/common.css';
import './css/image-header-logo.css';

/* Set the dimensions for all permutations of the header logo */
const dimensions = {
  small: {
    height: {
      noBorder: 144,
      withBorder: 140,
    },
    width: {
      rectangle: 312,
      square: 140,
    },
  },
  tall: {
    height: {
      noBorder: 304,
      withBorder: 300,
    },
    width: 312,
  },
};

/**
 * Header Logo image component which renders an image, developed solely for use inside the Header component
 * in a web application. The heights and widths of the image are automatically adjusted to fit the dimensions
 * of the Header component.
 */
class HeaderLogo extends React.Component {
  /**
   * Initialises the header logo image component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      height: undefined,
      width: undefined,
    };
    this.handleImageSize = this.handleImageSize.bind(this);
    this.setImageSize = this.setImageSize.bind(this);
  }

  componentDidMount() {
    /* Determine the initial height and width of the image - set the smallest timeout in order to register header components successfully */
    setTimeout(() => {
      this.handleImageSize();
    }, 10);

    /* Watch over all future window resize events - we will want to alter the logo image size to suit the new screen size */
    window.addEventListener('resize', this.handleImageSize);
  }

  handleImageSize() {
    /* Determine whether the logo type is to be a square image or rectangular image */
    let logoType;
    this.props.logoType === 'rectangle'
      ? logoType = 'rectangle'
      : logoType = 'square';

    /* Determine which header component type is used - defaults to the small header component type */
    let headerType;
    document.querySelector('div[class*="header-tall-height-"]') !== null
      ? headerType = 'tall'
      : headerType = 'small';
    /* Determine whether a top border is rendered in the header or not - defaults to no border rendered */
    let borderType;
    document.querySelector(`div[class*="header-${headerType}-height-with-border"]`) !== null
      ? borderType = 'withBorder'
      : borderType = 'noBorder';

    /* Determine whether any title text and / or subtitle text components are rendered - only relevant for tall headers where the logo will appear above these text components */
    let allowanceTitleAndSubtitleText = 0;
    if (headerType === 'tall') {
      /* Check 1 - Verify the size of the title text component if it is rendered */
      const headerTitleTextElement = document.querySelector('div[id$="--header-title-text"]');
      let titleTextIsWrapped = false;
      if (headerTitleTextElement !== null) {
        /* Determine if the title text is wrapped or not */
        (headerTitleTextElement.dataset.wrap === 'true')
          ? titleTextIsWrapped = true
          : titleTextIsWrapped = false;

        /* Get the height of the title text component and add it to the allowance */
        allowanceTitleAndSubtitleText += headerTitleTextElement.getBoundingClientRect().height;
      }

      /* Check 2 - Verify the size of the subtitle text component if it is rendered */
      if (titleTextIsWrapped === false) {
        const subtitleTextElement = document.querySelector('div[id$="--header-subtitle-text"]');
        if (subtitleTextElement !== null) {
          /* Get the height of the subtitle text component and add it to the allowance */
          allowanceTitleAndSubtitleText += subtitleTextElement.getBoundingClientRect().height;
        }
      }
    }
    /* Calculate the heights and widths for the current image based on the screen size */
    const imageHeight = dimensions[`${headerType}`].height[`${borderType}`] - allowanceTitleAndSubtitleText;
    let imageWidth;
    headerType === 'tall'
      ? imageWidth = dimensions.tall.width
      : imageWidth = dimensions.small.width[`${logoType}`];
    
    /* Set the size of the image */
    this.setImageSize(imageHeight, imageWidth);
  }

  /**
   * Sets the dimensions for the header logo image
   * @param {number} newHeight 
   * @param {number} newWidth 
   */
  setImageSize(newHeight, newWidth) {
    this.setState({
      height: newHeight,
      width: newWidth,
    });
  }

  render() {
    /* Set the styling for the container element */
    let containerCss = 'background-transparent';
    this.props.parentHeaderId === undefined
      ? containerCss += ' page-template-container'
      : containerCss += ' image-header-logo-inside-header';
    this.props.alignment === 'centre'
      ? containerCss += ' image-header-logo-alignment-centre'
      : containerCss += ' image-header-logo-alignment-left';
    
    return (
      <div className={containerCss}>
        <DecorativeImage id={`${this.props.id}--header-logo`} src={this.props.src} height={this.state.height} width={this.state.width} />
      </div>
    );
  }
}
HeaderLogo.propTypes = {
  /* The alignment of the logo image. The image by default will be left aligned but can also be centre aligned. */
  alignment: PropTypes.oneOf([ 'centre', 'left' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /**
   * The type of logo to be displayed in the Header component.
   * 
   * If the small Header type is rendered without any title or subtitle text content inside of it, this logo image can be rendered in both square and rectangular forms.
   * By default, a square logo type is chosen. You can override this setting by choosing the "rectangle" logo type. When a rectangular logo is rendered, the maximum width
   * it will be rendered at is 312px to suit rendering on smaller screens.
   * 
   * If the small Header type is rendered with title and / or subtitle text included, this logo will default to a square image regardless of setting, and will be rendered
   * to the left of the text components.
   * 
   * If the tall Header type is rendered then the logo will appear above any title and / or subtitle text components that are rendered.
   */
  logoType: PropTypes.oneOf([ 'rectangle', 'square' ]),
  /** The unique identifier of the Header component in which this logo image component is rendered. */
  parentHeaderId: PropTypes.string,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
}
export default HeaderLogo;
