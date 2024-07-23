import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import axios from 'axios';
import { BACKEND_URL, VAPID_PUBLIC_API_KEY } from './config';

const firebaseConfig = {
    apiKey: "AIzaSyBNkunlTM482LH5sWYZ6jnJblSkFOsd5yQ",
    authDomain: "ecoverse-62b2e.firebaseapp.com",
    projectId: "ecoverse-62b2e",
    storageBucket: "ecoverse-62b2e.appspot.com",
    messagingSenderId: "991076622641",
    appId: "1:991076622641:web:9f710c717eca597830d010",
    measurementId: "G-FLXH48PWW0"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = (setTokenFound: Function, userId: string) => {
  return getToken(messaging, { vapidKey: VAPID_PUBLIC_API_KEY }).then(async (currentToken) => {
    if (currentToken && userId) {
      setTokenFound(true);
      // Send the token to your server and update the UI if necessary
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/save-token`, { 
        userId, 
        token: currentToken 
      });
      if(response) {
        console.log("user token saved successfully!!")
      }
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    setTokenFound(false);
  });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
