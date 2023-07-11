import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { increaseNum, decreaseNum } from './AllState/Counter'



const Something = () => {

  const dispatch = useDispatch()
  const {myNum} = useSelector((state)=> state.myCount)
  const increaseNumber = ()=>{
    dispatch(increaseNum())
  }
  const decreaseNumber = ()=>{
    dispatch(decreaseNum())
  }


  return (
    <div>
        <h1 className='text-danger'>This is the home page</h1>

        <h2>Number gotten from store = {myNum}</h2>

        <button className='btn btn-light' onClick={increaseNumber}>Increase</button>
        <button className='btn btn-danger' onClick={decreaseNumber}>Decrease</button>
    </div>
  )
}

export default Something
