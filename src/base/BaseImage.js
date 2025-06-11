/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import './css/base-image.css';

const defaultHeightAndWidth = 100;

/**
 * Baseline component for rendering images in the application.
 * This component allows for images to be fully customised in a variety of ways.
 */
class BaseImage extends React.Component {
  /**
   * Initialise the image base component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.mouseDownCustomFunction = this.mouseDownCustomFunction.bind(this);
    this.mouseDownDisableLeftAndCenterEvents = this.mouseDownDisableLeftAndCenterClickEvents.bind(this);
    this.onLoadSetImageOpacityToVisible = this.onLoadSetImageOpacityToVisible.bind(this);

    /* Create the references for this component */
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    /* Set the functionality to be executed when the on load event is fired */
    this.imageRef.current.addEventListener('load', this.onLoadSetImageOpacityToVisible);

    /* Set the functionality to be executed when the on mouse down event is fired */
    if (this.props.onClick !== undefined) {
      this.imageRef.current.addEventListener('mousedown', this.mouseDownCustomFunction);
    } else {
      this.imageRef.current.addEventListener('mousedown', this.mouseDownDisableLeftAndCenterClickEvents);
    }
  }

  /**
   * Executes the custom specified functionality for left click events on the image
   * @param {Event} event 
   */
  mouseDownCustomFunction(event) {
    this.mouseDownDisableLeftAndCenterClickEvents(event);
    if (event.button === 0) {
      /* Only execute the custom functionality for left click events */
      this.props.onClick();
    }
  }

  /**
   * Disables all default mouse down events on the image for center (scroll wheel) and left mouse clicks
   * @param {Event} event 
   */
  mouseDownDisableLeftAndCenterClickEvents(event) {
    if (event.button === 0 || event.button === 1) {
      /* Disable the left click / scroll wheel click action */
      event.preventDefault();
    }
  }

  /**
   * Sets the opacity of the image to visible when the on load event is fired.
   * This function is especially useful when used in conjunction with transitions to fade loaded images into view.
   */
  onLoadSetImageOpacityToVisible() {
    this.imageRef.current.style.opacity = 1;
    this.imageRef.current.removeEventListener('load', this.onLoadSetImageOpacityToVisible);
  }

  render() {
    /* Set the CSS styling for the image */
    const imageCss = 'image';

    /* Set the alternative text for the image - assume a decorative image and only change if it is an informative or functional image */
    let altText = '';
    if (this.props.alt !== undefined) {
      altText = `${this.props.alt}`;
    }
    /* Set the size for the image - assume a default size or set the custom size if provided */
    let imageHeight = defaultHeightAndWidth;
    let imageWidth = defaultHeightAndWidth;
    if (this.props.height !== undefined) {
      /* Set the custom height for the image */
      imageHeight = this.props.height;
    }
    if (this.props.width !== undefined) {
      /* Set the custom width for the image */
      imageWidth = this.props.width;
    }
    return (
      <img id={this.props.id !== undefined ? this.props.id : 'default--base-image'} className={imageCss} src={this.props.src} width={imageWidth}
        height={imageHeight} alt={altText} ref={this.imageRef} />
    );
  }
}
BaseImage.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: PropTypes.string,
  /** The height of the image. */
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** The unique identifier for this component. */
  id: PropTypes.string,
  /** The custom functionality to be executed when the mouse down on image event is fired. */
  onClick: PropTypes.func,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The width of the image. */
  width: PropTypes.number,
};
export default BaseImage;
