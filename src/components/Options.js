import { Box, Container, Typography, Button, Dialog, Divider, DialogTitle, DialogContent, ToggleButtonGroup, ToggleButton, Toolbar, ThemeProvider, DialogContentText, FormControl, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { useTheme } from "@emotion/react";

export function Options()
{
    const [whichone, setWhichone] = useState('options')
    const [open, setOpen] = useState(false)
    const theme = useTheme()

 const handleswap = (event, newswap) => {
    setWhichone(newswap);
  };


    function createData(id,timestamp, ticker, callput,exp,  size, cost, tradecon)
    {
        return {id:id,time: timestamp,ticker: ticker, callput: callput,exp: exp,size: size,cost: cost,tradetype: tradecon}
    }

    const rows = [

        createData("1"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("2","1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("3"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("4"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("5"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("6"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("7"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution"),
        createData("8"," 1:49:18.783 PM", "AAPL", "Call", "2023-05-19", "2", "0.05", "Automatic Execution")
  ]
    
    const columns = [
        {field: 'id', headerName:"ID"},
        {field: 'time', headerName: 'Timestamp'},
        {field: 'ticker', headerName: 'Ticker'},
        {field: 'callput', headerName: 'Call/Put'},
        {field: 'exp', headerName: 'Expiration'},
        {field: 'size', headerName: 'Size'},
        {field: 'cost', headerName: 'Cost'},
        {field: 'delta', headerName:"Delta"},
        {field: 'gamma', headerName:"Gamma"},
        {field: 'theta', headerName:"Theta"},
        {field: 'vega', headerName:"Vega"},
        {field: 'breakeven', headerName:"Break-Even Price"},
        {field: 'VWAP', headerName:"VWAP"},
        {field: 'tradetype', headerName: 'Trade Conditions', width:160},


    ]
    return (<ThemeProvider theme={theme}><Container maxWidth={'xl'}>
        <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography sx={{marginBottom:"20px", color:"white", fontSize:"1.5rem"}}>Options Flow</Typography><Box><Button variant="outlined" onClick={() => setOpen(!open)}><SettingsIcon sx={{color:'white'}}></SettingsIcon><Typography sx={{color:"white", marginLeft:"5px", textTransform:"none"}}>Configure Flow</Typography></Button></Box></Box>
        <DataGrid sx={{border:"none", background:"#1c1919", color:"white"}} rows={rows} columns={columns}></DataGrid>
        <Dialog color="primary" sx={{ background:"#1c1919"}} fullScreen open={open}><DialogTitle sx={{ display:"flex", justifyContent:"space-between"}}><Typography sx={{fontSize:"23px", paddingLeft:"24px"}}>Configure Flow</Typography><Box><Button onClick={() => setOpen(!open)}sx={{display:"flex", alignItems:"center"}}><CloseIcon></CloseIcon><Typography sx={{textTransform:"none"}}>Close</Typography></Button></Box></DialogTitle><DialogContent><Toolbar><ToggleButtonGroup exclusive onChange={handleswap} value={whichone}><ToggleButton value={'options'}><Typography sx={{textTransform:"none"}}>Options Config</Typography></ToggleButton><ToggleButton value={'ticker'}><Typography sx={{textTransform:"none"}}>Ticker Config</Typography></ToggleButton></ToggleButtonGroup></Toolbar><Divider></Divider><FormControl>{whichone =='options' ? <OptionsView></OptionsView>:<TickerView></TickerView>}</FormControl></DialogContent></Dialog>
    </Container></ThemeProvider>)
}


export function OptionsView()
{
    return (<Container><Toolbar><Typography>Choose your options settings</Typography></Toolbar><Box 
    sx={{display:"flex", flexDirection:"column"}}><Box sx={{display:"flex"}}><FormControlLabel label="IV Range"control={<Checkbox></Checkbox>}></FormControlLabel><TextField variant="standard" required placeholder="Upper Limit"></TextField><Typography>-</Typography><TextField sx={{paddingLeft:"10px"}} placeholder="Lower Limit"  variant="standard" required></TextField></Box><Box sx={{display:"flex"}}><FormControlLabel label="Gamma Range" control={<Checkbox></Checkbox>}></FormControlLabel><TextField  placeholder="Upper Limit" variant="standard" required></TextField><Typography>-</Typography><TextField sx={{paddingLeft:"10px"}} placeholder="Lower Limit"   variant="standard" required></TextField></Box><Box sx={{display:"flex"}}><FormControlLabel label="Vega Range"control={<Checkbox></Checkbox>}></FormControlLabel><TextField placeholder="Upper Limit" variant="standard" required></TextField><Typography>-</Typography><TextField variant="standard" sx={{paddingLeft:"10px"}} required placeholder="Lower Limit" ></TextField></Box><Box sx={{display:"flex"}}><FormControlLabel label="Theta Range"control={<Checkbox></Checkbox>}></FormControlLabel><TextField placeholder="Upper Limit" variant="standard" required></TextField><Typography>-</Typography><TextField sx={{paddingLeft:"10px"}} placeholder="Lower Limit" variant="standard" required></TextField></Box></Box></Container>)
}
export function TickerView()
{
    return (<>TEST</>)
}