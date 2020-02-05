import React, {Component} from 'react';
import styled from 'styled-components';
import HeartModal from './HeartModal.jsx';

const BackgroundDiv = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: ${(props => props.showModal ? 'block' : 'none')};

`
const ModalDiv = styled.div`
  position: fixed;
  border-style: solid;
  background: white;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const Modal = ({showModal, modalClick, children, heartClick, heart}) => {

  return(

    <BackgroundDiv showModal = {showModal}>
      <ModalDiv>
        <h1> close </h1>
        <button onClick = {modalClick}> Close </button>
        <HeartModal handleSubmit={heartClick} heart={heart}/>
      </ModalDiv>
    </BackgroundDiv>

  );
};

export default Modal;