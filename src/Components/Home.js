import React from 'react'
import styled from 'styled-components'
import FeaturedBlogs from './FeaturedBlogs'

const Quote = styled.div`
  text-align:center;
  font-family: Montserrat;
  font-size:1.8em;
  padding:1em;
`

const HomeContent = styled.div`
  display:grid;
  grid-template-areas: 'main .' 'main .';
  flex:1;
  grid-gap:20px;
`

const Home = () => {
  return (
    <>
      <Quote>
        "Write Something.<br/>
        Either Created by your Thoughts,<br/>
        or by your Deeds!"
      </Quote>
      <HomeContent>
        <FeaturedBlogs main>Blog</FeaturedBlogs>
        <FeaturedBlogs></FeaturedBlogs>
        <FeaturedBlogs></FeaturedBlogs>
      </HomeContent>
    </>
  )
}

export default Home
