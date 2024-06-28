import { Stack } from "@mui/material";
import PropTypes from "prop-types";


const ChatList=({ w = "100%",
chats =[]
//chatId,
//onlineUsers = [],
// chatMessageAlert = [
//   {
//     chatId: "",
//     count: 0,
//   },
// ],
//handleDeleteChat
}) => {
return (
  <Stack width={w} direction={"column"} >
    {
      chats?.map((item,index)=>{
        return <div key={index}>{item}</div>
      })
    }

  </Stack>
)
};

ChatList.propTypes = {
w: PropTypes.string,
chats: PropTypes.array,
chatId: PropTypes.string,
onlineUsers: PropTypes.arrayOf(PropTypes.string),
chatMessageAlert: PropTypes.arrayOf(
  PropTypes.shape({
    chatId: PropTypes.string,
    count: PropTypes.number,
  })
),
handleDeleteChat:PropTypes.func
};

export default ChatList