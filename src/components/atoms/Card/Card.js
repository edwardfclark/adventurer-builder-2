import React from 'react'

const Card = (props) => {
  const { className, type } = props

  return <div className={className || `card${type !== undefined ? `-${type}` : ''}`} {...props} />
}

export default Card
