import styled from "styled-components";

import { BiUser } from "react-icons/bi";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TfiMore } from "react-icons/tfi";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  padding: 0.8rem 0;
  background-color: #f9f9fa;
  border: black;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
`;
const Navbar = () => {
  return (
    <Container>
      <BiUser size="2rem" />
      <HiMiniChatBubbleOvalLeft size="2rem" />
      <IoIosSearch size="2rem" />
      <TfiMore size="2rem" />
    </Container>
  );
};

export default Navbar;
