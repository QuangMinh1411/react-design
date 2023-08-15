import {Tooltip,IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
const MuiToolTip = () => {
  return (
    <Tooltip title='delete' placement='bottom' 
        arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </Tooltip>
    
  )
}

export default MuiToolTip