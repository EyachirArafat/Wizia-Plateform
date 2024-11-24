import React from 'react';
import { useState } from 'react';
import { Box, Drawer,List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';

// Icons
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function NavDrawer(){
  const NavList = [
    {
      id: 1,
      icon: <DashboardIcon />,
      text: "DashBoard"
    },
    {
      id: 2,
      icon: <InfoIcon />,
      text: "About"
    },
    {
      id: 3,
      icon: <WorkIcon />,
      text: "Services"
    },
    {
      id: 4,
      icon: <AccountTreeIcon />,
      text: "Projects"
    },
    {
      id: 5,
      icon: <ContactsIcon />,
      text: "Contacts"
    },
    {
      id: 6,
      icon: <LoginIcon />,
      text: "LogIn"
    },
    {
      id: 7,
      icon: <PersonAddIcon />,
      text: "SignUp"
    },
  ]

  const [openDrawer, setOpenDrawer] = useState(false)
  return(
    <div>
      <Box sx={{display: "flex", width: "100%"}}>
        <Drawer anchor='left' open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
            {
              NavList.map((list)=>(
                <React.Fragment key={list.id}>
                  <ListItemButton onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>{list.icon}</ListItemIcon>
                    <ListItemText>{list.text}</ListItemText>
                  </ListItemButton>
                  {list.text === "Contacts" && <Divider/>}
                  {list.text === "DashBoard" && <Divider/>}
                </React.Fragment>
              ))
            }
             
            
          </List>
        </Drawer>
        <IconButton onClick={()=>setOpenDrawer(!false)}><MenuIcon/></IconButton>
      </Box>
    </div>
  )
}

export default NavDrawer;