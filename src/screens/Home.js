import React from 'react';
import {
  AppState,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  Text,
} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import CText from '../ReusableComponents/CText';
import HomeCopyRight from '../ReusableComponents/HomeCopyRight';
import {productDetailStyle} from '../Styles/productDetail';
import {fontWeight} from '../Styles/fonts';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from "../ReusableComponents/HeaderComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPressLogin',
      this.backButtonHandler,
    );
    this.state = {
      appState: AppState.currentState,
    };
  }

  backButtonHandler = () => {
    BackHandler.exitApp();
    return true;
  };

  ScanHandler = () => {
    this.props.navigation.navigate('Scan');
  };

  render() {
    return (
        <View style={{flex:1}}>
          <HeaderComponent navigation={this.props.navigation} />

      <View style={styles.homeContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../Assets/inside.png')}
            style={{
              justifyContent: 'center',
              width: '100%',
              height: 140,
              resizeMode: 'contain',
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{flex: 1}}>
            <View style={styles.topTextContainer}>
              <CText style={styles.bottomTextStyle}>
                You are seconds away{' '}
              </CText>
              <CText style={styles.bottomTextStyle}>
                from finding out if the{' '}
              </CText>
              <CText style={styles.bottomTextStyle}>
                product you are holding is{' '}
              </CText>
              <CText style={styles.bottomTextStyle}>genuine or not.</CText>
            </View>
            <View style={styles.buttonContainerStyle}>
              <View style={productDetailStyle.ButtonStyle}>
                <LinearGradient
                  style={productDetailStyle.ButtonContainer}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#6e2775', '#ee335c']}>
                  <TouchableOpacity onPress={this.ScanHandler}>
                    <View>
                      <CText style={productDetailStyle.ButtonText}>
                        Scan Now
                      </CText>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0, marginBottom: 30}}>
          <Text style={{fontSize: 20}}>Find more details at</Text>
          <Text style={{alignSelf: 'center', fontSize: 18, color: '#ee335c'}}>
            tracesci.in
          </Text>
        </View>
      </View>
        </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonContainerStyle: {
    marginTop: 80,
    // marginBottom: 20,
    justifyContent: 'center',
  },
  topTextContainer: {
    marginTop: 10,
  },
  bottomTextContainer: {
    marginTop: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  bottomTextStyle: {
    textAlign: 'center',
    fontSize: 22,
  },
  bottomBoldTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerImage: {
    justifyContent: 'center',
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
    alignSelf: 'center',
  },
});
