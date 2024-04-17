import { currentUser } from "@/lib/auth";
import Table from "@/components/admin/affiliate/Table";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">admin affiliate</div>

      <div>{}</div>
    </div>
  );
};

export default Creatives;
