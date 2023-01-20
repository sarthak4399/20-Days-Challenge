import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../../assets/Image/logo.png';
import CustomInput from '../../Components/CustomInput/CustomInput.js';
import CustomButton from '../../Components/CustomButton/CustomButton';
const SignInScreen = () => {
  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onForgotPassword = () => {
    console.warn('Forgot pass');
  };
  const onSignInFacebook = () => {
    console.warn('Forgot pass');
  };
  const onSignInGoogle = () => {
    console.warn('Forgot pass');
  };
  const onSignInApple = () => {
    console.warn('Forgot pass');
  };
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const {height} = useWindowDimensions();
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setusername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setpassword}
        secureTextEntry={true}
      />
      <CustomButton 
        text="Sign In" 
        onPress={onSignInPressed} 
        type="PRIMARY"
       />
      <CustomButton
        text="Forgot Password ?"
        onPress={onForgotPassword}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In with facebook"
        onPress={onSignInFacebook}
        type="TERTIARY"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        type="TERTIARY"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        type="TERTIARY"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
       <CustomButton
        text="Don't Have an account ? Create One"
        onPress={onForgotPassword}
        type="TERTIARY"
      />
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    marginVertical:35
  },
  logo: {
    width: '40%',
    height: 80,
    maxWidth: 300,
    borderRadius: 20,
  },
});
export default SignInScreen;
