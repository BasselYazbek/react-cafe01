/* // Auth.js
import React, { createContext, useContext, useState } from 'react';

// Create an authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Directly set the user and role
  const [user, setUser] = useState({ username: 'owner', role: 'owner' });

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 */