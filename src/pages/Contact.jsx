import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addToContacts, deleteContact } from '../redux/contactReducer';
import localAvatr from '../assets/local_avatar.png';

function Contact() {

const dispatch = useDispatch();

const {contactReducer} = useSelector(state=>state)
const [preview, setPreview] = useState(undefined)

  const notify = () => toast("Contact has been saved!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const notify1 = () => toast("Are you sure to delete this", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  

  const {handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues:{
      fullname:'',
      email:'',
      contact:'',
      avatar:''
    },
    validationSchema:Yup.object({
      fullname: Yup.string().min(4, 'Please provide atleaset 4 characters').max(15, 'Please provide 15 character at max').required('please fill fullname').trim(),
      email: Yup.string().required('please fill email').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email').trim(),
      contact: Yup.string().matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm, 'Please provide the valid Phone Number (+92xxxxxxxxxxx)').required('please fill contact').trim(),
      avatar:Yup.string()
    }),
    onSubmit:(vals)=>{

      let newContact = {
        ...vals,
        id:Date.now()
      }

      console.log(newContact);

      dispatch(addToContacts(newContact));
      notify();
    }
  });

  const handleDelete = (id)=>{
    dispatch(deleteContact(id));
    notify1();
  }

  const handleImageChange = (event) =>{


    const reader = new FileReader();

    reader.onload = (e)=>{
      if(reader.readyState == 2){
        // console.log(reader.result);
        setPreview(reader.result);
        setFieldValue('avatar', reader.result);
      }
    }

    reader.readAsDataURL(event.target.files[0]);

  }

  return (
    <div className='container'>
      <form className="row g-3 py-5 w-50" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.fullname} className="form-control" id="fullName" name='fullname' />
          <p className='text-danger'><small>{touched.fullname && errors.fullname ? errors.fullname : null}</small></p>
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control" id="email" name='email' />
          <p className='text-danger'><small>{touched.email && errors.email ?errors.email : null}</small></p>
        </div>
        <div className="col-md-12">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.contact} className="form-control" id="contact" name='contact' />
          <p className='text-danger'><small>{touched.contact && errors.contact ? errors.contact: null}</small></p>
        </div>
        <div className="col-md-6">
          <label htmlFor="avatar" className="form-label">Contact</label>
          <input type="file" onChange={(e)=>handleImageChange(e)}  className="form-control" id="avatar" name='avatar' />          
        </div>
        <div className="col-md-6">
          <img style={{width:'100px', height:'100px', borderRadius:'50%', objectFit:'cover'}} src={preview ? preview : localAvatr} alt="" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add a Contact</button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {

          contactReducer.contacts.length < 1 ? <tr><td><p>No Data Found...</p></td></tr> :
          contactReducer.contacts.map((c, idx)=><tr key={idx}>
            <th scope="row">{idx+1}</th>
            <td><img style={{width:'30px', height:'30px', borderRadius:'50%', objectFit:'cover'}} src={c.avatar ? c.avatar : localAvatr} alt="" /></td>
            <td>{c.fullname}</td>
            <td>{c.email}</td>
            <td>{c.contact}</td>
            <td>
              <button className='btn btn-danger me-2' onClick={()=>handleDelete(c.id)}><i className="bi bi-trash"></i></button>
              <Link to={`/edit/${c.id}`} className='btn btn-warning me-2'><i className="bi bi-pencil-square"></i></Link>
              <a href={`tel:${c.contact}`} className='btn btn-success me-2'><i className="bi bi-telephone-forward"></i></a>
            </td>
          </tr>)
            
          }
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  )
}

export default Contact



