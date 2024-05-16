import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/telegram.png";
import livechat from "../../assets/Livechat.svg";

const Chat = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <SmsOutlinedIcon sx={{ fontSize: 50, color: 'rgba(255, 113, 144, 1)', marginRight: '10px' }}/>
        <div style={{ textAlign:'left'}}>
          <Typography variant="h5" >Chat</Typography>
          <Typography variant="body2" >Chat with us  </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex',gap:'50px', justifyContent: 'center',width: '100%' }}>
    <div>
      <img src={whatsapp} alt="whatsapp" style={{ width: 30 }} className='question' />
      <p>WhatsApp</p>
    </div>
    <div>
      <img src={telegram} alt="telegram" style={{ width: 30 }} className='question' />
      <p>Telegram</p>
    </div>
    <div>
      <img src={livechat} alt="livechat" style={{ width: 30 }} className='question' />
      <p>Livechat</p>
    </div>
  </div>
</AccordionDetails>

    </Accordion>
  );
}

export default Chat;
