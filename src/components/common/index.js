/**
 * Developed by Anthony Cox in 2024
 */
import { storybookCssClasses } from '../data/storybook';

/* Commonly used CSS classes */
const ajcBodyDefaultCss = 'ajc-body-default';

/**
 * Setup and configure the current web page to ensure the default CSS styling is set to it.
 * This also handles the styling of pages which are deployed on Storybook
 */
const setupDocumentBodyCss = () => {
  /* If we are rendering on Storybook, remove the Storybook classes which will affect the width of the component */
  if (document.body.classList.contains(storybookCssClasses.sbShowMain) === true) {
    document.body.classList.remove(storybookCssClasses.sbShowMain);
  }
  if (document.body.classList.contains(storybookCssClasses.sbMainPadded) === true) {
    document.body.classList.remove(storybookCssClasses.sbMainPadded);
  }

  /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */
  if (document.body.classList.contains(ajcBodyDefaultCss) === false) {
    document.body.classList.add(ajcBodyDefaultCss);
    document.activeElement.blur();
  }
};

export {
  setupDocumentBodyCss,
};
