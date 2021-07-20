import { useState } from 'react';
import { signInWithEmail } from '../firebase';
import { validateEmail } from '../utilties';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      // use valid email
      return;
    }
    if (password === "") {
      // use a password
      return;
    }
    signInWithEmail(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className='mb-3'>
        <label htmlFor='email'>Email address</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
