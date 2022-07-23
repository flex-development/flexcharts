/**
 * @file Interfaces - SVGElements
 * @module interfaces/SVGElements
 */

import type { FluidProps } from '@react-spring/shared'
import type { SVGAttributes } from 'react'
import type GlobalAttributes from './global-attributes'

/**
 * Maps SVG elements to element types and attributes.
 */
interface SVGElements {
  animate: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGAnimateElement>>,
      keyof GlobalAttributes<SVGAnimateElement>
    >
    element: SVGAnimateElement
  }
  animateMotion: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGAnimateMotionElement>>,
      keyof GlobalAttributes<SVGAnimateMotionElement>
    >
    element: SVGAnimateMotionElement
  }
  animateTransform: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGAnimateTransformElement>>,
      keyof GlobalAttributes<SVGAnimateTransformElement>
    >
    element: SVGAnimateTransformElement
  }
  circle: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGCircleElement>>,
      keyof GlobalAttributes<SVGCircleElement>
    >
    element: SVGCircleElement
  }
  clipPath: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGClipPathElement>>,
      keyof GlobalAttributes<SVGClipPathElement>
    >
    element: SVGClipPathElement
  }
  defs: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGDefsElement>>,
      keyof GlobalAttributes<SVGDefsElement>
    >
    element: SVGDefsElement
  }
  desc: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGDescElement>>,
      keyof GlobalAttributes<SVGDescElement>
    >
    element: SVGDescElement
  }
  ellipse: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGEllipseElement>>,
      keyof GlobalAttributes<SVGEllipseElement>
    >
    element: SVGEllipseElement
  }
  feBlend: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEBlendElement>>,
      keyof GlobalAttributes<SVGFEBlendElement>
    >
    element: SVGFEBlendElement
  }
  feColorMatrix: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEColorMatrixElement>>,
      keyof GlobalAttributes<SVGFEColorMatrixElement>
    >
    element: SVGFEColorMatrixElement
  }
  feComponentTransfer: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEComponentTransferElement>>,
      keyof GlobalAttributes<SVGFEComponentTransferElement>
    >
    element: SVGFEComponentTransferElement
  }
  feComposite: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFECompositeElement>>,
      keyof GlobalAttributes<SVGFECompositeElement>
    >
    element: SVGFECompositeElement
  }
  feConvolveMatrix: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEConvolveMatrixElement>>,
      keyof GlobalAttributes<SVGFEConvolveMatrixElement>
    >
    element: SVGFEConvolveMatrixElement
  }
  feDiffuseLighting: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEDiffuseLightingElement>>,
      keyof GlobalAttributes<SVGFEDiffuseLightingElement>
    >
    element: SVGFEDiffuseLightingElement
  }
  feDisplacementMap: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEDisplacementMapElement>>,
      keyof GlobalAttributes<SVGFEDisplacementMapElement>
    >
    element: SVGFEDisplacementMapElement
  }
  feDistantLight: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEDistantLightElement>>,
      keyof GlobalAttributes<SVGFEDistantLightElement>
    >
    element: SVGFEDistantLightElement
  }
  feDropShadow: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEDropShadowElement>>,
      keyof GlobalAttributes<SVGFEDropShadowElement>
    >
    element: SVGFEDropShadowElement
  }
  feFlood: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEFloodElement>>,
      keyof GlobalAttributes<SVGFEFloodElement>
    >
    element: SVGFEFloodElement
  }
  feFuncA: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEFuncAElement>>,
      keyof GlobalAttributes<SVGFEFuncAElement>
    >
    element: SVGFEFuncAElement
  }
  feFuncB: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEFuncBElement>>,
      keyof GlobalAttributes<SVGFEFuncBElement>
    >
    element: SVGFEFuncBElement
  }
  feFuncG: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEFuncGElement>>,
      keyof GlobalAttributes<SVGFEFuncGElement>
    >
    element: SVGFEFuncGElement
  }
  feFuncR: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEFuncRElement>>,
      keyof GlobalAttributes<SVGFEFuncRElement>
    >
    element: SVGFEFuncRElement
  }
  feGaussianBlur: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEGaussianBlurElement>>,
      keyof GlobalAttributes<SVGFEGaussianBlurElement>
    >
    element: SVGFEGaussianBlurElement
  }
  feImage: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEImageElement>>,
      keyof GlobalAttributes<SVGFEImageElement>
    >
    element: SVGFEImageElement
  }
  feMerge: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEMergeElement>>,
      keyof GlobalAttributes<SVGFEMergeElement>
    >
    element: SVGFEMergeElement
  }
  feMergeNode: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEMergeNodeElement>>,
      keyof GlobalAttributes<SVGFEMergeNodeElement>
    >
    element: SVGFEMergeNodeElement
  }
  feMorphology: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEMorphologyElement>>,
      keyof GlobalAttributes<SVGFEMorphologyElement>
    >
    element: SVGFEMorphologyElement
  }
  feOffset: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEOffsetElement>>,
      keyof GlobalAttributes<SVGFEOffsetElement>
    >
    element: SVGFEOffsetElement
  }
  fePointLight: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFEPointLightElement>>,
      keyof GlobalAttributes<SVGFEPointLightElement>
    >
    element: SVGFEPointLightElement
  }
  feSpecularLighting: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFESpecularLightingElement>>,
      keyof GlobalAttributes<SVGFESpecularLightingElement>
    >
    element: SVGFESpecularLightingElement
  }
  feSpotLight: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFESpotLightElement>>,
      keyof GlobalAttributes<SVGFESpotLightElement>
    >
    element: SVGFESpotLightElement
  }
  feTile: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFETileElement>>,
      keyof GlobalAttributes<SVGFETileElement>
    >
    element: SVGFETileElement
  }
  feTurbulence: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFETurbulenceElement>>,
      keyof GlobalAttributes<SVGFETurbulenceElement>
    >
    element: SVGFETurbulenceElement
  }
  filter: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGFilterElement>>,
      keyof GlobalAttributes<SVGFilterElement>
    >
    element: SVGFilterElement
  }
  foreignObject: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGForeignObjectElement>>,
      keyof GlobalAttributes<SVGForeignObjectElement>
    >
    element: SVGForeignObjectElement
  }
  g: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGGElement>>,
      keyof GlobalAttributes<SVGGElement>
    >
    element: SVGGElement
  }
  image: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGImageElement>>,
      keyof GlobalAttributes<SVGImageElement>
    >
    element: SVGImageElement
  }
  line: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGLineElement>>,
      keyof GlobalAttributes<SVGLineElement>
    >
    element: SVGLineElement
  }
  linearGradient: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGLinearGradientElement>>,
      keyof GlobalAttributes<SVGLinearGradientElement>
    >
    element: SVGLinearGradientElement
  }
  marker: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGMarkerElement>>,
      keyof GlobalAttributes<SVGMarkerElement>
    >
    element: SVGMarkerElement
  }
  mask: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGMaskElement>>,
      keyof GlobalAttributes<SVGMaskElement>
    >
    element: SVGMaskElement
  }
  metadata: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGMetadataElement>>,
      keyof GlobalAttributes<SVGMetadataElement>
    >
    element: SVGMetadataElement
  }
  mpath: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGMPathElement>>,
      keyof GlobalAttributes<SVGMPathElement>
    >
    element: SVGMPathElement
  }
  path: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGPathElement>>,
      keyof GlobalAttributes<SVGPathElement>
    >
    element: SVGPathElement
  }
  pattern: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGPatternElement>>,
      keyof GlobalAttributes<SVGPatternElement>
    >
    element: SVGPatternElement
  }
  polygon: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGPolygonElement>>,
      keyof GlobalAttributes<SVGPolygonElement>
    >
    element: SVGPolygonElement
  }
  polyline: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGPolylineElement>>,
      keyof GlobalAttributes<SVGPolylineElement>
    >
    element: SVGPolylineElement
  }
  radialGradient: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGRadialGradientElement>>,
      keyof GlobalAttributes<SVGRadialGradientElement>
    >
    element: SVGRadialGradientElement
  }
  rect: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGRectElement>>,
      keyof GlobalAttributes<SVGRectElement>
    >
    element: SVGRectElement
  }
  stop: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGStopElement>>,
      keyof GlobalAttributes<SVGStopElement>
    >
    element: SVGStopElement
  }
  svg: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGSVGElement>>,
      keyof GlobalAttributes<SVGSVGElement>
    >
    element: SVGSVGElement
  }
  switch: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGSwitchElement>>,
      keyof GlobalAttributes<SVGSwitchElement>
    >
    element: SVGSwitchElement
  }
  symbol: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGSymbolElement>>,
      keyof GlobalAttributes<SVGSymbolElement>
    >
    element: SVGSymbolElement
  }
  text: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGTextElement>>,
      keyof GlobalAttributes<SVGTextElement>
    >
    element: SVGTextElement
  }
  textPath: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGTextPathElement>>,
      keyof GlobalAttributes<SVGTextPathElement>
    >
    element: SVGTextPathElement
  }
  tspan: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGTSpanElement>>,
      keyof GlobalAttributes<SVGTSpanElement>
    >
    element: SVGTSpanElement
  }
  use: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGUseElement>>,
      keyof GlobalAttributes<SVGUseElement>
    >
    element: SVGUseElement
  }
  view: {
    attributes: Omit<
      FluidProps<SVGAttributes<SVGViewElement>>,
      keyof GlobalAttributes<SVGViewElement>
    >
    element: SVGViewElement
  }
}

export default SVGElements
