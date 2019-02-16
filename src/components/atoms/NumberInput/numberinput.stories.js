import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import NumberInput from './NumberInput'

storiesOf('NumberInput', module)
  .add('default', () => (
    <NumberInput />
  )).add('Min 1/Max 20', () => (
    <NumberInput min="1" max="20" />
  )).add('Value is NaN', () => (
    <NumberInput value="thirty" />
  ))
  .add('Value is number', () => (
    <NumberInput value="10" />
  ))
