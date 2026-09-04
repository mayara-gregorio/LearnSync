import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardStudent() {

  await auth.protect()

  const { sessionClaims } = await auth();

  if(sessionClaims?.metadata.role !== 'student'){
    return redirect("/teacher");
  }

  return (
    <>
      <UserButton/>
      <h1>Dashboard Estudante</h1>
    </>
  );
}
