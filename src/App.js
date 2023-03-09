
import './App.css';
import Landing from './Landingpage/landing'
import enroll from './Enrollpage/enroll'
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = ()=>{
return (
  <> 
  <Router>
    <Landing/>
    <Routes>
    <Route path='/E' element={<enroll/>} exact />
    </Routes>

  </Router>
  
    
  </>
);
}

export default App;
