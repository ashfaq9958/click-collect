import { useEffect } from "react";
import signupImg from "../../assets/signup/img_2.jpg";
import logo from "../../assets/bg_logo.png";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";
import signupSchema from "../Schema/Signup/Signup";
import { signUpThunk } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      navigate("/signin");
    }
  }, [isSuccess, navigate]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    debugger;
    dispatch(signUpThunk(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, getFieldProps, isSubmitting, touched, errors }) => (
        <div className="h-screen flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left section with gradient background */}
          <div className="w-full lg:w-[60%] h-full bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col">
            <div className="flex items-center justify-center lg:justify-start mb-0">
              <Link to="/signin">
                <img
                  src={logo}
                  alt="logo"
                  className="w-28 lg:w-32 object-contain drop-shadow-lg"
                />
              </Link>
            </div>

            <div className="max-w-md mx-auto w-full flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#ff5e38] mb-2 text-center lg:text-left">
                Let's Create Your Account
              </h1>
              <p className="text-gray-600 mb-4 text-center lg:text-left">
                Join us for a seamless shopping experience!
              </p>

              <form className="space-y-6 md:p-0 p-5" onSubmit={handleSubmit}>
                {[
                  { label: "User Name", type: "text", name: "username" },
                  { label: "Email Address", type: "email", name: "email" },
                  { label: "Password", type: "password", name: "password" },
                  {
                    label: "Confirm Password",
                    type: "password",
                    name: "confirmPassword",
                  },
                ].map((field) => (
                  <Input
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    {...getFieldProps(field.name)}
                    error={touched[field.name] && errors[field.name]}
                  />
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#FF5E38] to-[#ff7e60] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl duration-300 hover:bg-black transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5E38]"
                >
                  {isSubmitting ? "Please wait..." : "Sign Up"}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-[#ff5e38] font-medium hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Right section with signup image */}
          <div className="hidden lg:block w-[40%] h-full">
            <img
              src={signupImg}
              alt="Sign Up"
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
