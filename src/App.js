import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Home, Search, ProjChat} from './Pages'
import {NavbarComponent, Footer} from './Components'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <NavbarComponent/>
        <Switch>
          <Redirect from='/' to='/home' exact/>
          <Route path='/home' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/search/:projId' exact component={ProjChat} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App;