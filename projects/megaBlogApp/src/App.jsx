import "./App.css";
import './index.css'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true); // conditional rendering
  const dispatch = useDispatch(); // bring user

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Auth check failed:", error);
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400 ">
        <div className="w-full block">
          <Header />
          <main>{/* <Outlet /> */}</main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
