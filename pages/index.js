import React from 'react'
import Link from 'next/link'
import { Box, Text } from 'axs'

import DefaultLayout from '../layouts/DefaultLayout'
import TopBar from '../components/TopBar'

export default () => (
  <DefaultLayout title='Home'>
    <TopBar />
    <Box p={[3, 4]} css={{background: 'linear-gradient(180deg, whitesmoke, white)'}}>
      <Text is='p' fontSize={['1rem', '1.25rem']} width={[1, 3 / 4, 2 / 3]}>
        Hello! I am a designer with nine years of experience working across branding, user interface and graphic design. For the past four years, I have specialised in designing and building engaging and performant design systems on the web.
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        I operate a remote freelance design practice out of London, England (in addition to being <a href='https://colepeters.com' style={{ fontWeight: 400 }}>a&nbsp;photographer</a>). Interested in working together? <Link to='/hire'>Get&nbsp;in&nbsp;touch</Link>.
      </Text>
    </Box>
  </DefaultLayout>
)
