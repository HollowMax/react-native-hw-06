import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { useState } from 'react';
import { styles } from './LoginScreen.styled';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [isFocus, setIsFocus] = useState({
    password: '#E8E8E8',
    email: '#E8E8E8',
  });
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

  const passwordDisplay = () => {
    setShowPassword(prevState => !prevState);
  };
  const focused = data => {
    setIsFocus(prevState => ({ ...prevState, [data]: '#FF6C00' }));
  };
  const unfocused = data => {
    setIsFocus(prevState => ({ ...prevState, [data]: '#E8E8E8' }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <ImageBackground
          style={{
            ...styles.image,
            width: Dimensions.get('window').width,
            height: Dimensions.get('screen').height,
          }}
          source={require('../../../images/BG.jpg')}
        >
          <KeyboardAvoidingView style={styles.keyboard} behavior={'padding'}>
            <View style={styles.container}>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <TextInput
                  placeholder="Адрес електронної пошти"
                  style={{ ...styles.input, borderColor: isFocus.email }}
                  selectionColor={'#4287f5'}
                  onFocus={() => focused('email')}
                  onBlur={() => unfocused('email')}
                  onChangeText={value =>
                    setFormData(prevState => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Пароль"
                    style={{
                      ...styles.input,
                      paddingRight: 100,
                      borderColor: isFocus.password,
                    }}
                    selectionColor={'#4287f5'}
                    secureTextEntry={showPassword}
                    onFocus={() => focused('password')}
                    onBlur={() => unfocused('password')}
                    onChangeText={value =>
                      setFormData(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    style={styles.showBtn}
                    activeOpacity={0.8}
                    onPress={passwordDisplay}
                  >
                    <Text style={styles.showText}>
                      {showPassword ? 'Показати' : 'Сховати'}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log(formData);
                    navigation.navigate('Home', { screen: 'Posts' });
                  }}
                >
                  <Text>Увійти</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Registration')}
              >
                <Text style={styles.loginText}>
                  Немає аккаунта? Зареєструватись
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
