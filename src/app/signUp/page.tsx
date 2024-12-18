import React from 'react'
import Image from "next/image";
import CreateAccountForm from './components/CreateForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Image
            src="/barbershop-logo.svg"
            alt="Barbershop Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Welcome to Our Barbershop
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Create account to book your next appointment
          </p>
        </div>
        <CreateAccountForm />
      </div>
    </div>
  )
}

export default LoginPage