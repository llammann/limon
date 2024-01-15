"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

import app from "@/app/firebase/config";
export default function Authors() {
  const [data, setData] = useState<
    {
      birthYear: number;
      genre: string;
      gender: string;
      name: string;
      image: string;
    }[]
  >([]);

  const getRealTimeOnValueDB = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "authors/");
    onValue(starCountRef, (snapshot) => {
      const authors = snapshot.val();
      console.log("authors", authors);
      setData(authors);
      console.log("data", data);
      console.log("snapshot", snapshot.val());
    });
  };

  useEffect(() => {
    getRealTimeOnValueDB();
  }, []);

  return (
    <>
      <h1>Authors page</h1>
      <ul>
        {data &&
          data.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })}
      </ul>
    </>
  );
}
