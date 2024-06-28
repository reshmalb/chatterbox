
import { Stack,Box, Avatar } from "@mui/material"
import PropTypes from "prop-types"
const AvatarCard = ({avatar}) => {
  return (
    <Stack direction={"row"}  spacing={0.5}> 
      <Box width={"5rem"} height={"3rem"}>
        {
            avatar.map((i,index)=>(
                <Avatar 

                  key={Math.random()*100}
                  src={i}
                  alt={`Avatar ${index}`}
                  style={{
                    width:"3rem",
                    height :"3rem",
                    position: "absolute",
                    left:{
                        xs: `${0.5 + index}rem`,
                        sm: `${index}rem`

                    }

                }}
                />
            ))
        }

      </Box>
         
    </Stack>
  )
}

AvatarCard.propTypes={
    avatar:PropTypes.array, 
}

export default AvatarCard