import { AppBar, Backdrop, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { orange } from "../constants/color";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from 'prop-types';
import {  useNavigate } from "react-router";
import React, { Suspense, useState } from "react";


const SearchDialog = React.lazy(()=> import('../specific/Search'));
const NotificationDialog = React.lazy(()=>import('../specific/Notifications'));
const NewGroupDialog = React.lazy(()=> import('../specific/NewGroup'));






const Header = () => {
    const navigate= useNavigate();

    //   const [isMobile,setIsMobile] =useState(false);
      const [isNewGroup,setIsNewGroup] =useState(false);
      const [isNotification,setIsNotification] =useState(false);
      const [isSearch,setIsSearch] =useState(false);


  const handleMobile=()=>{
    // setIsMobile((prev)=>!prev)

  };
  const handleSearch=()=>{
      setIsSearch((prev)=>!prev)

  };
  const openNewGroup=()=>{
    setIsNewGroup((prev)=>!prev)

  };
  const navigateGroup=()=>{
    navigate("/groups")

  };

  const openNotifcation=()=>{
    setIsNotification((prev)=>!prev)
  }
  const handleLogout=()=>{

  };


  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Chat App
          </Typography>
       <Box    sx={{
              display: { xs: "block", sm: "none" },
            }}>
            <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />

            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <IconBtn title={"Search"} icon={<SearchIcon/>} onClick={handleSearch} />           
                <IconBtn title={"New Groups"} icon={<AddIcon />} onClick={openNewGroup} />
                <IconBtn title={"Manage Group"} icon={<GroupIcon/>} onClick={navigateGroup} />
                <IconBtn title={"Open Notification"} icon={<NotificationsIcon/>} onClick={openNotifcation} />

                <IconBtn title={"Logout"} icon={<LogoutIcon/>} onClick={handleLogout} />           

             
            </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {isSearch &&(
        <Suspense fallback={<Backdrop open={true} />}>
             <SearchDialog/>

        </Suspense>
       
    )}
      {isNotification &&(
        <Suspense fallback={<Backdrop open={true} />}>
             <NotificationDialog/>

        </Suspense>
       
    )}
      {isNewGroup &&(
        <Suspense fallback={<Backdrop open={true} />}>
             <NewGroupDialog/>

        </Suspense>
       
    )} 
    </>

  );
};
const  IconBtn =({title,icon,onClick})=>{
    return(
        <Tooltip title={title}>
            <IconButton color="inherit" siz="large" onClick={onClick}>
                {icon}

            </IconButton>

        </Tooltip>
    )
}
IconBtn.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func
  };
export default Header;
