import React, { useEffect } from 'react'
import Main from '../components/Main'
import { useSelector } from 'react-redux';

function Home() {
  const {persistedReducer} = useSelector(state=>state);

  return (
    <div>
        <Main/>
        {persistedReducer.depositReducer.value}
    </div>
  )
}

export default Home
