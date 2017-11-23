import React from 'react'
import SideBySide from '../../SideBySide/SideBySide'

import vote from './assets/vote.png'
import payment from './assets/payment.png'

const Vote = () => (
  <SideBySide
    items={[
      {
        subtitle: 'Decision-making by voting',
        textContent: `
          Use voting for more effective results.
          Votes are a secure, transparent and unforgeable way to come to a
          decision on major issues
        `,
        image: vote,
      },
      {
        subtitle: 'Instant payments in a few clicks',
        textContent: `
          Payments are delivered in under a minute to anywhere in the world.
          Adding an employee to your payroll is as easy as creating a new
          recurring payment (TODO)
        `,
        image: payment,
      },
    ]}
  />
)

export default Vote
