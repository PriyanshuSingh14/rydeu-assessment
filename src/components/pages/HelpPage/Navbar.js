import { AppBar,  Box, Fab, Toolbar, Typography, useMediaQuery } from '@mui/material';

import React from 'react';
import logo from '../../assets/MainLogo.svg';
import flag from "../../assets/flag.webp"
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/icons-material/Menu';
const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)'); 
   
  
  return (
    <Box sx={{ flexGrow: 1 }}>
  
    <AppBar position="static" component="nav" color="primary" sx={{ background: 'white' }}>
      <Toolbar>
        <img src={logo} alt="logo"
              height={isSmallScreen ? "50px" : "70px"}
              width={isSmallScreen ? "50px" : "70px"}
              style={{
                maxWidth: "auto",
                height: "auto",
              }}/>
   <SupportOutlinedIcon   sx={{  ml:"auto" , color:'black'}} />
   <Typography variant='h6'  sx={{   color:'black', ml:'4px'}}>Help</Typography>
   <img src={flag} alt="flag"
              height={isSmallScreen ? "15px" : "30px"}
              width={isSmallScreen ? "15px" : "30px"}
              style={{
                maxWidth: "100%",
                height: "auto",
                marginLeft:"2%"
              }}/>
              <Typography variant='caption'  sx={{   color:'black', ml:'4px'}}>Deutsch | EUR</Typography>
              
          
    <Fab variant='extended' size='small' sx={{marginLeft:"1%"}}>
    < AccountCircleIcon sx={{margin:'1px 1px'}}/>
    <Menu sx={{margin:'1px 1px'}} />
    </Fab>
  
       
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default Navbar