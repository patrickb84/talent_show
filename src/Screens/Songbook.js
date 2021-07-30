import header from '../img/80S_letsrock.jpg';

const SongBookScreen = () => {
  return (
    <div className='screen-padding bg-black h-100'>
      <div className='container'>
        <div className='row'>
          <div id='songlist' className='col-xl-6 order-2 pb-5'>
            <div className='text-light mb-5 px-xl-5'>
              <div id='text1' className='mb-5 pt-4 pt-xl-5'>
                <div className='alert alert-primary'>
                  <h1 className='mb-3 mt-3'>Eighties Hits</h1>
                  <p>
                    Imagine us all rocking out to these tunes <em>together</em>?
                  </p>
                  <p>
                    We'll turn on a YouTube backing track. Those who rock
                    instruments will be invited to play loudly. Let's rock together as one.
                  </p>
                </div>
              </div>
              <h2 className="pt-3">THE SONGS</h2>
              <hr className='mt-3 mb-5' />

              <div className='mb-5'>
                <h3 className='h4'>Nothing's Gonna Stop Us</h3>
                <p>By Starship</p>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/watch?v=vJVtAzpX50k'>
                      SONG + LYRICS
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=xGabtm2HXeo'>
                      Backing Track
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.google.com/search?q=nothings+gonna+stop+us+lyrics'>
                      Just lyrics
                    </a>
                  </li>
                  <li>
                    <a href='https://tabs.ultimate-guitar.com/tab/starship/nothings-gonna-stop-us-now-chords-860555'>
                      Chords
                    </a>
                  </li>
                  <li>
                    <a href='https://tabs.ultimate-guitar.com/tab/starship/nothings-gonna-stop-us-now-chords-1415096'>
                      Guitar chords: capo 2nd fret
                    </a>
                  </li>
                </ul>
              </div>

              <div className='mb-5'>
                <h3 className='h4'>Livin' On A Prayer</h3>
                <p>By Bon Jovi (aka yr moms fave)</p>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/watch?v=bXsmGSnq3lE'>
                      SONG + LYRICS
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=9-A_Bpi_Pbo'>
                      Backing Track
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.google.com/search?q=livin+on+a+prayer+lyrics'>
                      Just lyrics
                    </a>
                  </li>
                  <li>
                    <a href='https://tabs.ultimate-guitar.com/tab/bon-jovi/livin-on-a-prayer-chords-687555'>
                      Chords
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=lDK9QqIzhwk'>
                      Official Music Video
                    </a>{' '}
                    (youtube)
                  </li>
                </ul>
              </div>

              <div className='mb-5'>
                <h3 className='h4'>[Simply] The Best</h3>
                <p>By Tina Turner</p>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/watch?v=wTm5-YZJ5q4'>
                      SONG + LYRICS
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=EmSdwh1LBn0'>
                      Backing Track
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href='https://www.google.com/search?q=simply+the+best+lyrics'>
                      Just lyrics
                    </a>
                  </li>
                  <li>
                    <a href='https://tabs.ultimate-guitar.com/tab/tina-turner/the-best-chords-152012'>
                      Chords
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=MsRUnInJ4CQ'>
                      This beautiful cover...
                    </a>{' '}
                    (youtube)
                  </li>
                </ul>
              </div>

              {/* <div className='mb-5'>
                <h2 className="text-warning" style={{ fontSize: 12, fontWeight: 'bold', letterSpacing: 1.6}}>BONUS 60s SONG</h2>
                <h3 className='h4'>Stand By Me</h3>
                <p>By Ben E. King</p>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/watch?v=tTSjI-_RwEE'>
                      SONG + LYRICS
                    </a>{' '}
                    (youtube)
                  </li>
                  <li>
                    <a href=''>Just lyrics</a>
                  </li>
                  <li>
                    <a href=''>Chords</a>
                  </li>
                  <li>
                    <a href=''>Guitar chords: capo 2nd fret</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className='text-white border-top pt-4 mt-5'>
              Got a request?{' '}
              <a href='mailto:patrick.j.bradshaw@gmail.com'>Let us know!</a>
            </div>
          </div>

          <div className='col order-1'>
            <img
              src={header}
              className='rounded-3 border border-warning border-4 mt-5'
              alt='Lets Rock'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongBookScreen;
