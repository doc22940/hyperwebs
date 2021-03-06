import React from 'react'
import { Box, Heading, Color } from 'axs'

export default () => (
  <Box
    py={[64, 128]}
    px={[32, 64, null, 128]}
    css={{ position: 'relative' }}>
    <Heading is='h1' css={{ position: 'relative', left: '-0.05em', letterSpacing: '-0.0125em' }}>
      Cole Peters
    </Heading>
    <Heading is='h2' fontSize={4} css={{ letterSpacing: '0.0125em' }}>
      <Color is='span' color='slategray'>
        Designer
      </Color>
    </Heading>
  </Box>
)
