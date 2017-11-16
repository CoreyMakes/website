import React from 'react'
import styled from 'styled-components'
import { Section, Text, theme } from '@aragon/ui'

import permission from './assets/permission.png'
import settings from './assets/settings.svg'
import path from './assets/path.svg'
import code from './assets/code.svg'

const Main = styled(Section)`
  padding-top: 128px;
  padding-bottom: 128px;
  background-image: linear-gradient(39deg, #0b0b0a, #464f51);
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 50px;
  }

  img {
    max-width: 750px;
    margin-bottom: -5px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }
  .columns > div {
    width: 33%;
    padding: 0 25px;
    text-align: left;
  }
  .columns > div:nth-child(1) {
    padding-left: 0;
  }
  .columns > div:nth-child(3) {
    padding-right: 0;
  }

  p {
    font-size: 16px;
    color: ${theme.textSecondary};
    margin-top: 25px;
  }
`

const Customize = () => (
  <Main>
    <div>
      <Text heading="1" color={theme.gradientText}>Extensible to the infinite and beyond. Powered by AragonOS</Text>
    </div>
    <img src={permission} alt="" />
    <div className="columns">
      <div>
        <img src={settings} alt="" />
        <p>Aragon organizations are fully customizable, powered by AragonOS.</p>
      </div>
      <div>
        <img src={path} alt="" />
        <p>You can modify all the permissions to trigger different actions.</p>
      </div>
      <div>
        <img src={code} alt="" />
        <p>And if you are a developer, you can even create apps that run on your organization.</p>
      </div>
    </div>
  </Main>
)

export default Customize
