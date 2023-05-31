import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
    authDomain: "myproject-900a2.firebaseapp.com",
    projectId: "myproject-900a2",
    storageBucket: "myproject-900a2.appspot.com",
    messagingSenderId: "232712176988",
    appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const Airline = [
    {
      id: '1',
      name: 'Air Blue',
      slogan: 'To Fly. To Serve.',
      rating: 3,
      price: 16000,
      image: 'airline2.jpg',
      classes: [
        {
          "Class": "Economy Class",
          "questions": [
            {
              "q": "How would you rate the comfort of your seat in Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Were the flight attendants helpful during your flight in Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the quality of the in-flight meals in Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did you have enough legroom in Economy Class?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How would you rate the cleanliness of the Economy Class cabin?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the check-in process efficient for Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the boarding process organized for Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the inflight entertainment in Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did your flight depart and arrive on time?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How likely are you to recommend our Economy Class service to others?",
              "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
            }
          ]
        },
        {
          "Class": "Economy Plus Class",
          "questions": [
            {
              "q": "How would you rate the comfort of your seat in Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Were the flight attendants helpful during your flight in Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the quality of the in-flight meals in Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did you have enough legroom in Economy Plus Class?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How would you rate the cleanliness of the Economy Plus Class cabin?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the check-in process efficient for Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the boarding process organized for Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the inflight entertainment in Economy Plus Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did your flight depart and arrive on time?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How likely are you to recommend our Economy Plus Class service to others?",
              "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
            }
          ]
        },
        {
          "Class": "Premium Economy Class",
          "questions": [
            {
              "q": "How would you rate the comfort of your seat in Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Were the flight attendants helpful during your flight in Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the quality of the in-flight meals in Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did you have enough legroom in Premium Economy Class?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How would you rate the cleanliness of the Premium Economy Class cabin?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the check-in process efficient for Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Was the boarding process organized for Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "How would you rate the inflight entertainment in Premium Economy Class?",
              "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
            },
            {
              "q": "Did your flight depart and arrive on time?",
              "opt": ["Yes", "No"]
            },
            {
              "q": "How likely are you to recommend our Premium Economy Class service to others?",
              "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
            }
          ]
        },
      ]
    },  
    {
        id: '2',
        name: 'Air Sial',
        slogan: 'The Pride of Pakistan',
        price: 15000,
        rating: 2,
        image: 'airline3.jpg',
        classes: [
          {
            "Class": "Economy Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in Economy Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the Economy Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our Economy Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          },
          {
            "Class": "Business Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in Business Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the Business Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our Business Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          },
          {
            "Class": "First Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in First Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the First Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in First Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our First Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          },
        ]
      },
      
      {
        id: '3',
        name: 'Pakistan International Airline',
        slogan: 'Come Fly With Us',
        price: 15000,
        rating: 4,
        image: 'airline1.jpg',
        classes: [
          {
            "Class": "Economy Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in Economy Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the Economy Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our Economy Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          },
          {
            "Class": "Business Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in Business Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the Business Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in Business Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our Business Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          },
          {
            "Class": "Executive Economy Class",
            "questions": [
              {
                "q": "How would you rate the comfort of your seat in Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Were the flight attendants helpful during your flight in Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the quality of the in-flight meals in Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did you have enough legroom in Executive Economy Class?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How would you rate the cleanliness of the Executive Economy Class cabin?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the check-in process efficient for Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Was the boarding process organized for Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "How would you rate the inflight entertainment in Executive Economy Class?",
                "opt": ["Poor", "Fair", "Good", "Very Good", "Excellent"]
              },
              {
                "q": "Did your flight depart and arrive on time?",
                "opt": ["Yes", "No"]
              },
              {
                "q": "How likely are you to recommend our Executive Economy Class service to others?",
                "opt": ["Very Unlikely", "Unlikely", "Neutral", "Likely", "Very Likely"]
              }
            ]
          }
        ]
      }
      
  ];

const addAirline = () => {
  db.collection("airlines").doc("PIA").set(Airline[2])
.then(() => {
    console.log("Airline added successfully!");
})
.catch((error) => {
    console.error("Error adding airline class: ", error);
});
};
// addAirline();/








export default firebase;
