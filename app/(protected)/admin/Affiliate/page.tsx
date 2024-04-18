import { currentUser } from "@/lib/auth";
import AffiliateTable from "@/components/admin/affiliate/AffiliateTable";
import { Button } from "@/components/ui/button";

const data = [
  {
    name: "String",
    id: "String",
    group: "String",
    username: "String",
    paid: 5,
    unpaid: 3,
    rate: 53,
    paidRef: 42,
    unpaidRef: 53,
    visits: 6734,
    status: true
  }
];

const Affiliate = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Admin Affiliate</div>
      <div className="space-x-2">
        <Button>Add new</Button>
        <Button>Manage group</Button>
        <Button>Manage groups</Button>
        <Button>Reports</Button>
      </div>

      <div>
        <AffiliateTable data={data} />
      </div>
    </div>
  );
};

export default Affiliate;
