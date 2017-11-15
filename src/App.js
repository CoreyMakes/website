import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import { BaseStyles, Header, PreFooter, Footer } from '@aragon/ui'
import styled from 'styled-components'

const menuItems = [
  ['/core', 'Core'],
  ['/about', 'About'],
  ['https://wiki.aragon.one', 'Wiki'],
  ['/faq', 'FAQs'],
  ['/join', 'Join us'],
]

const renderMenuItemLink = ({ url, children }) => (
  <Link to={url}>{children}</Link>
)

const Content = styled.div`
  min-height: 200px;
`

export default () => (
  <Router>
    <div>
      <BaseStyles />
      <Header menuItems={menuItems} renderMenuItemLink={renderMenuItemLink} />
      <Content>
        <Routes />
      </Content>
      <PreFooter />
      <Footer />
    </div>
  </Router>
)
