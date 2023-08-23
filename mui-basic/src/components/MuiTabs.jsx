import {Box,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import { useState } from 'react'
import FavouriteIcon from '@mui/icons-material/Favorite'
const MuiTabs = () => {
    const [value,setValue] = useState('1')
    const handleValue = (e,newValue)=>{
        setValue(newValue);
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:'divider',width:'300px'}}>
                <TabList aria-label='Tabs example' 
                    onChange={handleValue}
                    textColor='secondary'
                    indicatorColor='secondary'
                    variant='scrollable'
                    scrollButtons='auto'    
                >
                    <Tab label='Tab 1' value='1' icon={<FavouriteIcon/>} iconPosition='start' />
                    <Tab label='Tab 2' value='2' disabled />
                    <Tab label='Tab 3' value='3' />
                    <Tab label='Tab 4' value='4' />
                    <Tab label='Tab 5' value='5' />
                    <Tab label='Tab 6' value='6' />
                </TabList>
            </Box>
            <TabPanel value='1'>Panel one</TabPanel>
            <TabPanel value='2'>Panel two</TabPanel>
            <TabPanel value='3'>Panel three</TabPanel>
            <TabPanel value='4'>Panel four</TabPanel>
            <TabPanel value='5'>Panel five</TabPanel>
            <TabPanel value='6'>Panel six</TabPanel>
        </TabContext>
        
    </Box>
  )
}

export default MuiTabs