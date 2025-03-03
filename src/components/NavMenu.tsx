"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();

  return (
    <div className="text-center mb-4">
      {session ? (
        <>
          <p className="font-bold text-lg">Welcome, {session?.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mt-2 text-black rounded-full"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <p className="font-semibold text-lg">Not signed in</p>
          <button
            onClick={() => signIn()}
            className="mt-2 text-black rounded-full"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center">
      <AuthButton />
      <hr />
      <ul className="flex flex-col gap-2">
        <Link href="/">
          <li>
            Home
          </li>
        </Link>
        <Link href="/protected">
          <li>
            Protected Route
          </li>
        </Link>
      </ul>
    </div>
  );
}
