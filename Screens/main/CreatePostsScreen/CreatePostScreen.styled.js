import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    paddingHorizontal: 16,

    borderTopWidth: 1,
    borderTopColor: '#00000066',

    backgroundColor: '#fff',
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 240,
    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    marginTop: 32,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 60,
    height: 60,
    backgroundColor: '#fff',

    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',

    marginTop: 8,
    marginBottom: 48,
  },
  name: {
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',

    marginBottom: 32,
  },
});
