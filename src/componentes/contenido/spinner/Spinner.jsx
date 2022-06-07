import React from 'react'
import spinnerStyle from './spinner.scss'

export const Spinner = () => {
  return (
    <div className='spinnerContainer'>
        <div className="lds-hourglass"></div>
    </div>
  )
}
