import { useSelector } from "react-redux";
export default function Footer() {
  const {persistedReducer} = useSelector(state=>state);
  return <footer>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-text">
          Designed By: STICS, Instructor Yasir Ali {persistedReducer.depositReducer.value}
        </span>
      </div>
    </nav>
  </footer>
}