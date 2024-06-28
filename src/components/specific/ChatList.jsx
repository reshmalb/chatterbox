import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat
}) => {



  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data,index) => {
        const { avatar, _id, name, groupChat, members } = data;

        // Rename the variable to avoid conflict with the prop name
        const alertForChat = newMessageAlert.find(
          ({chatId}) => chatId === _id
        );

        const isOnline = members?.some(() => onlineUsers.includes(_id));

        return (
          <ChatItem
            index={index}
            newMessageAlert={alertForChat} // Use the renamed variable here
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={_id}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id} // Corrected 'sameSend' to 'sameSender' based on your original prop definition
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

ChatList.propTypes = {
  w: PropTypes.string,
  chats: PropTypes.array,
  chatId: PropTypes.string,
  onlineUsers: PropTypes.arrayOf(PropTypes.string),
  newMessageAlert: PropTypes.arrayOf(
    PropTypes.shape({
      chatId: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  handleDeleteChat: PropTypes.func,
};

export default ChatList;
