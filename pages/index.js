import React from 'react'
import Link from 'next/link'
import { Box, Text, Heading } from 'axs'

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
    <Box is='section' px={[3, 4]}>
      <Heading fontSize={1} mb={[2, 3]}>
        Selected work
      </Heading>
      <Box p={[2, 3]} width={[1, 1 / 2, 1 / 3]} css={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.1)' }}>
        <Text is='p'>
          Hi
        </Text>
      </Box>
      <Box p={[2, 3]} width={[1, 1 / 2, 1 / 3]} css={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.1)' }}>
        <Text is='p'>
          Hi
        </Text>
      </Box>
    </Box>
  </DefaultLayout>
)
