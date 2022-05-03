import React from 'react';

// falta todo el css. 
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Main from './Pages/Main';
import Gallery from './Pages/Gallery';
import NotFound from './Pages/NotFound';
import Connectbutton from './Components/Connectbutton';

export default class App extends React.Component {
  render(){
    return(
      
      <Router>
         <div className="App">

        <Routes>
          <Route  path='/' element={<Main/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </div>
        <div className="page-body">
       
        </div>
      </Router>
      
    )
  }
}
