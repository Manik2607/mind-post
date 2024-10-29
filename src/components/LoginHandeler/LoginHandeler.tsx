"use client"
import Link from "next/link";
import { useState } from "react";

export default function LoginHandeler(){

  const [authanticated,setAuthanticated] = useState(false);
  if(!authanticated){
    return <Link href="/login">Login handler</Link>;
  }
  return (
    <>
        <Link href="/login">Logout</Link>
    </>
  );
}