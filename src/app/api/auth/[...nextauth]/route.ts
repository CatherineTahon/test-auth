import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
console.log("GitHub ID:", process.env.GITHUB_ID);
console.log("GitHub Secret:", process.env.GITHUB_SECRET);

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };