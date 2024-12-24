
// import React, { useContext, useEffect, useState } from "react";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import Login from "./components/Auth/Login";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const [authData] = useContext(AuthContext);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (email === "admin@eg.com" && password === "123") {
//       setUser("admin");
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else if (authData) {
//       const employee = authData.find(
//         (e) => e.email === email && e.password === password
//       );
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee", data: employee })
//         );
//       } else {
//         alert("Invalid Credentials");
//       }
//     } else {
//       alert("Authentication data is missing.");
//     }
//   };

//   return (
//     <>
//       {!user && <Login handleLogin={handleLogin} />}
//       {user === "admin" && (
//         <AdminDashboard changeUser={setUser} data={loggedInUserData} />
//       )}
//       {user === "employee" && (
//         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
//       )}
//     </>
//   );
// };

// export default App;


import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@eg.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Authentication data is missing.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;





