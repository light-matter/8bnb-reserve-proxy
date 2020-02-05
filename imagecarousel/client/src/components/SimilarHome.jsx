import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';
import Heart from './Heart.jsx';
import Dots from './Dots.jsx';
import {ImgDiv, ImgTopDiv, ImgBottomDiv} from '../styles/SimilarHomeStyle.jsx';

class SimilarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIdx: 0,
      showButtons: false
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

  }

  previousSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIdx + 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  handleToggle() {
    event.preventDefault();
    this.setState({showButtons: !this.state.showButtons});
  }

  render() {
    return (

      <ImgDiv image={this.props.images[this.state.currentImgIdx]} onMouseEnter={this.handleToggle} onMouseLeave = {this.handleToggle}>

      <ImgTopDiv>

      <Heart name = 'firstHeart' showButtons = {this.state.showButtons} handleSubmit={this.props.modalClick} heartStatus={this.props.heart}/>

      <Arrow direction="left" handleSubmit={this.previousSlide} showButtons = {this.state.showButtons} />

      <Arrow direction="right" handleSubmit={this.nextSlide} showButtons = {this.state.showButtons} />

      </ImgTopDiv>

      <ImgBottomDiv>

      <Dots numOfDots = {this.props.images.length} previousSlide = {this.previousSlide} nextSlide = {this.nextSlide} currentIndex = {this.state.currentImgIdx}/>

      </ImgBottomDiv>

      </ImgDiv>



    );
  }
}


export default SimilarHome;
