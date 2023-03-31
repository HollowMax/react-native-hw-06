import { Text, View, ImageBackground, Dimensions } from 'react-native';
import { styles } from './ProfileScreen.styled';

export default function ProfileScreen() {
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
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.addBtn}>
              <Text style={styles.addBtnText}>+</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
