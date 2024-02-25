import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { ErrorPage } from './components/erorrPage';
import { Header } from './components/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div>
          <Routes>
            <Route exact path ="/" Component={Home}/>
            <Route path ="/aboutme" Component={AboutMe}/>
            <Route path ="*" Component={ErrorPage}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
