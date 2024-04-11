import { currentUser } from "@/lib/auth";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const activity = [
  {
    reference: 23945,
    amount: 304.8,
    description: "My Test Product 1",
    status: "unpaid",
    date: new Date()
  },
  {
    reference: 234.41,
    amount: 521.45,
    description: "My Test Product 2",
    status: "unpaid",
    date: new Date()
  },
  {
    reference: 4895,
    amount: 531.041,
    description: "My Test Product 3",
    status: "unpaid",
    date: new Date()
  }
];

const Statistics = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Statistics</div>

      <div className="space-y-8 divide-y">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="text-xl font-medium">Referral URL</div>
            <p className="text-sm">Share your referral URL with your audience to earn commission.</p>
          </div>
          <div className="col-span-2">
            <Card className="">
              <CardHeader>
                <Input type="text" defaultValue={"http://localhost/"} />
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="col-span-1">
            <div className="text-xl font-medium">Referral URL generator</div>
            <p className="text-sm">Use this form to generate a referral link.</p>
          </div>
          <div className="col-span-2">
            <Card className="h-full">
              <CardHeader className="space-y-6">
                <div className="space-y-1">
                  <div className="font-bold">Page URL</div>
                  <Input type="text" defaultValue={"http://localhost/"} />
                </div>
                <div className="space-y-1">
                  <div className="font-bold">Campaign name</div>
                  <p className="text-sm">Enter an optional campaign name to help track performance.</p>
                  <Input type="text" defaultValue={"http://localhost/"} />
                </div>
                <div className="space-y-1">
                  <div className="font-bold">Generated referral URL</div>
                  <p className="text-sm">Share this URL with your audience.</p>
                  <Input type="text" defaultValue={"http://localhost/"} />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
