import axios from "axios";

export const getChatList = async () => {
  const response = await axios.get(
    `https://e73a4dfd-d9c1-4cda-bb7a-36d3e2b1fd48.mock.pstmn.io/chat/`
  );
  return response.data;
};
