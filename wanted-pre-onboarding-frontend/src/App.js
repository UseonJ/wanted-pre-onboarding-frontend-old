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
        <Route path='/' 
        render={() => (isLogin ? <Redirect to="/todo" /> : <Redirect to="/signin" />)}/>
        <Route path='/signup' 
        render={() => (isLogin ? <Redirect to="/todo" /> : <Signup />)}/>
        <Route path='/signin'
        render={() => (isLogin ? <Redirect to="/todo" /> : <Signin />)} />
        <Route path='/todo' 
        render={() => (isLogin ? <Todo /> : <Redirect to="/signin" />)}/>
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
