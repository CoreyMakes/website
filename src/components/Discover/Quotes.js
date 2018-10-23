import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import Quote from '../General/Quote'

const Quotes = () => (
  <QuoteSection>
    <h2>A new era for organizations</h2>
    <Box>
      <Quote/>
      <Quote/>
    </Box>
  </QuoteSection>
);

const QuoteSection = styled(Section)`
  background-image: linear-gradient(289deg, #95bbce, #c5d0e6 46%, #e7e4f6);
`
const Box = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 250px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background: transparent;
  margin: 60px auto 30px auto;
`

export default Quotes
