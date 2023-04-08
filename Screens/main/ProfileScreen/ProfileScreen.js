import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { styles } from './ProfileScreen.styled';
import { db } from '../../../firebase/config';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExitButton from '../../../helpers/ExitButton';

export default function ProfileScreen({ navigation }) {
  const [allUserPosts, setAllUserPosts] = useState([]);

  const {
    auth: { login },
  } = useSelector(state => state);

  const {
    auth: { userId },
  } = useSelector(state => state);

  const getUserPosts = async () => {
    const citiesRef = collection(db, 'posts');
    const q = query(citiesRef, where('userId', '==', userId));
    await onSnapshot(q, doc => {
      setAllUserPosts(doc.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={{
          ...styles.image,
          width: Dimensions.get('window').width,
          height: Dimensions.get('screen').height,
        }}
        source={require('../../../images/BG.jpg')}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.addBtn}>
                <Text style={styles.addBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.exitBtn}>
              <ExitButton navigation={navigation} />
            </View>
            <Text style={styles.nameText}>{login}</Text>
            <FlatList
              data={allUserPosts}
              keyExtractor={(item, indx) => item.id}
              ListFooterComponent={<View style={{ height: 120 }} />}
              renderItem={({ item, index }) => (
                <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
                  <Image style={styles.image} source={{ uri: item.photo }} />
                  {item?.photoName && (
                    <Text style={styles.name}>{item.photoName}</Text>
                  )}
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.Btn}
                      onPress={() => {
                        navigation.navigate('Comments', {
                          img: item.photo,
                          postId: item.id,
                        });
                      }}
                    >
                      <EvilIcons
                        name="comment"
                        size={22}
                        color="#BDBDBD"
                        style={{ transform: [{ rotateY: '180deg' }] }}
                      />
                    </TouchableOpacity>
                    {item.latitude && item.longitude && (
                      <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => {
                          navigation.navigate('Map', {
                            latitude: item.latitude,
                            longitude: item.longitude,
                            placeName: item?.placeName,
                          });
                        }}
                      >
                        <MaterialCommunityIcons
                          name="map-marker-outline"
                          size={20}
                          color="#BDBDBD"
                        />
                        <Text
                          style={{
                            ...styles.Text,
                            textDecorationLine: 'underline',
                          }}
                        >
                          {item?.placeName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
