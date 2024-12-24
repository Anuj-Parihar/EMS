import React from 'react'

const Header = (props) => {
//  }
const  logOutUser = ()=>{
  localStorage.setItem('loggedInUser','');
  // window.location.reload();
  props.changeUser('');
  
}
  
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>Name 😍</span></h1>
        <button onClick={logOutUser} className="border-non text-white text-lg font-medium outline-none  bg-red-600 py-2 px-5 rounded-full">Log Out</button>
    </div>
  )
}

export default Header