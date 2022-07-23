/**
 * @file Test Setup - chai
 * @module tests/setup/globals/chai
 * @see https://chaijs.com
 */

import chai from 'chai'
import chaiDom from 'chai-dom'

// Configure chai
chai.config.includeStack = true
chai.config.truncateThreshold = 0

/**
 * Initialize plugins.
 *
 * @see https://github.com/nathanboktae/chai-dom#commonjs
 */
chai.use(chaiDom)
