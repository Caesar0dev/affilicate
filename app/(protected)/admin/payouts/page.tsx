import { currentUser } from "@/lib/auth";
import PayoutTable from "@/components/admin/payout/PayoutTable";

const data = [
  {
    id: " String",
    amount: 64,
    affiliate: "String",
    referrals: "String",
    generated: "String",
    method: "String",
    account: "String",
    status: false,
    date: new Date(),
    action: "true"
  }
];

const Payout = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Payout</div>

      <div>
        <PayoutTable data={data} />
      </div>
    </div>
  );
};

export default Payout;
