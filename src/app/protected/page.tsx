import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="items-center justify-center p-4">
      <h1>Protected Page</h1>
      <p>Welcome to the protected content!</p>
    </div>
  );
}
