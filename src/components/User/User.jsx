import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {daddy, noddy} = useParams()
  return (
    <div>User: {noddy} {daddy}</div>
  )
}

export default User