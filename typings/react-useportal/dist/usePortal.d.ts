declare module 'react-useportal/dist/usePortal' {
  import type { ObjectPlain } from '@flex-development/tutils'
  import type {
    DOMAttributes,
    FC,
    MutableRefObject,
    ReactNode,
    RefObject,
    SyntheticEvent
  } from 'react'

  /**
   * Custom synthetic event.
   *
   * @see {@link SyntheticEvent}
   *
   * @template T - Target element type
   * @template E - Native event type
   */
  type CustomEvent<T = Element, E extends ObjectPlain = Event> = SyntheticEvent<
    T,
    E
  > & {
    event?: SyntheticEvent<T, E>
    portal: Reference<HTMLDivElement>
    targetEl: Reference<T>
  }

  /**
   * Handles a custom event.
   *
   * @see {@link CustomEvent}
   *
   * @template T - Target element type
   * @template E - Native event type
   *
   * @param {CustomEvent<T, E>} event - Custom event
   * @return {void} Nothing when complete
   */
  type CustomEventHandler<T = Element, E extends ObjectPlain = Event> = (
    event: CustomEvent<T, E>
  ) => void

  /**
   * Maps to native DOM attributes to custom event handlers.
   *
   * @template T - Target element type
   * @template E - Native event type
   *
   * @see {@link CustomEventHandler}
   * @see {@link DOMAttributes}
   */
  type CustomEventHandlers<T = Element, E extends ObjectPlain = Event> = {
    [K in keyof DOMAttributes<K>]?: CustomEventHandler<T, E>
  }

  /**
   * `Portal` component type.
   */
  type Portal = FC<PortalProps>

  /**
   * `Portal` component props.
   */
  interface PortalProps {
    /**
     * Content to display in portal.
     */
    children?: ReactNode
  }

  /**
   * Reference to an HTML element or target element.
   *
   * @template T - Element type
   *
   * @see https://reactjs.org/docs/refs-and-the-dom
   * @see https://reactjs.org/docs/hooks-reference.html#useref
   */
  type Reference<T = any> = MutableRefObject<T> | RefObject<T>

  /**
   * `usePortal` return type.
   *
   * @template T - Target element type
   * @template E - Native event type
   * @template H - Event handler names
   *
   * @extends {Pick<Required<CustomEventHandlers<T, E>>, H>}
   */
  interface UsePortal<
    T = Element,
    E extends ObjectPlain = Event,
    H extends keyof CustomEventHandlers = keyof CustomEventHandlers
  > extends Pick<Required<CustomEventHandlers<T, E>>, H> {
    /**
     * Portal component.
     */
    Portal: Portal

    /**
     * Object useful for spreading all HTML attributes onto the target element.
     */
    bind: Pick<Required<CustomEventHandlers<T, E>>, H> & { ref: Reference<T> }

    /**
     * Closes the portal.
     *
     * @param {SyntheticEvent<T, E>} [event] - Close event
     * @return {void} Nothing when complete
     */
    closePortal(event?: SyntheticEvent<T, E>): void

    /**
     * Portal open state.
     */
    isOpen: boolean

    /**
     * Opens the portal.
     *
     * @param {SyntheticEvent<T, E>} [event] - Open event
     * @return {void} Nothing when complete
     */
    openPortal(event?: SyntheticEvent<T, E>): void

    /**
     * Portal element reference.
     */
    portalRef: Reference<HTMLDivElement>

    /**
     * Target element reference.
     */
    ref: Reference<T>

    /**
     * Toggles the portal open state.
     *
     * @param {SyntheticEvent<T, E>} event - Open or close event
     * @return {void} Nothing when complete
     */
    togglePortal(event: SyntheticEvent<T, E>): void
  }

  /**
   * `usePortal` options.
   *
   * @template T - Target element type
   * @template E - Native event type
   *
   * @extends {CustomEventHandlers<T, E>}
   */
  interface UsePortalOptions<T = Element, E extends ObjectPlain = Event>
    extends CustomEventHandlers<T, E> {
    /**
     * DOM node to attach portal to.
     *
     * @default document.body
     */
    bindTo?: HTMLElement

    /**
     * Close the portal when the escape key is clicked.
     *
     * @default true
     */
    closeOnEsc?: boolean

    /**
     * Close the portal when not clicking within the portal.
     *
     * @default true
     */
    closeOnOutsideClick?: boolean

    /**
     * Default open state.
     *
     * @default false
     */
    isOpen?: boolean

    /**
     * Fires when the portal is closed.
     */
    onClose?: CustomEventHandler<T, E>

    /**
     * Fires when the portal is opened.
     */
    onOpen?: CustomEventHandler<T, E>

    /**
     * Fires when the portal is clicked.
     */
    onPortalClick?: CustomEventHandler<P, T>
  }

  /**
   * Error message thrown when target element reference is missing and an event
   * hasn't been passed to {@link UsePortal.openPortal} or
   * {@link UsePortal.togglePortal}.
   *
   * @const {string} errorMessage1
   */
  const errorMessage1: string =
    'You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).'

  /**
   * Use a [React Portal][1].
   *
   * [1]: https://reactjs.org/docs/portals.html
   *
   * @see https://github.com/alex-cory/react-useportal
   *
   * @template T - Target element type
   * @template E - Native event type
   * @template H - Event handler names
   *
   * @param {UsePortalOptions<T, E>} [options] - Hook options
   * @return {UsePortal<T, E, H>} Hook state
   */
  function usePortal<
    T = Element,
    E extends ObjectPlain = Event,
    H extends keyof CustomEventHandlers = keyof CustomEventHandlers
  >(options?: UsePortalOptions<T, E>): UsePortal<T, E, H>

  export {
    usePortal as default,
    errorMessage1,
    type CustomEvent,
    type CustomEventHandler,
    type CustomEventHandlers,
    type Portal,
    type PortalProps,
    type Reference,
    type UsePortal,
    type UsePortalOptions
  }
}
