import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {
    const {signInUser,googleLogin} = useContext(AuthContext)
    const [passwordVisible, setPasswordVisible] = useState(false);
  //  useform hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
       
      })
      .catch(error => {
        console.log(error);
      });
  };

//   google login functionlity
const handleGoggle = () =>{
    googleLogin()
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>{
        console.log(error.message);
    })
}

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10 mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xl font-semibold" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            className="input input-bordered w-full mt-2"
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            required
          />
             {errors.email && <span className="text-lg  text-red-800">This field is required</span>}
          <br />
          <br />

          <div className="relative">
            <label className="text-xl font-semibold" htmlFor="password">Password</label> <br />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Write Your Password"
              className="input input-bordered w-full mt-2"
              {...register("password", { required: true })}
            />
            <span className="absolute right-3 top-12 cursor-pointer" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <span className="text-lg  text-red-800">This field is required</span>}
          </div>
          <br />

          <input
            className="bg-purple-900 text-white rounded py-2 w-full mt-4"
            type="submit"
            value="Login"
          />
        </form>

        <p className="my-4 text-lg">
          If you do not register? please{" "}
          <Link
            className="text-blue-800 underline font-semibold"
            to="/register"
          >
            Register
          </Link>
        </p>
        <button className="btn btn-accent" onClick={handleGoggle}>Google</button>
      </div>
    
    </div>
  );
};

export default Login;
