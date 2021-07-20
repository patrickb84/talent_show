import { firestore } from '../firebase';
import { useState } from 'react';
import { createTimeStamp } from '../utilties';

const TalentSignUpForm = () => {
  const [name, setName] = useState('');
  const [talent, setTalent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const signup = { name, talent };
    console.log(createTimeStamp(), signup);
    firestore
      .collection('signups')
      .doc(`${createTimeStamp()}_test`)
      .set(signup);

    setName('');
    setTalent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='signupName'>Name</label>
        <input
          id='signupName'
          type='text'
          className='form-control'
          value={name}
          onChange={e => setName(e.target.value)}
          data-lpignore="true"
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='talent'>Talent</label>
        <input
          id='talent'
          type='text'
          className='form-control'
          value={talent}
          onChange={e => setTalent(e.target.value)}
          data-lpignore="true"
        />
      </div>
      <button type='submit' className='btn btn-info'>
        Sign Up
      </button>
    </form>
  );
};

export default TalentSignUpForm;
