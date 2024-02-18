/**
 * Developed by Anthony Cox in 2024
 */
import { create } from '@storybook/theming';
import { generateTheme } from 'ajc-storybook';

/* Parameters: customTheme, customBrandTitle, customBrandUrl, customBrandImage */
const theme = generateTheme('light', 'AJC Web UI (ReactJs)', 'https://ajc24.github.io/ajc-web-ui-reactjs/', '');

export default create(theme);
