import React from 'react'
import { styled } from '@aragon/ui'
import { Section, theme } from '@aragon/ui'

import SectionTitle from '../../SectionTitle.js'

import drawing0 from './assets/0.jpg'
import drawing1 from './assets/1.jpg'
import drawing2 from './assets/2.jpg'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;
  background: #fff;
  .title {
    margin-bottom: 25px;
    font-size: 36px;
    color: ${theme.textPrimary};
    text-align: center;
    padding: 0 10%;
  }
  .subtitle {
    margin-bottom: 15px;
    font-size: 24px;
    color: ${theme.textSecondary};
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > img {
    width: 33%;
  }
  .columns > p {
    width: 50%;
  }
  .columns > p:nth-child(1) {
    padding-right: 7.5px;
  }
  .columns > p:nth-child(2) {
    padding-left: 7.5px;
  }

  p {
    font-size: 18px;
    color: ${theme.textSecondary};
  }
`

const Vision = () => (
  <Main>
    <div>
      <SectionTitle title="Our vision" />
      <h1 className="title">Evolution of the Internet and Blockchain technology are changing the ways we interact with each other</h1>
      <div className="columns">
        <img src={drawing0} alt="" />
        <img src={drawing1} alt="" />
        <img src={drawing2} alt="" />
      </div>
      <div className="columns">
        <p>
          We believe that the progression of modern technology solutions such as the invention of the blockchain are changing the incentives for people to interact with each other. We are building the tools for the next generation of organizations to take advantage of this revolution
        </p>
        <p>
          Trying out new governance models has been a very risky endeavour during previous iterations of society. Now, for the first time in history, we can let a thounsand governance models emerge from the comfort of our laptops
        </p>
      </div>
    </div>
  </Main>
)

export default Vision
