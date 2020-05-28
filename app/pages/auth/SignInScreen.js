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
import AsyncStorage from '@react-native-community/async-storage';
import AuthApi from '../../api/Auth';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
export default function SignInScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [space, setSpace] = useState(false);
  const onSubmit = async event => {
    event.preventDefault();
    setSpace(false);
    setLoading(true);
    if (email.length < 2 || password.length < 2) {
      setErrorMessage('Fill out the form');
      setLoading(false);
    } else {
      try {
        const response = await AuthApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        setLoading(false);
        props.navigation.navigate('Home');
      } catch (err) {
        setErrorMessage('Something went wrong');
        setLoading(false);
        console.log('Error', err);
      }
    }
  };
  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Sign In"
        noBack
        rightText="Skip"
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
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Username"
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={value => setPassword(value)}
            onFocus={() => setSpace(true)}
            onSubmitEditing={() => setSpace(false)}
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordCover}>
          <Text style={styles.forgetPassword}>Forget your password?</Text>
        </TouchableOpacity>
      </View>
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
        style={{marginTop: 20}}
      />
      <Text style={{textAlign: 'center', marginTop: 35, marginBottom: 20}}>
        Or Login with social account?
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
    marginTop: 22,
    fontSize: 38,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 52,
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
  form: {
    marginBottom: 48,
  },
  input: {
    borderColor: '#FABBB5',
    borderWidth: 2,
    height: 43,
    fontSize: 15,
    color: '#161F3D',
  },
  passwordWrapper: {
    marginTop: 26,
  },
  forgotPasswordCover: {
    marginTop: 10,
    marginLeft: 10,
  },
  forgetPassword: {
    color: 'grey',
  },
  button: {
    backgroundColor: '#6CBAD9',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
