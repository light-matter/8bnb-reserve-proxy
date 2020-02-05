import React, {Component} from 'react';
import {DotsDiv1, DotsDiv2, DotSVG} from '../styles/DotsStyle.jsx';


const Dots = ({currentIndex,numOfDots}) => {
    const dotArray = [];

    for(var i = 0; i <numOfDots; i++) {
      dotArray.push(<DotSVG key = {i} dotIndex = {i} currentIndex = {currentIndex} numberOfDots = {numOfDots} viewBox="0 0 100 100" >
           <circle cx="50" cy="50" r="50"/>
        </DotSVG>)
    }

    return(
      <DotsDiv1>
      <DotsDiv2>

      {dotArray.slice(0, 5)}

      </DotsDiv2>
      </DotsDiv1>
    )
};

export default Dots;