import styled from 'styled-components'


const FeaturedBlogs = styled.figure`
  grid-area: ${props => props.main ? 'main':''};
  
  overflow:hidden;
  background-color: white;
  box-shadow: 0 6px 10px #16161636;
  border-radius: 1em;
  transition: box-shadow 0.3s ease-in;
  height: ${props => props.main ? '90%':'70%'};
  align-self:center;
  position:relative;

  &:hover{
    box-shadow: 0 12px 25px #16161650;
  }
  img{
    position:absolute;
    height:100%;
    width:100%;
    align-self:center;
    filter:grayscale(100%);
    top:0;
    left:0;
  }
  figcaption{
    position:absolute;
    padding:10px ;
    background:#ffffff;
    z-index:1;
    bottom:1em;
    right:0;
    width:80%;
    display:flex;
    flex-direction:column;
    
    h1{
      font-family: Montserrat;
      font-size: ${props => props.main ? '':'1.4em'};
      text-transform: capitalize;
      padding: 0 0 10px;
    }
    p{
      font-family:Poppins;
      font-size: ${props => props.main ? '':'0.8em'};
      padding: 5px 0;
    }
    button{
      align-self:flex-end;
      padding: 0.5em 2em;
      background: #161616;
      text-transform:uppercase;
      color:white;
      border:5px double;
      border-radius: 5px;
      transition: all 0.1s ease-in;
      :hover{
        cursor:pointer;
        color:black;
        background:white;
      }
    }
  }
`
export default FeaturedBlogs
