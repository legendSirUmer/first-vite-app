import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Child from './child'

function App() {
  const [count,setCount] = useState([])
  const [data ,setData ] = useState([])
  const [data2,setData2] = useState([])
  const [data3,setData3] = useState({})
  const [data4,setData4] = useState({})
  const [data5,setData5] = useState({})
  const [data6,setData6] = useState('')
  const [inputValue, setInputValue] = useState('');
  let [value,setValue] = useState('') 

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     axios.get('https://api.agify.io/?name='+inputValue).then((res)=>{
          setData5(res.data)
          console.log(data5)
        })

  };
  

  useEffect(()=>{

        // axios.get('http://127.0.0.1:8000/userapiprofile/?format=json').then((res)=>{
        // setCount(res.data)    
        // }) //// with django rest framework project

        axios.get('http://universities.hipolabs.com/search?country=Pakistan').then((res)=>{
          setData(res.data)
        })
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((res)=>{
          setData2(res.data.data)
        })
        axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>{
          setData3(res.data)
        })
        axios.get('https://catfact.ninja/fact').then((res)=>{
          setData4(res.data)
        })
       

  },[])

  // {count.map((movie,index)=> (  <li> {movie.user}  <img  src={movie.profileimg} alt="" /> </li> ))} //// with django rest framework project 
  return (
   <div>

    
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


<div>
  <h4>Random Cat Fact</h4>
  <p>{data4.fact}</p>
</div>




    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    {data5.age && (
      <p>{"Age: "+data5.age}</p>
    )}




<div>
      <h1>Value from Child: {value}</h1>
      <Child onValueChange={handleValueChange} />
    </div>


    
   </div>
  )
  
}

export default App