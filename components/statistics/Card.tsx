import { FC } from "react";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx/lite";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

interface Card1Type {
  title: string;
  amount: number | string;
}

export default function Card({ title, amount }: Card1Type) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg overflow-hidden shadow-md">
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  );
}
