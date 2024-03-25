import React, { useEffect } from 'react'
import Main from '../components/Main'
import { useSelector } from 'react-redux';

function Home() {
  const {depositReducer} = useSelector(state=>state);

  return (
    <div>
        <Main/>
        {depositReducer.value}
    </div>
  )
}

export default Home
