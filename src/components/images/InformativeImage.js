/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageBase from '../base/ImageBase';

const defaultComponentHeight = 100;
const defaultComponentOnClick = undefined;
const defaultComponentWidth = 100;

/**
 * Informative Image component which describes an image which is used to provide information to a user in a web application.
 * The height and width of the image are fully customisable as is the alt text.
 * On click events are fully disabled.
 */
const InformativeImage = props => {
  const [height, setHeight] = useState(defaultComponentHeight);
  const [width, setWidth] = useState(defaultComponentWidth);

  useEffect(() => {
    /* Set the height for the component */
    if (props.height !== undefined) {
      setHeight(props.height);
    }
    /* Set the width of the component */
    if (props.width !== undefined) {
      setWidth(props.width);
    }
  });

  return (
    <React.Fragment>
      <ImageBase id={props.id} src={props.src} height={height} width={width} alt={props.alt} onClick={defaultComponentOnClick} />
    </React.Fragment>
  );
}
InformativeImage.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: PropTypes.string.isRequired,
  /** The height of the image. */
  height: PropTypes.number,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The width of the image. */
  width: PropTypes.number,
};
export default InformativeImage;
