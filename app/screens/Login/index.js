import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../contains';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {InputStyle} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeRegister = () => {
    navigation.navigate('SignUp');
  };

  const onLogin = async () => {
    navigation.navigate('Notification');
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={20}>
        <View style={styles.header}>
          <View style={styles.boxImage}>
            <Image
              style={[styles.imgBackground, styles.imgBackgroundHeader]}
              source={IMAGES.headerLogin}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Welcome!</Text>
            <View style={styles.formInput}>
              <InputStyle
                name={'Email'}
                value={email}
                onChange={value => setEmail(value)}
              />
            </View>
            <View style={styles.formInput}>
              <InputStyle
                name={'Password'}
                value={password}
                onChange={value => setPassword(value)}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.boxImage}>
            <Image style={[styles.imgBackground]} source={IMAGES.footerLogin} />
          </View>
          <Text onPress={changeRegister} style={styles.register}>
            New Here?
            <Text style={styles.registerClick}> Register</Text>
          </Text>
          <TouchableOpacity onPress={onLogin} style={styles.footerSubmit}>
            <Text style={styles.footerSubmitText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default LoginScreen;
