"use client";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLoginFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Login failed");
            return;
        }
        if (res) {
            toast.success("Login successfully");
        }
    };

    const handleGoogleSignin = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            console.log(data, "data")

            toast.success("Google login successful");

            console.log(data, "data");
        }
        catch (error) {
            toast.error("Google login failed");
            console.log(error);
        }


    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <fieldset className="bg-white shadow-2xl rounded-2xl w-full max-w-sm p-6 space-y-4">


                <div className="text-center space-y-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        DocAppoint
                    </h1>

                    <p className="text-sm text-gray-600 font-medium">
                        Login to your account
                    </p>
                </div>


                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(handleLoginFunc)}
                >


                    <div>
                        <label className="text-sm font-medium">Email</label>

                        <input
                            type="email"
                            placeholder="Email"
                            className="input w-full border-none rounded-xl shadow"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        <p className="text-sm text-red-500 mt-1">
                            {errors.email?.message}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>

                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input w-full border-none rounded-xl shadow pr-10"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                })}
                            />

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <p className="text-sm text-red-500 mt-1">
                            {errors.password?.required
                            }
                        </p>

                        <p
                            className={`text-xs mt-2 ${errors.password ? "text-red-500" : "text-gray-500"
                                }`}
                        >
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </p>
                    </div>


                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition"
                    >
                        Login
                    </button>
                </form>


                <div className="flex items-center gap-3">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-xs text-gray-500">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>


                <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl shadow hover:scale-105 transition" onClick={handleGoogleSignin} >
                    <Image
                        src="/assets/Google.jpg"
                        alt="Google"
                        width={20}
                        height={20} />

                    <span className="text-sm font-medium">
                        Login with Google
                    </span>
                </button>


                <div className="text-center font-bold">
                    <p>
                        New here?{" "}
                        <Link
                            href="/signup"
                            className="hover:underline hover:text-blue-500"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>

            </fieldset>
        </div>
    );
};

export default LoginPage;