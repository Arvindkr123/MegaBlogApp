import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await authService.logOut();
    dispatch(logout());
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full"
      onClick={logoutHandler}
    >
      logout
    </button>
  );
};

export default LogoutBtn;
