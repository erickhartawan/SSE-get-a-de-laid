import './App.css';
import SignUp from './screen/SignUp/SignUp';
import Login from './screen/Login/Login';
import Landing from './screen/Landing/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/Header'

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen flex flex-1 flex-col justify-center items-center">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
