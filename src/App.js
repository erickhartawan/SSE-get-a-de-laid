import './App.scss';
import SignUp from './screen/Auth/SignUp/SignUp';
import Login from './screen/Auth/Login/Login';
import Landing from './screen/Landing/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/Header'
import AuthScreen from './screen/Auth/AuthScreen';

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen flex flex-1 flex-col items-center">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/signup" element={<AuthScreen />}/>
          <Route path="/login" element={<AuthScreen />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
