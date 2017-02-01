import React, { Component } from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {MuiThemeProvider} from 'material-ui/styles'
import {FlatButton, IconButton, AppBar,IconMenu, MenuItem, Drawer, TextField} from 'material-ui'
import {Link} from 'react-router'
import MoreVertIcon from 'material-ui/svg-icons/action/search'
import Menu from 'material-ui/svg-icons/navigation/menu'
import Tabs from './Tabs'
import DrawerContent from './DrawerContent'
import {blueGrey500, grey200} from 'material-ui/styles/colors';

export default class extends Component{

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render (){
    return(
          <View >
            <Drawer
              width={300}
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              style={{zIndex: 100000, }}
            >
              <DrawerContent />
            </Drawer>

            <AppBar

              style={{backgroundColor:blueGrey500}}
              title="IHI"
              iconElementLeft={
                <View>
                  <View style={styles.leftBar}>
                    <IconButton onTouchTap={this.handleToggle}>
                      <Menu  color='white'/>
                    </IconButton>
                    <Image style={styles.logo}  source={require('../assets/logo.white.png')} />
                  </View>
                </View>



              }
              iconElementRight={
                <IconButton><MoreVertIcon /></IconButton>
              }
            />
          </View>
    )
  }
}



const styles = StyleSheet.create({
  logo:{
    height: 25,
    marginTop: 10,
  },
  leftBar:{
    flexDirection:'row',
  }
})
