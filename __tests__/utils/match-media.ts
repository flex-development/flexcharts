/**
 * @file Test Utilities - matchMedia
 * @module tests/utils/matchMedia
 */

/**
 * Creates a {@link window.matchMedia} stub.
 *
 * @see https://developer.mozilla.org/docs/Web/API/Window/matchMedia
 * @see https://developer.mozilla.org/docs/Web/API/MediaQueryList
 *
 * @param {Record<string, boolean>} [matches={}] - Media matches
 * @return {typeof window['matchMedia']} `window.matchMedia` stub
 */
const matchMedia = (
  matches: Record<string, boolean> = {}
): typeof window['matchMedia'] => {
  /**
   * Converts `media` into a {@link MediaQueryList}.
   *
   * @param {string} media - Media query to convert
   * @return {MediaQueryList} `query` as `MediaQueryList`
   */
  const match = (media: string): MediaQueryList => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(), // deprecated
    dispatchEvent: vi.fn(),
    matches: matches[media] ?? false,
    media: media,
    onchange: vi.fn(),
    removeEventListener: vi.fn(),
    removeListener: vi.fn() // deprecated
  })

  return vi.fn(match)
}

export default matchMedia
