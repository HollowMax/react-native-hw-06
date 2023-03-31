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
import { styles } from './RegistrationScreen.styled';

export default function RegistrationScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [isFocus, setIsFocus] = useState({
    password: '#E8E8E8',
    email: '#E8E8E8',
    login: '#E8E8E8',
  });
  const [formData, setFormData] = useState({
    password: '',
    email: '',
    login: '',
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
              <View style={styles.box}>
                <View style={styles.addBtn}>
                  <Text style={styles.addBtnText}>+</Text>
                </View>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <TextInput
                  placeholder="Логін"
                  style={{ ...styles.input, borderColor: isFocus.login }}
                  selectionColor={'#4287f5'}
                  onFocus={() => focused('login')}
                  onBlur={() => unfocused('login')}
                  onChangeText={value =>
                    setFormData(prevState => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />
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
                  <Text>Зареєструватись</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.loginText}>Уже є аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
