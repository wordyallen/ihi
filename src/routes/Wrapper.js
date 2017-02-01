import React, { Component } from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {MuiThemeProvider,getMuiTheme} from 'material-ui/styles'
import {FlatButton, IconButton, AppBar,IconMenu, MenuItem} from 'material-ui'
import {Link} from 'react-router'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {blueGrey500, grey200, cyan300} from 'material-ui/styles/colors';
import {Tabs, Bar} from '../components'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan300,
  },
  appBar: {
    height: 47,
  },
});

export default class extends Component{

  createItems = () =>  ['home']
    .map(
      (item, i) => (
        <MenuItem containerElement={<Link to={`/${item}`} />}
                  key={i}
                  primaryText={item.replace(/^[a-z]/g, (L) => L.toUpperCase())}
        />
      )
    )


  render (){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        {/* <View style={{position: 'fixed', width:'100%'}}> */}
        <View>
          <Bar/>
          <Tabs />

        </View>
      </MuiThemeProvider>


    )
  }
}



const styles = StyleSheet.create({
  content: {
    marginTop:65
  },
  logo:{
    height: 45,
    borderRadius: 50
  },

});
