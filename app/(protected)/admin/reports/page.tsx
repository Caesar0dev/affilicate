import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
import { currentUser } from "@/lib/auth";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Reports</div>

      <div className="space-y-6">
        <div className="p-4 border space-y-2">
          <h6 className="font-medium">Export Affiliate</h6>
          <p className="text-sm !mt-6">Export affiliates to a CSV file.</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <div>
            <Button variant="outline">Export</Button>
          </div>
        </div>

        <div>
          <h6></h6>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
