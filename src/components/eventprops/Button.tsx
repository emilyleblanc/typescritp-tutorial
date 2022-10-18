import React from "react";
//event props need to be passed the type of react event that occurs. In this we are passing a click event.
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = ({handleClick}: ButtonProps) => {
    return <button onClick={(event)=> handleClick(event, 88)}>click</button>
}

export default Button;
