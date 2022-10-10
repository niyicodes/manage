import React from 'react'


const AbtList = ({num, title, paragraph}) => {
 return (
  <div className='flex gap-6 mb-3'>
   <div className="num">
   <h1 className='rounded-full inline-block text-base px-6 py-2 text-white bg-red-600'>{num}</h1>
   </div>
   <div className="text flex-col gap-3">
    <h3 className='text-lg text-slate-800 pb-3 font-bold'>{title}</h3>
    <p className='text-lg text-gray-500 text-justify font-semibold'>{paragraph}</p>
   </div>
  </div>
 )
}

export default AbtList