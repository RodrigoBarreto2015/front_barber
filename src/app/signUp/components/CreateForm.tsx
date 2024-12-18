'use client'

import { useState } from 'react'
import { Button } from '../../components/Button'
import api from '@/lib/axios';

interface CreateUserDto {
  name: string;
  phone: bigint;
  email: string;
  password: string;
}


export default function CreateAccountForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState<bigint>(BigInt(0))
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const user: CreateUserDto = { name, email, phone, password }

    try {

      const response = await api.post(
        "/user",
        {...user, phone: JSON.parse(phone.toString())}
      )

      console.log(response.data)
      alert("sucesso")

    } catch (err) {
      console.log(err)
      alert(err)
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div className='mb-4'>
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full mb-4 px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full mb-4 px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            className="appearance-none rounded-none relative block w-full mb-4 px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="(85) xxxx-xxxx)"
            value={phone !== undefined ? phone.toString() : 0} // Corrige o problema
            onChange={(e) => {
              const value = e.target.value;
              if (!value) {
                setPhone(BigInt(0)); // Limpa o estado se o valor for vazio
              } else {
                setPhone(BigInt(value)); // Converte a entrada para bigint
              }
            }}
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
            className="appearance-none rounded-none relative block w-full mb-4 px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button type="submit" fullWidth>
          Create Account
        </Button>
      </div>
    </form>
  )
}