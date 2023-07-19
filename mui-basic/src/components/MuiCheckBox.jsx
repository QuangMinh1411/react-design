import {useState} from 'react'
import { Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup,FormHelperText } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
const MuiCheckBox = () => {
    const [acceptTnc,setAcceptTnc] = useState(false)
    const [skills,setSkills] = useState([])
    const handleChange = (e)=>{
        setAcceptTnc(e.target.checked)
    }
    const handleSkillChange = (e)=>{
      const index = skills.indexOf(e.target.value)
      if(index===-1){
        setSkills(prev=>[...prev,e.target.value])
      }else{
        setSkills(skills.filter(skill=>skill!==e.target.value))
      }
    }
    console.log(acceptTnc)
    console.log(skills)
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' 
            control={<Checkbox size='small' color='secondary' checked={acceptTnc} onChange={handleChange} />}/>

        </Box>
        <Box>
          <Checkbox 
            icon={<BookmarkBorderIcon />} 
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnc}  
            onChange ={handleChange}
          />
        </Box>
        <Box>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
            <FormControlLabel label='HTML' 
            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />}/>
            <FormControlLabel label='CSS' 
            control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />}/>
            <FormControlLabel label='Javascript' 
            control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />}/>
            </FormGroup>
            <FormHelperText>Invalid selection</FormHelperText>
          </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox