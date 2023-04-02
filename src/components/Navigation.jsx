import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React 2023</span>
      <div>
        <Link to="/" className="mr-3">
          Products
        </Link>
        <Link to="/about">About us</Link>
      </div>
    </nav>
  )
}
