import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Main from './Pages/Main';
import Gallery from './Pages/Gallery';
import Nav from './Components/Nav';

function App(){
    return(
      <>
     <Main/>
     <Gallery/>
     <Nav/>
     </>
        
    )
}
export default App;


/*
<Router>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </Router>
      </>
*/
