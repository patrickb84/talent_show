import { useEffect } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SiteSignUp from './components/SiteSignUp';
import TalentSignUpForm from './components/TalentSignUpForm';
import TalentSignUpList from './components/TalentSignUpList';
import TypeFormWidget from './components/TypeFormWidget';
import SignUpContextProvider from './providers/SignUpContextProvider.js';
import UserContextProvider from './providers/UserContextProvider';
import './styles/bootstrap/scss/bootstrap.scss';

function App() {
  // useEffect(() => {
  //   (async () => {
  //     fetch('https://cors-anywhere.herokuapp.com/corsdemo/https://api.typeform.com/forms/jh5qYSlj/responses')
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  //   })();
  // }, []);

  return (
    <UserContextProvider>
      <SignUpContextProvider>
        <main style={{ minHeight: '100vh' }}>
          {/* <Navbar /> */}
          <TypeFormWidget />
          <div className='container-fluid d-none'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card card-body mb-3'>
                  {/* <Login /> */}
                  <SiteSignUp />
                </div>

                <div className='card card-body'>
                  <TalentSignUpForm />
                </div>
              </div>
              <div className='col-md-6'>
                <TalentSignUpList />
              </div>
            </div>
          </div>
        </main>
      </SignUpContextProvider>
    </UserContextProvider>
  );
}

export default App;
