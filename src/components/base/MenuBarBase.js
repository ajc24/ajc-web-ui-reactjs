/**
 * Developed by Anthony Cox in 2025
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageTemplateConfig from '../modules/PageTemplateConfig';
import { getColourCombination } from '../data/colour-combinations';
import '../css/common.css';
import './css/base-menu-bar.css';

const defaultComponentId = 'default-id--menu-bar-base';

/**
 * Baseline component setting the template for all Menu Bar components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the component is 55px.
 */
const MenuBarBase = props => {
  const [id, setId] = useState(defaultComponentId);

  useEffect(() => {
    /* Setup the default CSS styling for the page which is rendering this component */
    PageTemplateConfig.setupDocumentBodyCss();

    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId(`${props.id}--menu-bar-base`);
    }
  });

  /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
  const { backgroundColour, fontColour } = getColourCombination(props.backgroundColour);

  /* Set the styling for the navigation element */
  const navCss = `nav screen-width-root background-white font-default font-${fontColour}`;

  /* Set the styling for the outer content element */
  const outerContentCss = `menu-bar-content-outer screen-width-content-outer background-${backgroundColour}`;

  /* Set the styling for the inner content element */
  const innerContentCss = 'menu-bar-content-inner screen-width-content-inner';
  return (
    <nav id={id} className={navCss}>
      <div className={outerContentCss}>
        <div className={innerContentCss}>
          {props.children}
        </div>
      </div>
    </nav>
  );
}
MenuBarBase.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white' ]),
  /** The content to be displayed within the menu bar template component. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string,
};
export default MenuBarBase;
