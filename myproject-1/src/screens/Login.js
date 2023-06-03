import React, { useState, useContext ,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator,Switch,ScrollView  } from "react-native";
import InputText from "../components/Input";
import { Link, useNavigation } from "@react-navigation/native";
import COLORS from "../../consts/colors";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  // Firebase app configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
    authDomain: "myproject-900a2.firebaseapp.com",
    projectId: "myproject-900a2",
    storageBucket: "myproject-900a2.appspot.com",
    messagingSenderId: "232712176988",
    appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
  };
  
  // Initialize firebase app, navigation, and auth
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Local state for email, password, loading state and theme
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // Function to fetch theme from AsyncStorage
  const updatetheme = () => {
    AsyncStorage.getItem("theme")
      .then((value) => {
        if (value) {
          setTheme(value);
        }
      })
      .catch((error) => {
        AsyncStorage.setItem("theme", "Light");
      });
  };

  // React Hook to update theme when the page comes into focus
  useEffect(() => {
    updatetheme();
    const unsubscribe = navigation.addListener('focus', () => {
      updatetheme();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  // Function to handle login using Firebase authentication
  const handleLogin = async () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        AsyncStorage.setItem("userId", userId);
        console.log("User ID:", userId);
        setEmail("");
        setPassword("");
        setIsLoading(false);
        navigation.navigate("Home");
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Login failed", error.message);
      });
  };


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      paddingHorizontal: 10,
      backgroundColor:theme=="Light"?"#fff":"#000",
      paddingTop:50
    },
  
    input: {
      color:theme!="Light"?"#000":"#fff",
      
      backgroundColor:theme!="Light"?"#fff":"rgba(0, 0, 0, 0.07)",
      paddingHorizontal: 25,
      paddingVertical: 15,
      marginVertical: 10,
      borderRadius: 10,
      fontSize:19
    },
    head: {
      fontSize: 30,
      textAlign: "center",
      marginVertical: 10,
      color:theme!="Light"?"#fff":"#000",
    },
    secondHead: {
      color:theme!="Light"?"#fff":"gray",
      textAlign: "center",
      marginVertical: 10,
    },
    button: {
      textAlign: "center",
      backgroundColor: COLORS.primary,
      color: "white",
      paddingHorizontal: 25,
      paddingVertical: 15,
      marginVertical: 10,
      borderRadius: 15,
      marginBottom: 20,
    },
    textDetail: {
      color:theme!="Light"?"#fff":"gray",
      textAlign: "center",
      marginBottom: 20,
    },
    link: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: "white",
      textAlign: "center",
      fontSize:20
    },
    innerLink: {
      fontWeight: "bold",
      color: COLORS.primary,
      fontSize:16
    },
  });
  return (
    <View style={styles.container} testID="login-component">
      <ScrollView showsVerticalScrollIndicator={false}>
      
      <Switch testID="theme-switch" trackColor={{false:"#fff",true:"#000"}} thumbColor={theme=="Light"?"#000":"#fff"} value={theme=="Light"} onValueChange={handleTheme}/>
      <Text style={styles.head}></Text>
      <Text style={styles.head}>Welcome Back!{"\n"}</Text>

      <InputText
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <InputText
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} disabled={isLoading} onPress={handleLogin}>
        {isLoading? <ActivityIndicator size="large" color="white" /> : <Text style={styles.link}>Submit</Text>}
        
      </TouchableOpacity>

      <Text style={styles.textDetail}>
        Don't have an Account{" "}
        <Link
          style={styles.innerLink}
          to={{ screen: "Signup", params: { id: "Signup" } }}
        >
          Sign Up
        </Link>
      </Text>
      </ScrollView>
    </View>
  );
}


