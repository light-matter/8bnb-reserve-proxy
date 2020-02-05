import styled from 'styled-components';

export const DotsDiv1 = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 40px;
    white-space: nowrap;
`;

export const DotsDiv2 = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    width: 350px;
    height: 80%;
    contain: content;
`;

export const DotSVG = styled.svg`
    height: 12px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    min-width: 6px;
    width: 6px;
    fill: rgb(255, 255, 255);
    opacity: ${(props) => (props.currentIndex === props.dotIndex && (props.dotIndex === 0 || props.dotIndex === 1)) || (props.dotIndex === 2 && (props.currentIndex >= 2 && props.currentIndex < props.numberOfDots - 2)) || (props.dotIndex === 3 && props.currentIndex === props.numberOfDots - 2 ) || (props.dotIndex === 4 && props.currentIndex === props.numberOfDots - 1) ? 1 :
  0.5};
    border-radius: 50%;
`;

