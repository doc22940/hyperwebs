import React from 'react'
import { Box, Heading, Color } from 'axs'

export default () => (
  <Box p={[3, 4]}>
    <Heading is='h1' css={{ position: 'relative', left: '-0.05em', letterSpacing: '-0.0125em' }}>
      Cole Peters
    </Heading>
    <Color is='h2' fontSize={4} color='slategrey' mt0 css={{ letterSpacing: '0.0125em' }}>
      Designer/developer
    </Color>
  </Box>
)
