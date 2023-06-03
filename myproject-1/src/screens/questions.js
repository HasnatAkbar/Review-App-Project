import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Animated,
    ActivityIndicator,
    Alert
  } from "react-native";
import { RadioButton  } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, addDoc,setDoc, getDoc, doc, updateDoc,getFirestore, serverTimestamp } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

import { useRoute } from "@react-navigation/native";
import COLORS from "../../consts/colors";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;
const firebaseConfig = {
  apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
  authDomain: "myproject-900a2.firebaseapp.com",
  projectId: "myproject-900a2",
  storageBucket: "myproject-900a2.appspot.com",
  messagingSenderId: "232712176988",
  appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default function ClassQuestions({ navigation }) {
  const [userId, setUserId] = useState("");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const route = useRoute();
  const { name, classname, questions } = route.params || {};
  const questions_count = questions.length;
  useEffect(() => {

    AsyncStorage.getItem("userId")
    .then((value) => {
      if (value) {
        console.log(value);
        setUserId(value);
      }
    })
    .catch((error) => {
      console.error("Error retrieving user ID:", error);
    });

  }, []);
  const handleOptionChange = (question, option) => {
    setResponse(prevResponse => {
        return {
          ...prevResponse,
          [question]: option,
        };
      });

    console.log(Object.keys(response).length +"/"+ questions_count);

  };
  
  const handleSubmit = async () => {
    setIsLoading(true);
    try{
      if(questions_count == Object.keys(response).length){
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth();
    const day = currentDateTime.getDate();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();

    const responseId = 'response_'+''+year+''+(month + 1)+''+day+''+hours+''+minutes+''+seconds+''+(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
  
    const responseRef = doc(db, "response", responseId);
    await setDoc(responseRef, {
      userid: userId,
      airline:name,
      class: classname,
      response: response,
    });
  
    
    console.log("Response added successfully!");
    setIsLoading(false);
    Alert.alert("Response added successfully!");
    // navigation.navigate("HomeScreen");
    navigation.goBack();
  }else{
    setIsLoading(false);
    Alert.alert("Error: First Response to All Questions! ("+Object.keys(response).length +"/"+ questions_count+")");
  }
  }catch (error) {

    console.error(error);
    setIsLoading(false);
    Alert.alert(error);
  }
  
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={style.header}>
        <Text style={{ fontSize: 20, textAlign:"center" }}>{classname} of {name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {questions &&
        questions.map((item, index) => (
          <View
            key={index}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              height: 250,
              backgroundColor: "rgba(0, 0, 0, 0.07)",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 10 }}>{item.q}</Text>

            <RadioButton.Group  onValueChange={value => handleOptionChange(item.q, value)} value={response[item.q]}>
                {item.opt.map((opt, opt_index)=>(<View style={{flexDirection:"row"}}>
                    <RadioButton value={opt} />
                    <Text style={{ fontSize: 16, marginTop: 7 }}>{opt}</Text>
                </View>
                ))}
        </RadioButton.Group>
          </View>
        ))}
        <TouchableOpacity style={style.button} disabled={isLoading} onPress={handleSubmit}>
        {isLoading? <ActivityIndicator size="large" color="white" /> : <Text style={style.link}>Submit</Text>}
        
      </TouchableOpacity>
        </ScrollView>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    // flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    
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
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 105,
    backgroundColor: COLORS.primary,
    position: "absolute",
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },link: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize:20
  },
 
});

