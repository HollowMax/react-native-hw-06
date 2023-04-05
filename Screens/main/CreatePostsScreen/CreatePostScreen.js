import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { styles } from './CreatePostScreen.styled';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function CreatePostScreen({ navigation, setUserPosts }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [inputs, setInputs] = useState({ photoName: '', photoName: '' });

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const publish = async () => {
    if (photo) {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setUserPosts(prevState => [
        {
          photo,
          photoName: inputs.photoName,
          placeName: inputs.placeName,
          latitude,
          longitude,
        },
        ...prevState,
      ]);
      navigation.navigate('Posts');
      setPhoto(null);
      setInputs({ photoName: '', photoName: '' });
    }
  };

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {photo ? (
          <View style={styles.photo}>
            <Image source={{ uri: photo }} style={styles.image} />
          </View>
        ) : (
          <Camera style={styles.photo} type={CameraType.back} ref={setCamera}>
            <TouchableOpacity onPress={takePhoto} style={styles.circle}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
        )}
        <Text style={styles.text}>Загрузіть фото</Text>
        <KeyboardAvoidingView behavior={'padding'}>
          <TextInput
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            style={styles.name}
            selectionColor={'#4287f5'}
            value={inputs.photoName}
            onChangeText={data =>
              setInputs(prevState => ({ ...prevState, photoName: data }))
            }
          />
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={19}
              color="#BDBDBD"
            />
            <TextInput
              placeholder="Місцевіть..."
              placeholderTextColor="#BDBDBD"
              style={styles.place}
              selectionColor={'#4287f5'}
              value={inputs.placeName}
              onChangeText={data =>
                setInputs(prevState => ({ ...prevState, placeName: data }))
              }
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: photo ? '#FF6C00' : '#F6F6F6',
          }}
          activeOpacity={0.8}
          onPress={publish}
        >
          <Text style={{ color: photo ? '#000' : '#BDBDBD' }}>
            Опублікувати
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteBtn}>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: photo ? '#FF6C00' : '#F6F6F6',
          }}
          activeOpacity={0.8}
          onPress={() => {
            if (photo) {
              setPhoto(null);
              setInputs({ photoName: '', photoName: '' });
            }
          }}
        >
          <Feather
            name="trash-2"
            size={24}
            color={photo ? '#000' : '#BDBDBD'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
