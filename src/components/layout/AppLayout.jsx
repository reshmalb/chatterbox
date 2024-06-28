import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";

// Higher-order component (HOC)
const AppLayout = (WrappedComponent) => {
  if (!WrappedComponent) {
    console.error("WrappedComponent is undefined. Please pass a valid React component.");
    return;
  }

  const WithLayout = (props) => {
    const chats = [1, 2, 3, 4, 5,6,9,80];

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
            <ChatList chats={chats} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            bgcolor={"primary.main"}
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
            Third
          </Grid>
        </Grid>
      </>
    );
  };

  // Safeguard to ensure WrappedComponent is defined before setting displayName
  WithLayout.displayName = `AppLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

// Helper function to get the display name of the wrapped component
const getDisplayName = (WrappedComponent) => {
  if (!WrappedComponent) {
    return "UndefinedComponent";
  }
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default AppLayout;
