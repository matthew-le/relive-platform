import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './mainfeed/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserInfo=localStorage.getItem('isLoggedIn');

    if (storedUserInfo === '1'){
      setIsLoggedIn(true);
    };
  }, []);

  const loginHandler = (email, password) => {
    // demo but need to check email and password w/ backend
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn','1');
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider
        value ={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
  );
}

export default App;