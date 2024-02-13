import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home({products}) {

  return (
    <div>
        <Header/>
        <Main products={products}/>
        <Footer/>
    </div>
  )
}

export default Home
