import React from 'react'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const mudule1Content = (<p>Aragon is creating a whole stack of decentralized technologies that merge seamlessly inside people’s everyday. Aragon Nest, our grants program, helps bring it to reality.</p>);
const mudule2Content = (<p>Our community is always looking for individuals who want to help our fight for freedom. Check out how to contribute or check open positions.</p>);
const module3Content = (<p>The Aragon Project was born to disintermediate the creation and maintenance of organizations. Everyone should have equal access to governance and collaboration, no matter of their race, gender or age. The project was originally started by Luis Cuende and Jorge Izquierdo in November 2016.</p>)
const module4Content = (<p>We have a strong commitment to decentralize our own governance. The community will have control over the project’s future.</p>)

const About = () => (
  <Section>
    <Container>
      <LongCard textAlign="center" background="" title="Our history" content={module3Content} gradient="linear-gradient(292deg, #95bbce, #c5d0e6 46%, #e7e4f6)">
        <LongCardContainer>
          <DateBox className="yellow"/>
          <Label className="yellow">Aragon was born</Label>
          <DateBox className="green"/>
          <Label className="green">Aragon 0.1</Label>
          <DateBox className="green"/>
          <Label className="green">Aragon Network token sale</Label>
          <DateBox className="violet"/>
          <Label className="violet">Aragon 0.5 “The Architect”</Label>
          <DateBox className="violet"/>
          <Label className="violet">Aragon 0.6 and mainnet launch</Label>
        </LongCardContainer>
      </LongCard>
      <LongCard textAlign="right" color="#b4b5cc" image={'Project/assets/project3.png'} background="" colorWhite title="Governed by the community" content={module4Content} gradient="radial-gradient(circle at 99% 100%, #1c1d23, #2d2e39)"></LongCard>
      <Card imageUrl={'Project/assets/project1'} title="Nest, our grants program" content={mudule1Content}></Card>
      <Card imageUrl={'Project/assets/project2'} title={(<span>Join<br/> the fight</span>)} content={mudule2Content}></Card>
    </Container>
  </Section>
);

const LongCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -10%;
`

const Label = styled.div`
  font-family: 'GraphikLink', sans-serif;
  font-size: 13px;
  line-height: 0.97;
  text-align: center;
  color: #7f8198;
  border-radius: 25px;
  box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.05);
  margin: 60px 0 0 0;
  padding: 5px 15px;

  &.yellow {
    background-image: linear-gradient(96deg, #faf9f4, #f9f5de);
  }
  &.violet {
    background-color: #ebe4ff;
  }
  &.green {
    background-image: linear-gradient(205deg, #c4e5df, #d4efe6);
  }
`
const DateBox = styled.div`
  opacity: 0.31;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin: 60px 0 0 0;
  &.yellow {
    background-color: #f9f5de;
  }
  &.violet {
    background-color: #ebe4ff;
  }
  &.green {
    background-color: #d4efe6;
  }
`

const Container = styled.div`
  display: grid;
  ${medium('grid-template-columns: 50% 50%; grid-template-rows: 500px 500px 500px')};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default About
