import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { authSignOut } from '../redux/auth/authOperation';

export default function ExitButton({ navigation }) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(authSignOut);
        navigation.navigate('Login');
      }}
      activeOpacity={0.1}
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
      }}
    >
      <Ionicons name="exit-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}
