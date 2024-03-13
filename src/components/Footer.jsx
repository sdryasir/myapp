import { useSelector } from "react-redux";
export default function Footer() {
  const {depositReducer} = useSelector(state=>state);
  return <footer>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-text">
          Designed By: STICS, Instructor Yasir Ali {depositReducer.value}
        </span>
      </div>
    </nav>
  </footer>
}