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
    Switch
  } from "react-native";
import { useRoute } from "@react-navigation/native";
import COLORS from "../../consts/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

export default function Classes({ navigation }) {
  const route = useRoute();
  const { name, classes } = route.params || {};
 // Handle the theme state
const [theme, setTheme] = useState("");
const handleTheme = () =>{
  if(theme=="Light"){
    setTheme("Dark");
    AsyncStorage.setItem("theme", "Dark");
  }else{
    setTheme("Light");
    AsyncStorage.setItem("theme", "Light");
  }
}
 // Update the theme state based on AsyncStorage
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
  // On component mount, call updatetheme
  // On navigation focus, call updatetheme
useEffect(() => {
  updatetheme();
  const unsubscribe = navigation.addListener('focus', () => {
    updatetheme();
  });

  return () => {
    unsubscribe();
  };
}, [navigation]);
///////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme!="Light"?"#000":"#fff" }}>
       <View style={{marginTop:7}}>
      <Switch trackColor={{false:"#fff",true:"#000"}} thumbColor={theme=="Light"?"#000":"#fff"} value={theme=="Light"} onValueChange={handleTheme}/>
      
      </View>
      <View style={style.header}>
        <Text style={{ fontSize: 25, textAlign:"center",color: theme!="Light"?"#fff":"#000" }}>Classes of {name}</Text>
      </View>
      {classes &&
        classes.map((item) => (
          <TouchableOpacity
            key={item.Class}
            activeOpacity={1}
        onPress={() => navigation.navigate("Questions", {"name":name,"classname":item.Class, "questions": item.questions})}

            style={{
              marginTop: 30,
              marginLeft: 20,
              marginRight: 20,
              height: 50,
              backgroundColor:theme!="Light"?"#fff":"rgba(0, 0, 0, 0.07)",
              borderRadius:10
            }}
          >
            <Text style={{ fontSize: 20, textAlign:"center",marginTop:10 }}>{item.Class}</Text>
          </TouchableOpacity>
        ))}
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
  },
 
});

