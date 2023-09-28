
import { useEffect, useState, useRef } from "react"
import {select, line, scaleLinear, axisBottom } from 'd3'
import {faker} from '@faker-js/faker'
import * as results from './AAPL.json'

export default function Chart()
{
  const [stuff, setData] = useState([])
    const svgRef = useRef()
   
  useEffect(() => {
    const svg = select(svgRef.current);

    setData(results.results.map((value) => value.c))

    
    

  }, [])


    return (<svg ref={svgRef} > </svg>)
}