import React from 'react'
import { styled, styledCss as css } from '@aragon/ui'
import {
  Section,
  Text,
  theme,
  breakpoint,
  BreakPoint,
  Button,
} from '@aragon/ui'
import AppScreenshot from '../../AppScreenshot/AppScreenshot'
import background from './assets/background.svg'
import appScreen from './assets/app-screen.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledContainer = styled(Section)`
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  padding: 40px 15px 10%;
  ${medium('padding: 120px 15px 0')};
  ${large('padding: 160px 15px 0')};

  .title {
    color: ${theme.textPrimary};
    margin-bottom: 15px;
    font-size: 58px;
    line-height: 1.2;
    ${medium(`
      margin-bottom: 25px;
      font-size: 58px
      line-height: 1.5;
    `)};
  }
  .subtitle {
    position: relative;
    z-index: 2;
    font-size: 20px;
    ${medium('font-size: 24px')};
    color: ${theme.textSecondary};
  }
  .app-wrapper {
    display: flex;
    align-items: center;
  }
  .app-img {
    margin-left: 50%;
    transform: translateX(-50%);
    flex-shrink: 0;
    margin-top: 40px;
    ${medium('margin-top: 75px')};
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
  }
  .button:first-child {
    margin-right: 10px;
  }
`

const UnstoppableOrganizations = () => (
  <StyledContainer>
    <div>
      <h1 className="title">Unstoppable organizations</h1>
      <Text size="large" className="subtitle">
        Create value without borders or intermediaries
      </Text>
      <BreakPoint to="medium">
        <div className="buttons">
          <div className="button">
            <Button mode="outline">Web version</Button>
          </div>
          <div className="button">
            <Button mode="strong">Aragon Core</Button>
          </div>
        </div>
      </BreakPoint>
      <div className="app-wrapper">
        <AppScreenshot className="app-img" />
      </div>
    </div>
  </StyledContainer>
)

export default UnstoppableOrganizations
