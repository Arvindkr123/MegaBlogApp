import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, AddPost, AllPost, EditPost, Login, Post, SignUp } from "./pages";
import { AuthLayOut } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayOut authentication={false}>
            <Login />
          </AuthLayOut>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayOut authentication={false}>
            <SignUp />
          </AuthLayOut>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayOut authentication>
            <AllPost />
          </AuthLayOut>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayOut authentication>
            <AddPost />
          </AuthLayOut>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayOut>
            <EditPost />
          </AuthLayOut>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
