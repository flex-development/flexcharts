/**
 * @file Styles Base - Fonts
 * @module styles/base/Fonts
 */

import type { ThemedProps, ThemeSpec } from 'src/interfaces'
import type { CSSFragment } from 'src/types'
import { css } from 'styled-components/macro'
import fontsrc from '../utils/fontsrc'

/**
 * Renders font declarations.
 *
 * @see https://css-tricks.com/snippets/css/using-font-face-in-css/#aa-deepest-possible-browser-support
 * @see https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering
 *
 * @param {ThemedProps} p - Theme consumer props
 * @param {ThemeSpec} p.theme - Theme specification
 * @return {CSSFragment} CSS fragment with `@font-face` declarations
 */
const Fonts = (p: ThemedProps): CSSFragment => {
  /** @const {[string, string?][]} src - Font file exts mapped to formats */
  const src: [string, string?][] = [['ttf', 'truetype']]

  return css`
    /* -------------------------------------------------------------------------
     FONTS
    --------------------------------------------------------------------------*/

    /* -------------------------------------------------------------------------
     BASIER CIRCLE
    --------------------------------------------------------------------------*/

    /* -------------------------------------------------------------------------
     BASIER CIRCLE - REGULAR
    --------------------------------------------------------------------------*/
    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-Regular', src)};
      font-weight: ${p.theme.font.weights.normal};
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-RegularItalic', src)};
      font-weight: ${p.theme.font.weights.normal};
      font-style: italic;
      font-display: fallback;
    }

    /* -------------------------------------------------------------------------
     BASIER CIRCLE - MEDIUM
    --------------------------------------------------------------------------*/
    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-Medium', src)};
      font-weight: ${p.theme.font.weights.medium};
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-MediumItalic', src)};
      font-weight: ${p.theme.font.weights.medium};
      font-style: italic;
      font-display: fallback;
    }

    /* -------------------------------------------------------------------------
     BASIER CIRCLE - SEMIBOLD
    --------------------------------------------------------------------------*/
    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-Semibold', src)};
      font-weight: ${p.theme.font.weights.semibold};
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-SemiboldItalic', src)};
      font-weight: ${p.theme.font.weights.semibold};
      font-style: italic;
      font-display: fallback;
    }

    /* -------------------------------------------------------------------------
     BASIER CIRCLE - BOLD
    --------------------------------------------------------------------------*/
    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-Bold', src)};
      font-weight: ${p.theme.font.weights.bold};
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: ${p.theme.font.families.basier};
      src: ${fontsrc('BasierCircle-BoldItalic', src)};
      font-weight: ${p.theme.font.weights.bold};
      font-style: italic;
      font-display: fallback;
    }
  `
}

export default Fonts
