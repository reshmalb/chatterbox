import { Grid, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";


const LayoutLoader = () => {
  return (
    <Grid container height="calc(100vh - 4rem)" spacing={"1rem"}>
        <Grid 
        item 
        sm={4}
        md={3}
        sx={{
          display:{xs:"none",sm: "block"},

        }}
         height="100%">
     
 
        <Skeleton variant="rectangular" height={"100vh"}/>
        </Grid>


        <Grid  
        item
         xs={12}
         sm={8}
         md={5}
         lg={6}
         bgcolor={"primary.main"}
          height="100%">
            <Stack spacing={"1rem"}>
          {
            Array.from({length: 10}).map((_,index) => {
                <Skeleton key={index} variant="rounded" height={"10rem"}/>
            

            
          }
        )
        }
        </Stack>
        
    
          

        </Grid>
        <Grid
          item
         md={4} 
         lg={3}
      
         sx={{
          display:{xs:"none",md: "block"},
          padding:"2rem",
          bgcolor:"rgba(0,0,0,0.85)",
             height:"100%"

        }}>
               <Skeleton variant="rectangular"/>

        </Grid>
      </Grid>
  )
}

export default LayoutLoader;