/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/image.css';

/**
 * Fully customisable flexible image component with a variety of uses and functionality.
 */
class FlexiImage extends React.Component {
  /**
   * Constructor for the flexible image component
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
    return (
      <React.Fragment>
        <img id={this.props.id} role="presentation" src={this.props.src} width={this.props.width} height={this.props.height} alt={this.props.alt} ref={this.imageRef} />
      </React.Fragment>
    );
  }
}
FlexiImage.propTypes = {
  /** The alternate text to be displayed in the case where the image does not load. */
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
FlexiImage.defaultProps = {
  alt: 'An image should be displayed here. An error has occurred.',
  height: 136,
  onClick: undefined,
  width: 136,
};
export default FlexiImage;
