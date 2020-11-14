import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// Need a form to add a kid to the main page

// --- Styled Components ---
const StyledForm = styled.div `

input {
    padding: 1rem;
    font-size: 2rem;
    text-align: left;
    margin-top: 4rem;
    border: none;
}

button {
  padding: 1rem; 
  font-size: 2rem; 
  background-color: #FABC2A;
  border: none;
}

button:active {
    outline: none;
}

button:hover {
    background-color: #FAC64C;
}



` // --- Styled Components ---
const initialValues = {
        name: '',
        balance: 0
    }
    
const AddKid = ({ kidList, setKidList }) => {
    
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            })
    }

    const submit = (e) => {
        e.preventDefault();
        setKidList([
            ...kidList,
            formValues
        ])
        console.log(kidList);
        localStorage.setItem("kidList", JSON.stringify(kidList));
        push("/");
    }

    return (
        <StyledForm>
            <form onSubmit={submit}>
                <input 
                type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChanges}
                />
                <button>Add</button>
            </form>
        </StyledForm>
    )
}

export default AddKid;