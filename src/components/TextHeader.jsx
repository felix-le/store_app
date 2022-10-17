import React from 'react'
import { Container } from './Container'

const TextHeader = ({ label, title, description }) => {
  return (
    <Container>
      <h2 className="text-center text-lg font-semibold text-indigo-600">
        {label}
      </h2>
      <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      <p className="mx-auto mt-5 max-w-prose text-center text-xl text-gray-500">
        {description}
      </p>
    </Container>
  )
}

export default TextHeader
