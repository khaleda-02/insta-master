import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, resetError } from "../../features/auth/authSlice";
import { Input, Navbar } from "../../components/";

const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        navigate("/", { replace: true });
      });

    usernameRef.current.value = null;
    passwordRef.current.value = null;
    emailRef.current.value = null;
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
          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto bg-white h-[100%] md:h-fit overflow-scroll md:rounded-3xl py-9 px-9">
            {/* heading */}
            <h2 className="text-center capitalize font-extrabold text-6xl my-4 text-black">
              Register Page
            </h2>
            <p className="text-center capitalize my-4 text-2xl text-gray-black">
              hey , Welcome to our Auth application .
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
                  title="instagram username"
                  type="text"
                  placeholder="type your user name "
                  reference={usernameRef}
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
                  sign up
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

export default RegisterPage;
