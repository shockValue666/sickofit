import React,{FC} from 'react';
//import { Person,HairColor } from './comps/Person';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homes from './Pages/Homes';
import About from './Pages/RoadMap';
// import Profile from './Pages/Profile';
import Error from './Pages/Error'
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import Header from './comps/Header';
import CssBaseline from '@mui/material/CssBaseline';


const App: FC = () => {
  return (
        <Router>
          <CssBaseline/>
          <Navbar/>
          <Header/>
            {/* <div className="App"> */}
                <Routes>
                <Route path="/" element={<Homes/>} />
                <Route path="/roadmap" element={<About/>} />
                <Route path="*" element={<Error/>} />
                </Routes>
            {/* </div> */}
            <Footer/>
        </Router>
  );
}

export default App;
