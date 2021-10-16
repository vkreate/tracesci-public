import React from 'react';
import {View, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';
import COLORS from '../Utilities/Colors';
import {Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LinearGradient from "react-native-linear-gradient";

@inject('LoginStore', 'OtpStore', 'ProductStore')
@observer
class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    this.props.OtpStore.roleCheck();
  }

  render() {
    const {signOut, phoneNumber} = this.props.LoginStore;
    return (
        <LinearGradient
            style={styles.drawerContainer}
            // start={start} end={end}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            colors={[
              '#6e2775',
              '#ee335c'
            ]}
        >
      <View style={styles.drawerContainer}>

        <DrawerContentScrollView {...this.props}>
          <View style={styles.drawerContent}>
            <View>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.UserInfo}>
                  <Title style={styles.Name}>Welcome</Title>
                  <Caption style={styles.MobileNo}>+91-{phoneNumber}</Caption>
                </View>
              </View>

              <View style={styles.BottomLine} />
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                activeTintColor="#2196f3"
                activeBackgroundColor="rgba(0, 0, 0, .04)"
                inactiveTintColor="rgba(0, 0, 0, .87)"
                inactiveBackgroundColor="transparent"
                labelStyle={{color: 'white', fontSize: 18}}
                label="Information"
                onPress={() => {
                  this.props.navigation.navigate('Information');
                }}
              />
               <DrawerItem
                activeTintColor="#2196f3"
                activeBackgroundColor="rgba(0, 0, 0, .04)"
                inactiveTintColor="rgba(0, 0, 0, .87)"
                inactiveBackgroundColor="transparent"
                labelStyle={{color: 'white', fontSize: 18}}
                label="New Scan"
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                activeTintColor="#2196f3"
                activeBackgroundColor="rgba(0, 0, 0, .04)"
                inactiveTintColor="rgba(0, 0, 0, .87)"
                inactiveBackgroundColor="transparent"
                labelStyle={{color: 'white', fontSize: 18}}
                label="Scan History"
                onPress={() => {
                  this.props.navigation.navigate('ScanList');
                }}
              />
              <DrawerItem
                activeTintColor="#2196f3"
                activeBackgroundColor="rgba(0, 0, 0, .04)"
                inactiveTintColor="rgba(0, 0, 0, .87)"
                inactiveBackgroundColor="transparent"
                labelStyle={{color: 'white', fontSize: 18}}
                label="Logout"
                onPress={signOut}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <View style={{flexDirection: 'column'}}>
          
            <Caption style={styles.caption}>Powered by</Caption>
            <Caption style={styles.caption}>Monotech System Ltd.</Caption>
          </View>
        </Drawer.Section>
      </View>
        </LinearGradient>
    );
  }
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    // backgroundColor: COLORS.SECONDARY_COLOR,
  },
  drawerContent: {
    flex: 1,
  },
  BottomLine: {
    marginTop: 25,
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  UserInfo: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  Name: {
    fontSize: 18,
    marginTop: 3,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  MobileNo: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 25,
  },
  bottomDrawerSection: {
    marginBottom: 20,
  },
});
