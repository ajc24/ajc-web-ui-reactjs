/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import InformativeImage from './InformativeImage';
import {
  divide_Integer,
  getBoundingClientRect,
  multiply_Integer,
} from '../data/dom-measurements';
import './css/image-three-photo-collage.css';

const initialMarginTop = 65;
const maximumImageWidth = 620;

/**
 * Three Photo Collage component which is intended for use inside the Main component in the web application. Renders three photos in a collage
 * with two photos being placed side by side in the upper section of the collage and a single photo overlapping them slightly in the lower section.
 * 
 * This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080)
 * and will automatically adjust the heights and widths of the images to suit the current screen size.
 */
class ThreePhotoCollage extends React.Component {
  /**
   * Constructor for the Three Photo Collage component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
    this.getIdLowerImageContainerDOMElement = this.getIdLowerImageContainerDOMElement.bind(this);
    this.getIdRootContainerDOMElement = this.getIdRootContainerDOMElement.bind(this);
    this.getIdUpperImagesContainerDOMElement = this.getIdUpperImagesContainerDOMElement.bind(this);
    this.getLowerImageContainerDOMElement = this.getLowerImageContainerDOMElement.bind(this);
    this.getRootContainerDOMElement = this.getRootContainerDOMElement.bind(this);
    this.getUpperImageRightContainerDOMElement = this.getUpperImageRightContainerDOMElement.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    /* Auto handle the initial screen size after a slight pause to give the page time to load */
    setTimeout(() => {
      this.handleWindowResize(true);
    }, 50);

    /* For all future screen resize events, ensure that the image dimensions are handled correctly */
    window.addEventListener('resize', this.handleWindowResize);
  }

  /**
   * Retrieves the ID set to the lower image container element
   * @returns {string}
   */
  getIdLowerImageContainerDOMElement() {
    return `${this.props.id}--lower-section--three-photo-collage`;
  }

  /**
   * Retrieves the ID set to the root container element
   * @returns {string}
   */
  getIdRootContainerDOMElement() {
    return `${this.props.id}--three-photo-collage`;
  }

  /**
   * Retrieves the ID set to the upper images container element
   * @returns {string}
   */
  getIdUpperImagesContainerDOMElement() {
    return `${this.props.id}--upper-section--three-photo-collage`;
  }

  /**
   * Retrieves the DOM element for the lower image container element
   * @returns {HTMLElement}
   */
  getLowerImageContainerDOMElement() {
    return document.querySelector(`div[id="${this.getIdLowerImageContainerDOMElement()}"]`);
  }

  /**
   * Retrieves the DOM element for the root container element
   * @returns {HTMLElement}
   */
  getRootContainerDOMElement() {
    return document.querySelector(`div[id="${this.getIdRootContainerDOMElement()}"]`);
  }

  /**
   * Retrieves the DOM element for the right sided upper image container element
   * @returns {HTMLElement}
   */
  getUpperImageRightContainerDOMElement() {
    return document.querySelector(`div[id="${this.getIdUpperImagesContainerDOMElement()}"] > div[class*="three-photo-collage--upper-image-right"]`);
  }

  /**
   * Handler for screen resize events - the images width and height need to be determined based on the new screen size
   */
  handleWindowResize(onLoadPage = false) {
    const rightUpperImageContainerElement = this.getUpperImageRightContainerDOMElement();
    if (rightUpperImageContainerElement !== null) {
      /* Get the full width of the image container */
      const imageContainerDimensions = getBoundingClientRect(rightUpperImageContainerElement);
      const imageContainerWidth = imageContainerDimensions.width;

      /* Get the lower image container element */
      const lowerImageContainerElement = this.getLowerImageContainerDOMElement();

      /* For every 15 pixels less than the maximum permitted width - reduce the margin top allowance by 1px */
      const imagePixelReduction = maximumImageWidth - imageContainerWidth;
      const marginTopPixelReduction = divide_Integer(imagePixelReduction, 15);
      const marginTop = `-${initialMarginTop - marginTopPixelReduction}px`;

      /* Set the new margin top CSS value to the lower image container element */
      lowerImageContainerElement.style.marginTop = marginTop;
      
      /* Set the height and width of the images based on the current container width */
      this.setState({
        height: multiply_Integer(imageContainerWidth, 0.75),
        width: imageContainerWidth,
      }, () => {
        /* If this is the first time we have loaded the page - blend in the photos now everything has been loaded and set */
        if (onLoadPage === true) {
          const rootContainerElement = this.getRootContainerDOMElement();
          rootContainerElement.style.opacity = 1;
        }
      });
    }
  }

  render() {
    /* Set the styling for the root element */
    const rootCss = 'three-photo-collage-root';

    /* Set the styling for the upper images container element */
    const upperImagesContainerCss = 'three-photo-collage-upper-images-container';

    /* Set the styling for the leftmost image container in the upper images container element */
    const upperImageLeftContainerCss = 'three-photo-collage--upper-image-left three-photo-collage-image-container three-photo-collage-image-container-spacing';

    /* Set the styling for the rightmost image container in the upper images container element */
    const upperImageRightContainerCss = 'three-photo-collage--upper-image-right three-photo-collage-image-container';

    /* Set the styling for the lower image container element */
    const lowerImageContainerCss = 'three-photo-collage-lower-image-container';

    /* */
    let lowerImageRenderCss = 'three-photo-collage-lower-image-render';
    this.props.borderColour === 'grey' ? lowerImageRenderCss += ' three-photo-collage-image-border-grey' : lowerImageRenderCss += ' three-photo-collage-image-border-white';

    return (
      <div className={rootCss} id={this.getIdRootContainerDOMElement()}>
        <div className={upperImagesContainerCss} id={this.getIdUpperImagesContainerDOMElement()}>
          <div className={upperImageLeftContainerCss}>
            <InformativeImage alt={this.props.imageUpperLeftData.alt} height={this.state.height} id={this.props.id} src={this.props.imageUpperLeftData.src}
              width={this.state.width} />
          </div>
          <div className={upperImageRightContainerCss}>
            <InformativeImage alt={this.props.imageUpperRightData.alt} height={this.state.height} id={this.props.id} src={this.props.imageUpperRightData.src}
              width={this.state.width} />
          </div>
        </div>
        <div className={lowerImageContainerCss} id={this.getIdLowerImageContainerDOMElement()}>
          <div className={lowerImageRenderCss}>
            <InformativeImage alt={this.props.imageLowerData.alt} height={this.state.height} id={this.props.id} src={this.props.imageLowerData.src} width={this.state.width} />
          </div>
        </div>
      </div>
    );
  }
}
ThreePhotoCollage.propTypes = {
  /** The border colour used for the collage. Ideally you would set this to match the background colour of the Main component. The default colour for the border is white. */
  borderColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The data for the image to be rendered centrally in the lower section of the collage. */
  imageLowerData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
  /** The data for the image to be rendered to the left side of the upper section of the collage. */
  imageUpperLeftData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
  /** The data for the image to be rendered to the right side of the upper section of the collage. */
  imageUpperRightData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
};
export default ThreePhotoCollage;
