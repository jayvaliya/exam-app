// app/page.tsx

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]/options";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div>
      session: {JSON.stringify(session)}
      <Toaster />
    </div>
  );
}
