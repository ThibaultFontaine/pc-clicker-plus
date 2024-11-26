import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { auth } from './config'

export const authenticateAnonymously = async () => {
  try {
    const userCredential = await signInAnonymously(auth)
    console.log('Utilisateur connecté anonymement :', userCredential.user)
    return userCredential.user
  } catch (error) {
    console.error("Erreur lors de l'authentification anonyme :", error)
    throw error
  }
}

export const onUserAuthStateChanged = (callback: (user: any) => void) => {
  onAuthStateChanged(auth, callback)
}

export const initializeAuth = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // Si aucun utilisateur, démarre une session anonyme
        try {
          await signInAnonymously(auth)
          resolve()
        } catch (error) {
          console.error("Erreur lors de l'authentification anonyme :", error)
          reject(error)
        }
      } else {
        console.log('Utilisateur authentifié :', user)
        resolve()
      }
    })
  })
}
