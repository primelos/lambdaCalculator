import React from "react";
import styled from 'styled-components';

const Button = styled.button`
background-color: #225c9d;

    `


const SpecialButton = (props) => {
  return (
    <>
     <Button className='button'>
      {props.j}
      </Button>
      </>
  );
};
export default SpecialButton;

//  {/* Display a button element rendering the data being passed down from the parent container on props */}