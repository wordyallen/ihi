import React from 'react'
import {Paper, Subheader, Divider} from 'material-ui'
import PieChart from './pieChart'
import {Text, View} from 'react-native'
import { amber500, cyan500, cyan300,pink300, lime500,purple500, blue500, red500, blueGrey500} from 'material-ui/styles/colors'

export default class Pie extends React.Component {
  render (){
    const data = [
        {algebra: [{name: 'genset', value: 25}, {name: 'notDone', value: 75}]},
        {statistics: [{name: 'surplus', value: 25}, {name: 'notDone', value: 75}]},
        {linearAlgebra: [{name: 'grid', value: 25}, {name: 'notDone', value: 75}]},
        {rest: [{name: 'storage', value: 25}, {name: 'notDone', value: 75}]},

    ]
    const colors = [

        {algebra: [lime500, '#EAFABF']},
        {statistics: ['#00BBD6', '#BFEEF5']},
        {linearAlgebra: ['#BA65C9', '#EED8F1']},
        {rest: ['#EF3C79', '#FBCEDD']},

    ]
    return(

        <Paper  style={styles.paper} zDepth={2} rounded={true}>
          <Text style={{fontSize: 16, color:blueGrey500, marginBottom: 5}}>Energy Breakdown</Text>
          <Divider/>
          <View  style={{flexDirection: 'row',     flexWrap: 'wrap'}}>
            <PieChart key={1} colors={colors[0].algebra} data={data[0].algebra}/>
            <PieChart key={2} colors={colors[1].statistics} data={data[1].statistics}/>
            <PieChart key={3} colors={colors[2].linearAlgebra} data={data[2].linearAlgebra}/>
            <PieChart key={4} colors={colors[3].rest} data={data[3].rest}/>
          </View>

        </Paper>

    )
  }
}


const styles ={
  paper:{
    margin: '30px',
    display: 'flex',
    padding: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column'
  }

}
