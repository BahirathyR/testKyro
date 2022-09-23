import { Router } from 'react-router-dom';
import './App.css';
import DisplayList from './components/DisplayList';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={DisplayList}/>
    </Switch>
  );
}

export default App;
