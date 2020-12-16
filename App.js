import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import SplashScreen from './src/screens/SplashScreen';
import FormsScreen from './src/screens/FormsScreen';
import TreeScreen from './src/screens/TreeScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash"
                              component={SplashScreen}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name="Categories"
                              component={CategoriesScreen}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name="Forms"
                              component={FormsScreen}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name="Tree"
                              component={TreeScreen}
                              options={{
                                  headerShown: false,
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
