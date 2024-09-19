import React, { useState } from 'react'
import './OnOff.css'

export const OnOff = (props: {}) => {
	
	
	// 	const onClickHandler = (state) => { 
	// 		
	// 	}
  return (
    <div>
      <button className='on' onClick={onClickHandler} >on</button>
      <button className='off'>on</button>
      <div className='bulb'></div>
    </div>
  )
}
