import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate("/")
  }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
          <h1>Add New User</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input onChange={e => { setName(e.target.value) }} type="name" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={e => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create