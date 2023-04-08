import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';

export default function CommentsScreen({ route }) {
  const [allComments, setAllComments] = useState([]);
  const [inputData, setInputData] = useState('');

  const {
    auth: { userId },
  } = useSelector(state => state);

  const { img, postId } = route.params;

  const sendComment = async () => {
    try {
      const coll = collection(db, 'posts');
      const document = doc(coll, postId);
      const commentColl = collection(document, 'comments');
      addDoc(commentColl, { inputData });
      setInputData('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const getAllComments = async () => {
    try {
      const coll = collection(db, 'posts');
      const document = doc(coll, postId);
      const commentColl = collection(document, 'comments');
      await onSnapshot(commentColl, doc => {
        setAllComments(doc.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={allComments}
          keyExtractor={(item, indx) => item.id}
          ListFooterComponent={
            <Image style={styles.image} source={{ uri: img }} />
          }
          inverted={true}
          renderItem={({ item }) => (
            <View style={styles.com}>
              <Text
                style={{
                  ...styles.comText,
                  textAlign: item.id === userId ? 'left' : 'right',
                }}
              >
                {item.inputData}
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          selectionColor={'#4287f5'}
          placeholder="Коментувати..."
          onChangeText={value => setInputData(value)}
          value={inputData}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={sendComment}
          style={styles.commentBtn}
        >
          <AntDesign name="arrowup" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    justifyContent: 'flex-end',

    backgroundColor: '#fff',

    borderTopWidth: 1,
    borderTopColor: '#00000066',
    padding: 16,
  },
  commentContainer: {
    height: 50,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingLeft: 16,
  },
  commentInput: {
    flex: 1,
    fontSize: 16,
  },
  commentBtn: {
    height: 34,
    width: 34,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FF6C00',

    borderRadius: 100,
    margin: 8,
  },
  image: {
    height: 240,
    width: '100%',

    borderRadius: 8,

    marginBottom: 10,
  },
  com: {
    width: '100%',

    backgroundColor: '#0000004d',

    padding: 16,
    borderRadius: 6,
    marginBottom: 24,
  },
  comText: {},
});
