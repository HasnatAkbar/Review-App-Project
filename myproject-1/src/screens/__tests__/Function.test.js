import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
let data= {};
async function login_test(email, password) {
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

  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    return false;
  }
}
function feedback_submission(feedback){
  if(data[0].classes[0].questions.length == feedback.length){
    return true;
  }else{
    return false;
  }
}
async function get_data_of_3_airlines_test() {
  const firebaseConfig = {
    apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
    authDomain: "myproject-900a2.firebaseapp.com",
    projectId: "myproject-900a2",
    storageBucket: "myproject-900a2.appspot.com",
    messagingSenderId: "232712176988",
    appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
  };
  
  try {
    const app = initializeApp(firebaseConfig);
    
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "airlines"));
    const airlineData = querySnapshot.docs.map((doc) => doc.data());
    if(airlineData.length==3){
      data = airlineData;
      return true;
    }else{
      return false;

    }
  } catch (error) {

    return false;
  }
}
function get_class_count(index){
  if(data[index].classes.length == 3){
    return true;
  }else{
    return false;
  }
}
describe('Login', () => {
  it('Should Fail with Wrong Email Password',async () => {
    const result = await login_test("qwsa@gmail.com", "12345678");
    expect(result).toBe(false);
  });
  it('Should Pass with Correct Email Password',async () => {
    const result = await login_test("abc@abc.com", "12345678");
    expect(result).toBe(true);
  });
});

describe('Home', () => {
  it('Should get Data of three airlines',async () => {
    const result = await get_data_of_3_airlines_test();
    expect(result).toBe(true);
  });
  
});
describe('Class of airline', () => {
  it('Should get 3 Classes of airline at 0',async () => {
    const result = get_class_count(0);
    expect(result).toBe(true);
  });
  it('Should get 3 Classes of airline at 1',async () => {
    const result = get_class_count(1);
    expect(result).toBe(true);
  });
  it('Should get 3 Classes of airline at 2',async () => {
    const result = get_class_count(2);
    expect(result).toBe(true);
  });
});

describe('Feedback Submition', () => {
  it('Should not submit as all questions are not answered',async () => {
    const temp_feedback=[
      {"Did you have enough legroom in Economy Class?":
      "No"},
      {"Did your flight depart and arrive on time?":
      "Yes"},
      {"How likely are you to recommend our Economy Class service to others?":
      "Likely"},
      {"How would you rate the cleanliness of the Economy Class cabin?":
      "Excellent"},
      {"How would you rate the comfort of your seat in Economy Class?":
      "Good"},
      {"How would you rate the inflight entertainment in Economy Class?":
      "Excellent"}
    ]
    const result = feedback_submission(temp_feedback);
    expect(result).toBe(false);
  });
  it('Should submit as all questions are answered',async () => {
    const temp_feedback=[
      {"Did you have enough legroom in Economy Class?":
      "No"},
      {"Did your flight depart and arrive on time?":
      "Yes"},
      {"How likely are you to recommend our Economy Class service to others?":
      "Likely"},
      {"How would you rate the cleanliness of the Economy Class cabin?":
      "Excellent"},
      {"How would you rate the comfort of your seat in Economy Class?":
      "Good"},
      {"How would you rate the inflight entertainment in Economy Class?":
      "Excellent"},
      {"How would you rate the quality of the in-flight meals in Economy Class?":
      "Excellent"},
      {"Was the boarding process organized for Economy Class?":
      "Very Good"},
      {"Was the check-in process efficient for Economy Class?":
      "Good"},
      {"Were the flight attendants helpful during your flight in Economy Class?":
      "Very Good"}
    ]
    const result = feedback_submission(temp_feedback);
    expect(result).toBe(true);
  });
});
