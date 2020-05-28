import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}> Sign in</Text>
        <Text style={styles.navbarSkip}>Skip</Text>
      </View>
      <View style={styles.signInArea}>
        <Text style={styles.logo}>ShopName</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={Password}
        />

        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            marginTop: 10,
            color: '#ADADAD',
            marginLeft:-70
          }}>
          Forget your password?
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#ffffff', fontSize: 30}}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text style={{color: '#F45245', fontSize: 20}}>
            New to DealMart? SIGNUP
          </Text>
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 15, padding: 10}}>
          Do you login with social account?
        </Text>
      </View>
      <View style={styles.Socialbuttonarea}>
        <TouchableOpacity style={styles.socialbutton}>
          <Text style={{color: '#F45245', fontSize: 15}}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialbutton}>
          <Text style={{color: 'blue', fontSize: 15}}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 65,
    backgroundColor: '#F45245',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 130,
    justifyContent: 'space-between',
  },
  navbarText: {
    color: '#ffffff',
    // alignSelf: 'center',
    // textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 32,
  },
  navbarSkip: {
    color: '#ffffff',
    fontSize: 16,
    paddingRight: 10,
  },
  input: {
    height: 40,
    borderColor: '#F45245',
    borderWidth: 1,
    width: '70%',
    marginTop: 30,
  },
  signInArea: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F45245',
    padding: 10,
    width: '70%',
    height: 60,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    width: '70%',
    height: 60,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginTop: 15,
  },
  Socialbuttonarea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialbutton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    width: '40%',
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
  },
  logo: {fontSize: 50, marginBottom: 40, marginTop: 20},
});

export default App;
