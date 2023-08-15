import { useState,forwardRef } from 'react'
import { Snackbar,Button,Alert} from '@mui/material'
// const SnackBarAlert = forwardRef<HTMLElement,AlertProps>(
//     function SnackBarAlert(props,ref) {
//         return <Alert elevation={6} ref={ref} {...props} />
//     }
// ) 
const MuiSnackBar = () => {
    const [open,setOpen] = useState(false)
    const handleClose = (e,reason)=>{
        if(reason=='clickaway')
        return
        setOpen(false)
    }
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Submit</Button>
        <Snackbar message='submit successfully' 
            autoHideDuration={4000} open={open}
            onClose={handleClose}
            anchorOrigin={{
                horizontal:'center',
                vertical:'bottom'
            }}
            />
        {/* <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
            <SnackBarAlert onClose={handleClose} severity = 'success'>
                Form Submitted
            </SnackBarAlert>
        </Snackbar> */}
    </>
  )
}

export default MuiSnackBar