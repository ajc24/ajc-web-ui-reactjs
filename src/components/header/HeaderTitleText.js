/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.css';
import './css/text-title.css';

const maxRem = 3;
const truncateTextHeightCutoff = 95;

/**
 * Header title text component which renders the name / title of the web application to the user. The heading text will automatically be reduced in
 * size to fit on smaller screens (ie. mobile phone screen sizes) and will automatically truncate the text if it still does not fit on-screen after
 * the font size reduction has taken place. The text can be rendered in black or white colour, each with a white outline or black outline respectively.
 */
class HeaderTitleText extends React.Component {
  /**
   * Initialise the Header Title Text component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isWrapped: false,
    };
    this.getContainerElementRightmostPosition = this.getContainerElementRightmostPosition.bind(this);
    this.getHeadingElementHeight = this.getHeadingElementHeight.bind(this);
    this.getHeadingElementRightmostPosition = this.getHeadingElementRightmostPosition.bind(this);
    this.getTitleTextContent = this.getTitleTextContent.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.reduceFontSizeAndWrapTextIfRequired = this.reduceFontSizeAndWrapTextIfRequired.bind(this);
    this.resetTitleTextContentToDefault = this.resetTitleTextContentToDefault.bind(this);
    this.setIsWrapped = this.setIsWrapped.bind(this);
    this.setTitleTextContent = this.setTitleTextContent.bind(this);
    this.truncateTextByRemovingSpaces = this.truncateTextByRemovingSpaces.bind(this);

    /* Create the references for this component */
    this.titleTextRef = React.createRef();
  }

  componentDidMount() {
    /* Handle the size of the component based on the initial screen width */
    this.handleScreenWidth();

    /* Watch over all future window resize events - we will want to alter the text to suit the screen size */
    window.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Retrieves the current rightmost position of the heading elements container element
   * @returns {number}
   */
  getContainerElementRightmostPosition() {
    if (this.titleTextRef.current !== null) {
      return this.titleTextRef.current.parentNode.getBoundingClientRect().right;
    }
    return 0;
  }

  /**
   * Determines the height of the heading element as it is currently rendered
   * @returns {number}
   */
  getHeadingElementHeight() {
    if (this.titleTextRef.current !== null) {
      return this.titleTextRef.current.getBoundingClientRect().height;
    }
    return 0;
  }

  /**
   * Determines the rightmost position of the heading element text content as it is currently rendered
   * @returns {number}
   */
  getHeadingElementRightmostPosition() {
    if (this.titleTextRef.current !== null) {
      return this.titleTextRef.current.getBoundingClientRect().right;
    }
    return 0; 
  }

  /**
   * Gets the text content currently set to the heading element
   * @returns {string}
   */
  getTitleTextContent() {
    if (this.titleTextRef.current !== null) {
      return this.titleTextRef.current.textContent;
    }
    return '';
  }

  /**
   * Handles resize events in the browser. This function will reduce the heading element font size
   * and truncate the text until it fits perfectly within the width of the window
   */
  handleScreenWidth() {
    /* Ensure we're outputting the full string before assessing for truncation */
    this.resetTitleTextContentToDefault();

    /* Reduce the font size and wrap the text if required */
    this.reduceFontSizeAndWrapTextIfRequired();

    /* Truncate the text (if required) by gradually removing spaces from the text content */
    const isTruncated = this.truncateTextByRemovingSpaces();

    /* If the truncation by cutting off words did not suit the text - truncate by cutting off characters instead */
    if (isTruncated === false) {
      this.truncateTextByRemovingCharacters();
    }
  }

  /**
   * Reduces the font size in order for the title text to fit on smaller screens.
   * If the text still does not fit on-screen after the font size is reduced to a minimum value then wrap the text.
   */
  reduceFontSizeAndWrapTextIfRequired() {
    /* Determine the positions of the text and the current container element width */
    let h1RightPos = this.getHeadingElementRightmostPosition();
    let containerWidth = this.getContainerElementRightmostPosition();

    /* Steadily reduce the font size until the text fits on-screen - do not drop below 2rem font size */
    let rem = maxRem;
    while (rem >= 2 && containerWidth < h1RightPos) {
      this.titleTextRef.current.style.fontSize = `${rem}rem`;
      h1RightPos = this.getHeadingElementRightmostPosition();

      /* Reduce the rem value by 0.1 and ensure the value remains at one decimal place at the most after editing (ie. 2.9, 2.8, 2.7 etc.) */
      rem -= 0.1;
      rem = parseFloat(rem.toFixed(1));
    }
    /* If 2rem font size was not enough for the title text to fit on-screen - wrap the text */
    containerWidth = this.getContainerElementRightmostPosition();
    if (containerWidth < h1RightPos) {
      /* Set the text to wrap and center align */
      this.titleTextRef.current.style.textAlign = 'center';
      this.titleTextRef.current.style.whiteSpace = 'normal';
      this.setIsWrapped(true);
    }
  }

  /**
   * Resets the title text contents value and font size to their default values
   */
  resetTitleTextContentToDefault() {
    if (this.titleTextRef.current !== null) {
      /* Restore the full text content to the heading element */
      this.titleTextRef.current.textContent = this.titleTextRef.current.ariaLabel;

      /* Set the text to its maximum potential size and judge the height of the component when there is no text wrap */
      this.titleTextRef.current.style.fontSize = `${maxRem}rem`;
      this.titleTextRef.current.style.whiteSpace = 'nowrap';
      this.setIsWrapped(false);
    }
  }

  /**
   * Sets whether the element text is wrapped or not
   * @param {boolean} newIsWrapped 
   */
  setIsWrapped(newIsWrapped) {
    this.setState({ isWrapped: newIsWrapped });
  }

  /**
   * Sets the heading element title text content to the specified text content
   * @param {string} newTitleTextContent 
   */
  setTitleTextContent(newTitleTextContent) {
    this.titleTextRef.current.textContent = newTitleTextContent;
  }

  /**
   * Truncates the heading element text content by gradually cutting off each character one by one
   */
  truncateTextByRemovingCharacters() {
    let h1RightPos = this.getHeadingElementRightmostPosition();
    let containerWidth = this.getContainerElementRightmostPosition();

    let titleTextString = this.getTitleTextContent();
    while (containerWidth < h1RightPos) {
      /* Truncate the text - in this case the word wrap has gone beyond two lines */
      titleTextString = `${titleTextString.substring(0, titleTextString.length - 1).trim()}...`;
      this.setTitleTextContent(titleTextString);
      
      /* Get the new right position of the heading element */
      h1RightPos = this.getHeadingElementRightmostPosition();
      if (containerWidth < h1RightPos) {
        /* Remove the obsolete three dots at the end of the string for the next character truncation */
        titleTextString = titleTextString.substring(0, titleTextString.length - 3).trim();
        this.setTitleTextContent(titleTextString);
      }
    }
  }

  /**
   * Attempts to truncate the heading element text content by gradually cutting off words in the text
   * @returns {boolean}
   */
  truncateTextByRemovingSpaces() {
    let currentHeadingHeight = this.getHeadingElementHeight();
    let titleTextString = this.getTitleTextContent();
    let truncatedString = false;
    if (currentHeadingHeight > truncateTextHeightCutoff) {
      /* Truncate the text - in this case the word wrap has gone beyond two lines */
      while (truncatedString === false && titleTextString.indexOf(' ') >= 0) {
        /* We have a title text entry with spaces between the words - cut off each word until we fit within the boundaries */
        titleTextString = `${titleTextString.substring(0, titleTextString.lastIndexOf(' ')).trim()}...`;
        this.setTitleTextContent(titleTextString);

        /* Get the new height of the element */
        currentHeadingHeight = this.getHeadingElementHeight();
        if (currentHeadingHeight < truncateTextHeightCutoff) {
          /* We have now truncated the title enough for it to fit within the boundaries again */
          truncatedString = true;
        }
      }
    }
    if (truncatedString === false && titleTextString.lastIndexOf('...') === titleTextString.length - 3) {
      /* Remove the obsolete three dots at the end of the string since the truncation by removing spaces was not enough for the text to fit the screen */
      titleTextString = titleTextString.substring(0, titleTextString.length - 3).trim();
      this.setTitleTextContent(titleTextString);
    }
    return truncatedString;
  }

  render() {
    /* Set the styling for the container element */
    let containerCss = 'background-transparent';
    this.props.parentHeaderId === undefined
      ? containerCss += ' page-template-container'
      : containerCss += ' title-text-size-inside-header';
    this.props.alignment === 'centre'
      ? containerCss += ' title-text-alignment-centre'
      : containerCss += ' title-text-alignment-left';

    /* Set the styling for the title text font */
    let textOutputCss = 'title-text-default';
    this.props.textColour === 'white'
      ? textOutputCss += ' title-text-font-white'
      : textOutputCss += ' title-text-font-black';
    return (
      <div id={`${this.props.id}--header-title-text`} className={containerCss} data-wrap={`${this.state.isWrapped}`}>
        <h1 className={textOutputCss} ref={this.titleTextRef} aria-label={`${this.props.children}`}>
          {this.props.children}
        </h1>
      </div>
    );
  }
}
HeaderTitleText.propTypes = {
  /* The alignment of the title text content. The text by default will be left aligned until wrapped to a new line but can be centre aligned at all times. */
  alignment: PropTypes.oneOf([ 'centre', 'left' ]),
  /** The content to be displayed as the title text. */
  children: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The unique identifier of the Header component in which this title text component is rendered. */
  parentHeaderId: PropTypes.string,
  /** The colour of the text to be displayed, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  textColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
};
export default HeaderTitleText;
