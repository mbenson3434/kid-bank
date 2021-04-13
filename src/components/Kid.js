import React, { useState } from 'react';
import styled from 'styled-components';
// --- NEED to combine the state into one save both the balance and the name to local storage. 

const StyledKid = styled.div `
   
    display: flex;
    margin: 2rem;
    border-radius: 10px;
    font-size: 2rem;
    background-color: #FABC2A;
    justify-content: space-around;

    :hover {
        background-color: #FAC64C;
    }
    .kid-name {
        width: 62%;
    }
    .kid-balance {
        display: flex;
        justify-content: space-around;
    }
    .kid-balance button {
        height: 3rem;
        width: 3rem;
        border-radius: 10px;
        font-size: 2rem;
        border: none;
        align-self: center; 
        background-color: #FAC64C;
        margin: 0 1rem;
    }
    .kid-balance button:hover {
        background-color: #FABC2A;
    }
    @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    }
`
const Kid = ({ kid, kidList, setKidList }) => {
   const [balance, setBalance] = useState(0);

    const add = () => {
       setBalance(balance + 1);
       localStorage.setItem("balance", JSON.stringify(balance));
    }

    const subtract = () => {
        setBalance(balance - 1);
        localStorage.setItem("balance", JSON.stringify(balance));
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