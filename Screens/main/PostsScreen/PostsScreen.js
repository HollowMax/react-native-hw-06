import { createStackNavigator } from '@react-navigation/stack';
import {
  MainPostsScreen,
  CommentsScreen,
  MapScreen,
} from '../../nestedScreens';

const NestedScreen = createStackNavigator();

export default function PostsScreen({ userPosts, navigation }) {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="MainPosts"
        children={() => (
          <MainPostsScreen userPosts={userPosts} navigation={navigation} />
        )}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
