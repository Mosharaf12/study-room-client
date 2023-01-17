import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])

    useEffect(()=>{
        fetch(`https://study-room-server.vercel.app/student`)
        .then(res => res.json())
        .then(data => {
            setStudents(data)
            setLoading(false);
        })
    },[])
  

    const handleDelete = (id) =>{
     const confirm =window.confirm('Are you sure you want to delete')
     if(confirm){
        fetch(`https://study-room-server.vercel.app/student/${id}`,{
            method: 'DELETE',
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           window.location.reload(true);
        })
     }
    }
    if(loading){
        return <h2 className='text-xl py-10 text-center'>Loading...</h2>
    }
    return (
        <div className='max-w-[1240px] mx-auto py-24 min-h-screen px-3'>
            <h2 className='text-2xl text-blue-500 font-bold py-3'>Total Students: {students?.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Student Id</th>
        <th>Address</th>
        <th>Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
        students.map(student => <tr key={student._id} className="hover">
        <th>{student.name}</th>
        <td>{student.age}</td>
        <td>{student.student_id}</td>
        <td>{student.address}</td>
        <td>{student.number}</td>
        <td> 
            <Link to={`/student/${student._id}`}> <button className='btn btn-sm btn-success'>Edit</button> </Link>
        </td>
        <td> <button onClick={()=> handleDelete(student._id)} className='btn btn-sm btn-error'>Delete</button> </td>
      </tr> )
     }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Students;