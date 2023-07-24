import React from 'react'
import { Stack,ImageList,ImageListItem,Box,ImageListItemBar } from '@mui/material'
const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList 
            sx={{width:500,height:450}}
            columns={3}    
            rowHeight={164}
        >
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))
            }
        </ImageList>

        <ImageList
            variant='woven' 
            sx={{width:500,height:450}}
            columns={3}    
            gap={8}
        >
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))
            }
        </ImageList>
        <Box sx={{width:500,height:450,overflowY:'scroll'}}>
        <ImageList 
            variant='masonry'
            columns={3}    
            gap={8}
        >
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                    </ImageListItem>
                ))
            }
        </ImageList>
        </Box>
    </Stack>
  )
}
const itemData = [
    {
        img:'https://plus.unsplash.com/premium_photo-1682855669043-fd359f155d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=805&q=80',
        title:'Dessert'
    },
    {
        img:'https://images.unsplash.com/photo-1690148136337-2304c30b5420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title:'Winter moutain'
    },
    {
        img:'https://images.unsplash.com/photo-1689857272599-d8352477b250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1151&q=80',
        title:'Night moon'
    },
    {
        img:'https://images.unsplash.com/photo-1689361319907-a7c75f63600b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title:'Sea wave'
    },
    {
        img:'https://images.unsplash.com/photo-1688499693696-9c754d94a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        title:'Sky sunset'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1689693057880-cdb87cbba871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
        title:'Candle'
    },
    {
        img:'https://images.unsplash.com/photo-1682687981603-ae874bf432f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        title:'Sea bed'
    },
    {
        img:'https://images.unsplash.com/photo-1690088141648-3d6d6757cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
        title:'Group people'
    }
    

]
export default MuiImageList