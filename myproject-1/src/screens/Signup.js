import React , { useState,useEffect }  from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity, Alert, ActivityIndicator,Switch,ScrollView } from "react-native";
import InputText from "../components/Input";
import { Link } from '@react-navigation/native';
import COLORS from "../../consts/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import firebase from "../../consts/firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Signup() {
  // State variables for the form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("");
  // Function to toggle theme between Light and Dark
  const handleTheme = () =>{
    if(theme=="Light"){
      setTheme("Dark");
      AsyncStorage.setItem("theme", "Dark");
    }else{
      setTheme("Light");
      AsyncStorage.setItem("theme", "Light");
    }
  }
  // Get the theme from AsyncStorage on component mount
  useEffect(() => {
  
    AsyncStorage.getItem("theme")
      .then((value) => {
        if (value) {
          // console.log(value);
          setTheme(value);
        }
      })
      .catch((error) => {
        AsyncStorage.setItem("theme", "Light");
      });
  
    }, []);
    const auth = getAuth();
    // Function to handle signup process
    const handleSignUp = () => {
        if (name.localeCompare("") == 0 || name.localeCompare(" ")== 0) {
            Alert.alert("Name cannot be empty!!!");
            return;
        }
        if (email.localeCompare("") == 0 || email.localeCompare(" ")== 0) {
            Alert.alert("Email cannot be empty!!!");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }
        setIsLoading(true);
// Firebase signup code...
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");

      Alert.alert("You are successfully Registered!");
        setIsLoading(false);
      
      return updateProfile(user, {
        displayName: name
      });
    })
    .catch((error) => {
        setIsLoading(false);

      Alert.alert(error.message);
    });
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
    height:"100%",
    paddingTop:50,
    paddingHorizontal: 10,
    backgroundColor:theme=="Light"?"#fff":"#000",
},
    
        input: {
           color:theme!="Light"?"#000":"#fff",
      
      backgroundColor:theme!="Light"?"#fff":"rgba(0, 0, 0, 0.07)",
            paddingHorizontal: 25,
            paddingVertical: 15,
            marginVertical:10,
            borderRadius:10,
            fontSize:19
    
        },
        head: {
            fontSize: 30,
            textAlign: "center",
            marginBottom: 10,
    color:theme!="Light"?"#fff":"#000",
        },
        secondHead:{
            color:'gray',
            textAlign:'center' ,
            marginVertical:10,
    color:theme!="Light"?"#fff":"gray",
    
        },
        button: {
            width:'100%',
            textAlign:'center' ,
            backgroundColor: COLORS.primary,
            color: 'white',
            paddingHorizontal: 25,
            paddingVertical: 15,
            borderRadius:15,
            marginBottom:20,
            fontSize:22
        },
          
        textDetail:{
            color:theme!="Light"?"#fff":"gray",
            textAlign:'center' ,
    
        },
        innerLink:{
            fontWeight: "bold",
            color: Colors.primary,
            fontSize:16
    
        },
            link:{
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                color:'white',
                textAlign:'center' ,
                fontSize:20
            }
        
    }
    );

    return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
      <Switch trackColor={{false:"#fff",true:"#000"}} thumbColor={theme=="Light"?"#000":"#fff"} value={theme=="Light"} onValueChange={handleTheme}/>

             
            <Text style={styles.head}>Join us Now!{"\n"}</Text>
           
            <InputText placeholder="Name" style={styles.input} value={name} onChangeText={setName}/>
            <InputText placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
            <InputText placeholder="Password" style={styles.input}  value={password} onChangeText={setPassword}  />
            <InputText placeholder="Confirm Password" style={styles.input}  value={confirmPassword} onChangeText={setConfirmPassword}  />
            <TouchableOpacity  style={styles.button} disabled={isLoading} onPress={handleSignUp}>
            {isLoading? <ActivityIndicator size="large" color="white" /> : <Text style={styles.link}>Sign Up</Text>}

            
            </TouchableOpacity>

            <Text style={styles.textDetail}>Already have any Account <Link style={styles.innerLink} to={{screen:'Login'}}>Login</Link>
            </Text>
            </ScrollView>
        </View>
    )
}
