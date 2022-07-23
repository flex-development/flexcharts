/**
 * @file Storybook Configuration - Custom Viewports
 * @module storybook/config/viewports
 * @see https://storybook.js.org/addons/@storybook/addon-viewport
 * @see https://www.designrush.com/agency/web-development-companies/trends/website-dimensions
 */

import type { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models'

/** @const {Readonly<ViewportMap>} config - Viewports configuration */
const config: Readonly<ViewportMap> = Object.freeze({
  '360x760': {
    name: 'Samsung Galaxy S10',
    styles: { height: '760px', width: '360px' },
    type: 'mobile'
  },
  '375x667': {
    name: 'iPhone 8, SE',
    styles: { height: '667px', width: '375px' },
    type: 'mobile'
  },
  '375x812': {
    name: 'iPhone X, XS, 11 Pro, 13 Mini',
    styles: { height: '812px', width: '375px' },
    type: 'mobile'
  },
  '390x844': {
    name: 'iPhone 13, 13 Pro, 12, 12 Pro',
    styles: { height: '844px', width: '390px' },
    type: 'mobile'
  },
  '414x736': {
    name: 'iPhone 8 Plus',
    styles: { height: '736px', width: '414px' },
    type: 'mobile'
  },
  '414x896': {
    name: 'iPhone XR, XS Max, 11',
    styles: { height: '896px', width: '414px' },
    type: 'mobile'
  },
  '428x926': {
    name: 'iPhone 13, 12 Pro Max',
    styles: { height: '926px', width: '428px' },
    type: 'mobile'
  },
  '744x1133': {
    name: 'iPad Mini',
    styles: { height: '1133px', width: '744px' },
    type: 'tablet'
  },
  '768x1024': {
    name: 'iPad',
    styles: { height: '1024px', width: '768px' },
    type: 'tablet'
  },
  '800x1280': {
    name: 'Samsung Galaxy Tab10',
    styles: { height: '1280px', width: '800px' },
    type: 'tablet'
  },
  '820x1180': {
    name: 'iPad Air',
    styles: { height: '1180px', width: '820px' },
    type: 'tablet'
  },
  '834x1194': {
    name: 'iPad Pro 11in',
    styles: { height: '1194px', width: '834px' },
    type: 'tablet'
  },
  '1024x1366': {
    name: 'iPad Pro 12.9in',
    styles: { height: '1366px', width: '1024px' },
    type: 'tablet'
  },
  '1280x720': {
    name: 'Web 1280',
    styles: { height: '720px', width: '1280px' },
    type: 'desktop'
  },
  '1366x768': {
    name: 'Web 1366',
    styles: { height: '768px', width: '1366px' },
    type: 'desktop'
  },
  '1440x900': {
    name: 'Web 1440',
    styles: { height: '900px', width: '1440px' },
    type: 'desktop'
  },
  '1536x864': {
    name: 'Web 1536',
    styles: { height: '864px', width: '1536px' },
    type: 'desktop'
  },
  '1920x1080': {
    name: 'Web 1920',
    styles: { height: '1080px', width: '1920px' },
    type: 'desktop'
  }
})

export default config
