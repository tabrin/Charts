import React from 'react'
import "./ReChart.css";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area, BarChart, Bar} from 'recharts'

const Sdata =[
    {
    name:'Pythone',
    student:25,
    fees:1000
},
    {
    name:'C#',
    student:20,
    fees:100
},
    {
    name:'Java',
    student:30,
    fees:200
},
    {
    name:'SAP',
    student:13,
    fees:400
},
    {
    name:'PHP',
    student:19,
    fees:300
},
    {
    name:'C++',
    student:17,
    fees:500
},
]
const Chart:React.FC=()=>{

    return(
        <>
        <div>
            <h1 className='line-heading'>Line Chart</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={Sdata}width={300}  height={200} margin={{top:5, right:30, left:20, bottom:5}}>
                    <CartesianGrid />
                    <XAxis dataKey="name" interval={'preserveStartEnd'}/>
                    <YAxis/>
                    <Tooltip contentStyle={{background:"yellow"}}/>
                    <Line type={'monotone'} dataKey="student" stroke='red' activeDot={{r:7}}/> 
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>

            <h1 className='area-heading'>Area Chart</h1>
            <ResponsiveContainer width='100%' aspect={3}>
                <AreaChart
                width={300}
                height={200}
                data={Sdata}
                margin={{
                    top:5, right:30, left:20, bottom:5
                }}
                >
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area type='monotone' dataKey="student" stroke='MediumSeaGreen' fill='SlateBlue'/>
                </AreaChart>
            </ResponsiveContainer>


            <h1 className='bar-heading'>Bar Chart</h1>
            <ResponsiveContainer width='100%' aspect={3}>
                <BarChart
                width={400}
                height={200}
                data={Sdata}
                margin={{
                    top:5, right:30, left:20, bottom:5
                }}
                >
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar type='monotone' dataKey="student" stroke='red' fill='DodgerBlue'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </>
    )
}
export default Chart;