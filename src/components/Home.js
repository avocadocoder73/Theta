
import { AppBar, Container, Button,Tabs,ListItem, Toolbar, List, Table, Box, SvgIcon, Paper, styled, createTheme, ThemeProvider, Drawer, IconButton, Typography, Divider, AccordionSummary, ListItemButton, AccordionDetails, Tab, TextField, TableContainer, TableHead, TableRow, TableBody  } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import axios from 'axios'


export default function Home()
{
useEffect(() => {
      RSS("https://www.federalregister.gov/api/v1/documents.rss?conditions%5Bsection_ids%5D%5B%5D=1&conditions%5Bterm%5D=%22stock+exchange%22+%7C+%22commodity+futures%22")  
     
}, [])


let titles = {
    fed:[]
}

const [trlinks, setTrlinks] = useState({fed:[]})
const [tr, setTr] = useState([])
const [news , setNews] = useState({fed:false, sec:false, finra:false, dtcc:false, nscc:false,company:false, global:false})
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
        {field: 'tradetype', headerName: 'Trade Conditions', width:160},


    ]

    const tickers =[

        {tick:"$MSFT", percent:4.13, name:"Microsoft Corporation"  },
        {tick:"$GME",  percent: 5,name: "Gamestop Corporation" },
        {tick:"$AMC", percent:6,name:"AMC Theatres" },
        {tick:"$SPY",  percent:13.23 ,name: "SPY ETF"},
        {tick:"$SPX",percent: 20 ,name: "SPX ETF"},
        {tick:"$HSI", percent:5.123,name: "Hang Seng Index" },
        {tick:"$GOTU",  percent: 7.23 ,name: "Gaotu Techedu"},
        {tick:"$NVDA", percent: 0.29 ,name: "Nvidia Corporation"},
        {tick:"$AMZN",  percent: 3,name: "Amazon Corporation"}
    ]
   

    function route(e)
    {
        if(e.field == 'ticker')
        {
            window.location.href = `/companyprofile/${e.value}`
            
        }
    }

    async function RSS(url)
    {
       let p = await axios.get(url)
           console.log(p.data)
    }

    return (<Container maxWidth={'xl'} sx={{width:"100%", height:"883px", marginTop:"80px"}}>
                    <Box sx={{display:"flex", width:"100%", height:"60%"}}><Paper elevation={5} sx={{display:"flex", flexDirection:"column", overflowY:"hidden", width:"50%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131", display:'flex', justifyContent:"space-between"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Options Flow</Typography><TextField sx={{"& .MuiInputBase-root":{height:"40px"}, margin:"10px", marginRight:"100px"}} margin="normal" placeholder='Ticker'></TextField><IconButton><OpenWithIcon sx={{color:'white'}}></OpenWithIcon></IconButton></Toolbar><DataGrid sx={{"-webkit-scrollbar":{width:"10px"}, border:"none", background:"#1c1919", color:"white"}} onCellClick={(e) => route(e)} rows={rows} columns={columns}>
                        
                        
                        
                        </DataGrid></Paper> <Paper sx={{marginLeft:"20px", width:"30%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Top gainers</Typography></Toolbar><List><ListItem sx={{display:"flex", flexDirection:"column"}}>{tickers.map((ticker) => (<><Box sx={{display:"flex", justifyContent:"space-between", width:"100%", height:"23px"}}><Typography sx={{color:"white"}}>{ticker.tick}</Typography><Typography sx={{color:"white"}}>{ticker.percent > 0 ? <ArrowDropUpIcon sx={{color:"green"}}></ArrowDropUpIcon>: <ArrowDropDownIcon sx={{color:"red"}}></ArrowDropDownIcon>}{ticker.percent + "%"}</Typography></Box><Box sx={{display:"flex", width:"100%", justifyContent:'flex-start',  borderBottom:"1px solid #201c1c"}}><Typography sx={{color:"#656565"}}>{ticker.name}</Typography></Box></>))}</ListItem></List></Paper><Paper elevation={5} sx={{width:"18%", marginLeft:"20px", background:"#262626"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"} sx={{margin:"10px"}}>Trending News For You</Typography></Paper></Box>
                    <Box sx={{display:"flex", marginTop:"20px", width:"100%", height:"35%"}}><Paper  sx={{width:"70%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Most traded tickers</Typography></Toolbar></Paper><Paper sx={{marginLeft:"20px", width:"30%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>New Filings</Typography></Toolbar><Tabs value={4} sx={{ "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: "0.3"}}}scrollButtons variant='scrollable'><Tab onClick={() => RSS('https://www.federalregister.gov/api/v1/documents.rss?conditions%5Bsection_ids%5D%5B%5D=1&conditions%5Bterm%5D=%22stock+exchange%22+%7C+%22commodity+futures%22')} label='FED'></Tab><Tab  onClick={() => RSS("http://localhost:4000/rss")}label='SEC'></Tab><Tab onClick={() => RSS("http://feeds.finra.org/FINRARuleFilings")} label='FINRA'></Tab><Tab label='DTCC'></Tab><Tab label='NSCC'></Tab></Tabs><ListItem sx={{alignItems:"flex-start", display:"flex", flexDirection:"column"}}>{tr.slice(0,3).map((item) => <Box sx={{display:"flex", justifyContent:"space-between", width:'100%'}}><Typography sx={{margin:"5px", fontSize:"0.7rem", color:"white"}}>{item}</Typography><a>Read more</a></Box>)}</ListItem></Paper></Box>
                      
                       <Paper sx={{width:"70%", height:"100%", background:"#262626"}}></Paper>

            </Container>)
}