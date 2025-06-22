/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.css';
import './css/text-application-title.css';

const maxRem = 3;
const truncateTextHeightCutoff = 95;

/**
 * Application title text component which renders the name / title of the web application to the user. This component is intended for use in both
 * the default and tall Header components but can also be rendered standalone. The title text content can be left aligned or centre aligned.
 * 
 * The application title text content is initially rendered at 3rem in size and will be automatically reduced in size down to a minimum size of 2rem,
 * to fit on smaller screens (ie. mobile phone screen sizes). If the title text still does not fit on-screen after the font size reduction has taken
 * place, it will then be truncated.
 * 
 * The title text can be rendered in black or white colour, each with a white outline or black outline respectively.
 */
class ApplicationTitleText extends React.Component {
  /**
   * Initialise the Header Title Text component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      isWrapped: false,
    };
    this.getContainerElementRightmostPosition = this.getContainerElementRightmostPosition.bind(this);
    this.getHeadingElementHeight = this.getHeadingElementHeight.bind(this);
    this.getHeadingElementRightmostPosition = this.getHeadingElementRightmostPosition.bind(this);
    this.getHeadingElementSelector = this.getHeadingElementSelector.bind(this);
    this.getTitleTextContent = this.getTitleTextContent.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.reduceFontSizeAndWrapTextIfRequired = this.reduceFontSizeAndWrapTextIfRequired.bind(this);
    this.resetTitleTextContentToDefault = this.resetTitleTextContentToDefault.bind(this);
    this.setId = this.setId.bind(this);
    this.setIsWrapped = this.setIsWrapped.bind(this);
    this.setTitleTextContent = this.setTitleTextContent.bind(this);
    this.truncateTextByRemovingSpaces = this.truncateTextByRemovingSpaces.bind(this);
  }

  componentDidMount() {
    /* Set the ID for the component - follow on from this by handling the size of the component based on the initial screen width */
    this.setId(this.props.id);

    /* Watch over all future window resize events - we will want to alter the text to suit the screen size */
    document.body.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Retrieves the current rightmost position of the heading elements container element
   * @returns {number}
   */
  getContainerElementRightmostPosition() {
    const headingElement = this.getHeadingElementSelector();
    if (headingElement !== null) {
      return parseInt(headingElement.parentNode.getBoundingClientRect().right, 10);
    }
    return 0;
  }

  /**
   * Determines the height of the heading element as it is currently rendered
   * @returns {number}
   */
  getHeadingElementHeight() {
    const headingElement = this.getHeadingElementSelector();
    if (headingElement !== null) {
      return parseInt(headingElement.getBoundingClientRect().height, 10);
    }
    return 0;
  }

  /**
   * Determines the rightmost position of the heading element text content as it is currently rendered
   * @returns {number}
   */
  getHeadingElementRightmostPosition() {
    const headingElement = this.getHeadingElementSelector();
    if (headingElement !== null) {
      return parseInt(headingElement.getBoundingClientRect().right, 10);
    }
    return 0; 
  }

  /**
   * Gets the Element instance for the heading element rendered with this component
   * @returns {Element}
   */
  getHeadingElementSelector() {
    return document.querySelector(`div[id="${this.state.id}"] > h1`);
  }

