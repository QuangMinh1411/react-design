import { Stack,Alert,AlertTitle,Button } from '@mui/material'
import CheckIcon from "@mui/icons-material/Check"
const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>Error</Alert>
        <Alert severity='warning'>Warning</Alert>
        <Alert severity='info'>Info</Alert>
        <Alert severity='success'>Success</Alert>

        <Alert variant='outlined' severity='error' onClose={()=>alert('Close alert')}>
            <AlertTitle>Error</AlertTitle>
            Error
        </Alert>
        <Alert variant='outlined' severity='warning'>
            <AlertTitle>Warning</AlertTitle>
            Warning</Alert>
        <Alert variant='outlined' severity='info'>
            <AlertTitle>Infor</AlertTitle>
            Info
        </Alert>
        <Alert variant='outlined' severity='success'>
            <AlertTitle>Success</AlertTitle>
            Success</Alert>

        <Alert variant='filled' severity='error'>Error</Alert>
        <Alert variant='filled' severity='warning'>Warning</Alert>
        <Alert variant='filled' severity='info'>Info</Alert>
        <Alert variant='filled' severity='success' 
            icon={<CheckIcon/>}
            action={
                <Button color='inherit' size='small'>
                    Undo
                </Button>
            }
        >
            <AlertTitle >Success</AlertTitle>
            Success
        </Alert>
    </Stack>
  )
}

export default MuiAlert