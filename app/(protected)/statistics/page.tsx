import { currentUser } from "@/lib/auth";
import Card from "@/components/statistics/Card";

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

const Statistics = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Statistics</div>

      <div className="grid grid-cols-4 gap-8">
        {statistics.map((data, i) => (
          <Card title={data.title} amount={data.amount} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
