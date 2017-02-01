import React from 'react'
import {Paper, FloatingActionButton} from 'material-ui'
import  { PieChart, Pie, Sector, Cell } from 'recharts'
import {RaisedButton, FontIcon} from 'material-ui';


export default React.createClass({
  render (){
    const {data, colors} =this.props
    return(
        <div style={s.container}>
          <p style={s.percent}>{data[0].value}%</p>
          <PieChart style={s.pie} width={200} height={200} onMouseEnter={this.onPieEnter}>

          <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          >
          {
            data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
          }
          </Pie>
          </PieChart>
          <div style={s.buttonContainer}>
            <RaisedButton
            label={data[0].name}
            href="#"
            labelColor={'white'}
            style={s.button}
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            backgroundColor={colors[0]}
            />
          </div>


        </div>

    )
  }
})

const s ={
  container:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  pie:{
    marginBottom: 10,

  },
  percent:{
    color: 'slategrey',
    fontSize: 50,
    fontWeight: '300',
    position: 'absolute',
    top: 42,
    left: 58,
  },
  buttonContainer:{
    display:'flex',
    justifyContent: 'center'
  },
  button:{
    display: 'inline-block',
    marginBottom: 15
  }

}
