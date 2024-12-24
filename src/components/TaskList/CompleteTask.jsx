import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 ml-2 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className=" text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className=" text-sm mt-2">
          {data.description}
        </p>
        <div className="flex justify-between mt-20">
          <button className="bg-green-500 py-2 px-2 rounded text-sm">
            Completed
          </button>
        </div>
      </div>
      {/* <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 ml-2 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Low</h3>
                <h4 className=' text-sm'>20 fab 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> this is first card...</h2>
            <p className=' text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vitae obcaecati laudantium aspernatur incidunt recusandae vel, maiores fugiat! Natus, ullam?
            </p>
        </div>
        <div className="flex justify-between mt-20">
          <button className="bg-green-500 py-2 px-2 rounded text-sm">
            Completed
          </button>
        </div> */}
    </div>
  );
};

export default CompleteTask;
