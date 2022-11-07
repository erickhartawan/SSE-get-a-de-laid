import './App.scss';
import SignUp from './screen/Auth/SignUp/SignUp';
import Covid from './screen/covid-19/covid';
import Login from './screen/Auth/Login/Login';
import Landing from './screen/Landing/Landing';
import MatchCoupled from './screen/Coupled/MatchCoupled';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/Header'
import AuthScreen from './screen/Auth/AuthScreen';
import UserInfo from './screen/Auth/SignUp/UserInfo';
import ChatRoom from './screen/Chat/ChatRoom';
import Booking from './screen/Booking/Booking';
import Payment from './screen/Booking/Payment';
function App() {
  return (
    <Router>
      <div className="App w-screen h-screen flex flex-1 flex-col items-center">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/signup" element={<AuthScreen />}/>
          <Route path="/covid-19" element={<Covid />}/>
          <Route path="/user-register" element={<UserInfo />}/> //register
          <Route path="/login" element={<AuthScreen />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/user/:user_id" element={<Landing />} />
          <Route path="/match-coupled" element={<MatchCoupled />}/>
          <Route path="/chatroom" element={<ChatRoom />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/payment" element={<Payment />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
