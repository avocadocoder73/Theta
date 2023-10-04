import { Container, Paper, Toolbar, Box, Typography, Divider, Tabs, Tab, Stack, Button, createTheme, ThemeProvider, buttonGroupClasses, styled } from "@mui/material"
import { ATH, ATL, Inflow, Outflow, Overvalued, TopGain, TopLoss, Undervalued } from "./sectordata"
import { useEffect, useState } from "react"
import CircleIcon from '@mui/icons-material/Circle';
export default function SectorAnalysis()



{
 

  const [b, setData] = useState("")
  const [button, setButton] = useState({but:"success", col:"white", txt:"Info", ticker:"", attr:""})
  const [value, setValue] = useState(0)
  useEffect(() => {

    setData(Undervalued())
   
  }, [])

  const theme = createTheme({
    palette:{
            primary:{
                main:"#262626",
                light:"#606060",
                dark:"#000000"
                
            }
        }
  })

  const handleChange = (e, newval) => {
    
    setValue(newval)
    
    if(newval == 0)
    {
      setData(Undervalued())
         setButton({...button, but:"success", col:"white"})
    }
    if(newval == 1)
    {
      setData(Overvalued())
      setButton({...button, but:"error", col:"white"})
    }
    if(newval == 2)
    {
       setData(TopGain())
      setButton({...button, but:"success", col:"white"})
    }
    if(newval == 3)
    {
       setData(TopLoss())
      setButton({...button, but:"error", col:"white"})
    }
    if(newval == 4)
    {
       setData(ATH())
      setButton({...button, but:"success", col:"white"})
    }
    if(newval == 5)
    {
       setData(ATL())
       console.log(newval)
      setButton({...button, but:"error", col:"white"})
    }
    if(newval == 6)
    {
       setData(Inflow())
      setButton({...button, but:"success", col:"white"})
    }
if(newval == 7)
    {
       setData(Outflow())
      setButton({...button, but:"error", col:"white"})
    }
  }
  
  const data = Undervalued()


 
  const overvalued = Overvalued()
  
    return (<ThemeProvider theme={theme}><Container  maxWidth={'xl'} sx={{width:"100%", height:"883px", marginTop:"80px"}}>
          <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography sx={{marginBottom:"20px", color:"white", fontSize:"1.5rem"}}>Sector Analysis</Typography><Box></Box></Box>
          <Paper sx={{width:"100%", height:"30%", background:"#262626"}}><Toolbar sx={{width:"100%", display:'flex'}}><Typography sx={{color:"white"}}>Heatmap</Typography></Toolbar></Paper>
          <Tabs value={value} onChange={handleChange}><Tab label="Undervalued" sx={{color:"white"}}></Tab><Tab label="Overvalued"  sx={{color:"white"}}></Tab><Tab label="Top gainers"   sx={{color:"white"}}></Tab><Tab label="Top losers"  sx={{color:"white"}}></Tab><Tab label="All-Time Highs" sx={{color:"white"}}></Tab><Tab label="All-Time Lows" sx={{color:"white"}}></Tab><Tab label="Largest Inflow"sx={{color:"white"}}></Tab><Tab label="Largest Outflow"   sx={{color:"white"}}></Tab></Tabs>
          <Box sx={{width:'100%', height:"45%", display:"flex", marginTop:"20px"}}>
        <Paper sx={{width:"16%", height:"90%", margin:"6px" , background:"#262626", overflow:"hidden"}}><Toolbar sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Information Technology</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.IT.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col,width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"90%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Healthcare</Typography></Toolbar  ><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.HC.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`}  variant="contained"  color={button.but} sx={{color:button.col, width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"90%", margin:"6px", background:"#262626", overflow:'hidden'}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Financials</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.FIN.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`} variant="contained" color={button.but} sx={{color:button.col,  width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"90%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Consumer Discretionary</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.CD.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col, width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"90%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Communication Services</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.CS.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col, width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"90%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Industrials</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.IND.map((item) =><Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col,width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          </Box>
          <Box sx={{width:'100%', height:"50%", display:"flex", justifyContent:"center"}}>
          <Paper  sx={{width:"16%", height:"80%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Consumer Staples</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.CSP.map((item) =><Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`}  variant="contained"  color={button.but} sx={{color:button.col, width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"80%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Energy</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.ENE.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`}  variant="contained" color={button.but} sx={{color:button.col , width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"80%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Utilities</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.UT.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button href={`/sectoranalysis/${item}`}  variant="contained"  color={button.but} sx={{color:button.col,width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"80%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Real Estate</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.RE.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button  href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col,width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
          <Paper  sx={{width:"16%", height:"80%", margin:"6px", background:"#262626", overflow:"hidden"}}><Toolbar  sx={{ background:"#0d0b0b"}}><Typography sx={{color:"white"}}>Materials</Typography></Toolbar><Divider light sx={{width:"100%"}}></Divider><Stack sx={{margin:"10px"}}>{data.MAT.map((item) => <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"5px"}}><CircleIcon sx={{ paddingRight:"10px", width:"10px", color:"white"}}></CircleIcon><Typography sx={{color:"white"}}>{item}</Typography><Button  href={`/sectoranalysis/${item}`} variant="contained"  color={button.but} sx={{color:button.col, width:"70px",marginLeft:"40px"}}>{button.txt}</Button></Box>)}</Stack></Paper>
       </Box>

    </Container></ThemeProvider>)
}