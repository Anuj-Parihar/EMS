


// import React, { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [authData, setAuthData] = useState([]);

//   useEffect(() => {
//     const { employees } = getLocalStorage();
//     setAuthData(employees || []);
//   }, []);

//   useEffect(() => {
//     setLocalStorage({ employees: authData });
//   }, [authData]);

//   return (
//     <AuthContext.Provider value={[authData, setAuthData]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState([]);

  useEffect(() => {
    const { employees } = getLocalStorage();
    setAuthData(employees || []);
  }, []);

  useEffect(() => {
    setLocalStorage({ employees: authData });
  }, [authData]);

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




