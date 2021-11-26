import { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBV7jGWmSqWIDPldlzz6293FQTF47_2W2g',
  authDomain: 'netflix-clone-45ce0.firebaseapp.com',
  projectId: 'netflix-clone-45ce0',
  storageBucket: 'netflix-clone-45ce0.appspot.com',
  messagingSenderId: '332588188509',
  appId: '1:332588188509:web:55a228fd4259225c605eb4',
  measurementId: 'G-2Y8BM440YC',
};

firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext();

//provide children with access to context
export const useAuth = () => {
  return useContext(AuthContext);
};

//wrapper provider component
const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

//hook to create auth object handle states
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          setUser(response.user);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  //component mounts
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    //clean up subscription
    return () => {
      unsubscribe();
    };
  });

  return { user, signIn, signOut };
};
