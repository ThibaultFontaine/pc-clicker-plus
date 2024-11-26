import { type User } from '@/models/user'
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  type Unsubscribe,
} from 'firebase/firestore'
import { ref, type Ref } from 'vue'

const db = getFirestore()

export const useLeaderboard = (): { users: Ref<User[] | null>; subscribe: () => Unsubscribe } => {
  const users = ref<User[] | null>(null)

  const subscribe = (): Unsubscribe => {
    return onSnapshot(
      query(collection(db, 'users'), orderBy('money', 'desc')),
      (querySnapshot) => {
        users.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as User[]
      },
      (error) => {
        console.error("Erreur lors de l'écoute des utilisateurs :", error)
      },
    )
  }

  return { users, subscribe }
}
