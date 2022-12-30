
import './App.css';
import Navbar from './component/Navbar/Navbar.jsx'
import {BrowserRouter as Router} from'react-router-dom'
import AllRoutes from './AllRoutes'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
