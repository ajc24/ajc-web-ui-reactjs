/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import DecorativeImage from './DecorativeImage';
import InformativeImage from './InformativeImage';
import './css/image-three-photo-collage.css';

// 1280 - 32 (desktop) = 1248px
// 360 - 32 (mobile)   = 328px

// 8px spacing between images = 1240px (full width) or 320px (smallest)
// Images sized at 620px (full width) or 160px (smallest)

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
    this.getIdUpperImagesContainerDOMElement = this.getIdUpperImagesContainerDOMElement.bind(this);
    this.getUpperImageRightContainerDOMElement = this.getUpperImageRightContainerDOMElement.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    this.handleWindowResize();

    window.addEventListener('resize', this.handleWindowResize);
  }

  /**
   * Retrieves the DOM element for the right sided upper image container element
   * @returns {HTMLElement}
   */
  getUpperImageRightContainerDOMElement() {
    return document.querySelector(`div[id="${this.getIdUpperImagesContainerDOMElement()}"] > div[class="three-photo-collage-image-container"]`);
  }

  /**
   * Retrieves the ID set to the upper images container element
   * @returns {string}
   */
  getIdUpperImagesContainerDOMElement() {
    return `${this.props.id}--three-photo-collage`;
  }

  handleWindowResize() {
    const rightUpperImageContainerElement = this.getUpperImageRightContainerDOMElement();
    if (rightUpperImageContainerElement !== null) {
      const currentImageWidth = parseInt(rightUpperImageContainerElement.getBoundingClientRect().width, 10);
      this.setState({
        height: parseInt(currentImageWidth * 0.75, 10),
        width: currentImageWidth,
      });
    }
  }

  render() {
    /* Set the styling for the root element */
    const rootCss = 'three-photo-collage-root';

    /* Set the styling for the upper images container element */
    const upperImagesContainerCss = 'three-photo-collage-upper-images-container';

    /* Set the styling for the leftmost image container in the upper images container element */
    const upperImageLeftContainerCss = 'three-photo-collage-image-container three-photo-collage-image-container-spacing';

    /* Set the styling for the rightmost image container in the upper images container element */
    const upperImageRightContainerCss = 'three-photo-collage-image-container';

    /* Set the styling for the lower image container element */
    const lowerImageContainerCss = 'three-photo-collage-lower-image-container three-photo-collage-lower-image-container-spacing';

    return (
      <div className={rootCss}>
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
        <div className={lowerImageContainerCss}>
          <InformativeImage alt={this.props.imageLowerData.alt} height={this.state.height} id={this.props.id} src={this.props.imageLowerData.src} width={this.state.width} />
        </div>
      </div>
    );
  }
}
ThreePhotoCollage.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  imageLowerData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
  imageUpperLeftData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
  imageUpperRightData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  }).isRequired,
};
export default ThreePhotoCollage;
