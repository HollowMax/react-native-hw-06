import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';

export default function MainPostsScreen({ userPosts, navigation }) {
  console.log(userPosts);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.box} />
        <View>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
      <FlatList
        data={userPosts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Image style={styles.image} source={{ uri: item.photo }} />
            {item?.photoName && (
              <Text style={styles.name}>{item.photoName}</Text>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => {
                  navigation.navigate('Comments');
                }}
              >
                <EvilIcons
                  name="comment"
                  size={22}
                  color="#BDBDBD"
                  style={{ transform: [{ rotateY: '180deg' }] }}
                />
                <Text style={{ ...styles.Text, color: '#BDBDBD' }}>0</Text>
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
                    style={{ ...styles.Text, textDecorationLine: 'underline' }}
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    backgroundColor: '#fff',

    paddingHorizontal: 16,
    paddingTop: 10,

    borderTopWidth: 1,
    borderTopColor: '#00000066',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    width: 80,
    height: 80,

    marginRight: 10,
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 12, lineHeight: 19, color: '#BDBDBD' },
  image: {
    height: 240,
    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderRadius: 8,

    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 5,
  },
  Text: {
    fontSize: 16,
    lineHeight: 19,
  },
  Btn: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
