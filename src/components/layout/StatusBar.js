import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typo from "../commons/Typo";

import { IconContext } from "react-icons";
import { FaWifi } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { IoIosBatteryFull } from "react-icons/io";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatusBar = () => {
  const currentTime = () => {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(() => setTime(currentTime), 1000);
  }, []);

  return (
    <IconContext.Provider value={{ style: { padding: "0 0.5rem" } }}>
      <Container>
        <TextWrapper>
          <Typo fs="0.9rem">No Service</Typo>
          <FaWifi />
        </TextWrapper>
        <Typo fs="0.9rem" fw="600">
          {time}
        </Typo>
        <TextWrapper>
          <RiRotateLockFill />
          <Typo fs="0.9rem">100%</Typo>
          <IoIosBatteryFull />
        </TextWrapper>
      </Container>
    </IconContext.Provider>
  );
};

export default StatusBar;
