import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import imagePath from '../Utilities/ImagePath';

import SplashScreen from 'react-native-splash-screen';
import {ReadItem} from '../Utilities/helpers/AsyncStorage';
import {CommonActions} from '@react-navigation/native';
import CONSTANTS from '../Utilities/Constants';
import BackgroundImage1 from '../Assets/logo_bg.jpg';
import CText from '../ReusableComponents/CText';
import COLORS from '../Utilities/Colors';
import CopyRight from '../ReusableComponents/CopyRight';
import SplashFooter from '../ReusableComponents/SplashFooter';
import AppRouter from '../Routes/AppRouter';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let token = await ReadItem('token');
    const data = await ReadItem('role');
    global.role = data;
    if (token === null) {
      setTimeout(() => {
        SplashScreen.hide();
        this.props.navigation.navigate('Login');
      }, 2000);
    } else {
      <AppRouter />;
    }
   
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={imagePath.SPLASH_BG}
          style={styles.backgroundImage}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={imagePath.APP_LOGO}
            style={{width: 120, height: 120,resizeMode:"contain"}}
          />
        </View>
        <View style={{marginBottom:30,opacity:.3}}>
     <CText
          style={{
            fontSize: 18,
            color:'white',
            textAlign: 'center',
          }}>
       Powered by 
        </CText>
        <CText
          style={{
            fontSize: 18,
            color:"white",
            textAlign: 'center',
          }}>
          Monotech System Ltd.
        </CText>
        
     {/*  <View style={{height:55,width:"100%",marginBottom:20}}>
        <Image
        style={{flex:1,height:undefined,width:undefined,resizeMode:"stretch"}}
        source={imagePath.FOOTER}>
          

        </Image>
     
    </View> */}
    </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  backgroundImage: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_COLOR,
  },
  appLogo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
});
