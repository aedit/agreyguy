import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderStyle = styled.header`
	height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items:center; */
	padding: 5px;
`
const HeroLogo = styled.h1`
	padding: 0 5px;
	height: 60%;
	font-family: Montserrat;
	text-align: center;
`

const HeaderMenu = styled.div`
	display: flex;
	background: #fff;
	border-radius: 1em;
	box-shadow: 0 8px 10px #33333324;
`

const MenuItem = styled(NavLink)`
	cursor: pointer;
	padding: 0.6em 2.5em;
	border-radius: 1em;
	transition: background 0.1s ease-in;
	flex: 1;
	text-align: center;
	font-weight: bolder;
	letter-spacing: 1px;
	color: #828282;
	background: ${props => (props.active ? '#f0f0f0' : '')};
	opacity: ${props => (props.active ? 1 : 0.6)};
	text-decoration: ${props => (props.active ? 'underline' : 'none')};
	&.current,
	&:hover {
		background: #161616;
		color: #d2d2d2;
		opacity: 0.6;
	}
	&.current {
		opacity: 1;
	}
	@media screen and (max-width: 390px) {
		padding: 0.6em 2em;
	}
`

function Header() {
	return (
		<HeaderStyle>
			<HeroLogo>A Grey Guy</HeroLogo>
			<HeaderMenu>
				<MenuItem activeClassName='current' exact to='/'>
					Home
				</MenuItem>
				<MenuItem activeClassName='current' to='/posts'>
					Posts
				</MenuItem>
				<MenuItem activeClassName='current' to='/about'>
					About
				</MenuItem>
			</HeaderMenu>
		</HeaderStyle>
	)
}

export default Header
