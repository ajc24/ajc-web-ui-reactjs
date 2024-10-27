/**
 * Developed by Anthony Cox in 2024
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageBase from '../base/ImageBase';

const defaultComponentHeight = 100;
const defaultComponentWidth = 100;

/**
 * Decorative Image component which describes an image which is used solely for decoration in a web application.
 * The height and width of the image are fully customisable. You can not define alt text for this image.
 * On click events are fully disabled.
 */
const DecorativeImage = props => {
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
      <ImageBase id={props.id} src={props.src} height={height} width={width} alt="" onClick={undefined} />
    </React.Fragment>
  );
}
DecorativeImage.propTypes = {
  /** The height of the image. */
  height: PropTypes.number,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
  /** The width of the image. */
  width: PropTypes.number,
};
export default DecorativeImage;
