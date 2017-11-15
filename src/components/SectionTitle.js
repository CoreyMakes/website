import React from 'react'
import styled from 'styled-components'

import { Text, theme } from '@aragon/ui'

const StyledSectionTitle = styled.div`
  h1 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }
`

const SectionTitle = ({ title }) => (
  <StyledSectionTitle>
    <Text heading={1} smallcaps color={theme.accent}>
      {title}
    </Text>
  </StyledSectionTitle>
)

export default SectionTitle
