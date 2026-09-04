import {auth} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  await auth.protect()
  
  const { sessionClaims } = await auth();

  if(sessionClaims?.metadata.role !== 'student'){
    return redirect("/teacher");
  }
  return (
    <>
      <h1>Chat Estudante</h1>
    </>
  )
}
