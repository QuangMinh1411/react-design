import React, { useState } from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const MuiAccordion = () => {
  const[expanded,setExpanded]  = useState('')
  const handleChange = (isExpanded,panel)=>{
    setExpanded(isExpanded?panel:'')
  }
  return (
    <div>
        <Accordion expanded={expanded=='panel1'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel1')}>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' 
            expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ab esse tempore soluta, incidunt possimus!</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded=='panel2'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel2')}>
            <AccordionSummary id='panel2-header' aria-controls='panel2-content' 
            expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium velit quia dolor eius nulla.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded=='panel3'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel3')}>
            <AccordionSummary id='panel3-header' aria-controls='panel3-content' 
            expandIcon={<ExpandMoreIcon />} >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, reiciendis. Hic mollitia alias recusandae vel.</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion