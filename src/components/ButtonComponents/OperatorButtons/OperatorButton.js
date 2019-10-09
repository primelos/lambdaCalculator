import React from "react";
import styled from 'styled-components'

const Button = styled.button`
background-color: #247292;

`

const OperatorButton = (props) => {
  return (
    <>
      <Button className='button'>
        {props.k.char}
      </Button>
    </>
  );
};
export default OperatorButton;
//  {/* Display a button element rendering the data being passed down from the parent container on props */}