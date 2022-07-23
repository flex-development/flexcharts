/**
 * @file Interfaces - HTMLElements
 * @module interfaces/HTMLElements
 */

import type { FluidProps } from '@react-spring/shared'
import type {
  AnchorHTMLAttributes,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColgroupHTMLAttributes,
  ColHTMLAttributes,
  DataHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MediaHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  ScriptHTMLAttributes,
  SelectHTMLAttributes,
  SlotHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
  WebViewHTMLAttributes
} from 'react'
import type GlobalAttributes from './global-attributes'
import type SVGElements from './svg-elements'

/**
 * Maps HTML and SVG elements to element types and attributes.
 *
 * @extends {SVGElements}
 */
interface HTMLElements extends SVGElements {
  a: {
    attributes: Omit<
      FluidProps<AnchorHTMLAttributes<HTMLAnchorElement>>,
      keyof GlobalAttributes<HTMLAnchorElement>
    >
    element: HTMLAnchorElement
  }
  abbr: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  address: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  area: {
    attributes: Omit<
      FluidProps<AreaHTMLAttributes<HTMLAreaElement>>,
      keyof GlobalAttributes<HTMLAreaElement>
    >
    element: HTMLAreaElement
  }
  article: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  aside: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  audio: {
    attributes: Omit<
      FluidProps<AudioHTMLAttributes<HTMLAudioElement>>,
      keyof GlobalAttributes<HTMLAudioElement>
    >
    element: HTMLAudioElement
  }
  b: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  base: {
    attributes: Omit<
      FluidProps<BaseHTMLAttributes<HTMLBaseElement>>,
      keyof GlobalAttributes<HTMLBaseElement>
    >
    element: HTMLBaseElement
  }
  bdi: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  bdo: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  big: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  blockquote: {
    attributes: Omit<
      FluidProps<BlockquoteHTMLAttributes<HTMLQuoteElement>>,
      keyof GlobalAttributes<HTMLQuoteElement>
    >
    element: HTMLQuoteElement
  }
  body: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLBodyElement>>,
      keyof GlobalAttributes<HTMLBodyElement>
    >
    element: HTMLBodyElement
  }
  br: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLBRElement>>,
      keyof GlobalAttributes<HTMLBRElement>
    >
    element: HTMLBRElement
  }
  button: {
    attributes: Omit<
      FluidProps<ButtonHTMLAttributes<HTMLButtonElement>>,
      keyof GlobalAttributes<HTMLButtonElement>
    >
    element: HTMLButtonElement
  }
  canvas: {
    attributes: Omit<
      FluidProps<CanvasHTMLAttributes<HTMLCanvasElement>>,
      keyof GlobalAttributes<HTMLCanvasElement>
    >
    element: HTMLCanvasElement
  }
  caption: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTableCaptionElement>>,
      keyof GlobalAttributes<HTMLTableCaptionElement>
    >
    element: HTMLTableCaptionElement
  }
  cite: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  code: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  col: {
    attributes: Omit<
      FluidProps<ColHTMLAttributes<HTMLTableColElement>>,
      keyof GlobalAttributes<HTMLTableColElement>
    >
    element: HTMLTableColElement
  }
  colgroup: {
    attributes: Omit<
      FluidProps<ColgroupHTMLAttributes<HTMLTableColElement>>,
      keyof GlobalAttributes<HTMLTableColElement>
    >
    element: HTMLTableColElement
  }
  data: {
    attributes: Omit<
      FluidProps<DataHTMLAttributes<HTMLDataElement>>,
      keyof GlobalAttributes<HTMLDataElement>
    >
    element: HTMLDataElement
  }
  datalist: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLDataListElement>>,
      keyof GlobalAttributes<HTMLDataListElement>
    >
    element: HTMLDataListElement
  }
  dd: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  del: {
    attributes: Omit<
      FluidProps<DelHTMLAttributes<HTMLModElement>>,
      keyof GlobalAttributes<HTMLModElement>
    >
    element: HTMLModElement
  }
  details: {
    attributes: Omit<
      FluidProps<DetailsHTMLAttributes<HTMLDetailsElement>>,
      keyof GlobalAttributes<HTMLDetailsElement>
    >
    element: HTMLDetailsElement
  }
  dfn: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  dialog: {
    attributes: Omit<
      FluidProps<DialogHTMLAttributes<HTMLDialogElement>>,
      keyof GlobalAttributes<HTMLDialogElement>
    >
    element: HTMLDialogElement
  }
  div: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLDivElement>>,
      keyof GlobalAttributes<HTMLDivElement>
    >
    element: HTMLDivElement
  }
  dl: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLDListElement>>,
      keyof GlobalAttributes<HTMLDListElement>
    >
    element: HTMLDListElement
  }
  dt: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  em: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  embed: {
    attributes: Omit<
      FluidProps<EmbedHTMLAttributes<HTMLEmbedElement>>,
      keyof GlobalAttributes<HTMLEmbedElement>
    >
    element: HTMLEmbedElement
  }
  fieldset: {
    attributes: Omit<
      FluidProps<FieldsetHTMLAttributes<HTMLFieldSetElement>>,
      keyof GlobalAttributes<HTMLFieldSetElement>
    >
    element: HTMLFieldSetElement
  }
  figcaption: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  figure: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  footer: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  form: {
    attributes: Omit<
      FluidProps<FormHTMLAttributes<HTMLFormElement>>,
      keyof GlobalAttributes<HTMLFormElement>
    >
    element: HTMLFormElement
  }
  h1: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  h2: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  h3: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  h4: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  h5: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  h6: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadingElement>>,
      keyof GlobalAttributes<HTMLHeadingElement>
    >
    element: HTMLHeadingElement
  }
  head: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHeadElement>>,
      keyof GlobalAttributes<HTMLHeadElement>
    >
    element: HTMLHeadElement
  }
  header: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  hgroup: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  hr: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHRElement>>,
      keyof GlobalAttributes<HTMLHRElement>
    >
    element: HTMLHRElement
  }
  html: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLHtmlElement>>,
      keyof GlobalAttributes<HTMLHtmlElement>
    >
    element: HTMLHtmlElement
  }
  i: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  iframe: {
    attributes: Omit<
      FluidProps<IframeHTMLAttributes<HTMLIFrameElement>>,
      keyof GlobalAttributes<HTMLIFrameElement>
    >
    element: HTMLIFrameElement
  }
  img: {
    attributes: Omit<
      FluidProps<ImgHTMLAttributes<HTMLImageElement>>,
      keyof GlobalAttributes<HTMLImageElement>
    >
    element: HTMLImageElement
  }
  input: {
    attributes: Omit<
      FluidProps<InputHTMLAttributes<HTMLInputElement>>,
      keyof GlobalAttributes<HTMLInputElement>
    >
    element: HTMLInputElement
  }
  ins: {
    attributes: Omit<
      FluidProps<InsHTMLAttributes<HTMLModElement>>,
      keyof GlobalAttributes<HTMLModElement>
    >
    element: HTMLModElement
  }
  kbd: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  keygen: {
    attributes: Omit<
      FluidProps<KeygenHTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  label: {
    attributes: Omit<
      FluidProps<LabelHTMLAttributes<HTMLLabelElement>>,
      keyof GlobalAttributes<HTMLLabelElement>
    >
    element: HTMLLabelElement
  }
  legend: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLLegendElement>>,
      keyof GlobalAttributes<HTMLLegendElement>
    >
    element: HTMLLegendElement
  }
  li: {
    attributes: Omit<
      FluidProps<LiHTMLAttributes<HTMLLIElement>>,
      keyof GlobalAttributes<HTMLLIElement>
    >
    element: HTMLLIElement
  }
  link: {
    attributes: Omit<
      FluidProps<LinkHTMLAttributes<HTMLLinkElement>>,
      keyof GlobalAttributes<HTMLLinkElement>
    >
    element: HTMLLinkElement
  }
  main: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  map: {
    attributes: Omit<
      FluidProps<MapHTMLAttributes<HTMLMapElement>>,
      keyof GlobalAttributes<HTMLMapElement>
    >
    element: HTMLMapElement
  }
  mark: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  media: {
    attributes: Omit<
      FluidProps<MediaHTMLAttributes<HTMLMediaElement>>,
      keyof GlobalAttributes<HTMLMediaElement>
    >
    element: HTMLMediaElement
  }
  menu: {
    attributes: Omit<
      FluidProps<MenuHTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  menuitem: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  meta: {
    attributes: Omit<
      FluidProps<MetaHTMLAttributes<HTMLMetaElement>>,
      keyof GlobalAttributes<HTMLMetaElement>
    >
    element: HTMLMetaElement
  }
  meter: {
    attributes: Omit<
      FluidProps<MeterHTMLAttributes<HTMLMeterElement>>,
      keyof GlobalAttributes<HTMLMeterElement>
    >
    element: HTMLMeterElement
  }
  nav: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  noscript: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  object: {
    attributes: Omit<
      FluidProps<ObjectHTMLAttributes<HTMLObjectElement>>,
      keyof GlobalAttributes<HTMLObjectElement>
    >
    element: HTMLObjectElement
  }
  ol: {
    attributes: Omit<
      FluidProps<OlHTMLAttributes<HTMLOListElement>>,
      keyof GlobalAttributes<HTMLOListElement>
    >
    element: HTMLOListElement
  }
  optgroup: {
    attributes: Omit<
      FluidProps<OptgroupHTMLAttributes<HTMLOptGroupElement>>,
      keyof GlobalAttributes<HTMLOptGroupElement>
    >
    element: HTMLOptGroupElement
  }
  option: {
    attributes: Omit<
      FluidProps<OptionHTMLAttributes<HTMLOptionElement>>,
      keyof GlobalAttributes<HTMLOptionElement>
    >
    element: HTMLOptionElement
  }
  output: {
    attributes: Omit<
      FluidProps<OutputHTMLAttributes<HTMLOutputElement>>,
      keyof GlobalAttributes<HTMLOutputElement>
    >
    element: HTMLOutputElement
  }
  p: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLParagraphElement>>,
      keyof GlobalAttributes<HTMLParagraphElement>
    >
    element: HTMLParagraphElement
  }
  param: {
    attributes: Omit<
      FluidProps<ParamHTMLAttributes<HTMLParamElement>>,
      keyof GlobalAttributes<HTMLParamElement>
    >
    element: HTMLParamElement
  }
  picture: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  pre: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLPreElement>>,
      keyof GlobalAttributes<HTMLPreElement>
    >
    element: HTMLPreElement
  }
  progress: {
    attributes: Omit<
      FluidProps<ProgressHTMLAttributes<HTMLProgressElement>>,
      keyof GlobalAttributes<HTMLProgressElement>
    >
    element: HTMLProgressElement
  }
  q: {
    attributes: Omit<
      FluidProps<QuoteHTMLAttributes<HTMLQuoteElement>>,
      keyof GlobalAttributes<HTMLQuoteElement>
    >
    element: HTMLQuoteElement
  }
  rp: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  rt: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  ruby: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  s: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  samp: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  script: {
    attributes: Omit<
      FluidProps<ScriptHTMLAttributes<HTMLScriptElement>>,
      keyof GlobalAttributes<HTMLScriptElement>
    >
    element: HTMLScriptElement
  }
  section: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  select: {
    attributes: Omit<
      FluidProps<SelectHTMLAttributes<HTMLSelectElement>>,
      keyof GlobalAttributes<HTMLSelectElement>
    >
    element: HTMLSelectElement
  }
  slot: {
    attributes: Omit<
      FluidProps<SlotHTMLAttributes<HTMLSlotElement>>,
      keyof GlobalAttributes<HTMLSlotElement>
    >
    element: HTMLSlotElement
  }
  small: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  source: {
    attributes: Omit<
      FluidProps<SourceHTMLAttributes<HTMLSourceElement>>,
      keyof GlobalAttributes<HTMLSourceElement>
    >
    element: HTMLSourceElement
  }
  span: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLSpanElement>>,
      keyof GlobalAttributes<HTMLSpanElement>
    >
    element: HTMLSpanElement
  }
  strong: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  style: {
    attributes: Omit<
      FluidProps<StyleHTMLAttributes<HTMLStyleElement>>,
      keyof GlobalAttributes<HTMLStyleElement>
    >
    element: HTMLStyleElement
  }
  sub: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  summary: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  sup: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  table: {
    attributes: Omit<
      FluidProps<TableHTMLAttributes<HTMLTableElement>>,
      keyof GlobalAttributes<HTMLTableElement>
    >
    element: HTMLTableElement
  }
  tbody: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTableSectionElement>>,
      keyof GlobalAttributes<HTMLTableSectionElement>
    >
    element: HTMLTableSectionElement
  }
  td: {
    attributes: Omit<
      FluidProps<TdHTMLAttributes<HTMLTableCellElement>>,
      keyof GlobalAttributes<HTMLTableCellElement>
    >
    element: HTMLTableCellElement
  }
  template: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTemplateElement>>,
      keyof GlobalAttributes<HTMLTemplateElement>
    >
    element: HTMLTemplateElement
  }
  textarea: {
    attributes: Omit<
      FluidProps<TextareaHTMLAttributes<HTMLTextAreaElement>>,
      keyof GlobalAttributes<HTMLTextAreaElement>
    >
    element: HTMLTextAreaElement
  }
  tfoot: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTableSectionElement>>,
      keyof GlobalAttributes<HTMLTableSectionElement>
    >
    element: HTMLTableSectionElement
  }
  th: {
    attributes: Omit<
      FluidProps<ThHTMLAttributes<HTMLTableCellElement>>,
      keyof GlobalAttributes<HTMLTableCellElement>
    >
    element: HTMLTableCellElement
  }
  thead: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTableSectionElement>>,
      keyof GlobalAttributes<HTMLTableSectionElement>
    >
    element: HTMLTableSectionElement
  }
  time: {
    attributes: Omit<
      FluidProps<TimeHTMLAttributes<HTMLTimeElement>>,
      keyof GlobalAttributes<HTMLTimeElement>
    >
    element: HTMLTimeElement
  }
  title: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTitleElement>>,
      keyof GlobalAttributes<HTMLTitleElement>
    >
    element: HTMLTitleElement
  }
  tr: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLTableRowElement>>,
      keyof GlobalAttributes<HTMLTableRowElement>
    >
    element: HTMLTableRowElement
  }
  track: {
    attributes: Omit<
      FluidProps<TrackHTMLAttributes<HTMLTrackElement>>,
      keyof GlobalAttributes<HTMLTrackElement>
    >
    element: HTMLTrackElement
  }
  u: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  ul: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLUListElement>>,
      keyof GlobalAttributes<HTMLUListElement>
    >
    element: HTMLUListElement
  }
  var: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  video: {
    attributes: Omit<
      FluidProps<VideoHTMLAttributes<HTMLVideoElement>>,
      keyof GlobalAttributes<HTMLVideoElement>
    >
    element: HTMLVideoElement
  }
  wbr: {
    attributes: Omit<
      FluidProps<HTMLAttributes<HTMLElement>>,
      keyof GlobalAttributes<HTMLElement>
    >
    element: HTMLElement
  }
  webview: {
    attributes: Omit<
      FluidProps<WebViewHTMLAttributes<HTMLWebViewElement>>,
      keyof GlobalAttributes<HTMLWebViewElement>
    >
    element: HTMLWebViewElement
  }
}

export default HTMLElements
