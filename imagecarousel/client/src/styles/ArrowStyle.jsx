import styled from 'styled-components';

export const RightArrow = styled.i`
  transform: rotate(-45deg);
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`;

export const LeftArrow = styled.i`
    transform: rotate(135deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;

export const Button = styled.button`
  display: ${(props) => (props.showButtons ? 'block' : 'none')};
  position: absolute;
  width: 30px;
  height: 30px;
  top: 125px;
  border-radius: 50px;
  right: ${(props) => (props.direction === 'right' ? '10px' : '310px')};
`;