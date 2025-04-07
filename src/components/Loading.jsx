import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='animate-spin border-t-transparent border-4 w-12 scale-3d h-12 rounded-full border-blue-500'></div>
    </div>
  )
}

export default Loading