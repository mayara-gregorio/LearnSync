import { auth } from "@clerk/nextjs/server";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  
  await auth.protect()
  
  return (
    <>{children}</>
  );
}
