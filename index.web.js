import React from 'react'
import { AppRegistry } from 'react-native'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './src/App'

injectTapEventPlugin()


AppRegistry.registerComponent('App', () => ()=><AppContainer><App /></AppContainer>)
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
})


if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextApp = require('./src/App').default
    AppRegistry.registerComponent('App', () => ()=><AppContainer><NextApp /></AppContainer>)
    AppRegistry.runApplication('App', {
      rootTag: document.getElementById('root')
    })

  })
}
