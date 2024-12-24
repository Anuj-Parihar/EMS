import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen'>
        <div className="rounded-xl py-6 px-9 w-[45%] my-5 bg-blue-500">
        <h2 className='text-3xl'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-nedium'>New Task</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] my-5 bg-green-500">
        <h2 className='text-3xl'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-nedium'>Completed</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] my-5 bg-yellow-500">
        <h2 className='text-3xl'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-nedium'>Accepted</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] my-5 bg-red-500">
        <h2 className='text-3xl'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-nedium'>Failed</h3>
        </div>
       
    </div>
  )
}

export default TaskListNumbers