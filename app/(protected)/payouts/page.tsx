"use client";
import { currentUser } from "@/lib/auth";

const Graphs = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Payouts</div>

      <div>Payout Table</div>
    </div>
  );
};

export default Graphs;
