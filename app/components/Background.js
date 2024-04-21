import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const Background = ({isHome = false}) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        position: 'absolute',
        zIndex: -999,
      }}>
      <Image
        source={require('../assets/img_background.png')}
        style={styles.topBGImg}
      />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  topBGImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
