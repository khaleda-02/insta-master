import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, resetError } from "../../features/auth/authSlice";
import { Input, Navbar } from "../../components/";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/", { replace: true });
      });

    emailRef.current.value = null;
    passwordRef.current.value = null;
  };
  useEffect(() => {
    dispatch(resetError());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-full h-[92vh]">
        {/* form container */}
        <div className="w-full md:min-h-[92vh] flex items-center justify-center ">
          {/*form div */}
          <div className=" w-full md:w-[80%] lg:w-[60%] mx-auto bg-white h-[100%] md:h-fit overflow-scroll md:rounded-3xl py-9 px-9">
            {/* heading */}
            <h2 className="text-center capitalize font-extrabold text-6xl my-4 text-black">
              Login Page
            </h2>
            <p className="text-center capitalize my-4 text-2xl text-gray-black">
              hey , enter your details to get sign in to your account .
            </p>

            {/* from */}
            <div className="flex flex-col w-full md:flex-row items-center justify-center my-4">
              <form
                onSubmit={formHandler}
                className="relative w-full md:w-[80]md:mx-auto lg:w-[40%] "
              >
                <Input
                  title="email"
                  type="email"
                  placeholder="type your email"
                  reference={emailRef}
                />
                <Input
                  title="password"
                  type="password"
                  placeholder="type your password"
                  reference={passwordRef}
                />
                <button
                  className="btn btn-primary bg-gray-black text-white w-full capitalize my-2 text-lg hover:bg-gray"
                  disabled={isLoading}
                >
                  signIn
                </button>
                <div className="w-full flex justify-between items-center ">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text capitalize ">
                        Remember me
                      </span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked((pre) => !pre)}
                        className="checkbox border-black w-[16px] h-[16px] mx-1 rounded-md"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text capitalize  ">
                        <Link
                          to="/"
                          className="hover:pb-[1px] border-b-2 border-solid border-gray-200"
                        >
                          forgot password
                        </Link>
                      </span>
                    </label>
                  </div>
                </div>
                <p className="text-red-600 absolute bottom-[-20px] left-0 ">
                  {error}{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
