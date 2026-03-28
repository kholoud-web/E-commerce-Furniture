import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data) => {
   login(data.email , data.password)   
    navigate("/");
  }
  //   function newFunction() {
  //     const fakeUser = {
  //       name: data.name,
  //       email: data.email,
  //     };
  //     login(fakeUser);
  //   }
  // };

  return (
    <div className="max-w-md mx-auto my-20 p-6 border rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
           <div>
          <input
            type="name"
            placeholder="Name"
            {...register("name")}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button className="w-full bg-black text-white py-2 rounded cursor-pointer">
          Login
        </button>
      </form>
       <p className="mt-6">Dont have account <button onClick={()=>navigate("/register")}
       className="text-blue-600 cursor-pointer"> Register Here </button></p>
    </div>
  );
}
