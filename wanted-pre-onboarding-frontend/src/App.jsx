import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
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
        element={isLogin ? <Navigate to="/todo"/> : <Navigate to="/signup"/>} />
        <Route path='/signup' 
        element={isLogin ? <Navigate to="/todo"/> : <Signup />}/>
        <Route path='/signin'
        element={isLogin ? <Navigate to="/todo"/> : <Signin isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/todo' 
        element={isLogin ? <Todo /> : <Navigate to="/signin"/>}/>
      </Routes>
  </BrowserRouter>
    
  );
}

export default App;
