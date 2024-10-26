/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Baseline component for rendering images in the application.
 * This component allows for images to be fully customised in a variety of ways.
 */
class ImageBase extends React.Component {
  /**
   * Initialise the image base component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.mouseDownDisableAllEvents = this.mouseDownDisableAllEvents.bind(this);
    this.onLoadSetImageOpacityToVisible = this.onLoadSetImageOpacityToVisible.bind(this);

    /* Create the references for this component */
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    /* Set the functionality to be executed when the on load event is fired */
    this.imageRef.current.addEventListener('load', this.onLoadSetImageOpacityToVisible);

    /* Set the functionality to be executed when the on mouse down event is fired */
    if (this.props.onClick !== undefined) {
      this.imageRef.current.addEventListener('mousedown', this.props.onClick);
    } else {
      this.imageRef.current.addEventListener('mousedown', this.mouseDownDisableAllEvents);
    }
  }

  /**
   * Disables all mouse down events on the image
   * @param {Event} event 
   */
  mouseDownDisableAllEvents(event) {
    event.preventDefault();
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
    /* Set the alternative text for the image - assume a decorative image and only change if it is an informative or functional image */
    let altText = '';
    if (this.props.alt !== undefined && typeof this.props.alt === 'string' && this.props.alt.length > 0) {
      altText = `${this.props.alt}`;
    }
    /* Set the size for the image - assume a default size or set the custom size if provided */
    let imageHeight = 100;
    let imageWidth = 100;
    if (this.props.height !== undefined && typeof this.props.height === 'number') {
      /* Set the custom height for the image */
      imageHeight = this.props.height;
    }
    if (this.props.width !== undefined && typeof this.props.width === 'number') {
      /* Set the custom width for the image */
      imageWidth = this.props.width;
    }
    return (
      <React.Fragment>
        <img id={this.props.id} src={this.props.src} width={imageWidth} height={imageHeight} alt={altText} ref={this.imageRef} />
      </React.Fragment>
    );
  }
}
ImageBase.propTypes = {
  /** The alternate text to be displayed / read out by screen readers. */
  alt: PropTypes.string,
  /** The height of the image. */
  height: PropTypes.number,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The custom functionality to be executed when the mouse down on image event is fired. */
  onClick: PropTypes.func,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The width of the image. */
  width: PropTypes.number,
};
export default ImageBase;
