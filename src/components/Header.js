import React from 'react'
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';


const StyledHeader = styled.div `
display: flex;
justify-content: space-around;
align-items: baseline;
font-family: "Open Sans", Helvetica, sans-serif;
text-transform: uppercase;
letter-spacing: 0.225em;
background-color: #F05365;
color: #FFFFFF;

nav {
    display: flex;
    justify-content: space-around;
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
h2 {
    font-weight: 800;
}
nav a:hover {
    background-color: #FABC2A;
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
          <h2>Kid Bank</h2>
          <nav>
            <Link className='login' to='/'>Home</Link> 
            <Link onClick={()=>{push("/add-kid")}} className='register' to='/add-kid'>Add</Link>
          </nav>
        </StyledHeader>
    )
}