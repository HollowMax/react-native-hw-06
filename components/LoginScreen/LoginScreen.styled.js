import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    position: 'absolute',

    top: 0,
    left: 0,

    justifyContent: 'flex-end',
  },

  keyboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: '100%',
    width: '100%',
  },
  container: {
    height: '61%',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',

    color: '#212121',

    marginTop: 32,
    marginBottom: 33,
  },

  form: {
    marginHorizontal: 16,
  },
  input: {
    paddingLeft: 16,
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,

    marginBottom: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  showBtn: {
    position: 'absolute',
    top: '50%',
    right: 16,
    height: 20,
    transform: [{ translateY: -17 }],
  },
  showText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 51,

    backgroundColor: '#FF6C00',
    borderRadius: 100,

    marginTop: 27,
    marginBottom: 16,
  },
  BtnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
  },
  loginBtn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 188,
    height: 19,
  },
  loginText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',

    color: '#1B4371',
  },
});
