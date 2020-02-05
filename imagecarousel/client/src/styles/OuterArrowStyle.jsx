import styled from 'react-components';

export const RightArrow = styled.svg`
  height: 22px;
  width: 22px;
  fill: rgb(118, 118, 118);
  fill-rule: evenodd;
`;

export const LeftArrow = styled.svg`
    height: 22px;
    width: 22px;
    fill: rgb(118, 118, 118);
    fill-rule: evenodd;
`;

export const Button = styled.button`
  visibility: ${(props) => (props.showButtons ? 'visible' : 'hidden')};
  transform: translate(0px, 115px);
  border:none;
`;

//cant read??