"use client";
import { redirect } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Page() {
  const user = useCurrentUser();
  user?.role === "ADMIN" ? redirect("/admin") : redirect("/home");
}
