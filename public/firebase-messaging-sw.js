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
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   image: 'eco-verse.png'
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // If the PWA is already open, navigate to the specific route
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === '/actions' && 'focus' in client) {
          return client.focus().then(client => client.navigate(event.notification.data.url));
        }
      }

      // If the PWA is not open, open it in a new tab
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});