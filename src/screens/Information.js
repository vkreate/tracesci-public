import React from 'react';
import {
  AppState,
  Image,
  View,
  StyleSheet,
  ScrollView,
  BackHandler,
  Text,
} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import CText from '../ReusableComponents/CText';
import HeaderTitle from '../ReusableComponents/HeaderTitle';
import Colors from "../Utilities/Colors";
import Fonts, {sizes} from "../Styles/fonts";
import HeaderComponent from "../ReusableComponents/HeaderComponent";

class Information extends React.Component {
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
    this.props.navigation.navigate('Home');
    return true;
  };

  render() {
    return (
      <View style={{flex:1}}>

          <HeaderComponent navigation={this.props.navigation} />
        <CText style={styles.titleText}>Information</CText>
        <View>

              <View style={styles.topTextContainer}>

                 <CText style={[styles.textStyle,{textAlign: 'center'}]}>
                  This app aims to fight with{'\n'}
               <Text style={{color: 'red', fontSize: 26}}> fake</Text> products
                 with{'\n'}
                 effective product authentication,{'\n'}
                   the controlled movement, tracking{'\n'}
                   and verification of{' '}
                  <Text style={{color: 'green', fontSize: 26}}>genuine</Text>
                  {'\n'}
                   products from{'\n'}
                   source to consumption level.{'\n'}
                 </CText>
                <CText style={{marginHorizontal: 10,fontSize:18}}> Yes, We want you{'\n'}</CText>
              </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20,marginBottom:10}}>
          <CText style={{marginBottom:10}}>
            <Text style={styles.textStyle}>- To correctly</Text>
            <Text style={{color: '#ee335c', fontSize: 26, marginHorizontal: 2}}>
              {' '}
              identify{' '}
            </Text>
            <Text style={styles.textStyle}>
              and track legitimate products through the supply chain
            </Text>
          </CText>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20,marginBottom:10}}>
          <CText>
            <Text style={styles.textStyle}>- To</Text>
            <Text style={{color: '#ee335c', fontSize: 26, marginHorizontal: 2}}>
              {' '}
              protect{' '}
            </Text>
            <Text style={styles.textStyle}>
              {' '}
              citizens from harmful and illicit products.
            </Text>
          </CText>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20,marginBottom:10}}>
          <CText>
            <Text style={styles.textStyle}>- To share your</Text>
            <Text style={{color: '#ee335c', fontSize: 26}}>
              {''}
              feedback{''}
            </Text>
            <Text style={styles.textStyle}>
              on product directly to brannd or manufcaturer.
            </Text>
          </CText>
        </View>
      </View>
      // <ScrollView
      //   showsVerticalScrollIndicator={false}
      //   persistentScrollbar={false}>
      //   <View style={styles.homeContainer}>
      //     <HeaderTitle headerTitle="Information" />
      //     <View style={styles.contentContainer}>
      //       <View style={styles.topTextContainer}>
      //         <CText style={styles.textStyle}>
      //           This app aims to fight with{'\n'}
      //           <Text style={{color: 'red', fontSize: 26}}> fake</Text> products
      //           with{'\n'}
      //           effective product authentication,{'\n'}
      //           the controlled movement, tracking{'\n'}
      //           and verification of{' '}
      //           <Text style={{color: 'green', fontSize: 26}}>genuine</Text>
      //           {'\n'}
      //           products from{'\n'}
      //           source to consumption level.{'\n'}
      //           {'\n'}
      //           Yes, We want you{'\n'}
      //           {'\n'}
      //           <Text>
      //             - To correctly{' '}
      //             <Text style={{color: '#ee335c', fontSize: 26}}>identify</Text>{' '}
      //             and track legitimate products through the supply chain
      //           </Text>
      //           {'\n'}
      //           {'\n'}
      //           <Text>
      //             - To{' '}
      //             <Text style={{color: '#ee335c', fontSize: 26}}>protect</Text>{' '}
      //             citizens from harmful and illicit products.
      //           </Text>
      //           <Text>
      //             - To share your{' '}
      //             <Text style={{color: '#ee335c', fontSize: 26}}>feedback</Text>{' '}
      //             on product directly to brannd or manufcaturer.
      //           </Text>
      //         </CText>
      //       </View>
      //
      //       {/*  <View style={[styles.topTextContainer,{marginTop:26}]}>
      //       <CText style={styles.headingTextStyle}>
      //         What do they look like?
      //       </CText>
      //       <CText style={styles.textStyle}>
      //         There are two types of stamps: a long stamp that will be placed
      //         over the neck of some alcoholic beverages and a round bottle top
      //         stamp.
      //       </CText>
      //     </View> */}
      //     </View>
      //   </View>
      // </ScrollView>
    );
  }
}

export default Information;

const styles = StyleSheet.create({
  titleText: {
    color: Colors.SECONDARY_COLOR,
    textAlign: 'center',
    ...Fonts.medium,
    fontSize: sizes.h1,
    fontWeight: 'bold',
    marginVertical:10
  },
  homeContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 40,
    padding: 15,
  },
  headingTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  informationImage: {
    marginTop: 15,
    width: '100%',
    height: 150,
  },
  informationImageRound: {
    marginTop: 15,
    width: '100%',
    height: 400,
  },
  topTextContainer: {
    marginTop: 10,
  },
  textStyle: {
    // textAlign: 'center',
    fontSize: 18,
    lineHeight: 30,
  },
});
