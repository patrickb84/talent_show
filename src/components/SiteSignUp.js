import { useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import { validateEmail } from '../utilties';

const SiteSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!validateEmail(email)) throw new Error('Pls. use a valid email!');
      if (password.length < 6)
        throw new Error('Pls. make your password at least 6 characters long.');
    } catch (error) {
      console.error(error);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName: email });
      user.updateProfile({ displayName: email });
      console.log("Success!", email, password)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <div className='mb-3'>
        <label htmlFor='email'>Email address</label>
        <input
          id='email'
          type='email'
          className='form-control'
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby='emailHelp'
        />
        <div id='emailHelp' className='form-text'>
          Your email will only be used for sign up for the talent show.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          className='form-control'
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby='passwordHelp'
        />
        <div id='passwordHelp' className='form-text'>
          Passwords should be at least 6 characters long.
        </div>
      </div>
      <div className='form-check mb-3'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          id='chkShowPassword'
        />
        <label className='form-check-label' htmlFor='chkShowPassword'>
          Show Password
        </label>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default SiteSignUp;
