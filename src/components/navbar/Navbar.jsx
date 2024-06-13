// import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        {/* <Link to="/"> */}
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        {/* </Link> */}

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      { active && (
        <>
          <hr />
          <div className="menu">
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
            <span>Test1</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
