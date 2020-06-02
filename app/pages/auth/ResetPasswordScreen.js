import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
export default function ResetPasswordScreen(props) {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [space, setSpace] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    setSpace(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoading(false);
      props.navigation.navigate('SignIn');
      setLoading(false);
    }, 2000);
  };
  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Reset Password"
        // noBack
        rightAction={() => props.navigation.navigate('Home')}
      />
    ),
  });

  return (
    <ScrollView style={styles.container}>
      {!space ? <View style={styles.space1} /> : null}
      <Text style={styles.companyLogo}> ShopOnline </Text>
      <View style={styles.errorMessage}>
        {errorMessage ? (
          <Text style={styles.error}> {errorMessage} </Text>
        ) : null}
      </View>
      <View style={styles.emailWrap}>
        <View style={styles.emailIcon}>
          <SimpleLineIconsI name="user" size={19} color="#F14436" />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={value => setPassword1(value)}
        />
      </View>
      <View style={styles.passwordWrap}>
        <View style={styles.passwordIcon}>
          <EvilIconsI name="lock" size={29} color="#F14436" />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={value => setPassword2(value)}
          onFocus={() => setSpace(true)}
          onSubmitEditing={() => setSpace(false)}
        />
      </View>
      <TouchableOpacity style={styles.forgotPasswordCover}>
        <Text style={styles.forgetPassword}>Forget your password?</Text>
      </TouchableOpacity>
      {!loading ? (
        <Button title="Sign In" onPress={onSubmit} />
      ) : (
        <Button loading />
      )}
      <Button
        outline
        title="New to ShopOnline? Sign Up"
        onPress={() => {
          props.navigation.navigate('SignUp');
          Keyboard.dismiss();
        }}
        style={{marginTop: 16}}
      />
      <Text style={styles.or}>Or Login with social account?</Text>
      <View style={styles.flex}>
        <SocialButton google />
        <SocialButton facebook />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 39,
    backgroundColor: '#ffffff',
  },
  space1: {
    height: 30,
  },
  companyLogo: {
    marginTop: 14,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    fontSize: 15,
    color: '#161F3D',
  },
  passwordWrapper: {
    marginTop: 26,
  },
  forgotPasswordCover: {
    marginTop: 10,
    marginLeft: 10,
    marginVertical: 22,
  },
  forgetPassword: {
    color: 'grey',
  },
  emailWrap: {
    borderColor: '#FABBB5',
    borderWidth: 2,
    height: 43,
    flexDirection: 'row',
    borderRadius: 4,
  },
  emailIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 7,
  },
  passwordWrap: {
    borderColor: '#FABBB5',
    borderWidth: 2,
    height: 43,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 4,
  },
  passwordIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
  or: {
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
