import { useState } from 'react'
import { Stack, TextField } from '@mui/material'

import { TimePicker,DatePicker,DateTimePicker } from '@mui/x-date-pickers'
const MuiPicker = () => {
    const [selectedDate,setSelectedDate] = useState(null)
    const [selectedTime,setSelectedTime] = useState(null)
    const [selectedDateTime,setSelectedDateTime] = useState(null)
    console.log(selectedDate,selectedTime&&selectedTime.toLocaleTimeString())
  return (
    <Stack spacing={4} sx={{width:'250px'}}>
        <DatePicker label='Date picker' 
        renderInput={(params)=><TextField {...params}/>}
        value={selectedDate}
        onChange={(newValue)=>{
            setSelectedDate(newValue)
        }}
        />
        <TimePicker label='Time picker' 
        renderInput={(params)=><TextField {...params}/>}
        value={selectedTime}
        onChange={(newValue)=>{
            setSelectedTime(newValue)
        }}
        />

        <DateTimePicker label='Date time picker' 
        renderInput={(params)=><TextField {...params}/>}
        value={selectedDateTime}
        onChange={(newValue)=>{
            setSelectedDateTime(newValue)
        }}
        />
    </Stack>
  )
}

export default MuiPicker