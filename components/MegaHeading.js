import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'axs'

const MegaHeading = ({ children, css, ...props }) => (
  <Heading
    fontSize={2}
    css={{
      fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      textTransform: 'uppercase',
      ...css
    }}
  >
    { children }
  </Heading>
)

MegaHeading.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.object
}

export default MegaHeading
