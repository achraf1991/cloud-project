import React from "react";
import { Link } from "react-router-dom";
// import { Input} from "reactstrap";
// import handle from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="img_logo " src="logo1.png" alt="logo1" />
      <ul>
        {/* <link to="/Logo"><li>Logo</li></link> */}

        <Link to="/">
          {" "}
          <li>
            <i>Home</i>
          </li>{" "}
        </Link>
        <Link to="Produits">
          <li>
            <i>Produits</i>
          </li>
        </Link>
        <Link to="Contact">
          <li>
            <i>Contact</i>
          </li>
        </Link>
        <Link to="Login">
          <li>
            <i>Login</i>
          </li>
        </Link>
        <Link to="Search">
          <li>
            <i>Search</i>
          </li>
        </Link>

        {/* <Link to ="Search"><li><i>Search</i> <Input
          type="text"
          placeholder="enter the title you search..."
          onChange={handle}
        /></li></Link> */}
      </ul>
    </div>
  );
};

export default NavBar;
