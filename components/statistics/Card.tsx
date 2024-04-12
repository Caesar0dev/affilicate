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
    <div className="bg-gray-50 p-6 rounded-lg overflow-hidden shadow-md">
      <p className="text-gray-500 font-medium">{title}</p>
      <p className="text-3xl font-bold">{amount}</p>
    </div>
  );
}
