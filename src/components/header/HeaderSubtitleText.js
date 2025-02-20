/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.css';
import './css/text-subtitle.css';

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
    const subtitleContainerElement = document.querySelector(`[id="${this.props.id}--header-subtitle-text"]`);
    
    if (subtitleContainerElement !== null) {
      /* Check 1: Does the paragraph element exceed the width of the container */
      const paragraphRightPos = this.state.paragraphRightPos;
      const containerRightPos = subtitleContainerElement.getBoundingClientRect().right;

      if (paragraphRightPos > 0 && containerRightPos > 0) {
        if (paragraphRightPos > containerRightPos) {
          /* The subtitle will exceed the screen limits - hide the subtitle component */
          isHidden = true;
        }
      }
      /* Check 2: Does the title text element have text that has wrapped */
      if (isHidden === false) {
        /* Determine whether text wrapping has occurred in the title text element */
        const headerTitleTextElement = document.querySelector(`[id="${this.state.headerTitleTextId}--header-title-text"]`);
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
    /* Only start the resizing process if all previous resizing processes are completed */
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
    /* Set the styling for the container element */
    let containerCss = 'background-transparent';
    this.props.parentHeaderId === undefined
      ? containerCss += ' page-template-container'
      : containerCss += ' subtitle-text-size-inside-header';
    this.props.alignment === 'centre'
      ? containerCss += ' subtitle-text-alignment-centre'
      : containerCss += ' subtitle-text-alignment-left';
    this.state.headerTitleTextId !== undefined
      ? containerCss += ' subtitle-text-with-header-text'
      : containerCss += ''.trim();

    /* Set the styling for the subtitle text font */
    let textOutputCss = 'subtitle-text-default';
    this.props.textColour === 'white'
      ? textOutputCss += ' font-white'
      : textOutputCss += ' font-black';
    this.state.isHidden === true
      ? textOutputCss += ' hidden'
      : textOutputCss += ''.trim();

    return (
      <div id={`${this.props.id}--header-subtitle-text`} className={containerCss}>
        <p className={textOutputCss} ref={this.subtitleTextRef} aria-hidden={this.state.isHidden}>
          {this.props.children}
        </p>
      </div>
    );
  }
}
HeaderSubtitleText.propTypes = {
  /* The alignment of the subtitle text content. The text by default will be left aligned but can be centre aligned at all times. */
  alignment: PropTypes.oneOf([ 'centre', 'left' ]),
  /** The content to be displayed as the subtitle text. */
  children: PropTypes.string,
  /** The unique identifier of the HeaderTitleText component alongside which this subtitle text component is rendered. */
  headerTitleTextId: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The unique identifier of the Header component in which this subtitle text component is rendered. */
  parentHeaderId: PropTypes.string,
  /** The colour of the text to be displayed, either in a black or white colour. By default the black colour is pre-selected. */
  textColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
};
export default HeaderSubtitleText;
