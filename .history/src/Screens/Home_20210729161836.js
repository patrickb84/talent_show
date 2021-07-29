import { Link } from 'react-router-dom';
import header from '../img/80s_palm.jpg';

const HomeScreen = () => {
  return (
    <div className='screen-padding bg-black h-100'>
      <div className='row g-0 d-xl-flex align-items-xl-center'>
        <div className='col-xl-4 order-2 order-xl-1'>
          <div className='p-xl-4 p-3 text-light mb-5' style={{ maxWidth: 600 }}>
            <h1 className='mb-3 mt-4'>Hi everybody,</h1>
            <p>
              The talent show is less than a week away, so if you haven't yet,
              please <Link to='/signup'>go sign up for the talent show</Link>.
              We want to know what you're up to! And it would help us make a
              crafty plan.
            </p>
            <p>
              👨‍🎤🎸 Before and after the show and at some point in the middle, we
              will be rocking out to some 80s songs and would love it if you
              joined us. We're <Link to='/songbook'>making a songbook</Link>.
            </p>
            <div className='border-start ps-4 border-info border-5 mt-4'>
              <p className='lead'>
                <em>That's right we're singing 80s songs.</em>
              </p>
            </div>
            <div className='mt-5'>
              <Link to='/signup' className='btn btn-primary'>
                🤯 Sign up already!!!
              </Link>
            </div>
            <div className='mt-2'>
              <Link to='/songbook' className='btn btn-info'>
                👩‍🎤 Did you say 80's songs?
              </Link>
            </div>
            <p className="mt-5 text-muted">From Railee & Patrick</p>
          </div>
        </div>

        <div className='col-xl-8 order-1 order-xl-2'>
          <img src={header} alt='Talent Show' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
