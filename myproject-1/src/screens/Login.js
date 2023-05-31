import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import InputText from "../components/Input";
import { Link, useNavigation } from "@react-navigation/native";
import COLORS from "../../consts/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
  authDomain: "myproject-900a2.firebaseapp.com",
  projectId: "myproject-900a2",
  storageBucket: "myproject-900a2.appspot.com",
  messagingSenderId: "232712176988",
  appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        AsyncStorage.setItem("userId", userId);
        console.log("User ID:", userId);
        setIsLoading(false);
        navigation.navigate("Home");
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Login failed", error.message);
      });
  };
  return (
    <View style={styles.container}>
      
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 10,
  },

  input: {
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.07)",
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
  },
  secondHead: {
    color: "gray",
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
    color: "gray",
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
    color: Colors.primary,
    fontSize:16
  },
});
