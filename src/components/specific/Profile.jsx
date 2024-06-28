import { Avatar, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import {Face as FaceIcon, Email as EmailIcon, CalendarViewDayRounded as CalenderIcon} from  '@mui/icons-material' 
import moment from "moment";

const Profile = () => {
  return (


    <Stack   spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar 
      sx={{
        width:200,
        height:200,
        objectFit: "contain",
        merginBottom :"1rem",
        border :"5px solid white"
      }}
      />
     <ProfileCard heading={"bio"} text={"jkdfj jfjdkjk jdnf "}/>
     <ProfileCard heading={"username"} text={"@menenfd "} icon ={<EmailIcon/>}/>
     <ProfileCard heading={"name"} text={"ABC"} icon={<FaceIcon/>}/>
     <ProfileCard heading={"joined"} text={moment("2024-02-04T18:30:00.000Z").fromNow()} icon={<CalenderIcon/>}/>



    </Stack>
  )
}
;

const ProfileCard =({text,icon,heading})=> (
  <Stack
   direction={"row"}
   alignItems={"center"}
   textAlign={"center-"}
  spacing={"1rem"}
  color={"white"} 
  
  >
    {icon && icon}
    <Stack>
      <Typography variant ="body1">{text}</Typography>
      <Typography variant="caption" color={"grey"}>{heading}</Typography>

    </Stack>

  </Stack>
)

ProfileCard.propType = {
  text: PropTypes.string,
  icon: PropTypes.node,
  heading: PropTypes.string,

}
export default Profile;