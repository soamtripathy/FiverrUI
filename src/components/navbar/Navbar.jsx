// import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    usrname: "John Doe",
    isSeller: true,
  };
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
          {currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user">
              <img
                src="https://media.istockphoto.com/id/1404932505/photo/gold-lowercase-letter-s.webp?s=1024x1024&w=is&k=20&c=Yt0GAWwfG_2blYnCY5fJENFCNaapJ4eLtbdzif0B3OQ="
                alt=""
              />
              <span>{currentUser?.username}</span>
              <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <span>Gigs</span>
                    <span>Add New Gigs</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Log out</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {active && (
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
