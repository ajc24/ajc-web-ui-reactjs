/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.css';
import './css/title-or-subtitle-text.css';

/**
 * Header subtitle text component which renders the main application subtitle text to the user. This component is designed to work alongside the Header Title Text
 * component, rendering beneath and supporting the title text content in the header of the application. The subtitle text will be automatically hidden from view
 * in the event that the title text component has been wrapped and / or truncated to fit on smaller screens (ie. mobile phone screen sizes). This text can be rendered
 * in black or white colour, each with a white outline or black outline respectively.
 */
class HeaderSubtitleText extends React.Component {
  /**
   * Initialise the Header Subtitle Text component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      headerTitleTextId: undefined,
      isHidden: false,
      paragraphRightPos: 0,
    };
    this.handleVisibility = this.handleVisibility.bind(this);
    this.setHeaderTitleTextId = this.setHeaderTitleTextId.bind(this);
    this.setRightmostSubtitleTextPosition = this.setRightmostSubtitleTextPosition.bind(this);

    /* Create the references for this component */
    this.subtitleTextRef = React.createRef();
  }

  componentDidMount() {
    /* Sets the rightmost position of the subtitle text element */
    this.setRightmostSubtitleTextPosition();

    /* Sets the header title text id which is displayed alongside the subtitle text - following that handle the current visibility state of this component */
    this.setHeaderTitleTextId(this.props.headerTitleTextId, this.handleVisibility);

    /* Watch over all future window resize events - we will want to alter the visibility of the text to suit whether the title text is wrapped or not */
    window.addEventListener('resize', this.handleVisibility);
  }

  /**
   * Handles the visibility of the subtitle text component. When the header title text component
   * is marked as having its text wrapped, this component will be set to hidden. Otherwise it is visible.
   */
  handleVisibility() {
    const newState = {
      isHidden: false,
    }
    const subtitleContainerElement = document.querySelector(`[id="${this.props.id}--subtitle-text"]`);;
    
    if (subtitleContainerElement !== null) {
      /* Check 1: Does the paragraph element exceed the width of the container */
      const paragraphRightPos = this.state.paragraphRightPos;
      const containerRightPos = subtitleContainerElement.getBoundingClientRect().right;

      if (paragraphRightPos > 0 && containerRightPos > 0) {
        if (paragraphRightPos > containerRightPos) {
          /* The subtitle will exceed the screen limits - hide the subtitle component */
          newState.isHidden = true;
        }
        /* Check 2: Does the title text element have text that has wrapped */
        if (newState.isHidden === false) {
          /* Determine whether text wrapping has occurred in the title text element */
          const headerTitleTextElement = document.querySelector(`[id="${this.state.headerTitleTextId}--title-text"]`);
          const dataWrap = headerTitleTextElement.dataset.wrap;
          if (dataWrap === 'true') {
            /* The title text has wrapped text - hide the subtitle component */
            newState.isHidden = true; 
          }
        }
        /* Update component state to reflect whether this component is visible or hidden */
        this.setState(newState);
      }
    }
  }

  /**
   * Sets the id for the header title text component linked to this subtitle text.
   * @param {string} newHeaderTitleTextId 
   * @param {Function} callbackFunction 
   */
  setHeaderTitleTextId(newHeaderTitleTextId, callbackFunction) {
    this.setState({
      headerTitleTextId: newHeaderTitleTextId,
    }, callbackFunction);
  }

  /**
   * Sets the rightmost position of the subtitle text element
   */
  setRightmostSubtitleTextPosition() {
    if (this.subtitleTextRef.current !== null) {
      this.setState({
        paragraphRightPos: this.subtitleTextRef.current.getBoundingClientRect().right,
      });
    }
  }

  render() {
    /** Determine the colour of the text to be displayed - by default the text is rendered in black with a white outline */
    let textColour = 'black';
    if (this.props.textColour === 'white') {
      /* Set the text colour to be that of white text with a black outline */
      textColour = 'white';
    }
    /* Determine whether a small or tall header component is being used to render this component */
    let headerType = 'small';
    if (this.props.isTallHeader && this.props.isTallHeader === true) {
      headerType = 'tall';
    }
    /* Set the CSS styling for this component */
    let containerCss = 'title-or-subtitle-text-container background-transparent';
    if (headerType === 'tall') {
      /* Align the title text for a tall header */
      containerCss += ' title-or-subtitle-text-container-tall-header';
    } else {
      /* Align the title text for a small header */
      containerCss += ' title-or-subtitle-text-container-small-header';
    }
    let textOutputCss = 'subtitle-text-container';
    if (textColour === 'white') {
      /* Render white text with a black outline */
      textOutputCss += ' title-text-font-white';
    } else {
      /* Render black text with a white outline by default */
      textOutputCss += ' title-text-font-black';
    }
    if (this.state.isHidden === true) {
      /* Hide the subtitle text when set to mark as hidden */
      textOutputCss += ' hidden';
    }
    return (
      <div id={`${this.props.id}--subtitle-text`} className={containerCss}>
        <p className={textOutputCss} ref={this.subtitleTextRef} aria-hidden={this.state.isHidden}>
          {this.props.children}
        </p>
      </div>
    );
  }
}
HeaderSubtitleText.propTypes = {
  /** The content to be displayed as the subtitle text. */
  children: PropTypes.string,
  /** The unique identifier which was given to the header title text component. */
  headerTitleTextId: PropTypes.string.isRequired,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Enable if the header in which the subtitle text is to be displayed is a tall Header component, disable if not. Is disabled by default. */
  isTallHeader: PropTypes.bool,
  /** The colour of the text to be displayed, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  textColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
};
export default HeaderSubtitleText;
