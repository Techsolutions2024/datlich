
const firebaseConfig = {
  apiKey: "AIzaSyALscDHNIWUlhVSDCQfyUtQV_mXGGBlDb8",
  authDomain: "datlich-af6a6.firebaseapp.com",
  databaseURL: "https://datlich-af6a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datlich-af6a6",
  storageBucket: "datlich-af6a6.firebasestorage.app",
  messagingSenderId: "1048497637391",
  appId: "1:1048497637391:web:9e3f85457fa1aa08ecbb7a",
  measurementId: "G-DTEDFFQ6KR"
};
// Khởi tạo Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };