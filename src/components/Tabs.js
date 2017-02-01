import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {StyleSheet, View, Text,Image} from 'react-native'
import {cyan200, blueGrey500} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import Analyzer from '../views/Analyzer'

const styles = StyleSheet.create({
  headline: {
    fontSize: 24,
    paddingTop: 16,
    margin: 12,
  },
  logo:{
    height: 20,

  },
  container:{
    width:'100%'
  }

})

const iconStyles ={
  marginRight: 20,
  color: 'white',
  fontSize: 16,
}



const handleActive = tab => console.log(`A tab with this route property ${tab.props['data-route']} was activated.`)



export default () => (
  <Tabs

    inkBarStyle={{backgroundColor: cyan200}}
    tabItemContainerStyle={{backgroundColor:blueGrey500}}
    style={{position: 'absolute', zIndex:10000, width:'80%', marginLeft: '10%'  }}
  >
   {/* <Tabs inkBarStyle={{backgroundColor: cyan200}}> */}
      <Tab
        label={
          <View style={{flexDirection:'row'}}>
            <FontIcon className="icon-analyzer" style={{
              marginRight: 25,
              color: 'white',
              fontSize: 16,
            }} />
            <Text>analyzer</Text>
          </View>
        }
      >
    <Analyzer />
    </Tab>
    <Tab
      label={
        <View style={{flexDirection:'row'}}>
          <FontIcon className="icon-pilot" style={iconStyles} />
          <Text>pilot</Text>
        </View>
      }
    >
      <View>
        <Text style={styles.headline}>Pilot Dashboard Goes Here</Text>
      </View>
    </Tab>
    <Tab

      label={
        <View style={{flexDirection:'row'}}>
          <FontIcon className="icon-optimizer" style={iconStyles} />
          <Text>optimizer</Text>
        </View>
      }
      data-route="/home"
      onActive={handleActive}
    >
      <Text>
        <View>
          <Text style={styles.headline}>Optimizer Dashboard Goes Here</Text>
        </View>
      </Text>
    </Tab>
  </Tabs>
);
