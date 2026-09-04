import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardTeacher() {

  await auth.protect()

  await auth.protect()
  const { sessionClaims } = await auth();

  if(sessionClaims?.metadata.role !== 'teacher'){
    return redirect("/student");
  }
  
  return (
    <>
      <UserButton/>
      <h1>Dashboard Professor</h1>
    </>
  );
}
