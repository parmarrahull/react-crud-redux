import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }))
  }

  return (
    <>
      <div className='container'>
        <h2>Crud App with JSON Server</h2>
        <Link to="create" type="button" className="btn btn-primary">Create +</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {users?.map((user, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/edit/${user.id}`} type="button" className="btn btn-primary">Edit</Link>
                    <button onClick={() => handleDelete(user.id)} type="button" className="btn btn-denger">Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home