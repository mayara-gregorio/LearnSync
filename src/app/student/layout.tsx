import { auth } from "@clerk/nextjs/server";

export default async function StudentLayout({ children }: LayoutProps<"/">) {
  
  await auth.protect()
  
  return (
    <>{children}</>
  );
}
