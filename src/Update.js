import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id === id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: name,
      email: email
    }))
    navigate("/")
  }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input value={uname} onChange={e => { setName(e.target.value) }} type="name" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input value={uemail} onChange={e => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Update