// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newstore from './components/Newstore'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            {/* <Route path='/' element={<Store/>}/> */}
            <Route path='/' element={<Newstore/>}/>
            {/* <Route path='/' element={<Contact/>}/> */}
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
