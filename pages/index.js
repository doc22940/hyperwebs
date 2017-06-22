import React from 'react'
import Link from 'next/link'
import { Box, Text } from 'axs'

import DefaultLayout from '../layouts/DefaultLayout'
import TopBar from '../components/TopBar'

export default () => (
  <DefaultLayout title='Home'>
    <TopBar />
    <Box px={[3, 4]} py={[3, 4]} css={{background: 'linear-gradient(180deg, whitesmoke, white)'}}>
      <Text is='p' fontSize='1.125rem' width={[1, 3 / 4, 2 / 3]}>
        Hello! I am a designer with nine years of experience working across branding,  the web, user interface and print design. For the past four years, I have specialised in designing and building engaging and performant web design systems.
      </Text>
      <Text is='p' fontSize='1.125rem' width={[1, 3 / 4, 2 / 3]}>
        I operate a remote freelance practice out of London, England. Interested in working together? <Link to='/hire'>Check my availability and get in touch</Link>.
      </Text>
    </Box>
  </DefaultLayout>
)
