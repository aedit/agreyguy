import styled from 'styled-components'

const FeaturedBlogs = styled.figure`
	grid-area: ${props => (props.main ? 'main' : '')};

	overflow: hidden;
	background-color: white;
	box-shadow: 0 6px 10px #16161636;
	border-radius: 1em;
	transition: box-shadow 0.3s ease-in;
	height: ${props => (props.main ? '90%' : '70%')};
	align-self: center;
	position: relative;

	&:hover {
		box-shadow: 0 12px 25px #16161650;
	}
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		align-self: center;
		filter: grayscale(100%);
		top: 0;
		left: 0;
	}
	figcaption {
		position: absolute;
		padding: 10px;
		background: #00000080;
		z-index: 1;
		bottom: 0;
		display: flex;
		flex-direction: column;

		h1 {
			font-family: Montserrat;
			font-size: ${props => (props.main ? '' : '1.4em')};
			text-transform: capitalize;
			padding: 0 0 10px;
			color: #fff;
		}
		p {
			font-family: Poppins;
			font-size: ${props => (props.main ? '' : '0.8em')};
			padding: 5px 0;
			color: #f1f1f1;
		}
		button {
			align-self: flex-end;
			padding: 0.5em 2em;
			background: #efefef;
			text-transform: uppercase;
			color: #161616;
			border: 5px double;
			border-radius: 5px;
			font-weight: 900;
			transition: all 0.1s ease-in;
			cursor: pointer;
			:hover {
				color: black;
				transform: scale(1.2);
			}
		}
	}
`
export default FeaturedBlogs
