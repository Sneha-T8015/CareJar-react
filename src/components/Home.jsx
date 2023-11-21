import React from 'react';
import specialtiesData from './data';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className='p-4 flex flex-grow flex-wrap items-center justify-center gap-12'>
        {specialtiesData.map((specialty, index) => (
          <div key={index} className='max-w-sm bg-white border bg-gradient-to-br from-blue-300 via-pink-100 to-purple-200  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <Link to="#">
              <img className='rounded-t-lg h-[250px] w-full' src={specialty.image} alt='' />
            </Link>
            <div className='p-5'>
              <Link href="#">
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{specialty.title}</h5>
              </Link>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{specialty.body}</p>
              <div className='flex items-center justify-end '>
              <Link to='doctor' className='px-3 py-2 text-sm font-medium flex flex-row items-center text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Choose
                  <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
