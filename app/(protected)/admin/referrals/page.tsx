import { currentUser } from "@/lib/auth";
import ReferralsTable from "@/components/admin/referrals/ReferralTable";

const Referrals = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Referrals</div>

      <div>
        <div>No admin Refferals found.</div>
      </div>
    </div>
  );
};

export default Referrals;
