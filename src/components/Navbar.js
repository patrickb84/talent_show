import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../providers/UserContextProvider';

const Navbar = () => {
  const user = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a href='#' className='navbar-brand'>
          Talent Show Sign Up
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a href='' className='nav-link' aria-current='page'>
                Home
              </a>
            </li>
          </ul>

          <div className='d-flex align-items-lg-center'>
            {!user ? (
              <a href='#' className='btn btn-outline-success'>
                Sign In
              </a>
            ) : (
              <>
                <span className='text-light'>{user.displayName}</span>
                <button type='button' className='ms-3 btn btn-primary'>
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
