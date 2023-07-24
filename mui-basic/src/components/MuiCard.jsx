import React from 'react'
import { Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'
const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
                component='img'
                height='140px'
                image='https://source.unsplash.com/random'
                alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Provident at velit consectetur nulla exercitationem, rem quod rerum ipsa consequatur explicabo, dolore dolor ex repellendus quae qui dicta amet, soluta accusamus?</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard