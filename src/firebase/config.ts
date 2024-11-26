import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB2ZT1hqs0KiDiI3NvExS5GCC8yBZ21IEA',
  authDomain: 'pcclickerplus.firebaseapp.com',
  projectId: 'pcclickerplus',
  storageBucket: 'pcclickerplus.firebasestorage.app',
  messagingSenderId: '629795873608',
  appId: '1:629795873608:web:b3ff5aada175186b47c97d',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
