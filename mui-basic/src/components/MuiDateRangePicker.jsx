import {Box,TextField} from '@mui/material'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useState } from 'react'
const MuiDateRangePicker = () => {
    const [value,setValue] = useState(null);
    console.log({value})
  return (
    <Box width='500px'>
        <DateRangePicker startText='check-in' endText='Check-out' value={value} 
        onChange={(newValue)=>setValue(newValue)}
        renderInput={(startProps,endProps)=>(
            <>
                <TextField {...startProps} />
                <Box sx={{mx:2}}>to</Box>
                <TextField {...endProps} />
            </>
        )}
        
        />
    </Box>
  )
}

export default MuiDateRangePicker