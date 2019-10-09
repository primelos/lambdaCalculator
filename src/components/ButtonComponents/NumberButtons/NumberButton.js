import React from "react";
import styled from 'styled-components'

const Button = styled.button`
background-color: #194379;

`


const NumberButton = (props) => {
  return (
    <>
     <Button className='button zero' onClick={()=> props.i }>
       {props.i}
     </Button>
     
    </>
  );
};
export default NumberButton;
//  {/* Display a button element rendering the data being passed down from the parent container on props */}