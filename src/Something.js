import React from 'react'
import Button from './Button'

const Something = () => {
  return (
    <div>
        <div className='d-flex'>

        <Button/> <Button/>
        </div>
        <h1 className='text-danger'>This is a reusable component</h1>
    </div>
  )
}

export default Something
