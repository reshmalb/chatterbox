import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import {Chats} from "../constants/SampleData"
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

// Higher-order component (HOC)
const AppLayout = (WrappedComponent) => {
  if (!WrappedComponent) {
    console.error("WrappedComponent is undefined. Please pass a valid React component.");
    return;
  }

  const WithLayout = (props) => {
      const params= useParams();
     const chatId= params.chatId;

  
     const handleDeleteChat=(e ,_id, groupChat)=>{
       e.preventDefault();
        console.log("Delete chat",_id,groupChat)
     }
    return (
      <>
        <Title />
        <Header />
        <Grid container height="calc(100vh - 4rem)">
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height="100%"
          >
            <ChatList
             chats={Chats} 
             chatId={chatId} 
             handleDeleteChat={handleDeleteChat}
            //  newMessageAlert={[
            //   {
            //     chatId,
            //     count:4
            //   }
            //  ]}
            //  onlineUsers={["1","2"]}
             
             />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}          
            height="100%"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
               bgcolor: "rgba(0,0,0,0.85)",
              height: "100%",
            }}
          >
           <Profile/>
          </Grid>

                  
              
        </Grid>
      </>
    );
  };

  WithLayout.displayName = `AppLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

const getDisplayName = (WrappedComponent) => {
  if (!WrappedComponent) {
    return "UndefinedComponent";
  }
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default AppLayout;
