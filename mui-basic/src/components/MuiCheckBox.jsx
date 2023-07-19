import {useState} from 'react'
import { Box,FormControlLabel,Checkbox } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
const MuiCheckBox = () => {
    const [acceptTnc,setAcceptTnc] = useState(false)
    const handleChange = (e)=>{
        setAcceptTnc(e.target.checked)
    }
    console.log(acceptTnc)
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' 
            control={<Checkbox checked={acceptTnc} onChange={handleChange} />}/>

        </Box>
        <Box>
          <Checkbox 
            icon={<BookmarkBorderIcon />} 
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnc}  
            onChange ={handleChange}
          />
        </Box>
    </Box>
  )
}

export default MuiCheckBox