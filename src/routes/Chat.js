import React from "react";
import styled from "styled-components";
import ChatList from "../components/chat/ChatList";
import Typo from "../components/commons/Typo";

import { IconContext } from "react-icons";
import { IoIosSearch } from "react-icons/io";
import { LuMusic4 } from "react-icons/lu";
import { RiChatNewLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const Container = styled.div`
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  .react-icons {
    vertical-align: middle;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: end;
`;
const Chat = () => (
  <Container>
    <Wrapper>
      <Typo fs="2rem" fw="600">
        Chats
      </Typo>
      <IconWrapper>
        <IconContext.Provider value={{ style: { padding: "0 0.5rem" } }}>
          <IoIosSearch size="1.5rem" />
          <RiChatNewLine size="1.5rem" />
          <LuMusic4 size="1.5rem" />
          <IoSettingsOutline size="1.5rem" />
        </IconContext.Provider>
      </IconWrapper>
    </Wrapper>
    <ChatList />
  </Container>
);

export default Chat;
