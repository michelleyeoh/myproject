import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { ErrorPage } from './components/erorrPage';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Portfolio } from './components/portfolio';
import Hamburger from './components/hamburger';
// import { Pokemon } from './components/pokemon';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hamburger/>
      <Router>
        <div >
          <Routes>
            <Route exact path ="/" Component={Home}/>
            <Route path ="/aboutme" Component={AboutMe}/>
            <Route path ="/portfolio" Component={Portfolio}/>
            {/* <Route path ="/pokemon" Component={Pokemon}/> */}
            <Route path ="*" Component={ErrorPage}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
