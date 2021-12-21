import './App.css';
import Login from "./login/login.js";
import Register from "./register/register";
import Forget from "./forget/forget";
import Home from "./home/home.js"
import Hots from "./home/hots/hots.js";
import Questions from "./questions/questions.js";
import Repository from './repository/repository';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <br />
      <Routes>
        {/* element showing components  */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<Hots />}></Route>
        </Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route parh="/repository" element={<Repository />}></Route>
        {/* <Route path="/Myspace" element={<Myspace/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App;
