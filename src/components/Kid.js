import React, { useState } from 'react';
import styled from 'styled-components';

//Add a div that displays a kid, total $ in bank and lets them add $1 or subtract $1 by clicking on the pictures of the one dollar bill. 
const StyledKid = styled.div `
   
    display: flex;
    flex-direction: column;
    margin: 2rem;
    border-radius: 10px;
    font-size: 2rem;
    background-color: #FABC2A;

    :hover {
        background-color: #FAC64C;
    }

    .not-selected {
        display: none;
    }
    .selected {
        padding: 3rem;
    }

    #kid {
        display: flex;
        justify-content: space-around;
    }
    .img {
        border-radius: 5px;
        width: 35%
    }
    
    
    
`
const Kid = ({ kid }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected);
    }

    return (
        <StyledKid onClick={toggleSelected}>
            <div id='kid'>
                <h3>{kid.name}</h3>
                <h3>{kid.balance}</h3>
            </div>
            <div id="add-money">
            {
               <div className={`${selected ? "selected" : 'not-selected'}`}>
                   <img className="img" src="/dollarbill.png" alt="" />
               </div>  
            }
            </div>
        </StyledKid>
    )
};

export default Kid;