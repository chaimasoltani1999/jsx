import React from 'react'
import product from './product'

function Image() {
  return (
    <div>
      <img style={{height:250,width:250}} src={product.image}></img></div>
  )
}

export default Image