  /**
   * Gets the text content currently set to the heading element
   * @returns {string}
   */
  getTitleTextContent() {
    const headingElement = this.getHeadingElementSelector();
    let titleTextContent;
    headingElement !== null
      ? titleTextContent = headingElement.textContent
      : titleTextContent = '';
    return titleTextContent;
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
    let containerRightPos = this.getContainerElementRightmostPosition();
    const headingElement = this.getHeadingElementSelector();

    /* Steadily reduce the font size until the text fits on-screen - do not drop below 2rem font size */
    let rem = maxRem;
    while (headingElement !== null && rem >= 2 && containerRightPos < h1RightPos) {
      headingElement.style.fontSize = `${rem}rem`;
      h1RightPos = this.getHeadingElementRightmostPosition();

      /* Reduce the rem value by 0.1 and ensure the value remains at one decimal place at the most after editing (ie. 2.9, 2.8, 2.7 etc.) */
      rem -= 0.1;
      rem = parseFloat(rem.toFixed(1));
    }
    /* If 2rem font size was not enough for the title text to fit on-screen - wrap the text */
    containerRightPos = this.getContainerElementRightmostPosition();
    if (headingElement !== null && containerRightPos < h1RightPos) {
      /* Set the text to wrap and center align */
      headingElement.style.textAlign = 'center';
      headingElement.style.whiteSpace = 'normal';
      this.setIsWrapped(true);
    }
  }

  /**
   * Resets the title text contents value and font size to their default values
   */
  resetTitleTextContentToDefault() {
    const headingElement = this.getHeadingElementSelector();
    if (headingElement !== null) {
      /* Restore the full text content to the heading element */
      headingElement.textContent = headingElement.ariaLabel;

      /* Set the text to its maximum potential size and reset the whiteSpace CSS property so that there is no text wrap */
      headingElement.style.fontSize = `${maxRem}rem`;
      headingElement.style.whiteSpace = 'nowrap';
      this.setIsWrapped(false);
    }
  }

  /**
   * Sets the ID for the component
   * @param {string} newId 
   */
  setId(newId) {
    this.setState({
      id: `${newId}--application-title-text`,
    }, this.handleScreenWidth);
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
   * @returns {boolean}
   */
  setTitleTextContent(newTitleTextContent) {
    let setNewTitleTextContent = false;
    const headingElement = this.getHeadingElementSelector();
    if (headingElement !== null) {
      headingElement.textContent = newTitleTextContent;
      setNewTitleTextContent = true;
    }
    return setNewTitleTextContent;
  }

  /**
   * Truncates the heading element text content by gradually cutting off each character one by one
   */
  truncateTextByRemovingCharacters() {
    let h1RightPos = this.getHeadingElementRightmostPosition();
    let containerRightPos = this.getContainerElementRightmostPosition();

    let titleTextString = this.getTitleTextContent();
    while (containerRightPos < h1RightPos) {
      /* Truncate the text - in this case the word wrap has gone beyond two lines */
      titleTextString = `${titleTextString.substring(0, titleTextString.length - 1).trim()}...`;
      this.setTitleTextContent(titleTextString);
      
      /* Get the new right position of the heading element */
      h1RightPos = this.getHeadingElementRightmostPosition();
      if (containerRightPos < h1RightPos) {
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
    let containerCss = 'background-transparent title-text-container';
    if (this.props.headerId === undefined) {
      containerCss += ' common-component-width';
    }
    this.props.alignment === 'centre'
      ? containerCss += ' title-text-alignment-centre'
      : containerCss += ' title-text-alignment-left';

    /* Set the styling for the title text font */
    let textOutputCss = 'title-text-font-default';
    this.props.textColour === 'white'
      ? textOutputCss += ' title-text-font-white'
      : textOutputCss += ' title-text-font-black';
    return (
      <div id={`${this.state.id}`} className={containerCss} data-wrap={`${this.state.isWrapped}`}>
        <h1 className={textOutputCss} aria-label={`${this.props.children}`} title={`${this.props.children}`}>
          {this.props.children}
        </h1>
      </div>
    );
  }
}
ApplicationTitleText.propTypes = {
  /* The alignment of the title text content. The text by default will be left aligned until wrapped to a new line but can be centre aligned at all times. */
  alignment: PropTypes.oneOf([ 'centre', 'left' ]),
  /** The content to be displayed as the title text. */
  children: PropTypes.string,
  /** The unique identifier of the Header component in which this title text component is rendered. */
  headerId: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The colour of the text to be displayed, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  textColour: PropTypes.oneOf([ 'black', 'white' ]),
};
export default ApplicationTitleText;
