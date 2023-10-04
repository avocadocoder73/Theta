

import { ReactComponent as Logo} from '../../public/THETA2.svg'
import LogoText from './test'

import { AppBar, Container, Button,Tabs,ListItem, Toolbar, List, Table, Box, SvgIcon, Paper, styled, createTheme, ThemeProvider, Drawer, IconButton, Typography, Divider, AccordionSummary, ListItemButton, AccordionDetails, Tab, TextField, TableContainer, TableHead, TableRow, TableBody  } from "@mui/material"
import { useEffect, useState } from "react"
import Accordion from '@mui/material/Accordion';
import useTheme from "@mui/material/styles/useTheme"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import useMediaQuery from "@mui/material/useMediaQuery";
import TableCell from '@mui/material/TableCell';
import $ from 'jquery'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Options from './Options';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export default function Dashboard({prop})
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
    const [open, setOpen] = useState(false)

   const theme = createTheme({
        palette:{
            primary:{
                main:"#262626",
                light:"#606060",
                dark:"#000000"
                
            }
        },
        typography:{
            fontFamily:'Satoshi-Variable'
        },
        components:{
            MuiCssBaseline:{
                styleOverrides:`@font-face {
  font-family: 'Satoshi-Variable';
  src: url("../fonts/Satoshi-Medium.woff2") format('woff2'),
    url('../fonts/Satoshi-Medium.woff') format('woff'),
    url('../fonts/Satoshi-Medium.ttf') format('truetype');
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}`
            }
        }
    })

    

    const test = useMediaQuery(theme.breakpoints.up('lg'))
  
    const props = {
       
        visible: test ? 'hidden' : 'visible',
        paddingLeft: test ? '200px' : '0px'
    }


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
   

    async function RSS(url)
    {
       let p = await axios.get(url)
          
    }
    

 

    return (<ThemeProvider theme={theme}>
        
        <AppBar sx={{minHeight:"40px"}}>

        <Toolbar  sx={{"@media (min-width:600px)": {minHeight:"10px"}}}>
            <IconButton onClick={() => setOpen(!open)} >
                <MenuIcon sx={{color:"white"}}></MenuIcon>
            </IconButton>
            <Logo sx={{height:"40px", width:'120px'}}></Logo>
            <LogoText></LogoText>
            <TextField sx={{"& .MuiInputBase-root":{height:"30px",}, width:"600px", marginLeft:'20px'}} placeholder='Search for anything'></TextField>
        </Toolbar>
        <Drawer sx={{ '& .MuiPaper-root':{backgroundColor:"primary.main"}, '& .MuiDrawer-paper':{width:"auto", marginTop:"40px"}}} open={open} variant={'persistent'}><Paper variant='outlined' sx={{height:"100%", width:"100%"}}><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex", marginTop:'50px'}}><Button href={'/dashboard'}sx={{justifyContent:"flex-start", width:'200px'}}><HomeIcon sx={{fill:"white", margin:"10px"}}></HomeIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Dashboard</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href={'/sectoranalysis'}sx={{justifyContent:"flex-start", width:'200px'}}><QueryStatsIcon sx={{fill:"white", margin:"10px"}}></QueryStatsIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Sector Analysis</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href={'/options'}sx={{justifyContent:"flex-start", width:'200px'}}><RequestPageIcon sx={{fill:"white", margin:"10px"}}></RequestPageIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Options</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href={'/stocks'}sx={{justifyContent:"flex-start", width:'200px'}}><InsertChartIcon sx={{fill:"white", margin:"10px"}}></InsertChartIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Stocks</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Accordion sx={{"&.MuiPaper-root":{boxShadow:"none"}, justifyContent:"flex-start", width:'200px'}}><AccordionSummary href='/dashboard/filings' expandIcon={<NewspaperIcon sx={{color:"white"}}></NewspaperIcon>}><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Filings/News</Typography></AccordionSummary><AccordionDetails><List><ListItemButton href='/dashboard/filings'>Overview</ListItemButton><ListItemButton color={news.fed ? "secondary" : "primary"} onClick={() => setNews({...news, fed:true})} href='/dashboard/fed'>Federal Register</ListItemButton><ListItemButton>SEC</ListItemButton><ListItemButton>FINRA</ListItemButton><ListItemButton>DTCC</ListItemButton><ListItemButton>NSCC</ListItemButton><ListItemButton>Company News</ListItemButton><ListItemButton>Global News</ListItemButton></List></AccordionDetails></Accordion></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href='/dashboard/alerts'sx={{justifyContent:"flex-start", width:'200px'}}><AddAlertIcon sx={{fill:"white", margin:"10px"}}></AddAlertIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Alerts</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href='/dashboard/trading'sx={{justifyContent:"flex-start", width:'200px'}}><BorderColorIcon sx={{fill:"white", margin:"10px"}}></BorderColorIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Trading</Typography></Button></Box></Paper></Drawer>
        </AppBar>
           {prop}
        
            
          
        </ThemeProvider>)
}