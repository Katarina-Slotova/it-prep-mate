import React from 'react'
import TwoColumnLayout from '../TwoColumnLayout'
import styles from './Intro.module.css'

function Intro({children}) {
  return (
    <div>
      <TwoColumnLayout>
        {children}
      </TwoColumnLayout>
    </div>
  )
}

export default Intro
