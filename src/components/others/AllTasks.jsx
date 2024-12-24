
// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// const AllTasks = () => {
//   const [authData] = useContext(AuthContext);

//   return (
//     <div id="statuslist" className="bg-[#1c1c1c] p-5 rounded mt-5">
//       <div className="bg-red-400 mb-3 py-3 px-4 flex justify-between rounded">
//         <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
//         <h3 className="w-1/5 text-lg font-medium">New Task</h3>
//         <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
//         <h5 className="w-1/5 text-lg font-medium">Completed</h5>
//         <h5 className="w-1/5 text-lg font-medium">Failed</h5>
//       </div>
//       <div>
//         {authData.map((e, idx) => (
//           <div
//             key={idx}
//             className="border-2 border-green-500 mb-3 py-3 px-4 flex justify-between rounded"
//           >
//             <h2 className="text-lg w-1/5 font-medium">{e.firstName}</h2>
//             <h3 className="text-lg w-1/5 font-medium text-blue-500">
//               {e.taskNumbers.newTask}
//             </h3>
//             <h5 className="text-lg w-1/5 font-medium text-yellow-400">
//               {e.taskNumbers.active}
//             </h5>
//             <h5 className="text-lg w-1/5 font-medium text-white">
//               {e.taskNumbers.completed}
//             </h5>
//             <h5 className="text-lg w-1/5 font-medium text-red-400">
//               {e.taskNumbers.failed}
//             </h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTasks;


import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [authData, setAuthData] = useContext(AuthContext);

  const updateTaskStatus = (employeeName, taskIndex, status) => {
    const updatedData = authData.map((employee) => {
      if (employee.firstName === employeeName) {
        const updatedTasks = [...employee.tasks];
        const task = updatedTasks[taskIndex];
        task.newTask = false;

        if (status === "completed") {
          task.completed = true;
          task.failed = false;
          employee.taskNumbers.completed += 1;
        } else if (status === "failed") {
          task.completed = false;
          task.failed = true;
          employee.taskNumbers.failed += 1;
        }

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumbers: {
            ...employee.taskNumbers,
            active: employee.taskNumbers.active - 1,
          },
        };
      }
      return employee;
    });

    setAuthData(updatedData);
  };

  return (
    <div id="statuslist" className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-3 py-3 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div>
        {authData.map((e, idx) => (
          <div
            key={idx}
            className="border-2 border-green-500 mb-3 py-3 px-4 flex justify-between rounded"
          >
            <h2 className="text-lg w-1/5 font-medium">{e.firstName}</h2>
            <h3 className="text-lg w-1/5 font-medium text-blue-500">
              {e.taskNumbers.newTask}
            </h3>
            <h5 className="text-lg w-1/5 font-medium text-yellow-400">
              {e.taskNumbers.active}
            </h5>
            <h5 className="text-lg w-1/5 font-medium text-white">
              {e.taskNumbers.completed}
            </h5>
            <h5 className="text-lg w-1/5 font-medium text-red-400">
              {e.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;

