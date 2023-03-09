import { useState } from "react"
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'
import bar from '../../assets/bar.PNG'
import './BarChart.css'
import graph from '../../assets/graph.PNG'
export default function BarChart({chartData}) {
let styleicon={
 
}
  return (
    <div className="HeaderBar">
        <img className="image1" src={bar} alt="" />
        <img className="image2" src={graph} alt="" />
    </div>
  )
     
    
  
}
