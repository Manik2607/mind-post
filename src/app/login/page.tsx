"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <button className="bg-blue-500 px-5 py-2 rounded-sm" onClick={() => signIn("google")}>
        Continue with Google
      </button>
    </div>
  );
}