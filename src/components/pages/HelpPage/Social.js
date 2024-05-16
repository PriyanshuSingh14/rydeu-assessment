import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import social from "../../assets/Social.svg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Social = () => {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
     <img src={social} alt="social" height="50px" width="50px" />
      <div style={{ textAlign:'left' , marginLeft:'1%'}}>
        <Typography variant="h5" >Social</Typography>
        <Typography variant="body2" >Chat with us via social media  </Typography>
      </div>
    </AccordionSummary>
    <AccordionDetails style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<div style={{ display: 'flex',gap:'50px', justifyContent: 'center',width: '100%' }}>
  <div>
    <img src={facebook} alt="facebook" style={{ width: 30 }} className='question' />
    <p>Facebook</p>
  </div>
  <div>
    <img src={instagram} alt="instagram" style={{ width: 30 }} className='question' />
    <p>Instagram</p>
  </div>
  <div>
    <img src={twitter} alt="twitter" style={{ width: 30 }} className='question' />
    <p>Twitter</p>
  </div>
  <div>
    <img src={linkedin} alt="linkedin" style={{ width: 30 }} className='question' />
    <p>Linkedin</p>
  </div>
</div>
</AccordionDetails>

  </Accordion>
  )
}

export default Social