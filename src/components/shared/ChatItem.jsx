import PropTypes from "prop-types";
import { Link } from "../styles/StyledComponent";
import { Stack, Typography, Box } from "@mui/material";
import { memo } from "react";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar= [],
  groupChat= false,
  index= 0,
  name,
  _id,
 
  sameSender,
  isOnline,
  newMessageAlert,
 
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{ padding: 0 }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        {/* Avatar card */}
        <AvatarCard avatar={avatar}/>
        <Stack>
          <Typography>{name} </Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

ChatItem.propTypes = {
  avatar: PropTypes.array,
  name: PropTypes.string,
  _id: PropTypes.string,
  groupChat: PropTypes.bool,
  sameSender: PropTypes.bool,
  isOnline: PropTypes.bool,
  newMessageAlert: PropTypes.bool,
  index: PropTypes.number,
  handleDeleteChat: PropTypes.func,
};



export default memo(ChatItem);
