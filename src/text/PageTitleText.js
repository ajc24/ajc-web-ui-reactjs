/**
 * Developed by Anthony Cox in 2025
 */
import PropTypes from 'prop-types';
import './css/text-page-title.css';
import '../css/common.css';

/**
 * Page title text component which renders individual page titles of the web application to the user. This component is intended for use with the
 * Main component but can also be rendered standalone. The page title text content can be left aligned or centre aligned.
 */
const PageTitleText = props => {
  /* Set the styling for the container element */
  let containerCss = 'page-title-text font-black';
  props.alignment === 'centre' ? containerCss += ' page-title-text-alignment-centre' : containerCss += ' page-title-text-alignment-left';
  props.underline === true ? containerCss += ' page-title-text-underline' : containerCss += ''.trim();

  return (
    <h2 aria-label={props.children} className={containerCss} id={`${props.id}--page-title-text`}>
      {props.children}
    </h2>
  );
}
PageTitleText.propTypes = {
  /* The alignment of the page title text content. The text by default will be left aligned but can be centre aligned at all times. */
  alignment: PropTypes.oneOf([ 'centre', 'left' ]),
  /** The content to be displayed as the pages title text. */
  children: PropTypes.string,
   /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** Switch to enable or disable underlining the page title text content. By default the page title text content is not underlined. */
  underline: PropTypes.bool,
};
export default PageTitleText;
