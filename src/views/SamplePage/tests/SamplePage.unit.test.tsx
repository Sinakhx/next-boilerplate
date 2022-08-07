// tests for SamplePage go here
import React from 'react'

import { Home } from '@/pages/index'
import { mount } from '@cypress/react'

it('renders link', () => {
  mount(<Home locale='en' />)
  cy.get('a').contains('Learn React')
})
