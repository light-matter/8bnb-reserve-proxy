import React, {Component} from 'react';
import styled from 'styled-components';
import SimilarHome from './SimilarHome.jsx';
import TextInfo from './TextInfo.jsx'
import OuterArrow from './OuterArrow.jsx';
import Modal from './Modal.jsx';
import {RowDiv, ContainerDiv, OuterRightArrowDiv, OuterLeftArrowDiv} from '../styles/SimilarHomesStyle.jsx';

class SimilarHomes extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentFirstIndex: 0,
      currentLastIndex: 2,
      showLeftButton: false,
      showRightButton: true,
      showModal: false,
      heart: false
    }
    this.previousList = this.previousList.bind(this);
    this.nextList = this.nextList.bind(this);
    this.modalClick = this.modalClick.bind(this);
    this.heartClick = this.heartClick.bind(this);
  }

  modalClick() {
    event.preventDefault();
    this.setState({showModal: !this.state.showModal});
  }

  heartClick() {
    event.preventDefault();
    this.setState({heart:!this.state.heart});
  }

  previousList() {
    if(this.state.currentFirstIndex > 0) {
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex - 1,
        currentLastIndex: prevState.currentLastIndex - 1,
        showLeftButton: prevState.currentFirstIndex - 1 > 0,
        showRightButton: prevState.currentLastIndex - 1 < this.props.similarHomes.length - 1
      }));
    }
  }

  nextList() {
    if(this.state.currentLastIndex < this.props.similarHomes.length - 1){
      this.setState(prevState => ({
        currentFirstIndex: prevState.currentFirstIndex + 1,
        currentLastIndex: prevState.currentLastIndex + 1,
        showLeftButton: prevState.currentFirstIndex + 1 > 0,
        showRightButton: prevState.currentLastIndex + 1 < this.props.similarHomes.length -1
      })
    )
  }
  }

  render() {
    return(
      <div>

      <RowDiv>

      <OuterLeftArrowDiv>

      <OuterArrow direction = 'left' handleSubmit = {this.previousList} showButtons = {this.state.showLeftButton}/>

      </OuterLeftArrowDiv>

      {this.props.similarHomes.slice(this.state.currentFirstIndex,this.state.currentLastIndex+1).map((similarHome, i) =>
        <ContainerDiv key={i}>
        <SimilarHome images = {similarHome.images} modalClick = {this.modalClick} heartClick = {this.heartClick} heart = {this.state.heart}/>
        <TextInfo similarHome={similarHome}/>
        </ContainerDiv>
      )}

        <OuterRightArrowDiv>

        <OuterArrow direction = 'right' handleSubmit = {this.nextList} showButtons = {this.state.showRightButton}/>

        </OuterRightArrowDiv>

      </RowDiv>

      <Modal showModal = {this.state.showModal} modalClick = {this.modalClick} heartClick = {this.heartClick}
      heart = {this.state.heart}/>

      </div>

    )
  }
}





export default SimilarHomes;
