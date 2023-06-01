import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Music from './pages/Music';
import { Route, Routes } from 'react-router-dom';

function App() {

  const apiKey = process.env.RAPID_API_KEY;
  console.log("rapid_api_key = ", apiKey);

  return (
    <>  
      <Routes>
        <Route path='/*' element={<Music />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
