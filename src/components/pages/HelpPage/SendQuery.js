import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './SendQuery.css';

const SendQuery = () => {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
    
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <ArrowUpwardIcon style={{ fontSize: 30, color: 'rgba(255, 113, 144, 1)'  }} />
    <MailOutlineIcon style={{ fontSize: 40, color: 'rgba(255, 113, 144, 1)', marginTop: '-5px' }} />
</div>
      <div style={{ textAlign:'left' ,marginLeft:'1%'}}>
        <Typography variant="h5" >Send Query</Typography>
        <Typography variant="body2" >Send your queries via form </Typography>
      </div>
    </AccordionSummary>
    <AccordionDetails>
        <div className='form-control'>
    <form action="#">
     
        <label for="name">Name</label>
  <input type="text" id="name" name="name" required/>
  
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required/>
        
 
  
  <label for="subject">Subject</label>
  <input type="text" id="subject" name="subject" required/>
  
  <label for="order-no">Order No.</label>
  <input type="text" id="order-no" name="order-no" required/>
  
  <label for="query" class="query">Query</label>
  <textarea id="query" name="query" required></textarea>
  <div >
              <button type="submit">Submit</button>
            </div>
</form>
</div>
    </AccordionDetails>
    </Accordion>
  )
}

export default SendQuery;