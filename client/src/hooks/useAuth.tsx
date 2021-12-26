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

//types
interface GlobalType {
  user: object | null | boolean;
  signIn: Function;
  signOut: Function;
  signUp: Function;
  loading: boolean;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<GlobalType | null>(null);

//provide children with access to context
export const useAuth = () => {
  return useContext(AuthContext);
};

//wrapper provider component
const AuthProvider: React.FC<{}> = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

//hook to create auth object handle states
export const useProvideAuth = () => {
  const [user, setUser] = useState<object | null | boolean>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  const signIn = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);

        return response.user;
      });
  };

  const signUp = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setLoading(false);
      });
  };

  //component mounts
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(false);
        setLoading(false);
      }
    });
    //clean up subscription
    return () => unsubscribe();
  }, [user]);

  return { user, signIn, signOut, loading, signUp, email, setEmail };
};
