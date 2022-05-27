import { AppBar,Fab,Slide,Box, Button, Toolbar,Container,Drawer,ListItemButton,ListItemText,List,ListItem,Divider,useScrollTrigger } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const Navbar = () => {


    const [state,setState] = useState({
                mobileView:false,
                drawerOpen: false,
    })
    
    
    const {mobileView,drawerOpen} = state;

    useEffect(()=>{
            const setResponsiveness = () => {
            return window.innerWidth < 900 
                    ? setState((prevState)=>({...prevState,mobileView:true}))
                    : setState((prevState)=>({...prevState,mobileView:false}))
            }
            setResponsiveness()
            window.addEventListener("resize",()=> setResponsiveness())
            return ()=>{
            window.removeEventListener("resize",()=> setResponsiveness())
            }
    },[])

    const displayDesktop = () => {
        return (
            <HideOnScroll>
                <Toolbar>
                    <Container sx={{background:"black" ,display:"flex", justifyContent:"flex-end",flexWrap:"wrap"}} maxWidth="xl" >
                        <Link to="/">
                            <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                home
                            </Button>
                        </Link>
                        <Link to="/roadmap">
                            <Button variant="outlined" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                roadmap
                            </Button>
                        </Link>
                        <Button href="https://discord.gg/vKaB2B8v" variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                discord
                        </Button>
                        <Button variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                twitter
                        </Button>
                        <Button variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                Magic Eden
                        </Button>
                    </Container>
                </Toolbar>
            </HideOnScroll>
        )
    }

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return(
            <Toolbar>
                <Button onClick={handleDrawerOpen}>
                        <Fab color="primary" aria-label="edit">
                                <MenuIcon />
                        </Fab>
                </Button>
                <Drawer
                {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
                }}
                >
                    <List>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/" >
                                                <ListItemText primary="Home" />
                                                {/* <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                        home
                                                </Button> */}
                                        </Link>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/roadmap" >
                                                <ListItemText primary="Roadmap" />
                                        </Link>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <ListItemText primary="sth else" />
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding component="a" href="https://discord.gg/vKaB2B8v">
                                <ListItemButton>
                                        <ListItemText primary="Discord" />
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                                <ListItemButton>
                                        <ListItemText primary="Twitter" />
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <ListItemText primary="Magic Eden" />
                                </ListItemButton>
                        </ListItem>
                        
                    </List>
                    <Divider />
                </Drawer>
            </Toolbar>
        )
    }

    return(
            // <nav>
            //     <Link to="/">Home</Link>
            //     <br />
            //     <Link to="/roadmap">roadmap</Link>
            //     <br />
            // </nav>
            <Box sx={{marginBottom:"80px"}}>
                <AppBar sx={{background:"black"}}>
                        {mobileView ? displayMobile():displayDesktop()}
                </AppBar>
        </Box>
    )
}

export default Navbar;