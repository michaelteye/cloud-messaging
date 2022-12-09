import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCeGR2888oD6mUvFDXEGhG0QLo8WMNDMAk",
  authDomain: "bezonotification.firebaseapp.com",
  databaseURL: "https://bezonotification-default-rtdb.firebaseio.com",
  projectId: "bezonotification",
  storageBucket: "bezonotification.appspot.com",
  messagingSenderId: "819772866681",
  appId: "1:819772866681:web:f75ce3096adebde47c14a8"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BGtZjtnhKwzzwbMwV47Ebb60VYQ0GD4YOxoxT4FXbq2gD7tkRADnpV6TWrSRHw680391xEJ8M78SMvi3Cx8TxQQ",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
