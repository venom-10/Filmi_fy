import React from 'react'
import error from '../assets/error.svg'

export default function Error() {
  return (
    <div className='bg-gray-800 dark:bg-white'>
      <img className='w-screen h-screen' src={error} alt="404" />
    </div>
  );
}
