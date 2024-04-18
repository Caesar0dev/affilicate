import { currentUser } from "@/lib/auth";
import ReferralsTable from "@/components/admin/referrals/ReferralTable";

const data = [
  {
    id: "ID",
    amount: 291,
    affiliate: "affiliate ads ",
    reference: "reference table",
    description: "desc",
    type: "type of ",
    date: new Date(),
    actions: "Action",
    status: false
  }
];

const Referrals = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Referrals</div>

      <div>
        <ReferralsTable data={data} />
      </div>
    </div>
  );
};

export default Referrals;
