import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'



function App() {
  const person = [
    {name: "umer" , city: "karachi"},
    {name: "umer2" , city: "karachi2"},
    {name: "umer3" , city: "karachi3"},
    {name: "umer4" , city: "karachi4"},
  ]

  const [data,setData] = useState([]);
 
useEffect(()=>{
  axios.get('http://universities.hipolabs.com/search?country=Pakistan').then((response)=>{
    setData(response.data)
  })
},[])
  

    return (
      <>

         {person.map( (per,index)=> { return (<li> {per.name +" "+ per.city} </li>)}   )}

         
          

<table border={"2px"}>
  
  
    {data.map( (dat,index)=> { return (<tr> {dat.name +" "+ dat.country} </tr>)}   )}
  
 
</table>

      </>
    )
}

export default App
