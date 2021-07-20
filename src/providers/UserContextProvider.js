import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = React.createContext(null);

const UserContextProvider = props => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setUser({ uid: snapshot.id, ...snapshot.data() });
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
