import React from 'react'

const Button = (props) => {
    return (
       
            <button className={props.style} onClick={props.calc}>{props.value}</button>
       
    )
}

export default Button
