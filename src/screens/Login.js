import {React, useState, useEffect} from "react";
import { 
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Image,

 } from "react-native";
 import { useNavigation } from "@react-navigation/native";

 const {height, width} = Dimensions.get('screen')

 export default function Login(){

    const navigation = useNavigation()
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    return(
        <KeyboardAvoidingView>
        <View style={{height:height*0.3, backgroundColor:'white'}}>
            <Image style={{
                width: width*0.55, height:height*0.26, borderRadius:15, alignSelf:'center'
            }} source={require('../images/images.png')}/>
        
        </View>
        
        <View style={{backgroundColor:'purple'}}>
            <Text style={{fontSize:height*0.02,fontWeight:'700',color:'gray', textAlign:'center', top:'10%'}}>Usuario ou senha invalidos!</Text>
        </View>

        <View style={{backgroundColor:'white', height:height*0.7}}>

        <TextInput style={{
          textAlign:'left', 
          borderWidth:3, 
          fontSize:height*0.02, 
          width:'75%', 
          backgroundColor:'white',
          justifyContent:'center',
          alignSelf:'center',
          top:'10%',
          color:'black',
          fontWeight:'700',
          text
          
        }}
          placeholder="Usuário:"
          placeholderTextColor='gray'
          
          onChangeText={(text) => {
            setText(text)
          }}
          defaultValue={text}
          
        />

<TextInput style={{
          textAlign:'left', 
          borderWidth:3, 
          fontSize:height*0.02, 
          width:'75%', 
          backgroundColor:'white',
          justifyContent:'center',
          alignSelf:'center',
          top:'10%',
          color:'black',
          fontWeight:'700',
          marginVertical:'10%'
          
        }}
          placeholder="Senha:"
          placeholderTextColor='gray'
          secureTextEntry={true}
          
          onChangeText={(text) => {
            setText2(text2)
          }}
          defaultValue={text}
          
        />


            <TouchableHighlight 
            onPress={()=>navigation.navigate('Home')}
            style={{backgroundColor:'#cd5c5c', 
            height:height*0.05, 
            borderRadius:15, 
            width:'80%', 
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            top:'10%'
            
            }}>
                <Text style={{color:'white', fontWeight:'700', fontSize:height*0.02}}>Continuar</Text>
                
            </TouchableHighlight>
        </View>
        </KeyboardAvoidingView>
    )
 }