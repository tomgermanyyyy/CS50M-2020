import React from "react";
import { Dimensions, View } from 'react-native';
import Text from '../components/Text'
import { connect } from 'react-redux'
import { channingActions } from '../lib/helper'
import { TouchableOpacity, StatusBar, Animated, Easing, Platform } from "react-native"
import styled from "styled-components"
import { bindModalActions } from '../redux/actions/modal';
import { bindMeActions } from '../redux/actions/me';
import CustomModal from '../components/CustomModal'
import {
  Login,
  Home,
  Map,
  QR,
  Notify,
  Profile,
  PinList,
  Staff
} from "../screens";

import Svg, {
  SvgXml
} from 'react-native-svg';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeXml = (stroke) => {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 11.25L15 2.5L26.25 11.25V25C26.25 25.663 25.9866 26.2989 25.5178 26.7678C25.0489 27.2366 24.413 27.5 23.75 27.5H6.25C5.58696 27.5 4.95107 27.2366 4.48223 26.7678C4.01339 26.2989 3.75 25.663 3.75 25V11.25Z" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 27.5V15H18.75V27.5" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
const MapXml = (stroke) => {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5Z" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5 2.5V10H25" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 16.25H10" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 21.25H10" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5 11.25H11.25H10" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
}
const QrXml = (stroke) => {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5 3.75H3.75V12.5H12.5V3.75Z" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.25 3.75H17.5V12.5H26.25V3.75Z" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.25 17.5H17.5V26.25H26.25V17.5Z" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5 17.5H3.75V26.25H12.5V17.5Z" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
}
const MailXml = (stroke) => {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
}
const ProfileXml = (stroke) => {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
}

function MainTab(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color, size }) => {
          return <></>
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = HomeXml;
          } else if (route.name === 'Map') {
            icon = MapXml;
          } else if (route.name === 'QR Code') {
            return (
              <View style={{ width: 70, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ width: '80%', height: 30, position: 'relative' }}>
                  <View style={{ width: 70, height: 70, position: 'absolute', top: '-150%', left: '-10%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6161', borderRadius: 35 }}>
                    <SvgXml xml={QrXml(focused ? '#FFFFFF' : '#FFFFFF')} width={40} height={40} />
                  </View>
                </View>
                <Text bold style={{ fontSize: 15, color: focused ? '#4B5FF7' : '#A4A4A4' }}>{route.name}</Text>
              </View>)
          } else if (route.name === 'Notify') {
            icon = MailXml;
          } else if (route.name === 'Profile') {
            icon = ProfileXml;
          }

          // You can return any component that you like here!
          // return <Image source = {HomeIcon}/>;
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <SvgXml xml={icon(focused ? '#4B5FF7' : '#A4A4A4')} style={{ marginTop: 0 }} />
              <Text style={{ fontSize: 15, color: focused ? '#4B5FF7' : '#A4A4A4' }} bold>{route.name}</Text>
            </View>)
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4B5FF7',
        inactiveTintColor: '#A4A4A4',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="QR Code" component={QR} />
      <Tab.Screen name="Notify" component={Notify} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} headerMode="none" />
      <Stack.Screen name="MainTab" component={MainTab} headerMode="none" />
      <Stack.Screen name="PinList" component={PinList} headerMode="none" />

    </Stack.Navigator>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.me.isLoggedIn,
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.toggleModal()
    StatusBar.setBarStyle("dark-content", true)

    if (Platform.OS == "android") {
      StatusBar.setBarStyle("light-content", true)
    }
  }

  componentDidUpdate() {
    this.toggleModal()
  }

  toggleModal = () => {
    if (this.props.modal.isOpen === true) {
      Animated.timing(this.state.scale, {
        toValue: 0.85,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
        useNativeDriver: false
      }).start()

      StatusBar.setBarStyle("light-content", true)
    }

    if (this.props.modal.isOpen === false) {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.in()
      }).start()
      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start()
      StatusBar.setBarStyle("dark-content", true)
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    console.log("is loggin", isLoggedIn)
    console.log("Thisss", this.props)
    return (
      <RootView>
        <CustomModal />
        <AnimatedContainer
          style={{ transform: [{ scale: this.state.scale }], opacity: this.state.opacity }}>

          <View style={{ width: '100%', flex: 1 }}>
            <NavigationContainer>
              {/* {!isLoggedIn ?
          (
            <Stack.Navigator
            headerMode="none"
            >
              <Stack.Screen name="Login" component={Login} headerMode = "none" />
            </Stack.Navigator> */}
              <Stack.Navigator
                headerMode="none"
              >
                <Stack.Screen name="MainTab" component={MainTab} headerMode="none" />
                <Stack.Screen name="PinList" component={PinList} headerMode="none" />
                <Stack.Screen name="Staff" component={Staff} headerMode="none" />

              </Stack.Navigator>


            </NavigationContainer>
          </View>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const RootView = styled.View`
    flex: 1;
    background: black;
`

const Container = styled.View`
    flex: 1;
    background: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export default connect(
  state => ({ modal: state.modal, me: state.me }),
  dispatch => channingActions({}, dispatch, bindModalActions, bindMeActions)
)(App)