'use client'

import React from 'react'
import { Button } from './Button'

const LoginForm = () => {
    return (
        <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div className='mb-4'>
                    <label htmlFor="identifier" className="sr-only">
                        Email or Phone Number
                    </label>
                    <input
                        id="identifier"
                        name="identifier"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Email or Phone Number"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-700 rounded bg-gray-800"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-red-500 hover:text-red-400">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <Button type="submit">
                    Sign in
                </Button>
            </div>

        </form>
    )
}

export default LoginForm