import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';


 function SimpleAccordion() {
  const Accordion_style = {
    boxShadow:'none',
    border:'1px solid rgba(250, 250, 250, 1)'
  }
  return (
    <>
      <Accordion style={Accordion_style}>
        <AccordionSummary
          // expandIcon={}

        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </>
  );
}



export default SimpleAccordion;
