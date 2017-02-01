import React, {Component} from 'react'
import {View} from 'react-native'
import {Paper} from 'material-ui'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import StackedAreaChart from './stackedAreaChart'

export default class extends Component{
  render(){
    const {data, colors} = this.props
    return(

      <Paper style={s.paper}  zDepth={2} rounded={true}>
        <AreaChart width={870} height={300} data={data} margin={{top: 30, right: 40, left: 0, botton:40}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stackId="1" stroke='transparent' fill={colors[0]} />
          <Area type='monotone' dataKey='amt' stackId="1" stroke='transparent' fill={colors[1]} />
        </AreaChart>
      </Paper>



  )}
}

const s={
  paper:{
    margin: '10px 0px',
    display: 'flex',
    padding: '20px 1em',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}
