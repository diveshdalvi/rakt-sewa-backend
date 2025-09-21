// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // ✅ Auth
import { getDatabase } from 'firebase/database'; // ✅ Database

const firebaseConfig = {
  apiKey: 'AIzaSyBQqQaR3xiaObK8xCKvj0AWO4xbLaq6W5Q',
  authDomain: 'rakta-sewa-6de82.firebaseapp.com',
  projectId: 'rakta-sewa-6de82',
  storageBucket: 'rakta-sewa-6de82.firebasestorage.app',
  messagingSenderId: '321227054778',
  appId: '1:321227054778:web:428a546397f1af21232c83',
  measurementId: 'G-TBG62WP3CQ',
};

const app = initializeApp(firebaseConfig);
export const FIREBASE_API_KEY = 'AIzaSyBQqQaR3xiaObK8xCKvj0AWO4xbLaq6W5Q';
export const auth = getAuth(app);
export const database = getDatabase(app);
