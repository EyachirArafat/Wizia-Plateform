import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import {Tabs, Tab, Button, Typography, useMediaQuery, createTheme} from '@mui/material'
import NavDrawer from './NavDrawer';

// images
import logo from '../assets/logo.png'
import { useState } from 'react';

function Header(){
  const HeaderIcon = ["About", "Services", "Projects", "Contacts"]
  const Theme = createTheme({
    breakpoints: {
      values: {
        md: 768
      }
    }
  })
  
  const isMatch = useMediaQuery(Theme.breakpoints.down('md'));
  const [newValue, setNewValue] = useState(false);
  return(
    <div>
      <AppBar elevation={0} className='bg-slate-50 fixed md:py-2'>
        <Toolbar className='flex justify-between items-center'>
          <img src={logo} alt="logo" className='h-10 md:h-16' />
            {
              isMatch ? (
                <>
                  <NavDrawer />
                </>
              ):(
                <>
                  <Tabs onChange={(e, newValue)=>(setNewValue(newValue))} value={newValue}>
                    {
                      HeaderIcon.map((list, index)=>(
                        <Tab key={index} label={list} className='lg:text-lg'/>
                      ))
                    }
                
                    <div className='flex justify-center items-center w-full'>
                      <div className='flex gap-2'>
                        <Button variant='contained' className='text-[#2AB691] bg-[#2AB691] bg-opacity-10 shadow-none active:shadow-xl active:outline-2 active:outline-[#2AB691] lg:text-lg'>LogIn</Button>
                        <Button variant='contained' className=' text-white bg-[#2AB691] shadow-none active:shadow-xl lg:text-lg'>SignUp</Button>
                      </div>
                    </div>
                  </Tabs>
                </>
              )
            }
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Header;