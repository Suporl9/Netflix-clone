import firebase from 'firebase/app'
import "firebase/auth"
const app = firebase.initializeApp({
apiKey: REACT_APP_FIREBASE_API_KEY
authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN
databaseUrl: REACT_APP_FIREBASE_DATABASE_URL
projectId: REACT_APP_FIREBASE_PROJECT_ID
 REACT_APP_FIREBASE_STORAGE_BUCKET
 REACT_APP_FIREBASE_MESSAGING_SENDER_ID
 REACT_APP_FIREBASE_APP_ID
 REACT_APP_FIREBASE_MEASUREMENT_ID
})