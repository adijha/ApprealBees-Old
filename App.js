import React from 'react'
import { View, Text, StyleSheet,TextInput ,TouchableOpacity } from 'react-native'

const App = () => {
  const [value, onChangeText] = React.useState('Sign In');
  const [Password, Passwordon] = React.useState('Password');
  return (
    <View style={styles.container}>
     <View style={styles.Navbar}>
      <Text style={styles.Nabartext}> Sign in</Text>
      <Text style={styles.Nabarskip}>Skip</Text>
     </View>
     <View style={styles.signinarea}>

       <Text style={{fontSize:60,marginBottom:40,marginTop:20}}>DealMart</Text>

    <TextInput style={styles.Textinput}    onChangeText={text => onChangeText(text)}
      value={value}/>

    <TextInput style={styles.Textinput} onChangeText={text => Passwordon(text)}
      value={Password}/>

    <Text style={{fontSize:20,marginBottom:20,marginTop:10}}>Forget your password?</Text>

    <TouchableOpacity style={styles.button}>
        <Text style={{color:"#ffffff",fontSize:30}}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
        <Text style={{color:"red",fontSize:20}}>New to DealMart? SIGNUP</Text>
      </TouchableOpacity>
      <Text style={{color:"#000000",fontSize:15, padding:10}}>Do you login with social account?</Text>
     </View>
     <View style={styles.Socialbuttonarea}>
     <TouchableOpacity style={styles.socialbutton}>
        <Text style={{color:"red",fontSize:15}}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialbutton}>
        <Text style={{color:"blue",fontSize:15}}>Facebook</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}


const styles =StyleSheet.create({
container:{
flex:1
},
Navbar:{
 
  height:65,
  backgroundColor:"red",
  elevation:3,
  flexDirection:"row",
  alignItems:"center",
  paddingLeft:130,
  justifyContent:'space-between'
  
  
},
Nabartext:{
  color:"#ffffff",
  alignSelf:"center",
  fontSize:35,
  fontWeight:"900",
  
},
Nabarskip:{
  color:"#ffffff",
  fontSize:20,
  paddingRight:10,
},
Textinput:{
  height: 40, 
  borderColor: 'red',
   borderWidth: 1,
  width:"70%",
 
  marginTop:30
},
signinarea:{
  alignItems:"center",
},
button:{
  alignItems: "center",
  backgroundColor: "red",
 padding:10,
  width:"70%",
  height:60,
},
button1:{
  alignItems: "center",
  backgroundColor: "#ffffff",
  padding:10,
 
  width:"70%",
  height:60,
  borderColor: '#DDDDDD',
   borderWidth: 1,
   marginTop:15,

},
Socialbuttonarea:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-around",
},
socialbutton:{
  alignItems: "center",
  backgroundColor: "#ffffff",
  padding:10,
  width:"40%",
  height:40,
  borderColor: '#DDDDDD',
   borderWidth: 1,
}


});

export default App
