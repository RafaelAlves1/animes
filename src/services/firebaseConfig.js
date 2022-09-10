import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDZT1e_ScKG9pwrKyVg-bxVrfxO7AH27Fo',
  authDomain: 'animesauth.firebaseapp.com',
  projectId: 'animesauth',
  storageBucket: 'animesauth.appspot.com',
  messagingSenderId: '584588123602',
  appId: '1:584588123602:web:535710b9c565253754bc0b',
  measurementId: 'G-VX4N2Y9X3N',
};

export const app = initializeApp(firebaseConfig);
