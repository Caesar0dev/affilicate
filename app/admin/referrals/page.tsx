import { currentUser } from "@/lib/auth";
import ReferralsTable from "@/components/referrals/ReferralsTable";

const referrals = [
  {
    reference: "referemce",
    amount: 26545,
    description: "SD",
    status: "Paid",
    date: new Date()
  }
];

const Referrals = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Referrals</div>

      <div>
        <ReferralsTable data={referrals} />
      </div>
    </div>
  );
};

export default Referrals;
