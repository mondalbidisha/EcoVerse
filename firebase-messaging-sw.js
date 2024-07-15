importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBNkunlTM482LH5sWYZ6jnJblSkFOsd5yQ",
    authDomain: "ecoverse-62b2e.firebaseapp.com",
    projectId: "ecoverse-62b2e",
    storageBucket: "ecoverse-62b2e.appspot.com",
    messagingSenderId: "991076622641",
    appId: "1:991076622641:web:9f710c717eca597830d010",
    measurementId: "G-FLXH48PWW0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    image: 'eco-verse.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
