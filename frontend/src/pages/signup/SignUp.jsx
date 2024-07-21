import React from 'react';

// Assuming GenderCheckbox is another component you've defined elsewhere
import GenderCheckbox from './GenderCheckbox'; 

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-[24rem] mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <div className='flex items-center justify-center space-x-2 mb-6'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up</h1>
          <span className='text-3xl font-semibold text-blue-500'>ChatApp</span>
        </div>
        <form>
          <div className='mb-4'>
            <label className='block text-base font-medium text-gray-700'>
              Full Name
              <input type='text' placeholder='John Doe' className='w-full mt-1 border border-gray-300 rounded-md py-3 px-4 text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-base font-medium text-gray-700'>
              Username
              <input type='text' placeholder='johndoe' className='w-full mt-1 border border-gray-300 rounded-md py-3 px-4 text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-base font-medium text-gray-700'>
              Password
              <input type='password' placeholder='Enter Password' className='w-full mt-1 border border-gray-300 rounded-md py-3 px-4 text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-base font-medium text-gray-700'>
              Confirm Password
              <input type='password' placeholder='Confirm Password' className='w-full mt-1 border border-gray-300 rounded-md py-3 px-4 text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' />
            </label>
          </div>

          <GenderCheckbox />

          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account?
          </a>
          <div className='mt-4'>
            <button type='submit' className='w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
