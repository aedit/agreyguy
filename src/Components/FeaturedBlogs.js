import React from 'react'
import styled from 'styled-components'


const FeaturedBlogs = styled.div`
  grid-area: ${props => props.main ? 'main':''};
  background-color: white;
  box-shadow: 0 6px 10px #16161624;
  border-radius: 1em;
  transition: box-shadow 0.3s ease-in;


  &:hover{
    box-shadow: 0 12px 25px #16161636;
  }
`
export default FeaturedBlogs
