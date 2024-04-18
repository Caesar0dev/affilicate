import { Select } from "@/components/ui/select";
import { currentUser } from "@/lib/auth";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Reports</div>

      <div className="space-y-6">
        <div>
          <h1>Export Affiliate</h1>
          <p>Export affiliates to a CSV file.</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="thisweek">This Week</SelectItem>
              <SelectItem value="lastweek">Last Week</SelectItem>
              <SelectItem value="thismonth">This Month</SelectItem>
              <SelectItem value="lastmonth">Last Month</SelectItem>
              <SelectItem value="thisquarter">This Quarter</SelectItem>
              <SelectItem value="lastquarter">Last Quarter</SelectItem>
              <SelectItem value="thisyear">This Year</SelectItem>
              <SelectItem value="lastyear">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
