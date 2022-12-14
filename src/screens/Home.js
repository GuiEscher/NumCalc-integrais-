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

 } from "react-native";
 import { useNavigation } from "@react-navigation/native";
import axios from "axios";

 const {height, width} = Dimensions.get("screen")


 function test(value){
  var DeuCerto = new Boolean(false)
    try{
      if(value > 1 && value != NaN){
      DeuCerto = true
    }
    if(DeuCerto == true){
      return(
        <Text>Número aceito</Text>
      )
    }
    if(isNaN(value)){
      return(
        <Text>Não é um número!</Text>
      )
    }
    }catch(err){
      console.log("erro")
    } 
 }
 export default function Home(){

    const navigation = useNavigation()

  const [text, setText] = useState('');
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');


  try{
    useEffect(()=>{ //quando a tela for carregada, listarDados sera chamado
      listarDados();
    },[])
    //toda vez q tiver chamada de api, usar async functions
    async function listarDados(){
      //usandoo axios para fazer requisições no navegador ou node.js
      const res = await axios.get('http://localhost/apireact/listar.php'); //chamando do banco local
      setLista(res.data); //passa para a lista o resultado da chamada anterior. --> data = dados da API
      console.log(res.data);
    }
 }catch(err){
    console.log("Deu erro na chamada da API!")
 }
  return(
    <SafeAreaView>
      <View style={{ width:'100%', height:'100%'}}>

        <Text style={{
          textDecorationLine:'underline',
          textShadowColor:'#fff8dc',
          fontSize:height*0.03,
          textAlign:'center',
          fontWeight:'700',
          top:'5%'

        }}> NumCalc version one</Text>
     
        <TextInput style={{
          textAlign:'center', 
          borderWidth:5, 
          fontSize:height*0.03, 
          width:'75%', 
          backgroundColor:'#fff8dc',
          justifyContent:'center',
          alignSelf:'center',
          top:'10%',
          color:'black'
          
        }}
          placeholder="Digite a função"
          placeholderTextColor='black'
          
          onChangeText={(text) => {
            setText(text)
          }}
          defaultValue={text}
          
        />
        <Text style={{
          textDecorationLine:'underline',
          textShadowColor:'#fff8dc',
          fontSize:height*0.02,
          textAlign:'center',
          fontWeight:'700',
          top:'15%'

        }}> VOCE DIGITOU: {text} </Text>

          <Text style={{textDecorationLine:'underline',
          textShadowColor:'#fff8dc',
          fontSize:height*0.03,
          textAlign:'center',
          fontWeight:'700',
          top:'25%'}} >{test(text)}</Text>

        
<Button
            title="back home"
            onPress={()=>navigation.navigate('Login')}
            />
      </View>
    </SafeAreaView>
  );
 }