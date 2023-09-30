import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changLang } from "../Redux/changeLang";

function Navbar() {
  const cnt = useSelector((state)=>state.count)
  // console.log(cnt)
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const dispatch = useDispatch()
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    dispatch(changLang(selectedLanguage))
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link " to="/">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              Favorites 
            <span className="text-light mr-1 bg-dark">{cnt}</span> 
            </Link>
          </li>
        </ul>

      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="EN">English (EN)</option>
        <option value="AR">Arabic (AR)</option>
      </select>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
