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
      isResizing: false,
      paragraphRightPos: 0,
    };
    this.handleVisibility = this.handleVisibility.bind(this);
    this.setHeaderTitleTextId = this.setHeaderTitleTextId.bind(this);
    this.setIsHidden = this.setIsHidden.bind(this);
    this.setIsResizingEnd = this.setIsResizingEnd.bind(this);
    this.setIsResizingStart = this.setIsResizingStart.bind(this);
    this.setRightmostSubtitleTextPosition = this.setRightmostSubtitleTextPosition.bind(this);

    /* Create the references for this component */
    this.subtitleTextRef = React.createRef();
  }

  componentDidMount() {
    /* Sets the header title text id which is displayed alongside the subtitle text - following that handle the current visibility state of this component */
    this.setHeaderTitleTextId(this.props.headerTitleTextId);

    /* Watch over all future window resize events - we will want to alter the visibility of the text to suit whether the title text is wrapped or not */
    window.addEventListener('resize', this.setRightmostSubtitleTextPosition);
  }

  /**
   * Handles the visibility of the subtitle text component. When the header title text component
   * is marked as having its text wrapped, this component will be set to hidden. Also if the
   * subtitle text element itself extends beyond the end of the screen, it will also be set to hidden.
   * In all other cases, the subtitle text will be marked as visible.
   */
  handleVisibility() {
    let isHidden = false;
    const subtitleContainerElement = document.querySelector(`[id="${this.props.id}--subtitle-text"]`);;
    
    if (subtitleContainerElement !== null) {
      /* Check 1: Does the paragraph element exceed the width of the container */
      const paragraphRightPos = this.state.paragraphRightPos;
      const containerRightPos = subtitleContainerElement.getBoundingClientRect().right;

      if (paragraphRightPos > 0 && containerRightPos > 0) {
        if (paragraphRightPos > containerRightPos) {
          /* The subtitle will exceed the screen limits - hide the subtitle component */
          isHidden = true;
        }
        /* Check 2: Does the title text element have text that has wrapped */
        if (isHidden === false) {
          /* Determine whether text wrapping has occurred in the title text element */
          const headerTitleTextElement = document.querySelector(`[id="${this.state.headerTitleTextId}--title-text"]`);
          let dataWrap = 'false';
          if (headerTitleTextElement !== null) {
            dataWrap = headerTitleTextElement.dataset.wrap;
          }
          if (dataWrap === 'true') {
            /* The title text has wrapped text - hide the subtitle component */
            isHidden = true; 
          }
        }
      }
    }
    /* Update component state to reflect whether this component is visible or hidden */
    this.setIsHidden(isHidden);
  }

  /**
   * Sets the id for the header title text component linked to this subtitle text.
   * Follows this action by setting the rightmost position of the subtitle text element.
   * @param {string} newHeaderTitleTextId
   */
  setHeaderTitleTextId(newHeaderTitleTextId) {
    this.setState({
      headerTitleTextId: newHeaderTitleTextId,
    }, this.setRightmostSubtitleTextPosition);
  }

  /**
   * Sets a new component value for whether the subtitle text is hidden or not. Only
   * alters this component state if required to. Follows this action by marking the resizing
   * process as completed.
   * @param {boolean} newisHidden
   */
  setIsHidden(newisHidden) {
    if (newisHidden !== this.state.isHidden) {
      /* Only alter state in this case if state has changed */
      this.setState({
        isHidden: newisHidden,
      }, this.setIsResizingEnd);
    } else {
      /* Mark the resizing process as completed */
      this.setIsResizingEnd();
    }
  }

  /**
   * Marks the resizing process as completed.
   */
  setIsResizingEnd() {
    this.setState({
      isResizing: false,
    });
  }

  /**
   * Marks the resizing process as starting.
   */
  setIsResizingStart() {
    this.setState({
      isResizing: true,
    }, this.handleVisibility);
  }

  /**
   * Sets the rightmost position of the subtitle text element. This is only changed if another resizing
   * process is not already active in the browser. Follows this action by marking the resizing process as active.
   */
  setRightmostSubtitleTextPosition() {
    if (this.subtitleTextRef.current !== null && this.state.isResizing === false) {
      if (this.state.isHidden === false) {
        /* The subtitle text element is visible - set the rightmost position of the element and then start resizing process */
        this.setState({
          paragraphRightPos: this.subtitleTextRef.current.getBoundingClientRect().right,
        }, this.setIsResizingStart);
      } else {
        /* The subtitle text is hidden so we can not set a new rightmost position - go straight to the resizing process */
        this.setIsResizingStart();
      }
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
