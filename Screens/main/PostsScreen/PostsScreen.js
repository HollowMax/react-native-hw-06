import { createStackNavigator } from '@react-navigation/stack';
import {
  MainPostsScreen,
  CommentsScreen,
  MapScreen,
} from '../../nestedScreens';
import Home from '../Home';

const NestedScreen = createStackNavigator();

export default function PostsScreen({ navigation }) {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="MainPosts"
        component={Home}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
