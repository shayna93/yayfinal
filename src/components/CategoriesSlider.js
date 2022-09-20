import React from 'react';
//import {TextArea} from 'semantic-ui-react/dist/commonjs/addons/TextArea';
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   FlatList,
// } from 'react-native';
import { Card, Container, TextArea, Dimmer, Image, List, Header, Grid, Segment} from 'semantic-ui-react';

//import {SearchBar, Card} from 'reacts-native-elements';
//import {useNavigation} from '@react-navigation/native';
//import SearchResultsScreen from '../screens/SearchResultsScreen';

const CATEGORIES = [
  {
    id: 'NAILS',
    salon: 'Nails',
    image:
      'https://s3-media0.fl.yelpcdn.com/bphoto/NwFP19FvKPyDseA8-ZOzBw/l.jpg',
  },
  {
    id: 'EYELASHES',
    salon: 'Eyelashes',
    image:
      'https://img1.wsimg.com/isteam/ip/4cb8f3b4-2bfa-4d05-903e-91222e6ab44c/IMG_1892.JPG/:/cr=t:4.5%25,l:8.34%25,w:70.42%25,h:70.42%25/rs=w:400,cg:true,m',
  },
  {
    id: 'HAIR',
    salon: 'Hair',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 'BODY HAIR',
    salon: 'Body Hair',
    image:
      'https://www.hardrocknails.com/site/wp-content/uploads/2017/11/nail-care-770x520.jpg',
  },
  {
    id: 'SKIN CARE',
    salon: 'Skin Care',
    image:
      'https://www.hardrocknails.com/site/wp-content/uploads/2017/11/nail-care-770x520.jpg',
  },
  {
    id: 'MAKEUP',
    salon: 'Makeup',
    image:
      'https://www.hardrocknails.com/site/wp-content/uploads/2017/11/nail-care-770x520.jpg',
  },
  {
    id: 'MASSAGE',
    salon: 'Massage',
    image:
      'https://www.hardrocknails.com/site/wp-content/uploads/2017/11/nail-care-770x520.jpg',
  },
];

function Item({salon, image}) {
  //const navigation = useNavigation();

  return (
    <Container
      //onPress={() => navigation.navigate('SearchResultsScreen')}
      >
      <Card>
        <Image source={{uri: image}} />
        <Header>{salon}</Header>
      </Card>
    </Container>
  );
}

const CategoriesSlider = () => {
  //const CategoriesSlider = ({navigation}) => {
  const renderItem = ({item}) => <Item salon={item.salon} image={item.image} />;

  return (
    <Container>
        <Header as='h1'>Categories</Header>
        <Segment textAlign='center'>
      <Grid columns={2} divided>
        
        <Grid.Row>
            <Grid.Column>Nails
                <Image size= 'small' src='https://s3-media0.fl.yelpcdn.com/bphoto/NwFP19FvKPyDseA8-ZOzBw/l.jpg'></Image>
            </Grid.Column>
            <Grid.Column>Hair
                <Image size= 'small' src='https://www.hardrocknails.com/site/wp-content/uploads/2017/11/nail-care-770x520.jpg'></Image>

            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
    </Container>
  );
};
export {CategoriesSlider};

// const styles = StyleSheet.create({
//   card: {
//     width: 170,
//     height: 180,
//     paddingTop: 10,
//     borderRadius: 10,
//   },
//   image: {
//     height: 150,
//     width: '130%',
//     alignSelf: 'center',
//     borderRadius: 10,
//     overflow: 'hidden',
//     borderColor: 'white',
//     marginTop: -20,
//     marginBottom: -20,
//   },
//   pictureText: {
//     fontSize: 24,
//     textAlign: 'center',
//     position: 'absolute',
//     color: 'white',
//     alignSelf: 'center',
//     textShadowOffset: {width: 1, height: 1},
//     textShadowRadius: 10,
//     textShadowColor: 'black',
//     flexShrink: 1,
//     marginTop: 90,
//   },
// });
