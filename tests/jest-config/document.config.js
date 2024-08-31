/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';

/* Ensure that this environment variable is set for react unit testing */
global.IS_REACT_ACT_ENVIRONMENT = true;

/* Ensure that all relevant functionality is present for document interactions */
global.document.createRange = () => ({
  getClientRects: () => [],
  selectNodeContents: () => {},
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
global.document.elementFromPoint = () => {};

/* Ensure that all relevant functionality is present for Element interactions */
Element.prototype.scrollIntoView = () => {};

/* Ensure getComputedStyle functionality is present for <select> elements */
const { getComputedStyle } = global.window;
global.window.getComputedStyle = (elt) => getComputedStyle(elt);

/* Work around getContext errors in accessibility tests */
window.HTMLCanvasElement.prototype.getContext = () => {};
