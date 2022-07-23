/**
 * @file Enums - TransientProp
 * @module enums/TransientProp
 */

/**
 * Transient props.
 *
 * **Note**: Some props are also [custom style props][1]; see
 * [`config/style-props`][2] for an exhaustive list.
 *
 * [1]: https://styled-system.com/custom-props
 * [2]: ../config/style-props.ts
 *
 * @see https://styled-components.com/docs/api#transient-props
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference#index
 */
enum TransientProp {
  $bg = 'background',
  $bgcolor = 'backgroundColor',
  $bgimg = 'backgroundImage',
  $bgpos = 'backgroundPosition',
  $bgpx = 'backgroundPositionX',
  $bgpy = 'backgroundPositionY',
  $bgrepeat = 'backgroundRepeat',
  $bgsize = 'backgroundSize',
  $borderbottomcolor = 'borderBottomColor',
  $borderbottomwidth = 'borderBottomWidth',
  $bordercolor = 'borderColor',
  $borderleftcolor = 'borderLeftColor',
  $borderleftwidth = 'borderLeftWidth',
  $borderradius = 'borderRadius',
  $borderrightcolor = 'borderRightColor',
  $borderrightwidth = 'borderRightWidth',
  $borderstyle = 'borderStyle',
  $bordertopcolor = 'borderTopColor',
  $bordertopwidth = 'borderTopWidth',
  $borderwidth = 'borderWidth',
  $bottom = 'bottom',
  $col = 'gridColumn',
  $color = 'color',
  $columns = 'gridTemplateColumns',
  $css = '',
  $cursor = 'cursor',
  $display = 'display',
  $fill = 'fill',
  $fillopacity = 'fillOpacity',
  $font = 'fontFamily',
  $fontsize = 'fontSize',
  $fontweight = 'fontWeight',
  $gap = 'gap',
  $grid = 'grid',
  $gx = 'columnGap',
  $gy = 'rowGap',
  $height = 'height',
  $left = 'left',
  $letterspacing = 'letterSpacing',
  $lineheight = 'lineHeight',
  $margin = 'margin',
  $maxheight = 'maxHeight',
  $maxwidth = 'maxWidth',
  $mb = 'marginBottom',
  $minheight = 'minHeight',
  $minwidth = 'minWidth',
  $ml = 'marginLeft',
  $mr = 'marginRight',
  $mt = 'marginTop',
  $mx = 'marginInline',
  $my = 'marginBlock',
  $opacity = 'opacity',
  $order = 'order',
  $overflow = 'overflow',
  $overflowx = 'overflowX',
  $overflowy = 'overflowY',
  $padding = 'padding',
  $pb = 'paddingBottom',
  $pl = 'paddingLeft',
  $pointerevents = 'pointerEvents',
  $position = 'position',
  $pr = 'paddingRight',
  $pt = 'paddingTop',
  $px = 'paddingInline',
  $py = 'paddingBlock',
  $right = 'right',
  $row = 'gridRow',
  $rows = 'gridTemplateRows',
  $stroke = 'stroke',
  $strokedasharray = 'strokeDasharray',
  $strokedashoffset = 'strokeDashoffset',
  $strokeopacity = 'strokeOpacity',
  $strokewidth = 'strokeWidth',
  $textalign = 'textAlign',
  $texttransform = 'textTransform',
  $top = 'top',
  $transition = 'transition',
  $visibility = 'visibility',
  $whitespace = 'whiteSpace',
  $width = 'width',
  $z = 'zIndex'
}

export default TransientProp
