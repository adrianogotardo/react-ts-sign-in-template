import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { UserContextType, UserContext } from './contexts/UserContext';
import { ParsedUserType, useStoredUser } from './hooks/useStoredUser';
import HomePage from './pages/home';

function App() {
  const parsedUser: ParsedUserType | null = useStoredUser();
  const [userCredentials, setUserCredentials] = useState<UserContextType["userCredentials"]>(parsedUser);
  
  return (
    <React.Fragment>
      <UserContext.Provider value={{ userCredentials, setUserCredentials }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;