import { Box, Container, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Options()
{   function createData(id,timestamp, ticker, callput,exp,  size, cost, tradecon)
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
    return (<Container maxWidth={'xl'}>
        <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography sx={{marginBottom:"20px", color:"white", fontSize:"1.5rem"}}>Options Flow</Typography><Box><Button variant="outlined"><SettingsIcon sx={{color:'white'}}></SettingsIcon><Typography sx={{color:"white", marginLeft:"5px", textTransform:"none"}}>Configure Flow</Typography></Button></Box></Box>
        <DataGrid sx={{border:"none", background:"#1c1919", color:"white"}} rows={rows} columns={columns}></DataGrid>

    </Container>)
}