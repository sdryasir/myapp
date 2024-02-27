import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const [contact, setContact] = useState({
    fullname: '',
    email: '',
  });

  const [contacts, setContacts] = useState([]);

  const notify = () => toast("Contact has been saved!");

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.push(contact);
    localStorage.setItem('contact', JSON.stringify(contacts));
    notify();
    setContact({
      fullname: '',
      email: '',
    })

  }

  useEffect(() => {
    let storedContacts = localStorage.getItem('contact');
    storedContacts = JSON.parse(storedContacts);
    if (storedContacts != null) {
      setContacts(storedContacts);
    }
  }, []);


  return (
    <div className='container'>
      <form className="row g-3 py-5 w-50" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" onChange={(event) => setContact({ ...contact, fullname: event.target.value })} value={contact.fullname} className="form-control" id="fullName" />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" onChange={(event) => setContact({ ...contact, email: event.target.value })} value={contact.email} className="form-control" id="email" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Send a Message</button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {

          contacts.length < 1 ? <tr><td><p>No Data Found...</p></td></tr> :
          contacts.map((c, idx)=><tr key={idx}>
            <th scope="row">{idx+1}</th>
            <td>{c.fullname}</td>
            <td>{c.email}</td>
            <td>
              <button className='btn btn-danger me-2'><i className="bi bi-trash"></i></button>
              <button className='btn btn-warning me-2'><i className="bi bi-pencil-square"></i></button>
              <button className='btn btn-success me-2'><i className="bi bi-telephone-forward"></i></button>
            </td>
          </tr>)
            
          }
        </tbody>
      </table>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Contact

