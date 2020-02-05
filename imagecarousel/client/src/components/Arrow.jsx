import React from 'react';
import styled from 'styled-components';
import {RightArrow, LeftArrow, Button} from '../styles/ArrowStyle.jsx';

const Arrow = ({ direction, handleSubmit, showButtons }) => (

    <Button className = "arrow" onClick={handleSubmit} direction={direction} showButtons={showButtons}>
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </Button>

);


export default Arrow;
