"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useState } from "react";

export default function FavColor() {
  const [color, setColor] = useState("");

  return (
    <div>
      <Header />
      <div className=" w-[600px] h-[750px] m-auto flex justify-center items-center">
        <div className="bg-slate-300 flex flex-col justify-center items-center px-20 py-16 rounded-xl gap-5">
          <h1>Warna Favorit Saya adalah {color}</h1>
          <div className="flex gap-2 ">
            <button onClick={(e) => setColor("Red")}>Red</button>
            <button onClick={(e) => setColor("Blue")}>Blue</button>
            <button onClick={(e) => setColor("Green")}>Green</button>
            <button onClick={(e) => setColor("Orange")}>Orange</button>
            <button onClick={(e) => setColor("")}>Reset</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
