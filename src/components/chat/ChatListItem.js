import React from "react";
import styled from "styled-components";
import Typo from "../commons/Typo";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 1rem 0;
`;
const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 40%;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.ai ? props.ai : "start")};
`;

const ChatListItem = ({ image, sender, message, time, alert }) => (
  <Container>
    <ImageWrapper>
      <img src={image} alt="" />
    </ImageWrapper>
    <TextWrapper>
      <Typo>{sender}</Typo>
      <Typo fs="0.8rem" c="grey">
        {message}
      </Typo>
    </TextWrapper>
    <TextWrapper ai="end">
      <Typo fs="0.7rem">{time}</Typo>
      <Typo fs="0.7rem" bc="red" br="50%" c="white" w="0.9rem" ta="center">
        {alert}
      </Typo>
    </TextWrapper>
  </Container>
);

export default ChatListItem;
