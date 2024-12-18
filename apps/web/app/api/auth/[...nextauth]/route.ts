import NextAuth from "next-auth"
import nextAuthOptions from "../../../../../../packages/utils/nextAuthOptions"

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST }