import React from 'react'
import styled from 'styled-components'
import { IllustratedSection, themeDark } from '@aragon/ui'

import illustration from './assets/illustration.svg'
import background from './assets/background.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(IllustratedSection)`
  margin-top: -500px;
  padding-top: 235px;
  padding-bottom: 140px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
`

const Disintermediating = () => (
  <Wrapper>
    <Main>
      <Title>
        <h1>Disintermediating business and transactions between humans</h1>
      </Title>
      <Subtitle dark>
        <p>It’s the first step towards a more fair, efficient world.</p>
      </Subtitle>
      <Emphasis dark>
        <p>
          We are building Aragon because we believe decentralized organizations
          can solve the world’s worst problems.
        </p>
      </Emphasis>
      <Content dark>
        <p>
          Aragon lets you manage entire organizations using the blockchain. This
          makes Aragon organizations more efficient than their traditional
          counterparties. By making it possible for everyone in the world to
          organize, we are enabling the borderless, permissionless creation of
          value.
        </p>
      </Content>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default Disintermediating
