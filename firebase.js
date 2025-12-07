// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-0DlZLsSKBomOs1aNoZJmTdalkmNG76c",
  authDomain: "staffmanagementapp-ed7d8.firebaseapp.com",
  databaseURL: "https://staffmanagementapp-ed7d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "staffmanagementapp-ed7d8",
  storageBucket: "staffmanagementapp-ed7d8.appspot.com",
  messagingSenderId: "529877240471",
  appId: "1:529877240471:web:ff40ce2112648e07b7f7d2",
  measurementId: "G-H5TCKRFBPS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
