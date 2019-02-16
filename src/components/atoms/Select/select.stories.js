import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Select from './Select'

storiesOf('Select', module)
  .add('default', () => (
    <Select />
  )).add('options', () => (
    <Select>
      <option value="1">Option One</option>
      <option value="3">Option Two</option>
      <option value="3">Option Three</option>
    </Select>
  ))
