import React, { useState,useEffect } from 'react'
import '../App.css'
import { borderChange, borderInit, headInit } from './Display'
const arr=[]
const DisplayList = () => {
  const [data, setData] = useState([])
  const [resdata,setResdata]=useState([])
  const [btcolor, setBtcolor] = useState('#1E90FF')
  const [borderColor, setBorderColor] = useState(borderInit)
  const[header,setHeader]=useState('#00BFFF')
  console.log("data",data)
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async() => {
    const response = await fetch('https://catfact.ninja/fact')
      .then(response => { return response.json() })
      const res = response.fact
    setData([...data, res])
    const count = data.filter((item) => item).length
    console.log("count",count)
   if(count < 10){
      setResdata([...resdata,res])
    }
  }
  const changeColor = () => {
    btcolor === '#1E90FF' ? setBtcolor('#2E8B57') : setBtcolor('#1E90FF')
  }
  const changeBorder = () => {
    borderColor === borderInit ? setBorderColor(borderChange):setBorderColor(borderInit)
  }
  const headerChange = () => {
    header==='#00BFFF'? setHeader('#3CB371'): setHeader('#00BFFF')
  }
  return (
    <div className='container' style={{border: borderColor}}>
      <h1 style={{ ...headInit, background: header }}>List of Facts</h1>
      {resdata.map((item) =>
        <ul className='a'>
          <li className='li'>{item}</li>
        </ul>
  )}
      <div className='center'>
        <button className='button' style={{ background: btcolor }} onClick={() => { fetchData(); changeColor(); changeBorder(); headerChange()}}>Click Me</button>
        </div>
    </div>
  )
}

export default DisplayList
