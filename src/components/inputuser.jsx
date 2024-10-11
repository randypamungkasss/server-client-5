"use client";

import { useState } from "react";

export const FormInputUser = () => {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState("");
  const [user, setUser] = useState([]);

  function handleInput() {
    const list = { nama, umur, gender };
    setUser([...user, list]);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-10">
      <div className="bg-slate-400 flex flex-col gap-2 px-10 py-7 rounded-lg">
        <div>
          <p>Nama</p>
          <input onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <p>Umur</p>
          <input onChange={(e) => setUmur(e.target.value)} />
        </div>
        <div>
          <p>Jenis Kelamin</p>
          <input onChange={(e) => setGender(e.target.value)} />
        </div>
        <button className="w-full" onClick={handleInput}>
          Input
        </button>
      </div>

      <div className="bg-slate-400 flex flex-col gap-2 px-10 py-7 rounded-lg">
        {user.map((item) => {
          return (
            <div key={item.nama} className="w-[400px]">
              <h1 className="font-medium text-xl">User</h1>
              <p>Nama : {item.nama}</p>
              <p>Umur : {item.umur}</p>
              <p>Gender : {item.gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
