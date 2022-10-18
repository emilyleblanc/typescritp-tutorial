
//input elements take 2 props. 
//1. value 2. handleChange function

import React from "react"

//to use a form element add both prop type (value, handler) to the tsx type
type InputProps = {
    value:string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value}: InputProps) {
//we can write the function here wit the event prop as an parameter. Then replace the onChange prop with the function name
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
}
  return (
    <input type='text' value={value} onChange={handleInputChange}/>
  )
}
