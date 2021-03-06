import styled from "styled-components";
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdArrowRight,
} from "react-icons/md";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  /* Add:before styles */
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: auto;
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HomeH2 = styled.h2`
  color: #2ac1bc;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HomeP = styled.p`
  margin-top: 24px;
  color: whitesmoke;
  font-size: 24px;
  text-align: left;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HomeA = styled.a`
  font-size: 27;
  color: yellow;
`;
export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
