import { currentUser } from "@/lib/auth";
import Card from "@/components/statistics/Card";
import CampaignTable from "@/components/statistics/CampaignTable";

const statistics = [
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  },
  {
    title: "Unpaid referrals",
    amount: 0
  }
];

const campaign = [
  {
    campaign: "Campaign",
    visits: 3842,
    links: "links",
    convert: "convert",
    conversion: "rate"
  }
];

const Statistics = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Statistics</div>

      <div className="grid grid-cols-4 gap-x-8 gap-y-12">
        {statistics.map((data, i) => (
          <Card title={data.title} amount={data.amount} />
        ))}
      </div>

      <div>
        <CampaignTable data={campaign} />
      </div>
    </div>
  );
};

export default Statistics;
