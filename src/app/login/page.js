"use client";

import { Header } from "@/components/header";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState({
    message: "",
    status: "",
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleSubmitLogin() {
    if (loginData.username === "admin" && loginData.password === "admin") {
      setLoginStatus({ message: "Kamu adalah Admin", status: "success" });
      return;
    }
    setLoginStatus({ message: "Kamu bukan Admin", status: "error" });
  }

  return (
    <div className=" flex flex-col justify-center">
      <Header />
      <div className="flex flex-col items-center justify-center h-[700px]">
        <div className="flex flex-col gap-3 border-2 px-20 py-10 rounded-lg">
          <div>
            <p>Username</p>
            <input name="username" onChange={handleChangeInput} />
          </div>
          <div>
            <p>Password</p>
            <input name="password" onChange={handleChangeInput} />
          </div>
          <button className="w-full" onClick={handleSubmitLogin}>
            Login
          </button>
          <div className="text-center">
            {loginStatus.status === "success" && (
              <div className="text-emerald-300">{loginStatus.message}</div>
            )}
            {loginStatus.status === "error" && (
              <div className="text-rose-300">{loginStatus.message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
