import React from 'react'
import Head from 'next/head'
import { rehydrate } from 'glamor'
import PropTypes from 'prop-types'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const DefaultLayout = ({ title, children, ...props }) => (
  <div {...props}>
    <Head>
      <title>{ `${title}: Cole Peters, designer/developer` }</title>
    </Head>

    { children }
  </div>
)
DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default DefaultLayout
