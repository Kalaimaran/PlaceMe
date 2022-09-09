import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import {Appbar, Card} from 'react-native-paper';

const image = {uri:'https://static.india.com/wp-content/uploads/2015/08/friendship-day.jpg'};
const image1 = {uri:'https://image.shutterstock.com/image-photo/nov-22-2019-palo-alto-260nw-1569353527.jpg'};
export default class App extends React.Component {
  render() {
    let video = [];
    for (let i = 0; i < 20; i++) {
      {
        video.push(
          <TouchableOpacity style={style.videos}>
            <View style={style.vidimg}>
              <ImageBackground
                source={image1}
                style={style.image1}
                resizeMode="stretch"
                imageStyle={{borderRadius: 20}}>
                <View style={style.vidtext}>
                  <Text style={style.text}>Company {i + 1}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>,
        );
      }
    }
    return (
      <View style={style.over}>
        <StatusBar backgroundColor="black" barStyle="default" />
        <Appbar.Header style={style.appbar}>
          <Appbar.Action
            icon={'chevron-left'}
            onPress={() => {
              Alert.alert('DO YO WANT TO EXIT THE APP', ' CONTINUE', [
                {
                  text: 'Ask me later',
                  onPress: () => console.log('Ask me later pressed'),
                },
                {
                  text: 'cancel',
                  onPress: () => {},
                },
                {
                  text: 'ok',
                  onPress: () => {
                    BackHandler.exitApp();
                  },
                },
              ]);
              this.setState();
            }}
          />
          <Appbar.Content title="PlaceMe" alignItems="flex-start" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="video" onPress={() => {}} />
          <Appbar.Action icon="bell" onPress={() => {}} />
          <Appbar.Action icon="account" onPress={() => {}} />
        </Appbar.Header>
        <View style={style.image}>
          <ImageBackground source={image} style={style.back} />
        </View>
        <View style={style.hed}>
          <Text style={style.hedtext}>Product Companies</Text>
          <TouchableOpacity style={{
            backgroundColor: 'white',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flex:1,
            padding:7
          }}>
            <Text style={{
              fontSize: 15,
              color:'blue',
              fontStyle: 'italic',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>All({video.length}) </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={style.hrs1}>
          {video}
        </ScrollView>
        <View style={style.hed}>
          <Text style={style.hedtext}>Service Companies</Text>
          <TouchableOpacity style={{
            backgroundColor: 'white',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flex:1,
            padding:7
          }}>
            <Text style={{
              fontSize: 15,
              fontStyle: 'italic',
              color:'blue',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>All({video.length}) </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={style.hrs1}>
          {video}
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  over: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: 'red',
    borderColor:'black',
    borderWidth:2,
    
  },
  videos: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: .5,
    borderRadius: 20,
    padding: 0,
    width: 300,
    height: "100%",
    justifyContent: 'center',
    flex:1,
  },
  image1: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  hrs1: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight:10,
    paddingLeft:1
   
  },
  vidimg: {
    flex: 10,
    borderRadius: 20,
    borderColor: 'black',
    width: '100%',
    alignSelf: 'auto',
    borderRadius: 20,
  },
  
  text: {
    color: 'black',
    fontSize: 15,
  },
  appbar: {
    backgroundColor: 'white',
  },
  back: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: '100%',
  },
  vidtext: {
    flex: 0.2,
    backgroundColor: 'white',
    borderColor: 'white',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    bottom: -169,
  },
  hed:
  {
    flex:.17,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 1,
    flexDirection:'row',
  },
  hedtext: {
    color: 'black',
    fontSize: 15,
    padding: 7,
    fontStyle: 'italic',
   fontFamily:"Dan'sDisneyUI",
  },
});
