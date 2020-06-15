import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyDz3JmPslCFmc2NY00lO-oK5qOZWDDrmBw",
        authDomain: "crwn-db-37073.firebaseapp.com",
        databaseURL: "https://crwn-db-37073.firebaseio.com",
        projectId: "crwn-db-37073",
        storageBucket: "crwn-db-37073.appspot.com",
        messagingSenderId: "881414649850",
        appId: "1:881414649850:web:352ab62c9a28dc0afd5643",
        measurementId: "G-CTKQKVMS9P"
      }; 

      firebase.initializeApp(config);

      export const auth=firebase.auth(); 
      export const firestore =firebase.firestore();
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'selecet_account'});
      export const signInWithGoogle =() => auth.signInWithPopup(provider);

      export default firebase;
