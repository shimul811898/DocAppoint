"use client";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const signUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)


    const handleLoginFunc = async (data) => {
        // console.log(data);

        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error)
        if (error) {
            toast.error(error.message || "Sign Up failed");
            return;
        }
        if (res) {
            toast.success("Sign Up successfully");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-5">
            <fieldset className="bg-white shadow-2xl rounded-2xl w-full max-w-sm p-6 space-y-4">


                <div className="text-center space-y-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        DocAppoint
                    </h1>

                    <p className="text-sm text-gray-600 font-medium">
                        Sign Up to your account
                    </p>
                </div>


                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(handleLoginFunc)}
                >


                    <div>
                        <label className="text-sm font-medium">Your Name</label>

                        <input
                            type="text"
                            placeholder="Type Your Name"
                            className="input w-full border-none rounded-xl shadow"
                            {...register("name", {
                                required: "name is required",
                            })}
                        />

                        <p className="text-sm text-red-500 mt-1">
                            {errors.name?.message}
                        </p>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Photo Url</label>

                        <input
                            type="text"
                            placeholder="Type Your Photo Url"
                            className="input w-full border-none rounded-xl shadow"
                            {...register("photo", {
                                required: "photo Url is required",
                            })}
                        />

                        <p className="text-sm text-red-500 mt-1">
                            {errors.photo?.message}
                        </p>
                    </div>
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
                            {errors.password?.message}
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
                        Register
                    </button>
                </form>

            </fieldset>
        </div>
    );
};

export default signUpPage;