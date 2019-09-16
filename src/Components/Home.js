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
  grid-template-areas: '. main .';
  grid-template-columns: 1fr 1.5fr 1fr;
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
        <FeaturedBlogs main>
          <img src="https://unsplash.it/200"></img>
          <figcaption>
            <h1>Lorem ipsum</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut.</p>
            <button>read</button>
          </figcaption>
        </FeaturedBlogs>
        <FeaturedBlogs>
        <img src="https://unsplash.it/200"></img>
          <figcaption>
            <h1>Lorem ipsum</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut.</p>
            <button>read</button>
          </figcaption>
        </FeaturedBlogs>
        <FeaturedBlogs>
        <img src="https://unsplash.it/200"></img>
          <figcaption>
            <h1>Lorem ipsum</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut.</p>
            <button>read</button>
          </figcaption>
        </FeaturedBlogs>
      </HomeContent>
    </>
  )
}

export default Home
