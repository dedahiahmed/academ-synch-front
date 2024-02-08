"use client";
import React from "react";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

export default function SignIn() {
  const methods = useForm<login>({ mode: "all" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = methods;
  const onSubmit = async (data: login) => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to sign in");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form
            className="h-[25rem] space-y-6 bg-white shadow-md rounded px-8 pt-[2rem] pb-8 mb-4"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="top-0 left-0">
              <Image
                alt=""
                src="assets/academ.svg"
                quality={100}
                width={50}
                height={50}
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}