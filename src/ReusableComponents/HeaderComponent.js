import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CText from './CText';
import CONSTANTS from '../Utilities/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Utilities/Colors';
import {productDetailStyle} from "../Styles/productDetail";
import LinearGradient from "react-native-linear-gradient";
const HeaderComponent = props => {

  return (
      <LinearGradient
          style={styles.headerContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6e2775', '#ee335c']}>
    {/*<View style={{*/}
    {/*    // padding: 15,*/}
    {/*    // alignContent: 'center',*/}
    {/*    flexDirection: 'row',*/}
    {/*    // backgroundColor: COLORS.SECONDARY_COLOR,*/}
    {/*    justifyContent:'space-between'}}>*/}
      <Icon
        name="bars"
        onPress={() => props.navigation.openDrawer()}
        style={{marginLeft: 8}}
        size={30}
        color="#fff"
      />
      <CText style={{textAlign: 'center',color:'white',fontSize:18}}>{CONSTANTS.APP_HEADER_TITLE}</CText>
      <View />
    {/*</View>*/}
      </LinearGradient>
  );
};

export default HeaderComponent;



const styles = StyleSheet.create({
   headerContainer:{
       padding: 15,
       alignContent: 'center',
       flexDirection: 'row',
       // backgroundColor: COLORS.SECONDARY_COLOR,
       justifyContent:'space-between'
   }
});