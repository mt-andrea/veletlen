import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Penz from './screens/Penz';
import Kocka from './screens/Kocka';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Veletlen generator'>
        <Stack.Screen name='Veletlen generator' component={Home}/>
        <Stack.Screen name='Penzfeldobas' component={Penz}/>
        <Stack.Screen name='Kockadobas' component={Kocka}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


