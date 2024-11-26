import { auth } from '@/firebase/config'
import type { User } from '@/models/user'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'


const db = getFirestore()

export const getMe = async (): Promise<User | null> => {
  if (!auth.currentUser?.uid) return null

  try {
    const userRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(userRef)
    if (docSnap.exists()) {
      return docSnap.data() as User
    } else {
      return null
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
    throw error
  }
}

export const saveData = async (data: Partial<User>): Promise<void> => {
  if (!auth.currentUser?.uid) return

  try {
    const userRef = doc(db, 'users', auth.currentUser.uid)
    await setDoc(userRef, data, { merge: true })
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des données :', error)
    throw error
  }
}
