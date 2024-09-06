/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import FlexiImage from '../generic/FlexiImage';
import '../../css/header.css';

/**
 * Header Logo component designed for use with the Header Type A component.
 */
class HeaderLogoTypeA extends React.Component {
  /**
   * Constructor for the header logo component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      height: 136,
      width: 136,
    };
  }

  componentDidMount() {
    /* Alter the image size if we have rendered this image inside the header type a component with no border */
    const headerWithNoBorder = document.querySelector('div[class*="ajc-header-content-container-no-border"]');
    if (headerWithNoBorder !== null) {
      this.setState({
        height: 144,
        width: 144,
      });
    }
  }

  render() {
    const containerCss = 'ajc-header-logo-container';
    return (
      <div id={`${this.props.id}--container`} className={containerCss}>
        <FlexiImage id={this.props.id} src={this.props.src} height={this.state.height} width={this.state.width} alt="The header logo image did not load correctly." />
      </div>
    );
  }
}
HeaderLogoTypeA.propTypes = {
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The image data to be displayed. */
  src: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
};
export default HeaderLogoTypeA;
