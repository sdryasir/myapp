import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditContact() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        fullname: '',
        email: '',
    });

    useEffect(()=>{
        let contacts = JSON.parse(localStorage.getItem('contact'));
        let con = contacts.find((c)=>c.id == id);
        setContact(con)
    }, [])


    


      const handleUpdate = (e)=>{
        e.preventDefault();
        let contactArr = JSON.parse(localStorage.getItem('contact'));
        const filteredArr = contactArr.filter((c)=>c.id != id);

        let updatedArr = [...filteredArr, contact];
        localStorage.setItem('contact', JSON.stringify(updatedArr));
        navigate('/contact');

      }


  return (
    <div className='container'>
        <form className="row g-3 py-5 w-50" onSubmit={handleUpdate}>
        <div className="col-md-12">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" onChange={(event) => setContact({ ...contact, fullname: event.target.value })} value={contact.fullname} className="form-control" id="fullName" />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" onChange={(event) => setContact({ ...contact, email: event.target.value })} value={contact.email} className="form-control" id="email" />
        </div>
        <div className="col-md-12">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="text" onChange={(event) => setContact({ ...contact, contact: event.target.value })} value={contact.contact} className="form-control" id="email" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Update Contact</button>
        </div>
      </form>
    </div>
  )
}

export default EditContact