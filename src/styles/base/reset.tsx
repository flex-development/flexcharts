/**
 * @file Styles Base - Reset
 * @module styles/base/Reset
 */

import { rgba } from 'polished'
import AriaRole from 'src/enums/aria-role'
import type { ThemedProps, ThemeSpec } from 'src/interfaces'
import type { CSSFragment } from 'src/types'
import { css } from 'styled-components/macro'

/**
 * Resets user agent styles.
 *
 * @see https://elad.medium.com/normalize-css-or-css-reset-9d75175c5d1e
 *
 * @param {ThemedProps} p - Theme consumer props
 * @param {ThemeSpec} p.theme - Theme specification
 * @return {CSSFragment} CSS fragment with reset styles
 */
const Reset = (p: ThemedProps): CSSFragment => css`
  /* ---------------------------------------------------------------------------
    RESET
  ----------------------------------------------------------------------------*/

  /* GLOBAL */

  /* 1. Don't allow padding or border to impact element width */
  *,
  *::before,
  *::after {
    box-sizing: border-box; /* 1 */
  }

  /* 1. Always hide an element with HTML hidden attribute */
  [hidden] {
    display: ${p.theme.display.none} !important; /* 1 */
  }

  /* BODY */

  /*
    1. Change the default tap highlight to be completely transparent in iOS
    2. Prevent adjustments of font size after orientation changes in iOS
    3. Remove margin in all browsers
  */
  body {
    -webkit-tap-highlight-color: ${rgba(p.theme.colors.black, 0)}; /* 1 */
    -webkit-text-size-adjust: ${p.theme.sizes.fluid}; /* 2 */
    color: ${p.theme.colors.black};
    font-family: ${p.theme.font.families.basier};
    font-size: ${p.theme.font.sizes[16]};
    line-height: 1;
    margin: ${p.theme.space[0]}; /* 3 */
    overflow: ${p.theme.overflow.hidden} ${p.theme.overflow.scroll};
  }

  /*
    In browsers that support :focus-visible, suppress the focus outline on elements that programmatically receive focus but wouldn't normally show a visible focus outline.

    The outline is only applied if the interaction that led to the element receiving programmatic focus was a keyboard interaction, or the browser has determined that the user is primarily a keyboard user and/or wants focus outlines to always be presented.

    See: https://developer.mozilla.org/docs/Web/CSS/:focus-visible
    See: https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility
  */
  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  /* HTML5 DISPLAY-ROLE RESET FOR OLDER BROWSERS */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: ${p.theme.display.block};
  }

  /* TYPOGRAPHY */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${p.theme.font.families.basier};
  }

  /* 1. Add the correct font weight in Chrome, Edge, and Safari */
  b,
  strong {
    font-weight: ${p.theme.font.weights.bold}; /* 1 */
  }

  /* 1. Remove top margin from paragraphs */
  p {
    margin-top: ${p.theme.space[0]};
  }

  /* LINKS */

  /* Undo styles for placeholder links/named anchors (without href) */
  a:not([href]):not([class]) {
    &,
    &:hover {
      color: ${p.theme.colors.inherit};
      text-decoration: underline;
    }
  }

  /* 1. Set font weight for links with paragraphs */
  p a {
    font-weight: inherit; /* 1 */
  }

  /* FORM CONTROLS */

  /* 1. Remove the default border-radius that macOS Chrome adds */
  button {
    border-radius: 0; /* 1 */
    /*
      Work around a Firefox bug where the transparent button background results in a loss of the default button focus styles.
      Credit: https://github.com/suitcss/base
    */
    &:focus {
      outline: dotted 1px;
      outline: -webkit-focus-ring-color auto 5px;
    }
  }

  /* 1. Allow labels to use margin for spacing */
  label {
    display: ${p.theme.display.inlineflex}; /* 1 */
  }

  /* 1. Remove the inheritance of word-wrap in Safari */
  select {
    word-wrap: normal;
  }

  /* 1. Only resize vertically so horizontal containers are not overflown */
  textarea {
    resize: vertical; /* 1 */
  }

  /*
    1. Correct the outline style in Safari
    2. Overrides the extra rounded corners on search inputs in iOS
  */
  [type='search'] {
    outline-offset: -2px; /* 1 */
    -webkit-appearance: textfield; /* 2 */
  }

  /* 1. Remove margin in Firefox and Safari */
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: ${p.theme.space[0]}; /* 1 */
  }

  /*
    1. Prevent bug where (2) destroys native Android 4 audio and video controls
    2. Overrides the extra rounded corners on search inputs in iOS
    3. Add "hand" cursor to non-disabled button elements
    4. Add "not-allowed" cursor to disabled button elements
  */
  button,
  [type='button'], /* 1 */
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button; /* 2 */
  }

  /*
    1. Add "hand" cursor to non-disabled button elements
    2. Add "not-allowed" cursor to disabled button elements
  */
  button,
  select,
  [role=${AriaRole.button}] {
    &:not(:disabled) {
      cursor: ${p.theme.cursors.pointer}; /* 1 */
    }

    &:disabled {
      cursor: ${p.theme.cursors.no}; /* 2 */
    }
  }

  /* 1. Remove the inheritance of text transform in Firefox */
  button,
  select {
    text-transform: ${p.theme.text.transform.none}; /* 1 */
  }

  /* MOZILLA */

  /* 1. Remove inner border and padding from Firefox */
  ::-moz-focus-inner {
    border-style: none; /* 1 */
    padding: 0; /* 1 */
  }

  /* WEBKIT */

  /* 1. Remove inner padding in Chrome and Safari on macOS */
  ::-webkit-search-decoration {
    -webkit-appearance: none; /* 1 */
  }
`

export default Reset
