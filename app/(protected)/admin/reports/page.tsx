import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
import DatePicker from "@/components/ui/datePicker";
import { currentUser } from "@/lib/auth";

const Creatives = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Reports</div>

      <div className="space-y-10 [&>div]:p-4 [&>div]:border [&>div]:space-y-2 [&>div]:shadow-md">
        <div>
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
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        <div>
          <h6>Export Referrals</h6>
          <p className="text-sm !mt-6">Export referrals to a CSV file.</p>
          <div className="grid grid-cols-4 gap-x-4">
            <Input placeholder="Affiliate name" />
            <DatePicker />
            <DatePicker />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Processing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p>
            To search for an affiliate, enter the affiliate's login name, first name, or last name. Leave blank to
            export payouts for all affiliates.
          </p>
          <div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        <div>
          <h6>Export Payouts</h6>
          <p className="text-sm !mt-6">Export payouts to a CSV file.</p>
          <div className="grid grid-cols-4 gap-x-4">
            <Input placeholder="Affiliate name" />
            <DatePicker />
            <DatePicker />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Processing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p>
            To search for an affiliate, enter the affiliate's login name, first name, or last name. Leave blank to
            export payouts for all affiliates.
          </p>
          <div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        <div>
          <h6>Export Visits</h6>
          <p className="text-sm !mt-6">Export visits to a CSV file.</p>
          <div className="grid grid-cols-4 gap-x-4">
            <Input placeholder="Affiliate name" />
            <DatePicker />
            <DatePicker />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Processing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p>
            To search for an affiliate, enter the affiliate’s login name, first name, or last name. Leave blank to
            export visits for all affiliates.
          </p>
          <div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        <div>
          <h6>Export Settings</h6>
          <p className="text-sm !mt-6">
            Export the AffiliateWP settings for this site as a .json file. This allows you to easily import the
            configuration into another site.
          </p>
          <div>
            <Button variant="outline" size="sm">
              Import
            </Button>
          </div>
        </div>

        <div>
          <h6>Import Settings</h6>
          <p className="text-sm !mt-6">
            Import the AffiliateWP settings from a .json file. This file can be obtained by exporting the settings on
            another site using the form above.
          </p>
          <Input type="file" className="w-40" />
          <div>
            <Button variant="outline" size="sm">
              Import
            </Button>
          </div>
        </div>

        <div>
          <h6>Import Affiliates</h6>
          <p className="text-sm !mt-6">Import a CSV of affiliate records.</p>
          <Input type="file" className="w-40" />
          <div>
            <Button variant="outline" size="sm">
              Import CSV
            </Button>
          </div>
        </div>

        <div>
          <h6>Import Referrals</h6>
          <p className="text-sm !mt-6">Import a CSV of referral records.</p>
          <Input type="file" className="w-40" />
        </div>
      </div>
    </div>
  );
};

export default Creatives;
