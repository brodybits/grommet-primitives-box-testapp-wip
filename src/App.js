// import React due to JSX
// FUTURE TODO: just import createElement
// and get rid of react/react-in-jsx-scope rule
import React, { Component } from 'react';

import { Box } from './grommet-imports';

import { Text, View } from 'react-primitives';

// source:
// https://github.com/grommet/grommet-starter-new-app
const AppBar = (props) => (
  <Box
    // NOT SUPPORTED by primitives:
    // tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <View>
        <AppBar>
          <Text style={{color: 'gold', fontSize: 28, fontWeight: 'bold'}}>
            Hello Grommet App
          </Text>
        </AppBar>
        <Box>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>
            ☆ First part ☆
          </Text>
          <Text>text component</Text>
          <div>second line in div text</div>
        </Box>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          ☆ Part 2 in own View ☆
        </Text>
        <View>
          <Text>another text component</Text>
          <div>second line in div text</div>
        </View>
      </View>
    );
  }
}

export default App;
