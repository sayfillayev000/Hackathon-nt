/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Container = ({children ,className}) => {
  return (
    <div className={'container' (className ? ' '+className : '')}>{children}</div>
  )
}

export default Container