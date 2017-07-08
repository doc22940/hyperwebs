import React from 'react'
import Link from 'next/link'
import { Box, Text, Heading } from 'axs'

import DefaultLayout from '../layouts/DefaultLayout'
import TopBar from '../components/TopBar'

export default () => (
  <DefaultLayout title='Home'>
    <TopBar />
    <Box pb={[32, 64]} px={[32, 64, null, 128]} css={{background: 'white'}}>
      <Text is='p' fontSize={['1rem', '1.25rem']} width={[1, 3 / 4, 2 / 3]}>
        Hello! I am a designer with nine years of experience working across branding, user interface and graphic design. For the past four years, I have specialised in designing and building engaging and performant design systems on the web.
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        I operate a remote freelance design practice out of London, England (in addition to being <a href='https://colepeters.com' style={{ fontWeight: 400 }}>a&nbsp;photographer</a>). Interested in working together? <Link to='/hire'>Get&nbsp;in&nbsp;touch</Link>.
      </Text>
    </Box>
    <Box is='section' px={[32, 64, null, 128]}>
      <Heading fontSize={2} mb={[2, 3]}>
        Case studies
      </Heading>
    </Box>
    <Box is='section' px={[32, 64, null, 128]}>
      <Heading fontSize={2} mb={[2, 3]}>
        Background
      </Heading>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        My professional career in design began in 2009 with a position as advertising director and designer for a national chain of photo-retail stores in Canada. For three years, I worked to refine the company’s brand identity and advertising campaigns (executing visual design, copywriting, and strategy). I was honoured to have Nikon Canada’s national advertising manager to refer to one of the campaigns I worked on as some of the best communication design she had ever seen.
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        In 2012, I co-founded <a href='http://burdocks.ca'>Burdocks</a>, a graphic and web design practice, with my friend and business partner <a href='http://robynchristine.ca'>Robyn</a>. Our first major project involved a complete brand identity redesign and the design and front-end development of a new website for the <a href='http://winnipegarchitecture.ca'>Winnipeg Architecture Foundation</a> (<Link to='/waf'>see case study here</Link>). Being involved in this project is to date one my proudest achievements.
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        I relocated to the UK in 2013 to pursue a job offer from a mobile app agency based in London. For the next year I learned all I could about mobile app design with a focus on iOS applications for enterprise customers. I worked closely with the agency’s developers to implement the user interface designs which I created in collaboration with the agency’s UX lead.
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        An opportunity to work in the burgeoning field of digital health caught my attention in 2014, which lead to me joining TrialReach (now <a href='https://antidote.me'>Antidote</a>) as senior designer at a pivotal time in the company’s history. My major responsibility was to redesign and then evolve the company’s brand identity and overall design language, tailoring it to the complex needs of its audience (comprising people with medical conditions as well as medical industry stakeholders). This was one of the most challenging and rewarding projects I’ve worked on (<Link to='/trialreach'>check out the case study</Link>).
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        While I have worked as designer-developer hybrid since 2012, I made the decision in 2016 to migrate to Antidote’s front-end engineering team with the goal of further evolving my development skills. Working with the best group of front-enders I’ve ever met, I was able to bring a designer’s sensibility to our development team and contribute to building a scalable, modular, and performant React-based design system which is now being adopted across the product range (<Link to='/antidote'>read more about this here</Link>.)
      </Text>
      <Text is='p' width={[1, 3 / 4, 2 / 3]}>
        In 2017 and beyond, I am looking to curve the arc of my career back towards a more design-centric context, bringing my experience in front-end development along for the ride. I consider myself a designer with a focus on functionality and performance, able to contribute both at the high levels of branding and design strategy as well as the more granular realm of design implementation.
      </Text>
    </Box>
  </DefaultLayout>
)
