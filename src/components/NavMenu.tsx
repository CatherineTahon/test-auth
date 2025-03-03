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
            className="mt-2 text-black px-4 py-2 rounded-full"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <p className="font-semibold text-lg">Not signed in</p>
          <button
            onClick={() => signIn()}
            className="mt-2 text-black px-4 py-2 rounded-full"
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
      <hr className="my-4 w-full max-w-[400px] border-t-2 border-gray-300" />
      <ul className="flex flex-col gap-2">
        <Link href="/">
          <li className={`text-lg ${pathname === '/' ? 'font-semibold text-blue-600' : 'text-gray-700'}`}>
            Home
          </li>
        </Link>
        <Link href="/protected">
          <li className={`text-lg ${pathname === '/protected' ? 'font-semibold text-blue-600' : 'text-gray-700'}`}>
            Protected Route
          </li>
        </Link>
      </ul>
    </div>
  );
}
