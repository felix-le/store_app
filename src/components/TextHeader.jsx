import React from 'react'

const TextHeader = ({label, title, description}) => {
  return (
    <>
        <h2 className="text-lg text-center font-semibold text-indigo-600">{label}</h2>
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </p>
        <p className="mx-auto text-center mt-5 max-w-prose text-xl text-gray-500">
          {description}
        </p>
    </>
  )
}

export default TextHeader