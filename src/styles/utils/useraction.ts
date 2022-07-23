/**
 * @file Style Utilities - action
 * @module styles/utils/action
 */

/**
 * User action pseudo class helper for `&:active`, `&:focus`, `&:focus-visible`,
 * and `&:hover`.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes
 *
 * @param {boolean} [self=false] - Include parent selector
 * @return {string} - String containing pseudo selectors
 */
const useraction = (self: boolean | 'self' = false): string => {
  return `${
    self !== false ? '&, ' : ''
  }&:active, &:focus, &:focus-visible, &:hover`
}

export default useraction
