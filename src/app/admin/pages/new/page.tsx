import { Metadata } from "next";
import ClientPage from "./client-page";

export const dynamic = "force-dynamic";

// Add generateMetadata to help with typing issues
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Create New Page",
  };
}

// Making the function async allows it to satisfy the PageProps type
export default async function Page() {
  // This is a minimal async operation to satisfy the type constraint
  await Promise.resolve();
  return <ClientPage />;
} 