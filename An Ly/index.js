import React from "react";

import LoginScreen from './login';

import HomeScreen from './home';
import PinListScreen from './pin-list'

import MapScreen from './map';
import QRScreen from './qr';
import NotifyScreen from './notify';
import ProfileScreen from './profile';

import StaffScreen from './staff';


export const Login = (navigation) => <LoginScreen {...navigation} name="Login" />;
export const Home = (navigation) => <HomeScreen {...navigation} name="Home" />;
export const Staff = (navigation) => <StaffScreen {...navigation} name="Staff" />;
export const PinList = (navigation) => <PinListScreen {...navigation} name="PinList" />;
export const Map = (navigation) => <MapScreen {...navigation} name="Map" />;
export const QR = (navigation) => <QRScreen {...navigation} name="QR" />;
export const Notify = (navigation) => <NotifyScreen {...navigation} name="Notify" />;
export const Profile = (navigation) => <ProfileScreen {...navigation} name="Profile" />;