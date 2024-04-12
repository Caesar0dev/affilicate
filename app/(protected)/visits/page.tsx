import VisitsTable from "@/components/visits/VisitsTable";
import { currentUser } from "@/lib/auth";

const visits = [
  {
    url: "http://localhost",
    ref: "reference url",
    convert: "convert",
    date: new Date()
  }
];

const Visits = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Visits</div>

      <div>
        <VisitsTable data={visits} />
      </div>
    </div>
  );
};

export default Visits;
