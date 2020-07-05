import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Ball from './src/component/Ball';
import Deck from './src/component/Deck';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

class App extends React.Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{uri: item.uri}}>
        <Text style={{marginBottom: 10}}>I can customize the Card further</Text>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          backgroundColor="#03a9f4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return <Card title="All Done">
      <Text style={{marginBottom: 10}}>
        There's no more cards
      </Text>
      <Button 
        backgroundColor="#03a9f4"
        title="Get More!"
      />
    </Card>
  }

  render(){
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <Ball /> */}
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}


export default App;


/**
 * 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 */
