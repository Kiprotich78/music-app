import React from 'react'

const Login = () => {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-b from-pink-300 to-pink-700">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-gray-50 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Log In</h1>

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />

            <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green text-white bg-green-400 border-2 hover:border-indigo-400 focus:border-indigo-400 my-1"
            >Log In</button>

        </div>

        <div class="text-grey-dark mt-6">
            Do not have account? 
            <a class="no-underline border-b border-blue text-blue" href="../signup/">
                Sign Up
            </a>.
        </div>
    </div>
  </div>
  )
}

export default Login