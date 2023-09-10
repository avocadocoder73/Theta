

import { ReactComponent as Logo} from '../../public/THETA2.svg'
import LogoText from './test'

import { AppBar, Container, Button,Tabs,ListItem, Toolbar, List, Table, Box, SvgIcon, Paper, styled, createTheme, ThemeProvider, Drawer, IconButton, Typography, Divider, AccordionSummary, ListItemButton, AccordionDetails, Tab  } from "@mui/material"
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
import $ from 'jquery'




export default function Dashboard()
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
        }
    })

    

    const test = useMediaQuery(theme.breakpoints.up('lg'))
  
    const props = {
       
        visible: test ? 'hidden' : 'visible',
        paddingLeft: test ? '200px' : '0px'
    }



    async function RSS(url)
    {
    /*    
$.ajax({
    url: url,
    crossDomain:true,
    type:"GET",
    data:{
        format:'xml',
    },
    success: function (xmlData) {
        
        $(xmlData).find("item").each(function () {
            var title = $(this).find("title").text();
            var links = $(this).find("link").text()
            console.log(title)
            setTr((old) => [...old, title])
           
           
        });
    },
    error: function (error) {
        console.error("Error fetching RSS feed: " + error);
    }

});
     */
    const parser = new RSSParser()

    const parse = async url => {
        const feed = await parser.parseURL('https://www.sec.gov/rss/rules/proposed.xml')
        console.log(feed.title)
    }
    }

 

    return (<ThemeProvider theme={theme}>
        
        <AppBar sx={{minHeight:"40px"}}>

        <Toolbar  sx={{"@media (min-width:600px)": {minHeight:"10px"}}}>
            <IconButton onClick={() => setOpen(!open)} >
                <MenuIcon sx={{color:"white"}}></MenuIcon>
            </IconButton>
            <Logo sx={{height:"40px", width:'120px'}}></Logo>
            <LogoText></LogoText>
        </Toolbar>
        <Drawer sx={{ '& .MuiPaper-root':{backgroundColor:"primary.main"}, '& .MuiDrawer-paper':{width:"auto", marginTop:"40px"}}} open={open} variant={'persistent'}><Paper variant='outlined' sx={{height:"100%", width:"100%"}}><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex", marginTop:'50px'}}><Button href={'/dashboard'}sx={{justifyContent:"flex-start", width:'200px'}}><HomeIcon sx={{fill:"white", margin:"10px"}}></HomeIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Dashboard</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href={'/dashboard/options'}sx={{justifyContent:"flex-start", width:'200px'}}><RequestPageIcon sx={{fill:"white", margin:"10px"}}></RequestPageIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Options</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href={'/dashboard/stocks'}sx={{justifyContent:"flex-start", width:'200px'}}><InsertChartIcon sx={{fill:"white", margin:"10px"}}></InsertChartIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Stocks</Typography></Button></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Accordion sx={{"&.MuiPaper-root":{boxShadow:"none"}, justifyContent:"flex-start", width:'200px'}}><AccordionSummary href='/dashboard/filings' expandIcon={<NewspaperIcon sx={{color:"white"}}></NewspaperIcon>}><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Filings/News</Typography></AccordionSummary><AccordionDetails><List><ListItemButton href='/dashboard/filings'>Overview</ListItemButton><ListItemButton color={news.fed ? "secondary" : "primary"} onClick={() => setNews({...news, fed:true})} href='/dashboard/fed'>Federal Register</ListItemButton><ListItemButton>SEC</ListItemButton><ListItemButton>FINRA</ListItemButton><ListItemButton>DTCC</ListItemButton><ListItemButton>NSCC</ListItemButton><ListItemButton>Company News</ListItemButton><ListItemButton>Global News</ListItemButton></List></AccordionDetails></Accordion></Box><Box sx={{backgroundColor:"primary.main", alignItems:"center", display:"flex"}}><Button href='/dashboard/alerts'sx={{justifyContent:"flex-start", width:'200px'}}><AddAlertIcon sx={{fill:"white", margin:"10px"}}></AddAlertIcon><Typography sx={{textTransform:"none", color:"white", fontFamily:"Satoshi-Variable"}}>Alerts</Typography></Button></Box></Paper></Drawer>
        </AppBar>
          <Container sx={{width:"100%", height:"883px", marginTop:"80px"}}>
                    <Box sx={{display:"flex", width:"100%", height:"60%"}}><Paper elevation={5} sx={{width:"70%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Options Flow</Typography></Toolbar></Paper> <Paper sx={{marginLeft:"20px", width:"30%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Top gainers</Typography></Toolbar></Paper></Box>
                    <Box sx={{display:"flex", marginTop:"20px", width:"100%", height:"35%"}}><Paper  sx={{width:"70%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>Most traded tickers</Typography></Toolbar></Paper><Paper sx={{marginLeft:"20px", width:"30%", height:"100%", background:"#262626"}}><Toolbar  sx={{"@media (min-width:600px)":{minHeight:"40px"}, borderBottom: "1px solid #313131"}}><Typography fontFamily={'Satoshi-Variable'} color={"white"}>New Filings</Typography></Toolbar><Tabs value={4} sx={{ "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: "0.3"}}}scrollButtons variant='scrollable'><Tab onClick={() => RSS('https://www.federalregister.gov/api/v1/documents.rss?conditions%5Bsection_ids%5D%5B%5D=1&conditions%5Bterm%5D=%22stock+exchange%22+%7C+%22commodity+futures%22')} label='FED'></Tab><Tab  onClick={() => RSS("https://www.sec.gov/rss/rules/proposed.xml")}label='SEC'></Tab><Tab onClick={() => RSS("http://feeds.finra.org/FINRARuleFilings")} label='FINRA'></Tab><Tab label='DTCC'></Tab><Tab label='NSCC'></Tab></Tabs><ListItem sx={{alignItems:"flex-start", display:"flex", flexDirection:"column"}}>{tr.slice(0,3).map((item) => <Box sx={{display:"flex", justifyContent:"space-between", width:'100%'}}><Typography sx={{margin:"5px", fontSize:"0.7rem", color:"white"}}>{item}</Typography><a>Read more</a></Box>)}</ListItem></Paper></Box>
                      
                       

            </Container>
        
            
          
        </ThemeProvider>)
}