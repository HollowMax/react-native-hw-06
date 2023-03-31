import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import PostsScreen from './PostsScreen/PostsScreen';
import CreatePostScreen from './CreatePostsScreen/CreatePostScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import ExitButton from '../../helpers/ExitButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeTab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <HomeTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <HomeTab.Screen
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: () => <ExitButton navigation={navigation} />,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? '#FF6C00' : 'black'}
              style={{
                textAlign: 'right',
                textAlignVertical: 'center',
                height: 40,
                width: 70,
              }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <HomeTab.Screen
        options={{
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          tabBarStyle: { display: 'none' },

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Posts')}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="arrow-back" size={24} color="#212121cc" />
            </TouchableOpacity>
          ),

          tabBarIcon: (focused, size, color) => (
            <AntDesign
              name="plus"
              size={13}
              color="white"
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',

                height: 40,
                width: 70,
                borderRadius: 20,
                backgroundColor: '#FF6C00',
              }}
            />
          ),
        }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <HomeTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? '#FF6C00' : 'black'}
              style={{
                textAlign: 'left',
                textAlignVertical: 'center',
                height: 40,
                width: 70,
              }}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
}
