import  React, { Component } from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'
import {ButtonBar, AreaChart, PieBar} from '../components'
import {RaisedButton, Divider} from 'material-ui';
import {blueGrey500} from 'material-ui/styles/colors'


export default class  extends Component{

  render (){
    const data1 = [
          {name: '__ A', pv: 24, amt: 23},
          {name: '__ B', pv: 13, amt: 21},
          {name: '__ C', pv: 98, amt: 27},
          {name: '__ D', pv: 39, amt: 21},
          {name: '__ E', pv: 48, amt: 21},
          {name: '__ F', pv: 38, amt: 29},
          {name: '__ G', pv: 43, amt: 25},
    ];
    const data2 = [
          {name: '__ A', pv: 43, amt: 25},
          {name: '__ B', pv: 13, amt: 21},
          {name: '__ C', pv: 30, amt: 27},
          {name: '__ D', pv: 69, amt: 21},
          {name: '__ E', pv: 69, amt: 21},
          {name: '__ F', pv: 38, amt: 29},
          {name: '__ G', pv: 100, amt: 23},
    ];
    const data3 = [
          {name: '__ A', pv: 43, amt: 25},
          {name: '__ B', pv: 100, amt: 50},
          {name: '__ C', pv: 30, amt: 27},
          {name: '__ D', pv: 69, amt: 21},
          {name: '__ E', pv: 69, amt: 21},
          {name: '__ F', pv: 38, amt: 29},
          {name: '__ G', pv: 100, amt: 23},
    ];
    const colors = [
        {algebra: ['#ACEC00', '#EAFABF']},
        {statistics: ['#00BBD6', '#BFEEF5']},
        {linearAlgebra: ['#BA65C9', '#EED8F1']},
        {rest: ['#EF3C79', '#FBCEDD']},

    ]
    return(
      <View style={styles.container} >
        <ButtonBar/>
        <Divider inset={true} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Detailed Dis  patch:</Text>
        </View>
        <PieBar/>
        <AreaChart  data={data1} colors={colors[1].statistics}/>
        <AreaChart data={data2} colors={colors[3].rest}/>
        <AreaChart data={data3} colors={colors[2].linearAlgebra}/>
      </View>
    )
  }
}

const styles={
  container:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  header:{
    marginLeft: 100,
    alignSelf: 'flex-start'
  },
  headerText:{
    fontSize: 30,
    fontWeight: '400',
    color: blueGrey500,
    marginBottom: 10,
  }
}
