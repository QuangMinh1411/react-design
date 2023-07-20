import React from 'react'
import { Rating, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'
const MuiRating = () => {
    const [value,setValue] = useState(null)
    const handleChange = (e,newValue)=>{
        setValue(newValue)
    }
    console.log(value)
  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} 
        precision={0.5} size='large'
        icon={<FavoriteIcon fontSize='inherit' color='success' />} 
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        />

    </Stack>
  )
}

export default MuiRating