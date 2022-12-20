// -----------Screen Navigation Details-!!!!-----------
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login';
import TradeList from '../traderList';
import Expiretrade from '../expireTrade';

const Stack = createNativeStackNavigator();

export function Navigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#EE241D'
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="Traderdetails" component={TradeList}
                    options={{
                        headerStyle: {
                            backgroundColor: '#EE241D'
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="expiretrade" component={Expiretrade}
                    options={{
                        headerStyle: {
                            backgroundColor: '#EE241D'
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

