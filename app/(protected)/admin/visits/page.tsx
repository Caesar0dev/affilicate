import { currentUser } from "@/lib/auth";
import VisitTable from "@/components/admin/visits/VisitsTable";

const data = [
  {
    id: "String",
    landing: "Landing",
    url: "https://gooogle.co,",
    ip: "1.2.3.4",
    converted: "Convert",
    refId: "reference",
    affiliate: "affiliate",
    date: new Date()
  }
];

const AdminVisits = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Admin Visits</div>

      <div>
        <VisitTable data={data} />
      </div>
    </div>
  );
};

export default AdminVisits;
