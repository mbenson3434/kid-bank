import React from 'react'
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import logo from '../goat.png';

const StyledHeader = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
font-family: 'Nunito', sans-serif;
text-transform: uppercase;
letter-spacing: 0.225em;
background-color: #F05365;
color: #B1E5F2;

nav {
    display: flex;
    justify-content: space-around;
    margin: 0;
}
nav a {
    text-decoration: none;
    margin: 1rem;
    font-size: .75rem;
    background-color: #B1E5F2;
    color: black;
    padding: 1rem;
    font-weight: bold;
    border-radius: 10px;
    width: 50px;
}
.logo {
    display: flex;
    align-items: center;
}
h2 {
    font-size: 3rem;
    font-family: 'Nunito', sans-serif;
}
nav a:hover {
    background-color: #FABC2A;
}
img {
    height: 75px;
}
@media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
}
`

export default function Header() {

    const { push } = useHistory();

    return (
        <StyledHeader>
          <div className='logo'>
            <div>
              <img src={logo}/>  
            </div>  
            <div>
              <h2>Kid Bank</h2>  
            </div>
          </div>
          <nav>
            <Link className='login' to='/'>Home</Link> 
            <Link onClick={()=>{push("/add-kid")}} className='register' to='/add-kid'>Add</Link>
          </nav>
        </StyledHeader>
    )
}