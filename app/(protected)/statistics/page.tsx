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
    amount: "0%"
  },
  {
    title: "Unpaid referrals",
    amount: "$100"
  },
  {
    title: "Unpaid referrals",
    amount: 0
  }
];

const campaign = [
  {
    campaign: "Campaign 1",
    visits: 3842,
    links: "links",
    convert: "convert",
    conversion: "rate"
  },
  {
    campaign: "Campaign 2",
    visits: 6352,
    links: "links",
    convert: "convert3",
    conversion: "rate43"
  },
  {
    campaign: "Campaign 3",
    visits: 9438,
    links: "links 3",
    convert: "convert 3",
    conversion: "rating"
  }
];

const Statistics = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Statistics</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
