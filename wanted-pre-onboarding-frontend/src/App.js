import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Todo from './pages/Todo';


function App() {

  //JWT token 보유 여부에 따라 true || false
  const [isLogin,setIsLogin] = useState(false);

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='/signup' />
        <Route path='/signin' />
        <Route path='/todo' />
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
