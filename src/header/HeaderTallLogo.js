/**
 * Developed by Anthony Cox in 2025
 */
import PropTypes from 'prop-types';
import BaseHeaderTall from '../base/BaseHeaderTall';
import DecorativeImage from '../images/DecorativeImage';
import './css/header.css';

const HeaderTallLogo = props => {
  const containerCss = 'tall-header-logo-container';

  return (
    <BaseHeaderTall backgroundColour={props.backgroundColour} id={props.id}>
      <div className={containerCss}>
        <DecorativeImage height="304" id={props.id} src={props.src} width="328" />
      </div>
    </BaseHeaderTall>
  );
}
HeaderTallLogo.propTypes = {
  /** The background colour for the tall header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The unique identifier for the tall header. */
  id: PropTypes.string,
  /** The image data to be displayed as the tall header logo. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default HeaderTallLogo;
