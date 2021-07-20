import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

export const SignUpContext = React.createContext([]);

const SignUpContextProvider = props => {
  const [signUpList, setSignUpList] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('signups').onSnapshot(snapshot => {
      const signUps = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      setSignUpList(signUps);
    });
    return unsubscribe;
  }, []);

  return (
    <SignUpContext.Provider value={signUpList}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;

