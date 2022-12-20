import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from "../Splash";
import Login from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";

const AppNavigator = () => {

const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash"
                            component={Splash}
                            options={{headerShown: false}}
                 />
                <Stack.Screen name="Login"
                            component={Login}
                            options={{headerShown: false}}
                 />
                <Stack.Screen name="Dashboard"
                            component={Dashboard}
                            options={{headerShown: false}}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator