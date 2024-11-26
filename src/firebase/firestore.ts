import type { User } from '@/models/user'
import { collection, doc, getDocsFromCache, setDoc } from 'firebase/firestore'
import { auth, db } from './config'

export const saveMyData = async (data: Partial<User>): Promise<void> => {
  if (!auth.currentUser?.uid) return

  try {
    const userRef = doc(db, 'users', auth.currentUser.uid)
    await setDoc(userRef, data, { merge: true })
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des données :', error)
    throw error
  }
}

export const findAllUsers = async (): Promise<User[]> => {
  const usersCollectionRef = collection(db, 'users')
  const querySnapshot = await getDocsFromCache(usersCollectionRef)

  const users: User[] = []
  querySnapshot.forEach((doc) => {
    const datas = doc.data() as User
    users.push({ id: doc.id, ...datas })
  })

  return users
}
