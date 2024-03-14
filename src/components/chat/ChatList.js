import React, { useState, useEffect } from "react";
import ChatListItem from "./ChatListItem";
import { getChatList } from "../../api/chatApi";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const getChat = async () => {
    const result = await getChatList();
    setChats(result);
  };
  useEffect(() => {
    getChat();
  }, []);

  return (
    <>
      {chats.length !== 0
        ? chats.map((chat) => <ChatListItem key={chat.username} {...chat} />)
        : null}
    </>
  );
};
export default ChatList;
