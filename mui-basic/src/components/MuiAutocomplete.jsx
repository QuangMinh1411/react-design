import { Stack,Autocomplete,TextField } from "@mui/material"
import { useState } from "react"


const skills = ['HTML','CSS','Javascript','Typescript','React']

const skillOptions = skills.map((skill,idx)=>({
    id:idx+1,
    label:skill  
}))
const MuiAutocomplete = () => {
    const [value,setValue] = useState(null)
    const [skill,setSkill] = useState(null)
    console.log(value)
    console.log(skill)
    return (
    <Stack space={2} width='250px'>
        <Autocomplete options={skills} 
        renderInput={(params)=><TextField {...params} label='Skills' />}
        value={value} onChange={(e,newValue)=>setValue(newValue)}
        freeSolo
        />

        <Autocomplete options={skillOptions} 
        renderInput={(params)=><TextField {...params} label='Skills' />}
        value={skill} onChange={(e,newSkill)=>setSkill(newSkill)}
        
        />
    </Stack>
  )
}

export default MuiAutocomplete