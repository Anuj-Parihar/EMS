// import React, { useState } from "react";

// const Login = ({handleLogin}) => {


//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    
//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//     setEmail("");
//     setPassword("");
    
//   };
//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <div className="border-2 border-emerald-600 p-20">
//         <form
//           onSubmit={(e) => {
//             submitHandler(e);
//           }}
//           className="flex flex-col items-center justtify-center"
//         >
//           <input value={email}
//           onChange={(e)=>{
//             setEmail(e.target.value);
//           }}
//             required
//             className="border-2  outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
//             type="email"
//             placeholder="Enter your email"
//           />
//           <input
//             value={password}
//             onChange={(e)=>{
//             setPassword(e.target.value);
//           }}    
//             required
//             className="border-2  outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400 mt-2"
//             type="password"
//             placeholder="Enter your pasword"
//           />
//           <button
//             className="border-non text-white outline-none  bg-emerald-600 py-3 px-5 rounded-full mt-4"
//             type="password"
//             placeholder="Enter your pasword"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400 mt-2"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="border-none text-white outline-none bg-emerald-600 py-3 px-5 rounded-full mt-4"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

