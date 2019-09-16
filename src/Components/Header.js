import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  height: 20%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:center; */
  padding: 5px;
`
const HeroLogo = styled.h1`
  padding: 0 5px;
  height: 60%;
  font-family:  Montserrat;
  text-align:center;
`

const HeaderMenu = styled.div`
  display:flex;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 8px 10px #33333324; 
  
`

const MenuItem = styled.div`

  cursor: pointer;
  padding: 0.6em 2.5em;
  border-radius: 1em;
  transition: background 0.1s ease-in;
  flex:1;
  text-align:center;
  background: ${(props)=>props.active ? '#f0f0f0' : ''};
  opacity: ${(props)=>props.active ? 1 : 0.6};
  text-decoration: ${(props)=>props.active ? 'underline' : 'none'};
  &:hover{
  background:#f0f0f0;

}
`

function Header() {
  return (
    <HeaderStyle>
      <HeroLogo>A grey Guy</HeroLogo>
      <HeaderMenu>
        <MenuItem active>Home</MenuItem>
        <MenuItem>Posts</MenuItem>
        <MenuItem>About</MenuItem>
      </HeaderMenu>

    </HeaderStyle>
  )
}

export default Header