import  React, { Component } from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'
import {RaisedButton, TextField} from 'material-ui';
import { amber500, cyan500, cyan300,pink300, lime500,purple500, blue500, red500} from 'material-ui/styles/colors'


export default class  extends Component{



  makeButtons = data => data.map( (d, i)=><RaisedButton key={i} label={d.label} labelStyle={{whiteSpace:'nowrap'}} backgroundColor={d.color} labelColor={'white'} style={styles.button}/> )

  render (){
    return(
      <View style={styles.container}>
        {this.makeButtons([
          {color: lime500, label: 'Scenario Check' },
          {color: cyan500, label: 'Parametric Analysis' },
          {color: '#BA65C9', label: 'Single Run'},
        ])}
        <TextField
          inputStyle={{fontFamily: 'Roboto Mono'}}
          floatingLabelText='0%'
          floatingLabelStyle={{marginLeft: 15}}
          type='number'
          style={{margin: '0px 12px 12px 12px', width: 50}}
        />
        {this.makeButtons([
          {color: amber500, label: 'ESS Stats' },
          {color: red500, label: 'Project Financials' },
          {color: blue500, label: 'Detailed Dispatch'},
        ])}
      </View>
    )
  }
}


const styles = {
  container:{
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  }
}
