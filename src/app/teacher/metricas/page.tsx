import {auth} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  await auth.protect()
  const { sessionClaims } = await auth();

  if(sessionClaims?.metadata.role !== 'teacher'){
    return redirect("/student");
  }

  return (
    <>
      <h1>Métricas</h1>
    </>
  );
}
