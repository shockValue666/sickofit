import React,{FC} from 'react';
import { Person,HairColor } from './comps/Person';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homes from './Pages/Homes';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Error from './Pages/Error'

const App: FC = () => {
  return (
    <Router>
      <a href="/about">about</a>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Person name={"michalis"} age={23} email={"mikropsolis"} getName = {(name:string) => {return name;}} hairColor={HairColor.Pink} />
      </div>
    </Router>
  );
}

export default App;
