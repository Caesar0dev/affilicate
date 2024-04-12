import PayoutTable from "@/components/payouts/PayoutTable";
import { currentUser } from "@/lib/auth";

const payout = [
  {
    date: new Date(),
    amount: 35,
    method: "sdk",
    status: "string"
  }
];

const Payouts = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Payouts</div>

      <div>
        <PayoutTable data={payout} />
      </div>
    </div>
  );
};

export default Payouts;
