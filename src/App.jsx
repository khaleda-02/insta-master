/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import {
  CalendarPage,
  CreatePostPage,
  LandingPage,
  LoginPage,
  ManagementPage,
  NotFoundPage,
  RegisterPage,
} from "./pages";
import { isAuth } from "./features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
// import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  console.log("token", Cookies.get("token"));
  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);

  return (
    <div className="App bg-black min-h-[100vh] ">
      <Routes>
        //* LandingPage
        <Route path="/" element={<LandingPage />} />
        //* auth pages
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        //* Protected dashboards pages
        <Route
          path="/dashboard/create"
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/calendar"
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/management"
          element={
            <ProtectedRoute>
              <ManagementPage />
            </ProtectedRoute>
          }
        />
        //* not found
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
