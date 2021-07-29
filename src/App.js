import './styles/main.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './Screens/Home';
import TypeFormWidget from './Screens/TypeFormWidget';
import SongBookScreen from './Screens/Songbook';
import LineupScreen from './Screens/Lineup';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route path='/lineup'>
          <LineupScreen />
        </Route>
        <Route path='/songbook'>
          <SongBookScreen />
        </Route>
        <Route path='/signup'>
          <TypeFormWidget />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
