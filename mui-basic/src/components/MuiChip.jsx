import {Stack,Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'
const MuiChip = () => {
    const [chips,setChips] = useState(['Chip 1','Chip 2','Chip 3'])
    const handleDelete = (chipDel)=>{
        setChips(chips=>chips.filter(chip=>chip!==chipDel))
    }
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>
        <Chip label='Chip outline' color='secondary' 
            size='small' variant='outlined'
            avatar={<Avatar>V</Avatar>}
            />
        <Chip label='Click' color='success' onClick={()=>alert('Click')} />
        <Chip 
            label='Delete'
            color='error'
            onClick={()=>alert('Click')}
            onDelete={()=>alert('Delete Handler called')}
        />
        {
            chips.map(chip=>(
                <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)} />
            ))
        }
    </Stack>
  )
}

export default MuiChip