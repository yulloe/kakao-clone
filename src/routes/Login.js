import React, { useState } from "react";
import styled from "styled-components";
import Typo from "../components/commons/Typo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  padding: 2rem;
`;

const Form = styled.form`
  display: contents;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Input = styled.input`
  display: block;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 1rem 0;
  input:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background: #f6f6f6;
  border: none;
  width: 100%;
  padding: 0.5rem 0.9rem;
  margin: 0.7rem 0 0 0;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(`/chat`);
  };

  return (
    <>
      <Container>
        <Typo fs="1.3rem" fw="400" p="2rem 0">
          Welcome to KakaoTalk
        </Typo>
        <Typo c="#7d7d7d">If you have a Kakao Account,</Typo>
        <Typo c="#7d7d7d" m="0 0 2rem 0">
          log in with your email or phone number.
        </Typo>
        <Form>
          <Input
            placeholder="Email or phone number"
            type="text"
            value={username}
            onChange={onChangeUsername}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <Button onClick={onSubmit}>Login</Button>
          <Button onClick={onSubmit}>Sign Up</Button>
        </Form>
        <Typo fs="0.8rem" m="1rem 0 0 0">
          Find Kakao Account or Password
        </Typo>
      </Container>
    </>
  );
};

export default Login;
