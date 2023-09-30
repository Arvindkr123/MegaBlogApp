import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const authStatus = useSelector((state) => state?.auth?.status);
  const naviagate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "SignUp", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex items-center">
          <div>
            <Link to={"/"}>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="mx-5">
                  <button onClick={() => naviagate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : (
                "null"
              )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
