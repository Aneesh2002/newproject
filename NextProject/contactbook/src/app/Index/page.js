import React from 'react'
import Navbar from "@/components/Navbar";
import '../Index/index.css'


const Index = () => {
  return (
    <>
    <div className='body'>
        <Navbar />
        <div className="container mt-5">
          <h3 className="text-center mb-4" style={{ color: '#cf3ef3' }}>
            Contact List
          </h3>
          <table className="table table-bordered table-hover">
            <thead className="table-info">
              <tr className="bg-black">
                <th>Sl.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Aneesh MN</td>
                <td>Aneesh@gmail.com</td>
                <td>1234567890</td>
                <td className="text-center">
                  <a href="/Update">
                    <button className='update btn btn-sm'>Edit</button>
                  </a>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Akhil</td>
                <td>Akhil@gmail.com</td>
                <td>9876543210</td>
                <td className="text-center">
                  <a href="/Update">
                    <button className='update btn btn-sm'>Edit</button>
                  </a>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Index