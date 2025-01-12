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
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
 
useEffect(()=>{
  axios.get('http://universities.hipolabs.com/search?country=Pakistan').then((response)=>{
    setData(response.data)
  })
},[])

useEffect(()=>{
  axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((res)=>{
    setData2(res.data.data)
  })

  axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>{
    setData3(res.data)
  })
} ,[])



  

    return (
      <>

         {/* {person.map( (per,index)=> { return (<li> {per.name +" "+ per.city} </li>)}   )} */}

         
          

<table border={"2px"}>
  <thead>

  
  <tr>
    <th>Company</th>
    <th>Country</th>
    <th>Alpha Code</th>
  </tr>
  </thead>

  <tbody>

  {data.slice(0,5).map( (dat,index)=> {return(<tr key={index}><td>{dat.name}</td><td>{dat.country}</td><td>{dat.alpha_two_code}</td></tr>)}   )}

  </tbody>

 
</table>

<br />
<table border={"2px"}>
  
  <thead>
  <tr>
    <th>Country</th>
    <th>Year</th>
    <th>Population</th>
  </tr>
  </thead>

  <tbody>
  {data2.map( (dat,index)=> (( <tr key={index}><td>{dat.Nation}</td><td>{dat.Year}</td><td>{dat.Population}</td></tr>)   ))}
  </tbody>

 
</table>

<div>

  <img src={data3.message} alt="" />
</div>


      </>
    )
}

export default App
