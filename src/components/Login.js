import { ThemeProvider } from "@emotion/react";
import { Container, Box, FormControl, Typography,Paper,  TextField, Button, Checkbox, FormControlLabel, Avatar, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../public/THETA2.svg'


export default function Login()
{

    const theme = createTheme({
        palette:{
            primary:{
                main:"#555555",
                light:"#c4c4c4",
                dark:"#000000"
            }
        }
    })

    return (<ThemeProvider theme={theme}><Container maxWidth={'xs'}sx={{ display:"flex", justifyContent:"center"}}>
        <Paper elevation="24" variant="outlined" sx={{background:"white", width:"100%"}}>
        <Box sx={{width:"100%"}}>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Logo/>
            <Typography sx={{fontSize:"1.3rem",  display:"flex", justifyContent:"center"}}>Sign in </Typography>
            </Box>
            <form style={{display:"flex", justifyContent:"center"}}>
                <FormControl sx={{width:"90%"}}>
                    <FormControl sx={{ marginTop:"16px", marginBottom:"8px"}}>
                        <TextField placeholder="Email"></TextField>
                        </FormControl>
                        <FormControl sx={{marginTop:"16px", marginBottom:"8px"}}>
                        <TextField placeholder="Password"></TextField>
                        </FormControl>
                        <FormControlLabel control={<Checkbox></Checkbox>} label={"Remember Me"}></FormControlLabel>
                        <Button variant="contained">Sign in</Button>
                </FormControl>
            </form>

           <Typography sx={{margin:"10px", display:'flex', justifyContent:"space-around"}}><Link style={{textDecoration:"none"}}>Forgot Password?</Link><Typography>Need an Account? <Link style={{textDecoration:"none", marginLeft:"3px"}}>Register</Link></Typography></Typography>
        </Box>
        </Paper>
    </Container></ThemeProvider>)
}