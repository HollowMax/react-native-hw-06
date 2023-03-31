import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';
import { styles } from './CreatePostScreen.styled';

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <View style={styles.circle}>
          <FontAwesome name="camera" size={24} color="#BDBDBD" />
        </View>
      </View>
      <Text style={styles.text}>Загрузіть фото</Text>
      <TextInput
        placeholder="Назва..."
        placeholderTextColor="#BDBDBD"
        style={styles.name}
      />
    </View>
  );
}
