// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HomePage } from 'components'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf('HomePage', module)
  .add('default', () => (
    <HomePage />
  ))
