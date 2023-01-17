import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const navigate = useNavigate();
    const student = useLoaderData();
    const {name,age, student_id, address,number} = student;

    const handleEdit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const id = form.id.value;
        const address = form.address.value;
        const number = form.number.value;
        console.log(name,age,  number,address,id);
 
         const studentBio = {
             name,
             age,
             student_id:id,
             address,
             number,
         }
        fetch(`https://study-room-server.vercel.app/student/${student._id}`,{
            method: 'POST',
            headers:{
                "content-type": "application/json" 
            },
            body: JSON.stringify(studentBio)

        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         alert("student bio updated")
         navigate('/student')

        })

    }
    return (
        <div className="max-w-[600px] mx-auto py-24">
           <h2 className="text-blue-600 text-3xl text-center font-bold uppercase py-5">update Student</h2>
        <form onSubmit={handleEdit}>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Student Name</span></label>
            <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full " required/>
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Age</span></label>
            <input type="number" name="age" defaultValue={age} placeholder="Type here" className="input input-bordered w-full " required/>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Student Id</span></label>
            <input type="text" name="id" defaultValue={student_id} placeholder="Type here" className="input input-bordered w-full " required/>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Address</span></label>
            <input type="address" name="address" defaultValue={address} placeholder="Type here" className="input input-bordered w-ful " required/>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Parent Number</span></label>
            <input type="number" name="number" defaultValue={number} placeholder="Type here" className="input input-bordered w-ful " required/>
          </div>
          <button type="submit" className="btn bg-[#2f4e6c] w-full mt-3 border-none">Update</button>
        </form>
      </div>
    );
};

export default EditStudent;