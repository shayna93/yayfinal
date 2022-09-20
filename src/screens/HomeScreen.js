import React from 'react';
//import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
//import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
import { Container, Search, Header} from 'semantic-ui-react';
//import {Card} from 'react-native-elements';
//import {useTheme} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Icon from 'react-native-vector-icons/Ionicons';

import {CategoriesSlider} from '../components/CategoriesSlider';
//import {AppointmentsSlider} from '../components/AppointmentsSlider';
//import {Search} from '../components/SearchBar';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import DailyDealsScreen from './DailyDealsScreen';
// import ProfileScreen from './Profile';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = () => {
  //const {colors} = useTheme();

  //const theme = useTheme();

  return (
    <Container>
      <Search  />
      <Container>
        <Header>Categories</Header>
          <CategoriesSlider />

        <Header>Upcoming Appointments</Header>
          <Container>
          </Container>
    </Container>
    </Container>
  );
};


export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   swipe: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 20,
//     color: 'black',
//     paddingTop: '5%',
//     marginLeft: 20,
//   },
// });
