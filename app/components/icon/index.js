import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../contains';

import styles from './styles';

const IconStyle = ({name, onPress}) => {
  let icon, styleCustom;
  switch (name) {
    case 'edit':
      icon = <View>Edit</View>;
      break;
    case 'logout':
      icon = <View>Logout</View>;
      break;
    case 'home':
      styleCustom = {...styles.container};
      icon = <View>Home</View>;
      break;
    case 'eye-slash':
    case 'eye':
      icon = <Icon name={name} size={15} color={COLORS.grey} />;
      break;
    case 'online-prediction':
      icon = <View />;
      break;
    default:
      break;
  }

  return onPress ? (
    <TouchableOpacity onPress={() => onPress()} style={{...styleCustom}}>
      {icon}
    </TouchableOpacity>
  ) : (
    <View style={{...styleCustom}}>{icon}</View>
  );
};

export default IconStyle;
