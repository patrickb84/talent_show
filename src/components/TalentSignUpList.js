import { useContext } from 'react';
import { SignUpContext } from '../providers/SignUpContextProvider.js.js';

const TalentSignUpList = () => {
  const signUps = useContext(SignUpContext);

  return (
    <div>
      <h1>Hello</h1>
      {signUps.map(signup => (
        <div key={signup.id}>
          <p>{signup.name}</p>
          <p>{signup.talent}</p>
        </div>
      ))}
    </div>
  );
};

export default TalentSignUpList;
