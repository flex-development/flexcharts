/**
 * @file Configuration - Custom Style Props
 * @module config/style-props
 */

import type { NullishString, NumberString } from '@flex-development/tutils'
import type { FluidValue } from '@react-spring/shared'
import { clean } from 'fast-clean'
import type { CSSProperties } from 'react'
import TransientProp from 'src/enums/transient-prop'
import type { ThemedProps } from 'src/interfaces'
import theme from 'src/styles/theme'
import type {
  CSSFragment,
  CSSPrimitive,
  ResponsiveValue,
  TransientKey
} from 'src/types'
import type { CSSObject } from 'styled-components/macro'
import { system, type ConfigStyle } from 'styled-system'
import url from 'styles/utils/url'

/**
 * Custom style props configuration.
 *
 * @see https://styled-system.com/custom-props#aliases
 * @see https://styled-components.com/docs/api#transient-props
 *
 * @const {Record<TransientKey, ConfigStyle>} CSP_CONFIG
 */
const CSP_CONFIG: Record<TransientKey, ConfigStyle> = {
  $bg: {
    property: TransientProp.$bg,
    scale: 'colors'
  },
  $bgcolor: {
    property: TransientProp.$bgcolor,
    scale: 'colors'
  },
  $bgimg: {
    property: TransientProp.$bgimg,

    /**
     * Transforms the value into a valid [`background-image`][1] property.
     *
     * [1]: https://developer.mozilla.org/docs/Web/CSS/background-image
     *
     * @param {NullishString} value - Property value
     * @return {NullishString} `background-image` property value
     */
    transform(value: NullishString): NullishString {
      if (!value) return null

      if (!value.includes(',')) {
        return /^url\(.*\)/.test(value) ? value : url(value, false)
      }

      return value
        .split(',')
        .filter(img => typeof img === 'string' && img.trim().length > 0)
        .map((img: string) => (/^url\(.*\)/.test(img) ? img : url(img, false)))
        .map((img: string) => img.trim())
        .join(', ')
    }
  },
  $bgpos: {
    property: TransientProp.$bgpos,
    scale: 'background.positions'
  },
  $bgpx: {
    property: TransientProp.$bgpx,
    scale: 'background.positions'
  },
  $bgpy: {
    property: TransientProp.$bgpy,
    scale: 'background.positions'
  },
  $bgrepeat: {
    property: TransientProp.$bgrepeat,
    scale: 'background.repeat'
  },
  $bgsize: {
    property: TransientProp.$bgsize,
    scale: 'background.sizes'
  },
  $borderbottomcolor: {
    property: TransientProp.$borderbottomcolor,
    scale: 'colors'
  },
  $borderbottomwidth: {
    property: TransientProp.$borderbottomwidth,
    scale: 'border.widths'
  },
  $bordercolor: {
    property: TransientProp.$bordercolor,
    scale: 'colors'
  },
  $borderleftcolor: {
    property: TransientProp.$borderleftcolor,
    scale: 'colors'
  },
  $borderleftwidth: {
    property: TransientProp.$borderleftwidth,
    scale: 'border.widths'
  },
  $borderradius: {
    property: TransientProp.$borderradius,
    scale: 'border.radii'
  },
  $borderrightcolor: {
    property: TransientProp.$borderrightcolor,
    scale: 'colors'
  },
  $borderrightwidth: {
    property: TransientProp.$borderrightwidth,
    scale: 'border.widths'
  },
  $borderstyle: {
    property: TransientProp.$borderstyle,
    scale: 'border.styles'
  },
  $bordertopcolor: {
    property: TransientProp.$bordertopcolor,
    scale: 'colors'
  },
  $bordertopwidth: {
    property: TransientProp.$bordertopwidth,
    scale: 'border.widths'
  },
  $borderwidth: {
    property: TransientProp.$borderwidth,
    scale: 'border.widths'
  },
  $bottom: {
    property: TransientProp.$bottom,
    scale: 'space'
  },
  $col: {
    property: TransientProp.$col,
    scale: 'grid.span'
  },
  $color: {
    property: TransientProp.$color,
    scale: 'colors'
  },
  $columns: {
    property: TransientProp.$columns,
    scale: 'grid.template'
  },
  $css: {
    properties: []
  },
  $cursor: {
    property: TransientProp.$cursor,
    scale: 'cursors'
  },
  $display: {
    property: TransientProp.$display,
    scale: 'display'
  },
  $fill: {
    property: TransientProp.$fill,
    scale: 'colors'
  },
  $fillopacity: {
    property: TransientProp.$fillopacity,
    scale: 'opacities'
  },
  $font: {
    property: TransientProp.$font,
    scale: 'font.families'
  },
  $fontsize: {
    property: TransientProp.$fontsize,
    scale: 'font.sizes'
  },
  $fontweight: {
    property: TransientProp.$fontweight,
    scale: 'font.weights'
  },
  $gap: {
    property: TransientProp.$gap,
    scale: 'space'
  },
  $grid: {
    property: TransientProp.$grid,
    scale: 'grid.template'
  },
  $gx: {
    property: TransientProp.$gx,
    scale: 'space'
  },
  $gy: {
    property: TransientProp.$gy,
    scale: 'space'
  },
  $height: {
    property: TransientProp.$height,
    scale: 'sizes'
  },
  $left: {
    property: TransientProp.$left,
    scale: 'space'
  },
  $letterspacing: {
    property: TransientProp.$letterspacing,
    scale: 'letterspacings'
  },
  $lineheight: {
    property: TransientProp.$lineheight,
    scale: 'lineheights'
  },
  $margin: {
    property: TransientProp.$margin,
    scale: 'space'
  },
  $maxheight: {
    property: TransientProp.$maxheight,
    scale: 'sizes'
  },
  $maxwidth: {
    property: TransientProp.$maxwidth,
    scale: 'sizes'
  },
  $mb: {
    property: TransientProp.$mb,
    scale: 'space'
  },
  $minheight: {
    property: TransientProp.$minheight,
    scale: 'sizes'
  },
  $minwidth: {
    property: TransientProp.$minwidth,
    scale: 'sizes'
  },
  $ml: {
    property: TransientProp.$ml,
    scale: 'space'
  },
  $mr: {
    property: TransientProp.$mr,
    scale: 'space'
  },
  $mt: {
    property: TransientProp.$mt,
    scale: 'space'
  },
  $mx: {
    property: TransientProp.$mx,
    scale: 'space'
  },
  $my: {
    property: TransientProp.$my,
    scale: 'space'
  },
  $opacity: {
    property: TransientProp.$opacity,
    scale: 'opacities'
  },
  $order: {
    property: TransientProp.$order,
    scale: 'grid.order'
  },
  $overflow: {
    property: TransientProp.$overflow,
    scale: 'overflow'
  },
  $overflowx: {
    property: TransientProp.$overflowx,
    scale: 'overflow'
  },
  $overflowy: {
    property: TransientProp.$overflowy,
    scale: 'overflow'
  },
  $padding: {
    property: TransientProp.$padding,
    scale: 'space'
  },
  $pb: {
    property: TransientProp.$pb,
    scale: 'space'
  },
  $pl: {
    property: TransientProp.$pl,
    scale: 'space'
  },
  $pointerevents: {
    property: TransientProp.$pointerevents,
    scale: 'pointerevents'
  },
  $position: {
    property: TransientProp.$position,
    scale: 'position'
  },
  $pr: {
    property: TransientProp.$pr,
    scale: 'space'
  },
  $pt: {
    property: TransientProp.$pt,
    scale: 'space'
  },
  $px: {
    property: TransientProp.$px,
    scale: 'space'
  },
  $py: {
    property: TransientProp.$py,
    scale: 'space'
  },
  $right: {
    property: TransientProp.$right,
    scale: 'space'
  },
  $row: {
    property: TransientProp.$row,
    scale: 'grid.span'
  },
  $rows: {
    property: TransientProp.$rows,
    scale: 'grid.template'
  },
  $stroke: {
    property: TransientProp.$stroke,
    scale: 'colors'
  },
  $strokedasharray: {
    property: TransientProp.$strokedasharray,
    scale: 'space'
  },
  $strokedashoffset: {
    property: TransientProp.$strokedashoffset,
    scale: 'space'
  },
  $strokeopacity: {
    property: TransientProp.$strokeopacity,
    scale: 'opacities'
  },
  $strokewidth: {
    property: TransientProp.$strokewidth,
    scale: 'space'
  },
  $textalign: {
    property: TransientProp.$textalign,
    scale: 'text.align'
  },
  $texttransform: {
    property: TransientProp.$texttransform,
    scale: 'text.transform'
  },
  $top: {
    property: TransientProp.$top,
    scale: 'space'
  },
  $transition: {
    property: TransientProp.$transition,
    scale: 'transitions'
  },
  $visibility: {
    property: TransientProp.$visibility,
    scale: 'visibility'
  },
  $whitespace: {
    property: TransientProp.$whitespace,
    scale: 'whitespace'
  },
  $width: {
    property: TransientProp.$width,
    scale: 'sizes'
  },
  $z: {
    property: TransientProp.$z,
    scale: 'zIndices'
  }
}

/**
 * Props handled by {@link $}.
 */
type Props = Partial<
  Record<
    TransientKey | keyof CSSProperties,
    | CSSFragment
    | CSSObject
    | FluidValue<NumberString>
    | ResponsiveValue<CSSPrimitive>
  > &
    ThemedProps
>

/**
 * Returns an object containing CSS properties.
 *
 * @template P - Component props type
 *
 * @param {P} [p={}] - Component props
 * @return {CSSObject} Object containing CSS properties
 */
function $<P extends Props = Props>(p: P = {} as P): CSSObject {
  if (!p.theme) p.theme = theme
  return clean(system(CSP_CONFIG)(p) as CSSObject)
}

export { $ as default, CSP_CONFIG }
