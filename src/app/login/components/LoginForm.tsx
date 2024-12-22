'use client'

import React, { useState } from 'react'
import { Button } from '../../components/Button'
import api from '@/lib/axios'
import { classifyEmailOrPhone } from '@/util/classifyEmailOrPhone';
import { showToast } from '@/util/toast';

interface LoginDto{
    phone?: number;
    email?: string;
    password: string;
}

const LoginForm = () => {

    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleLogin = async (e: React.FormEvent)=>{
        e.preventDefault();

        setError("")

        try{
            const classifiedData = classifyEmailOrPhone(emailOrPhone);
            const loginData = 
            {
                ...classifiedData,
                password
            }

            const response = await api.post(
                "/auth/login",
                loginData
            )
            
            showToast({ type: "success", message: "Logado com sucesso" });

        }catch(err){
            console.log(err)
            setError("Erro no login")
        }
    }


    return (
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div className='mb-4'>
                    <label htmlFor="emailOrPhone" className="sr-only">
                        Email or Phone Number
                    </label>
                    <input
                        id="emailOrPhone"
                        name="emailOrPhone"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Email or Phone Number"
                        aria-required
                        value={emailOrPhone}
                        onChange={(e)=> setEmailOrPhone(e.target.value)}
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
                        aria-required
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
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