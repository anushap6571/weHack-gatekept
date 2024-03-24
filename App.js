import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '/Users/anushapatel/gatekept/ProfileScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* Other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


