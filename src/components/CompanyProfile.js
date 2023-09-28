import { Container, Box, Paper, Toolbar, Typography } from "@mui/material";
import {Button} from "@mui/material";
import { useLocation } from "react-router-dom";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Chart from "./stockchart";

export default function CompanyProfile({tick})
{
    let ticker = useLocation()
    const actualticker = ticker.pathname.split('/')[2];

    return (<Container  maxWidth={'xl'} sx={{width:"100%", height:"883px", marginTop:"80px"}}>

        <Box sx={{width:"100%", height:"60%", display:"flex"}}><Paper sx={{width:"65%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography sx={{textTransform:"uppercase"}}fontFamily={'Satoshi-Variable'} color={"white"}>{actualticker}</Typography><Typography sx={{textTransform:"uppercase", marginLeft:"20px"}}fontFamily={'Satoshi-Variable'} color={"white"}>176.30</Typography><ArrowDropUpIcon sx={{marginLeft:'20px', color:"green"}}></ArrowDropUpIcon><Typography sx={{textTransform:"uppercase"}}fontFamily={'Satoshi-Variable'} color={"white"}>4%</Typography></Toolbar><Box sx={{width:'100%', height:'40px', display:"flex", justifyContent:"flex-end"}}><Button variant="contained" placeholder="1m" sx={{"& .MuiButton-root":{boxShadow:"none"}, height:"30px", width:"20px", textTransform:"none"}}>1m</Button><Button variant="contained" placeholder="1m" sx={{height:"30px", width:"20px", textTransform:"none", marginLeft:"10px"}}>1h</Button><Button variant="contained" placeholder="1m" sx={{height:"30px", width:"20px", textTransform:"none", marginLeft:"10px"}}>D</Button><Button variant="contained" placeholder="1m" sx={{height:"30px", width:"20px", textTransform:"none", marginLeft:"10px"}}>M</Button><Button variant="contained" placeholder="1m" sx={{height:"30px", width:"20px", textTransform:"none", marginLeft:"10px"}}>Y</Button></Box><Chart></Chart></Paper><Paper sx={{marginLeft:"20px",width:"34%", height:"100%", background:"#262626"}}></Paper></Box>
        <Box sx={{width:"100%", height:"35%", display:"flex", marginTop:"20px"}}><Paper  sx={{width:"35%", height:"100%", background:"#262626"}}></Paper ><Paper  sx={{marginLeft:"20px", width:"65%", height:"100%", background:"#262626"}}></Paper></Box>
    </Container>)
}