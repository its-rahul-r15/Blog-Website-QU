import React from 'react'
import Navbar from '../components/Navbar'
import Headers from '../components/Header'
import BlogList from '../components/BlogList'
import Newslatter from '../components/Newslatter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Headers />
        <BlogList />
       <Newslatter />
       <Footer />
    </>
  )
}

export default Home