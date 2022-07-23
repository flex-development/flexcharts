/**
 * @file Storybook Configuration - UI
 * @module storybook/manager
 * @see https://storybook.js.org/docs/configurations/options-parameter
 */

import { addons } from '@storybook/addons'

addons.setConfig({
  /**
   * Where to show the addon panel.
   */
  panelPosition: 'bottom',

  /**
   * ID of addon panel to show by default.
   *
   * The panel for Storybook Addon HTML will be shown.
   *
   * @see https://github.com/whitespace-se/storybook-addon-html
   */
  selectedPanel: 'html/panel'
})
