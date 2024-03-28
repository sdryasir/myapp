import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../redux/depositReducer';

function About() {

  const dispatch = useDispatch();
  const {persistedReducer} = useSelector(state=>state);


  const depositAmount=()=>{
    dispatch(deposit());
  }
  const withdrawAmount=()=>{
    dispatch(withdraw());
  }
  return (
    <div className='container'>
       <button onClick={depositAmount}>Deposit</button>
       <button onClick={withdrawAmount}>Withdraw</button>
       <h1>${persistedReducer.depositReducer.value}</h1>
    </div>
  )
}

export default About