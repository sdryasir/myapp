import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Header() {
  const {contactReducer} = useSelector(state=>state);
  return <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products API</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-primary position-relative">
                Total
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {contactReducer.contacts.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}