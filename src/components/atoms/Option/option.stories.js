import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from '../Select/Select'

import Option from './Option'

storiesOf('Option', module)
  .add('default', () => (
    <Select>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
    </Select>
  ))
