"use client";

import { useEffect, useState } from "react";
import Character from "../components/character";
const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
  const [index, setIndex] = useState(1);
  //   const listOfUrls = [];

  //   for (let i = 1; i <= 100; i++) {
  //     listOfUrls.push();
  //   }

  function subir() {
    setIndex(index + 1)
  }

  function bajar() {
    setIndex(index == 1 ? 1 : index - 1)
  }

  return (
    <>
      <div className="flex justify-center">
        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"></img>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="number"
          min="1"
          max="10"
          className="border text-xl bg-cyan-50 mx-20 rounded-lg my-10"
          placeholder={`${index}`}
          onChange={(e) => {
            setIndex(e.target.value === "" ? 1 : parseInt(e.target.value, 10))
            //setIndex( e === "" ? 1 : parseInt(e.target.value, 10) );
          }}
        /* onChange={(e) => {
            const value = Number(e.target.value)
            setIndex(value > 0 ? value : 1)
            //setIndex( e === "" ? 1 : parseInt(e.target.value, 10) );
        }} */
        />
        <div className="flex justify-center mb-10">
          <button className="text-3xl mx-20" onClick={bajar}>⬅️</button>
          <button className="text-3xl mx-20" onClick={subir}>➡️</button>
        </div>
        <div className="flex justify-center">
          <Character className="" url={`${API_BASE_URL}/characters/${index}`}></Character>
        </div>
      </div>
    </>
  );
}