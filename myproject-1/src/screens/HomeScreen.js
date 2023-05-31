import React , {useEffect, useState} from "react";
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
  ActivityIndicator
} from "react-native";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore/lite"; // Update import
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
  authDomain: "myproject-900a2.firebaseapp.com",
  projectId: "myproject-900a2",
  storageBucket: "myproject-900a2.appspot.com",
  messagingSenderId: "232712176988",
  appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
};

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAirlineData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "airlines"));
      const airlineData = querySnapshot.docs.map((doc) => doc.data());
      setData(airlineData);

    } catch (error) {

      console.error("Error fetching airline data:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    fetchAirlineData();
    AsyncStorage.getItem("userId")
    .then((value) => {
      if (value) {
        console.log(value);
      }
    })
    .catch((error) => {
      console.error("Error retrieving user ID:", error);
    });
    setIsLoading(false);

  }, []);

  const TopAirlineCard = ({ airline }) => {
    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("DetailsScreen", airline)}
        style={{marginBottom:20,marginTop:20,marginLeft:20,marginRight:20,height:300}}
      >
       
          <View style={style.priceTag}>
            <Text
              style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
            >
              {airline.price} pkr.
            </Text>
          </View>
          
          {airline.id==1? (<Image source={require('../../assets/airline2.jpg')} style={style.cardImage} />): airline.id==2? (<Image source={require('../../assets/airline3.jpg')} style={style.cardImage} />): airline.id==3? (<Image source={require('../../assets/airline1.jpg')} style={style.cardImage} />): <View />}
          
          <View style={style.cardDetails}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {airline.name}
                </Text>
                <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                {airline.slogan}
                </Text>
              </View>
              <Icon name="bookmark-border" size={26} color={COLORS.primary} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>

                {airline.rating >= 1 ?(<Icon name="star" size={15} color={COLORS.orange} />) : <Icon name="star" size={15} color={COLORS.grey} />}
                {airline.rating >= 2 ?(<Icon name="star" size={15} color={COLORS.orange} />) : <Icon name="star" size={15} color={COLORS.grey} />}
                {airline.rating >= 3 ?(<Icon name="star" size={15} color={COLORS.orange} />) : <Icon name="star" size={15} color={COLORS.grey} />}
                {airline.rating >= 4 ?(<Icon name="star" size={15} color={COLORS.orange} />) : <Icon name="star" size={15} color={COLORS.grey} />}
                {airline.rating >= 5 ?(<Icon name="star" size={15} color={COLORS.orange} />) : <Icon name="star" size={15} color={COLORS.grey} />}
                
              </View>
              {/* <Text style={{ fontSize: 10, color: COLORS.grey }}>
                {airline.number_of_reviews} reviews
              </Text> */}
            </View>
          </View>
       
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <View style={style.header}>
       <Text style={{fontSize:30}}>List of All Airline </Text>
      </View>
      {isLoading? <ActivityIndicator size="large" color="blue" /> : 
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => <TopAirlineCard airline={item} />)}
      </ScrollView>
      }

      
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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

