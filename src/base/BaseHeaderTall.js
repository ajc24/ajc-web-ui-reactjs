/**
 * Developed by Anthony Cox in 2025
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import BaseHeader from './BaseHeader';

const defaultId = 'default--base-header-tall';

/**
 * Baseline component setting the template for all tall Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default height of the component is 320px.
 */
const BaseHeaderTall = props => {
  useEffect(() => {
    let currentId = defaultId;
    if (props.id !== undefined) {
      currentId = props.id;
    }
    /* Set the header element to a tall height */
    const header = document.querySelector(`header[id="${currentId}"]`);
    header.style.height = '320px';

    /* Set the headers inner content element to a tall height, taking into account the 8px padding on the top and bottom */
    const headerContentOuter = document.querySelector(`header[id="${currentId}"] > div > div`);
    headerContentOuter.style.height = '304px';
  });

  return (
    <BaseHeader backgroundColour={props.backgroundColour} id={props.id !== undefined ? props.id : defaultId}>
      {props.children}
    </BaseHeader>
  );
}
BaseHeaderTall.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The content to be displayed within the header component. */
  children: PropTypes.any,
  /** The unique identifier for the header. */
  id: PropTypes.string,
};
export default BaseHeaderTall;
