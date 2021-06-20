import React from 'react'
import './Sum.css'

const Sum = (props) => {
    var result = parseInt(props.firstInt) + parseInt(props.secondInt)

    return (
        <p className="result">Result: {!!result && result}</p>
    );
}

export default Sum