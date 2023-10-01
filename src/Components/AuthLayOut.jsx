import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayOut = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state?.auth?.status);
  console.log(authStatus);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus == !authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authentication, authStatus]);
  return loader ? <h1>loading....</h1> : <>{children}</>;
};

export default AuthLayOut;
