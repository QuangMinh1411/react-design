import { useState } from 'react';
import './App.css';
import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography"
// import MuiText from './components/MuiText';
// import MuiSelect from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckBox from './components/MuiCheckBox';
import MuiSwitch from './components/MuiSwitch';
import { useEffect } from 'react';
// import MuiRating from './components/MuiRating';
function App() {
  const [dark,setDark] = useState(false);
    
  const changeBackground = (e)=>{
        setDark(e.target.checked)
    }
    useEffect(()=>{
      Boom(dark);
    },[dark])
  const Boom = (value)=>{
    if(value){
      document.body.style.backgroundColor='black'
      document.body.style.color = 'white'
    }
    else{
      document.body.style.backgroundColor='white'
      document.body.style.color = 'black'
    }
  }
    console.log(dark)
  return (
    <div className="App" >
      {/* <MuiButton />
      <MuiTypography /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      <MuiSwitch handleChange={changeBackground} checked={dark} />
      {/* <MuiRating /> */}
      <MuiAutocomplete />
    </div>
  )
}

export default App
