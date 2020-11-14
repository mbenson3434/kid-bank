import React, { useState } from 'react';
import styled from 'styled-components';

//Add a div that displays a kid, total $ in bank and lets them add $1 or subtract $1 by clicking on the pictures of the one dollar bill. 
const StyledKid = styled.div `
   
    display: flex;
    margin: 2rem;
    border-radius: 10px;
    font-size: 2rem;
    background-color: #FABC2A;

    :hover {
        background-color: #FAC64C;
    }

    .kid-name {
        
        width: 68%;
    }
    .kid-balance {
        
        display: flex;
        justify-content: space-around;
        width: 30%;
    }

    .kid-balance button {
        height: 3rem;
        width: 3rem;
        border-radius: 10px;
        font-size: 2rem;
        border: none;
        align-self: center; 
        background-color: #FAC64C;
    }

    .kid-balance button:hover {
        background-color: #FABC2A;
    }

    
`
const Kid = ({ kid, kidList, setKidList }) => {
   const [balance, setBalance] = useState(0);

    const add = () => {
       setBalance(balance + 1);
       
    }

    const subtract = () => {
        setBalance(balance - 1);
    }

    return (
        <StyledKid>
            <div className="kid-name">
                <h3>{kid.name}</h3>   
            </div>  
            <div className="kid-balance">
                <button onClick={add}>+</button>
                <h3>${balance}</h3>
                <button onClick={subtract}>-</button>
            </div>
        </StyledKid>
    )
};

export default Kid;