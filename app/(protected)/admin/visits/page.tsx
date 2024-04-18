import { currentUser } from "@/lib/auth";
import VisitTable from "@/components/admin/visits/VisitsTable";

const data = [
  {
    url: "http://localhost",
    ref: "reference url",
    convert: "convert",
    date: new Date()
  }
];

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">admin visits</div>

      <div>
        <VisitTable data={data} />
      </div>
    </div>
  );
};

export default Creatives;
