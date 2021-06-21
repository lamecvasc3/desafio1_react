import React, { useState } from 'react'
import Sum from './Sum'
import './App.css'

const App = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    const [newFirstValue, setNewFirstValue] = useState("");
    const [newSecondValue, setNewSecondValue] = useState("");

    const handleSubmit = (e) => {
        setFirstValue(newFirstValue);
        setSecondValue(newSecondValue);
        e.preventDefault();
    }

    const handleFirstNumberChange = (e) => {
        setNewFirstValue(e.target.value)
    }

    const handleSecondNumberChange = (e) => {
        setNewSecondValue(e.target.value)
    }

    return(
        <div className="app">
            <h2 className="title">{process.env.REACT_APP_TITLE}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <input placeholder="Digite um número" value={newFirstValue} type="number" onChange={handleFirstNumberChange}></input>
                    <input placeholder="Digite um número" value={newSecondValue} type="number" onChange={handleSecondNumberChange}></input>
                </div>
                <button type="submit">+</button>
            </form>
            <Sum firstInt={firstValue} secondInt={secondValue}/>
        </div>
    );
}

export default App