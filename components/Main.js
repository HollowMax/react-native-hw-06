import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginScreen from '../Screens/auth/LoginScreen';
import RegistrationScreen from '../Screens/auth/RegistrationScreen';
import HomeScreen from '../Screens/main/PostsScreen/PostsScreen';
import { authStateChangeUser } from '../redux/auth/authOperation';

const AuthStack = createStackNavigator();

export default function Main() {
  const {
    auth: { stateChange },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {stateChange && <AuthStack.Screen name="Home" component={HomeScreen} />}
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
