import React from 'react'

export default function Modal({ children, title, onClose }) {
  return (
    <>
      <div className="fixed bg-black/50 inset-0" onClick={onClose} />
      <div className="w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-2">{title}</h1>
        {children}
      </div>
    </>
  )
}
