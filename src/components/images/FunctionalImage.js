/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageBase } from '../../';

const defaultComponentHeight = 100;
const defaultComponentWidth = 100;

/**
 * Functional Image component which describes an image which is used to provide a function for the user in a web application.
 * The height and width of the image are fully customisable as is the alt text.
 * On click events are fully enabled and should be customised by the developer.
 */
const FunctionalImage = props => {
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
      <ImageBase id={`${props.id}--functional-image`} src={props.src} height={height} width={width} alt={props.alt} onClick={props.onClick} />
    </React.Fragment>
  );
}
FunctionalImage.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: PropTypes.string.isRequired,
  /** The height of the image. */
  height: PropTypes.number,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The custom functionality to be executed when the mouse down on image event is fired. */
  onClick: PropTypes.func.isRequired,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The width of the image. */
  width: PropTypes.number,
};
export default FunctionalImage;
