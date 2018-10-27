import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import About from '../components/Discover/About'
import Section from '../components/General/Section'
import Quotes from '../components/Discover/Quotes'
import Product from '../components/Discover/Product'
import UnstoppableOranizations from '../components/Discover/UnstoppableOranizations'
import BlogPost from '../components/Discover/BlogPost'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const Discover = () => (
  <Page path="/discover">
    <HeroSection>
      <Box>
        <Container>
          <span></span>
        </Container>
        <Container>
          <h2>Take back your freedom to organize</h2>
          <h4>Discover the unparalleled power to organize. Whether you want to collaborate with your co-founder, open a non-profit, or just organize an online community, Aragon is there for you. </h4>
          <Button.Anchor className="hero-link" mode="strong" href="https://app.aragon.org" target="_blank">Try it out</Button.Anchor>
        </Container>
      </Box>
    </HeroSection>
    <About/>
    <Quotes/>
    <Product/>
    <UnstoppableOranizations/>
    <BlogPost/>
  </Page>
)

const HeroSection = styled(Section)`
  background-image: linear-gradient(290deg, #95bbce, #c5d0e6 46%, #e7e4f6);
  min-height: 550px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 100%;
  h2, h4 {
    text-align: left;
  }
`;

export default Discover
