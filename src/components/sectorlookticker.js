import { Container, Paper, Box, Typography, IconButton, Tabs, Tab } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function TickerLook()
{

    let location = useLocation()
    const [val, setVal] = useState(0)
    

    const handleChange = (event, newval) => {
        setVal(newval)
    }

    return (<Container  maxWidth={'xl'} sx={{width:"100%", height:"883px", marginTop:"80px"}}>
       <Box sx={{display:"flex", alignItems:'flex-start'}}><IconButton href="/sectoranalysis"><ArrowBackIosIcon sx={{color:"white"}}></ArrowBackIosIcon></IconButton><Typography sx={{marginLeft:"20px", marginBottom:"20px", color:"white", fontSize:"1.5rem"}}>{location.pathname.split('/sectoranalysis/')[1]}</Typography><Box></Box></Box>
        <Paper sx={{width:"100%", height:"90%", background:"#262626"}}><Tabs value={val} onChange={handleChange}><Tab label="Earnings Outlook"></Tab><Tab label="Technicals View"></Tab><Tab label="Options Surge Watch"></Tab></Tabs></Paper>
    </Container>)
}