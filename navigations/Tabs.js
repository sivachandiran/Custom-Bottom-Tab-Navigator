import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, TouchableOpacity, View, Text, } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
                source={require('../assets/icons/plus.png')}
                resizeMode="center"
                style={{
                    width: 40,
                    height: 40,
                    tintColor: '#fff'
                }}
            />
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                HOME
                            </Text>
                        </View>

                    ),
                }} />
            <Tab.Screen name="Find"
                component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/icons/find.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                FIND
                            </Text>
                        </View>

                    ),
                }} />
            <Tab.Screen name="Post"
                component={PostScreen}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }} />
            <Tab.Screen name="Setting"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/icons/settings.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                SETTING
                            </Text>
                        </View>
                    ),
                }} />
            <Tab.Screen name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/icons/chat.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                CHAT
                            </Text>
                        </View>

                    ),
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});