import React from 'react'
import {Paper} from 'material-ui'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

export default class StackedAreaChart extends React.Component{
  render(){
    const {data, colors} = this.props
    return(
        <AreaChart width={870} height={300} data={data} margin={{top: 30, right: 40, left: 0, botton:40}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stackId="1" stroke='transparent' fill={colors[0]} />
          <Area type='monotone' dataKey='amt' stackId="1" stroke='transparent' fill={colors[1]} />
        </AreaChart>
    )
  }
}
