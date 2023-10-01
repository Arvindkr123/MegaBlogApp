import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally((error) => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="h-screen flex flex-wrap items-center justify-between bg-gray-400">
      <div className="w-full block text-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading.....</div>
  );
}

export default App;
