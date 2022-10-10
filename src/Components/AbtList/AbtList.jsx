import React from 'react'

const AbtList = ({num, title, paragraph}) => {
 return (
  <div className='flex gap-4 mb-3'>
   <h1 className='rounded-full text-base text-white py-2 px-4 bg-red-600'>{num}</h1>
   <div className="text flex-col gap-3">
    <h3 className='text-lg text-slate-800'>{title}</h3>
    <p className='text-lg text-gray-500 text-justify'>{paragraph}</p>
   </div>
  </div>
 )
}

export default AbtList