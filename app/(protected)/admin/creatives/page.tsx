import { currentUser } from "@/lib/auth";
import CreativeTable from "@/components/admin/creatives/CreativeTable";

const data = [
  {
    name: "Name",
    id: "ID",
    type: "Type",
    url: "URL",
    categories: "Categories",
    status: true,
    preview: "Preview"
  }
];

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Admin Creatives</div>

      <div>
        <CreativeTable data={data} />
      </div>
    </div>
  );
};

export default Creatives;
