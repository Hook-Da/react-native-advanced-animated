import React, {Component} from 'react';
import { View, Animated, StyleSheet } from 'react-native';

class Ball extends Component {
  constructor(props) {
      super(props);
    this.position = new Animated.ValueXY(0, 0);
    Animated.timing(this.position, {
      useNativeDriver: true,
    });
    Animated.spring(this.position, {
      toValue: {x: 200, y: 300},
    }).start();
  }

  render() {
    const {ballStyle} = styles;
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={ballStyle} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    ballStyle: {
        backgroundColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 30
    }
})

export default Ball;