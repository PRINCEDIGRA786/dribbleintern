import logo from './logo.svg';
import './App.css';
import Purpose from './components/Purpose';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userstate from './contextapi/Userstate'
import Verifypage from './components/Verifypage';
function App() {
  return (
    <>
      <Userstate>
        <BrowserRouter>
          <Routes>
            <Route path="/vpage" element={<Verifypage />} />
            <Route path="/" element={<Signup />} />
            <Route path="/purpose" element={<Purpose />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Userstate>
    </>
  );
}

export default App;
