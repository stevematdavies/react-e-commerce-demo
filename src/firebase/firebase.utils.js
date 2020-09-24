import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDd3sqIEBBcbUQqmNVbubmXalxUg5fxVTY",
  authDomain: "react-e-commerce-demo-db.firebaseapp.com",
  databaseURL: "https://react-e-commerce-demo-db.firebaseio.com",
  projectId: "react-e-commerce-demo-db",
  storageBucket: "react-e-commerce-demo-db.appspot.com",
  messagingSenderId: "88130618899",
  appId: "1:88130618899:web:68622f26addcc19945e1e6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user')
    }
  }
  return userRef
}

// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const gProvider = new firebase.auth.GoogleAuthProvider()
gProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(gProvider)

export default firebase


