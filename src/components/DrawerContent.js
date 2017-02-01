import  React, { Component } from 'react'
import {Toggle, RaisedButton,IconMenu, MenuItem, TextField, FontIcon, Subheader} from 'material-ui'
import {Link} from 'react-router'
import {StyleSheet, Text, View, Image} from 'react-native'
import {blueGrey600, amber500, blueGrey900, brown500, grey100, grey200, grey500, cyan500, cyan300,pink300, lime600,purple500, blue500, cyan200} from 'material-ui/styles/colors'
import {List, ListItem} from 'material-ui/List'
import PowerIcon from 'material-ui/svg-icons/notification/power';
import Caret from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import Charge from 'material-ui/svg-icons/device/battery-charging-full'
import Cost from 'material-ui/svg-icons/editor/monetization-on'


export default class extends Component{
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  appItems = (...items) =>items.map((text, i)=>(
    <ListItem         key={i}>
      <TextField
        style={{width:'85%'}}
        inputStyle={{color: 'white', fontFamily: 'Roboto Mono'}}
        floatingLabelStyle={{color: cyan200, fontSize: 14}}
        floatingLabelFocusStyle={{color: cyan300}}
        floatingLabelText={text}
        type='number'
      />
    </ListItem>

    ))


  render (){
    return(
     <View style={styles.container}>
       <View style={{padding:10}}>
         <View style={styles.buttons}>
           <RaisedButton label="General" backgroundColor={cyan300} labelStyle={styles.label} style={styles.button} />
           <RaisedButton label="Scenario" backgroundColor={cyan300} labelStyle={styles.label} style={styles.button} />
         </View>
         <View style={styles.buttons}>
           <RaisedButton label="Incentives" backgroundColor={cyan300} labelStyle={styles.label} style={styles.button} />
           <RaisedButton label="Genset" backgroundColor={cyan300} labelStyle={styles.label} style={styles.button} />
           <RaisedButton label="ESS" backgroundColor={cyan300} labelStyle={styles.label} style={styles.button} />
         </View>
       </View>
       <List  style={{marginTop: 30, color: 'white'}}>
         <ListItem
           hoverColor={cyan500}
           style={{color:'white', fontSize:14}}

           leftIcon={<PowerIcon color={'white'}/>}
           rightIcon={<Caret color={'white'}/>}

           primaryText="Energy Analysis"
           initiallyOpen={false}
           primaryTogglesNestedList={true}
           nestedItems={this.appItems('Rated Power  [ kW ]', 'Rated Energy [ kW•h ]', 'AC-AC efficency [ % ]')}
         />
         <ListItem
           hoverColor={cyan500}
           style={{color:'white', fontSize:14}}

           leftIcon={<Charge color={'white'}/>}
           rightIcon={<Caret color={'white'}/>}

           primaryText="Charge Analysis"
           initiallyOpen={false}
           primaryTogglesNestedList={true}
           nestedItems={this.appItems('Target SOC [ % ]', 'Application DoD [ % ]')
           .concat([
             <ListItem key={3}>
               <Toggle
                 label="Future Replenishments"
                 labelStyle={styles.toggleLabel}
               />
             </ListItem>])
           .concat([
             <ListItem
              key={4}
              nestedItems={this.appItems('SOC Life Contraction [ 0-1 ]')}
              rightIcon={<Caret color={'white'} style={{marginTop:50}}/>}
              primaryTogglesNestedList={true}
             >
               <TextField
                 inputStyle={{color: 'white', fontFamily: 'Roboto Mono'}}
                 floatingLabelStyle={{color: cyan200, fontSize: 14}}
                 floatingLabelFocusStyle={{color: cyan300}}
                 floatingLabelText='Shelf to 80% of Init Cap [ yr ]'
                 type='number'
                 style={{width: '85%'}}

               />
             </ListItem>
          ])
           }
         />
         <ListItem
           hoverColor={cyan500}
           style={{color:'white', fontSize:14}}

           leftIcon={<Cost color={'white'}/>}
           rightIcon={<Caret color={'white'}/>}

           primaryText="Cost Analysis"
           initiallyOpen={false}
           primaryTogglesNestedList={true}
           nestedItems={
             this.appItems(
               'ES Cost [ $/kWh]',
               'ES Cost Reduction [ %/yr ]',
               'ES Cost Floor [ $/kW•h ]',
               'Power Element Cost [ $/kW•h]',
               'Fixed Cost Adder [ $ ]',
               'EPC Cost [ $/kW•h ]',
               'EPC Cost [ $/kW ]',
               'EPC Margin [ % ]',
               'VOM [ $/kW•yr ]',
             )
             .concat([
               <ListItem
                key={11}
                nestedItems={this.appItems(
                  'Lever [ % ]',
                  'Debt Term [ yr ]',
                  'Debt Interest Rate [ %/yr ]'
                )}
                rightIcon={<Caret color={'white'} style={{marginTop:50}}/>}
                primaryTogglesNestedList={true}
               >
                 <TextField
                   inputStyle={{color: 'white', fontFamily: 'Roboto Mono'}}
                   floatingLabelStyle={{color: cyan200, fontSize: 14}}
                   floatingLabelFocusStyle={{color: cyan300}}
                   floatingLabelText='FOM [ $/kW•yr ]'
                   type='number'
                   style={{width: '85%'}}

                 />
               </ListItem>
             ])
           }
         />
       </List>
       <View style={{padding:10}}>
          <RaisedButton label="Equipment Panel" backgroundColor={amber500}  labelStyle={{fontSize: 12, color: brown500}} style={styles.button} />

            <RaisedButton label="Input Equipment" backgroundColor={amber500}  labelStyle={{fontSize: 12, color: brown500}}  style={styles.button} />

            <Toggle  style={styles.toggle} labelStyle={styles.toggleLabel} label='Enforce'/>

       </View>
     </View>
    )
  }
}



const styles = {
  icon:{
    color: 'white'
  },
  container:{
    backgroundColor:blueGrey600,
    height: 5000,

  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',

  },
  label:{
    color:'white',
    fontSize: 12,
    paddingLeft:5,
    paddingRight:5,
  },
  button:{
    margin:3,
    flex:1,
  },
  header:{
    marginTop:30,
    marginBottom: 20,
    fontSize: 20,
    color: blueGrey600
  },
  panel:{
    margin:'0px 10px',
    padding: '10px 20px'
  },
  toggle:{

    width: '90%',
    margin:10
  },
  toggleLabel:{
    color: 'white',
    fontSize: 14,
    fontWeight: 300,

  },
}
