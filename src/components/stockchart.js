
import { useEffect, useState, useRef } from "react"
import {select, line, scaleLinear, axisBottom } from 'd3'
import {faker} from '@faker-js/faker'
import results from './AAPL.json'

export default function Chart()
{
  const [stuff, setData] = useState([])
    const svgRef = useRef()
   
  useEffect(() => {
    const svg = select(svgRef.current);

    setData(...stuff, [results.results.map((value) => {
      
      
    let arr =  []
    let n = new Date()
    
    let i = 0;

   
      
      arr.push([value.c, new Date(n.getTime() + ++i * 60000).toISOString()])
    
    
    
      return arr

    }),])

    
   

  }, [])

  console.log(stuff)
    return (<svg ref={svgRef} > </svg>)
}