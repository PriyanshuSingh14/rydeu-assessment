import React from 'react';
import Navbar from './Navbar';
import './HelpPage.css';
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import travelguide from '../../assets/travelguide.svg'
import Chat from './Chat';
import Social from './Social';
import SendQuery from './SendQuery';

const HelpPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
  return (
    
    <div className='background'>
        
    <Navbar/>
    <div className='homepage-contents'>
    <Typography variant='h4' fontWeight='bold' sx={{color:'#0A2472' ,marginTop:'5%'}}>
    Hello, how can we help you?
    </Typography>
    <Typography variant='body1' sx={{marginTop:'1%'}}>
    Find Travel guide, FAQ, chat
    </Typography>
    </div>
    <Grid container spacing={2}  sx={{justifyContent:'center' , margin: isSmallScreen ? '3% 10%' : '3% auto',}}>
  <Grid item xs={12} sm={6} md={4} maxWidth='330px'>
  <Box width="100%">
    <Paper elevation={6}>
      <Box display="flex">
        <Box mr={2} alignItems="center" sx={{ paddingLeft: '8px' , paddingTop:'4px'}}>
          <HelpOutlineOutlinedIcon sx={{ fontSize: 50, color: 'rgba(255, 113, 144, 1)' }} />
        </Box>
        <Box>
          <div style={{ textAlign: 'left', lineHeight:'6pt',marginBottom:'20px'}}> 
            <h3>FAQ</h3>
            <small>Find answers to your questions</small>
          </div>
        </Box>
      </Box>
    </Paper>
  </Box>
</Grid>

  <Grid item xs={12} sm={6} md={4} maxWidth='330px'>
    <Box width="100%">
      <Paper elevation={6} >
        <Box display="flex" >
          <Box mr={2} alignItems="center" sx={{ paddingLeft: '8px' , paddingTop:'6px'}}>
            <img src={travelguide} alt="travel-guide" height="50px" width="50px" />
          </Box>
          <Box>
            <div style={{ textAlign: 'left', lineHeight:'6pt',marginBottom:'20px'}}>
              <h3>Travel Guide</h3>
              <small>Find your routes here</small>
            </div>
          </Box>
        </Box>
      </Paper>
    </Box>
  </Grid>
  <Grid item xs={12}sm={6} md={8}>
    <Chat/>
  </Grid>
  <Grid item xs={12}sm={6} md={8}>
    <Social/>
  </Grid>
  <Grid item xs={12}sm={6} md={8}>
   <SendQuery/>
  </Grid>
</Grid>



 
   
    </div>
  )
}

export default HelpPage