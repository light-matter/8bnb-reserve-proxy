import styled from 'styled-components';

export const HeartSVG = styled.svg`
  position: absolute;
  fill: ${props => props.heartStatus ? 'red' : 'none'};
  fill-opacity: 50;
  stroke-width: 2;
  top: 3px;
  right: 4px;
  width: 15px;
  stroke: ${props => props.heartStatus ? 'none' : 'black'};
`
export const HeartButton = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  top: -90px;
  right: 0px;
  border-radius: 50%;
  padding: 7px 12px;
  margin: 100px 10px;
  opacity: 0.8;
  display: ${(props) => props.showButtons ? 'block' : 'none'};
`