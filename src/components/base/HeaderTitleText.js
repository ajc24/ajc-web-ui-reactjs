/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.css';
import './css/title-or-subtitle-text.css';

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
      headerType: 'small',
      isWrapped: false,
    };
    this.getTitleTextContentRightmostPosition = this.getTitleTextContentRightmostPosition.bind(this);
    this.getHeightOfHeadingElement = this.getHeightOfHeadingElement.bind(this);
    this.getTitleTextContent = this.getTitleTextContent.bind(this);
    this.getWidthOfHeadingElement = this.getWidthOfHeadingElement.bind(this);
    this.handleScreenWidth = this.handleScreenWidth.bind(this);
    this.reduceFontSizeAndWrapTextIfRequired = this.reduceFontSizeAndWrapTextIfRequired.bind(this);
    this.setHeaderType = this.setHeaderType.bind(this);
    this.setIsWrapped = this.setIsWrapped.bind(this);
    this.setTitleTextContent = this.setTitleTextContent.bind(this);
    this.setTitleTextContentToFullTitle = this.setTitleTextContentToFullTitle.bind(this);
    this.truncateTextByRemovingCharacters = this.truncateTextByRemovingCharacters.bind(this);
    this.truncateTextByRemovingSpaces = this.truncateTextByRemovingSpaces.bind(this);

    /* Create the references for this component */
    this.textRef = React.createRef();
  }

  componentDidMount() {
    /* Sets the header type in which this element will be rendered - following that handle the current screen width */
    this.setHeaderType(this.props.isTallHeader, this.handleScreenWidth);

    /* Watch over all future window resize events - we will want to alter the text to suit the screen size */
    window.addEventListener('resize', this.handleScreenWidth);
  }

  /**
   * Determines the height of the heading element as it is currently rendered
   * @returns {number}
   */
  getHeightOfHeadingElement() {
    if (this.textRef.current !== null) {
      return this.textRef.current.parentNode.getBoundingClientRect().height;
    }
    return 0;
  }

  /**
   * Gets the text content currently set to the heading element
   * @returns {string}
   */
  getTitleTextContent() {
    if (this.textRef.current !== null) {
      return this.textRef.current.textContent;
    }
    return '';
  }

  /**
   * Determines the rightmost position of the heading element text content as it is currently rendered
   * @returns {number}
   */
  getTitleTextContentRightmostPosition() {
    if (this.textRef.current !== null) {
      return this.textRef.current.getBoundingClientRect().right;
    }
    return 0;
  }

  /**
   * Determines the width of the heading element as it is currently rendered
   * @returns {number}
   */
  getWidthOfHeadingElement() {
    if (this.textRef.current !== null) {
      return this.textRef.current.parentNode.getBoundingClientRect().right;
    }
    return 0;
  }

  /**
   * Handles resize events in the browser. This function will reduce the heading element font size
   * and truncate the text until it fits perfectly within the width of the window
   */
  handleScreenWidth() {
    /* Ensure we're outputting the full string before assessing for truncation */
    this.setTitleTextContentToFullTitle();

    /* Determine the height of the heading element now that it has been reset to default */
    const defaultHeadingHeight = this.getHeightOfHeadingElement();

    /* Reduce the font size and wrap the text if required */
    this.reduceFontSizeAndWrapTextIfRequired();

    /* Truncate the text (if required) by gradually removing spaces from the text content */
    const isTruncated = this.truncateTextByRemovingSpaces(defaultHeadingHeight);

    /* If the truncation by cutting off words did not suit the text - truncate by cutting off characters instead */
    if (isTruncated === false) {
      this.truncateTextByRemovingCharacters(defaultHeadingHeight);
    }
  }

  /**
   * Reduces the font size in order for the title text to fit on smaller screens.
   * If the text still does not fit on-screen after the font size is reduced to a minimum value then wrap the text.
   */
  reduceFontSizeAndWrapTextIfRequired() {
    /* Determine the positions of the text and the current screen width */
    let h1RightPos = this.getTitleTextContentRightmostPosition();
    let screenWidth = this.getWidthOfHeadingElement();

    /* Steadily reduce the font size until the text fits on-screen - do not drop below 2rem font size */
    let rem = maxRem;
    while (rem >= 2 && screenWidth < h1RightPos) {
      this.textRef.current.style.fontSize = `${rem}rem`;
      h1RightPos = this.getTitleTextContentRightmostPosition();

      /* Reduce the rem value by 0.1 and ensure the value remains at one decimal place at the most after editing (ie. 2.9, 2.8, 2.7 etc.) */
      rem -= 0.1;
      rem = parseFloat(rem.toFixed(1));
    }
    /* If 2rem font size was not enough for the title text to fit on-screen - wrap the text */
    screenWidth = this.getWidthOfHeadingElement();
    if (screenWidth < h1RightPos) {
      /* Set the text to wrap and center align */
      this.textRef.current.style.textAlign = 'center';
      this.textRef.current.style.whiteSpace = 'normal';
      this.setIsWrapped(true);
    }
  }

  /**
   * Sets whether the header type is that of a small header or a tall header
   * @param {boolean} isTallHeader
   * @param {Function} callbackFunction
   */
  setHeaderType(isTallHeader, callbackFunction) {
    const updatedState = {
      headerType: 'small',
      isWrapped: this.state.isWrapped,
    };
    if (isTallHeader !== undefined && isTallHeader === true) {
      updatedState.headerType = 'tall';
    }
    this.setState(updatedState, callbackFunction);
  }

  /**
   * Sets whether the element text is wrapped or not
   * @param {boolean} newIsWrapped 
   */
  setIsWrapped(newIsWrapped) {
    this.setState({
      headerType: this.state.headerType,
      isWrapped: newIsWrapped,
    });
  }

  /**
   * Sets the heading element title text content to the specified text content
   * @param {string} newTitleTextContent 
   */
  setTitleTextContent(newTitleTextContent) {
    this.textRef.current.textContent = newTitleTextContent;
  }

  /**
   * Sets the title text content to that of the full text content set to the "title" attribute of the heading.
   */
  setTitleTextContentToFullTitle() {
    if (this.textRef.current !== null) {
      /* Restore the full text content to the heading element */
      this.textRef.current.textContent = this.textRef.current.ariaLabel;

      /* Set the text to its maximum potential size and judge the height of the component when there is no text wrap */
      this.textRef.current.style.fontSize = `${maxRem}rem`;
      this.textRef.current.style.whiteSpace = 'nowrap';
      this.setIsWrapped(false);

      /* Set the text alignment based on which type of header component is being used */
      if (this.state.headerType === 'tall') {
        this.textRef.current.style.textAlign = 'center';
      } else {
        this.textRef.current.style.textAlign = 'left';
      }
    }
  }

  /**
   * Truncates the heading element text content by gradually cutting off each character one by one
   */
  truncateTextByRemovingCharacters() {
    let h1RightPos = this.getTitleTextContentRightmostPosition();
    let screenWidth = this.getWidthOfHeadingElement();
    let titleTextString = this.getTitleTextContent();
    while (screenWidth < h1RightPos) {
      /* Truncate the text - in this case the word wrap has gone beyond two lines */
      titleTextString = titleTextString.substring(0, titleTextString.length - 1).trim();
      titleTextString = `${titleTextString}...`;
      this.setTitleTextContent(titleTextString);
      
      /* Get the new right position of the element */
      h1RightPos = this.getTitleTextContentRightmostPosition();
      if (screenWidth < h1RightPos) {
        /* Remove the obsolete three dots at the end of the string for the next character truncation */
        titleTextString = titleTextString.substring(0, titleTextString.length - 3).trim();
        this.setTitleTextContent(titleTextString);
      }
    }
  }

  /**
   * Attempts to truncate the heading element text content by gradually cutting off words in the text
   * @param {number} defaultHeadingHeight
   * @returns {boolean}
   */
  truncateTextByRemovingSpaces(defaultHeadingHeight) {
    let currentHeadingHeight = this.getHeightOfHeadingElement();
    let titleTextString = this.getTitleTextContent();
    let truncatedString = false;
    if (currentHeadingHeight > defaultHeadingHeight && currentHeadingHeight > truncateTextHeightCutoff) {
      /* Truncate the text - in this case the word wrap has gone beyond two lines */
      while (truncatedString === false && titleTextString.indexOf(' ') >= 0) {
        /* We have a title text entry with spaces between the words - cut off each word until we fit within the boundaries */
        titleTextString = titleTextString.substring(0, titleTextString.lastIndexOf(' ')).trim();
        titleTextString = `${titleTextString}...`;
        this.setTitleTextContent(titleTextString);

        /* Get the new height of the element */
        currentHeadingHeight = this.getHeightOfHeadingElement();
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
    let textOutputCss = 'title-text-container';
    if (textColour === 'white') {
      /* Render white text with a black outline */
      textOutputCss += ' title-text-font-white';
    } else {
      /* Render black text with a white outline by default */
      textOutputCss += ' title-text-font-black';
    }
    return (
      <div id={`${this.props.id}--title-text`} className={containerCss} data-wrap={`${this.state.isWrapped}`}>
        <h1 className={textOutputCss} ref={this.textRef} aria-label={`${this.props.children}`}>
          {this.props.children}
        </h1>
      </div>
    );
  }
}
HeaderTitleText.propTypes = {
  /** The content to be displayed as the title text. */
  children: PropTypes.string,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Enable if the header in which the title text is to be displayed is a tall Header component, disable if not. Is disabled by default. */
  isTallHeader: PropTypes.bool,
  /** The colour of the text to be displayed, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  textColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
};
export default HeaderTitleText;
