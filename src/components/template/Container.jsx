import React from 'react'

const Container = ({children ,className}) => {
  return (
    <div className={ (className ? className : '')}>{children}</div>
  )
}

export default Container