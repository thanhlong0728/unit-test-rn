import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Background from '../../components/Background';
import {format} from 'date-fns';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const notifications = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Background />
      <SafeAreaView style={{flex: 1, paddingBottom: 26}} edges={['top']}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            borderWidth: 1,
            marginLeft: 16,
            height: 40,
            width: 40,
            marginVertical: 10,
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        <FlatList
          data={notifications}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.rootView}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.dateLabel}>
                    {format(new Date(), 'yyyy/MM/dd HH:mm')}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.title,
                    {lineHeight: Platform.OS == 'android' ? 15 : 0},
                  ]}
                  numberOfLines={1}>
                  title
                </Text>
                <Text
                  style={[
                    styles.description,
                    {lineHeight: Platform.OS == 'android' ? 15 : 0},
                  ]}
                  numberOfLines={2}>
                  content
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                }}>
                <View style={styles.seenBox}></View>
              </View>
            </TouchableOpacity>
          )}
          style={styles.flatList}
          keyExtractor={item => item?.id}
          contentContainerStyle={{
            flex: notifications?.length <= 0 ? 1 : 0,
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  flatList: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  rootView: {
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 6,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  buyLabel: {
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 7,
    color: 'white',
    borderRadius: 3,
    overflow: 'hidden',
  },
  expiredLabel: {
    backgroundColor: 'black',
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 7,
    color: 'white',
    borderRadius: 3,
    overflow: 'hidden',
  },
  dateLabel: {
    fontSize: 8,
    color: 'black',
  },
  title: {
    fontSize: 12,
    color: 'red',
  },
  description: {
    fontSize: 10,
    color: 'black',
    marginTop: 8,
  },
  note: {
    fontSize: 8,
    color: 'red',
    marginTop: 8,
  },
  label: {
    height: 14,
    marginLeft: 6,
  },
  seenBox: {
    borderRadius: 3,
    backgroundColor: '#FF0013',
    marginLeft: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
