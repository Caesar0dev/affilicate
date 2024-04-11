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

const Urls = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Affiliate URLs</div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div>Referral URL</div>
          <div>Share your referral URL with your audience to earn commission.</div>
        </div>
        {/* <div className="col-span-2">
          <Card className="h-full">
            <CardHeader>
              <Input type="text" defaultValue={"http://localhost/"} />
            </CardHeader>
          </Card>
        </div> */}
      </div>

      {/* <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div>Referral URL generator</div>
          <div>Use this form to generate a referral link.</div>
        </div>
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader>
              <Input type="text" defaultValue={"http://localhost/"} />
            </CardHeader>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default Urls;
