import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import FeatherI from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

const CartScreen = props => {
  return (
    <View style={styles.container}>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="My Cart"
        rightAction={() => props.navigation.navigate('Cart')}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
     

     
      <View style={styles.itemarea}>
       <View style={{margin:10}}>
       <Image source={{uri: 'https://cdn.shopify.com/s/files/1/2360/8505/products/Fancy_Sea_Blue_Women_s_Top_1100x.jpg?v=1532429592'}}
       style={{width: 100, height: 100}} />
       </View>
       
       <View style={{margin:10}}>
         <Text style={{fontSize:20,margin:2}}>Blue Top</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Seller:ABC</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Size:S     Color:Blue</Text>
         <Text style={{fontSize:24,color:"#217EEA"}}>$20</Text>

       </View>

       <View style={{margin:10,justifyContent:"center",marginLeft:80,alignItems:"center"}}> 
       <FeatherI name="plus" size={25} color="#D0D0D0" />
       <View style={{height:40,width:40,backgroundColor:"#EFF6FF",borderRadius:10,alignItems:"center",margin:10}}>
       <Text style={{fontSize:25,margin:2,color:"#217EEA"}}>2</Text>
       </View>
       <FeatherI name="minus" size={25} color="#D0D0D0" />
       </View>

      </View>

      
      <View style={styles.itemarea}>
       <View style={{margin:10}}>
       <Image source={{uri: 'https://rukminim1.flixcart.com/image/714/857/jkcwakw0/top/y/t/h/m-parrotgreen-gmi-original-imaf7qfr7jd8ybhc.jpeg?q=50'}}
       style={{width: 100, height: 100}} />
       </View>
       
       <View style={{margin:10}}>
         <Text style={{fontSize:20,margin:2}}>Green Top</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Seller:ABC</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Size:S     Color:Green</Text>
         <Text style={{fontSize:24,color:"#217EEA"}}>$20</Text>

       </View>

       <View style={{margin:10,justifyContent:"center",marginLeft:80,alignItems:"center"}}> 
       <FeatherI name="plus" size={25} color="#D0D0D0" />
       <View style={{height:40,width:40,backgroundColor:"#EFF6FF",borderRadius:10,alignItems:"center",margin:10}}>
       <Text style={{fontSize:25,margin:2,color:"#217EEA"}}>2</Text>
       </View>
       <FeatherI name="minus" size={25} color="#D0D0D0" />
       </View>

      </View>

      
      <View style={styles.itemarea}>
       <View style={{margin:10}}>
       <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61wUPBHzY3L._UX522_.jpg'}}
       style={{width: 100, height: 100}} />
       </View>
       
       <View style={{margin:10}}>
         <Text style={{fontSize:20,margin:2}}>Red Top</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Seller:ABC</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Size:S     Color:Red</Text>
         <Text style={{fontSize:24,color:"#217EEA"}}>$20</Text>

       </View>

       <View style={{margin:10,justifyContent:"center",marginLeft:80,alignItems:"center"}}> 
       <FeatherI name="plus" size={25} color="#D0D0D0" />
       <View style={{height:40,width:40,backgroundColor:"#EFF6FF",borderRadius:10,alignItems:"center",margin:10}}>
       <Text style={{fontSize:25,margin:2,color:"#217EEA"}}>2</Text>
       </View>
       <FeatherI name="minus" size={25} color="#D0D0D0" />
       </View>

      </View>


     

      <View style={styles.pricebar}>
      <View >
         <Text style={{fontSize:14,}}>Price(6 items)</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Delivery</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>Amount Payable </Text>
       </View>

       <View style={{marginRight:10}}>
         <Text style={{fontSize:14,}}>60$</Text>
         <Text style={{fontSize:19,margin:2,color:"#25E786"}}>Free</Text>
         <Text style={{fontSize:14,margin:2,color:"#819088"}}>60$</Text>
       </View>
       
      </View>
      <View style={styles.continue}>
      <Text style={{fontSize:26,margin:20}}>60$</Text>

      <TouchableOpacity  >
              <View style={{height:50,width:170,backgroundColor:"#F45245",borderRadius:5,margin:10, alignItems:"center",
     flexDirection:"row"}}>
               <Text style={{color:"#ffffff",fontSize:20,margin:10}}>Continue</Text>
             
              </View>
            </TouchableOpacity>
            
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
   container:{
   
  flex:1,
  backgroundColor:"#EDF1F6",
  justifyContent:"space-between"
   },
  Navbar:{
   
    height:65,
    backgroundColor:"#F45245",
   
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",

  padding:10,
    justifyContent:"flex-start",
    
    
  },
  
  itemarea:{
    backgroundColor:"#ffffff",
    height:"20%",
    width:"100%",
    margin:5,
    flexDirection:"row"

  },
  pricebar:{
    backgroundColor:"#ffffff",
    height:"10%",
    width:"100%",
    margin:2,
    flexDirection:"row",
   justifyContent:"space-between"

  },
  continue:{
  backgroundColor:"#ffffff",
  height:"10%",
  width:"100%",
  
  flexDirection:"row",
  justifyContent:"space-between",
  flexDirection:"row",
  alignItems:"center",
  alignContent:"center",

  }
});
