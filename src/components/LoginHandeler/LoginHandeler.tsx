"use client"
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
export default function LoginHandeler(){

  const {data,status} = useSession();

  if(status === "loading"){
    return <p>Loading...</p>;
  }
  if(status === "unauthenticated"){
    return <Link href="/login">Login</Link>;
  }

  return (
    <>
       { data?.user && <p>{data.user.name}</p>}
        <button onClick={()=>signOut()}>Logout</button>
    </>
  );
}